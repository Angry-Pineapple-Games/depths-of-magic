var myWebContent = {
    //Tutorials
    title1ENG : "How to play",
    title1ESP : "Cómo jugar",
    title2ENG : "Types of ropes",
    title2ESP : "Tipos de cuerdas",
    title3ENG : "How to combat",
    title3ESP : "Cómo combatir",
    tutorial1ENG : "In Depths of Magic you'll explore a dungeon by fighting against dangerous enemies! These enemies attack you with magic spells that you'll counter by slashing the screen. \n" +
    "When the spell is drawn, use your mouse or your touch screen and cut the ropes before the time ends. If you succeed, you'll return the spell to the enemy and damage it! \n" +
    "There are two kind of spells:\n"+
    "1. Unordered: The spell will be drawn and immediately you can start to cut it however you want.\n"+
    "2. Ordered: Before you can start to make the cuts, the ropes of the spell will be drawn in a particular order that you'll need to follow to successfully counter the attacks.\n"+
    "Good luck on your quest!",
    tutorial1ESP : "¡En Depths of Magic vas a explorar una mazmorra peleando con peligrosos enemigos! Estos te atacarán con diferentes hechizos mágicos que debes contrarrestar haciendo cortes sobre la pantalla. \n"+
    "Cuando un hechizo se dibuje por pantalla, utiliza el ratón o la pantalla táctil y corta las cuerdas que lo forman antes de que termine el tiempo. Si lo consigues, ¡devolverás el hechizo al enemigo y le harás daño! \n"+
    "Hay dos tipos de hechizo: \n"+
    "1. Desordenado: El hechizo se dibujará e inmediatamente puedes empezar a cortar como quieras.\n"+
    "2. Ordenado: Antes de que comiences a cortar, las cuerdas del hechizo se dibujarán en un orden particular que tendrás que seguir para contrarrestar los ataques.\n"+
    "¡Mucha suerte en tu aventura!",
    tutorial2ENG : "Magic spells have five kinds of ropes that have different effects and need to be cut in different ways in order to guide you to victory:\n"+
    "1. Counter: This rope can be cut any way you want and by cutting it you'll avoid the damage that this rope would do and return it to the enemy. Cut as much as you can to not take damage and kill the monsters!\n"+
    "2. Heal: This rope also can be cut any way you want, but you may not want to do it since it would heal the enemy! You should avoid cutting these ropes to heal yourself. Don't make brainless plays!\n"+
    "3. Buff: You only can cut this rope if you start cutting it from its left or above it. Cutting this rope would give you a boost in your stats for the next attack: you're going to do more damage and your endurance is going to increase. But watch out! This also applies to the enemy if you miss the cut: it'll do you more damage and its defense will grow.\n"+
    "4. Debuff: You only can cut this rope if you start cutting it from its right or below it. If you cut this rope, a negative buff will be applied to the enemy, making it more vulnerable to your attacks and less dangerous to you. As with the buff rope, if you miss the cut, it would be applied to you and your stats will decrease.\n"+
    "5. Power: This is a special rope that needs to be dealt with a double cut. If you can cut this, it'll apply all the benefits of the other ropes, so it's a great tool to use. Not cutting it doesn't harm you, so you should focus on the other ropes first. Remember that you have limited time!",
    tutorial2ESP : "Los hechizos mágicos tienen cinco tipos de cuerdas. Cada cuerda tiene un efecto distinto y debe ser cortada de una manera concreta para poder alzarte con la victoria:\n"+
    "1. Contraataque: Esta cuerda puede cortarse de cualquier manera y, al hacerlo, evitarás el daño que fuese a hacerte y se lo devolverás al enemigo. ¡Corta todas las que puedas para no recibir daño y matar a los monstruos!\n"+
    "2. Curación: Esta cuerda también se puee cortar de cualquier forma, pero no deberías hacerlo, ¡ya que curará el enemigo! Debes evitar cortar estas cuerdas para curarte. ¡Piensa tus jugadas!\n"+
    "3. Buff: Solo puedes cortar esta cuerda si comienzas a realizar el corte desde su izquierda o sobre ella. Cortar esta cuerda aumentará tus estadísticas para el siguiente ataque: harás más daño y serás más resistente. ¡Pero cuidado! Esto también se aplica al enemigo si fallas: te hará más daño y su defensa crecerá.\n"+
    "4. Debuff: Solo puedes cortar esta cuerda si comienzas a realizar el corte desde su derecha o debajo de ella. Cortarla bajará las estadísticas del enemigo, haciéndolo más vulnerable a tus ataques y menos peligroso. Como con la cuerda de buff, si fallas el corte, esto ser aplicará a ti y tus estadísticas bajarán. \n"+
    "5. Power: Esta es una cuerda especial a la que se debe realizar un corte doble. Si puedes cortarla, se te aplicarán los beneficios de todas las otras cuerdas, así que es un objetivo muy interesante. No cortarla no te hace daño, así que deberías centrarte en cortar las otras cuerdas primero. ¡Recuerda que el tiempo es limitado!",
    tutorial3ENG : "The grimoire is where the spells are drawn is where you are going to make your cuts. It can be in two stats:\n"+
    "- Blocked: When the grimoire is red, it means that you can't make any moves. This is going to occur when an ordered spell is being drawn or when the combat animation is being showed on the other screen.\n"+
    "- Unblocked: When the grimoire is blue, you can make your cuts and defend yourself. Have fun!",
    tutorial3ESP : "Los hechizos se dibujan en el grimorio, que es donde deberás realizar tus cortes. Puede encontrarse en dos estados:\n"+
    "- Bloqueado: Cuando el grimorio está rojo, no puedes interactuar. Esto ocurrirá cuando un hechizo ordenado se esté dibujando o cuando se estén mostrando animaciones de combate en la otra pantalla.\n"+
    "- Desbloqueado: Cuando el grimorio está azul, eres libre de hacer los cortes y de defenderte. ¡Disfruta!",

    //About us
    role1ENG : "Game designer, project manager and community manager.",
    role1ESP : "Diseñador de juego, gestor de proyecto y community manager.",
    role2ENG : "Artist and animator.",
    role2ESP : "Artista y animador.",
    role3ENG : "Programmer and game designer.",
    role3ESP : "Programador y diseñador de juego.",
    role4ENG : "Artist and animator.",
    role4ESP : "Artista y animadora.",
    role5ENG : "Programmer and sound designer.",
    role5ESP : "Programador y diseñador sonoro.",

    //GDD
    gddContent : "GDD not loaded"
}

