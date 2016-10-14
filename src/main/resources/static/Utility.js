
var filters=[];
var checkedStatus = [];
var AllData;
var serialNoSelected;
var globalData=[]
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
	
	//alert('start' + start + 'end' + end);
	$.ajax({
		url : "/loadComponent/" + start + "/" + end,
		success : function(data) {
			//alert('in getComponent' + data);
			var text = "";
			AllData=data;
			var x=document.getElementById("fleetNo");
			for (var i = 0; i < data.length; i++) {
				  var option = document.createElement("option");
				    option.text = data[i].fleetNo;
				    x.add(option);
			}

			var text = "";
			
			var x=document.getElementById("subfleetNo");
			for (var i = 0; i < data.length; i++) {
				  var option = document.createElement("option");
				    option.text = data[i].subfleetNo;
				    x.add(option);
			}
			var text = "";
			
			var x=document.getElementById("tailNo");
			for (var i = 0; i < data.length; i++) {
				  var option = document.createElement("option");
				    option.text = data[i].tailNo;
				    x.add(option);
			}
			var text = "";
			
			var x=document.getElementById("companyPartNo");
			for (var i = 0; i < data.length; i++) {
				  var option = document.createElement("option");
				    option.text = data[i].companyPartNo;
				    x.add(option);
			}
			var text = "";
			
			var x=document.getElementById("mfgPartNo");
			for (var i = 0; i < data.length; i++) {
				  var option = document.createElement("option");
				    option.text = data[i].mfgPartNo;
				    
				    x.add(option);
				   
			}
			var text = "";
			
			var x=document.getElementById("ataSystemNo");
			for (var i = 0; i < data.length; i++) {
				  var option = document.createElement("option");
				    option.text = data[i].ataSystemNo;
				    x.add(option);
			}
			var text = "";
			
			var x=document.getElementById("serialNo");
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
	//alert(sortSelected);
	var sortValue = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo","serialNo"];
	var AllValue = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo","serialNo"];
	if(sortSelected != "null"){
for (i = 0; i < sortValue.length; i++) {
	
		if(sortSelected != sortValue[i]){
			
			//alert(sortValue[i]);
		//document.getElementById(sortValue[i]).disabled = false;

		document.getElementById(sortValue[i]).options.length = 0;
		}else{
			document.getElementById(sortValue[i]).disabled = false;
			document.getElementById(sortValue[i]).options.length = 0;
			//alert("Hello"+ AllData);
			var text = "";
			var temp=sortValue[i];
			var x=document.getElementById(sortValue[i]);
			for (var j = 0; j < AllData.length; j++) {
			  var option = document.createElement("option");
			  if(temp == "fleetNo"){
				  if(checkedStatus.length > 0){
						checkedOperation(j,i,option);
							 continue;
						 }
				  
			  option.text = AllData[j].fleetNo;
			// alert("true");
			  
			  }else if(temp == "subfleetNo"){
				  if(checkedStatus.length > 0){
						checkedOperation(j,i,option);
							 continue;
						 }
				  option.text = AllData[j].subfleetNo;
			  }else if(temp == "ataSystemNo"){
				  if(checkedStatus.length > 0){
						checkedOperation(j,i,option);
							 continue;
						 }
				  option.text = AllData[j].ataSystemNo;
			  } else if(temp == "tailNo"){
				  if(checkedStatus.length > 0){
						checkedOperation(j,i,option);
							 continue;
						 }
				  option.text = AllData[j].tailNo;
			  } else if(temp == "companyPartNo"){
				  if(checkedStatus.length > 0){
						checkedOperation(j,i,option);
							 continue;
						 }
				  option.text = AllData[j].companyPartNo;
			  } else if(temp == "mfgPartNo"){
				  if(checkedStatus.length > 0){
						checkedOperation(j,i,option);
							 continue;
						 }
				  option.text = AllData[j].mfgPartNo;
			  } 
			  x.add(option);
			}
		}
	}
	}else{
		//alert("in else");
		for (i = 0; i < sortValue.length; i++){
			document.getElementById(sortValue[i]).options.length = 0;
		}
		
		
		for (i = 0; i < sortValue.length; i++) {
			document.getElementById(sortValue[i]).disabled = false;	
			var text = "";
			//alert("i value"+i);
			var y=document.getElementById(sortValue[i]);
			for (var j = 0; j < AllData.length; j++) {
				  var option = document.createElement("option");

				  if(sortValue[i] == "fleetNo"){
					  
					  if(checkedStatus.length > 0){
						checkedOperation(j,i,option);
							 continue;
						 }
					  option.text = AllData[j].fleetNo;
					// alert("true");
					  
					  }else if(sortValue[i] == "subfleetNo"){
						  if(checkedStatus.length > 0){
								checkedOperation(j,i,option);
									 continue;
								 }
						  option.text = AllData[j].subfleetNo;
					  }else if(sortValue[i] == "ataSystemNo"){
						  if(checkedStatus.length > 0){
								checkedOperation(j,i,option);
									 continue;
								 }
						  option.text = AllData[j].ataSystemNo;
					  } else if(sortValue[i] == "tailNo"){
						  if(checkedStatus.length > 0){
								checkedOperation(j,i,option);
									 continue;
								 }
						  option.text = AllData[j].tailNo;
					  } else if(sortValue[i] == "companyPartNo"){
						  if(checkedStatus.length > 0){
								checkedOperation(j,i,option);
									 continue;
								 }
						  option.text = AllData[j].companyPartNo;
					  } else if(sortValue[i] == "mfgPartNo"){
						  if(checkedStatus.length > 0){
								checkedOperation(j,i,option);
									 continue;
								 }
						  option.text = AllData[j].mfgPartNo;
					  }  else if(sortValue[i] == "serialNo"){
						  if(checkedStatus.length > 0){
								checkedOperation(j,i,option);
									 continue;
								 }
						  option.text = AllData[j].serialNo;
					  } 
				 
				  y.add(option);
				  
}
		}
		}
	
	var buttonDisable = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo","serialNo"];
	
	for(var i=0; i<buttonDisable.length; i++ ){
	
	document.getElementById(buttonDisable[i]+"Clear").disabled = false;
	document.getElementById(buttonDisable[i]+"Submit").disabled = false;
	document.getElementById(buttonDisable[i]).disabled = false;
	}
	
	
	//alert(AllData);
	
	
	
	
}


function checkedOperation(j,i,option){
	
	
	var sortValue = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo","serialNo"];
	//alert("i value"+i+" sortValue[i] "+sortValue[i]);
		var y=document.getElementById(sortValue[i]);

				  
				
				  if(checkedStatus == "Installed Unit,New Unit"){
					  if(AllData[j].status == "Installed Unit" || AllData[j].status == "New Unit"){

							  if(sortValue[i] == "fleetNo"){
								 // alert("true");
								  option.text = AllData[j].fleetNo;
								
								  }else if(sortValue[i] == "subfleetNo"){
									//  alert("true");
									  option.text = AllData[j].subfleetNo;
								  }else if(sortValue[i] == "ataSystemNo"){
									  option.text = AllData[j].ataSystemNo;
								  } else if(sortValue[i] == "tailNo"){
									  option.text = AllData[j].tailNo;
								  } else if(sortValue[i] == "companyPartNo"){
									  option.text = AllData[j].companyPartNo;
								  } else if(sortValue[i] == "mfgPartNo"){
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
								 // alert("true");
								  option.text = AllData[j].fleetNo;
								
								  }else if(sortValue[i] == "subfleetNo"){
									  //alert("true");
									  option.text = AllData[j].subfleetNo;
								  }else if(sortValue[i] == "ataSystemNo"){
									  option.text = AllData[j].ataSystemNo;
								  } else if(sortValue[i] == "tailNo"){
									  option.text = AllData[j].tailNo;
								  } else if(sortValue[i] == "companyPartNo"){
									  option.text = AllData[j].companyPartNo;
								  } else if(sortValue[i] == "mfgPartNo"){
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
								 // alert("true");
								  option.text = AllData[j].fleetNo;
								
								  }else if(sortValue[i] == "subfleetNo"){
									  //alert("true");
									  option.text = AllData[j].subfleetNo;
								  }else if(sortValue[i] == "ataSystemNo"){
									  option.text = AllData[j].ataSystemNo;
								  } else if(sortValue[i] == "tailNo"){
									  option.text = AllData[j].tailNo;
								  } else if(sortValue[i] == "companyPartNo"){
									  option.text = AllData[j].companyPartNo;
								  } else if(sortValue[i] == "mfgPartNo"){
									  option.text = AllData[j].mfgPartNo;
								  } else if(sortValue[i] == "serialNo"){
									  option.text = AllData[j].serialNo;
								  }
						
						  y.add(option);
						  
					  }
					  
					  }
				  if(checkedStatus == "Non Active Unit"){
					  if(AllData[j].status == "Non Active Unit" ){
						  if(sortValue[i] == "fleetNo"){
								 // alert("true");
								  option.text = AllData[j].fleetNo;
								
								  }else if(sortValue[i] == "subfleetNo"){
									  //alert("true");
									  option.text = AllData[j].subfleetNo;
								  }else if(sortValue[i] == "ataSystemNo"){
									  option.text = AllData[j].ataSystemNo;
								  } else if(sortValue[i] == "tailNo"){
									  option.text = AllData[j].tailNo;
								  } else if(sortValue[i] == "companyPartNo"){
									  option.text = AllData[j].companyPartNo;
								  } else if(sortValue[i] == "mfgPartNo"){
									  option.text = AllData[j].mfgPartNo;
								  } else if(sortValue[i] == "serialNo"){
									  option.text = AllData[j].serialNo;
								  }
						
						  y.add(option);
						  
					  }
					  
					  }
			  
				  
				
	
	
	
}
function getFleets(){
	var fleetSelected=document.getElementById("fleetNo");	

	 var result = [];
 var options = fleetSelected && fleetSelected.options;
 var opt;

 for (var i=0, iLen=options.length; i<iLen; i++) {
   opt = options[i];

   if (opt.selected) {
     result.push(opt.value || opt.text);
   }	
}

 if(result.length != 0){
 
 
 var x=document.getElementById("subfleetNo");
	for (var i = 0; i < result.length; i++){
		
		var text = "";
		for (var j = 0; j < AllData.length; j++){
			//alert("result[i] "+result[i]+"AllData[j].fleetNo "+AllData[j].fleetNo);
			if(result[i] == AllData[j].fleetNo){
				
				 var option = document.createElement("option");
				 option.text = AllData[j].subfleetNo;
				 //alert("true "+option.text);
				 x.add(option);
			}
		}
	} 
	document.getElementById("fleetNo").disabled = true;
	document.getElementById("fleetNoClear").disabled = true;	
	document.getElementById("fleetNoSubmit").disabled = true;	
 
 }else{
	 alert("Atleast Select One Fleet Number To Proceed");
 }
 
}

function getSubFleets(){
	var subFleetSelected=document.getElementById("subfleetNo");
	var fleetLength=document.getElementById("fleetNo").options.length;

	
	 var result = [];
	 var options = subFleetSelected && subFleetSelected.options;
	 var opt;

	 for (var i=0, iLen=options.length; i<iLen; i++) {
	   opt = options[i];

	   if (opt.selected) {
	     result.push(opt.value || opt.text);
	   }	
	}
	 
	 
	 if(result.length != 0){
	 
	 var x=document.getElementById("tailNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				//alert("result[i] "+result[i]+"AllData[j].fleetNo "+AllData[j].fleetNo);
				if(result[i] == AllData[j].subfleetNo){
					
					 var option = document.createElement("option");
					 option.text = AllData[j].tailNo;
					 //alert("true "+option.text);
					 x.add(option);
				}
			}
		} 
		document.getElementById("subfleetNo").disabled = true;
		document.getElementById("subfleetNoClear").disabled = true;	
		document.getElementById("subfleetNoSubmit").disabled = true;
		
		
		if(fleetLength == 0){
			fleetOperation(result,"subfleetNo");
			 
			//alert("done")
		}
	 
}else{
	 alert("Atleast Select One SubFleet Number To Proceed");
}
}


function getTailNo(){
	//alert("hello");
	var tailNoSelected=document.getElementById("tailNo");
	var fleetLength=document.getElementById("fleetNo").options.length;
	var subFleetLength=document.getElementById("subfleetNo").options.length;
	
	
	
	 var result = [];
	 var options = tailNoSelected && tailNoSelected.options;
	 var opt;

	 for (var i=0, iLen=options.length; i<iLen; i++) {
	   opt = options[i];

	   if (opt.selected) {
	     result.push(opt.value || opt.text);
	   }	
	}
	 if(result.length != 0){
	
	 var x=document.getElementById("companyPartNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				//alert("result[i] "+result[i]+"AllData[j].fleetNo "+AllData[j].fleetNo);
				if(result[i] == AllData[j].tailNo){
					
					 var option = document.createElement("option");
					 option.text = AllData[j].companyPartNo;
					 //alert("true "+option.text);
					 x.add(option);
				}
			}
		} 
	
		
		 var x=document.getElementById("mfgPartNo");
			for (var i = 0; i < result.length; i++){
				
				var text = "";
				for (var j = 0; j < AllData.length; j++){
					//alert("result[i] "+result[i]+"AllData[j].fleetNo "+AllData[j].fleetNo);
					if(result[i] == AllData[j].tailNo){
						
						 var option = document.createElement("option");
						 option.text = AllData[j].mfgPartNo;
						 //alert("true "+option.text);
						 x.add(option);
					}
				}
			}
			
			if(fleetLength ==0 || subfleetLength == 0 ){
				fleetOperation(result,"tailNo");
				subFleetOperation(result,"tailNo");
			}
			
			
			document.getElementById("tailNo").disabled = true;
			document.getElementById("tailNoClear").disabled = true;	
			document.getElementById("tailNoSubmit").disabled = true;
}else{
	 alert("Atleast Select One Tail Number To Proceed");
}
	
}


