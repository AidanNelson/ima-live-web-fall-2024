---
title: Schedule
layout: home
nav_order: 2
---

# Weekly Schedule
{: .no_toc }

<details closed markdown="block">
  <summary>
    Table of Contents
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

## Week 1

### Objectives

-   Introductions

### Outline

-   Introductions
-   Syllabus
-   Lecture/Workshop – [HTML, CSS](./basic-html-and-css), [javascript & DOM manipulation](./document-object-model)
-   Lecture/Workshop – Media Elements – Encoding – Controlling
-   [Code from Class](https://editor.p5js.org/AidanNelson/sketches/6DQMNdAGR)

### Assignments

- **Read** through the guides on [HTML & CSS](./basic-html-and-css) and [Javascript & DOM Manipulation](./document-object-model)
- **Watch** the following videos:
    -   [HTML Basics](https://stream.nyu.edu/media/html%20basics/1_8ts8q7gu)
    -   [CSS Basics](https://stream.nyu.edu/media/css%20basics/1_7yydov1h)
    -   [CSS Basics – Better Organization](https://stream.nyu.edu/media/css%20basics%20-%20better%20organization%20with%20html/1_rp8pd8ip)
    -   [JavaScript DOM Basics](https://stream.nyu.edu/media/javascript%20dom%20basics/1_s9ufrrai)

-   **Write** a blog post detailing the last “live” media you consumed.  Answer these questions: 
    - What was it?  
    - Why did you consume it “live” or in real time?  
    - How was your relationship to the media or others affected through the “live” consumption of it? 
    - What was missing in your experience?

-   **Create** a self-portrait on a web page using HTML, CSS, and  JavaScript.  Start on the p5.js web editor, open the `index.html` file and make your edits there.  You may use p5.js as *part* of your sketch if you like.  In addition, please use at least (2) of the following elements:
    - [HTML Media Elements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement): `<video>` or `<audio>`
    - An image tag: `<img>`
    - Use Javascript to change the color, size, font or position of an HTML element
    - Use CSS to animate an element following [this guide](https://www.w3schools.com/css/css3_animations.asp)
    - Use CSS to change a style when someone hovers their mouse pointer over an element following [this guide](https://www.w3schools.com/cssref/sel_hover.php)
    - Create a list with HTML using the `<ul>` tag following [this guide](https://www.w3schools.com/tags/tag_ul.asp)
    - **Advanced**: Use Javascript to add a click-interaction on an element following [this guide](https://www.w3schools.com/jsref/event_onclick.asp)



## Week 2

### Objectives

-   Becoming Live


### Outline

-   Review Homework
-   [AJAX and WebSockets](./becoming-live)
-   [Server Side JavaScript: Node.js](./becoming-live)
-   [Chat](./becoming-live)
-   [Glitch](./becoming-live)
-   [Live version of the code from class](/examples/week-02/index.html) and [Download link](/examples/week-02.zip)

### Assignments

- **[Watch this video](https://drive.google.com/file/d/1NJDJatUKDJVb8am8BMdolt9-xLIcM3Zt/view?usp=sharing)** introducing websockets (you will need to be logged into Google Drive with your NYU email)
- **Reimagine Chat!** After watching the video above, remix the chat application adding your own design / interaction elements.

    1. Create an account on [Glitch.com](https://glitch.com/) web-based code editor.
    2. Open [this chat application](https://glitch.com/edit/#!/f24-liveweb-chat) and press *Remix* to create your own copy.
    3. Modify the front end code (`public/index.html` and `public/sketch.js`) – adding any features or design/interactive elements you wish!

    *Not sure what to create?*  Try one of the following:
    * Add an image with every incoming chat message
    * Make the chat messages appear as leaves which fall after they arrive
    * Each incoming message displays in a different font and color.
    * Use a text [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) box instead of p5.js' `keyPressed()` function to get messages.
    * Use HTML `<p>` elements to display incoming messages using p5.js' [createP()](https://p5js.org/reference/p5/createP/) function or the JavaScript [createElement('p')](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) function
    * Make all of the messages spin in circles
    * Something else entirely...

## Week 3

### Objectives

-   Transmitting Other Data Types

### Outline

-   Student chat project sharing
-   Transmitting Other Data Types
    -   Mouse and Other Events
-   [Canvas](./canvas)
    -   Collaborative Drawing
        -   [Example from Class](https://glitch.com/edit/#!/f24-liveweb-drawing?path=public%2Fsketch.js%3A24%3A27)

### Assignments

-  **Collaborative Action** Remix the drawing application we began in class, adding in your own design / interaction elements.

    1. Login to your account on [Glitch.com](https://glitch.com/) web-based code editor.
    2. Open [this glitch sketch](https://glitch.com/edit/#!/f24-liveweb-drawing?path=public%2Fsketch.js%3A24%3A27) and press *Remix* to create your own copy.
    3. Modify the front end code (`public/index.html` and `public/sketch.js`) – adding any features or design/interactive elements you wish!  If you want to add an additional interaction, you may need to modify the server code (`server.js`).

    *Not sure what to create?*  Try one of the following:
    * Each peer's mouse hides or reveals an image, creating an interactive maze or a game of "I Spy"
    * Expand on the drawing example so each peer can change their color or brush size and clear the canvas.
    * Create 3D geometries using p5.js' WebGL mode
    * Paint using images!  Follow [this p5.js example](https://p5js.org/examples/imported-media-copy-image-data/) to learn more.
    * Something else entirely... have fun and try something new!

## Week 4

### Objectives

-   Live Medias

### Outline

-   Review assignment
-   Student Presentation
-   [HTML5 Audio and Video with WebRTC](./live-audio-video)
-   [In Class Example of sending canvas through socket](https://glitch.com/edit/#!/olivine-green-emmental?path=public%2findex.html%3a19%3a55)
-   [In Class Example of doing the same with p5.js](https://glitch.com/edit/#!/guiltless-enormous-moon?path=public%2findex.html%3a18%3a12)

### Assignments

-   What can live or real-time camera images add to your drawing or chat application?  Try adding that capability in to one of your two previous assignments.

## Week 5 

### Objectives

-   Multi-user Live Audio/Video

### Outline

-   [Multi-user Live Audio/Video client and server side](./multiuser-live-audio-video)
-   [p5LiveMedia](https://github.com/vanevery/p5livemedia)
-   Canvas Streaming
-   Midterm Project Discussion
-   Student Presentation

### Assignments

-   Start to think about midterm project ideas
-   [Try out this Glitch example using SimplePeer](https://glitch.com/edit/#!/simplepeer-with-signaling-server?path=readme.md%3a1%3a0) and this [p5livemedia example](https://editor.p5js.org/shawn/sketches/7mlwlsfo3)
-   On the class website, detail a midterm project idea. Please make sure to touch on the concept and begin to explore how to make it. Remember that the goal of the midterm project to develop something of your own choosing using the techniques learned through the course thus far.  It should be similar in scope to a homework assignment (complete in 1 week).  It is possible to begin working on a larger project in which case the midterm should be dedicated to a proof of concept of the overall idea.  Think of it as a rough sketch rather than a painting or an outline instead of a paper.

## Week 6

### Objectives

-   Midterm Project Ideas

### Outline

-   Present and Discuss Midterm Project Proposals

-   Review Previous material as they relate to midterm projects

### Assignments

-   Work on Midterm Projects
-   Prepare midterm project presentation – This presentation should be approximately 10 minutes including feedback.  Please touch on the concept as well as how you accomplished it along with a demonstration.

## Week 7

### Objectives

-   Midterm Project Presentations

### Outline

-   Midterm Project Presentations
-   [HTTPS](./https) + Let’s Encrypt
    -   [HTTPS video](https://stream.nyu.edu/media/https/1_dp5xxd1s)
    -   [Let’s Encrypt video](https://stream.nyu.edu/playlist/dedicated/1_uu3p80ff/1_f22insgv)

### Assignments

-   Post Midterm Project Documentation to the class website
    -   Something visual, preferably a screen grab video and/or video of the interaction.
    -   A short description of what it is.
    -   A short description of why you made it.
    -   A short description of how it works.
    -   Add your code for people around the world who want to do similar things.
    -   Describe where you would like to take this project, what more you would like to do with it.

## Week 8

### Objectives

-   WebRTC Data
-   Capture and Storage

### Outline

-   [Data Channels](./peer-to-peer-data)
    -   [p5LiveMedia Example](https://editor.p5js.org/shawn/sketches/wvh7dfmxn)
-   [MediaRecorder](./media-recorder)
-   [Saving Files on Node.js](./media-recorder)

### Assignments

-   Try using DataChannels instead of sockets for an earlier chat based assignment
-   Get up and running with this [example](https://itp.nyu.edu/~sve204/liveweb_spring2023/mediarecorder-simplepeer-example.zip) on Glitch or your own VPS

## Week 9

### Objectives

-   Field Trip
-   Databases

### Outline

-   Simple Server Side Databases

### Assignments

-   Add in a database to previous assignment

## Week 10

### Objectives

-   Presentations
-   Final Project Discussion

### Assignments

-   Develop final project proposal.  Start with a description, consider why you want to do this and how you are going to accomplish it. Include any references. Draw a system diagram and/or wireframes to further illustrate the idea.  Prepare to present the idea to the class for feedback.

## Week 11

## Session 1

### Objectives

-   Presentation
-   Final Project Proposals
-   [Mobile for Live](./mobile)

### Outline

-   Final Project Proposals

### Assignments

-   Final Projects

## Week 12

### Objectives

-   Machine Learning for Live
-   Serial to Node

### Outline

-   [Serial Example](https://itp.nyu.edu/~sve204/liveweb_spring2022/serial-example.zip)

### Assignments

-   Final Projects

## Week 13

### Objectives

-   Traditional Streaming
-   Physical
-   Final Project Workshop

### Outline

-   [Traditional Streaming + OBS](https://itp.nyu.edu/~sve204/liveweb_spring2023/streaming.html)
-   Live Data from the physical world (arduino) [example](https://itp.nyu.edu/~sve204/liveweb_spring2023/serial-example.zip)
-   Final Project Workshop

### Assignments

-   Final Project Work
-   Prepare final project presentation – This presentation should be approximately 10 minutes including feedback.  Please touch on the concept as well as how you accomplished it along with a demonstration.

## Week 14

### Objective

-   Final Project Presentations

### Outline

-   Final Project Presentations

### Assignments

-   Final Project Documentation: Post to the class website
    -   Something visual, preferably a screen grab video and/or video of the interaction.
    -   A short description of what it is.
    -   A short description of why you made it.
    -   A short description of how it works.
    -   Add your code for people around the world who want to do similar things.
    -   Describe where you would like to take this project, what more you would like to do with it.
