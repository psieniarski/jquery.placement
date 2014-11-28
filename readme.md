#jQuery.placement plugin
A jQuery placement plugin that allows us to retrieve position of an element relative to `document` or any DOM object.
##Simple installation
Include script after the jQuery library:
```html
<script src="path/to/jquery.placement.min.js"/></script>
```
##Options

* `target` object or string
default *window* object
* `padding` boolean 
default *true* 

##Example usage
```javascript
$(document).ready(function() {
	$('.box').html(function(){
		return $(this).placement({target: '#target'}).join(' ');
	});
});
```
