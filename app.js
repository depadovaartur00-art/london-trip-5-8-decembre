const hotel = "Z Hotel Holborn, 36-37 High Holborn, London";

const days = [
  {
    title: "Covent Garden",
    date: "Sabato 5 dicembre",
    stops: [
      { time:"12:15", title:"Gatwick → Z Hotel Holborn", text:"Treno verso Farringdon, poi Elizabeth line o metro fino a Holborn.", meta:["60–90 min","Treno + metro"], route:["Gatwick Airport","Z Hotel Holborn"], walk:"" },
      { time:"14:00", title:"Check-in e pranzo veloce", text:"Lasciate i bagagli e mangiate nei dintorni di Holborn.", meta:["Lasciate i bagagli"], route:["Z Hotel Holborn","Covent Garden"], walk:"a piedi · 10–15 min" },
      { time:"14:30", title:"Covent Garden", text:"Piazza, mercato coperto e le stradine intorno.", meta:["1 ora"], route:["Z Hotel Holborn","Covent Garden"], walk:"a piedi · 10–15 min" },
      { time:"15:00", title:"Scuffers — 52 Brewer Street", text:"Felpa e cappellino qui. Poi dedicate tempo a Soho e alle vie laterali.", meta:["Fino a 90 min"], route:["Covent Garden","52 Brewer Street, Soho, London"], walk:"a piedi · 15–20 min" },
      { time:"16:30", title:"Oxford Street", text:"Da Oxford Circus lungo una parte delle vetrine e delle luminarie.", meta:["Noi non facciamo tutta la strada"], route:["52 Brewer Street, Soho, London","Oxford Circus, London"], walk:"a piedi · 10–15 min" },
      { time:"18:00", title:"Cena + rientro", text:"Cena tra Soho e Covent Garden, poi tornate a Holborn a piedi.", meta:["Rientro 15–25 min"], route:["Oxford Circus, London","Z Hotel Holborn"], walk:"a piedi · 15–25 min" }
    ]
  },
  {
    title:"South Bank",
    date:"Domenica 6 dicembre",
    stops:[
      { time:"09:30", title:"Partenza dall'hotel", text:"Direzione Trafalgar Square passando da Covent Garden.", meta:["25–30 min"], route:["Z Hotel Holborn","Trafalgar Square, London"], walk:"a piedi · 25–30 min" },
      { time:"10:00", title:"National Gallery", text:"Due ore concentrate sulle sale che vi interessano.", meta:["Ingresso gratuito","Prenotare slot"], route:["Z Hotel Holborn","The National Gallery, London"], walk:"a piedi · 25–30 min" },
      { time:"12:00", title:"Pausa pranzo a Soho", text:"Riposo e pranzo nelle strade tra Trafalgar Square e Soho.", meta:["Fino alle 13:00"], route:["The National Gallery, London","Soho, London"], walk:"a piedi · 10 min" },
      { time:"13:00", title:"British Museum", text:"Rosetta, sale d'Egitto e Grecia.", meta:["2 ore","Ingresso gratuito"], route:["Soho, London","The British Museum, London"], walk:"a piedi · 20 min" },
      { time:"15:20", title:"Verso Tate Modern", text:"Passate da Fleet Street, St Paul's e Millennium Bridge.", meta:["50 min a piedi","oppure metro"], route:["The British Museum, London","Tate Modern, London"], walk:"a piedi · 50 min" },
      { time:"16:10", title:"Tate Modern", text:"Collezione permanente e punto panoramico, se aperto.", meta:["1 ora 30","Chiude alle 18:00"], route:["The British Museum, London","Tate Modern, London"], walk:"da South Bank" },
      { time:"17:40", title:"Tower Bridge", text:"Passeggiata lungo il Tamigi e foto con le luci.", meta:["35 min da Tate","30 min sul luogo"], route:["Tate Modern, London","Tower Bridge, London"], walk:"a piedi · 35 min" },
      { time:"18:30", title:"Rientro in hotel", text:"Metro da Tower Hill a Holborn, senza passare da Canary Wharf.", meta:["25 min","Arrivo 19:00–19:15"], route:["Tower Bridge, London","Z Hotel Holborn"], walk:"Metro"}
    ]
  },
  {
    title:"Musei & Westminster",
    date:"Lunedì 7 dicembre",
    stops:[
      { time:"08:15", title:"Check-out e deposito", text:"Lasciate i bagagli alla reception, tenete solo lo zaino.", meta:["Check-out alle 8:30"], route:["Z Hotel Holborn","Z Hotel Holborn"] },
      { time:"08:30", title:"Verso St Paul's", text:"Partenza leggera verso la City.", meta:["Metro"], route:["Z Hotel Holborn","St Paul's Cathedral, London"], walk:"Metro" },
      { time:"08:45", title:"St Paul's Cathedral", text:"Visita prenotata a pagamento. Apertura alle 8:30.", meta:["1 ora 35","Prenotare"], route:["Z Hotel Holborn","St Paul's Cathedral, London"], walk:"Metro" },
      { time:"10:20", title:"Science Museum", text:"Spazio, tecnologia e innovazione. Dalla cattedrale circa 30 minuti in metro.", meta:["2 ore","Prenotare"], route:["St Paul's Cathedral, London","Science Museum, London"], walk:"Metro · 30 min" },
      { time:"12:30", title:"Five Guys", text:"Pranzo rapido in South Kensington, a 5 minuti dal museo.", meta:["Alternativi nella zona"], route:["Science Museum, London","Five Guys, South Kensington, London"], walk:"a piedi · 5 min" },
      { time:"13:40", title:"Natural History Museum", text:"Hintze Hall e dinosauri.", meta:["2 ore","Prenotare"], route:["Five Guys, South Kensington, London","Natural History Museum, London"], walk:"a piedi · pochi minuti" },
      { time:"16:00", title:"Buckingham Palace", text:"Metro, facciata, cancelli e foto.", meta:["30 min sul posto"], route:["Natural History Museum, London","Buckingham Palace, London"], walk:"Metro · 20 min" },
      { time:"16:40", title:"Big Ben e Westminster", text:"Video dall'esterno e passeggiata nel parco.", meta:["Dall'esterno"], route:["Buckingham Palace, London","Big Ben, London"], walk:"a piedi · 35–40 min" },
      { time:"17:15", title:"Ritiro bagagli", text:"Tornate a Holborn, ritirate le valigie e proseguite verso Teddington.", meta:["60–90 min"], route:["Big Ben, London","Z Hotel Holborn"], walk:"Metro" },
      { time:"17:30", title:"Partenza per Teddington", text:"Metro e treno. Arrivo dagli zii verso le 18:30–19:00.", meta:["60–90 min"], route:["Z Hotel Holborn","Teddington Railway Station"], walk:"Metro + treno" }
    ]
  },
  {
    title:"Rientro",
    date:"Martedì 8 dicembre",
    stops:[
      { time:"03:00", title:"Partenza da Teddington", text:"Taxi prenotato in anticipo.", meta:["03:00–03:30"], route:["Teddington","Gatwick Airport"], walk:"Taxi" },
      { time:"04:15", title:"Arrivo a Gatwick", text:"Adattare all'orario del terminal.", meta:["04:15–04:45"], route:["Teddington","Gatwick Airport"], walk:"Taxi" },
      { time:"06:50", title:"Decollo", text:"I treni sono troppo rischiosi a quest'ora: taxi già prenotato.", meta:["Porta al terminal","Check-in prima"], route:["Gatwick Airport","Gatwick Airport"], walk:"In aeroporto" }
    ]
  }
];

