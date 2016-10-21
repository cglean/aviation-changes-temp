
var filters=[];
var checkedStatus = [];
var AllData=[];
var sortChecked=null;
var globalData=[]
function functionFromDate(){
	var fromDate=document.getElementById("fromDate").value;       
	var toDate=document.getElementById("toDate").value;

	clearData();
	
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
////alert('I m in getcomponent');

	$.ajax({
		url : "/loadComponent/" + start + "/" + end,
		success : function(data) {
		
			AllData=data;
			if(sortChecked != 0){
				filterByStatus();
			}
			
			
		}
	

	});
	
	
	
	
}

function filterSort(){
	
	if(sortChecked == null){
		////alert("Please select any one of the component")
	}else{
		
		
		radioOnClick(sortChecked);
		
	}
	
	

}

function radioOnClick(value){
		var sortSelected=value;
		sortChecked=value;
		
		var r = new Array(); 
		var sortValue = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
		var AllValue = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
		
		if(AllData.length == 0){
			functionFromDate();
			
		}
		
		////alert("sortChecked"+sortChecked)
	for (i = 0; i < sortValue.length; i++) {
		////alert("hii");
		
			if(sortSelected != sortValue[i]){


			document.getElementById(sortValue[i]).options.length = 0;
			}else{
				document.getElementById(sortValue[i]).disabled = false;
				document.getElementById(sortValue[i]).options.length = 0;

				var text = "";
				var temp=sortValue[i];
				var x=document.getElementById(sortValue[i]);
				f:for (var j = 0; j < AllData.length; j++) {
				  var option = document.createElement("option");
				  if(temp == "fleetNo"){
					  if(checkedStatus.length > 0){
							checkedOperation(j,i,option,r);
								 continue;
							 }
					   for(var z = 0; z < r.length; z++){  
				            if(r[z]==AllData[j].fleetNo) continue f;}  
				        r[r.length] = AllData[j].fleetNo;
					
				  option.text = AllData[j].fleetNo;
				
				  
				  }else if(temp == "subfleetNo"){
					  if(checkedStatus.length > 0){
							checkedOperation(j,i,option,r);
								 continue;
							 }
					   for(var z = 0; z < r.length; z++){  
				            if(r[z]==AllData[j].subfleetNo) continue f;}  
				        r[r.length] = AllData[j].subfleetNo;
					  
					  option.text = AllData[j].subfleetNo;
				  }else if(temp == "ataSystemNo"){
					  if(checkedStatus.length > 0){
							checkedOperation(j,i,option,r);
								 continue;
							 }
					   for(var z = 0; z < r.length; z++){  
				            if(r[z]==AllData[j].ataSystemNo) continue f;}  
				        r[r.length] = AllData[j].ataSystemNo;
					  option.text = AllData[j].ataSystemNo;
				  } else if(temp == "tailNo"){
					  if(checkedStatus.length > 0){
							checkedOperation(j,i,option,r);
								 continue;
							 }
					   for(var z = 0; z < r.length; z++){  
				            if(r[z]==AllData[j].tailNo) continue f;}  
				        r[r.length] = AllData[j].tailNo;
					  option.text = AllData[j].tailNo;
				  } else if(temp == "companyPartNo"){
					  if(checkedStatus.length > 0){
							checkedOperation(j,i,option,r);
								 continue;
							 }
					   for(var z = 0; z < r.length; z++){  
				            if(r[z]==AllData[j].companyPartNo) continue f;}  
				        r[r.length] = AllData[j].companyPartNo;
					  option.text = AllData[j].companyPartNo;
				  } else if(temp == "mfgPartNo"){
					  if(checkedStatus.length > 0){
							checkedOperation(j,i,option,r);
								 continue;
							 }
					   for(var z = 0; z < r.length; z++){  
				            if(r[z]==AllData[j].mfgPartNo) continue f;}  
				        r[r.length] = AllData[j].mfgPartNo;
					  option.text = AllData[j].mfgPartNo;
				  } 
				  x.add(option);
				}
			}
		}
		
			
		
	
		
	////alert("in end of for loop")
		
		
		
	
}
	

	


