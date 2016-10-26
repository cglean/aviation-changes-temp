
var filters=[];
var checkedStatus = [];
var AllData=[];
var filteredData=[];
var sortChecked=null;
var globalData=[]


/* Function Name: functionFromDate
 * Return Type : void
 * Description: 
 * Author: Suman Pandey
 * Date:18-10-2016
 */	


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


/*var removalReport= function(){
	
	alert('hi I m nin removal report');
	$.ajax({
		url : "/removalReport",
		success : function(data) { 
			alert('hi');
			alert(JSON.stringify(data));
		},
	
	   error: function(abc){
		   alert('hello');
		   alert(JSON.stringify(abc));
	}

	});
}*/


//************************************************Test.html Start*******************************************************************

/*var groups ;


//Instantiate our timeline object.

$(document).ready(function() {
	
				$('input[name="instperbar"],input[name="remperbar"]').unbind().click(function(){
					if($(this).attr('checked')){
					//console.log('block1');
					$(this).attr('checked',false);
					}
					else{
					$(this).attr('checked','checked');
					//console.log('block2');
					}
					
			});

			$('input[name="instperbar"]').click(function(){
					filterlogic();
					
			console.log('filter applied');
			})

			$('input[name="remperbar"]').click(function(){
					
					filterlogic();
			console.log('filter applied');
			})
	<!-- ***************Start of Filter logic for chart selection***************	 -->
	function filterlogic(){

		if($('input[name="instperbar"]').attr('checked') == 'checked' && ($('input[name="remperbar"]').attr('checked') == false || $('input[name="remperbar"]').attr('checked') == undefined)){
				$('.vis-item.vis-background.grph_bcircle,.vis-item.vis-background.grph_ycircle,.vis-item.vis-background.negative').css('display','none');
				$('.vis-item-overflow,.vis-range,.vis-item.vis-background.positive').css('display','block');
				console.log('show bars');
			}
		else if(($('input[name="instperbar"]').attr('checked')== false || $('input[name="instperbar"]').attr('checked') == undefined) && $('input[name="remperbar"]').attr('checked')== 'checked'){
				$('.vis-item-overflow,.vis-range,.vis-item.vis-background.positive').css('display','none');
				$('.vis-item.vis-background.grph_bcircle,.vis-item.vis-background.grph_ycircle,.vis-item.vis-background.negative').css('display','block');
				console.log('show triangle');
			}
		else if($('input[name="instperbar"]').attr('checked')== 'checked' && $('input[name="remperbar"]').attr('checked')=='checked'){
				$('.vis-item-overflow,.vis-range,.vis-item.vis-background.grph_bcircle,.vis-item.vis-background.grph_ycircle,.vis-item.vis-background.negative').css('display','block');
				console.log('show all');
		}
		
		else if(($('input[name="instperbar"]').attr('checked')== false || $('input[name="instperbar"]').attr('checked') == undefined) && ($('input[name="remperbar"]').attr('checked') == false || $('input[name="remperbar"]').attr('checked') == undefined)){
				$('.vis-item-overflow,.vis-range,.vis-item.vis-background.grph_bcircle,.vis-item.vis-background.negative,.vis-item.vis-background.positive,.vis-item.vis-background.grph_ycircle').css('display','none');
				console.log('show none');
		}
	}
	<!-- ***************End of Filter logic for chart selection***************	 -->
	
<!-- $('.triangle').click(function(){ -->
	<!-- if( $('.vis-item-overflow,.vis-range').css('display') == 'none' ) -->
	<!-- $('.vis-item-overflow,.vis-range,grph_ycircle,.vis-item.vis-background.grph_bcircle').css('display','block'); -->
	<!-- else -->
	<!-- $('.vis-item-overflow,.vis-range,grph_ycircle,.vis-item.vis-background.grph_bcircle').css('display','none'); -->
<!-- }); -->

var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet({
     type: { start: 'Moment', end: 'Moment' }
 });
	
 var groups = new vis.DataSet([
	{id: 'serial1', content:'CPN1',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial2', content:'CPN2',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial3', content:'CPN3',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial4', content:'CPN4',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial5', content:'CPN5',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial6', content:'CPN6',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial7', content:'CPN7',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial8', content:'CPN8',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial9', content:'CPN9',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial10', content:'CPN10',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial11', content:'CPN11',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial12', content:'CPN12',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial13', content:'CPN13',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial14', content:'CPN14',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	{id: 'serial15', content:'CPN15',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
	// this group has no subgroups but this would be the other method to do the sorting.
 ]);
 
 groups.add()
 
 // add items to the DataSet
 items.add([
     //{id: 'A',start: '2014-01-20', end: '2014-01-22', type: 'background', group:'foo'},
     //{id: 'B',start: '2014-01-22', end: '2014-01-23', type: 'background', group:'foo', className: 'negative'},
     {id: 0, content: '', start: '2015-01-01', end: '2016-03-22',group:'serial1'},
		{id: 19, content: '', start: '2016-04-01', end: '2016-04-01',type: 'background', className: 'negative',group:'serial1'},


     //{id: 'SG_1_1',start: '2014-01-25', end: '2014-01-27', type: 'background', group:'bar', subgroup:'sg_1', subgroupOrder:0},
     //{id: 'SG_1_2', start: '2014-01-26', end: '2014-01-27', type: 'background', className: 'positive',group:'bar', subgroup:'sg_1', subgroupOrder:0},
     {id: 1, content: '', start: '2015-01-01', end: '2016-08-26',group:'serial2', subgroup:'sg_1', subgroupOrder:0},
		{id: 20, content: '', start: '2016-09-01', end: '2016-09-01',type: 'background', className: 'negative',group:'serial2', subgroup:'sg_1', subgroupOrder:0},
		{id: 21, content: '', start: '2017-10-01', end: '2017-10-01',type: 'background', className: 'grph_bcircle',group:'serial2', subgroup:'sg_1', subgroupOrder:0},
		{id: 29, content: '', start: '2018-10-01', end: '2018-10-01',type: 'background', className: 'grph_ycircle',group:'serial2', subgroup:'sg_1', subgroupOrder:0},
     //{id: 'SG_2_1', start: '2014-01-27', end: '2014-01-29', type: 'background', group:'bar', subgroup:'sg_2', subgroupOrder:1},
     //{id: 'SG_2_2', start: '2014-01-27', end: '2014-01-28', type: 'background', className: 'negative',group:'bar', subgroup:'sg_2', subgroupOrder:1},
     {id: 2, content: '', start: '2015-01-01', end: '2016-01-29',group:'serial3', subgroup:'sg_2', subgroupOrder:1},
		{id: 3, content: '', start: '2016-02-20', end: '2016-03-27', type: 'background', className: 'negative',group:'serial3', subgroup:'sg_2', subgroupOrder:2},
		{id: 4, content: '', start: '2015-01-01', end: '2015-03-27',group:'serial4', subgroup:'sg_2', subgroupOrder:1},
		{id: 5, content: '', start: '2015-06-20', end: '2016-11-27',group:'serial4', subgroup:'sg_2', subgroupOrder:2},
		{id: 6, content: '', start: '2017-02-20', end: '2017-06-27',group:'serial4', subgroup:'sg_2', subgroupOrder:3},
		{id: 7, content: '', start: '2015-01-01', end: '2016-03-27',group:'serial5', subgroup:'sg_2', subgroupOrder:2},
		{id: 8, content: '', start: '2017-02-20', end: '2018-03-27',group:'serial5', subgroup:'sg_2', subgroupOrder:2},
		{id: 9, content: '', start: '2015-01-01', end: '2016-07-27',group:'serial6', subgroup:'sg_2', subgroupOrder:2},
		{id: 10, content: '', start: '2016-08-20', end: '2016-12-27',group:'serial6', subgroup:'sg_2', subgroupOrder:2},
		{id: 11, content: '', start: '2017-02-20', end: '2018-03-27',group:'serial6', subgroup:'sg_2', subgroupOrder:2},
		//{id: 12, content: '', start: '2018-02-20', end: '2018-03-27',group:'serial6', subgroup:'sg_2', subgroupOrder:2},
		{id: 13, content: '', start: '2015-01-01', end: '2016-08-27',group:'serial7', subgroup:'sg_2', subgroupOrder:2},
		{id: 14, content: '', start: '2016-09-20', end: '2016-09-20',type: 'background', className: 'negative',group:'serial7', subgroup:'sg_2', subgroupOrder:2},
		{id: 15, content: '', start: '2017-02-20', end: '2018-03-27',group:'serial7', subgroup:'sg_2', subgroupOrder:2},
		{id: 16, content: '', start: '2015-01-01', end: '2017-03-27',group:'serial8', subgroup:'sg_2', subgroupOrder:2},
		{id: 22, content: '', start: '2017-03-27', end: '2017-03-28',type: 'background', className: 'positive',group:'serial8', subgroup:'sg_2', subgroupOrder:2},
		{id: 17, content: '', start: '2015-01-01', end: '2017-03-27',group:'serial9', subgroup:'sg_2', subgroupOrder:2},
		{id: 18, content: '', start: '2018-02-20', end: '2018-03-27',group:'serial9', subgroup:'sg_2', subgroupOrder:2},
		//{id: 19, content: '', start: '2016-02-20', end: '2016-03-27',type: 'background', className: 'negative',group:'serial10', subgroup:'sg_2', subgroupOrder:2},
		//{id: 20, content: '', start: '2016-02-20', end: '2017-03-27',group:'serial10', subgroup:'sg_2', subgroupOrder:2},

		{id: 35, content: '', start: '2015-01-01', end: '2015-03-27',group:'serial10', subgroup:'sg_2', subgroupOrder:1},
		{id: 36, content: '', start: '2015-06-20', end: '2016-11-27',group:'serial10', subgroup:'sg_2', subgroupOrder:2},
		{id: 37, content: '', start: '2017-02-20', end: '2017-06-27',group:'serial10', subgroup:'sg_2', subgroupOrder:3},
		
		{id: 30, content: '', start: '2015-01-01', end: '2016-07-27',group:'serial11', subgroup:'sg_2', subgroupOrder:2},
		{id: 31, content: '', start: '2016-08-20', end: '2016-12-27',group:'serial11', subgroup:'sg_2', subgroupOrder:2},
		{id: 32, content: '', start: '2017-02-20', end: '2018-03-27',group:'serial11', subgroup:'sg_2', subgroupOrder:2},
		{id: 33, content: '', start: '2015-01-01', end: '2016-03-27',group:'serial12', subgroup:'sg_2', subgroupOrder:2},
		{id: 34, content: '', start: '2017-02-20', end: '2018-03-27',group:'serial12', subgroup:'sg_2', subgroupOrder:2},
		
		{id: 38, content: '', start: '2015-01-01', end: '2017-03-27',group:'serial13', subgroup:'sg_2', subgroupOrder:2},
		{id: 39, content: '', start: '2018-02-20', end: '2018-03-27',group:'serial13', subgroup:'sg_2', subgroupOrder:2},
		
		{id: 40, content: '', start: '2016-09-20', end: '2016-09-20',type: 'background', className: 'negative',group:'serial7', subgroup:'sg_2', subgroupOrder:2},
		{id: 41, content: '', start: '2017-02-20', end: '2018-03-27',group:'serial14', subgroup:'sg_2', subgroupOrder:2},
		{id: 42, content: '', start: '2015-01-01', end: '2017-03-27',group:'serial14', subgroup:'sg_2', subgroupOrder:2},
		
     {id: 43, content: '', start: '2015-01-01', end: '2016-03-22',group:'serial15'},
		{id: 44, content: '', start: '2016-04-01', end: '2016-04-01',type: 'background', className: 'negative',group:'serial15'},



     //{id: 'background', start: '2014-01-29', end: '2014-01-30', type: 'background', className: 'negative',group:'bar'},
     //{id: 'background_all', start: '2014-01-31', end: '2014-02-02', type: 'background', className: 'positive'},
 ]);

 var container = document.getElementById('visualization');
 var options = {
     // orientation:'top'
    //start: '2014-01-10',
    // end: '2019-02-10',
     //editable: false,
     stack: false
 };

 var timeline = new vis.Timeline(container, items, groups, options);
// $('#visualization').on({
 //'mousewheel': function(e) {
		//console.log("inside the scrolling");
	   //e.preventDefault();
     //e.stopPropagation();
 //}
	//});
	
	<!-- //////////Timeline range////////// -->
	//var fromdate = $('input[name="datefilter"]').val().trim().split(' - ')[0];
	//var todate = $('input[name="datefilter"]').val().trim().split(' - ')[1];
	//timeline.setWindow(fromdate, todate, {animation: false});//set the date range as per the filters in the date fields
	
	 $('div.vis-panel').on({
 'mousewheel': function(e) {
		//console.log("insiddfdse the scrolling");
	   e.preventDefault();
     e.stopPropagation();
 }
});

filterlogic();
});
*/


