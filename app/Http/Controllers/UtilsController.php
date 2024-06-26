<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UtilsController extends Controller
{
    public static function getIp()
    {
        if (getenv('HTTP_X_REAL_IP')) {
            $ip = getenv('HTTP_X_REAL_IP');
        } elseif (getenv('HTTP_X_FORWARDED_FOR')) {
            $ip  = getenv('HTTP_X_FORWARDED_FOR');
            $ips = explode(',', $ip);
            $ip  = $ips[0];
        } elseif (getenv('REMOTE_ADDR')) {
            $ip = getenv('REMOTE_ADDR');
        } else {
            $ip = '0.0.0.0';
        }

        return $ip;
    }
}
