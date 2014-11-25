#jQuery.placement plugin
A jQuery placement plugin that allows us to retrieve position of an element relative to `window` or any DOM object.
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
$('selector').placement({
    target: '#parent',   
    padding: true     // include paddings  
});
```