function getCompanyPartNo(){
	var cpnSelected=document.getElementById("companyPartNo");
	var fleetLength=document.getElementById("fleetNo").options.length;
	var subfleetLength=document.getElementById("subfleetNo").options.length;
	var tailLength=document.getElementById("tailNo").options.length;
	var mfgLength=document.getElementById("mfgPartNo").options.length;

	
	 var result = [];
	 var options = cpnSelected && cpnSelected.options;
	 var opt;

	 for (var i=0, iLen=options.length; i<iLen; i++) {
	   opt = options[i];

	   if (opt.selected) {
	     result.push(opt.value || opt.text);
	   }	
	}
	 
	 
	 if(result.length != 0){
	 if(mfgLength ==0 ){
	 var x=document.getElementById("mfgPartNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				//alert("result[i] "+result[i]+"AllData[j].fleetNo "+AllData[j].fleetNo);
				if(result[i] == AllData[j].companyPartNo){
					
					 var option = document.createElement("option");
					 option.text = AllData[j].mfgPartNo;
					 //alert("true "+option.text);
					 x.add(option);
				}
			}
		} 
	 }
		if(fleetLength ==0 || subfleetLength == 0 || tailLength == 0 ){
			fleetOperation(result,"companyPartNo");
			subFleetOperation(result,"companyPartNo");
			tailOperation(result,"companyPartNo");
		}
		document.getElementById("companyPartNo").disabled = true;
		document.getElementById("companyPartNoClear").disabled = true;	
		document.getElementById("companyPartNoSubmit").disabled = true;
		
		
}else{
	 alert("Atleast Select One Company Part Number To Proceed");
}
	 
	
}