$(document).ready(function () {
    initialSetup();

    $("#btnSpanish").change(function () {
        sessionStorage.setItem("langDom", "spanish");
        changeLangHtml("es");
    });

    $("#btnEnglish").change(function () {
        sessionStorage.setItem("langDom", "english");
        changeLangHtml("en");
    });
});

initialSetup = function () {
    $('#tutorial1').html(myWebContent.title1ENG);
    $('#tutorial2').html(myWebContent.title2ENG);
    $('#tutorial3').html(myWebContent.title3ENG);
    $('#description1').html(myWebContent.tutorial1ENG);
    $('#description2').html(myWebContent.tutorial2ENG);
    $('#description3').html(myWebContent.tutorial3ENG);
}
/*TODO
parseMarkdown = function(content){
    var markdownContent = marked(content);
    $('#gddText').html(markdownContent);
    //From: https://github.com/markedjs/marked
}


showGDD = function() {
    $('#gddDiv').show();
    parseMarkdown(gddContent);
    $('#tutorial1').hide();
    $('#tutorial2').hide();
    $('#tutorial3').hide();
    $('#description1').hide();
    $('#description2').hide();
    $('#description3').hide();
    $('#tutorialImg1').hide();
    $('#tutorialImg2').hide();
    $('#tutorialImg3').hide();
}

hideGDD = function(){
    $('#gddDiv').hide();
    $('#tutorial1').show();
    $('#tutorial2').show();
    $('#tutorial3').show();
    $('#description1').show();
    $('#description2').show();
    $('#description3').show();
    $('#tutorialImg1').show();
    $('#tutorialImg2').show();
    $('#tutorialImg3').show();
}

$('#btnGDD').click(function(){
    showGDD();
})
*/
var ids = [["#btnSpanish", "radio", "Spanish", "Español"], ["#btnEnglish","radio","English","Inglés"], ["NewGame","normal","New Game","Nueva partida"], ["presentation", "normal", "Get to know us!", "¡Conócenos!"],
 ["tutorial1", "normal",myWebContent.title1ENG,myWebContent.title1ESP],["description1","normal", myWebContent.tutorial1ENG, myWebContent.tutorial1ESP],["tutorial2","normal", myWebContent.title2ENG, myWebContent.title2ESP],
 ["description2", "normal", myWebContent.tutorial2ENG, myWebContent.tutorial2ESP], ["tutorial3", "normal", myWebContent.title3ENG, myWebContent.title3ESP],["description3", "normal", myWebContent.tutorial3ENG, myWebContent.tutorial3ESP],
 ["name1", "normal", "Juan", "Juan"],["role1", "normal", myWebContent.role1ENG, myWebContent.role1ESP],["name2", "normal", "Mario", "Mario"],["role2", "normal", myWebContent.role2ENG, myWebContent.role2ESP], ["name3", "normal", "Javier", "Javier"],
 ["role3", "normal", myWebContent.role3ENG, myWebContent.role3ESP],["name4", "normal", "Laura", "Laura"],["role4", "normal", myWebContent.role4ENG, myWebContent.role4ESP],["name5", "normal", "César", "César"], 
 ["role5", "normal", myWebContent.role5ENG, myWebContent.role5ESP], ["references", "normal", "References", "Referencias"],["code", "normal", "Code", "Código"],["images", "normal", "Images", "Imágenes"],
 ["animation", "normal", "Animation", "Animación"], ["music", "normal", "Music", "Música"],["backTop", "normal", "Back to top", "Vuelta arriba"]];

function changeLangHtml(lang) {
    let newLang = 2;
    if(lang==="es") {newLang = 3;}
    for(var idx=0; idx<ids.length; idx++){
        if(ids[idx][1]==="radio") {$(ids[idx][0]).get(0).nextSibling.textContent = ids[idx][newLang];}
        else if(ids[idx][1]==="span") {document.getElementById(ids[idx][0]).textContent = ids[idx][newLang];}
        else{document.getElementById(ids[idx][0]).textContent = ids[idx][newLang];}
    }
}