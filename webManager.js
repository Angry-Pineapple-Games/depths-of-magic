var myWebContent = {
    //Score
    bestScores : [],
    MAX_SCORES : 10,
    //Music
    isMusicPlaying : false,
    musicAudio : 2,
    
    title1ENG : "Spells out!",
    title1ESP : "¡Hechizos fuera!",
    title2ENG : "Cut those chains!",
    title2ESP : "¡Corta esas cadenas!",
    title3ENG : "The Grimoire... sounds mystic, huh?",
    title3ESP : "El Grimorio... suena místico, ¿no?",
    title4ENG : "What is this game about?",
    title4ESP : "¿De qué va este juego?", 

    tutorial1ENG : "The enemy attacks with spells. You cut the chains of these spells." +
    " There are two kind of spells:\n"+
    "<b>1. Unordered:</b> The spell will be drawn and you can start to cut it however you want.\n"+
    "<b>2. Ordered:</b> You need to cut the chains in the correct order",
    tutorial1ESP : "Los enemigos atacan con hechizos. Cortarás las cadenas de esos hechizos." +
    "Hay dos tipos de hechizo:\n"+
    "<b>1. Desordenado:</b> El hechizo se dibuja y podrás comenzar a cortar como quieras.\n" +
    "<b>2. Ordenado:</b> Tienes que cortar las cadenas en el orden indicado",

    tutorial2ENG : "If you don't cut them, the enemy will hurt you. There are 5 kind of chains:\n"+
    "<b>1. Counter:</b> Cut it and hit!\n"+
    "<b>2. Heal:</b> DON'T cut it and heal yourself!\n"+
    "<b>3. Buff:</b> Cut it and become stronger!\n"+
    "<b>4. Debuff:</b> Cut it and make the enemy weaker!\n"+
    "<b>5. Power:</b> Cut it TWICE and gain all the effects at the same time!\n",

    tutorial2ESP : "Si no las cortas, el enemigo te hará daño. Hay 5 tipos de cadenas:\n"+
    "<b>1. Counter:</b> ¡Corta y golpea!\n"+
    "<b>2. Heal:</b> ¡NO la cortes y cúrate!\n"+
    "<b>3. Buff:</b> ¡Córtala y hazte más fuerte!\n"+
    "<b>4. Debuff:</b> ¡Córtala y haz más débil al enemigo!\n"+
    "<b>5. Power:</b> ¡Córtala dos veces y aplica todos los efectos!\n",

    tutorial3ENG : "The grimiore of spells can be in three states:\n"+
    "<b>- CUT:</b> The enemy is attacking you! Cut those chains!.\n"+
    "<b>- STOP:</b> Time's out! Look at the animation and wait for next attack.\n"+
    "<b>- REMEMBER:</b> An ordered spell is being shown. Pay attention!",

    tutorial3ESP : "El grimorio de hechizos puede estar en tres estados:\n"+
    "<b>- CORTA:</b> El enemigo te está atacando. ¡Corta esas cadenas!.\n"+
    "<b>- PARA:</b> ¡Se acabó el tiempo! Mira la animación y espera al siguiente ataque.\n"+
    "<b>- RECUERDA:</b> Se está mostrando un hechizo ordenado. ¡Presta atención!",

    tutorial4ENG: "This game has two screens:\n"+
    "<b>- Combat:</b> Our hero fights monsters in this screen.\n"+
    "<b>- Grimoire:</b> This is where you interact with the game.",
    tutorial4ESP: "Este juego tiene dos pantallas:\n"+
    "<b>- Combate:</b> Nuestra heroína pelea con monstruos en esta pantalla.\n"+
    "<b>- Grimorio:</b> Aquí interactúas con el juego.",
    
    //About us
    role1ENG : "Game designer, project manager, community manager and sound designer.",
    role1ESP : "Diseñador de juego, gestor de proyecto y community manager.",
    role2ENG : "Artist and animator.",
    role2ESP : "Artista y animador.",
    role3ENG : "Programmer, musician and game designer.",
    role3ESP : "Programador, músico y diseñador de juego.",
    role4ENG : "Artist and animator.",
    role4ESP : "Artista y animadora.",
    role5ENG : "Programmer and sound designer.",
    role5ESP : "Programador y diseñador sonoro.",

    //GDD
    gddContent : "GDD not loaded",

    downloadBestScores : function(){//Descarga desde localStorage las 10 mejores puntuaciones
        this.bestScores = [];
        var downloaded = localStorage.getItem("bestScores");
        if (downloaded != null && typeof downloaded !== "undefined"){
            this.bestScores = JSON.parse(downloaded);
        } else {
            for (var i = 0; i < this.MAX_SCORES; i++){
                this.bestScores.push(0.0);
            }
        }
        this.showScores("en");      
    },

    initialSetup : function () {
        $('#tutorial1').html(myWebContent.title1ENG);
        $('#tutorial2').html(myWebContent.title2ENG);
        $('#tutorial3').html(myWebContent.title3ENG);
        $('#tutorial4').html(myWebContent.title4ENG);
        $('#description1').html(myWebContent.tutorial1ENG);
        $('#description2').html(myWebContent.tutorial2ENG);
        $('#description3').html(myWebContent.tutorial3ENG);
        $('#description4').html(myWebContent.tutorial4ENG);
    },

    showScores : function (lang) {
            if (lang == "es"){
                $('#score1').html("1o: " + this.bestScores[0]);
                $('#score2').html("2o: " +this.bestScores[1]);
                $('#score3').html("3o: " +this.bestScores[2]);
                $('#score4').html("4o: " +this.bestScores[3]);
                $('#score5').html("5o: " +this.bestScores[4]);
                $('#score6').html("6o: " +this.bestScores[5]);
                $('#score7').html("7o: " +this.bestScores[6]);
                $('#score8').html("8o: " +this.bestScores[7]);
                $('#score9').html("9o: " +this.bestScores[8]);
                $('#score10').html("10o: " +this.bestScores[9]);
            } else {
                $('#score1').html("1st: " + this.bestScores[0]);
                $('#score2').html("2nd: " +this.bestScores[1]);
                $('#score3').html("3rd: " +this.bestScores[2]);
                $('#score4').html("4th: " +this.bestScores[3]);
                $('#score5').html("5th: " +this.bestScores[4]);
                $('#score6').html("6th: " +this.bestScores[5]);
                $('#score7').html("7th: " +this.bestScores[6]);
                $('#score8').html("8th: " +this.bestScores[7]);
                $('#score9').html("9th: " +this.bestScores[8]);
                $('#score10').html("10th: " +this.bestScores[9]);
            }
    },
}

