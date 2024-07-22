---
title: Canvas
layout: default
nav_order: 5
---

# Canvas

# HTML 5 CANVAS

HTML 5 introduced support for a canvas element that can be programmatically drawn on. The really nice thing is that it is very similar to drawing using p5.js (in fact, most of the core of p5.js uses the canvas element).

## BASIC USAGE EXAMPLE

<canvas width="600" height="600" id="mycanvas" />

<script type="text/javascript">
	var canvas = document.getElementById('mycanvas');
	var context = canvas.getContext('2d');
	context.fillStyle="#FF0000";
	context.fillRect(0,0,canvas.width,canvas.height);
</script>

Example: [Canvas with a “draw” loop](https://itp.nyu.edu/~sve204/liveweb_fall2020/canvas_example1.html) (Uses [JavaScript setInterval](http://www.w3schools.com/js/js_timing.asp))  
Example: [Canvas with a “draw” loop](https://itp.nyu.edu/~sve204/liveweb_fall2020/canvas_example1_1.html) (Uses [requestAnimationFrame](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/))  
Example: [Canvas with “draw” loop and mouse interaction](https://itp.nyu.edu/~sve204/liveweb_fall2020/canvas_example2.html)

Reference: [W3 Schools – HTML5 Canvas](http://www.w3schools.com/html/html5_canvas.asp) and [W3 Schools – HTML Canvas Reference](http://www.w3schools.com/tags/ref_canvas.asp)  
Tutorial: [Mozilla Developer Network – Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Canvas_tutorial?redirectlocale=en-US&redirectslug=Canvas_tutorial)  
Examples: [21 Ridiculously Impressive HTML5 Canvas Experiments](http://net.tutsplus.com/articles/web-roundups/21-ridiculously-impressive-html5-canvas-experiments/)

[Edit Canvas](https://itp.nyu.edu/classes/liveweb-fall2023/wp-admin/post.php?post=3481&action=edit)
