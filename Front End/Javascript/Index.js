'use strict'
window.onload = showChars();

let doc = document.getElementById("listholder");


function human() {
    document.getElementById("dropdown1").value = "Human";
}
function high_elf() {
    document.getElementById("dropdown1").value = "High Elf";
}
function dwarf() {
    document.getElementById("dropdown1").value = "Dwarf";
}

function wizzard() {
    document.getElementById("dropdown2").value = "Wizzard";
}
function fighter() {
    document.getElementById("dropdown2").value = "Fighter";
}
function cleric() {
    document.getElementById("dropdown2").value = "Cleric";
}
// async function getRaces() {
//     const raceResponse = await fetch('http://localhost:8080/dndchars/getThingRace');
//     const raceJson = await raceResponse.json();
//     console.log(JSON.stringify(raceJson));
// }
// async function getClass() {
//     const classResponse = await fetch('http://localhost:8080/dndchars/getThingClass');
//     const classJson = await classResponse.json();
//     console.log(JSON.stringify(classJson));
// }
// async function getCharacter() {
//     const characterResponse = await fetch('http://localhost:8080/dndchars/getThingChar/');
//     const characterJson = await characterResponse.json();
//     console.log(characterJson);
//     console.log(JSON.stringify(characterJson));
// }
async function postCharacter() {
    const charName = document.getElementById("name");
    let charRace = document.getElementById("dropdown1");
    if (charRace.value == "Human") {
        charRace.value = 1;
    }
    else if (charRace.value == "High Elf") {
        charRace.value = 2;
    }
    else if (charRace.value == "Dwarf") {
        charRace.value = 3;
    } else {
        console.log("No valid Race input");
    }
    let charClass = document.getElementById("dropdown2");
    if (charClass.value == "Wizzard") {
        charClass.value = 1;
    }
    else if (charClass.value == "Fighter") {
        charClass.value = 2;
    }
    else if (charClass.value == "Cleric") {
        charClass.value = 3;
    } else {
        console.log("No valid class input");
    }
    console.log(charName.value + charRace.value + charClass.value);
    console.log('http://localhost:8080/dndchars/addThingChar/' + charName.value + "/" + charRace.value + "/" + charClass.value);
    const characterResponse = await fetch('http://localhost:8080/dndchars/addThingChar/' + charName.value + "/" + charRace.value + "/" + charClass.value, { method: 'POST' });
}

// async function deleteCharacter() {
//     charName = document.getElementById("name").value;
//     const characterResponse = await fetch('http://localhost:8080/dndchars/deleteThingChar/' + charName, { method: 'DELETE' });
// }
// async function updateCharacter() {
//     charName = document.getElementById("name").value;
//     const characterResponse = await fetch('http://localhost:8080/dndchars/deleteThingChar/' + charName, { method: 'PUT' });
// }
async function showChars() {
    if (document.getElementById("listholder").innerHTML == "") {
        console.log(" moving on ");
    }
    else{
        document.getElementById("listholder").innerHTML = "";
    }
    const characterResponse = await fetch('http://localhost:8080/dndchars/getThingChar/');
    const characterJson = await characterResponse.json();
    console.log(characterJson);

    for (let d of characterJson) {
        let st = document.createElement("div");
        st.className = "Char_List";
        let h = document.createElement("h4");
        let p = document.createElement("p");
        h.innerText = d.charName + "\n";
        p.innerText = "\n" + d.race.race + "\n \n" + d.class.class;

        let img = document.createElement("img");
        img.className = "classPics";

        st.append(h, img, p);
        doc.appendChild(st);
    }
}
async function delChar() {
    const charName = document.getElementById("name").value;
    console.log('http://localhost:8080/dndchars/deleteThingChar/' + charName)
    const characterResponse = await fetch('http://localhost:8080/dndchars/deleteThingChar/' + charName, { method: 'DELETE' });
}

async function updateChar() {
    const charNew = document.getElementById("charNew").value;
    const charOld = document.getElementById("charOld").value;
    console.log('http://localhost:8080/dndchars/updateThingChar/' + charNew + "/" + charOld)
    const characterResponse = await fetch('http://localhost:8080/dndchars/updateThingChar/' + charNew + "/" + charOld, { method: 'PUT' });
}