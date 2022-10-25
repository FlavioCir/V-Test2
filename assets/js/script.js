function compra() {
    let budget = 1000;
    let compere = 0;

    while (budget > 0) {
        let prezzi = Math.floor(Math.random()*100);

        if (prezzi <= budget) {
            compere += 1;
            budget -= prezzi;

            document.getElementById('budget').innerHTML += `<p> Ammontare della spesa: € ` + prezzi + `<br> Nuovo budget aggiornato: € ` + budget + `</p>`;
        }
        if (budget < 200) {
            document.getElementById('secondoMessaggio').innerHTML = `Hai meno di 200€. Ora basta stai spendendo troppo.`;
            break;
        }
    }
    
    document.getElementById('primoMessaggio').innerHTML += `<p> Hai acquistato: ` + compere + ` oggetti </p>`;
}

