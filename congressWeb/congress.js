/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
        /*Menu-toggle*/
    "use strict";
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });
    
});

var app = angular.module('congressTable', ['angularUtils.directives.dirPagination']);

app.controller('statedata', function ($scope, $http) {
    $scope.users = [];
    $scope.details = [];
    $scope.state = [
        {model : "All States", abb : ""},
        {model : "Alabama", abb : "AL"},
        {model : "Alaska", abb : "AK"},
        {model : "Arizona", abb : "AZ"},
        {model : "Arkansas", abb : "AR"},
        {model : "California", abb : "CA"},
        {model : "Colorado", abb : "CO"},
        {model : "Connecticut", abb : "CT"},
        {model : "Delaware", abb : "DE"},
        {model : "Florida", abb : "FL"},
        {model : "Georgia", abb : "GA"},
        {model : "Hawaii", abb : "HI"},
        {model : "Idaho", abb : "ID"},
        {model : "Illinois", abb : "IL"},
        {model : "Indiana", abb : "IN"},
        {model : "Iowa", abb : "IA"},
        {model : "Kansas", abb : "KS"},
        {model : "Kentucky", abb : "KY"},
        {model : "Louisiana", abb : "LA"},
        {model : "Maine", abb : "ME"},
        {model : "Maryland", abb : "MD"},
        {model : "Massachusetts", abb : "MA"},
        {model : "Michigan", abb : "MI"},
        {model : "Minnesota", abb : "MN"},
        {model : "Mississippi", abb : "MS"},
        {model : "Missouri", abb : "MO"},
        {model : "Montana", abb : "MT"},
        {model : "Nebraska", abb : "NE"},
        {model : "Nevada", abb : "NV"},
        {model : "New Hampshire", abb : "NH"},
        {model : "New Jersey", abb : "NJ"},
        {model : "New Mexico", abb : "NM"},
        {model : "New York", abb : "NY"},
        {model : "North Carolina", abb : "NC"},
        {model : "North Dakota", abb : "ND"},
        {model : "Ohio", abb : "OH"},
        {model : "Oklahoma", abb : "OK"},
        {model : "Oregon", abb : "OR"},
        {model : "Pennsylvania", abb : "PA"},
        {model : "Rhode Island", abb : "RI"},
        {model : "South Carolina", abb : "SC"},
        {model : "South Dakota", abb : "SD"},
        {model : "Tennessee", abb : "TN"},
        {model : "Texas", abb : "TX"},
        {model : "Utah", abb : "UT"},
        {model : "Vermont", abb : "VT"},
        {model : "Virginia", abb : "VA"},
        {model : "Washington", abb : "WA"},
        {model : "West Virginia", abb : "WV"},
        {model : "Wisconsin", abb : "WI"},
        {model : "Wyoming", abb : "WY"}/*,
        {model : "American Samoa", abb : "AS"},
        {model : "Guam", abb : "GU"},
        {model : "Northern Mariana Islands", abb : "MP"},
        {model : "Puerto Rico", abb : "PR"},
        {model : "US Virgin Islands", abb : "VI"}*/
    ];
    $scope.selectedState=$scope.state[0];
    $http({method: "GET", url: "congresssvr.php", params: {"states":$scope.selectedState.abb}})
   .then(
       function(response){
         // success callback
           $scope.users = response;
       }, 
       function(response){
         // failure call back
       }
    );
    $scope.change = function(item) {
        $http({method: "GET", url: "congresssvr.php", params: {"states":$scope.selectedState.abb}})
   .then(
       function(response){
         // success callback
           $scope.users = response;
       }, 
       function(response){
         // failure call back
       }
    );
      };
});

