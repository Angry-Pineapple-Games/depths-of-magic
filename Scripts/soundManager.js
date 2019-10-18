var mySoundManager = {
    startSound: function(name, loop, volume = 1) {
        if(loop) {myPreload.audios[name].loop = true;}
        myPreload.audios[name].currentTime = 0;
        myPreload.audios[name].volume = volume;
        myPreload.audios[name].play();
    },
    pauseSound: function(name) {
        myPreload.audios[name].loop = true;
        myPreload.audios[name].pause();
    }, 
    unPauseSound: function(name) {
        myPreload.audios[name].play();
    },
    reStartSound: function(name) {
        myPreload.audios[name].currentTime = 0;
        myPreload.audios[name].play();
    },
    stopSound: function(name) {
        myPreload.audios[name].pause();
        myPreload.audios[name].currentTime = 0;
    }
}