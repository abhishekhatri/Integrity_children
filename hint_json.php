<?php
	include("database.init.php");

	$hid = rand(0,5);
//	echo $hid;	//random hint for random hint

	$conn = mysql_connect($DB_host,$DB_user,$DB_password);
	
	if(!$conn){
		die("ERROR:".mysql_error());
	}else{
	//	echo "ok";
	}
	
	mysql_select_db("Integrity");
	$sql = "SELECT * FROM suggestion where hid = '$hid';";

	$retval = mysql_query($sql,$conn);
		if( !$retval){
			die("ERROR:".mysql_error());
		}else{
		//	echo "ok2";
		}

	while( $row = mysql_fetch_array($retval,MYSQL_ASSOC)){
                $hint = $row['suggestion'];
        }
		echo $hint;

