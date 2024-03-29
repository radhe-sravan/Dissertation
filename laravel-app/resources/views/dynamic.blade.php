<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Laravel App" />
        <title>Laravel</title>
</head>        
@foreach($countries as $country)
    <img src="{{ $country['flags']['svg'] }}" alt="{{ $country['flags']['alt'] }}" width="200" height="200"/>
    <p>{{$country['name']['common']}}</p>
@endforeach
</html>