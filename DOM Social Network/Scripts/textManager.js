myTextManager = {
    langVersion : 'english',
    texts: {},
    changeLang: function() {
        this.langVersion = localStorage.getItem("langDom");
        if(this.langVersion === 'english') {this.texts = myEnglishVersion;}
        else if(this.langVersion === 'spanish') {this.texts = mySpanishVersion;}
    },
    drawTextInBackground: function(num, text, pos, color = "white", textHeight = 20, textAlign = "center") {
        myGameArea.drawTextInBackground(num, this.texts[text], pos, color, textHeight, textAlign);
    }
}

myEnglishVersion = {
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
    text12: "   he does not become a monster in the process.",
    text21: "And when you gaze long into an abyss,",
    text22: "   the abyss also gazes into you.",
    author: "Friderich Nietzsche",
    gameOver: "GAME OVER",
    thanks: "The whole development team thanks you"
}

mySpanishVersion = {
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
    text12: "             a su vez en un monstruo.",
    text21: "Cuando miras largo tiempo a un abismo,",
    text22: " el abismo a su vez mira dentro de ti.",
    author: "Friderich Nietzsche",
    gameOver: "FIN DE PARTIDA",
    thanks: "Todo el equipo de desarrollo te da las gracias"
}