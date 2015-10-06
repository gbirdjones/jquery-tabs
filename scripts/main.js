'use strict';

var $red = $('#red');
var $green = $('#green');
var $blue = $('#blue');
var $redText = $('#redText');
var $greenText = $('#greenText');
var $blueText = $('#blueText');

$( document ).ready(function() {
    console.log( 'ready!' );
$greenText.hide();
$blueText.hide();

$green.on('click', function( ){
	$greenText.show();
	$blueText.hide();
	$redText.hide();
	
});
$blue.on('click', function( ){
	$greenText.hide();
	$blueText.show();
	$redText.hide();
	
});
$red.on('click', function( ){
	$greenText.hide();
	$blueText.hide();
	$redText.show();
	
});

});
