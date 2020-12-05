<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use Illuminate\Http\Request;

class TestController extends Controller
{

    public function __construct()
    {
        //Inertia::setRootView('inertia');
    }
        
    public function test()
    {
        return Inertia::render('Test');
    }

}
