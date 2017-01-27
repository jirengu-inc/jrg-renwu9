<?php 
	$start=$_GET['start'];
	$add=$_GET['len'];
	$li=array();
	for($i=0;$i<$add;$i++){
		$li[$i]='内容'.($start+$i+1);
	};
    echo json_encode($li);
 ?>