function getMFGPartNo(){
	
	var mfgSelected=document.getElementById("mfgPartNo");
	var fleetLength=document.getElementById("fleetNo").options.length;
	var subfleetLength=document.getElementById("subfleetNo").options.length;
	var tailLength=document.getElementById("tailNo").options.length;
	var cpnLength=document.getElementById("companyPartNo").options.length;

	
	 var result = [];
	 var options = mfgSelected && mfgSelected.options;
	 var opt;

	 for (var i=0, iLen=options.length; i<iLen; i++) {
	   opt = options[i];

	   if (opt.selected) {
	     result.push(opt.value || opt.text);
	   }	
	}
	 if(result.length != 0){
	 
	 
	
	 var x=document.getElementById("ataSystemNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				//alert("result[i] "+result[i]+"AllData[j].fleetNo "+AllData[j].fleetNo);
				if(result[i] == AllData[j].mfgPartNo){
					
					 var option = document.createElement("option");
					 option.text = AllData[j].ataSystemNo;
					 //alert("true "+option.text);
					 x.add(option);
				}
			}
		} 
	 
		if(fleetLength ==0 || subfleetLength == 0 || tailLength == 0 || cpnLength == 0){
			fleetOperation(result,"mfgPartNo");
			subFleetOperation(result,"mfgPartNo");
			tailOperation(result,"mfgPartNo");
			cpnOperation(result,"mfgPartNo");
		}
		document.getElementById("mfgPartNo").disabled = true;
		document.getElementById("mfgPartNoClear").disabled = true;	
		document.getElementById("mfgPartNoSubmit").disabled = true;
		
		
	
}else{
	 alert("Atleast Select One MFG Part Number To Proceed");
}
	
}


