/*
 * jQuery Placement plugin
 * Copyright 2014, Paweł Sieniarski 
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
*/

(function(window, document, $, undefined) {
	'use strict';

	// http://benalman.com/news/2012/05/multiple-var-statements-javascript/
	var version = '0.1.0'; 
	
	// settings
	var settings;
	var defaults = {
		include: 'padding',
		target: document 
	};

	var margin; 
	var include; 
	
	// target 
	var $target; 
	var targetWidth;  
	var targetHeight;
	
	// element 
	var $element;
	var elementOffset;
	var elementWidth;
	var elementHeight;
	
	var _init = function() {	

		// element
		$element       = this;
		margin 		   = settings.margin;
		include		   = settings.include;
		elementOffset  = $element.offset();

		elementWidth   = ( include === 'padding' ) ? $element.outerWidth() : $element.width();
		elementHeight  = ( include === 'padding' ) ? $element.outerHeight() : $element.height();

		// target 
		$target 	   = $( settings.target ); 
		targetWidth    = $target.width();
		targetHeight   = $target.height();
	};
    
	var _getEdge = function() {

		var top     = elementOffset.top; 
		var bottom  = top + elementHeight;
		var left    = elementOffset.left;
		var right   = left + elementWidth; 

		return {
			top:    top,
			right:  right,
			bottom: bottom,
			left:   left
		};
	};
 
	var _getDistanceFrom = function() {

		var edge = _getEdge();
		
		return {
			top:    edge.top,
			right:  targetWidth - edge.right,
			bottom: targetHeight - edge.bottom,
			left: 	edge.left,
		};
	};

	var _location = function() {

		var from 	 = _getDistanceFrom();
		var results  = [];

		var compare = function(a, b) {

			if( from[a] < from[b] ) {
				results.push(a);
			} else if ( from[a] > from[b] ) {
				results.push(b);
			} else {
				results.push( 'center' );
			}
		};

		compare( 'top', 'bottom' );
		compare( 'left', 'right' );

		return results;
	};

	$.fn.placement = function(options) {

		settings = $.extend( defaults, options );
        
		if( this.length ) {
			_init.apply( this );	   
			console.log( _getDistanceFrom() );
			return _location();
		}
	};
})(window, document, jQuery);