app.controller('listdata', function ($scope, $http) {
    $scope.users = [];
    $scope.details = [];
    $scope.state = [
        {model : "All States", abb : ""},
        {model : "Alabama", abb : "AL"},
        {model : "Alaska", abb : "AK"},
        {model : "Arizona", abb : "AZ"},
        {model : "Arkansas", abb : "AR"},
        {model : "California", abb : "CA"},
        {model : "Colorado", abb : "CO"},
        {model : "Connecticut", abb : "CT"},
        {model : "Delaware", abb : "DE"},
        {model : "Florida", abb : "FL"},
        {model : "Georgia", abb : "GA"},
        {model : "Hawaii", abb : "HI"},
        {model : "Idaho", abb : "ID"},
        {model : "Illinois", abb : "IL"},
        {model : "Indiana", abb : "IN"},
        {model : "Iowa", abb : "IA"},
        {model : "Kansas", abb : "KS"},
        {model : "Kentucky", abb : "KY"},
        {model : "Louisiana", abb : "LA"},
        {model : "Maine", abb : "ME"},
        {model : "Maryland", abb : "MD"},
        {model : "Massachusetts", abb : "MA"},
        {model : "Michigan", abb : "MI"},
        {model : "Minnesota", abb : "MN"},
        {model : "Mississippi", abb : "MS"},
        {model : "Missouri", abb : "MO"},
        {model : "Montana", abb : "MT"},
        {model : "Nebraska", abb : "NE"},
        {model : "Nevada", abb : "NV"},
        {model : "New Hampshire", abb : "NH"},
        {model : "New Jersey", abb : "NJ"},
        {model : "New Mexico", abb : "NM"},
        {model : "New York", abb : "NY"},
        {model : "North Carolina", abb : "NC"},
        {model : "North Dakota", abb : "ND"},
        {model : "Ohio", abb : "OH"},
        {model : "Oklahoma", abb : "OK"},
        {model : "Oregon", abb : "OR"},
        {model : "Pennsylvania", abb : "PA"},
        {model : "Rhode Island", abb : "RI"},
        {model : "South Carolina", abb : "SC"},
        {model : "South Dakota", abb : "SD"},
        {model : "Tennessee", abb : "TN"},
        {model : "Texas", abb : "TX"},
        {model : "Utah", abb : "UT"},
        {model : "Vermont", abb : "VT"},
        {model : "Virginia", abb : "VA"},
        {model : "Washington", abb : "WA"},
        {model : "West Virginia", abb : "WV"},
        {model : "Wisconsin", abb : "WI"},
        {model : "Wyoming", abb : "WY"}/*,
        {model : "American Samoa", abb : "AS"},
        {model : "Guam", abb : "GU"},
        {model : "Northern Mariana Islands", abb : "MP"},
        {model : "Puerto Rico", abb : "PR"},
        {model : "US Virgin Islands", abb : "VI"}*/
    ];
    $scope.selectedState=$scope.state[0];
    $http({method: "GET", url: "congresssvr.php", params: {"states":$scope.selectedState.abb}})
   .then(
       function(response){
         // success callback
           $scope.users = response;
       }, 
       function(response){
         // failure call back
       }
    );
    $scope.change = function(item) {
        $http({method: "GET", url: "congresssvr.php", params: {"states":$scope.selectedState.abb}})
   .then(
       function(response){
         // success callback
           $scope.users = response;
       }, 
       function(response){
         // failure call back
       }
    );
      };
    $scope.viewDetails = function(para) {
        $scope.para=para;
        dataPresent = new Array();
        if(localStorage.legislator){
                dataPresent = JSON.parse(localStorage.getItem("legislator"));
            }
        if(dataPresent.length == 0){
            
            $("#star_icon_bio").removeClass("glyphicon-star"); 
            $("#star_icon_bio").addClass("glyphicon-star-empty"); 
            $("#star_icon_bio").css("color","black");
        }
        for (i=0;i<dataPresent.length;i++){
             if (dataPresent[i].bioguide_id == $scope.para) {
                 
                 $("#star_icon_bio").removeClass("glyphicon-star-empty");
                 $("#star_icon_bio").addClass("glyphicon-star"); 
                 $("#star_icon_bio").css("color","yellow");
                 break;
             }else{
                $("#star_icon_bio").removeClass("glyphicon-star"); 
                $("#star_icon_bio").addClass("glyphicon-star-empty");
                 $("#star_icon_bio").css("color","black");
             }
        }
        $scope.type="Legislator";
        $http({method: "GET", url: "congresssvr.php", params: {"bio_guide":$scope.para, "type": $scope.type}})
            .then(function(result) {
                $scope.details = result.data.results[0];
            $scope.bio_guide_id=$scope.details.bioguide_id; 
            $scope.party_id=$scope.details.party;
            var st_dt = new Date($scope.details.term_start);
             var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            $scope.startDate=(months[st_dt.getMonth()]) + ' ' + (st_dt.getDate()+1) + ', ' +  st_dt.getFullYear();
            
            var en_dt = new Date($scope.details.term_end);
            $scope.endDate=(months[en_dt.getMonth()]) + ' ' + (en_dt.getDate()+1) + ', ' +  en_dt.getFullYear();
            var now_dt = new Date();
            $scope.prgrs= ((now_dt-st_dt)/(en_dt-st_dt)*100).toFixed(2);
            var btday= new Date($scope.details.birthday);
            $scope.birthday=(months[btday.getMonth()]) + ' ' + (btday.getDate()+1) + ', ' +  btday.getFullYear();
            });
        $scope.type="Committee";
        $scope.cmt=[];
        $http({method: "GET", url: "congresssvr.php", params: {"bio_guide":$scope.para, "type":$scope.type}})
            .then(function(result) {
                $scope.cmt = result;
            });
        $scope.type="Bill";
        $scope.bill=[];
        $http({method: "GET", url: "congresssvr.php", params: {"bio_guide":$scope.para, "type":$scope.type}})
            .then(function(result) {
                $scope.bill = result;
            });
    }
    $scope.legdata=[];
    /*$scope.$watch('legdata', function() {
    
    });*/
    if(localStorage.legislator){
                $scope.legdata = JSON.parse(localStorage.getItem("legislator"));
            }
    var Ssession="";
    $scope.ob=[];
    $scope.storeinfo= function(){ 
        var removearray = new Array();
        if($("#star_icon_bio").hasClass("glyphicon-star-empty")){
            $("#star_icon_bio").removeClass("glyphicon-star-empty");
            $("#star_icon_bio").addClass("glyphicon-star");
             $("#star_icon_bio").css("color","yellow");
            $("#star_icon_biof").removeClass("glyphicon-star-empty");
            $("#star_icon_biof").addClass("glyphicon-star");
             $("#star_icon_biof").css("color","yellow");   
            
                if(typeof(Storage) !== "undefined") {
                    var array = new Array();
                    if(localStorage.legislator){
                        array = JSON.parse(localStorage.getItem("legislator"));
                    }
                    //array=JSON.stringify(array);
                    array.push({ 'state': $scope.details.state_name, 'email': $scope.details.oc_email, 'bioguide_id': $scope.bio_guide_id, 'party': $scope.party_id, 'last_name': $scope.details.last_name, 'first_name': $scope.details.first_name, 'chamber': $scope.details.chamber});
                    localStorage.setItem("legislator", JSON.stringify(array));
                    $scope.legdata = JSON.parse(localStorage.getItem("legislator"));
                    }
        } else {
            $("#star_icon_bio").addClass("glyphicon-star-empty");
            $("#star_icon_bio").removeClass("glyphicon-star");
            $("#star_icon_bio").css("color","black");
            $("#star_icon_biof").addClass("glyphicon-star-empty");
            $("#star_icon_biof").removeClass("glyphicon-star");
            $("#star_icon_biof").css("color","black");
            if(localStorage.legislator){
                removearray = JSON.parse(localStorage.getItem("legislator"));
            }
        for (i=0;i<removearray.length;i++){
             if (removearray[i].bioguide_id == $scope.bio_guide_id) removearray.splice(i,1);
        }
        localStorage["legislator"]=JSON.stringify(removearray);
        $scope.legdata = JSON.parse(localStorage.getItem("legislator"));
        }
        }
     /*$scope.$watch('legdata', function() {
                $scope.legdata= $scope.legdata;
    });*/
    
    /*$scope.legdata = JSON.parse(localStorage.getItem("legislator"));*/
    $scope.getFav = function() {
        if(localStorage.legislator){
                $scope.legdata = JSON.parse(localStorage.getItem("legislator"));
            }
    }
    
   /* setTimeout(function () {
        $scope.$apply(function () {
            $scope.legdata = JSON.parse(localStorage.getItem("legislator"));
        });
    }, 2000);*/
    
    $scope.remove= function(para){
        var removearray = new Array();
            if(localStorage.legislator){
                removearray = JSON.parse(localStorage.getItem("legislator"));
            }
        for (i=0;i<removearray.length;i++){
             if (removearray[i].bioguide_id == para) removearray.splice(i,1);
        }
        localStorage["legislator"]=JSON.stringify(removearray);
        $scope.legdata = JSON.parse(localStorage.getItem("legislator"));
        if($scope.bio_guide_id == para){
            $("#star_icon_bio").addClass("glyphicon-star-empty");
            $("#star_icon_bio").removeClass("glyphicon-star");
            $("#star_icon_bio").css("color","black");
            $("#star_icon_biof").addClass("glyphicon-star-empty");
            $("#star_icon_biof").removeClass("glyphicon-star");
            $("#star_icon_biof").css("color","black");
        }
    }
    
});