function getATASystemNo(){
	
	var ataSelected=document.getElementById("ataSystemNo");
	var fleetLength=document.getElementById("fleetNo").options.length;
	var subfleetLength=document.getElementById("subfleetNo").options.length;
	var tailLength=document.getElementById("tailNo").options.length;
	var cpnLength=document.getElementById("companyPartNo").options.length;
	var mfgLength=document.getElementById("mfgPartNo").options.length;

	
	 var result = [];
	 var options = ataSelected && ataSelected.options;
	 var opt;

	 for (var i=0, iLen=options.length; i<iLen; i++) {
	   opt = options[i];

	   if (opt.selected) {
	     result.push(opt.value || opt.text);
	   }	
	}
	 
	 
	 if(result.length != 0){
	
	 var x=document.getElementById("serialNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				//alert("result[i] "+result[i]+"AllData[j].fleetNo "+AllData[j].fleetNo);
				if(result[i] == AllData[j].ataSystemNo){
					
					 var option = document.createElement("option");
					 option.text = AllData[j].serialNo;
					 //alert("true "+option.text);
					 x.add(option);
				}
			}
		} 
	 
		if(fleetLength ==0 || subfleetLength == 0 || tailLength == 0 || cpnLength == 0 || mfgLength == 0){
			fleetOperation(result,"ataSystemNo");
			subFleetOperation(result,"ataSystemNo");
			tailOperation(result,"ataSystemNo");
			cpnOperation(result,"ataSystemNo");
			mfgOperation(result,"ataSystemNo")
		}
		document.getElementById("ataSystemNo").disabled = true;
		document.getElementById("ataSystemNoClear").disabled = true;	
		document.getElementById("ataSystemNoSubmit").disabled = true;
		
		
}else{
	 alert("Atleast Select One ATA System Number To Proceed");
}
	 
	
}

