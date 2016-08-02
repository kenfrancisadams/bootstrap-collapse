// JavaScript Document

// Sets now to todays date
var now = moment();
	
// Here we declare variables for all the relevant dates. Use YYYY, MM, DD
// First day of the year
var StartOfYear = new Date(2014, 09, 09);
// Last day of Autumn Half Term
var AutumnHT = new Date(2016, 10, 21);
// Last day of Autumn Term
var AutumnT = new Date(2016, 12, 16);
// Last day of Spring Half Term
var SpringHT = new Date(2017, 02, 10);
// Last day of Spring Term
var SpringT = new Date(2017, 03, 31);
// Last day of Summer Half Term
var SummerHT = new Date(2017, 05, 26);
// Last day of Summer Term
var SummerT = new Date(2017, 07, 21);

	// Here we define the half term date ranges and put that data in to another variable
	// var variable_name = moment.range(start_date, end_date)
var AutumnT1 = moment.range(StartOfYear, AutumnHT);
var AutumnT2 = moment.range(AutumnHT, AutumnT);
var SpringT1 = moment.range(AutumnT, SpringHT);
var SpringT2 = moment.range(SpringHT, SpringT);
var SummerT1 = moment.range(SpringT, SummerHT);
var SummerT2 = moment.range(SummerHT, SummerT);

// This sets the variable to true or false
// now.within(AutumnT1) checks if today is within the AutumnT1 range we created above
var AutumnT1status = now.within(AutumnT1)
var AutumnT2status = now.within(AutumnT2);
var SpringT1status = now.within(SpringT1);
var SpringT2status = now.within(SpringT2);
var SummerT1status = now.within(SummerT1);
var SummerT2status = now.within(SummerT2);

// Now we check to see if any of our variables were set to true
// We use this info to identify which half term period we are currently in
// If AutumnT1status is true then we can hide the timetables for the others
// If it is not true then we move on to the next statement and check if that one is true
if (AutumnT1status == true) {
	// If you want something to be open use 'show' or 'hide' for collapsed
	$('#collapse1').collapse('show'); 
	$('#collapse2').collapse('hide');
	$('#collapse3').collapse('hide');
	$('#collapse4').collapse('hide');
	$('#collapse5').collapse('hide');
	$('#collapse6').collapse('hide');

}
	else if (AutumnT2status == true) {
	$('#collapse1').collapse('hide');
	$('#collapse2').collapse('show');
	$('#collapse3').collapse('hide');
	$('#collapse4').collapse('hide');
	$('#collapse5').collapse('hide');
	$('#collapse6').collapse('hide');

}
	else if (SpringT1status == true) {
	$('#collapse1').collapse('hide');
	$('#collapse1').addClass( "prev" );
	$('#collapse2').collapse('hide');
	$('#collapse3').collapse('show');
	$('#collapse4').collapse('hide');
	$('#collapse5').collapse('hide');
	$('#collapse6').collapse('hide');

}
	else if (SpringT2status == true) {
	$('#collapse1').collapse('hide');
	$('#collapse2').collapse('show');
	$('#collapse3').collapse('hide');
	$('#collapse4').collapse('show');
	$('#collapse5').collapse('hide');
	$('#collapse6').collapse('hide');

}
	else if (SummerT1status == true) {
	$('#collapse1').collapse('hide');
	$('#collapse2').collapse('hide');
	$('#collapse3').collapse('hide');
	$('#collapse4').collapse('hide');
	$('#collapse5').collapse('show');
	$('#collapse6').collapse('hide');

}
	else if (SummerT2status == true) {
	$('#collapse1').collapse('hide');
	$('#collapse2').collapse('hide');
	$('#collapse3').collapse('hide');
	$('#collapse4').collapse('hide');
	$('#collapse5').collapse('hide');
	$('#collapse6').collapse('show');

}
// If we are not in any of the half term periods then all are hidden (or whatever you want to happen)
	else {
	$('#collapse1').collapse('hide');
	$('#collapse2').collapse('hide');
	$('#collapse3').collapse('hide');
	$('#collapse4').collapse('hide');
	$('#collapse5').collapse('hide');
	$('#collapse6').collapse('hide');
	}

	// I have kept the code very simple so my non-programmer collegues can follow it and edit it.
