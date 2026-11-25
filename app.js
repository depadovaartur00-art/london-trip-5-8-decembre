const days = [
  { title:"West End",date:"Sabato 5 dicembre",stops:[
    {time:"12:15",title:"Gatwick → Z Hotel Holborn",text:"Uscite dall’aeroporto e prendete un treno verso Farringdon. Da lì proseguite con Elizabeth line o metro fino a Holborn, lasciando margine per ritardi e bagagli.",meta:["60–90 min","Treno + metro"],route:["Gatwick Airport","Z Hotel Holborn"],walk:"Metro + treno"},
    {time:"14:00",title:"Check-in e pranzo veloce",text:"Lasciate i bagagli alla reception e mangiate nei dintorni senza perdere tempo: Holborn e Kingsway sono comode per ripartire subito.",meta:["Lasciate i bagagli"],route:["Z Hotel Holborn","Holborn, London"],walk:"A piedi nei dintorni"},
    {time:"14:30",title:"Covent Garden",text:"Piazza, mercato coperto, Neal’s Yard e le strade laterali. Questo è il momento migliore per entrare nello spirito del viaggio e fare le prime foto.",meta:["Circa 1 ora"],route:["Z Hotel Holborn","Covent Garden"],walk:"A piedi · 10–15 min"},
    {time:"15:00",title:"Scuffers — 52 Brewer Street",text:"Entrate nel negozio per felpa e cappellino, poi dedicate il resto del tempo alle vie di Soho senza forzare il percorso.",meta:["Fino a 90 min"],route:["Covent Garden","52 Brewer Street, Soho, London"],walk:"A piedi · 15–20 min"},
    {time:"16:30",title:"Oxford Street",text:"Passate da Oxford Circus e percorrete solo il tratto che vi interessa tra vetrine e luminarie natalizie.",meta:["Non serve farla tutta"],route:["52 Brewer Street, Soho, London","Oxford Circus, London"],walk:"A piedi · 10–15 min"},
    {time:"18:00",title:"Cena + rientro",text:"Scegliete una cena tra Soho e Covent Garden. Tornate a Holborn a piedi, tenendo la camminata come momento finale della serata.",meta:["Rientro 15–25 min"],route:["Oxford Circus, London","Z Hotel Holborn"],walk:"A piedi · 15–25 min"}
  ]},
  { title:"South Bank",date:"Domenica 6 dicembre",stops:[
    {time:"09:30",title:"Partenza dall’hotel",text:"Scendete verso Trafalgar Square passando da Covent Garden. Arrivate all’apertura della National Gallery.",meta:["25–30 min"],route:["Z Hotel Holborn","Trafalgar Square, London"],walk:"A piedi · 25–30 min"},
    {time:"10:00",title:"National Gallery",text:"Due ore dedicate alle sale che vi interessano davvero. Meglio scegliere poche opere che inseguire tutto il museo.",meta:["2 ore"],route:["Z Hotel Holborn","The National Gallery, London"],walk:"A piedi · 25–30 min"},
    {time:"12:00",title:"Pausa pranzo a Soho",text:"Raggiungete Soho a piedi da Trafalgar Square. È la zona più comoda per trovare rapidamente un posto senza cambiare direzione.",meta:["Fino alle 13:00"],route:["The National Gallery, London","Soho, London"],walk:"A piedi · 10 min"},
    {time:"13:00",title:"British Museum",text:"Concentratevi sulla Stele di Rosetta e sulle sale principali di Egitto e Grecia, evitando di restare bloccati in gallerie laterali.",meta:["2 ore"],route:["Soho, London","The British Museum, London"],walk:"A piedi · 20 min"},
    {time:"15:20",title:"Verso Tate Modern",text:"Il tragitto è parte della visita: passate da Fleet Street, St Paul’s e attraversate il Millennium Bridge.",meta:["50 min a piedi","Alternative metro"],route:["The British Museum, London","Tate Modern, London"],walk:"A piedi · 50 min"},
    {time:"16:10",title:"Tate Modern",text:"Un’ora e mezza bastano per la collezione permanente e, se aperto, il punto panoramico prima della chiusura.",meta:["Fino alle 18:00"],route:["The British Museum, London","Tate Modern, London"],walk:"South Bank"},
    {time:"17:40",title:"Tower Bridge",text:"Percorrete il Tamigi verso est. Questo è il momento perfetto per vedere ponti, facciate illuminate e fare le foto serali.",meta:["35 min","30 min sul posto"],route:["Tate Modern, London","Tower Bridge, London"],walk:"A piedi · 35 min"},
    {time:"18:30",title:"Rientro in hotel",text:"Da Tower Hill prendete la metro verso Holborn. L’itinerario evita Canary Wharf e vi porta alla base in circa 25 minuti.",meta:["Arrivo 19:00–19:15"],route:["Tower Bridge, London","Z Hotel Holborn"],walk:"Metro"}
  ]},
  { title:"Musei & Westminster",date:"Lunedì 7 dicembre",stops:[
    {time:"08:15",title:"Check-out e deposito",text:"Consegnate le valigie alla reception e tenete solo uno zaino con caricatore, power bank, documenti e cambio.",meta:["Check-out alle 8:30"],route:["Z Hotel Holborn","Z Hotel Holborn"],walk:"Zaino leggero"},
    {time:"08:30",title:"St Paul's Cathedral",text:"Uscita verso la City e visita alla cattedrale. L’ingresso è a pagamento e conviene arrivare puntuali.",meta:["Apertura alle 8:30"],route:["Z Hotel Holborn","St Paul's Cathedral, London"],walk:"Metro"},
    {time:"10:20",title:"Science Museum",text:"Dalla cattedrale raggiungete South Kensington in circa 30 minuti. Dentro puntate su tecnologia, spazio e innovazione.",meta:["2 ore"],route:["St Paul's Cathedral, London","Science Museum, London"],walk:"Metro · 30 min"},
    {time:"12:30",title:"Five Guys",text:"Pranzo rapido a cinque minuti dal Science Museum. È la scelta più veloce, ma nella zona ci sono anche alternative.",meta:["Pranzo veloce"],route:["Science Museum, London","Five Guys, South Kensington, London"],walk:"A piedi · 5 min"},
    {time:"13:40",title:"Natural History Museum",text:"Rimanete nella zona e visitate Hintze Hall e i dinosauri senza cercare di vedere ogni sala.",meta:["2 ore"],route:["Five Guys, South Kensington, London","Natural History Museum, London"],walk:"A piedi · pochi minuti"},
    {time:"16:00",title:"Buckingham Palace",text:"In metro verso il palazzo, quindi mezz’ora tra facciata, cancelli e foto prima di proseguire verso Westminster.",meta:["30 min"],route:["Natural History Museum, London","Buckingham Palace, London"],walk:"Metro · 20 min"},
    {time:"16:40",title:"Big Ben e Westminster",text:"Passate da St James’s Park e fermatevi fuori per le foto e il video al Big Ben.",meta:["Dall’esterno"],route:["Buckingham Palace, London","Big Ben, London"],walk:"A piedi · 35–40 min"},
    {time:"17:15",title:"Ritiro bagagli",text:"Tornate brevemente a Holborn, ritirate i bagagli e preparatevi per il tragitto verso Teddington.",meta:["60–90 min"],route:["Big Ben, London","Z Hotel Holborn"],walk:"Metro"},
    {time:"17:30",title:"Partenza per Teddington",text:"Metro e treno, con arrivo dagli zii indicativamente tra le 18:30 e le 19:00.",meta:["Serata tranquilla"],route:["Z Hotel Holborn","Teddington Railway Station"],walk:"Metro + treno"}
  ]},
  {title:"Rientro",date:"Martedì 8 dicembre",stops:[
    {time:"03:00",title:"Partenza da Teddington",text:"Raggiungete l’aeroporto con il taxi prenotato in anticipo. Lasciate margine reale per traffico e terminal.",meta:["03:00–03:30"],route:["Teddington","Gatwick Airport"],walk:"Taxi"},
    {time:"04:15",title:"Arrivo a Gatwick",text:"Adattate l’orario esatto al terminal. Prima del gate controllate bagagli, passaporti e Gate Changes.",meta:["04:15–04:45"],route:["Teddington","Gatwick Airport"],walk:"In aeroporto"},
    {time:"06:50",title:"Decollo",text:"Un orario così presto rende il taxi molto più affidabile dei treni. Arrivate con documenti già separati.",meta:["Check-in e porta"],route:["Gatwick Airport","Gatwick Airport"],walk:"In aeroporto"}
  ]}
];