$(document).ready(function () {
    myWebContent.initialSetup();
    myWebContent.downloadBestScores();
    sessionStorage.setItem("soundDOM", true);
    let isMobile = detectmob();
    if (isMobile){
        console.log("Entro");
        $('#carImg1').attr('src', 'webAssets/background1_mobile.png');
        $('#carImg2').attr('src', 'webAssets/background2_mobile.png');
        $('#carImg3').attr('src', 'webAssets/background3_mobile.png');
    }

    $("#btnSpanish").change(function () {
        sessionStorage.setItem("langDom", "spanish");
        changeLangHtml("es");
        myWebContent.showScores("es");
    });

    $("#btnEnglish").change(function () {
        sessionStorage.setItem("langDom", "english");
        changeLangHtml("en");
        myWebContent.showScores("en");
    });

    $('#btnMusic').click(function() {
        if (!myWebContent.isMusicPlaying){
            myWebContent.musicAudio = new Audio('webAssets/sound/ending2.ogg');
            myWebContent.musicAudio.play();
            myWebContent.isMusicPlaying = true;
        } else {
            myWebContent.musicAudio.pause();
            myWebContent.isMusicPlaying = false;
        }
    });

    $('#btnON').change(function(){
        sessionStorage.setItem("soundDOM", true);
    });

    $('#btnOFF').change(function(){
        sessionStorage.setItem("soundDOM", false);
    })
});

