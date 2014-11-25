/*
 * jQuery Placement plugin
 * Copyright 2014, Paweł Sieniarski 
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
*/

(function(window, document, $, undefined) {
	'use strict';

	var version = '0.1.0'; 
	var settings; 
	var targetWidth;  
	var targetHeight; 
	var elementOffset;
	var elementWidth;
	var elementHeight;
	var margin; 
	var padding; 
	var $element;
	var $target; 

	var _init = function() {	
		// element 
		$element       = this;
		margin 		   = settings.margin;
		padding		   = settings.padding;
		elementHeight  = padding ? $element.outerHeight(margin) : $element.height();
		elementWidth   = padding ? $element.outerWidth(margin) : $element.width();
		elementOffset  = $element.offset();

		// target 
		$target 	   = $(settings.target); 
		targetWidth    = $target.width();
		targetHeight   = $target.height();
			 
	};
    
    
    // returns edge of an element relative to window top edge 	 
	var getEdge = function() {
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

    // returns distance from element edge (relative to window top edge)  
	var getDistanceFrom = function() {
		var edge = getEdge();
		
		return {
			top:    edge.top,
			right:  targetWidth - edge.right,
			bottom: targetHeight - edge.bottom,
			left: 	edge.left,
		};
	};

	 
	// determines location in a window and returns array, example: ['top', 'left']  
	var location = function() {
		var from 	  = getDistanceFrom();
		var results  = [];

		var compare = function(a, b) {
			if( from[a] < from[b] ) {
				results.push(a);
			} else if ( from[a] > from[b] ) {
				results.push(b);
			} else {
				results.push('center');
			}
		};

		compare('top', 'bottom');
		compare('left', 'right');

		return results;
	};

	$.fn.placement = function(options) {
		settings = $.extend({
			// defaults
			padding: false, 
			margin: false, 
			target: document

		},options);
        
		if(this.length) {
			_init.apply(this);	   
			console.log(getDistanceFrom());
			return location();
			
		}
	};
})(window, document, jQuery);