const food = [
  {name:"Dishoom Covent Garden",area:"Covent Garden",type:"dinner",category:"Cena",time:"18:00+",price:"££",duration:"60–75 min",desc:"India contemporanea in una sala scenografica e molto londinese. Ottimo per una prima cena serale nel centro.",query:"Dishoom Covent Garden"},
  {name:"The Barbary",area:"Neal’s Yard",type:"dinner",category:"Cena",time:"18:30+",price:"£££",duration:"75–90 min",desc:"Cucina del Mediterraneo e Nord Africa in un ambiente piccolo e intenso. Meglio evitare se cercate velocità.",query:"The Barbary London"},
  {name:"Flat Iron",area:"Soho / Covent Garden",type:"dinner",category:"Cena",time:"18:00+",price:"£",duration:"45–60 min",desc:"Carne semplice, porzioni chiare e coda gestibile. Una scelta pratica quando siete stanchi ma volete sedervi.",query:"Flat Iron Soho"},
  {name:"Speedy’s Cafe",area:"Tottenham Court Road",type:"lunch",category:"Pranzo",time:"12:30–13:00",price:"£",duration:"30–45 min",desc:"Caffè britannico vicino al British Museum: veloce, informale e utile prima della salita a Nord.",query:"Speedy's Cafe London"},
  {name:"The Breakfast Club",area:"Soho",type:"lunch",category:"Pranzo veloce",time:"12:00–13:00",price:"££",duration:"45–60 min",desc:"Brunch, burger e comfort food. Ideale se sabato o domenica preferite una pausa rilassata.",query:"The Breakfast Club Soho"},
  {name:"Pret A Manger",area:"Holborn / ovunque",type:"quick",category:"Veloce",time:"14:00",price:"£",duration:"15–25 min",desc:"Sandwich, insalate e snack già pronti. Perfetto subito dopo il bagaglio senza dover cercare un tavolo.",query:"Pret A Manger Holborn"},
  {name:"Five Guys",area:"South Kensington",type:"lunch",category:"Pranzo",time:"12:30",price:"£",duration:"30–45 min",desc:"Previsto nell’itinerario e a cinque minuti dal Science Museum. Nessuna sorpresa, solo velocità.",query:"Five Guys South Kensington"},
  {name:"Borough Market",area:"South Bank",type:"lunch",category:"Merenda / pranzo",time:"15:30–17:30",price:"£",duration:"30–60 min",desc:"La soluzione migliore per un boccone tra passeggiata sul Tamigi, Tate Modern e Tower Bridge.",query:"Borough Market London"},
  {name:"The Grade",area:"Holborn",type:"dinner",category:"Cena",time:"18:30+",price:"££",duration:"60–90 min",desc:"Un pub britannico vicino alla base: comodo dopo il rientro serale e meno dispersivo di tornare in centro.",query:"The Grade Holborn"}
];