function getSerialNo(){
	var serialSelected=document.getElementById("serialNo");
	
	
	 var result = [];
	 var options = serialSelected && serialSelected.options;
	 var opt;

	 for (var i=0, iLen=options.length; i<iLen; i++) {
	   opt = options[i];

	   if (opt.selected) {
	     result.push(opt.value || opt.text);
	   }	
	}
	 if(result.length != 0){
	 serialNoSelected=result;
	 //alert("all "+result+" from variable "+serialNoSelected);
	 
		document.getElementById("serialNo").disabled = true;
		document.getElementById("serialNoClear").disabled = true;	
		document.getElementById("serialNoSubmit").disabled = true;
}else{
	 alert("Atleast Select One Serial Number To Proceed");
}
	 
}


function fleetOperation(result,idValue){
	
	 var x=document.getElementById("fleetNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				
			 if(idValue == "subfleetNo"){
				
							if(result[i] == AllData[j].subfleetNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].fleetNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  }else if(idValue == "ataSystemNo"){
							if(result[i] == AllData[j].ataSystemNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].fleetNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "tailNo"){
							if(result[i] == AllData[j].tailNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].fleetNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "companyPartNo"){
							if(result[i] == AllData[j].companyPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].fleetNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "mfgPartNo"){
							if(result[i] == AllData[j].mfgPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].fleetNo;
								 //alert("true "+option.text);
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

	//alert("hello1"+idValue)
	 var x=document.getElementById("subfleetNo");
		for (var i = 0; i < result.length; i++){
			
			var text = "";
			for (var j = 0; j < AllData.length; j++){
				
			 if(idValue == "subfleetNo"){
				
							if(result[i] == AllData[j].subfleetNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].subfleetNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  }else if(idValue == "ataSystemNo"){
							if(result[i] == AllData[j].ataSystemNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].subfleetNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "tailNo"){
							if(result[i] == AllData[j].tailNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].subfleetNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "companyPartNo"){
							if(result[i] == AllData[j].companyPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].subfleetNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "mfgPartNo"){
							if(result[i] == AllData[j].mfgPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].subfleetNo;
								 //alert("true "+option.text);
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
								 //alert("true "+option.text);
								 x.add(option);
							}
					  }else if(idValue == "ataSystemNo"){
							if(result[i] == AllData[j].ataSystemNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].tailNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "tailNo"){
							if(result[i] == AllData[j].tailNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].tailNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "companyPartNo"){
							if(result[i] == AllData[j].companyPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].tailNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "mfgPartNo"){
							if(result[i] == AllData[j].mfgPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].tailNo;
								 //alert("true "+option.text);
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
								 //alert("true "+option.text);
								 x.add(option);
							}
					  }else if(idValue == "ataSystemNo"){
							if(result[i] == AllData[j].ataSystemNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].companyPartNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "tailNo"){
							if(result[i] == AllData[j].tailNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].companyPartNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "companyPartNo"){
							if(result[i] == AllData[j].companyPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].companyPartNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "mfgPartNo"){
							if(result[i] == AllData[j].mfgPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].companyPartNo;
								 //alert("true "+option.text);
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
								 //alert("true "+option.text);
								 x.add(option);
							}
					  }else if(idValue == "ataSystemNo"){
							if(result[i] == AllData[j].ataSystemNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].mfgPartNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "tailNo"){
							if(result[i] == AllData[j].tailNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].mfgPartNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "companyPartNo"){
							if(result[i] == AllData[j].companyPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].mfgPartNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } else if(idValue == "mfgPartNo"){
							if(result[i] == AllData[j].mfgPartNo){
								 var option = document.createElement("option");
								 option.text = AllData[j].mfgPartNo;
								 //alert("true "+option.text);
								 x.add(option);
							}
					  } 
				
				
				
				
				

			}
		}
		document.getElementById("mfgPartNo").disabled = true;
		document.getElementById("mfgPartNoClear").disabled = true;	
		document.getElementById("mfgPartNoSubmit").disabled = true;	
	
}



