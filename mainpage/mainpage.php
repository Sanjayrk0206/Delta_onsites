<?php 
session_start();

	include("../connection.php");
	include("function.php");
    
	$user_data = check_login($conn);
?>
<!DOCTYPE html>
<html>
    <head>
        <script src="https://kit.fontawesome.com/23aecf465a.js" crossorigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
        <link rel="stylesheet" href="mainpage.css">
        <script src="mainpage.js"></script>
    </head>
    <body onload="generate()">
        <nav>
            <div class="name-block">
                <label><i class="fas fa-user-circle"></i>  <?php echo $user_data['Name']?></label>
            </div>
            <div class="nav-block">
                <label style="border-right: 2px solid grey;" onclick="generate()"><i class="fas fa-redo-alt" style="margin-right: 5%;"></i>Refresh</label>
                <label style="border-right: 2px solid grey;"><i class="fas fa-save" style="margin-right: 5%;"></i>Save</label>
                <a href="../logout.php"><label><i class="fas fa-sign-out-alt"></i></label></a>
            </div>
        </nav>
        <section id="color">
            <label id="title2" style="text-align: right;"><span id="title1"></span><br>Red: <span id="red"></span> Green: <span id="green"></span> Blue: <span id="blue"></span></label>
        </section>
    </body>
</html>