const transport = [
  {code:"PAY",title:"Carta o Oyster",text:"Usate la stessa carta contactless per voi due o una Oyster ciascuno. Su bus e metro basta toccare all’ingresso e all’uscita; tenete sempre la stessa carta per l’intero viaggio.",link:"https://tfl.gov.uk/fares/how-to-pay-and-where-to-buy-tickets-and-oyster"},
  {code:"EL",title:"Gatwick → Holborn",text:"Dall’aeroporto prendete un treno fino a Farringdon oppure una combinazione diretta verso il centro, poi passate a Elizabeth line o metro. Prevedete 60–90 minuti inclusa l’uscita dall’aeroporto.",link:"https://www.google.com/maps/dir/?api=1&origin=Gatwick%20Airport&destination=Z%20Hotel%20Holborn&travelmode=transit"},
  {code:"TH",title:"Tower Hill → Holborn",text:"Domenica sera rientrate da Tower Hill senza passare da Canary Wharf. Controllate Circle o District line sullo stato reale della sera.",link:"https://tfl.gov.uk/"},
  {code:"SK",title:"South Kensington",text:"Science Museum e Natural History Museum sono vicini alla stessa fermata. Uscite verso Exhibition Road per evitare giri inutili.",link:"https://www.google.com/maps/dir/?api=1&origin=South%20Kensington%20Station&destination=Science%20Museum%20London&travelmode=walking"},
  {code:"BQ",title:"Buckingham → Big Ben",text:"Dal palazzo passate da St James’s Park verso Westminster. È una camminata piacevole di circa 35–40 minuti senza metro.",link:"https://www.google.com/maps/dir/?api=1&origin=Buckingham%20Palace&destination=Big%20Ben%20London&travelmode=walking"},
  {code:"TX",title:"Teddington → Gatwick",text:"Alle 03:00 i treni non sono affidabili. Il taxi prenotato resta la scelta più sicura; chiedete conferma al conducente la sera prima.",link:"https://www.google.com/maps/dir/?api=1&origin=Teddington&destination=Gatwick%20Airport&travelmode=driving"}
];