app.controller('housedata', function ($scope, $http) {
    $scope.houseusers = [];
    $scope.type="House";
    $http({method: "GET", url: "congresssvr.php", params: {"type":$scope.type}})
   .then(
       function(response){
         // success callback
           $scope.houseusers = response;
       }, 
       function(response){
         // failure call back
       }
    );
});

app.controller('senatedata', function ($scope, $http) {
    $scope.houseusers = [];
    $scope.type="Senate";
    $http({method: "GET", url: "congresssvr.php", params: {"type":$scope.type}})
   .then(
       function(response){
         // success callback
           $scope.houseusers = response;
       }, 
       function(response){
         // failure call back
       }
    );
});


app.controller('newbilldata', function ($scope, $http) {
    $scope.billsresult=[];
    $scope.type="newBill";
    $http({method: "GET", url: "congresssvr.php", params: {"type":$scope.type}})
   .then(
       function(response){
         // success callback
           $scope.billsresult = response;
       }, 
       function(response){
         // failure call back
       }
    );
});

app.controller('billdata', function ($scope, $http) {
    $scope.billsresult=[];
    $scope.type="activeBill";
    $http({method: "GET", url: "congresssvr.php", params: {"type":$scope.type}})
   .then(
       function(response){
         // success callback
           $scope.billsresult = response;
       }, 
       function(response){
         // failure call back
       }
    );
});