function getFilterValue(){
	
	var  filterID = $('#filterId').val();
	var  filterName = $('#filterName').val();
	var fromDate =  $('#fromDate').val();
	var toDate =  $('#toDate').val();
	var sortByEle = document.getElementById("sortBy");
	var sortBySelected = sortByEle.options[sortByEle.selectedIndex].value;
	
	var installedUnit= document.getElementById("installedUnit").checked ? true:false;
	var newUnit =  document.getElementById("newUnit").checked ? true:false;
	var nonActiveUnit =   document.getElementById("nonActiveUnit").checked ? true:false;
	//var problemUnit =  document.getElementById("problemUnit").checked ? true:false;
	//var overhauledUnit =   document.getElementById("overhauledUnit").checked ? true:false;
		
	var filterJson = {"filterID" :filterID, "filterName":filterName, "fromDate":fromDate,"toDate":toDate, "sortBy": sortBySelected, "filterBy":{"installedUnit":installedUnit, "newUnit":newUnit, "nonActive":nonActiveUnit/*, "problemUnit" :problemUnit , "overhauledUnit":overhauledUnit*/} };
	 return  JSON.stringify(filterJson)
}

var saveFilter = function(){
	var  filterName = $('#filterName').val();
	//alert(filterName);
	if (isUniqueFilterName(filterName)){
		$.ajax({
			 type : "POST",
			 contentType : "application/json",
			 url : "/saveFilter",
			 data : getFilterValue(),
			 dataType : 'json',
	         success : function(data) {
	                
	                
	         }
	         
	  });
	}else{
		alert("Filter Name is already in used. Please choose another one")
	}
	
	
	 
	
	
	
} 


