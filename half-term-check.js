// JavaScript Document

// Sets now to todays date
var now = moment();
	
// Here we declare variables for all the relevant dates. Use YYYY, MM, DD
// First date
var FirstDate = new Date(2016, 09, 09);
// Second date
var SecondDate = new Date(2016, 10, 21);
// Third date
var ThirdDate = new Date(2016, 12, 16);
// Fourth date
var FourthDate = new Date(2017, 02, 10);

// Here we define the half term date ranges and put that data in to another variable
// var variable_name = moment.range(start_date, end_date)
var Range1 = moment.range(FirstDate, SecondDate);
var Range2 = moment.range(SecondDate, ThirdDate);
var Range3 = moment.range(ThirdDate, FourthDate);

// This sets the variable to true or false
// now.within(AutumnT1) checks if today is within the AutumnT1 range we created above
var Range1status = now.within(Range1)
var Range2status = now.within(Range2);
var Range3status = now.within(Range3);

// Now we check to see if any of our variables were set to true
// We use this info to identify which date range we are currently in (if any)
// If Range1status is true then we can collapse/expand out Bootstrap elements
// If it is not true then we move on to the next statement and check if that one is true
if (Range1status == true) {
	// If you want something to be open use 'show' or 'hide' for collapsed
	$('#collapse1').collapse('show'); 
	$('#collapse2').collapse('hide');
	$('#collapse3').collapse('hide');
	$('#collapse4').collapse('hide');
	$('#collapse5').collapse('hide');
	$('#collapse6').collapse('hide');

}
	else if (Range2status == true) {
	$('#collapse1').collapse('hide');
	$('#collapse2').collapse('show');
	$('#collapse3').collapse('hide');
	$('#collapse4').collapse('hide');
	$('#collapse5').collapse('hide');
	$('#collapse6').collapse('hide');

}
	else if (Range3status == true) {
	$('#collapse1').collapse('hide');
	$('#collapse2').collapse('hide');
	$('#collapse3').collapse('show');
	$('#collapse4').collapse('hide');
	$('#collapse5').collapse('hide');
	$('#collapse6').collapse('hide');

}
// If we are not in any of the ranges then all are hidden (or whatever you want to happen)
	else {
	$('#collapse1').collapse('hide');
	$('#collapse2').collapse('hide');
	$('#collapse3').collapse('hide');
	$('#collapse4').collapse('hide');
	$('#collapse5').collapse('hide');
	$('#collapse6').collapse('hide');
	}

	// I have kept the code very simple so my non-programmer collegues can follow it and edit it.
