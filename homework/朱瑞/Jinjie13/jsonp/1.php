<?php
header("Content-type: ");   
$callback = $_GET['callback'];   
$news = array("第11日前瞻：中国冲击4金 博尔特再战200米羽球","正直播柴飚/洪炜出战 男双力争会师决赛","女排将死磕巴西！郎平安排男陪练模仿对方核心","没有中国选手和巨星的110米栏 我们还看吗？", "中英上演奥运金牌大战","博彩赔率挺中国夺回第二纽约时报：中国因对手服禁药而丢失的奖牌最多","最“出柜”奥运？同性之爱闪耀里约","下跪拜谢与洪荒之力一样 都是真情流露");   
$data = array();   
for ($i=0;$i<3;$i++){        
$idx = intval(rand(0,7));        
array_push($data,$news[$idx]);        
array_splice($news,$idx,1);   
};  
 if($callback){       
echo $callback.'('.json_encode($data).')';  
 }else{       
echo $data;   
}

 ?>