/*Script que controla el guardado de las mejores puntuaciones, su guardado y actualizado*/

var myScoreManager = {
    bestScores : [],
    MAX_SCORES: 10,
    currentScore : 0,

    downloadBestScores : function(){//Descarga desde localStorage las 10 mejores puntuaciones
        this.bestScores = [];
        var downloaded = localStorage.getItem("bestScores");
        if (downloaded != null){
            this.bestScores = JSON.parse(downloaded);
        } else {
            for (var i = 0; i < this.MAX_SCORES; i++){
                this.bestScores.push(0.0);
            }
        }
        console.log("[MYSCOREMANAGER] Best Scores: " + this.bestScores);
    },

    uploadBestScores : function(){//Sube a localStorage las 10 mejores puntuaciones actualizadas
        localStorage.setItem("bestScores", JSON.stringify(this.bestScores));
    },

    updateBestScores : function(){//Comprueba si la puntuacion actual se encuentra dentro de las 10 mejores y actualiza
        for (var i = 0; i < this.bestScores.length; i++){
            if (this.currentScore > this.bestScores[i]){
                var aux = this.bestScores[i];
                this.bestScores[i] = this.currentScore;
                for (var j = i+1; j < this.bestScores.length; j++){
                    var aux2 = this.bestScores[j];
                    this.bestScores[j] = aux;
                    aux = aux2;
                }
                return true;
            }
        }
        return false;
    }
}
/*
var myTestScore = {

    fillScore : function(){
        for (var i = 10; i > 0; i--){
            myScoreManager.bestScores.push(i*10);
            console.log("[MYTESTSCORE] " + i + ": " + i*10);
        } 
    },

    checkBoolean : function(){
        var estoFunciona = myScoreManager.updateBestScores();
        console.log("[MYTESTSCORE] " + estoFunciona);
        for (var i = 0; i < myScoreManager.bestScores.length; i++){
            console.log("[MYTESTSCORE] Iteration " + i + ": " + myScoreManager.bestScores[i]);
        }
    }  
}
*/