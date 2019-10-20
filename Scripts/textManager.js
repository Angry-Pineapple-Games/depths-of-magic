/*Gestiona los textos empleados en el juego*/
myTextManager = {
    langVersion: 'english',
    eventualText: [0, -0.01],
    texts: {},
    changeLang: function () {
        if(sessionStorage.getItem("langDom") !== null) {
            this.langVersion = sessionStorage.getItem("langDom");
        }
        if (this.langVersion === 'english') { this.texts = myEnglishVersion; }
        else if (this.langVersion === 'spanish') { this.texts = mySpanishVersion; }
    },
    drawTextInBackground: function (num, text, pos, text1="", color = "white", textHeight = 20, textAlign = "center", isEventualText = false, fixedAlpha=1) {
        if(isEventualText && typeof this.texts[text] !== "undefined") {
            myGameArea.drawTextInBackground(num, this.texts[text] + text1, pos, color, textHeight, textAlign, fixedAlpha);
        }else if (isEventualText && this.eventualText[0] > 0) {//si es un texto eventual ira desapareciendo poco a poco
            myGameArea.drawTextInBackground(num, text + text1, pos, color, textHeight, textAlign, this.eventualText[0]);
        } else if (typeof this.texts[text] === "undefined" && !isEventualText) {//si no es eventual y tampoco tiene traduccion
            myGameArea.drawTextInBackground(num, text + text1, pos, color, textHeight, textAlign);
        } else if (!isEventualText){
            myGameArea.drawTextInBackground(num, this.texts[text] + text1, pos, color, textHeight, textAlign);
        }
    },
    resetEventualText: function() {
        this.eventualText = [1, -0.01];
    }, 
    applyDecay: function() {
        if(this.eventualText[0]>0){this.eventualText[0] += this.eventualText[1];}
    }
}

//distintos idiomas
myEnglishVersion = {
    clickToStart: "Press to start",
    clickToSkip: "Press to skip",
    clickToConinue: "Press to continue",
    clickToRestart: "Press to restart",
    pause: "Pause",
    hp: "HP: ",
    dp: "DP: ",
    ap: "AP: ",
    healthPoints: "Health Points: ",
    defensePoints: "Defense Points: ",
    attackPoints: "Attack Points: ",
    currentLevel: "Current level: ",
    numberLaps: "Number of laps: ",
    text11: "Whoever fights with monsters should see to it that",
    text12: "he does not become a monster in the process.",
    text21: "And when you gaze long into an abyss,",
    text22: " the abyss also gazes into you.",
    author: '"Friedrich Nietzsche"',
    gameOver: "GAME OVER",
    thanks: "The whole development team thanks you",
    stop: "STOP",
    remember: "REMEMBER",
    cut: "CUT",
    score: "Score: ",
    roomCombat: "Room - Combat: ",
    sound: "Sound: deactivated"
}

mySpanishVersion = {
    clickToStart: "Pulsa para empezar",
    clickToSkip: "Pulsa para omitir",
    clickToConinue: "Pulsa para continuar",
    clickToRestart: "Pulsa para reiniciar",
    pause: "Pausa",
    hp: "PV: ",
    dp: "PD: ",
    ap: "PA: ",
    healthPoints: "Puntos de Vida: ",
    defensePoints: "Puntos de Defensa: ",
    attackPoints: "Puntos de Ataque: ",
    currentLevel: "Nivel actual: ",
    numberLaps: "Vueltas recorridas: ",
    text11: "Quien con monstruos lucha, cuide de no convertirse",
    text12: "a su vez en un monstruo.",
    text21: "Cuando miras largo tiempo a un abismo,",
    text22: "el abismo a su vez mira dentro de ti.",
    author: '"Friedrich Nietzsche"',
    gameOver: "FIN DE PARTIDA",
    thanks: "Todo el equipo de desarrollo te da las gracias",
    stop: "PARA",
    remember: "RECUERDA",
    cut: "CORTA",
    score: "Puntos: ",
    roomCombat: "Sala - Combate: ",
    sound: "Sonido: desactivado"
}