app.controller('housecommtabledata', function ($scope, $http) {

});

app.controller('senatecommtabledata', function ($scope, $http) {

});

app.controller('jointcommtabledata', function ($scope, $http) {

});

app.controller('billinfo', function ($scope, $http) {
    $scope.committeeresulthou=[];
    $scope.type="houseCommittee";
    $http({method: "GET", url: "congresssvr.php", params: {"type":$scope.type}})
   .then(
       function(response){
         // success callback
           $scope.committeeresulthou = response;
       }, 
       function(response){
         // failure call back
       }
    );
    
    $scope.committeeresultsen=[];
    $scope.type="senateCommittee";
    $http({method: "GET", url: "congresssvr.php", params: {"type":$scope.type}})
   .then(
       function(response){
         // success callback
           $scope.committeeresultsen = response;
       }, 
       function(response){
         // failure call back
       }
    );
    
    $scope.committeeresultjoi=[];
    $scope.type="jointCommittee";
    $http({method: "GET", url: "congresssvr.php", params: {"type":$scope.type}})
   .then(
       function(response){
         // success callback
           $scope.committeeresultjoi = response;
       }, 
       function(response){
         // failure call back
       }
    );
    
  $scope.viewBillDetails = function(para){
      $scope.billsDetails=[];
      billPresent = new Array();
        if(localStorage.bills){
                billPresent = JSON.parse(localStorage.getItem("bills"));
            }
      if(billPresent.length == 0){
            $("#star_icon_bills").css("color","black");
            $("#star_icon_bills").addClass("glyphicon-star-empty");
            $("#star_icon_bills").removeClass("glyphicon-star");
            $("#star_icon_billsf").css("color","black");
            $("#star_icon_billsf").addClass("glyphicon-star-empty");
            $("#star_icon_billsf").removeClass("glyphicon-star");
      }
        for (i=0;i<billPresent.length;i++){
             if (billPresent[i].bill_id == para) {
                 $("#star_icon_bills").css("color","yellow");
                 $("#star_icon_bills").removeClass("glyphicon-star-empty");
                 $("#star_icon_bills").addClass("glyphicon-star");
                 $("#star_icon_billsf").css("color","yellow");
                 $("#star_icon_billsf").removeClass("glyphicon-star-empty");
                 $("#star_icon_billsf").addClass("glyphicon-star");
                 break;
             }else{
                $("#star_icon_bills").css("color","black");
                $("#star_icon_bills").addClass("glyphicon-star-empty");
                $("#star_icon_bills").removeClass("glyphicon-star");
                $("#star_icon_billsf").css("color","black");
                $("#star_icon_billsf").addClass("glyphicon-star-empty");
                $("#star_icon_billsf").removeClass("glyphicon-star");
             }
        }
    $scope.type="singleBill";
    $http({method: "GET", url: "congresssvr.php", params: {"billid":para, "type":$scope.type}})
   .then(
       function(response){
         // success callback
           $scope.billsDetails = response.data.results[0];
       }, 
       function(response){
         // failure call back
       }
    );
  }
  $scope.billdata=[];
  $scope.storebills= function(){ 
        var removebills = new Array();
        if($("#star_icon_bills").hasClass("glyphicon-star-empty")){
            $("#star_icon_bills").removeClass("glyphicon-star-empty");
            $("#star_icon_bills").addClass("glyphicon-star");
            $("#star_icon_bills").css("color","yellow");   
            $("#star_icon_billsf").removeClass("glyphicon-star-empty");
            $("#star_icon_billsf").addClass("glyphicon-star");
            $("#star_icon_billsf").css("color","yellow");   
            
                if(typeof(Storage) !== "undefined") {
                    var billarray = new Array();
                    if(localStorage.bills){
                        billarray = JSON.parse(localStorage.getItem("bills"));
                    }
                    //array=JSON.stringify(array);
                    billarray.push({ 'bill_id': $scope.billsDetails.bill_id, 'bill_type': $scope.billsDetails.bill_type, 'title': $scope.billsDetails.official_title, 'chamber': $scope.billsDetails.chamber, 'introduced_on': $scope.billsDetails.introduced_on, 'sponsor': $scope.billsDetails.sponsor.title});
                    localStorage.setItem("bills", JSON.stringify(billarray));
                    $scope.billdata = JSON.parse(localStorage.getItem("bills"));
                    }
        } else {
            $("#star_icon_bills").addClass("glyphicon-star-empty");
            $("#star_icon_bills").removeClass("glyphicon-star");
            $("#star_icon_bills").css("color","black"); 
            $("#star_icon_billsf").addClass("glyphicon-star-empty");
            $("#star_icon_billsf").removeClass("glyphicon-star");
            $("#star_icon_billsf").css("color","black"); 
            if(localStorage.bills){
                removebills = JSON.parse(localStorage.getItem("bills"));
            }
        for (i=0;i<removebills.length;i++){
             if (removebills[i].bill_id == $scope.billsDetails.bill_id) removebills.splice(i,1);
        }
        localStorage["bills"]=JSON.stringify(removebills);
        $scope.billdata = JSON.parse(localStorage.getItem("bills"));
        }
        }
  
  $scope.getFavBills = function() {
        if(localStorage.bills){
                $scope.billdata = JSON.parse(localStorage.getItem("bills"));
            }
    }
  
   $scope.removeBill= function(para){
        var removebills = new Array();
            if(localStorage.bills){
                removebills = JSON.parse(localStorage.getItem("bills"));
            }
        for (i=0;i<removebills.length;i++){
             if (removebills[i].bill_id == para) removebills.splice(i,1);
        }
        localStorage["bills"]=JSON.stringify(removebills);
        $scope.billdata = JSON.parse(localStorage.getItem("bills"));
       if($scope.billsDetails.bill_id == para){
            $("#star_icon_bills").addClass("glyphicon-star-empty");
            $("#star_icon_bills").removeClass("glyphicon-star");
            $("#star_icon_bills").css("color","black");
            $("#star_icon_billsf").addClass("glyphicon-star-empty");
            $("#star_icon_billsf").removeClass("glyphicon-star");
            $("#star_icon_billsf").css("color","black");
       }
    }
    $scope.committeeDetails=[];
    $scope.committeedata = [];
    $scope.commArrayId = new Array();
    $scope.committeedata = JSON.parse(localStorage.getItem("committees"));
        for(var i=0; i<$scope.committeedata.length;i++){
           $scope.commArrayId.push($scope.committeedata[i].committeeID);
        }
    
    $scope.storeCommittee = function(para) {
    $scope.type="singleCommittee";
    $http({method: "GET", url: "congresssvr.php", params: {"committeeid":para, "type":$scope.type}})
   .then(
       function(response){
         // success callback
           $scope.committeeDetails = response.data.results[0];
            if($("#star_icon_com"+para).hasClass("glyphicon-star-empty")){
                $("#star_icon_com"+para).removeClass("glyphicon-star-empty");
                $("#star_icon_com"+para).addClass("glyphicon-star");
                $("#star_icon_com"+para).css("color","yellow");
                if(typeof(Storage) !== "undefined") {
                    var committeearray = new Array();
                   
                    if(localStorage.committees){
                        committeearray = JSON.parse(localStorage.getItem("committees"));
                    }
                    committeearray.push({ 'chamber': $scope.committeeDetails.chamber, 'committeeID': $scope.committeeDetails.committee_id, 'name': $scope.committeeDetails.name, 'parent_committee': $scope.committeeDetails.parent_committee_id, 'sub_committee': $scope.committeeDetails.subcommittee});
                    localStorage.setItem("committees", JSON.stringify(committeearray));
                    $scope.committeedata = JSON.parse(localStorage.getItem("committees"));
                    }
            }else{
                $("#star_icon_com"+para).addClass("glyphicon-star-empty");
                $("#star_icon_com"+para).removeClass("glyphicon-star");
                $("#star_icon_com"+para).css("color","black");  
                 var rmcommittee = new Array();
                if(localStorage.committees){
                    rmcommittee = JSON.parse(localStorage.getItem("committees"));
                }
                for (i=0;i<rmcommittee.length;i++){
                     if (rmcommittee[i].committeeID == para) rmcommittee.splice(i,1);
                }
                localStorage["committees"]=JSON.stringify(rmcommittee);
                $scope.committeedata = JSON.parse(localStorage.getItem("committees"));
            }
       }, 
       function(response){
         // failure call back
       }
    );
       
    }
        
    $scope.removeCommittee = function(para) {
        var rmcommittee = new Array();
            if(localStorage.committees){
                rmcommittee = JSON.parse(localStorage.getItem("committees"));
            }
        for (i=0;i<rmcommittee.length;i++){
             if (rmcommittee[i].committeeID == para) rmcommittee.splice(i,1);
        }
        localStorage["committees"]=JSON.stringify(rmcommittee);
        $scope.committeedata = JSON.parse(localStorage.getItem("committees"));
        if($("#star_icon_com"+para).hasClass("glyphicon-star-empty") == false){
            $("#star_icon_com"+para).addClass("glyphicon-star-empty");
            $("#star_icon_com"+para).removeClass("glyphicon-star");
            $("#star_icon_com"+para).css("color","black");  
        }
    }
    
    $scope.getFavCommittee = function() {
        if(localStorage.committees){
                $scope.committeedata = JSON.parse(localStorage.getItem("committees"));
            }
    }
  
});

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});