<?php

$function = new \Twig_SimpleFunction('meta', function (Twig_Environment $env, $context, $self) {


//  $dereferencer  = \League\JsonReference\Dereferencer::draft4();
//  $schema        = $dereferencer->dereference('http://json-schema.org/draft-04/schema#');


// $env https://twig.symfony.com/api/1.x/Twig_Environment.html

  /**
   * @var \Twig_Template $template
   * @url https://twig.symfony.com/api/1.x/Twig_Template.html
   * */
  $template = $env->resolveTemplate($self);

  /**
   * @var \Twig_Source $source
   * @url https://twig.symfony.com/api/1.x/Twig_Source.html
   */
  $source = $template->getSourceContext();

  /** @var string $full_path */
  $full_path = $source->getPath();
  $path = explode('/source/_patterns/', $full_path)[1];

  $possible_schemas = glob(dirname($full_path) . '/*schema.json');

  $schema = '';
  if (count($possible_schemas) === 1) {
    $schema = file_get_contents($possible_schemas[0]);
//    $validator     = new \League\JsonGuard\Validator($context, $schema);
//    if ($validator->fails()) {
//      $errors = $validator->errors();
//      print('nope');
//    } else {
//      print('yep');
//    }
  }

  $is_debug = $env->isDebug();


  $meta = [
    'path' => $path,
    'schema' => $schema,
    'context' => $context,
  ];


    return json_encode($meta);
//    return 'data-meta=\'' . json_encode($meta) . '\'';
}, [
  'needs_environment' => true,
  'needs_context' => true,
//  'is_safe' => ['html'],
]);

?>
