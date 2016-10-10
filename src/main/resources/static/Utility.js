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

var getComponent = function(start,end){
	
	alert('start' + start + 'end' + end);
	$.ajax({
		url : "/loadComponent/" + start + "/" + end,
		success : function(data) {
			alert('in getComponent' + data);
			
		}
		
	});
}

/*
var getSummaryCostDetails = function() {
	var start = getStartDate();
	var end = getEndDate();
	console.log("End Date ::" + end)
	$('#spinner').show();
	console.log('start: ' + start + ' end : ' + end + ' url : '  );
	$.ajax({
		url : "getCostDetails/COST/SUMMARY/" + start + "/" + end,
		success : function(data) {
			 $('#spinner').hide();
			populateChartDetails(data, "summaryCost", 'pie',"cost");
			
		}
		
	});

}*/