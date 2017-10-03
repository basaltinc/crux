<?php

$function = new \Twig_SimpleFunction('get_file_list', function (Twig_Environment $env, $context, $path) {

//  /**
//   * @var \Twig_Template $template
//   * @url https://twig.symfony.com/api/1.x/Twig_Template.html
//   * */
//  $template = $env->resolveTemplate($path);
//
//  /**
//   * @var \Twig_Source $source
//   * @url https://twig.symfony.com/api/1.x/Twig_Source.html
//   */
//  $source = $template->getSourceContext();
//
//  /** @var string $full_path */
//  $full_path = $source->getPath();
//
//  // @todo error handling for no file
//  $file_string = file_get_contents($full_path);
//  // @todo check if not json
//  // @todo support yml/yaml
//  $file_data = json_decode($file_string, true);

//  return glob($path);
  return array_map('basename', glob(getcwd() . DIRECTORY_SEPARATOR . $path));
}, [
  'needs_environment' => true,
  'needs_context' => true,
]);

?>
