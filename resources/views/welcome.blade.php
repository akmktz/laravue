<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script defer src="{{ asset('js/app.js') }}"></script>
    <style type="text/css">
        .main-container {
             background-color: #d7edfd;
        }
    </style>
</head>
<body>
<div id="app" class="container">
    <header>
        <navbar/>
    </header>
    <div class="main-container">
        <router-view></router-view>
    </div>
</div>
</body>
</html>
