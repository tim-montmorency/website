<?php

namespace Statamic\Addons\YoutubePoster;

use Statamic\Extend\Modifier;

class YoutubePosterModifier extends Modifier
{
    public function index($value, $params, $context)
    {
      preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $value, $match);
      return 'https://img.youtube.com/vi/'. $match[1] .'/0.jpg';
    }
}