function checkedOperation(j,i,option,r){
	
	
	var sortValue = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo","serialNo"];
	//////////alert("i value"+i+" sortValue[i] "+sortValue[i]);
		var y=document.getElementById(sortValue[i]);

				  
				
				  if(checkedStatus == "Installed Unit,New Unit"){
					  if(AllData[j].status == "Installed Unit" || AllData[j].status == "New Unit"){

							  if(sortValue[i] == "fleetNo"){
								  for(var z = 0; z < r.length; z++){  
							            if(r[z]==AllData[j].fleetNo) return}  
							        r[r.length] = AllData[j].fleetNo;
								 
								 
								  option.text = AllData[j].fleetNo;
								
								  }else if(sortValue[i] == "subfleetNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].subfleetNo) return}  
								        r[r.length] = AllData[j].subfleetNo;
									
									  option.text = AllData[j].subfleetNo;
								  }else if(sortValue[i] == "ataSystemNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].ataSystemNo) return}  
								        r[r.length] = AllData[j].ataSystemNo;
									  option.text = AllData[j].ataSystemNo;
								  } else if(sortValue[i] == "tailNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].tailNo) return}  
								        r[r.length] = AllData[j].tailNo;
									  option.text = AllData[j].tailNo;
								  } else if(sortValue[i] == "companyPartNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].companyPartNo) return}  
								        r[r.length] = AllData[j].companyPartNo;
									  option.text = AllData[j].companyPartNo;
								  } else if(sortValue[i] == "mfgPartNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].mfgPartNo) return}  
								        r[r.length] = AllData[j].mfgPartNo;
									  option.text = AllData[j].mfgPartNo;
								  } else if(sortValue[i] == "serialNo"){
									  option.text = AllData[j].serialNo;
								  }
						
						  y.add(option);
						  
					  }
					  
					  }
				
				  if(checkedStatus == "Installed Unit"){
					 
					  if(AllData[j].status == "Installed Unit" ){
						 
						  if(sortValue[i] == "fleetNo"){
							   for(var z = 0; z < r.length; z++){  
						            if(r[z]==AllData[j].fleetNo) return}  
						        r[r.length] = AllData[j].fleetNo;
								 // ////////alert("true");
								  option.text = AllData[j].fleetNo;
								
								  }else if(sortValue[i] == "subfleetNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].subfleetNo) return}  
								        r[r.length] = AllData[j].subfleetNo;
									  //////////alert("true");
									  option.text = AllData[j].subfleetNo;
								  }else if(sortValue[i] == "ataSystemNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].ataSystemNo) return}  
								        r[r.length] = AllData[j].ataSystemNo;
									  option.text = AllData[j].ataSystemNo;
								  } else if(sortValue[i] == "tailNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].tailNo) return}  
								        r[r.length] = AllData[j].tailNo;
									  option.text = AllData[j].tailNo;
								  } else if(sortValue[i] == "companyPartNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].companyPartNo) return}  
								        r[r.length] = AllData[j].companyPartNo;
									  option.text = AllData[j].companyPartNo;
								  } else if(sortValue[i] == "mfgPartNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].mfgPartNo) return}  
								        r[r.length] = AllData[j].mfgPartNo;
									  option.text = AllData[j].mfgPartNo;
								  } else if(sortValue[i] == "serialNo"){
									  option.text = AllData[j].serialNo;
								  }
						
						  y.add(option);
						  
					  }
					  
					  }
				  
				  if(checkedStatus == "New Unit"){
					  if(AllData[j].status == "New Unit" ){
						  if(sortValue[i] == "fleetNo"){
							  for(var z = 0; z < r.length; z++){  
						            if(r[z]==AllData[j].fleetNo) return}  
						        r[r.length] = AllData[j].fleetNo;
								 // ////////alert("true");
								  option.text = AllData[j].fleetNo;
								
								  }else if(sortValue[i] == "subfleetNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].subfleetNo) return}  
								        r[r.length] = AllData[j].subfleetNo;
									  //////////alert("true");
									  option.text = AllData[j].subfleetNo;
								  }else if(sortValue[i] == "ataSystemNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].ataSystemNo) return}  
								        r[r.length] = AllData[j].ataSystemNo;
									  option.text = AllData[j].ataSystemNo;
								  } else if(sortValue[i] == "tailNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].tailNo) return}  
								        r[r.length] = AllData[j].tailNo;
									  option.text = AllData[j].tailNo;
								  } else if(sortValue[i] == "companyPartNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].companyPartNo) return}  
								        r[r.length] = AllData[j].companyPartNo;
									  option.text = AllData[j].companyPartNo;
								  } else if(sortValue[i] == "mfgPartNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].mfgPartNo) return}  
								        r[r.length] = AllData[j].mfgPartNo;
									  option.text = AllData[j].mfgPartNo;
								  } else if(sortValue[i] == "serialNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].serialNo) return}  
								        r[r.length] = AllData[j].serialNo;
									  option.text = AllData[j].serialNo;
								  }
						
						  y.add(option);
						  
					  }
					  
					  }
				  if(checkedStatus == "Inactive"){
					  if(AllData[j].status == "Inactive" ){
						  if(sortValue[i] == "fleetNo"){
							  for(var z = 0; z < r.length; z++){  
						            if(r[z]==AllData[j].fleetNo) return}  
						        r[r.length] = AllData[j].fleetNo;
								 // ////////alert("true");
								  option.text = AllData[j].fleetNo;
								
								  }else if(sortValue[i] == "subfleetNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].subfleetNo) return}  
								        r[r.length] = AllData[j].subfleetNo;
									  //////////alert("true");
									  option.text = AllData[j].subfleetNo;
								  }else if(sortValue[i] == "ataSystemNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].ataSystemNo) return}  
								        r[r.length] = AllData[j].ataSystemNo;
									  option.text = AllData[j].ataSystemNo;
								  } else if(sortValue[i] == "tailNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].tailNo) return}  
								        r[r.length] = AllData[j].tailNo;
									  option.text = AllData[j].tailNo;
								  } else if(sortValue[i] == "companyPartNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].companyPartNo) return}  
								        r[r.length] = AllData[j].companyPartNo;
									  option.text = AllData[j].companyPartNo;
								  } else if(sortValue[i] == "mfgPartNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].mfgPartNo) return}  
								        r[r.length] = AllData[j].mfgPartNo;
									  option.text = AllData[j].mfgPartNo;
								  } else if(sortValue[i] == "serialNo"){
									  for(var z = 0; z < r.length; z++){  
								            if(r[z]==AllData[j].serialNoo) return}  
								        r[r.length] = AllData[j].serialNo;
									  option.text = AllData[j].serialNo;
								  }
						
						  y.add(option);
						  
					  }
					  
					  }
			  
				  
				
	
	
	
}


function PushToSelectedList(SelectId,pushId){
	var SelectedId=document.getElementById(SelectId);	

	 var result = [];
var options = SelectedId && SelectedId.options;
var opt;

for (var i=0, iLen=options.length; i<iLen; i++) {
  opt = options[i];

  if (opt.selected) {
    result.push(opt.value || opt.text);
  }	
}



var x=document.getElementById(pushId);
	for (var i = 0; i < result.length; i++){
		
	
				
				 var option = document.createElement("option");
				 option.text = result[i];
				
				 x.add(option);
			}
	
	
	
	var y=document.getElementById(SelectId);
	for (var i = 0; i < y.length; i++){
		//////alert("in for"+x.options[i].value);
		for(var j = 0; j < result.length; j++){
		  if (y.options[i].value == result[j]){
		  // ////alert("in if"+result[i])
			  y.remove(i);
		  }
		}
		  }
	
	
		
	} 
	
	
function ClearSelectedList(SelectId,pushId){
	var SelectedId=document.getElementById(SelectId);	

	 var result = [];
var options = SelectedId && SelectedId.options;
var opt;

for (var i=0, iLen=options.length; i<iLen; i++) {
  opt = options[i];

  if (opt.selected) {
    result.push(opt.value || opt.text);
  }	
}

////alert(result);
	

var x=document.getElementById(SelectId);
	for (var i = 0; i < x.length; i++){
		//////alert("in for"+x.options[i].value);
		for(var j = 0; j < result.length; j++){
		  if (x.options[i].value == result[j]){
		  // ////alert("in if"+result[i])
			  x.remove(i);
		  }
		}
		  }
	
	
	
	var y=document.getElementById(pushId);
	for (var i = 0; i < result.length; i++){
		
	
				
				 var option = document.createElement("option");
				 option.text = result[i];
				
				 y.add(option);
			}
				
		
		
	} 


function disableAfterSubmit(listValues){
	////alert("in disableAfterSubmit "+listValues)
	
	for(i=0;i<listValues.length;i++){
	
	document.getElementById(listValues[i]).disabled = true;
	}
	} 