//Suman
var saveAsDefaultFilter = function(){
	//alert(getFilterValue());
	$.ajax({
		 type : "POST",
		 contentType : "application/json",
		 url : "/saveAsDefaultFilter",
		 data : getFilterValue(),
		 dataType : 'json',
         success : function(data) {
                
                
         }
         
  });
	
}


var getDefaultFilter = function(){
	 $.ajax({
		 url : "/getDefaultFilter",
		 success : function(filter) {
			 
		         
	            document.getElementById("filterName").value=filter.filterName;
				document.getElementById("fromDate").value=filter.fromDate;
				document.getElementById("toDate").value=filter.toDate ;
				document.getElementById("sortBy").value=filter.sortBy;
				document.getElementById("installedUnit").checked=filter.filterBy.installedUnit;
				document.getElementById("newUnit").checked=filter.filterBy.neweUnit;
				document.getElementById("nonActiveUnit").checked=filter.filterBy.nonActiveUnit;
				//document.getElementById("problemUnit").checked=filter.filterBy.problemUnit;
				//document.getElementById("overhauledUnit").checked=filter.filterBy.overhauledUnit;

         }
         
  });
	 
	 
	
}



/*var saveFilter = function(){
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
	
	if (isUniqueFilterName(filterName))
		{
		
		//var filterJson = {"filterName":filterName, "fromDate":fromDate,"toDate":toDate, "sortBy": sortBySelected, "filterBy":{"installedUnit":installedUnit, "newUnit":newUnit, "nonActive":nonActiveUnit, "problemUnit" :'' , "overhauledUnit":''} };
	
		var filterJson = {"filterName":filterName, "fromDate":fromDate,"toDate":toDate, "sortBy": sortBySelected, "filterBy":{"installedUnit":installedUnit, "newUnit":newUnit, "nonActive":nonActiveUnit, "problemUnit" :problemUnit , "overhauledUnit":overhauledUnit} };
		filterJson= JSON.stringify(filterJson);

	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "/saveFilter",
		data : filterJson,
		dataType : 'json',
		success : function(data) {
			window.confirm("filtered Saved successfully");

		}
	});
	
}
	else
		{
		alert("Filter Name is already in used. Please choose another one")
		}



} 
*/
var getFilters = function(){

	$.ajax({
		url : "/getFilters",
		success : function(data) {
			//alert(data);
			filters=data;
		}

	});

}






/* Load filter list into popup box 
 * Author: Manwar
 *
 * */
