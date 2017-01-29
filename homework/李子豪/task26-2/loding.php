<?php
    // ºó¶Ë php ²âÊÔ½Ó¿ÚÎÄ¼þ
    $start = $_GET['start']; //2
    $len = $_GET['len'];  //6 
    $items = array();
 
    for($i =1; $i < $len+1; $i++){
        array_push($items, '内容' . ($start+$i));
    }
    $ret = array('status'=>1, 'data'=>$items);

    //{status: 1, data: ['ÄÚÈÝ1','ÄÚÈÝ2','ÄÚÈÝ3']}
    sleep(1.0);
    echo json_encode($ret);