function operationFleet(result,idValue){
	////alert(result,idValue);
	var  radioBtn= ["fleetRdio", "subFleetRdio", "tailRdio", "ataRdio", "cpnRdio", "mfgRdio"];
	for(var i=0;i<radioBtn.length;i++){
		document.getElementById(radioBtn[i]).disabled=true;
		}
	
	
	var text = "";
	var r = new Array(); 
	var temp=idValue;
	var x=document.getElementById(temp);
	for(var i = 0; i < result.length; i++)
		f:for (var j = 0; j < AllData.length; j++) {
	  var option = document.createElement("option");
	  if(temp == "fleetNo"){
		
		  if(result[i] == AllData[j].fleetNo){

				        for(var z = 0; z < r.length; z++){  
				            if(r[z]==AllData[j].fleetNo) continue f;}  
				        r[r.length] = AllData[j].fleetNo;
			  
			  
			  option.text = AllData[j].fleetNo;
			  x.add(option);
			  }
		  
	
	  
	  }else if(temp == "subfleetNo"){
		  if(result[i] == AllData[j].fleetNo){
			  
			  

		        for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].subfleetNo) continue f;}  
		        r[r.length] = AllData[j].subfleetNo;

		  option.text = AllData[j].subfleetNo;
		  x.add(option);
		  
		  }
	  }else if(temp == "ataSystemNo"){
		  if(result[i] == AllData[j].fleetNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].ataSystemNo) continue f;}  
		        r[r.length] = AllData[j].ataSystemNo;
		  option.text = AllData[j].ataSystemNo;
		  x.add(option);
		  }
	  } else if(temp == "tailNo"){
		  if(result[i] == AllData[j].fleetNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].tailNo) continue f;}  
		        r[r.length] = AllData[j].tailNo;
		  option.text = AllData[j].tailNo;
		  x.add(option);
		  }
	  } else if(temp == "companyPartNo"){
		  if(result[i] == AllData[j].fleetNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].companyPartNo) continue f;}  
		        r[r.length] = AllData[j].companyPartNo;
		        
		  option.text = AllData[j].companyPartNo;
		  x.add(option);
		  }
	  } else if(temp == "mfgPartNo"){
		  if(result[i] == AllData[j].fleetNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].mfgPartNo) continue f;}  
		        r[r.length] = AllData[j].mfgPartNo;
		  option.text = AllData[j].mfgPartNo;
		  x.add(option);
		  }
	  } 
	  
	}
}


function getFleets(){
	var fleetSelected=document.getElementById("fleetValue");	
	var insertValues = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	var listValues = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var result = [];
	    
	    for (var i = 0; i < fleetSelected.length; i++) {
	    	result.push(fleetSelected.options[i].value);
	    }
	   


 if(result.length != 0){
 
	 
	 for (var i = 0; i <insertValues.length ; i++){
		 if(insertValues[i] != 'fleetNo'){
			 operationFleet(result,insertValues[i]);
		 }
	 }
	
	disableAfterSubmit(listValues);
 
 }
 
}


function operationSubFleet(result,idValue){
	
	var components = ["ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	var  radioBtn= ["fleetRdio", "subFleetRdio", "tailRdio", "ataRdio", "cpnRdio", "mfgRdio"];
	if(idValue == 'fleetNo' && document.getElementById("fleetNo").length >0){
		
			
		
		return; 
	}else{
		for(var i=0;i<radioBtn.length;i++){
		document.getElementById(radioBtn[i]).disabled=true;
		}
		document.getElementById(idValue).options.length=0;
	}
	
	
	var r = new Array(); 
	var temp=idValue;
	var x=document.getElementById(temp);
	for(var i = 0; i < result.length; i++)
		f:for (var j = 0; j < AllData.length; j++) {
	  var option = document.createElement("option");
	  if(temp == "fleetNo"){
		
		  if(result[i] == AllData[j].subfleetNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].fleetNo) continue f;}  
		        r[r.length] = AllData[j].fleetNo;
			  option.text = AllData[j].fleetNo;
			  x.add(option);
			  }
	
	  
	  }else if(temp == "subfleetNo"){
		  if(result[i] == AllData[j].subfleetNo){

		        for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].subfleetNo) continue f;}  
		        r[r.length] = AllData[j].subfleetNo;

		  option.text = AllData[j].subfleetNo;
		  x.add(option);
		  
		  }
	  }else if(temp == "ataSystemNo"){
		  if(result[i] == AllData[j].subfleetNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].ataSystemNo) continue f;}  
		        r[r.length] = AllData[j].ataSystemNo;
		  option.text = AllData[j].ataSystemNo;
		  x.add(option);
		  }
	  } else if(temp == "tailNo"){
		  if(result[i] == AllData[j].subfleetNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].tailNo) continue f;}  
		        r[r.length] = AllData[j].tailNo;
		  option.text = AllData[j].tailNo;
		  x.add(option);
		  }
	  } else if(temp == "companyPartNo"){
		  if(result[i] == AllData[j].subfleetNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].companyPartNo) continue f;}  
		        r[r.length] = AllData[j].companyPartNo;
		  option.text = AllData[j].companyPartNo;
		  x.add(option);
		  }
	  } else if(temp == "mfgPartNo"){
		  if(result[i] == AllData[j].subfleetNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].mfgPartNo) continue f;}  
		        r[r.length] = AllData[j].mfgPartNo;
		  option.text = AllData[j].mfgPartNo;
		  x.add(option);
		  }
	  } 
	  
	}
}


function getSubFleets(){
	var fleetSelected=document.getElementById("subfleetValue");	
	var insertValues = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	var listFleet = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var listSubFleet= ["subfleetNo", "subfleetValue", "subfleetPush", "subfleetClear", "subfleetSubmit"];
	var result = [];
	    
	    for (var i = 0; i < fleetSelected.length; i++) {
	    	result.push(fleetSelected.options[i].value);
	    }
	 
	 
	 if(result.length != 0){
		 for (var i = 0; i <insertValues.length ; i++){
			 if(insertValues[i] != 'subfleetNo'){
				 
				 operationSubFleet(result,insertValues[i]);
			 }
		 }
		
		disableAfterSubmit(listFleet);
		disableAfterSubmit(listSubFleet);
	 
		
	 
}
}





