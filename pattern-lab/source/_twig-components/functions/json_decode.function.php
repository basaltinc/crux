<?php

$function = new \Twig_SimpleFunction('json_decode', function ($json) {
  return json_decode($json);
});

?>
