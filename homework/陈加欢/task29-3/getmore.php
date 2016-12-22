<?php
	$first=$_GET["first"];
	$len=$_GET["len"];
	$arr=array();
	for($i=0; $i<$len; $i++){
		array_push($arr, "内容".($first+$i));
	}
	$ret=array("status"=>1, "data"=>$arr);
	echo json_encode($ret);

 ?>