function operationTail(result,idValue){
	var  radioBtn= ["fleetRdio", "subFleetRdio", "tailRdio", "ataRdio", "cpnRdio", "mfgRdio"];
	var components = ["ataSystemNo", "companyPartNo", "mfgPartNo"];
	if(idValue == 'fleetNo' && document.getElementById("fleetNo").length >0){
		
			
		
		return; 
	}else if(idValue == 'subfleetNo' && document.getElementById("subfleetNo").length >0){
		return;
	}else{
		for(var i=0;i<radioBtn.length;i++){
			document.getElementById(radioBtn[i]).disabled=true;
			}
		document.getElementById(idValue).options.length=0;
	}
	
	
	var r = new Array(); 
	var temp=idValue;
	var x=document.getElementById(temp);
	for(var i = 0; i < result.length; i++)
		f:for (var j = 0; j < AllData.length; j++) {
	  var option = document.createElement("option");
	  if(temp == "fleetNo"){
		
		  if(result[i] == AllData[j].tailNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].fleetNo) continue f;}  
		        r[r.length] = AllData[j].fleetNo;
			  option.text = AllData[j].fleetNo;
			  x.add(option);
			  }
	
	  
	  }else if(temp == "subfleetNo"){
		  if(result[i] == AllData[j].tailNo){

		        for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].subfleetNo) continue f;}  
		        r[r.length] = AllData[j].subfleetNo;

		  option.text = AllData[j].subfleetNo;
		  x.add(option);
		  
		  }
	  }else if(temp == "ataSystemNo"){
		  for(var z = 0; z < r.length; z++){  
	            if(r[z]==AllData[j].ataSystemNo) continue f;}  
	        r[r.length] = AllData[j].ataSystemNo;
		  if(result[i] == AllData[j].tailNo){
		  option.text = AllData[j].ataSystemNo;
		  x.add(option);
		  }
	  } else if(temp == "tailNo"){
		  if(result[i] == AllData[j].tailNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].tailNo) continue f;}  
		        r[r.length] = AllData[j].tailNo;
		  option.text = AllData[j].tailNo;
		  x.add(option);
		  }
	  } else if(temp == "companyPartNo"){
		  if(result[i] == AllData[j].tailNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].companyPartNo) continue f;}  
		        r[r.length] = AllData[j].companyPartNo;
		  option.text = AllData[j].companyPartNo;
		  x.add(option);
		  }
	  } else if(temp == "mfgPartNo"){
		  if(result[i] == AllData[j].tailNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].mfgPartNo) continue f;}  
		        r[r.length] = AllData[j].mfgPartNo;
		  option.text = AllData[j].mfgPartNo;
		  x.add(option);
		  }
	  } 
	  
	}
}
function getTailNo(){
	var fleetSelected=document.getElementById("tailValue");	
	var insertValues = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	var listFleet = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var listSubFleet= ["subfleetNo", "subfleetValue", "subfleetPush", "subfleetClear", "subfleetSubmit"];
	var listTail= ["tailNo", "tailValue", "tailPush", "tailClear", "tailSubmit"];
	var result = [];
	    
	    for (var i = 0; i < fleetSelected.length; i++) {
	    	result.push(fleetSelected.options[i].value);
	    }
	 
	 
	 if(result.length != 0){
		 
		 for (var i = 0; i <insertValues.length ; i++){
			 if(insertValues[i] != 'tailNo'){
				 
				 operationTail(result,insertValues[i]);
			 }
		 }
		
		disableAfterSubmit(listFleet);
		disableAfterSubmit(listSubFleet);
		disableAfterSubmit(listTail);
	
	 
}
	
}






function operationATA(result,idValue){
	var  radioBtn= ["fleetRdio", "subFleetRdio", "tailRdio", "ataRdio", "cpnRdio", "mfgRdio"];
	var components = ["companyPartNo", "mfgPartNo"];
	if(idValue == 'fleetNo' && document.getElementById("fleetNo").length >0){

		return; 
	}else if(idValue == 'subfleetNo' && document.getElementById("subfleetNo").length >0){
		return;
	}
	else if(idValue == 'tailNo' && document.getElementById("tailNo").length >0){
		return;
	}else{
		for(var i=0;i<radioBtn.length;i++){
			document.getElementById(radioBtn[i]).disabled=true;
			}
		document.getElementById(idValue).options.length=0;
	}
	
	
	var r = new Array(); 
	var temp=idValue;
	var x=document.getElementById(temp);
	for(var i = 0; i < result.length; i++)
		f:for (var j = 0; j < AllData.length; j++) {
	  var option = document.createElement("option");
	  if(temp == "fleetNo"){
		
		  if(result[i] == AllData[j].ataSystemNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].fleetNo) continue f;}  
		        r[r.length] = AllData[j].fleetNo;
			  option.text = AllData[j].fleetNo;
			  x.add(option);
			  }
	
	  
	  }else if(temp == "subfleetNo"){
		  if(result[i] == AllData[j].ataSystemNo){

		        for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].subfleetNo) continue f;}  
		        r[r.length] = AllData[j].subfleetNo;

		  option.text = AllData[j].subfleetNo;
		  x.add(option);
		  
		  }
	  }else if(temp == "ataSystemNo"){
		  for(var z = 0; z < r.length; z++){  
	            if(r[z]==AllData[j].ataSystemNo) continue f;}  
	        r[r.length] = AllData[j].ataSystemNo;
		  if(result[i] == AllData[j].ataSystemNo){
		  option.text = AllData[j].ataSystemNo;
		  x.add(option);
		  }
	  } else if(temp == "tailNo"){
		  if(result[i] == AllData[j].ataSystemNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].tailNo) continue f;}  
		        r[r.length] = AllData[j].tailNo;
		  option.text = AllData[j].tailNo;
		  x.add(option);
		  }
	  } else if(temp == "companyPartNo"){
		  if(result[i] == AllData[j].ataSystemNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].companyPartNo) continue f;}  
		        r[r.length] = AllData[j].companyPartNo;
		  option.text = AllData[j].companyPartNo;
		  x.add(option);
		  }
	  } else if(temp == "mfgPartNo"){
		  if(result[i] == AllData[j].ataSystemNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].mfgPartNo) continue f;}  
		        r[r.length] = AllData[j].mfgPartNo;
		  option.text = AllData[j].mfgPartNo;
		  x.add(option);
		  }
	  } 
	  
	}
}



function getATASystemNo(){
	 
	var fleetSelected=document.getElementById("ataSystemNo");	
	var insertValues = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	var listFleet = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var listSubFleet= ["subfleetNo", "subfleetValue", "subfleetPush", "subfleetClear", "subfleetSubmit"];
	var listata= ["ataSystemNo", "ataValue", "ataPush", "ataClear", "ataSubmit"];
	var listTail= ["tailNo", "tailValue", "tailPush", "tailClear", "tailSubmit"];
	var result = [];
	    
	    for (var i = 0; i < fleetSelected.length; i++) {
	    	result.push(fleetSelected.options[i].value);
	    }
	 
	 
	 if(result.length != 0){
		 
		 for (var i = 0; i <insertValues.length ; i++){
			 if(insertValues[i] != 'ataSystemNo'){
				 
				 operationATA(result,insertValues[i]);
			 }
		 }
		
		disableAfterSubmit(listFleet);
		disableAfterSubmit(listSubFleet);
		disableAfterSubmit(listTail);
		disableAfterSubmit(listata);
	
	 
}
	
	
	
}