const food = [
  { name:"Dishoom Covent Garden", area:"Covent Garden", type:"dinner", category:"Cena", desc:"India contemporanea in una sala splendida. Conviene prenotare.", query:"Dishoom Covent Garden" },
  { name:"The Barbary", area:"Neal's Yard / Covent Garden", type:"dinner", category:"Cena", desc:"Piatti del Mediterraneo e del Nord Africa; ambiente piccolo e scenografico.", query:"The Barbary London" },
  { name:"Flat Iron", area:"Soho / Covent Garden", type:"dinner", category:"Cena", desc:"Buona carne, servizio semplice e prezzo contenuto. Nessuna prenotazione.", query:"Flat Iron Soho" },
  { name:"Speedy's Cafe", area:"Tottenham Court Road", type:"lunch", category:"Pranzo", desc:"Caffè britannico vicino al British Museum, veloce e informale.", query:"Speedy's Cafe London" },
  { name:"The Breakfast Club", area:"Soho", type:"lunch", category:"Pranzo veloce", desc:"Burger, brunch e comfort food. Ottimo se avete poco tempo.", query:"The Breakfast Club Soho" },
  { name:"Pret A Manger", area:"Holborn / ovunque", type:"quick", category:"Veloce", desc:"Sandwich, insalate e panini: molto comodo per il check-in e i ritmi stretti.", query:"Pret A Manger Holborn" },
  { name:"Five Guys", area:"South Kensington", type:"lunch", category:"Pranzo", desc:"Previsto nell'itinerario, 5 minuti dal Science Museum.", query:"Five Guys South Kensington" },
  { name:"Borough Market", area:"South Bank", type:"lunch", category:"Merenda / pranzo", desc:"Ideale per un boccone rapido fra Tate Modern e Tower Bridge.", query:"Borough Market London" },
  { name:"The Grade", area:"Holborn", type:"dinner", category:"Cena", desc:"Pub britannico vicino alla base: comodo dopo il rientro serale.", query:"The Grade Holborn" }
];

