<?php
/*
$usernameDB = "root";
$passwordDB = "";
$hostnameDB = "localhost";
$database =  "teamstorm";
*/
$usernameDB = "czvevis";
$passwordDB = "104036376";
$hostnameDB = "localhost"; 
$database =  "czvevis";


//connection to the database
$dbhandle = mysql_connect($hostnameDB, $usernameDB, $passwordDB) 
 or die("Unable to connect to MySQL");
//echo "Connected to MySQL<br>";

//select a database to work with
$selected = mysql_select_db($database,$dbhandle) 
  or die("Could not select examples");

$usr = $_POST['usr'];
$pwd = $_POST['pwd'];
$dotaz = mysql_query("select * from user where Username = '$usr' and Password = '$pwd'");
$overeni = mysql_num_rows($dotaz);
if($overeni == 1) {
echo "jses tam";
} else {
echo "smuuula";
}


//close the connection
mysql_close($dbhandle);
?>