function operationCPN(result,idValue){
	var  radioBtn= ["fleetRdio", "subFleetRdio", "tailRdio", "ataRdio", "cpnRdio", "mfgRdio"];
	var components = ["mfgPartNo"];
	if(idValue == 'fleetNo' && document.getElementById("fleetNo").length >0){
	return; 
	}else if(idValue == 'subfleetNo' && document.getElementById("subfleetNo").length >0){
		return;
	}else if(idValue == 'tailNo' && document.getElementById("tailNo").length >0){
	return;
	}else if(idValue == 'ataSystemNo' && document.getElementById("ataSystemNo").length >0){
	return;
	}else{
		for(var i=0;i<radioBtn.length;i++){
			document.getElementById(radioBtn[i]).disabled=true;
			}
		document.getElementById(idValue).options.length=0;
	}
	
	var r = new Array(); 
	
	var temp=idValue;
	var x=document.getElementById(temp);
	for(var i = 0; i < result.length; i++)
		f:for (var j = 0; j < AllData.length; j++) {
	  var option = document.createElement("option");
	  if(temp == "fleetNo"){
		
		  if(result[i] == AllData[j].companyPartNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].fleetNo) continue f;}  
		        r[r.length] = AllData[j].fleetNo;
			  option.text = AllData[j].fleetNo;
			  x.add(option);
			  }
	
	  
	  }else if(temp == "subfleetNo"){
		  if(result[i] == AllData[j].companyPartNo){

		        for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].subfleetNo) continue f;}  
		        r[r.length] = AllData[j].subfleetNo;
		  option.text = AllData[j].subfleetNo;
		  x.add(option);
		  
		  }
	  }else if(temp == "ataSystemNo"){
		  for(var z = 0; z < r.length; z++){  
	            if(r[z]==AllData[j].ataSystemNo) continue f;}  
	        r[r.length] = AllData[j].ataSystemNo;
		  if(result[i] == AllData[j].companyPartNo){
		  option.text = AllData[j].ataSystemNo;
		  x.add(option);
		  }
	  } else if(temp == "tailNo"){
		  if(result[i] == AllData[j].companyPartNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].tailNo) continue f;}  
		        r[r.length] = AllData[j].tailNo;
		  option.text = AllData[j].tailNo;
		  x.add(option);
		  }
	  } else if(temp == "companyPartNo"){
		  if(result[i] == AllData[j].companyPartNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].companyPartNo) continue f;}  
		        r[r.length] = AllData[j].companyPartNo;
		  option.text = AllData[j].companyPartNo;
		  x.add(option);
		  }
	  } else if(temp == "mfgPartNo"){
		  if(result[i] == AllData[j].companyPartNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].mfgPartNo) continue f;}  
		        r[r.length] = AllData[j].mfgPartNo;
		  option.text = AllData[j].mfgPartNo;
		  x.add(option);
		  }
	  } 
	  
	}
}




function getCompanyPartNo(){
	var fleetSelected=document.getElementById("companyPartNo");	
	var insertValues = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	var listFleet = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var listSubFleet= ["subfleetNo", "subfleetValue", "subfleetPush", "subfleetClear", "subfleetSubmit"];
	var listTail= ["tailNo", "tailValue", "tailPush", "tailClear", "tailSubmit"];
	var listATA= ["ataSystemNo", "ataValue", "ataPush", "ataClear", "ataSubmit"];	
	var listCPN= ["companyPartNo", "companyValue", "companyPush", "companyClear", "companySubmit"];
	var result = [];
	    
	    for (var i = 0; i < fleetSelected.length; i++) {
	    	result.push(fleetSelected.options[i].value);
	    }
	 
	 
	 if(result.length != 0){
		 
		 for (var i = 0; i <insertValues.length ; i++){
			 if(insertValues[i] != 'companyPartNo'){
				 
				 operationCPN(result,insertValues[i]);
			 }
		 }
		
		disableAfterSubmit(listFleet);
		disableAfterSubmit(listSubFleet);
		disableAfterSubmit(listTail);
		disableAfterSubmit(listATA);
		disableAfterSubmit(listCPN);
	
	 
}
	
}






function operationMFG(result,idValue){
	
	var  radioBtn= ["fleetRdio", "subFleetRdio", "tailRdio", "ataRdio", "cpnRdio", "mfgRdio"];
	if(idValue == 'fleetNo' && document.getElementById("fleetNo").length >0){
	return; 
	}else if(idValue == 'subfleetNo' && document.getElementById("subfleetNo").length >0){
		return;
	}else if(idValue == 'tailNo' && document.getElementById("tailNo").length >0){
	return;
	}else if(idValue == 'ataSystemNo' && document.getElementById("ataSystemNo").length >0){
	return;
	}else if(idValue == 'companyPartNo' && document.getElementById("companyPartNo").length >0){
	return;
	}else{
		for(var i=0;i<radioBtn.length;i++){
			document.getElementById(radioBtn[i]).disabled=true;
			}
	}
	var r = new Array(); 
	
	var temp=idValue;
	var x=document.getElementById(temp);
	for(var i = 0; i < result.length; i++)
		f:for (var j = 0; j < AllData.length; j++) {
	  var option = document.createElement("option");
	  if(temp == "fleetNo"){
		
		  if(result[i] == AllData[j].mfgPartNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].fleetNo) continue f;}  
		        r[r.length] = AllData[j].fleetNo;
			  option.text = AllData[j].fleetNo;
			  x.add(option);
			  }
	
	  
	  }else if(temp == "subfleetNo"){
		  if(result[i] == AllData[j].mfgPartNo){

		        for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].subfleetNo) continue f;}  
		        r[r.length] = AllData[j].subfleetNo;
		  option.text = AllData[j].subfleetNo;
		  x.add(option);
		  
		  }
	  }else if(temp == "ataSystemNo"){
		  for(var z = 0; z < r.length; z++){  
	            if(r[z]==AllData[j].ataSystemNo) continue f;}  
	        r[r.length] = AllData[j].ataSystemNo;
		  if(result[i] == AllData[j].mfgPartNo){
		  option.text = AllData[j].ataSystemNo;
		  x.add(option);
		  }
	  } else if(temp == "tailNo"){
		  if(result[i] == AllData[j].mfgPartNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].tailNo) continue f;}  
		        r[r.length] = AllData[j].tailNo;
		  option.text = AllData[j].tailNo;
		  x.add(option);
		  }
	  } else if(temp == "companyPartNo"){
		  if(result[i] == AllData[j].mfgPartNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].companyPartNo) continue f;}  
		        r[r.length] = AllData[j].companyPartNo;
		  option.text = AllData[j].companyPartNo;
		  x.add(option);
		  }
	  } else if(temp == "mfgPartNo"){
		  if(result[i] == AllData[j].mfgPartNo){
			  for(var z = 0; z < r.length; z++){  
		            if(r[z]==AllData[j].mfgPartNo) continue f;}  
		        r[r.length] = AllData[j].mfgPartNo;
		  option.text = AllData[j].mfgPartNo;
		  x.add(option);
		  }
	  } 
	  
	}
}




