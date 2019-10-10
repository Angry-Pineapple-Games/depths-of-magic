$(document).ready(function () {
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

var ids = [["#btnSpanish", "radio", "Spanish", "Español"], ["#btnEnglish","radio","English","Inglés"], ["btnContact","normal","Contact","Contacto"], ["NewGame","normal","New Game","Nueva partida"],
 ["tutorial1", "normal","Tutorial 1","Tutorial 1"],["description1","normal", "Detailed description", "Descripción detallada"],["tutorial2","normal", "Tutorial 2", "Tutorial 2"],
 ["description2", "normal", "Detailed description", "Descripción detallada"], ["tutorial3", "normal", "Tutorial 3", "Tutorial 3"],["description3", "normal", "Detailed description", "Descripción detallada"],
 ["name1", "normal", "Name", "Nombre"],["role1", "normal", "Role", "Rol"],["name2", "normal", "Name", "Nombre"],["role2", "normal", "Role", "Rol"], ["name3", "normal", "Name", "Nombre"],
 ["role3", "normal", "Role", "Rol"],["references", "normal", "References", "Referencias"],["code", "normal", "Code", "Código"],["images", "normal", "Images", "Imágenes"],
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