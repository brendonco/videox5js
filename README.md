#Videox5js

Videox5js is a web video player for HTML5. The theme of the video player controls can be customized.  This project was started Q4 2014.

##Quick start
Simply add these includes to your document's ```<head>```:
```
<link rel="stylesheet" href="./css/template/default/style.css">
```

Add videox5.js library before your document's </body>:
```
<script src="./lib/videox5.js"></script>
```

Then, whenever you want to use Videox5.js you can simply use the <video> element.
```
<video id="video" name="media" poster="http://media.w3.org/2010/05/sintel/poster.png" width="640" height="365">
      <source src="trailer.mp4" type="video/mp4">
      <sourc src="trailer.webm" type="video/webm">
      <sourc src="trailer.ogg" type="video/ogg">
      <p>Your browser doesn't support HTML5 video.</p>
</video>
```

Video Controls - The video object provides methods, properties and events that you can use to control playback from JavaScript.
```
<div id="video-controls">
      <button type="button" id="play-pause" class="play">Play</button>
      <input type="range" id="seek-bar" value="0">
      <button type="button" id="mute">Mute</button>
      <input type="range" id="volume-bar" min="0" max="1" step="0.1" value="1">
      <button type="button" id="full-screen">Full-Screen</button>
</div>
```

##Screenshot
![image](https://cloud.githubusercontent.com/assets/6521691/7312278/f933faf0-ea7a-11e4-8e6e-bf61a6def978.png)
![image](https://cloud.githubusercontent.com/assets/6521691/7312245/b82ab882-ea7a-11e4-9c95-002cc7fa9813.png)

##License
Videox5js is licensed under the Apache License [View license file](http://www.gnu.org/licenses/lgpl.txt)
Copyright 2014
