<?php

use Symfony\Component\Yaml\Yaml;
// https://github.com/justinrainbow/json-schema
use JsonSchema\Validator;
use JsonSchema\Constraints\Constraint;

// Usage:
// <div>Component</div>
//{{ validate_data('@components/hero-schema.json', _self) }}

$function = new \Twig_SimpleFunction('validate_data', function (Twig_Environment $env, $context, $schema_path, $twig_self) {

	$output = '';

	/**
	 * @var \Twig_Template $template
	 * @url https://twig.symfony.com/api/1.x/Twig_Template.html
	 * */
	$template = $env->resolveTemplate($schema_path);

	/**
	 * @var \Twig_Source $source
	 * @url https://twig.symfony.com/api/1.x/Twig_Source.html
	 */
	$source = $template->getSourceContext();

	/** @var string $full_path */
	$full_path = $source->getPath();

	$file_data = [];

	// @todo error handling for no file
	$file_string = file_get_contents($full_path);
	$file_type = pathinfo($full_path)['extension'];

	switch ($file_type) {
		case 'json':
			$file_data = json_decode($file_string);
			break;
		case 'yaml' || 'yml':
			$file_data = Yaml::parse($file_string);
			break;
	}

	$validator = new Validator;
	$validator->validate($context, $file_data, Constraint::CHECK_MODE_TYPE_CAST);

	if (!$validator->isValid()) {
		$messages = [];
		$messages[] = '"' . $twig_self . '" had data validation errors against it\'s schema.';
		foreach ($validator->getErrors() as $error) {
			$messages[] = sprintf("`%s` %s", $error['property'], $error['message']);
		}
		$messages[] = ''; // just a little space
		$message_to_log = join('
', $messages);

		$to_log = [
				'message' => $message_to_log,
				'details' => [
						'data_passed_to_template' => $context,
						'template_path' => $env->resolveTemplate($twig_self)->getSourceContext()->getPath(),
				],
		];

		$output = '
<script type="application/json">' . json_encode($to_log) . '</script>
<script>
	(function () {
		var me = document.currentScript;
		var jsonScriptTag = me.previousElementSibling.innerHTML;
		var data = JSON.parse(jsonScriptTag);
		// assuming component is two elements before this - i.e. run `{{ validate_data() }}` after component
		var component = me.previousElementSibling.previousElementSibling;
		console.error(data.message, data.details, component);
	})();
</script>
	';
	}

	return $output;
}, [
		'needs_environment' => true,
		'needs_context' => true,
		'is_safe' => ['html'],
]);

?>