function loadFilterList()
{

	$("#filterListTable tr").remove();

	$.ajax({
		url: '/getFilters',             
	}).done(function (filterList) {
		filters=filterList
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
}



/* 
 * Filter data according to filter by checkbox
 * author: Manwar Singh
 */
function filterByStatus()
{
	checkedStatus=[];
	var installedUnit= document.getElementById("installedUnit")
	var newUnit=document.getElementById("newUnit")
	var nonActiveUnit=document.getElementById("nonActiveUnit")
	
	/*var problemUnit=document.getElementById("problemUnit")
	var overhauledUnit=document.getElementById("overhauledUnit")
	
	*/	
	
	
	if(installedUnit.checked || newUnit.checked){
			nonActiveUnit.setAttribute("disabled", "true");
		}
	else{
			document.getElementById("nonActiveUnit").disabled= false;
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

	if(nonActiveUnit.checked){
		installedUnit.setAttribute("disabled", "true");
		newUnit.setAttribute("disabled", "true");

		
		checkedStatus=[];
		
		checkedStatus.push("Non Active Unit");
		
			
	}
	else
		{
		document.getElementById("installedUnit").disabled= false;
		document.getElementById("newUnit").disabled= false;
		}
/*
	if(problemUnit.checked)
	{
		 filter the data base on status new
		//alert("problemUnit unit Cheked")
		for (var i = 0; i < globalData.length; i++) {
		if (globalData[i].status == "Problem Unit")   {
			serials[j++]=globalData[i]
			//alert(AllData[i].status + ' '+AllData[i].fleet)
		}
		}


	}

	if(overhauledUnit.checked)
	{
	
		for (var i = 0; i < AllData.length; i++) {
			if (globalData[i].status == "Overhauled Unit") {
				serials[j++]=globalData[i]
			}
		}

	}

	for (var i = 0; i < serials.length; i++) {
		

	alert(serials[i].status)
	}
*/
	
		
		functionsort();
	

	
}









/* Load filter list into popup box 
 * Author: Manwar Singh
 *
 * */
function loadFilterList()
{
	
	$("#filterListTable tr").remove();

	$.ajax({
		url: '/getFilters',             
	}).done(function (filterList) {
		filters=filterList
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
}



/* Loading filter according to the filter name click by the user and
 * will set the parameter in filter editor screen
Author : Manwar Singh
 */
function loadFilter(filterName){
	document.getElementById("modelClose").click();
	

	var filterName;
	
	for (var i = 0; i < filters.length; i++) {
		var filter=filters[i].filterName;
		if (filter==filterName)
		{
			
			document.getElementById("filterName").value=filterName
			document.getElementById("fromDate").value=filters[i].fromDate;
			document.getElementById("toDate").value=filters[i].toDate;
			document.getElementById("sortBy").value=filters[i].sortBy
			document.getElementById("installedUnit").checked=filters[i].filterBy.installedUnit;
			document.getElementById("newUnit").checked=filters[i].filterBy.neweUnit;
			document.getElementById("nonActiveUnit").checked=filters[i].filterBy.nonActiveUnit;
			//document.getElementById("problemUnit").checked=filters[i].filterBy.problemUnit;
		//	document.getElementById("overhauledUnit").checked=filters[i].filterBy.overhauledUnit;
		
		}
	}
	
	
}



/* Load Recent Filter
Author : Manwar Singh
 */

function loadRecentFilter()
{
	
	
	$.ajax({
		url: '/getFilters',             
	}).done(function (filterList) {
		var filters1=filterList
		
				
            i=filterList.length-1;
         
            document.getElementById("filterName").value=filters1[i].filterName;
			document.getElementById("fromDate").value=filters1[i].fromDate;
			document.getElementById("toDate").value=filters1[i].toDate ;
			document.getElementById("sortBy").value=filters1[i].sortBy;
			document.getElementById("installedUnit").checked=filters1[i].filterBy.installedUnit;
			document.getElementById("newUnit").checked=filters1[i].filterBy.neweUnit;
			document.getElementById("nonActiveUnit").checked=filters1[i].filterBy.nonActiveUnit;
			//document.getElementById("problemUnit").checked=filters1[i].filterBy.problemUnit;
			//document.getElementById("overhauledUnit").checked=filters1[i].filterBy.overhauledUnit;
			functionsort()
         
         
	});


}


/* check uniqueness of filtername
  Author : Manwar Singh
 */

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


/* Clear the all fileds of UnitFilter
 * 
 * Author : Manwar
 */

function clearAll()
{
	
	fleet = document.getElementById("fleet")
	
	document.getElementById("filterName").value=""
	document.getElementById("fromDate").value=""
	document.getElementById("toDate").value=""
	document.getElementById("sortBy").value=null
	document.getElementById("installedUnit").checked=false
	document.getElementById("newUnit").checked=false
	document.getElementById("nonActiveUnit").checked=false
	document.getElementById("fleetNo").options.length=0
	document.getElementById("subfleetNo").options.length=0
	document.getElementById("ataSystemNo").options.length=0
	document.getElementById("tailNo").options.length=0
	document.getElementById("companyPartNo").options.length=0
	document.getElementById("mfgPartNo").options.length=0
	document.getElementById("serialNo").options.length=0
		
	//clearSelectList(fleet)
   // selectbox.innerHTML = "";
	//document.getElementById("fleet").innerHTML="";

}
function clearSelectList(list) {
    // when length is 0, the evaluation will return false.
	i=0
    while (i<list.options.length) {
        // continue to remove the first option until no options remain.
        list.remove(i);
    }
}




