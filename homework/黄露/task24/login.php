<?php
$user = $_POST['user'];
$pwd=$_POST['pwd'];
$ret = array('user'=>$user, 'pwd'=>$pwd);

echo $ret;