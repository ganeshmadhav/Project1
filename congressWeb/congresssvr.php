<?php
/*if(isset($_GET["type"]) && $_GET["type"] == 'House'){
    $request = 'http://congress.api.sunlightfoundation.com/legislators?chamber=house&apikey=a9a5b062fbce40bb8abcc30452621284';
}*/
if(isset($_GET["type"]) && $_GET["type"] == 'House'){
    $request = 'http://congress.api.sunlightfoundation.com/legislators?chamber=house&per_page=all&apikey=a9a5b062fbce40bb8abcc30452621284';
}
if(isset($_GET["type"]) && $_GET["type"] == 'Senate'){
    $request = 'http://congress.api.sunlightfoundation.com/legislators?chamber=senate&per_page=all&apikey=a9a5b062fbce40bb8abcc30452621284';
}
if(isset($_GET["type"]) && $_GET["type"] == 'houseCommittee'){
    $request = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&per_page=all&apikey=a9a5b062fbce40bb8abcc30452621284';
}
if(isset($_GET["type"]) && $_GET["type"] == 'senateCommittee'){
    $request = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&per_page=all&apikey=a9a5b062fbce40bb8abcc30452621284';
}
if(isset($_GET["type"]) && $_GET["type"] == 'jointCommittee'){
    $request = 'http://congress.api.sunlightfoundation.com/committees?chamber=joint&per_page=all&apikey=a9a5b062fbce40bb8abcc30452621284';
}
if(isset($_GET["states"])){
/*$request = 'http://congress.api.sunlightfoundation.com/legislators?state='.urlencode($_GET["states"]).'&per_page=all&apikey=a9a5b062fbce40bb8abcc30452621284';*/
    $request = 'http://localhost/hw8_NOV9/leg.json?state='.urlencode($_GET["states"]);
}
if(isset($_GET["type"]) && $_GET["type"] == 'activeBill'){
    $request = 'http://congress.api.sunlightfoundation.com/bills?apikey=a9a5b062fbce40bb8abcc30452621284&per_page=50&history.active=true';
}
if(isset($_GET["type"]) && $_GET["type"] == 'newBill'){
    $request = 'http://congress.api.sunlightfoundation.com/bills?apikey=a9a5b062fbce40bb8abcc30452621284&per_page=50&history.active=false';
}
if(isset($_GET["bio_guide"]) && isset($_GET["type"]) && $_GET["type"] == 'Legislator'){
    /*$request = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id='.urlencode($_GET["bio_guide"]).'&apikey=a9a5b062fbce40bb8abcc30452621284';*/
    $request = 'http://localhost/hw8_NOV9/leg.json?bioguide_id='.urlencode($_GET["bio_guide"]);
}
if(isset($_GET["bio_guide"]) && isset($_GET["type"]) && $_GET["type"] == 'Committee'){
    $request = 'http://congress.api.sunlightfoundation.com/committees?member_ids='.urlencode($_GET["bio_guide"]).'&per_page=5&apikey=a9a5b062fbce40bb8abcc30452621284';
}
if(isset($_GET["bio_guide"]) && isset($_GET["type"]) && $_GET["type"] == 'Bill'){
    $request = 'http://congress.api.sunlightfoundation.com/bills?sponsor_id='.urlencode($_GET["bio_guide"]).'&per_page=5&apikey=a9a5b062fbce40bb8abcc30452621284';
}
if(isset($_GET["billid"]) && isset($_GET["type"]) && $_GET["type"] == 'singleBill'){
   $request = 'http://congress.api.sunlightfoundation.com/bills?bill_id='.urlencode($_GET["billid"]).'&apikey=a9a5b062fbce40bb8abcc30452621284'; 
}
if(isset($_GET["committeeid"]) && isset($_GET["type"]) && $_GET["type"] == 'singleCommittee'){
   $request = 'http://congress.api.sunlightfoundation.com/committees?committee_id='.urlencode($_GET["committeeid"]).'&apikey=a9a5b062fbce40bb8abcc30452621284'; 
}

    $response  = file_get_contents($request);            
    $jsonobj  = json_decode($response);
    echo $response;
?>