function getMFGPartNo(){

	var fleetSelected=document.getElementById("mfgPartNo");	
	var insertValues = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	var listFleet = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var listSubFleet= ["subfleetNo", "subfleetValue", "subfleetPush", "subfleetClear", "subfleetSubmit"];
	var listTail= ["tailNo", "tailValue", "tailPush", "tailClear", "tailSubmit"];
	var listATA= ["ataSystemNo", "ataValue", "ataPush", "ataClear", "ataSubmit"];	
	var listCPN= ["companyPartNo", "companyValue", "companyPush", "companyClear", "companySubmit"];
	var listMFG= ["mfgPartNo", "mfgValue", "mfgPush", "mfgClear", "mfgSubmit"];
	
	var result = [];
	    
	    for (var i = 0; i < fleetSelected.length; i++) {
	    	result.push(fleetSelected.options[i].value);
	    }
	 
	 
	 if(result.length != 0){
		 
		 for (var i = 0; i <insertValues.length ; i++){
			 if(insertValues[i] != 'mfgPartNo'){
				 
				 operationMFG(result,insertValues[i]);
			 }
		 }
		
		disableAfterSubmit(listFleet);
		disableAfterSubmit(listSubFleet);
		disableAfterSubmit(listTail);
		disableAfterSubmit(listATA);
		disableAfterSubmit(listCPN);
		disableAfterSubmit(listMFG);
	
	 
}

}




