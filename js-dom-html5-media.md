# JS + DOM + HTML 5 Media (Audio/Video)

HTML 5 introduced support for audio and video natively in the browser (without plugins). This makes removes the need to use proprietary tools and formats (such as Flash, QuickTime, Windows Media, Real) in order to provide basic media capabilities.

Contents \[[hide](https://itp.nyu.edu/classes/liveweb-fall2023/js-dom-html-5-media-audio-video/#)\]

- [1 MEDIA ELEMENTS](https://itp.nyu.edu/classes/liveweb-fall2023/js-dom-html-5-media-audio-video/#MEDIA_ELEMENTS)
  - [1.1 VIDEO](https://itp.nyu.edu/classes/liveweb-fall2023/js-dom-html-5-media-audio-video/#VIDEO)
    - [1.1.1 Basic Tag Usage](https://itp.nyu.edu/classes/liveweb-fall2023/js-dom-html-5-media-audio-video/#Basic_Tag_Usage)
    - [1.1.2 Formats/Codecs](https://itp.nyu.edu/classes/liveweb-fall2023/js-dom-html-5-media-audio-video/#FormatsCodecs)
    - [1.1.3 Supporting Multiple Formats](https://itp.nyu.edu/classes/liveweb-fall2023/js-dom-html-5-media-audio-video/#Supporting_Multiple_Formats)
  - [1.2 AUDIO](https://itp.nyu.edu/classes/liveweb-fall2023/js-dom-html-5-media-audio-video/#AUDIO)
    - [1.2.1 Basic Tag Usage](https://itp.nyu.edu/classes/liveweb-fall2023/js-dom-html-5-media-audio-video/#Basic_Tag_Usage-2)
    - [1.2.2 Supporting Multiple Formats](https://itp.nyu.edu/classes/liveweb-fall2023/js-dom-html-5-media-audio-video/#Supporting_Multiple_Formats-2)
  - [1.3 JAVASCRIPT](https://itp.nyu.edu/classes/liveweb-fall2023/js-dom-html-5-media-audio-video/#JAVASCRIPT)

## MEDIA ELEMENTS

### VIDEO

#### Basic Tag Usage

<video width="720" height="480" src="video.mp4" controls />

Example: [Video Basics](https://itp.nyu.edu/~sve204/dwd_spring2018/video_basics.html)  
Reference: [w3schools.com – HTML5 Video](http://www.w3schools.com/html/html5_video.asp)  
Browser Support: [Can I use… Video element](http://caniuse.com/#feat=video)

#### Formats/Codecs

MPEG-4/H.264: [http://caniuse.com/#feat=mpeg4](http://caniuse.com/#feat=mpeg4)  
WebM/VP8: [http://caniuse.com/#feat=webm](http://caniuse.com/#feat=webm) | [http://www.webmproject.org/](http://www.webmproject.org/)  
Ogg/Theora: [http://caniuse.com/#feat=ogv](http://caniuse.com/#feat=ogv) | [http://www.theora.org/](http://www.theora.org/) Tools: [Miro Video Converter](http://www.mirovideoconverter.com/)

#### Supporting Multiple Formats

<video width="720" height="480" controls>
	<source src="video.mp4" type="video/mp4">
	<source src="video.ogg" type="video/ogg">
	Your browser does not support the video tag.
</video>

Attributes: autoplay, controls, height, width, loop, muted, poster, preload, src

Example: [Multiple Formats](https://itp.nyu.edu/~sve204/dwd_spring2018/video_basics_multi.html)

### AUDIO

#### Basic Tag Usage

<audio controls src="audio.mp3" />

Reference: [w3schools.com – HTML audio Tag](http://www.w3schools.com/tags/tag_audio.asp)  
Browser Support: [Can I use… Audio element](http://caniuse.com/#feat=audio)  
Formats/Codecs: MP3, Ogg Vorbis, WAV

#### Supporting Multiple Formats

<audio controls>
	<source src="audio.ogg" type="audio/ogg">
	<source src="audio.mp3" type="audio/mpeg">
	Your browser does not support the audio tag.
</audio>

Attributes: autoplay, controls, loop, preload, src

### JAVASCRIPT

Of course, there are a lot of features and functionality available via JavaScript.

Overview: [w3schools.com – HTML Audio/Video DOM Reference](http://www.w3schools.com/tags/ref_av_dom.asp)

<html>
        <head>
                <title>Video JavaScript</title>
        </head>
        <body>
<!-- Add an “id” to the video tag so that we can access it easily in JavaScript -->
                <video width="720" height="480" controls id="thevideo">
                        <source src="video.webm" type="video/webm">
                        <source src="video.mp4" type="video/mp4">
                        <source src="video.ogg" type="video/ogg">
                        Your browser does not support the video tag.
                </video>
<!-- When this button is clicked, call the doSomething function -->
                <button onClick="doSomething()">Do Something here</button>
                <script type="text/javascript">
                        // Get Access to the Video Object
                        var theVideoObject = document.getElementById("thevideo");
                        // Alert, just to make sure it isn’t null
                        alert(theVideoObject);
                        
						// Called by the Do Something button
                        function doSomething() {
                                // Change the width
                                theVideoObject.width = theVideoObject.width/2;
                                if (theVideoObject.paused) {
                                // If the video is paused, call play
                                        theVideoObject.play();
                                } else {
                                        // Otherwise, pause it
                                        theVideoObject.pause();
                                }                
                        }
                </script>
        </body>
</html>

Example: [Video JavaScript Example](https://itp.nyu.edu/~sve204/dwd_spring2018/video_javascript.html)

More Information: [HTML5 Rocks – Multimedia](http://www.html5rocks.com/en/features/multimedia)

[Edit JS + DOM + HTML 5 Media (Audio/Video)](https://itp.nyu.edu/classes/liveweb-fall2023/wp-admin/post.php?post=537&action=edit)