function mapsUrl(origin,destination,mode="walking") {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${mode}`;
}

function renderDay(index) {
  const day=days[index];
  const next=day.stops[0];
  const mode=next.walk?.includes("Taxi")?"driving":next.walk?.match(/Metro|treno/i)?"transit":"walking";
  document.getElementById("nextCard").innerHTML=`
    <div class="next-time">${next.time}</div>
    <div><small>Prossima tappa</small><strong>${next.title}</strong></div>
    ${next.route?.[1]?`<a href="${mapsUrl(next.route[0],next.route[1],mode)}" target="_blank" rel="noopener" aria-label="Portami alla prossima tappa">↗</a>`:"<span></span>"}`;
  document.getElementById("routeMap").innerHTML=day.stops.map(stop=>`
    <div class="route-point"><i class="route-dot"></i><span>${stop.title.split(" ").slice(0,2).join("<br>")}</span></div>`).join("");
  document.getElementById("itinerary").innerHTML=`
    <div class="day-header"><h3>${day.title}</h3><p>${day.date}</p></div>
    <div class="timeline">${day.stops.map(stop=>{
      const mode=stop.walk?.includes("Taxi")?"driving":stop.walk?.match(/Metro|treno/i)?"transit":"walking";
      return `<article class="stop">
        <time class="stop-time">${stop.time}</time>
        <div class="stop-body">
          <h4>${stop.title}</h4><p>${stop.text}</p>
          ${stop.walk?`<div class="route-note">${stop.walk}</div>`:""}
          ${stop.meta?`<div class="stop-tags">${stop.meta.map(m=>`<span class="stop-tag">${m}</span>`).join("")}</div>`:""}
          ${stop.route?.[1]?`<a class="map-link" href="${mapsUrl(stop.route[0],stop.route[1],mode)}" target="_blank" rel="noopener">Apri tragitto <span>↗</span></a>`:""}
        </div>
      </article>`;
    }).join("")}</div>`;
}

function renderFood(filter="all") {
  document.getElementById("foodGrid").innerHTML=food.filter(item=>filter==="all"||item.type===filter).map(item=>`
    <article class="food-card">
      <div><span class="food-type">${item.category} · ${item.area}</span><h3>${item.name}</h3><p>${item.desc}</p>
      <div class="food-meta"><span>${item.time}</span><span>${item.duration}</span><span>${item.price}</span></div></div>
      <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.query)}" target="_blank" rel="noopener" aria-label="Apri ${item.name} su Google Maps">↗</a>
    </article>`).join("");
}

function renderTransport() {
  document.getElementById("transportGrid").innerHTML=transport.map(item=>`
    <article class="transport-card"><strong>${item.code}</strong><div><h3>${item.title}</h3><p>${item.text}</p><a href="${item.link}" target="_blank" rel="noopener">Apri risorsa o mappa ↗</a></div></article>`).join("");
}

function navigate(route) {
  const valid=["itinerario","ristoranti","trasporti","diario"];
  if(!valid.includes(route)) route="itinerario";
  document.querySelectorAll(".page").forEach(page=>page.classList.toggle("active",page.dataset.page===route));
  history.replaceState(null,"",`#${route}`);
  window.scrollTo({top:0,behavior:"smooth"});
  navSheet.classList.remove("open");menuButton.classList.remove("open");body.classList.remove("no-scroll");
  menuButton.setAttribute("aria-expanded","false");
}

const body=document.body;
const menuButton=document.getElementById("menuButton");
const navSheet=document.getElementById("navSheet");
menuButton.addEventListener("click",()=>{
  const open=navSheet.classList.toggle("open");
  menuButton.classList.toggle("open",open);body.classList.toggle("no-scroll",open);
  menuButton.setAttribute("aria-expanded",String(open));
});
document.querySelectorAll("[data-route]").forEach(link=>{
  link.addEventListener("click",event=>{event.preventDefault();navigate(link.dataset.route);});
});

document.querySelectorAll(".day-tabs button").forEach(button=>{
  button.addEventListener("click",()=>{
    document.querySelectorAll(".day-tabs button").forEach(b=>{b.classList.remove("active");b.setAttribute("aria-selected","false");});
    button.classList.add("active");button.setAttribute("aria-selected","true");renderDay(Number(button.dataset.day));
  });
});
document.querySelectorAll(".food-filter button").forEach(button=>{
  button.addEventListener("click",()=>{
    document.querySelectorAll(".food-filter button").forEach(b=>b.classList.remove("active"));
    button.classList.add("active");renderFood(button.dataset.filter);
  });
});

