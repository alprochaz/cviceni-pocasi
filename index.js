// vyberu si div s tridou container, do ktereho budu vypisovat dny s predpovedi - je nastaven na grid, aby bylo hezci
const containerEl = document.querySelector('#container');

// v data.js je pole "predpoved" ktere projdeme a vypiseme postupne co potrebujeme -> vytvori se tedy 7 karticek(po, ut, st...ne)
predpoved.forEach((item) => {
  containerEl.innerHTML += `
    <div class="article-card">
        <h2>${item.den}</h2>
        <p>${item.datum}</p>
        <p>Aktualne: ${item.stav_pocasi}</p>

        <div class="box-teploty-den"> 
            <div class="teplota">
                <p>ráno</p>
                <p>${item.ranni_teplota}</p>
            </div>
            <div class="teplota">
                <p>den</p>
                <p>${item.denni_teplota}</p>
            </div>
            <div class="teplota">
                <p>odpoledne</p>
                <p>${item.odpoledni_teplota}</p>
            </div>
            <div class="teplota">
                <p>večer</p>
                <p>${item.vecerni_teplota}</p>
            </div>
        </div>

      <a href="weather.html#${item.id}">Podrobnější předpověď</a>
    </div>
  `;
});

// odkaz na podrobnou stranku pocasi: weather.html je pomoci id # -> prida se za adresu wather.html#pondeli