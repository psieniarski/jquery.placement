#jQuery.placement plugin
A jQuery placement plugin that allows us to retrieve position of an element relative to `document` or any DOM object.
##Installation
Include script after the jQuery library:
```html
<script src="path/to/jquery.placement.min.js"/></script>
```
##Options

* `target` object or string

default *document* object
* `padding` boolean 

default *true* 

##Example usage
![usage example](https://raw.githubusercontent.com/psieniarski/jquery.placement/master/demo/img/usage-example.png)
```javascript
$(document).ready(function() {
	$('.box').html(function(){
		return $(this).placement({target: '#target'}).join(' ');
	});
});
```
