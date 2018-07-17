var list = document.getElementById("listePlass");

function changeText2() {
    var brukerName = document.getElementById("brukerNavn").value;
    var brukerId = document.getElementById("brukerId").value;

    if(brukerName ==="" || brukerId ===""){
        alert("Mangler input, vennligst skriv inn relevant info!"); 
    }else{
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(brukerName + " " + " med id: " + brukerId));
    list.appendChild(entry); 
    

    }
}


