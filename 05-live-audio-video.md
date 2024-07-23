---
title: HTML Audio and Video with WebRTC
layout: default
nav_order: 6
---

# Live Audio/Video
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## WEBRTC

WebRTC stands for Web Real Time Communication. We’ll get more into this next week but I want to get started with one portion:

### GETUSERMEDIA

[getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) is a method specified as part of WebRTC that allows access to the microphone and webcam of users.

// The video element on the page to display the webcam
let video = document.getElementById('thevideo');

// Constraints - what do we want?
let constraints = { audio: false, video: true }

// Prompt the user for permission, get the stream
navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
/\* Use the stream \*/
// Attach to our video object
video.srcObject = stream;
// Wait for the stream to load enough to play
video.onloadedmetadata = function(e) {
video.play();
};
})
.catch(function(err) {
/\* Handle the error \*/
alert(err);  
});

One cool aspect of this is that you can draw the video on to a canvas as well (perhaps to manipulate it):

// Canvas element on the page
var thecanvas = document.getElementById('thecanvas');
var thecontext = thecanvas.getContext('2d');

var draw = function() {
// Draw the video onto the canvas
thecontext.drawImage(video,0,0,video.width,video.height);
document.getElementById('imagefile').src = dataUrl;
// Draw again in 3 seconds
setTimeout(draw,3000);
};

draw();

From the canvas, you can create an image and send that via Socket.io to everyone else, making a poor persons video server:

// Create a data URL from the canvas
var dataUrl = thecanvas.toDataURL('image/webp', 1);

// Optionally draw it to an image object to make sure it works
document.getElementById('imagefile').src = dataUrl;

// Send it via our socket server the same way as we send the image
socket.emit('image', dataUrl);

**More Information:** [Capturing Audio and Video in HTML5](http://www.html5rocks.com/en/tutorials/getusermedia/intro/) (a bit out of date)

