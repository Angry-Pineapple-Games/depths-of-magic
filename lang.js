var title1ENG = "How to play";
var title1ESP = "Cómo jugar";
var title2ENG = "Types of ropes";
var title2ESP = "Tipos de cuerdas";
var title3ENG = "How to combat";
var title3ESP = "Cómo combatir";

var tutorial1ENG = "English tut1";
var tutorial1ESP = "Tutorial básico en español";
var tutorial2ENG = "English tut2";
var tutorial2ESP = "Tutorial básico en español 2";
var tutorial3ENG = "English tut3";
var tutorial3ESP = "Tutorial básico en español 3";

var role1ENG = "Game Designer, project manager and community manager.";
var role1ESP = "Diseñador de juego, gestor de proyecto y community manager.";
var role2ENG = "Artist and animator.";
var role2ESP = "Artista y animador.";
var role3ENG = "Programmer and game designer.";
var role3ESP = "Programador y diseñador de juego.";
var role4ENG = "Artist and animator.";
var role4ESP = "Artista y animadora.";
var role5ENG = "Programmer and sound designer.";
var role5ESP = "Programador y diseñador sonoro.";

$(document).ready(function () {
    initialSetup();

    $("#btnSpanish").change(function () {
        localStorage.setItem("langDom", "spanish");
        console.log(localStorage.getItem("langDom"));
        changeLangHtml("es");
    });

    $("#btnEnglish").change(function () {
        localStorage.setItem("langDom", "english");
        console.log(localStorage.getItem("langDom"));
        changeLangHtml("en");
    });
});

initialSetup = function () {
    document.getElementById("tutorial1").innerHTML = title1ENG;
    document.getElementById("tutorial2").innerHTML = title2ENG;
    document.getElementById("tutorial3").innerHTML = title3ENG;

    document.getElementById("description1").innerHTML = tutorial1ENG;
    document.getElementById("description2").innerHTML = tutorial2ENG;
    document.getElementById("description3").innerHTML = tutorial3ENG;
}

var ids = [["#btnSpanish", "radio", "Spanish", "Español"], ["#btnEnglish","radio","English","Inglés"], ["btnContact","normal","Contact","Contacto"], ["NewGame","normal","New Game","Nueva partida"],
 ["tutorial1", "normal",title1ENG,title1ESP],["description1","normal", tutorial1ENG, tutorial1ESP],["tutorial2","normal", title2ENG, title2ESP],
 ["description2", "normal", tutorial2ENG, tutorial2ESP], ["tutorial3", "normal", title3ENG, title3ESP],["description3", "normal", tutorial3ENG, tutorial3ESP],
 ["name1", "normal", "Juan", "Juan"],["role1", "normal", role1ENG, role1ESP],["name2", "normal", "Mario", "Mario"],["role2", "normal", role2ENG, role2ESP], ["name3", "normal", "Javier", "Javier"],
 ["role3", "normal", role3ENG, role3ESP],["name4", "normal", "Laura", "Laura"],["role4", "normal", role4ENG, role4ESP],["name5", "normal", "César", "César"], ["role5", "normal", role5ENG, role5ESP],
 ["references", "normal", "References", "Referencias"],["code", "normal", "Code", "Código"],["images", "normal", "Images", "Imágenes"],
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