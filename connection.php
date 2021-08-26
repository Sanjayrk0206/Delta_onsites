<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "color_generator";

if(!$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname)){
    header("Location: index.html");
    die;
}