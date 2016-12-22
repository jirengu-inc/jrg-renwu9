<?php
  	$name = $_GET['username'];
  	$userPassword = $_POST['password'];
  	if($name === 'hunger'){
  		$ret = 1;
  	}else{
  		$ret = 0;
  	}
  	echo json_encode($ret);
?>