<?php
    $srt = $_GET['srt'];
    $len = $_GET['len'];
    $ret = $srt + $len;
    echo json_encode($ret);
?>