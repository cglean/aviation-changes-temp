$( document ).ready(function() {
  $('#fleet').keyup(function(){
   var valThis = $(this).val().toLowerCase();
    $('.sort_fleet>option').each(function(){
     var text = $(this).text().toLowerCase();
        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();            
   });
  });
});


$( document ).ready(function() {
	  $('#subFleet').keyup(function(){
	   var valThis = $(this).val().toLowerCase();
	    $('.sort_subFleet>option').each(function(){
	     var text = $(this).text().toLowerCase();
	        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();            
	   });
	  });
	});


$( document ).ready(function() {
	  $('#tail').keyup(function(){
	   var valThis = $(this).val().toLowerCase();
	    $('.sort_tail>option').each(function(){
	     var text = $(this).text().toLowerCase();
	        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();            
	   });
	  });
	});


$( document ).ready(function() {
	  $('#cpnNo').keyup(function(){
	   var valThis = $(this).val().toLowerCase();
	    $('.sort_cpnNo>option').each(function(){
	     var text = $(this).text().toLowerCase();
	        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();            
	   });
	  });
	});


$( document ).ready(function() {
	  $('#mfgNo').keyup(function(){
	   var valThis = $(this).val().toLowerCase();
	    $('.sort_mfgNo>option').each(function(){
	     var text = $(this).text().toLowerCase();
	        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();            
	   });
	  });
	});


$( document ).ready(function() {
	  $('#ataNo').keyup(function(){
	   var valThis = $(this).val().toLowerCase();
	    $('.sort_ataNo>option').each(function(){
	     var text = $(this).text().toLowerCase();
	        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();            
	   });
	  });
	});


$( document ).ready(function() {
	  $('#Serial').keyup(function(){
	   var valThis = $(this).val().toLowerCase();
	    $('.sort_Serial>option').each(function(){
	     var text = $(this).text().toLowerCase();
	        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();            
	   });
	  });
	});