/*function fleetOperation(result,idValue){
	
	 var x=document.getElementById("fleetNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				
			 if(idValue == "subfleetNo"){
				
							if(result[i] == AllData[j].subfleetNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].fleetNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  }else if(idValue == "ataSystemNo"){
							if(result[i] == AllData[j].ataSystemNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].fleetNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "tailNo"){
							if(result[i] == AllData[j].tailNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].fleetNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "companyPartNo"){
							if(result[i] == AllData[j].companyPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].fleetNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "mfgPartNo"){
							if(result[i] == AllData[j].mfgPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].fleetNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } 
				
				
				
				
				

			}
		}
		document.getElementById("fleetNo").disabled = true;
		document.getElementById("fleetNoClear").disabled = true;	
		document.getElementById("fleetNoSubmit").disabled = true;	
	
}






function subFleetOperation(result,idValue){

	//////////alert("hello1"+idValue)
	 var x=document.getElementById("subfleetNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				
			 if(idValue == "subfleetNo"){
				
							if(result[i] == AllData[j].subfleetNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].subfleetNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  }else if(idValue == "ataSystemNo"){
							if(result[i] == AllData[j].ataSystemNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].subfleetNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "tailNo"){
							if(result[i] == AllData[j].tailNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].subfleetNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "companyPartNo"){
							if(result[i] == AllData[j].companyPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].subfleetNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "mfgPartNo"){
							if(result[i] == AllData[j].mfgPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].subfleetNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } 
				
				
				
				
				

			}
		}
		document.getElementById("subfleetNo").disabled = true;
		document.getElementById("subfleetNoClear").disabled = true;	
		document.getElementById("subfleetNoSubmit").disabled = true;	
	



}

function tailOperation(result,idValue){
	
	 var x=document.getElementById("tailNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				
			 if(idValue == "subfleetNo"){
				
							if(result[i] == AllData[j].subfleetNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].tailNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  }else if(idValue == "ataSystemNo"){
							if(result[i] == AllData[j].ataSystemNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].tailNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "tailNo"){
							if(result[i] == AllData[j].tailNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].tailNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "companyPartNo"){
							if(result[i] == AllData[j].companyPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].tailNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "mfgPartNo"){
							if(result[i] == AllData[j].mfgPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].tailNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } 
				
				
				
				
				

			}
		}
		document.getElementById("tailNo").disabled = true;
		document.getElementById("tailNoClear").disabled = true;	
		document.getElementById("tailNoSubmit").disabled = true;	
	
}







function cpnOperation(result,idValue){
	
	 var x=document.getElementById("companyPartNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				
			 if(idValue == "subfleetNo"){
				
							if(result[i] == AllData[j].subfleetNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].companyPartNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  }else if(idValue == "ataSystemNo"){
							if(result[i] == AllData[j].ataSystemNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].companyPartNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "tailNo"){
							if(result[i] == AllData[j].tailNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].companyPartNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "companyPartNo"){
							if(result[i] == AllData[j].companyPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].companyPartNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "mfgPartNo"){
							if(result[i] == AllData[j].mfgPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].companyPartNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } 
				
				
				
				
				

			}
		}
		document.getElementById("companyPartNo").disabled = true;
		document.getElementById("companyPartNoClear").disabled = true;	
		document.getElementById("companyPartNoSubmit").disabled = true;	
	
}




function mfgOperation(result,idValue){
	
	 var x=document.getElementById("mfgPartNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				
			 if(idValue == "subfleetNo"){
				
							if(result[i] == AllData[j].subfleetNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].mfgPartNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  }else if(idValue == "ataSystemNo"){
							if(result[i] == AllData[j].ataSystemNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].mfgPartNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "tailNo"){
							if(result[i] == AllData[j].tailNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].mfgPartNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "companyPartNo"){
							if(result[i] == AllData[j].companyPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].mfgPartNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "mfgPartNo"){
							if(result[i] == AllData[j].mfgPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].mfgPartNo;
								 //////////alert("true "+option.text);
								 x.add(option);
							}
					  } 
				
				
				
				
				

			}
		}
		document.getElementById("mfgPartNo").disabled = true;
		document.getElementById("mfgPartNoClear").disabled = true;	
		document.getElementById("mfgPartNoSubmit").disabled = true;	
	
}


*/
function clearData()
{
	var selectBox=["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	var selectValue=["fleetValue", "subfleetValue", "ataValue", "tailValue", "companyValue", "mfgValue"];
	for(var i=0;i<selectBox.length;i++){
	document.getElementById(selectBox[i]).options.length=0
	document.getElementById(selectValue[i]).options.length=0
	document.getElementById(selectValue[i]).disabled=false;
}
	
	
	
	
	
	
	
	
		


}


function getFilterValue(){
	
	var  filterID = $('#filterId').val();
	var  filterName = $('#filterName').val();
	var fromDate =  $('#fromDate').val();
	var toDate =  $('#toDate').val();
	//var sortByEle = document.getElementById("sortBy");
	//var sortBySelected = sortByEle.options[sortByEle.selectedIndex].value;
	
	var installedUnit= document.getElementById("installedUnit").checked ? true:false;
	var newUnit =  document.getElementById("newUnit").checked ? true:false;
	var removedUnit =   document.getElementById("removedUnit").checked ? true:false;
	
	//alert(removedUnit);
	//var problemUnit =  document.getElementById("problemUnit").checked ? true:false;
	//var overhauledUnit =   document.getElementById("overhauledUnit").checked ? true:false;
		
	var filterJson = {"filterID" :filterID, "filterName":filterName, "fromDate":fromDate,"toDate":toDate, "sortBy": sortChecked, "filterBy":{ "newUnit":newUnit, "removedUnit":removedUnit, "installedUnit":installedUnit/*, "problemUnit" :problemUnit , "overhauledUnit":overhauledUnit*/} };
	 return  JSON.stringify(filterJson)
}
var saveFilter = function(){
	var info=''
		var msgType="msg";
	
	if(isValidSaveForm())
		{
	var  filterName = $('#filterName').val();
	var  fromDate = $('#fromDate').val();
	var toDate =  $('#toDate').val();
//alert(JSON.stringify(getFilterValue()));
		$.ajax({
			 type : "POST",
			 contentType : "application/json",
			 url : "/saveFilter",
			 data : getFilterValue(),
			 dataType : 'json',
	         success : function(data) {
	                
	              
	         }
	         
	  });
		 info="Filter saved successfully"
			
	display(info,msgType);
		
	
	}
	
	
} 


/*//Suman
var saveAsDefaultFilter = function(){
	//////////alert(getFilterValue());
	$.ajax({
		 type : "POST",
		 contentType : "application/json",
		 url : "/saveAsDefaultFilter",
		 data : getFilterValue(),
		 dataType : 'json',
         success : function(data) {
                
                
         }
         
  });
	
}*/


var getFilters = function(){
//alert('hi');
	$.ajax({
		url : "/getFilters",
		success : function(data) {
			//////////alert(data);
			filters=data;
			//alert(JSON.stringify(data));
		}

	});

}





/*
function loadFilterList()
{
//alert('hi I m in loadFilterList ');
	$("#filterListTable tr").remove();

	$.ajax({
		url: '/getFilters',             
	}).done(function (filterList) {
		filters=filterList
		//alert('hey');
		//alert(JSON.stringify(filters));
		var tr=[];
		var preText= "onclick=loadFilter('"
			var postText="')>"
				for (var i = 0; i < filterList.length; i++) {
					var filter=filterList[i].filterName;
					tr.push('<tr>');
					tr.push("<td><a href='#'"+preText+filter+postText+filter + "</a></td>");
					tr.push('</tr>');
				}
		$('table[name=filterListTable]').append($(tr.join('')));
	});
}*/




 
function filterByStatus()
{
	
	////alert(AllData+"in load filter")
	checkedStatus=[];
	var installedUnit= document.getElementById("installedUnit")
	var newUnit=document.getElementById("newUnit")
	var removedUnit=document.getElementById("removedUnit")	
	var problemUnit=document.getElementById("problemUnit")
	var overhauledUnit=document.getElementById("overhauledUnit")

	if(installedUnit.checked || newUnit.checked){
			removedUnit.setAttribute("disabled", "true");
		}
	else{
			document.getElementById("removedUnit").disabled= false;
	  }
	
	var serials= [];
	var j=0
	
	if(installedUnit.checked){
	

		checkedStatus=[];
		
		checkedStatus.push("Installed Unit");
		
		
		
	}
	
	if(newUnit.checked)
	{

		checkedStatus=[];
		
		
		checkedStatus.push("New Unit");
		

	}
	
	if(newUnit.checked && installedUnit.checked)
		{

		
		checkedStatus=[];
		checkedStatus.push("Installed Unit");
		checkedStatus.push("New Unit");
		
		
		}

	if(removedUnit.checked){
		installedUnit.setAttribute("disabled", "true");
		newUnit.setAttribute("disabled", "true");

		
		checkedStatus=[];
		
		checkedStatus.push("Inactive");
		
			
	}
	else
		{
		document.getElementById("installedUnit").disabled= false;
		document.getElementById("newUnit").disabled= false;
		}


		
	filterSort()
	
		

	
}









function loadFilterList()
{
	
	$("#filterListTable tr").remove();

	$.ajax({
		url: '/getFilters',             
	}).done(function (filterList) {
		filters=filterList
		var tr=[];
		tr.push('<tr style="color:#009688;">');
		tr.push("<th>Filter Name</th>");
		tr.push("<th>Start Date (yyyy-mm-dd)</th>");
		tr.push("<th>End  Date (yyyy-mm-dd)</th>");
		tr.push('</tr>');
	
		var preText= "onclick=loadFilter('"
			var postText="')>"
				for (var i = 0; i < filterList.length; i++) {
					var filter=filterList[i].filterName;
					tr.push('<tr">');
					tr.push("<td><a href='#'"+preText+filter+postText+filter + "</a></td>");
					tr.push("<td>"+filterList[i].fromDate+"</td>");
					tr.push("<td>"+filterList[i].toDate+"</td>");
					
					tr.push('</tr>');
				}
		$('table[name=filterListTable]').append($(tr.join('')));
	});
	
	
	
}



 
function loadFilter(filterName){
	document.getElementById("modelClose").click();
	var cName=["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	var radioId=["fleetRdio", "subFleetRdio", "ataRdio", "tailRdio", "cpnRdio", "mfgRdio"];
	
	
	var filterName;
	clearAll();
	
	for (var i = 0; i < filters.length; i++) {
		var filter=filters[i].filterName;
		if (filter==filterName)
		{
			
			document.getElementById("filterName").value=filterName
			document.getElementById("fromDate").value=filters[i].fromDate;
			document.getElementById("toDate").value=filters[i].toDate;
			//document.getElementById("sortBy").value=filters[i].sortBy
			
			for(var j=0; j<cName.length; j++)
				{
				
				   if(cName[j]==filters[i].sortBy)
					   {
					       document.getElementById(radioId[j]).checked=true;
					       sortChecked=filters[i].sortBy;
					   }
				}
			
			
			document.getElementById("installedUnit").checked=filters[i].filterBy.installedUnit;
			document.getElementById("newUnit").checked=filters[i].filterBy.newUnit;
			document.getElementById("removedUnit").checked=filters[i].filterBy.removedUnit;
			//document.getElementById("problemUnit").checked=filters[i].filterBy.problemUnit;
		//	document.getElementById("overhauledUnit").checked=filters[i].filterBy.overhauledUnit;
		}
	}
	

/*functionsort();*/

	filterByStatus();
	
	
}

 

function loadRecentFilter()
{
	
	
	
	var cName=["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	var radioId=["fleetRdio", "subFleetRdio", "ataRdio", "tailRdio", "cpnRdio", "mfgRdio"];
	var radioValue;
	
	$.ajax({
		url: '/getFilters',             
	}).done(function (filterList) {
		var filters1=filterList
		filters=filterList
		
				////alert(filters1)
            i=filterList.length-1;
         
            document.getElementById("filterName").value=filters1[i].filterName;
			document.getElementById("fromDate").value=filters1[i].fromDate;
			document.getElementById("toDate").value=filters1[i].toDate ;
			for(var j=0; j<cName.length; j++)
			{
			
			   if(cName[j]==filters1[i].sortBy)
				   {
				       document.getElementById(radioId[j]).checked=true;
				       radioValue=filters1[i].sortBy;
				       sortChecked=filters1[i].sortBy;

				  
				   }
			}
			
			document.getElementById("installedUnit").checked=filters1[i].filterBy.installedUnit;
			document.getElementById("newUnit").checked=filters1[i].filterBy.neweUnit;
			document.getElementById("removedUnit").checked=filters1[i].filterBy.removedUnit;
			//document.getElementById("problemUnit").checked=filters1[i].filterBy.problemUnit;
			//document.getElementById("overhauledUnit").checked=filters1[i].filterBy.overhauledUnit;


			
			
			functionFromDate();
         
	});

	

}


 

function isUniqueFilterName(filterName)
{
	
	
	
	
	for(i=0; i<filters.length; i++)
		{
		 if(filterName==filters[i].filterName)
			 {
			   return false;
			  
			 }
		}
	
    return true;
    
}



function clearAll()
{
	var submitValues = ["fleetNo", "subfleet", "ata", "tail", "company", "mfg"];
	var btnValues = ["fleet", "subfleet", "ata", "tail", "company", "mfg"];
	var  radioBtn= ["fleetRdio", "subFleetRdio", "tailRdio", "ataRdio", "cpnRdio", "mfgRdio"];
	var makeEmpty=["filterName", "fromDate", "toDate", "fleet", "fleet1", "subFleet","subFleet1", "tail", "tail1","ataNo", "ataNo1", "cpnNo","cpnNo1", "mfgNo", "mfgNo1"];
	var selectBox=["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	var selectValue=["fleetValue", "subfleetValue", "ataValue", "tailValue", "companyValue", "mfgValue"];
	fleet = document.getElementById("fleet")
	
	for(var i=0;i<makeEmpty.length;i++){
		document.getElementById(makeEmpty[i]).value=""
	}
	
	document.getElementById("installedUnit").checked=false
	document.getElementById("newUnit").checked=false
	document.getElementById("removedUnit").checked=false

	for(var i=0;i<selectBox.length;i++){
	document.getElementById(selectBox[i]).options.length=0
	document.getElementById(selectValue[i]).options.length=0
	document.getElementById(selectValue[i]).disabled=false;
}
	
	/*	
 * document.getElementById("fleetNo").options.length=0
	document.getElementById("fleetValue").options.length=0
	document.getElementById("subfleetNo").options.length=0
	document.getElementById("subfleetValue").options.length=0
	document.getElementById("ataSystemNo").options.length=0
	document.getElementById("ataValue").options.length=0
	document.getElementById("tailNo").options.length=0
	document.getElementById("tailValue").options.length=0
	document.getElementById("companyPartNo").options.length=0
	document.getElementById("companyValue").options.length=0
	document.getElementById("mfgPartNo").options.length=0
	document.getElementById("mfgValue").options.length=0*/
	
	
	for(var i=0;i<radioBtn.length;i++){
		document.getElementById(radioBtn[i]).disabled=false;
		document.getElementById(radioBtn[i]).checked=false;
		}
	for(var i=0;i<submitValues.length;i++){
		var temp;
		temp=submitValues[i]+'Submit';
		document.getElementById(temp).disabled=false;
		
		}
	for(var i=0;i<btnValues.length;i++){
		var temp;
		temp=btnValues[i]+'Push';
		document.getElementById(temp).disabled=false;
		
		}
	for(var i=0;i<btnValues.length;i++){
		var temp;
		temp=btnValues[i]+'Clear';
		document.getElementById(temp).disabled=false;
		
		}

	 AllData=[];
	 sortChecked=null;

}
function clearSelectList(list) {
    // when length is 0, the evaluation will return false.
	i=0
    while (i<list.options.length) {
        // continue to remove the first option until no options remain.
        list.remove(i);
    }
}

function isValidDisplayReport()
{
	fromDate=document.getElementById("fromDate").value
	toDate=document.getElementById("toDate").value
	if(fromDate=='' || toDate=='')
		{
		   //////alert()
		 display("Please enter the date range","error")
		
		}
		
    



}




 

function isValidSaveForm()
{
	
   var errorMsg=""
	   var msgType="error";
   var filterName=document.getElementById("filterName").value
   var fromDate=document.getElementById("fromDate").value
   var toDate=document.getElementById("toDate").value
   if(filterName=='')
   {
   errorMsg="Please enter filter Name"
    display(errorMsg,msgType)
	   
    return false
   }
   else if(/\s/g.test(filterName))
   	{
		errorMsg="No spaces are allowed in filter name"
			display(errorMsg,msgType)
		return false
   	}
   
   if(!isUniqueFilterName(filterName))
	   { ////alert("HI I am unique")
	   		errorMsg="Please choose different filter name. This name is already exist in database"
	   		 display(errorMsg,msgType)
		    return false
	   }
   if(fromDate=='')
	   {
	   		errorMsg="Please enter From date"
	   		 display(errorMsg,msgType)
		    return false
	   }
   if(toDate=='')
   {
   		errorMsg="Please enter To date"
   		 display(errorMsg,msgType)
	    return false
   }
return true

}



function display(msg,msgType)
{
	//////alert("in display"+msg)
	

	var modal = document.getElementById('msgModal');
	document.getElementById(msgType).innerHTML=msg;
	
	//msg.innerHTML="Filter Saved Successfully"
	
	// Get the <span> element that closes the modal
	var span = document.getElementById("close");
	    modal.style.display = "block";
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		document.getElementById(msgType).innerHTML=''
	    modal.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	    	document.getElementById(msgType).innerHTML=''
	        modal.style.display = "none";
	    }
	}
	
}












