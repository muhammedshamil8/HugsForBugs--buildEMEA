<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel IQAC Backend</title>
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Nunito', sans-serif;
            background-color: #f4f4f4;
            display: grid;
            color: #333;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: auto;
            
        }
        .navbar {
            background-color: #3490dc;
            color: white;
            padding: 1rem;
            text-align: center;
            position: fixed;
            top: 0;
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container {
            max-width: 800px;
            margin:  auto;
            text-align: center;
            padding: 15px;
           
        }
        .card {
            background-color: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 0.5rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 1.5rem ;
            margin-bottom: 1.5rem;
        }
        .footer {
            background-color: #3490dc;
            color: white;
            padding: 1rem;
            text-align: center;
            height: 80px;
            bottom: 0;
            position: fixed;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body class="antialiased">
    <!-- Navigation Bar -->
    <div class="navbar">
        <h2>Welcome to the  IQAC-EMEA Backend</h2>
    </div>

    <!-- Main Content -->
    <div class="container">
        <h1>Hello World</h1>

        <div class="card">
            <h2>Message Card</h2>
            <p>This is the backend for the EMEA IQAC app.If you have furthur queries Contact admin , iqac-quadinator or connect-emea -_- !,<br>Thank you for visitng don't touch it wrong way it too risky! devlopers are pro and secure</p>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <p>&copy; 2023 buildEMEA-HugsForBugs. All rights reserved.</p>
    </div>
</body>
</html>
