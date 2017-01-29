<?php
	header("Content-type: ");
	$username = $_GET['username'];
	if($username === 'xiaoming'){
		$ret = array('username'=>'xiaoming', 'password'=>'abcd1234');
	} else {
		$ret = array('username'=>'blank', 'password'=>'blank');
	}
	echo json_encode($ret);
?>