let righe = 10;
let colonne = 10;
let numeriGenerati = [];

function DisegnaTabella() {

    let div1 = document.getElementById('div1');
    let tabella = document.createElement("table");

    var i = 1;
    for (var r = 0; r < righe; r++) {
        let row = document.createElement("tr");
        for (var c = 0; c < colonne; c++, i++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(i);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tabella.appendChild(row);
    }

    div1.appendChild(tabella);
}

function estraiNumero() {
    if (numeriGenerati.length >= righe * colonne) {
        alert("Hai estratto tutti i numeri possibili!");
        return;
    }
    while (true) {
        var num = Math.floor(Math.random() * (righe * colonne)) + 1;
        if (!numeriGenerati.includes(num)) {
            numeriGenerati.push(num);

            var table = document.getElementsByTagName('table')[0];
            var cells = table.getElementsByTagName('td');

            for (var i = 0; i < cells.length; i++) {
                if (parseInt(cells[i].innerText) === num) {
                    cells[i].style.backgroundColor = 'yellow';
                    break;
                }
            }

            break;
        }
    }
}

DisegnaTabella();
