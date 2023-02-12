// Initialisationd de la BDD de dé sous la forme d'un JSON
let diceList = {};

leftbtn.onmousedown = function () {
if (document.getElementById("leftbtn")) {
    let leftbtn = document.getElementById("leftbtn")
    let rightbtn = document.getElementById("rightbtn")
        document.getElementById("homePage").className = " fadeOutLeft";
        let interval = setInterval(() => {
            leftbtn.innerHTML = "Dé standard numérique";
            leftbtn.id = "leftbtn2";        
            rightbtn.innerHTML = "Dé customisé";
            rightbtn.id = "rightbtn2";
            document.getElementById("arrowWrap").className = "";
            document.getElementById("homePage").className = " fadeInRight";
            clearInterval(interval);
        }, 1300);
    }
}

document.getElementById("arrowWrap").onmousedown = function () {
    document.getElementById("homePage").className = " fadeOutRight";
    let interval = setInterval(() => {
        document.getElementById("leftbtn2").innerHTML = "Créer un dé";
        document.getElementById("leftbtn2").id = "leftbtn"; 
        document.getElementById("rightbtn2").innerHTML = "Utilisé dé existant";
        document.getElementById("rightbtn2").id = "rightbtn";
        document.getElementById("arrowWrap").className = "hidden"
        document.getElementById("homePage").className = " fadeInLeft";
        clearInterval(interval);
    }, 1300);
};

let left2 = null
let newDice = {
    Name: "",
    Face: []
};

let checkleft2 = setInterval(() => {
    left2 = document.getElementById("leftbtn2");
    if (left2 !== null) {
        // Attribution de son nom
        newDice.Name = document.getElementById("diceName").value
        
        // Création de la structure des sonnées de faces
        let faces = [];
        for (let index = 0; index < document.getElementById("nbFace").value; index++) {
            let value = {
                Couleur: "",
                Description: "",
                Valeur: "",
                ImageURL: ""
            };
            faces.push(value);
        };
        newDice.Face = faces;
        
        // Listing des faces modifiables dans le fieldset
        if (document.getElementById("faceArray").childElementCount / 2 != document.getElementById("nbFace").value) { 
            document.getElementById("faceArray").innerHTML = ""
            newDice.Face.forEach((element, index) => {
                document.getElementById("faceArray").innerHTML += (
                    '<div class="faceWrap"><input type="radio" name="radioFace" id="' + "Face" + (index + 1) + '"><label for="' + "Face" + (index + 1) + '" >' + "Face " + (index + 1) + '</label><div id="subWrap' + (index + 1) + '" class="hideSubWrap"><label for="subColor">Couleur</label><input name="subColor" id="subColor' + (index + 1) + '" class="subInput" type="color" ><label for="subDescription">Description</label><input name="subDescription" id="subDescription' + (index + 1) + '" class="subInput" type="text"><label for="subValue">Valeur</label><input name="subValue" id="subValue' + (index + 1) + '" class="subInput" type="text"><label for="subImage">Image URL</label><input name="subImage" id="subImage' + (index + 1) + '" class="subImage" type="text"></input></div></div><br>'
                    );
                });
            }

        for (let i = 0; i < (document.getElementById("faceArray").childElementCount / 2); i++) {
            if (document.getElementById("Face" + (i + 1)).checked) {
                document.getElementById("subWrap" + (i + 1)).className = "showSubWrap"
                newDice.Face[i].Couleur =  document.getElementById("subColor" + (i + 1)).value
                newDice.Face[i].Description =  document.getElementById("subDescription" + (i + 1)).value
                newDice.Face[i].Valeur =  document.getElementById("subValue" + (i + 1)).value
                newDice.Face[i].ImageURL =  document.getElementById("subImage" + (i + 1)).value
            }
            if (!(document.getElementById("Face" + (i + 1)).checked)) {
                document.getElementById("subWrap" + (i + 1)).className = "hideSubWrap"
            }
            console.log(newDice.Face);
        }

        document.getElementById("rightbtn2").onmousedown = function () {
            document.getElementById("creation").className = "fadeInBottom";
            document.getElementById("homePage").className = "hiddenPage";
            document.getElementById("arrowWrap").className = "hidden";
            document.getElementById("arrowWrapCreation").className = ""; 
        };  

        document.getElementById("arrowWrapCreation").onmousedown = function () {
            document.getElementById("homePage").className = "fadeInTop";
            document.getElementById("creation").className = "hiddenPage";
            document.getElementById("arrowWrap").className = "";
            document.getElementById("arrowWrapCreation").className = "hidden";
        };
    }
}, 100);