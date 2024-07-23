---
title: HTML + JS = DOM (Document Object Model)
layout: default
nav_order: 3
---

# HTML + JS = DOM (Document Object Model)
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>


HTML creates a document, JavaScript can access that document through a data structure called the [DOM (or Document Object Model)](https://www.w3schools.com/js/js_htmldom.asp). This structure allows us to access each individual element as an object with a parent/child relationship or directly by ID using “[getElementById](https://www.w3schools.com/js/js_htmldom_elements.asp)“:


### STRAIGHT JAVASCRIPT

After you have access to an Element, you can change it’s properties or call methods on.  One example is to change the HTML that is within it by altering it’s [innerHTML](https://www.w3schools.com/js/js_htmldom_html.asp) attribute.

var thediv = document.getElementById('mydiv');
thediv.innerHTML = "soemthing else";

Some other things that you might want to look over: [createElement and appendChild](http://www.w3schools.com/jsref/met_document_createelement.asp)

### MANIPULATING STYLE ATTRIBUTES

Using the DOM, you can manipulate any aspect of an HTML Element, including it’s [CSS](https://www.w3schools.com/js/js_htmldom_css.asp)  [attributes](https://www.w3schools.com/jsref/dom_obj_style.asp) such as [visibility](http://www.w3schools.com/jsref/prop_style_visibility.asp) or [background color](https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp):

var thediv = document.getElementById('mydiv');
thediv.style.backgroundColor = "red";

### EVENTS

JavaScript in the browser is very often event driven. This means that we can specify code to run when an event takes place. Some of these are driven by the browser doing it’s thing such as loading a page and some are driven by user interaction such as clicking a link or hovering over an element. Regardless of the type of [event](https://www.w3schools.com/jsref/dom_obj_event.asp), we use the “[addEventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)” method on all of the DOM elements to specify what to listen for and what code to run when the event is triggered.

element.addEventListener('event name', functionToRun);

function functionToRun() {
// Code to execute
}

[JavaScript HTML DOM EventListener](http://www.w3schools.com/js/js_htmldom_eventlistener.asp)

#### load

The load event is very important as it is a way to specify what to do when a document is done loading, it also signifies when it is safe to call elements on the DOM:

function init() {
var thediv = document.getElementById('mydiv');
alert(thediv.innerHTML);
}
window.addEventListener('load', init);

#### mouseover

var thediv;
function init() {
thediv = document.getElementById('mydiv');
thediv.addEventListener('mouseover', hideit);
}

function hideit() {
thediv.style.visibility = "hidden";
}
window.addEventListener('load', init);

#### Many many more

[Wikipedia DOM Events](http://en.wikipedia.org/wiki/DOM_events)

