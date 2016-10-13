var AllData;
function functionFromDate(){
       var fromDate=document.getElementById("fromDate").value;       
       var toDate=document.getElementById("toDate").value;
       
       
       getComponent(fromDate,toDate);
       
       
}


var check= function(){
       $.ajax({
              url : "/check",
              success : function(data) {
                     
                     
              }
              
       });
}
//Display component based on date
var getComponent = function(start,end){
       
       $.ajax({
              url : "/loadComponent/" + start + "/" + end,
              success : function(data) {
                     var text = "";
                     AllData=data;
                     var x=document.getElementById("fleetValue");
                     for (var i = 0; i < data.length; i++) {
                             var option = document.createElement("option");
                               option.text = data[i].fleetNo;
                               x.add(option);
                     }

                     var text = "";
                     
                     var x=document.getElementById("subfleetvalue");
                     for (var i = 0; i < data.length; i++) {
                             var option = document.createElement("option");
                               option.text = data[i].subfleetNo;
                               x.add(option);
                     }
                     var text = "";
                     
                     var x=document.getElementById("tailvalue");
                     for (var i = 0; i < data.length; i++) {
                             var option = document.createElement("option");
                               option.text = data[i].tailNo;
                               x.add(option);
                     }
                     var text = "";
                     
                     var x=document.getElementById("cpnvalue");
                     for (var i = 0; i < data.length; i++) {
                             var option = document.createElement("option");
                               option.text = data[i].companyPartNo;
                               x.add(option);
                     }
                     var text = "";
                     
                     var x=document.getElementById("mfgvalue");
                     for (var i = 0; i < data.length; i++) {
                             var option = document.createElement("option");
                               option.text = data[i].mfgPartNo;
                               x.add(option);
                     }
                     var text = "";
                     
                     var x=document.getElementById("atavalue");
                     for (var i = 0; i < data.length; i++) {
                             var option = document.createElement("option");
                               option.text = data[i].ataSystemNo;
                               x.add(option);
                     }
                     var text = "";
                     
                     var x=document.getElementById("serialvalue");
                     for (var i = 0; i < data.length; i++) {
                             var option = document.createElement("option");
                               option.text = data[i].serialNo;
                               x.add(option);
                     }
                     
              
                     
              }
       

       });
}



function functionsort(){
       var sortSelected=document.getElementById("sortBy").value;     
       var sortValue = ["fleetValue", "subfleetvalue", "atavalue", "tailvalue", "cpnvalue", "mfgvalue","serialvalue"];
       
       
       if(sortSelected != "null"){
for (i = 0; i < sortValue.length; i++) {
       
              if(sortSelected != sortValue[i]){
                     
                    
              document.getElementById(sortValue[i]).disabled = true;
              }else{
                     document.getElementById(sortValue[i]).disabled = false;
                           
              }
       }
       }else{
              for (i = 0; i < sortValue.length; i++) {
                     document.getElementById(sortValue[i]).disabled = false;       
              }
              }
       
       
                     

       
       
       
       
       
       
       
       
}

function getFleets(){
       var fleetSelected=document.getElementById("fleetValue");      
       
       

       
       var result = [];
var options = fleetSelected && fleetSelected.options;
var opt;

for (var i=0, iLen=options.length; i<iLen; i++) {
   opt = options[i];

   if (opt.selected) {
          
     result.push(opt.value || opt.text);
   
   }
   
       
}


 
 
 
 

}




var saveFilter = function(){
	var  filterName = $('#filterName').val();
	var fromDate =  $('#fromDate').val();
	var toDate =  $('#toDate').val();
	var sortByEle = document.getElementById("sortBy");
	var sortBySelected = sortByEle.options[sortByEle.selectedIndex].value;
	
	var installedUnit= document.getElementById("installedUnit").checked ? true:false;
	var newUnit =  document.getElementById("newUnit").checked ? true:false;
	var nonActiveUnit =   document.getElementById("nonActiveUnit").checked ? true:false;
	var problemUnit =  document.getElementById("problemUnit").checked ? true:false;
	var overhauledUnit =   document.getElementById("overhauledUnit").checked ? true:false;
		
	var filterJson = {"filterName":filterName, "fromDate":fromDate,"toDate":toDate, "sortBy": sortBySelected, "filterBy":{"installedUnit":installedUnit, "newUnit":newUnit, "nonActive":nonActiveUnit, "problemUnit" :problemUnit , "overhauledUnit":overhauledUnit} };
	 filterJson= JSON.stringify(filterJson);
	
	 $.ajax({
		 type : "POST",
		 contentType : "application/json",
		 url : "/saveFilter",
		 data : filterJson,
		 dataType : 'json',
         success : function(data) {
                
                
         }
         
  });
	
	
	
} 

var getFilters = function(){
	
	 $.ajax({
		 url : "/getFilters",
		 success : function(data) {
			 filterJson= JSON.stringify(data);
			 alert(filterJson);
         }
         
  });
	
}