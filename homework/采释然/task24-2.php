<?php
$username = $_GET['username'];
if($username == "hunger"){
    $statusNum = 1;
}else{
    $statusNum = 0;
}
echo json_encode($statusNum);
?>