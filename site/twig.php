<?php

require_once __DIR__ . '/vendor/autoload.php';

use BasaltInc\TwigTools\TwigFunctions;

/**
 * @param \Twig_Environment $env
 * @param array $config - Config passed to `@basalt/twig-renderer`
 */
function setupTwig(\Twig_Environment &$env, $config) {
  $env->addFunction(TwigFunctions::get_data());
  $env->addFunction(TwigFunctions::console_log('log'));
  $env->addFunction(TwigFunctions::validate_data_schema());
}