function diaryApp() {
  const root=document.getElementById("diaryApp");
  const config=JSON.parse(localStorage.getItem("london-supabase-config")||"null");
  const localKey="london-private-diary";
  const localEntries=JSON.parse(localStorage.getItem(localKey)||"[]");
  root.innerHTML=`
    <div class="diary-toolbar"><strong>${config?"Diario sincronizzato":"Diario locale"}</strong><button id="diarySetup">${config?"Impostazioni":"Configura sincronizzazione"}</button></div>
    <form class="diary-form" id="diaryForm">
      <input name="title" maxlength="80" placeholder="Titolo, luogo o momento..." required>
      <textarea name="body" placeholder="Scrivi qui ciò che vorresti ricordare..." required></textarea>
      <button type="submit">Salva nella mia pagina</button>
    </form>
    <div id="diaryEntries"></div>
    <div class="diary-status" id="diaryStatus"></div>`;

  const renderEntries=(entries)=>{
    const el=document.getElementById("diaryEntries");
    el.innerHTML=entries.length?entries.map(entry=>`
      <article class="diary-entry"><time>${new Date(entry.created_at||entry.created).toLocaleString("it-IT")}</time><h3>${escapeHtml(entry.title)}</h3><p>${escapeHtml(entry.body)}</p></article>`).join(""):`<p>Nessuna voce ancora. Questo spazio rimane vuoto finché non salvi qualcosa.</p>`;
  };
  renderEntries(localEntries);

  document.getElementById("diaryForm").addEventListener("submit",async event=>{
    event.preventEvent?.();
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const entry={title:data.get("title").trim(),body:data.get("body").trim(),created:new Date().toISOString()};
    if(config&&window.supabase?.createClient){
      const client=window.supabase.createClient(config.url,config.key);
      const {data:{session}}=await client.auth.getSession();
      if(session){
        await client.from("diary_entries").insert({title:entry.title,body:entry.body});
        loadRemote(client);event.currentTarget.reset();return;
      }
    }
    localEntries.unshift(entry);localStorage.setItem(localKey,JSON.stringify(localEntries));renderEntries(localEntries);event.currentTarget.reset();
  });

  async function loadRemote(client) {
    const {data,error}=await client.from("diary_entries").select("title,body,created_at").order("created_at",{ascending:false});
    if(!error) renderEntries(data||[]);
  }

  async function setup() {
    const url=prompt("URL Supabase (da Project Settings > API):",config?.url||"");
    if(!url) return;
    const key=prompt("Chiave pubblica anon/key Supabase:",config?.key||"");
    if(!key) return;
    const cfg={url:key?url.trim():url,key:key.trim()};
    localStorage.setItem("london-supabase-config",JSON.stringify(cfg));
    const client=window.supabase.createClient(cfg.url,cfg.key);
    const email=prompt("Email personale del tuo diario:");
    if(email){
      await client.auth.signInWithOtp({email:email.trim(),options:{emailRedirectTo:location.href}});
      alert("Controlla la tua email e apri il link di accesso.");
    }
    location.reload();
  }
  document.getElementById("diarySetup").addEventListener("click",setup);

  const status=document.getElementById("diaryStatus");
  if(config&&window.supabase?.createClient){
    const client=window.supabase.createClient(config.url,config.key);
    client.auth.getSession().then(({data:{session}})=>{
      if(session){status.innerHTML=`<strong>Accesso attivo</strong><br>Le voci vengono salvate nel tuo account privato.<br><button id="diaryLogout">Esci</button>`;document.getElementById("diaryLogout").onclick=async()=>{await client.auth.signOut();location.reload();};loadRemote(client);}
      else{status.innerHTML=`<strong>Configurazione pronta</strong><br>Usa “Impostazioni” per accedere con la tua email personale.<br><button id="diaryLogin">Accedi</button>`;document.getElementById("diaryLogin").onclick=setup;}
    });
  }else{
    status.innerHTML=`<strong>Modalità locale</strong><br>Le note restano su questo telefono finché il browser non cancella i dati. Per sincronizzare davvero due telefoni, collega un progetto Supabase.<br><button id="diaryConfigure">Configura Supabase</button><p><code>Tabella diary_entries: id uuid, user_id uuid, title text, body text, created_at timestamptz. Attiva RLS: ogni utente può leggere/scrivere solo <strong>auth.uid() = user_id</strong>.</code></p>`;
    document.getElementById("diaryConfigure").onclick=setup;
  }
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

renderDay(0);renderFood();renderTransport();diaryApp();
navigate(location.hash.slice(1)||"itinerario");
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