const prep = [
  "Portare passaporto",
  "Adattatore britannico",
  "Imparare le foto da fare",
  "Prenotare National Gallery",
  "Prenotare British Museum",
  "Prenotare Science Museum",
  "Prenotare Natural History Museum",
  "Prenotare Tate Modern",
  "Prenotare St Paul's Cathedral",
  "Confermare il deposito bagagli",
  "Chiedere tap water nei locali",
  "Preparare carta contactless o Oyster",
  "Prenotare taxi Gatwick"
];

function mapsUrl(origin,destination,mode="walking") {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${mode}`;
}

function renderDay(index) {
  const day = days[index];
  document.getElementById("itinerary").innerHTML = `
    <div class="day-header"><h3>${day.title}</h3><p>${day.date}</p></div>
    <div class="timeline">
      ${day.stops.map((stop,i) => {
        const canMap = stop.route && stop.route[0] && stop.route[1];
        return `<article class="stop">
          <time class="stop-time">${stop.time}</time>
          <div class="stop-body">
            <h4>${stop.title}</h4>
            <p>${stop.text}</p>
            ${stop.walk ? `<div class="route-note">${stop.walk}</div>` : ""}
            ${stop.meta ? `<div class="stop-tags">${stop.meta.map(m=>`<span class="stop-tag">${m}</span>`).join("")}</div>` : ""}
            ${canMap ? `<a class="map-link" href="${mapsUrl(stop.route[0],stop.route[1], stop.walk?.includes("Metro") ? "transit" : stop.walk?.includes("Taxi") ? "driving" : "walking")}" target="_blank" rel="noopener">Apri tragitto <span>↗</span></a>` : ""}
          </div>
        </article>`;
      }).join("")}
    </div>`;
}

function renderFood(filter="all") {
  document.getElementById("foodGrid").innerHTML = food
    .filter(item => filter==="all" || item.type===filter)
    .map(item => `
      <article class="food-card">
        <div><span class="food-type">${item.category} · ${item.area}</span><h3>${item.name}</h3><p>${item.desc}</p></div>
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.query)}" target="_blank" rel="noopener" aria-label="Apri ${item.name} su Google Maps">↗</a>
      </article>`).join("");
}

function renderChecklist() {
  document.getElementById("checklist").innerHTML = prep.map((item,i)=>`
    <button class="check-item" data-check="${i}">
      <span class="check-box" aria-hidden="true"></span>
      <span class="check-text">${item}</span>
    </button>`).join("");
  const saved = JSON.parse(localStorage.getItem("london-checklist") || "[]");
  saved.forEach(i => document.querySelector(`[data-check="${i}"]`)?.classList.add("done"));
}

document.querySelectorAll(".day-tabs button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".day-tabs button").forEach(b=>{b.classList.remove("active");b.setAttribute("aria-selected","false")});
    button.classList.add("active");
    button.setAttribute("aria-selected","true");
    renderDay(Number(button.dataset.day));
  });
});

document.querySelectorAll(".food-filter button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".food-filter button").forEach(b=>b.classList.remove("active"));
    button.classList.add("active");
    renderFood(button.dataset.filter);
  });
});

document.getElementById("checklist").addEventListener("click", event => {
  const item = event.target.closest(".check-item");
  if (!item) return;
  item.classList.toggle("done");
  const done = [...document.querySelectorAll(".check-item.done")].map(el=>Number(el.dataset.check));
  localStorage.setItem("london-checklist",JSON.stringify(done));
});

const menuButton=document.getElementById("menuButton");
const navSheet=document.getElementById("navSheet");
menuButton.addEventListener("click",()=>{
  const open=navSheet.classList.toggle("open");
  menuButton.classList.toggle("open",open);
  menuButton.setAttribute("aria-expanded",String(open));
});
navSheet.querySelectorAll("[data-close]").forEach(link=>link.addEventListener("click",()=>{
  navSheet.classList.remove("open");menuButton.classList.remove("open");menuButton.setAttribute("aria-expanded","false");
}));

renderDay(0);
renderFood();
renderChecklist();