var removal=function(){
	alert('hey');
	$.ajax({
		url : "/removalRepor",
		success : function(data) { 
			alert('hi');
			alert(JSON.stringify(data));
			groupBySerialNo(data);
		}
	});
	
}

var groupBySerialNo = function(data){
	alert(data.length);
	for(i=0; i<data.length; i++){
		
		/* groups = new vis.DataSet([
              	{id: 'serial1', content:'CPN1',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial2', content:'CPN2',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial3', content:'CPN3',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial4', content:'CPN4',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial5', content:'CPN5',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial6', content:'CPN6',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial7', content:'CPN7',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial8', content:'CPN8',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial9', content:'CPN9',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
               {id: 'serial10', content:'CPN10',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
               {id: 'serial11', content:'CPN11',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial12', content:'CPN12',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial13', content:'CPN13',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial14', content:'CPN14',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	{id: 'serial15', content:'CPN15',subgroupOrder: function (a,b) {return a.subgroupOrder - b.subgroupOrder;}},
              	// this group has no subgroups but this would be the other method to do the sorting.
               ]);
	}*/
	
}
	
}


//************************************************Test.html End**********************************************************************



/* Function Name: getComponent
 * Return Type : void
 * Description: 
 * Author: Suman Pandey
 * Date:18-10-2016
 */	
