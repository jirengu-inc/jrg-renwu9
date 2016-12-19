<?php
	$start=$_GET["start"];
	$len=$_GET["len"];
	$items=array();
	for($i=0; $i<$len; $i++){
		array_push($items, "内容".($start+$i+1));
	}
	$ret=array("status"=>1, "data"=>$items);
	echo json_encode($ret);

?>