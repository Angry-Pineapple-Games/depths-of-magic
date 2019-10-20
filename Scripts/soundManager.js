/*Gestiona los sonidos empleados en el juego*/
var mySoundManager = {
    sound: sessionStorage.getItem("soundDOM"),
    startSound: function (name, loop, volume = 1) {
        if (this.sound) {
            if (loop) { myPreload.audios[name].loop = true; }
            myPreload.audios[name].currentTime = 0;
            myPreload.audios[name].volume = volume;
            myPreload.audios[name].play();
        }
    },
    pauseSound: function (name) {
        if (this.sound) {
            myPreload.audios[name].pause();
        }
    },
    pauseAll: function () {
        if (this.sound) {
            for (var snd in myPreload.audios) {
                if (myPreload.audios[snd].currentTime >= 1 && myPreload.audios[snd].currentTime !== myPreload.audios[snd].duration) { this.pauseSound(String(snd)); }
            }
        }
    },
    unPauseSound: function (name) {
        if (this.sound) {
            myPreload.audios[name].play();
        }
    },
    unPauseAll: function () {
        if (this.sound) {
            for (var snd in myPreload.audios) {
                if (myPreload.audios[snd].currentTime >= 1 && myPreload.audios[snd].currentTime !== myPreload.audios[snd].duration) { this.unPauseSound(String(snd)); }
            }
        }
    },
    reStartSound: function (name) {
        if (this.sound) {
            myPreload.audios[name].currentTime = 0;
            myPreload.audios[name].play();
        }
    },
    stopSound: function (name) {
        if (this.sound) {
            myPreload.audios[name].pause();
            myPreload.audios[name].currentTime = 0;
        }
    }
}