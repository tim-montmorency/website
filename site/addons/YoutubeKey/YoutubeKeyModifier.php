<?php

namespace Statamic\Addons\YoutubeKey;

use Statamic\Extend\Modifier;

class YoutubeKeyModifier extends Modifier
{
    public function index($value, $params, $context)
    {
      preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $value, $match);
      return $match[1];
    }
}