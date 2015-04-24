var vplayer = (function(){
    var video = document.getElementById("video");

    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");

    // Sliders
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");

    var btns = document.getElementsByTagName("button");
    var btnList = Array.prototype.slice.call(btns);

    var self = {
        init : function(){
            btnList.forEach(function(element, index, array){
                self.styleControl(element.style, "position", "absolute", "static");
                self.styleControl(element.style, "marginTop", "2px", "0");
                self.styleControl(seekBar.style, "marginLeft", "0", 0);
                self.styleControl(volumeBar.style, "marginLeft", "0", 0);
            });

            // Event listener for the play/pause button
            playButton.addEventListener("click", function() {
                self.play();
            });

            // Event listener for the mute button
            muteButton.addEventListener("click", function() {
                self.mute();
            });

            // Event listener for the full-screen button
            fullScreenButton.addEventListener("click", function() {
                self.fullscreen();
            });

            // Event listener for the seek bar
            seekBar.addEventListener("change", function() {
                self.seek();
            });

            // Update the seek bar as the video plays
            video.addEventListener("timeupdate", function() {
                self.durationUpdate();
            });

            // Pause the video when the seek handle is being dragged
            seekBar.addEventListener("mousedown", function() {
                video.pause();
            });

            // Play the video when the seek handle is dropped
            seekBar.addEventListener("mouseup", function() {
                video.play();
            });

            // Event listener for the volume bar
            volumeBar.addEventListener("change", function() {
                // Update the video volume
                video.volume = volumeBar.value;
            });
        },
        play : function(){
            if (video.paused == true) {
                // Play the video
                video.play();

                // Update the button text to 'Pause'
                playButton.innerHTML = "Pause";

                self.styleControl(seekBar.style, "marginLeft", "9%", 0);
            } else {
                // Pause the video
                video.pause();

                // Update the button text to 'Play'
                playButton.innerHTML = "Play";

                self.styleControl(seekBar.style, "marginLeft", "7%", 0);
            }
        },
        mute : function(){
            if (video.muted == false) {
                // Mute the video
                video.muted = true;

                // Update the button text
                muteButton.innerHTML = "Unmute";

                self.styleControl(volumeBar.style, "marginLeft", "10%", 0);
            } else {
                // Unmute the video
                video.muted = false;

                // Update the button text
                muteButton.innerHTML = "Mute";

                self.styleControl(volumeBar.style, "marginLeft", "7%", 0);
            }
        },
        fullscreen : function(){
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen(); // Firefox
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen(); // Chrome and Safari
            } else if(video.msRequestFullscreen){
                video.msRequestFullscreen();
            }
        },
        seek : function(){
            // Calculate the new time
            var time = video.duration * (seekBar.value / 100);

            // Update the video time
            video.currentTime = time;
        },
        durationUpdate : function(){
            // Calculate the slider value
            var value = (100 / video.duration) * video.currentTime;

            // Update the slider value
            seekBar.value = value;
        },
        styleControl : function(customStyle, id, val1, val2){
            if(self.isMSIE() == false){
                customStyle[id] = val1;
            }else{
                //default
                customStyle[id] = val2;
            }
        },
        isMSIE : function() {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");

            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
                return true;
            }

            return false;
        }
    };

    return self;
})();

vplayer.init();