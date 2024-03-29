<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CountryController extends Controller
{
    public function fetchData(){
        $countries = Http::get('https://restcountries.com/v3.1/all?fields=name,flags')->collect();
        return view('dynamic',compact('countries'));
    }
}
