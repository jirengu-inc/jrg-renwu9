<?php
  	 $startNum=$_GET['start'];
	 $addNum=$_GET['len'];
	 $nweLi = array();
	 for ($i=0; $i <$addNum ; $i++) { 
	 	 $newLi[$i] = '内容'.($startNum+$i+1);
	 }
	echo json_encode($newLi);
?>