function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
     //Reference: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
}

var ids = [
    ["#btnSpanish", "radio", "Spanish", "Español"],
    ["#btnEnglish","radio","English","Inglés"],
    ["NewGame","normal","New Game","Nueva partida"],
    ["presentation", "normal", "Get to know us!", "¡Conócenos!"],
    ["tutorial1", "normal",myWebContent.title1ENG,myWebContent.title1ESP],
    ["description1","normal", myWebContent.tutorial1ENG, myWebContent.tutorial1ESP],
    ["tutorial2","normal", myWebContent.title2ENG, myWebContent.title2ESP],
    ["description2", "normal", myWebContent.tutorial2ENG, myWebContent.tutorial2ESP],
    ["tutorial3", "normal", myWebContent.title3ENG, myWebContent.title3ESP],
    ["description3", "normal", myWebContent.tutorial3ENG, myWebContent.tutorial3ESP],
    ["name1", "normal", "Juan", "Juan"],
    ["role1", "normal", myWebContent.role1ENG, myWebContent.role1ESP],
    ["name2", "normal", "Mario", "Mario"],
    ["role2", "normal", myWebContent.role2ENG, myWebContent.role2ESP],
    ["name3", "normal", "Javier", "Javier"],
    ["role3", "normal", myWebContent.role3ENG, myWebContent.role3ESP],
    ["name4", "normal", "Laura", "Laura"],
    ["role4", "normal", myWebContent.role4ENG, myWebContent.role4ESP],
    ["name5", "normal", "César", "César"],
    ["role5", "normal", myWebContent.role5ENG, myWebContent.role5ESP],
    ["references", "normal", "References", "Referencias"],
    ["code", "normal", "Code", "Código"],
    ["art", "normal", "Images", "Imágenes"],
    ["animation", "normal", "Animation", "Animación"],
    ["music", "normal", "Music", "Música"],
    ["backTop", "normal", "Back to top", "Vuelta arriba"],
    ["bestScores", "normal", "Your 10 best scores", "Tus 10 mejores puntuaciones"],
    ["tutorial4", "normal", myWebContent.title4ENG, myWebContent.title4ESP],
    ["description4", "normal", myWebContent.tutorial4ENG, myWebContent.tutorial4ESP],
    ["gameDesc", "normal", "Face your fears and unleash the power of magic in this dark roguelike", "Enfrenta a tus miedos y desata el poder de la magia en este oscuro roguelike"],
    ["btnMusic", "normal", "Play Soundtrack", "Reproducir Soundtrack"],
    ["gameTitle2", "normal", "Coming soon", "Próximamente"],
    ["gameDesc2", "normal", "In the next weeks we'll show you our next project. Stay tuned!", "En las próximas semanas os mostraremos nuestro nuevo proyecto. ¡Permaneced al tanto!"],
    ["presenTitle", "normal", "Who we are?", "¿Quiénes somos?"],
    ["presenDesc", "normal", "A group of people focused on your enjoyment. We do what we love and we love videogames", "Un grupo de personas centradas en tu disfrute. Hacemos lo que nos encanta, y nos encantan los videojuegos"],
    ["#btnON", "radio", "Music ON", "Música SÍ"],
    ["#btnOFF", "radio", "Music OFF", "Música NO"]];

function changeLangHtml(lang) {
    let newLang = 2;
    if(lang==="es") {newLang = 3;}
    for(var idx=0; idx<ids.length; idx++){
        if(ids[idx][1]==="radio") {$(ids[idx][0]).get(0).nextSibling.innerHTML = ids[idx][newLang];}
        else if(ids[idx][1]==="span") {document.getElementById(ids[idx][0]).innerHTML = ids[idx][newLang];}
        else{document.getElementById(ids[idx][0]).innerHTML = ids[idx][newLang];}
    }
}