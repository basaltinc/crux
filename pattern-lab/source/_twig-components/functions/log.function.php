<?php

// Usage:
// <div>Component</div>
//{{ validate_data('@components/hero-schema.json', _self) }}

$function = new \Twig_SimpleFunction('log', function ($context) {

	$to_log = $context;
	$output = '
<script type="application/json">' . json_encode($to_log) . '</script>
<script>
	(function () {
		var me = document.currentScript;
		var jsonScriptTag = me.previousElementSibling.innerHTML;
		var data = JSON.parse(jsonScriptTag);
		console.log(data);
	})();
</script>
	';

	return $output;
}, [
		'needs_context' => true,
//		'is_variadic' => true,
		'is_safe' => ['html'],
]);

?>
