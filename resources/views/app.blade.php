<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <!-- CSRF Token -->
     <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Movie Search</title>
    <!-- Stylesheet -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div id="app"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>