var getComponent = function(start,end){
////alert('I m in getcomponent');

	$.ajax({
		url : "/loadComponent/" + start + "/" + end,
		success : function(data) {
		
			AllData=data;
			filteredData=data
			if(checkedStatus != 0){
				filterStatus();
			}	
		}
	});
}




/* Function Name: PushToSelectedList
 * Return Type : void
 * Description: This method is used to selected and move the data from the first select box to second
 * Author: Balaji Veerappan
 * Date:18-10-2016
 */	
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
		
		for(var j = 0; j < result.length; j++){
		  if (y.options[i].value == result[j]){
		

			  y.remove(i);
		  }
		}
		  }
	
	
		
	} 
	
/* Function Name: ClearSelectedList
 * Return Type : void
 * Description: This method is used to selected and move the data from the second select box to first select box
 * Author: Balaji Veerappan
 * Date:18-10-2016
 */	
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

var x=document.getElementById(SelectId);
	for (var i = 0; i < x.length; i++){
		
		for(var j = 0; j < result.length; j++){
		  if (x.options[i].value == result[j]){
		
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

/* Function Name: disableAfterSubmit
 * Return Type : void
 * Description: Disabling after submit
 * Author: Balaji Veerappan
 * Date:18-10-2016
 */
function disableAfterSubmit(listValues){
	
	
	for(i=0;i<listValues.length;i++){
	
	document.getElementById(listValues[i]).disabled = true;
	}
	} 


/* Function Name: getFleets
 * Return Type : void
 * Description: When Fleet Number values are selected and submitted
 * Author: Balaji Veerappan
 * Date:18-10-2016
 */
function getFleets(){

	
	
	var fleetSelected=document.getElementById("fleetValue");	
	var listFleet = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var result = [];
	


	var temp=filteredData;
	filteredData=[];
	

	
	var result = [];
    
    for (var i = 0; i < fleetSelected.length; i++) {
    	result.push(fleetSelected.options[i].value);
    }
   
	
		for(var i = 0; i < result.length; i++)
			for(var j=0;j<temp.length;j++){
				if(result[i] == temp[j].fleetNo){
				filteredData.push(temp[j]);
				}
	}
    
    disableAfterSubmit(listFleet);
}

/* Function Name: getSubFleets
 * Return Type : void
 * Description: When Sub Fleet Number values are selected and submitted
 * Author: Balaji Veerappan
 * Date:18-10-2016
 */
function getSubFleets(){

	
	var subFleetSelected=document.getElementById("subfleetValue");	
	var listFleet = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var listSubFleet= ["subfleetNo", "subfleetValue", "subfleetPush", "subfleetClear", "subfleetSubmit"];
	var result = [];
	alert(filteredData.length+"length");
	var temp=filteredData;
	filteredData=[];
	alert(filteredData.length+"length after empty");
	
	var result = [];
    
    for (var i = 0; i < subFleetSelected.length; i++) {
    	result.push(subFleetSelected.options[i].value);
    }
    alert("Result value"+result)
	
		for(var i = 0; i < result.length; i++)
			for(var j=0;j<temp.length;j++){
				if(result[i] == temp[j].subfleetNo){
				filteredData.push(temp[j]);
				}
	}

    alert("sublfeet length" +filteredData.length )
    disableAfterSubmit(listFleet);
	disableAfterSubmit(listSubFleet);
	
}



/* Function Name: getTailNo
 * Return Type : void
 * Description: When Tail Number values are selected and submitted
 * Author: Balaji Veerappan
 * Date:18-10-2016
 */
function getTailNo(){
	var fleetSelected=document.getElementById("tailValue");	
	var listFleet = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var listSubFleet= ["subfleetNo", "subfleetValue", "subfleetPush", "subfleetClear", "subfleetSubmit"];
	var listTail= ["tailNo", "tailValue", "tailPush", "tailClear", "tailSubmit"];
	
	alert(filteredData.length+"length");
	var temp=filteredData;
	filteredData=[];
	alert(filteredData.length+"length after empty");
	
	var result = [];
    
    for (var i = 0; i < fleetSelected.length; i++) {
    	result.push(fleetSelected.options[i].value);
    }
    alert("Result value"+result)
	
		for(var i = 0; i < result.length; i++)
			for(var j=0;j<temp.length;j++){
				if(result[i] == temp[j].tailNo){
				filteredData.push(temp[j]);
				}
	}
    
    disableAfterSubmit(listFleet);
	disableAfterSubmit(listSubFleet);
	disableAfterSubmit(listTail);
	
}

/* Function Name: getATASystemNo
 * Return Type : void
 * Description: When ATA System Number values are selected and submitted
 * Author: Balaji Veerappan
 * Date:18-10-2016
 */
function getATASystemNo(){
	var fleetSelected=document.getElementById("ataValue");
	var listFleet = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var listSubFleet= ["subfleetNo", "subfleetValue", "subfleetPush", "subfleetClear", "subfleetSubmit"];
	var listata= ["ataSystemNo", "ataValue", "ataPush", "ataClear", "ataSubmit"];
	var listTail= ["tailNo", "tailValue", "tailPush", "tailClear", "tailSubmit"];
	
	alert(filteredData.length+"length");
	var temp=filteredData;
	filteredData=[];
	alert(filteredData.length+"length after empty");
	
	var result = [];
    
    for (var i = 0; i < fleetSelected.length; i++) {
    	result.push(fleetSelected.options[i].value);
    }
    alert("Result value"+result)
	
		for(var i = 0; i < result.length; i++)
			for(var j=0;j<temp.length;j++){
				if(result[i] == temp[j].ataSystemNo){
				filteredData.push(temp[j]);
				}
	}
    
    disableAfterSubmit(listFleet);
	disableAfterSubmit(listSubFleet);
	disableAfterSubmit(listTail);
	disableAfterSubmit(listata);
}



/* Function Name: getCompanyPartNo
 * Return Type : void
 * Description: When Company Part Number values are selected and submitted
 * Author: Balaji Veerappan
 * Date:18-10-2016
 */
function getCompanyPartNo(){
	var cpnSelected=document.getElementById("companyValue");	
    var listFleet = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var listSubFleet= ["subfleetNo", "subfleetValue", "subfleetPush", "subfleetClear", "subfleetSubmit"];
	var listTail= ["tailNo", "tailValue", "tailPush", "tailClear", "tailSubmit"];
	var listATA= ["ataSystemNo", "ataValue", "ataPush", "ataClear", "ataSubmit"];	
	var listCPN= ["companyPartNo", "companyValue", "companyPush", "companyClear", "companySubmit"];
	var result = [];
	
	
	alert(filteredData.length+"length");
	var temp=filteredData;
	filteredData=[];
	alert(filteredData.length+"length after empty");
	
    
    for (var i = 0; i < cpnSelected.length; i++) {
    	result.push(cpnSelected.options[i].value);
    }
    alert("Result value"+result)
	
		for(var i = 0; i < result.length; i++)
			for(var j=0;j<temp.length;j++){
				if(result[i] == temp[j].companyPartNo){
				filteredData.push(temp[j]);
				}
	}
    
    disableAfterSubmit(listFleet);
	disableAfterSubmit(listSubFleet);
	disableAfterSubmit(listTail);
	disableAfterSubmit(listATA);
	disableAfterSubmit(listCPN);
}



/* Function Name: getMFGPartNo
 * Return Type : void
 * Description: When MFG Part Number values are selected and submitted
 * Author: Balaji Veerappan
 * Date:18-10-2016
 */
function getMFGPartNo(){

	var mfgSelected=document.getElementById("mfgValue");	
	var listFleet = ["fleetNo", "fleetValue", "fleetPush", "fleetClear", "fleetNoSubmit"];
	var listSubFleet= ["subfleetNo", "subfleetValue", "subfleetPush", "subfleetClear", "subfleetSubmit"];
	var listTail= ["tailNo", "tailValue", "tailPush", "tailClear", "tailSubmit"];
	var listATA= ["ataSystemNo", "ataValue", "ataPush", "ataClear", "ataSubmit"];	
	var listCPN= ["companyPartNo", "companyValue", "companyPush", "companyClear", "companySubmit"];
	var listMFG= ["mfgPartNo", "mfgValue", "mfgPush", "mfgClear", "mfgSubmit"];
	
	alert(filteredData.length+"length");
	var temp=filteredData;
	filteredData=[];
	alert(filteredData.length+"length after empty");
	
	var result = [];
    
    for (var i = 0; i < mfgSelected.length; i++) {
    	result.push(mfgSelected.options[i].value);
    }
    alert("Result value"+result)
	
		for(var i = 0; i < result.length; i++)
			for(var j=0;j<temp.length;j++){
				if(result[i] == temp[j].mfgPartNo){
				filteredData.push(temp[j]);
				}
	}
    
    disableAfterSubmit(listFleet);
	disableAfterSubmit(listSubFleet);
	disableAfterSubmit(listTail);
	disableAfterSubmit(listata);
	disableAfterSubmit(listCPN);
	disableAfterSubmit(listMFG);
	
	

	
}





/* Function Name: clearData
 * Return Type : void
 * Description: used to clear all value when data range is selected
 * Author: Balaji Veerappan
 * Date:18-10-2016
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



/* Function Name: saveFilter
 * Return Type : void
 * Description: Save the filter into database
 * Author: Suman Pandey
 * Date:18-10-2016
 */
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







/* Function Name: loadFilterList
 * Return Type : void
 * Description: list the filters into popups those are already saved in the database
 * Author: Manwar Singh
 * Date:17-10-2016
 */
function loadFilterList()
{
	$("#filterListTable tr").remove(); // clear all the data from the filterlist table for creating the fresh tables
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
					tr.push("<td><a href='#'"+preText+filter+postText+filter + "</a></td>");  //onclick=loadFilter('selectedFilter');
					tr.push("<td>"+filterList[i].fromDate+"</td>");
					tr.push("<td>"+filterList[i].toDate+"</td>");
					tr.push('</tr>');
				}
		$('table[id=filterListTable]').append($(tr.join('')));
	});
}


