// Scripts

$(document).ready(function(){

	$('.modal').modal({
		
	});

	$('.btn-group').button();
	
	
	$('.joke').popover({
		trigger: 'click',
		placement: 'top'
	
	});
	
	$('.joke').tooltip({
		animation: true,
		placement: 'bottom',
		trigger: 'hover',
		title: 'Click for the answer'
		
	});


	$('.zoom').zoom();



});