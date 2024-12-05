// Stranka na ktere se zobrazuje podrobna predpoved pro den, na ktery se kliklo na index.html
// z objektu window ->location zjistim hash: "#pondeli" a oriznu z nej # -> zbyde "pondeli", to se ulozi do promenne weatherId
const weatherId = window.location.hash.slice(1);

// v poli predpoved si najdu prvek, ktery ma id odpovidajici "pondeli"
const weatherData = predpoved.find((item) => item.id === weatherId);

// vyberu si ze stranky element main, do ktereho budu vypisovat
const mainEl = document.querySelector('main');

mainEl.innerHTML += `
  <article>
    <h2>${weatherData.den}</h2>
    <p>${weatherData.datum}</p>
    <p>${weatherData.popis_pocasi}</p>
    <p>Tlak: ${weatherData.tlak}</p>
    <p>Rychlost větru: ${weatherData.rychlost_vetru}</p>

    <h3>Teploty</h3>
    <div class="box-teploty-den"> 
        <div class="teplota">
            <p>ráno</p>
            <p>${weatherData.ranni_teplota}</p>
        </div>
        <div class="teplota">
            <p>den</p>
            <p>${weatherData.denni_teplota}</p>
        </div>
        <div class="teplota">
            <p>odpoledne</p>
            <p>${weatherData.odpoledni_teplota}</p>
        </div>
        <div class="teplota">
            <p>večer</p>
            <p>${weatherData.vecerni_teplota}</p>
        </div>
    </div>
    <a href="index.html">Zpět na týdenní předpověď</a>
  </article>
`;