/* Function Name: loadRecentFilter
 * Return Type : void
 * Description: load the filter into the unitbased filter editor, selected by user from the filters list which is showed in popups
 * Author: Manwar Singh
 * Date:17-10-2016
 */
function loadFilter(filterName){
	document.getElementById("modelClose").click(); //close the filter list tables popup
	
	var components=["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
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

 


/* Function Name: loadRecentFilter
 * Return Type : void
 * Description: load the last saved filter into the 'Unit based filter editor' screen
 * Author: Manwar Singh
 * Date:17-10-2016
 */
function loadRecentFilter()
{
	
	var componentNos=["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
	//var radioId=["fleetRdio", "subFleetRdio", "ataRdio", "tailRdio", "cpnRdio", "mfgRdio"];
	var radioValue;
	$.ajax({
		url: '/getFilters',             
	}).done(function (filterList) {
		var filters1=filterList
		filters=filterList
            i=filterList.length-1;
            document.getElementById("filterName").value=filters1[i].filterName;
			document.getElementById("fromDate").value=filters1[i].fromDate;
			document.getElementById("toDate").value=filters1[i].toDate ;
			for(var j=0; j<componentNos.length; j++)
			{
			
			   if(componentNos[j]==filters1[i].sortBy)
				   {
				       //document.getElementById(radioId[j]).checked=true;
				      // radioValue=filters1[i].sortBy;
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


 
/* Function Name: isUniqueFilterName
 * Return Type : boolean
 * Description: check filter name with the existing filters list whether it is unique or not 
 * Author: Manwar Singh 
 * Date:17-10-2016
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



/* Function Name: clearAll
 * Return Type : void
 * Description: clear all the data of fields of text boxes, searchboxes, radio buttons, check boxes and lists
 * Author: Manwar Singh
 * Date:17-10-2016
 */
function clearAll()
{
	var submitValues = ["fleetNo", "subfleet", "ata", "tail", "company", "mfg"];
	var btnValues = ["fleet", "subfleet", "ata", "tail", "company", "mfg"];
	var radioBtn= ["fleetRdio", "subFleetRdio", "tailRdio", "ataRdio", "cpnRdio", "mfgRdio"];
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
	 filteredData=[];

}


/*
function clearSelectList(list) {
    // when length is 0, the evaluation will return false.
	i=0
    while (i<list.options.length) {
        // continue to remove the first option until no options remain.
        list.remove(i);
    }
}*/



/* Function Name: isValidDisplayReport
 * Return Type : void
 * Description:  check if user is submit the display the report without 
 * Author: Manwar Singh
 * Date:17-10-2016
 */  
function isValidDisplayReport()
{
	fromDate=document.getElementById("fromDate").value
	toDate=document.getElementById("toDate").value
	if(fromDate=='' || toDate=='')
		{
		 display("Please enter the date range","error")
		 return false;
		
		}
		
	return true;
}




/* Function Name: isValidSaveForm
 * Return Type : boolean
 * Description: Validation for save filter form
 * Author: Manwar Singh
 * Date:17-10-2016
 */
 

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
	   { 
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


/* Function Name: display
 * Return Type : void
 * Description: display the error or information message into popup box
 * Author: Manwar Singh
 * Date:17-10-2016
 */
 
function display(msg,msgType)
{
	
	var modal = document.getElementById('msgModal');
	document.getElementById(msgType).innerHTML=msg;
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


function searchData(id)
{
	
	
	var idValues = ["fleetNo", "subfleetNo", "ataSystemNo", "tailNo", "companyPartNo", "mfgPartNo"];
     if(id==idValues[0]){
    	
    	 fleetData();
     }else if(id==idValues[1]){
    	 subFleetData();
     }else if(id==idValues[2]){
    	 ataData();
     }else if(id==idValues[3]){
    	 tailData();
     }else if(id==idValues[4]){
    	 cpnData();
     }else if(id==idValues[5]){
    	 mfgData();
     }
}


function fleetData()
{
		document.getElementById("fleetNo").options.length=0
		 var searchValue=document.getElementById("fleet").value;
		var text="";
	     var x=document.getElementById("fleetNo");
	     var option = document.createElement("option");
		var r=new Array();
		
		 if(searchValue == "*All" || searchValue == "*all")
			 {  
			 f:for(var i=0; i<filteredData.length; i++){	 
				 var option = document.createElement("option");
				 for(var z = 0; z < r.length; z++){  
			            if(r[z]==filteredData[i].fleetNo) continue f;}  
			        r[r.length] = filteredData[i].fleetNo;
				   option.text = filteredData[i].fleetNo;
				   x.add(option);
				 
				   }
			 }else if(searchValue == ""){
				 document.getElementById("fleetNo").options.length=0;
			 }else{
				 searchValue="^"+searchValue;
				 var patt = new RegExp(searchValue);
				  f1:for(var i=0; i<filteredData.length; i++)
				   {
					  
					  if(patt.test(filteredData[i].fleetNo)){
			    	 var option = document.createElement("option");
			    	 for(var z = 0; z < r.length; z++){  
				            if(r[z]==filteredData[i].fleetNo) continue f1;}  
				        r[r.length] = filteredData[i].fleetNo;
				   option.text = filteredData[i].fleetNo;
				   x.add(option);
					  }
				   }
			 }
}


function subFleetData()
{

		document.getElementById("subfleetNo").options.length=0
		 var searchValue=document.getElementById("subFleet").value;
		var text="";
		var r=new Array();
	     var x=document.getElementById("subfleetNo");
	     var option = document.createElement("option");
		
		 if(searchValue == "*All" || searchValue == "*all")
			 {  
			 s:for(var i=0; i<filteredData.length; i++){	 
				 var option = document.createElement("option");
				 for(var z = 0; z < r.length; z++){  
			            if(r[z]==filteredData[i].subfleetNo) continue s;}  
			        r[r.length] = filteredData[i].subfleetNo;
				   option.text = filteredData[i].subfleetNo;
				   x.add(option);
				 
				   }
			 }else if(searchValue == ""){
				 document.getElementById("subfleetNo").options.length=0;
			 }else{
				 searchValue="^"+searchValue;
				 var patt = new RegExp(searchValue);
				  s1:for(var i=0; i<filteredData.length; i++)
				   {
					  
					  if(patt.test(filteredData[i].subfleetNo)){
			    	 var option = document.createElement("option");
			    	 for(var z = 0; z < r.length; z++){  
				            if(r[z]==filteredData[i].subfleetNo) continue s1;}  
				        r[r.length] = filteredData[i].subfleetNo;
				   option.text = filteredData[i].subfleetNo;
				   x.add(option);
					  }
				   }
			 }
}


function ataData()
{
	document.getElementById("ataSystemNo").options.length=0
	 var searchValue=document.getElementById("ataNo").value;
	var text="";
	var r=new Array();
     var x=document.getElementById("ataSystemNo");
     var option = document.createElement("option");
	
	 if(searchValue == "*All" || searchValue == "*all")
		 {  
		 //alert("in all")
		 a:for(var i=0; i<filteredData.length; i++){	 
			 var option = document.createElement("option");
			 for(var z = 0; z < r.length; z++){  
		            if(r[z]==filteredData[i].ataSystemNo) continue a;}  
		        r[r.length] = filteredData[i].ataSystemNo;
			   option.text = filteredData[i].ataSystemNo;
			   x.add(option);
			 
			   }
		 }else if(searchValue == ""){
			 document.getElementById("ataSystemNo").options.length=0;
		 }else{
			 searchValue="^"+searchValue;
			 var patt = new RegExp(searchValue);
			 a1:for(var i=0; i<filteredData.length; i++)
			   {
				  if(patt.test(filteredData[i].ataSystemNo)){
		    	 var option = document.createElement("option");
		    	 for(var z = 0; z < r.length; z++){  
			            if(r[z]==filteredData[i].ataSystemNo) continue a1;}  
			        r[r.length] = filteredData[i].ataSystemNo;
			   option.text = filteredData[i].ataSystemNo;
			   x.add(option);
				  }
			   }
		 }
}


function tailData(){
	document.getElementById("tailNo").options.length=0
	 var searchValue=document.getElementById("tail").value;
	var text="";
	var r=new Array();
     var x=document.getElementById("tailNo");
     var option = document.createElement("option");
	
	 if(searchValue == "*All" || searchValue == "*all")
		 {  
		 t:for(var i=0; i<filteredData.length; i++){	 
			 var option = document.createElement("option");
			 for(var z = 0; z < r.length; z++){  
		            if(r[z]==filteredData[i].tailNo) continue t;}  
		        r[r.length] = filteredData[i].tailNo;
			   option.text = filteredData[i].tailNo;
			   x.add(option);
			   }
		 }else if(searchValue == ""){
			 document.getElementById("tailNo").options.length=0;
		 }else{
			 searchValue="^"+searchValue;
			 var patt = new RegExp(searchValue);
			  t1:for(var i=0; i<filteredData.length; i++)
			   { 
				  if(patt.test(filteredData[i].tailNo)){
		    	 var option = document.createElement("option");
		    	 for(var z = 0; z < r.length; z++){  
			            if(r[z]==filteredData[i].tailNo) continue t1;}  
			        r[r.length] = filteredData[i].tailNo;
		    	 option.text = filteredData[i].tailNo;
			   x.add(option);
				  }
			   }
		 }
}


function cpnData()
{
	 document.getElementById("companyPartNo").options.length=0
	 var searchValue=document.getElementById("cpnNo").value;
	var text="";
	var r=new Array();
     var x=document.getElementById("companyPartNo");
     var option = document.createElement("option");
	 if(searchValue == "*All" || searchValue == "*all")
		 {  
		 c:for(var i=0; i<filteredData.length; i++){	 
			 var option = document.createElement("option");
			 for(var z = 0; z < r.length; z++){  
		            if(r[z]==filteredData[i].companyPartNo) continue c;}  
		        r[r.length] = filteredData[i].companyPartNo;
			   option.text = filteredData[i].companyPartNo;
			   x.add(option);
			   }
		 }else if(searchValue == ""){
			 document.getElementById("companyPartNo").options.length=0;
		 }else{
			 searchValue="^"+searchValue;
			 var patt = new RegExp(searchValue);
			  c1:for(var i=0; i<filteredData.length; i++)
			   {
				  if(patt.test(filteredData[i].companyPartNo)){
		    	 var option = document.createElement("option");
		    	 for(var z = 0; z < r.length; z++){  
			            if(r[z]==filteredData[i].companyPartNo) continue c1;}  
			        r[r.length] = filteredData[i].companyPartNo;
			   option.text = filteredData[i].companyPartNo;
			   x.add(option);
				  }
			   }
		 }
}
function mfgData(){
	 document.getElementById("mfgPartNo").options.length=0
	 var searchValue=document.getElementById("mfgNo").value;
	var text="";
	var r=new Array();
     var x=document.getElementById("mfgPartNo");
     var option = document.createElement("option");
	
	 if(searchValue == "*All" || searchValue == "*all")
		 {  
		 m:for(var i=0; i<filteredData.length; i++){	 
			 var option = document.createElement("option");
			 for(var z = 0; z < r.length; z++){  
		            if(r[z]==filteredData[i].mfgPartNo) continue m;}  
		        r[r.length] = filteredData[i].mfgPartNo;
			   option.text = filteredData[i].mfgPartNo;
			   x.add(option);
			   }
		 }else if(searchValue == ""){
			 document.getElementById("mfgPartNo").options.length=0;
		 }else{
			 searchValue="^"+searchValue;
			 var patt = new RegExp(searchValue);
			  m1:for(var i=0; i<filteredData.length; i++){
				  if(patt.test(filteredData[i].mfgPartNo)){
		    	 var option = document.createElement("option");
		    	 for(var z = 0; z < r.length; z++){  
			            if(r[z]==filteredData[i].mfgPartNo) continue m1;}  
			        r[r.length] = filteredData[i].mfgPartNo;
			   option.text = filteredData[i].mfgPartNo;
			   x.add(option);
				  }
			   }
		 }
}


/* Function Name: filterStatus
 * Return Type : void
 * Description: Method used to filter data based on check boxes
 * Author: Balaji Veerappan
 * Date:18-10-2016
 */
 
function filterStatus(){
	filteredData=[];
	checkedStatus=[];
	var installedUnit= document.getElementById("installedUnit")
	var newUnit=document.getElementById("newUnit")
	var removedUnit=document.getElementById("removedUnit")	
	if(installedUnit.checked || newUnit.checked){
			removedUnit.setAttribute("disabled", "true");
		}
	else{
			document.getElementById("removedUnit").disabled= false;
	  }
	if(installedUnit.checked){
		checkedStatus.push( "Installed Unit"); 
	for(var i=0;i<AllData.length;i++){
		 var temp=AllData[i].status;
	
		if(temp == "Installed Unit"){
			
		filteredData.push(AllData[i])
		}
	}		
	}
	if(newUnit.checked){
		checkedStatus.push("New Unit"); 
		for(var i=0;i<AllData.length;i++){
			var temp=AllData[i].status;
			if(temp == "New Unit")
			filteredData.push(AllData[i])
		}
	}

	if(removedUnit.checked){
		checkedStatus.push("Inactive"); 
		for(var i=0;i<AllData.length;i++){
			var temp=AllData[i].status;
			if(temp == "Inactive")
			filteredData.push(AllData[i])
		}
		installedUnit.setAttribute("disabled", "true");
		newUnit.setAttribute("disabled", "true");
	}
	else
		{
		document.getElementById("installedUnit").disabled= false;
		document.getElementById("newUnit").disabled= false;
		}
	if(checkedStatus.length == 0){
		filteredData=AllData;
	}
	
}
	 


/* Final return filtered data */

function getFilteredData()
{

   alert(filteredData.length)
   return  filteredData;
}

	 
	 
	

