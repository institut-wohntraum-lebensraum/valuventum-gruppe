(function(){
  'use strict';
  if (document.getElementById('vv-budget-distribution')) return;

  const host = document.createElement('section');
  host.id = 'vv-budget-distribution';
  host.setAttribute('data-valuventum-budget','population-v3');
  const script = document.currentScript;
  if (script && script.parentNode) script.parentNode.insertBefore(host, script);
  else document.body.appendChild(host);

  const root = host.attachShadow ? host.attachShadow({mode:'open'}) : host;

  const regions = [
    {id:'asia', icon:'🌏', de:'Asien', en:'Asia', es:'Asia', pop:'4,86 Mrd.', share:58.59},
    {id:'africa', icon:'🌍', de:'Afrika', en:'Africa', es:'África', pop:'1,59 Mrd.', share:19.09},
    {id:'europe', icon:'🇪🇺', de:'Europa', en:'Europe', es:'Europa', pop:'0,74 Mrd.', share:8.96},
    {id:'northamerica', icon:'🌎', de:'Nordamerika', en:'North America', es:'Norteamérica', pop:'0,62 Mrd.', share:7.48},
    {id:'southamerica', icon:'🌎', de:'Südamerika', en:'South America', es:'Sudamérica', pop:'0,44 Mrd.', share:5.31},
    {id:'oceania', icon:'🦘', de:'Australien/Ozeanien', en:'Australia/Oceania', es:'Australia/Oceanía', pop:'0,05 Mrd.', share:0.57}
  ];

  const copy = {
    de:{
      eye:'MENSCHENZENTRIERTE MODELLVERTEILUNG',
      title:'Nicht jeder Kontinent gleich – jeder Mensch gleich gewichtet.',
      lead:'Der verbleibende Gemeinschaftsbetrag wird nicht mehr einfach durch sieben geteilt. Stattdessen erhält jeder bewohnte Kontinent genau den Anteil, der seinem Anteil an der Weltbevölkerung entspricht. So folgt die Verteilung den Menschen und nicht der Größe eines Kontinents.',
      modelFlow:'Modellfluss pro Jahr', basic:'Grundeinkommen pro Jahr', pool:'Gemeinschaftstopf', rest:'Verbleibend für Gemeinschaftsaufgaben',
      rateTitle:'Gemeinschaftsbeitrag selbst testen',
      rateLead:'Der Ausgangswert ist 10 %. Mit dem Schieberegler kann die Gruppe prüfen, wie sich ein höherer oder niedrigerer Prozentsatz auf Gemeinschaftstopf, Restbudget und Kontinentbudgets auswirkt.',
      rateLabel:'Gemeinschaftsbeitrag',
      rateHint:'Modellannahme: Der Prozentsatz wird auf die Rechengröße von 2,0 Billiarden Valu angewendet. 10 % ergeben 200 Billionen Valu.',
      taxIncome:'Einkommensteuer – Modellziel bei vollständiger Deckung', taxProduct:'Produkt-/Mehrwertsteuer – Modellziel bei vollständiger Deckung',
      distributionTitle:'Verteilung nach Bevölkerungsanteil',
      distributionLead:'Die Prozentanteile unten bilden die relative Verteilung der Weltbevölkerung im Jahr 2026 näherungsweise ab. Antarktika hat keine dauerhafte Bevölkerung und erhält deshalb keinen Bevölkerungsanteil. Für globale Aufgaben gibt es stattdessen einen separat einstellbaren Puffer.',
      pop:'Einwohner ca.', share:'Anteil Menschen', budget:'Jahresbudget',
      globalTasks:'❄️ Antarktika / globale Aufgaben', globalTasksPop:'keine dauerhafte Bevölkerung', globalTasksHint:'Separater Puffer für Forschung, globale Infrastruktur, Krisenhilfe und gemeinsame Aufgaben.',
      bufferTitle:'Globalen Puffer anpassen', bufferLead:'Dieser Anteil wird vor der Verteilung auf die bewohnten Kontinente abgezogen. Der Rest wird danach vollständig nach Bevölkerungsanteilen verteilt.', bufferLabel:'Globaler Puffer',
      perPerson:'Gemeinschaftsbudget pro Mensch/Jahr',
      categoryTitle:'Wofür das Budget eingesetzt werden kann',
      categoryLead:'Die folgenden Regler verteilen das verfügbare Gemeinschaftsbudget auf vier große Aufgabenfelder. Sie verändern nicht die Bevölkerungsanteile der Kontinente, sondern nur die Verwendung innerhalb der jeweiligen Budgets.',
      public:'Öffentliche Aufgaben / Steuerersatz', publicHint:'Infrastruktur, Verwaltung, Sicherheit, Feuerwehr, öffentlicher Verkehr und weitere gemeinsame Aufgaben.',
      agri:'Gesunde Landwirtschaft', agriHint:'Bodenaufbau, mikrobiologische Regeneration, schadstoffärmere Produktion, natürliches Saatgut sowie mechanische und solare Agrartechnik.',
      health:'Gesundheitssystem', healthHint:'Prävention, medizinische Versorgung, Pflege, Personal, Medikamente und notwendige Gesundheitsinfrastruktur.',
      education:'Bildung & Forschung', educationHint:'Kindergärten, Schulen, Ausbildung, Weiterbildung, Hochschulen, Forschung und frei zugängliches Wissen.',
      globalAllocated:'Global verplant', europeExample:'Davon in Europa', reserveLabel:'Verbleibende Reserve',
      ampelMeaning:'Die Ampel bewertet nur die interne Budgetverteilung: Grün = mindestens 5 % Reserve, Gelb = weniger als 5 % Reserve, Rot = mehr als 100 % verplant.',
      impactTitle:'Mögliche Wirkung des Modells', impactLead:'Die folgenden Punkte beschreiben gesellschaftliche und gesundheitliche Zielwirkungen des Modells. Sie sind keine medizinische Heilzusage und keine Garantie realer wirtschaftlicher Ergebnisse.',
      impactHumanH:'👤 Mensch', impactHumanP:'Wenn öffentliche Aufgaben vollständig anderweitig gedeckt sind, ist das Modellziel 0 % Einkommensteuer. Der verdiente Arbeitslohn bleibt dann beim Menschen; das Grundeinkommen wird separat betrachtet.',
      impactAgriH:'🌱 Boden & Ernährung', impactAgriP:'Ein eigener Finanzierungsanteil kann langfristige Bodenfruchtbarkeit, schadstoffärmere Produktion und eine resilientere Lebensmittelversorgung unterstützen.',
      impactHealthH:'❤️ Gesundheit', impactHealthP:'Stabile Budgets können Prävention, Behandlung, Pflege und erreichbare Gesundheitsleistungen besser planbar machen.',
      impactEduH:'🎓 Bildung', impactEduP:'Langfristig finanzierte Bildung und Forschung stärken Selbstständigkeit, Innovation und gesellschaftliche Teilhabe.',
      sourceH:'Transparenz & Quellen:',
      sourceP:'Die 2,0 Billiarden USD von McKinsey sind ein externer Quellenanker für globale Zahlungs-„value flows“. Die hier verwendete Rechengröße von 2,0 Billiarden Valu ist eine VALUVENTUM®-Modellannahme und nicht mit dem USD-Wert gleichzusetzen. Die Bevölkerungsanteile sind Näherungswerte für 2026 auf Basis der UN World Population Prospects 2024. Die Steuerziele 0 % sind Modellziele und gelten nur, wenn die tatsächlich definierten Gemeinschaftsaufgaben vollständig und dauerhaft gedeckt werden.',
      green:'GRÜN · Verteilung mit Reserve', greenCopy:'Die gewählten Aufgabenfelder bleiben innerhalb des verfügbaren Gemeinschaftsbudgets und lassen mindestens 5 % Reserve.',
      yellow:'GELB · Kaum Reserve', yellowCopy:'Die Verteilung bleibt noch im Budget, lässt aber weniger als 5 % Reserve.',
      red:'ROT · Budget überschritten', redCopy:'Die gewählten Aufgabenfelder überschreiten zusammen 100 % des verfügbaren Gemeinschaftsbudgets.'
    },
    en:{
      eye:'PEOPLE-CENTRED MODEL DISTRIBUTION', title:'Not every continent equally – every person equally weighted.',
      lead:'The remaining community amount is no longer divided by seven. Each inhabited continent receives the share corresponding to its share of world population.',
      modelFlow:'Model flow per year', basic:'Basic income per year', pool:'Community pool', rest:'Remaining for community tasks',
      rateTitle:'Test the community contribution', rateLead:'The starting value is 10%. Use the slider to see how a higher or lower rate changes the pool, remainder and continent budgets.', rateLabel:'Community contribution', rateHint:'Model assumption: the percentage is applied to a calculation base of 2.0 quadrillion Valu.',
      taxIncome:'Income tax – model target with full coverage', taxProduct:'Product/VAT tax – model target with full coverage',
      distributionTitle:'Distribution by population share', distributionLead:'The percentages approximately reflect the 2026 distribution of world population. Antarctica has no permanent population, so global tasks use a separate adjustable buffer.',
      pop:'Population approx.', share:'Population share', budget:'Annual budget', globalTasks:'❄️ Antarctica / global tasks', globalTasksPop:'no permanent population', globalTasksHint:'Separate buffer for research, global infrastructure, crisis response and joint tasks.',
      bufferTitle:'Adjust global buffer', bufferLead:'This share is deducted before distribution to inhabited continents. The remainder is then distributed fully by population share.', bufferLabel:'Global buffer', perPerson:'Community budget per person/year',
      categoryTitle:'How the budget can be used', categoryLead:'These sliders allocate the available community budget across four major areas. They do not change continent population shares.',
      public:'Public tasks / tax replacement', publicHint:'Infrastructure, administration, security, fire services, public transport and other common tasks.',
      agri:'Healthy agriculture', agriHint:'Soil restoration, microbiological regeneration, lower-pollutant production, natural seed and mechanical/solar agricultural technology.',
      health:'Health system', healthHint:'Prevention, medical care, nursing, staff, medicines and necessary health infrastructure.',
      education:'Education & research', educationHint:'Early education, schools, training, universities, research and accessible knowledge.',
      globalAllocated:'Allocated globally', europeExample:'Of this in Europe', reserveLabel:'Remaining reserve', ampelMeaning:'Traffic light: green = at least 5% reserve, yellow = below 5%, red = over 100% allocated.',
      impactTitle:'Possible model effects', impactLead:'These are intended social and health-related effects, not medical promises or guarantees of real economic outcomes.',
      impactHumanH:'👤 People', impactHumanP:'If public tasks are fully funded elsewhere, the model target is 0% income tax.', impactAgriH:'🌱 Soil & food', impactAgriP:'Dedicated funding can support soil fertility, lower-pollutant production and resilient food supply.', impactHealthH:'❤️ Health', impactHealthP:'Stable budgets can make prevention, treatment, nursing and access to care more predictable.', impactEduH:'🎓 Education', impactEduP:'Long-term education and research funding can strengthen independence, innovation and participation.',
      sourceH:'Transparency & sources:', sourceP:'McKinsey’s USD 2.0 quadrillion is an external source anchor for global payment “value flows”. The 2.0 quadrillion Valu calculation base used here is a VALUVENTUM® model assumption, not the same as the USD figure. Population shares are approximate 2026 values based on UN World Population Prospects 2024. Zero-tax figures are model targets conditional on full and durable coverage of defined community tasks.',
      green:'GREEN · Allocation with reserve', greenCopy:'The selected areas stay within the available community budget and leave at least 5% reserve.', yellow:'YELLOW · Little reserve', yellowCopy:'The allocation remains within budget but leaves less than 5% reserve.', red:'RED · Budget exceeded', redCopy:'The selected areas together exceed 100% of the available community budget.'
    },
    es:{
      eye:'DISTRIBUCIÓN DEL MODELO CENTRADA EN LAS PERSONAS', title:'No todos los continentes por igual: cada persona con el mismo peso.',
      lead:'El importe comunitario restante ya no se divide simplemente entre siete. Cada continente habitado recibe la proporción correspondiente a su parte de la población mundial.',
      modelFlow:'Flujo modelo anual', basic:'Renta básica anual', pool:'Fondo comunitario', rest:'Resto para tareas comunitarias',
      rateTitle:'Probar la aportación comunitaria', rateLead:'El valor inicial es 10 %. Con el control puede comprobar cómo cambia el fondo, el resto y los presupuestos continentales.', rateLabel:'Aportación comunitaria', rateHint:'Supuesto del modelo: el porcentaje se aplica a una base de cálculo de 2,0 mil billones Valu.',
      taxIncome:'Impuesto sobre la renta – objetivo con cobertura total', taxProduct:'IVA/impuesto sobre productos – objetivo con cobertura total',
      distributionTitle:'Distribución por población', distributionLead:'Los porcentajes reflejan aproximadamente la distribución mundial de 2026. La Antártida no tiene población permanente; para tareas globales existe un fondo separado ajustable.',
      pop:'Población aprox.', share:'Cuota de población', budget:'Presupuesto anual', globalTasks:'❄️ Antártida / tareas globales', globalTasksPop:'sin población permanente', globalTasksHint:'Fondo separado para investigación, infraestructura global, ayuda en crisis y tareas comunes.',
      bufferTitle:'Ajustar fondo global', bufferLead:'Esta parte se deduce antes de distribuir a los continentes habitados. El resto se reparte completamente según población.', bufferLabel:'Fondo global', perPerson:'Presupuesto comunitario por persona/año',
      categoryTitle:'Para qué puede utilizarse el presupuesto', categoryLead:'Estos controles distribuyen el presupuesto comunitario disponible entre cuatro áreas. No cambian la cuota de población de los continentes.',
      public:'Tareas públicas / sustitución fiscal', publicHint:'Infraestructura, administración, seguridad, bomberos, transporte público y otras tareas comunes.',
      agri:'Agricultura saludable', agriHint:'Regeneración del suelo, producción con menos contaminantes, semillas naturales y tecnología agrícola mecánica y solar.',
      health:'Sistema de salud', healthHint:'Prevención, atención médica, cuidados, personal, medicamentos e infraestructura sanitaria necesaria.',
      education:'Educación e investigación', educationHint:'Educación infantil, escuelas, formación, universidades, investigación y conocimiento accesible.',
      globalAllocated:'Asignado globalmente', europeExample:'De ello en Europa', reserveLabel:'Reserva restante', ampelMeaning:'Semáforo: verde = al menos 5 % de reserva, amarillo = menos de 5 %, rojo = más del 100 % asignado.',
      impactTitle:'Posibles efectos del modelo', impactLead:'Son objetivos sociales y sanitarios del modelo, no promesas médicas ni garantías de resultados económicos reales.',
      impactHumanH:'👤 Personas', impactHumanP:'Si las tareas públicas están completamente financiadas, el objetivo del modelo es 0 % de impuesto sobre la renta.', impactAgriH:'🌱 Suelo y alimentos', impactAgriP:'Una financiación específica puede apoyar la fertilidad del suelo y una producción más resiliente.', impactHealthH:'❤️ Salud', impactHealthP:'Presupuestos estables pueden mejorar la planificación de prevención, tratamiento y cuidados.', impactEduH:'🎓 Educación', impactEduP:'La financiación a largo plazo de educación e investigación puede fortalecer autonomía, innovación y participación.',
      sourceH:'Transparencia y fuentes:', sourceP:'Los 2,0 mil billones USD de McKinsey son una referencia externa para los “flujos de valor” globales de pagos. La base de 2,0 mil billones Valu utilizada aquí es un supuesto del modelo VALUVENTUM®, no la misma cifra en USD. Las cuotas de población son aproximaciones para 2026 basadas en UN World Population Prospects 2024. Los valores fiscales de 0 % son objetivos del modelo condicionados a la cobertura completa y sostenible de las tareas comunitarias definidas.',
      green:'VERDE · Distribución con reserva', greenCopy:'Las áreas elegidas permanecen dentro del presupuesto disponible y dejan al menos un 5 % de reserva.', yellow:'AMARILLO · Poca reserva', yellowCopy:'La distribución sigue dentro del presupuesto, pero deja menos del 5 % de reserva.', red:'ROJO · Presupuesto excedido', redCopy:'Las áreas elegidas superan conjuntamente el 100 % del presupuesto disponible.'
    }
  };

  root.innerHTML = `
  <style>
    :host{display:block;font-family:Inter,Arial,sans-serif;color:#24302d}
    *{box-sizing:border-box}.shell{width:min(1180px,92%);margin:34px auto 50px;padding:clamp(22px,4vw,42px);border:1px solid #dce6e0;border-radius:28px;background:linear-gradient(145deg,#f7fbf8,#fffaf0);box-shadow:0 18px 48px rgba(15,90,70,.08)}
    .eye{color:#b47c08;font-size:.76rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase}h2{margin:8px 0 12px;color:#0f5a46;font-size:clamp(1.85rem,3.5vw,3.15rem);line-height:1.08}h3{margin:0;color:#0f5a46;font-size:1.35rem}.lead{max-width:950px;margin:0;color:#65736f;line-height:1.65}
    .flow{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:24px}.flow article{padding:18px;border:1px solid #dce6e0;border-radius:18px;background:#fff}.flow span{display:block;color:#6b7773;font-size:.78rem;font-weight:800}.flow b{display:block;margin-top:7px;color:#0f5a46;font-size:1.18rem;font-variant-numeric:tabular-nums}.flow .rest{background:#0f5a46;border-color:#0f5a46}.flow .rest span{color:#d7ece4}.flow .rest b{color:#ffd56c}
    .sliderbox{margin-top:18px;padding:20px;border:1px solid #dce6e0;border-radius:18px;background:#fff}.slider-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px}.slider-head p{margin:6px 0 0;color:#687670;line-height:1.5;font-size:.9rem}.bigpct{min-width:100px;text-align:center;padding:10px 12px;border-radius:14px;background:#0f5a46;color:#fff;font-size:1.35rem;font-weight:900}.sliderline{display:grid;grid-template-columns:1fr 110px;gap:14px;align-items:center;margin-top:16px}.sliderline input[type=range]{width:100%;accent-color:#0f5a46}.hint{margin-top:8px;color:#74817d;font-size:.82rem;line-height:1.45}
    .taxrow{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:14px}.tax{padding:16px;border-radius:16px;background:#fff;border:1px solid #dce6e0;text-align:center}.tax b{display:block;color:#0f5a46;font-size:1.45rem}.tax span{display:block;margin-top:4px;color:#66746f;font-size:.82rem}
    .sectiontitle{margin-top:30px}.sectiontitle p{margin:8px 0 0;color:#687670;line-height:1.58}.continents{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:16px}.continent{padding:17px;border:1px solid #dce6e0;border-radius:17px;background:#fff}.continent strong{display:block;color:#0f5a46;font-size:1rem}.meta{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px}.meta span{font-size:.78rem;color:#74817d}.meta b{display:block;margin-top:2px;color:#24302d;font-size:.93rem}.budget{margin-top:11px;padding-top:10px;border-top:1px solid #edf1ef}.budget small{display:block;color:#74817d}.budget b{display:block;margin-top:4px;color:#0f5a46;font-size:1.16rem;font-variant-numeric:tabular-nums}.globalcard{background:#fff8e7;border-color:#ead9a7}
    .perperson{margin-top:14px;padding:14px 16px;border-radius:14px;background:#eef7f2;color:#0f5a46;font-weight:850}.perperson span{color:#62706b;font-weight:600}
    .planner{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(280px,.65fr);gap:20px;margin-top:18px}.panel{padding:22px;border:1px solid #dce6e0;border-radius:20px;background:#fff}.row{display:grid;grid-template-columns:minmax(0,1fr) 84px;gap:12px;align-items:center;padding:14px 0;border-bottom:1px solid #edf1ef}.row:last-child{border-bottom:0}.row label{display:grid;gap:6px;color:#0f5a46;font-weight:850}.row small{color:#6b7773;font-weight:500;line-height:1.4}.row input[type=range]{width:100%;accent-color:#0f5a46}.pct{padding:8px;border:1px solid #dce6e0;border-radius:10px;text-align:center;color:#0f5a46;font-weight:900;background:#f8fbf9}.amounts{display:grid;gap:9px;margin-top:18px}.amount{display:grid;grid-template-columns:1fr auto;gap:12px;padding:11px 12px;border-radius:12px;background:#f6f9f7}.amount span{color:#596862}.amount b{color:#0f5a46;font-variant-numeric:tabular-nums}
    .lightbox{display:grid;place-items:center;text-align:center;min-height:100%}.light{width:90px;height:90px;border-radius:50%;box-shadow:0 0 0 10px #edf1ef,0 12px 28px rgba(0,0,0,.12);background:#1b9e55}.light.yellow{background:#d9a20d}.light.red{background:#c7473d}.status{margin-top:18px;color:#0f5a46;font-size:1.18rem;font-weight:900}.statuscopy{margin:7px 0 0;color:#66746f;line-height:1.55}.reservebox{margin-top:15px;padding:13px;border-radius:13px;background:#fff8e7;border:1px solid #ead9a7;color:#5d5131;font-size:.86rem;line-height:1.45}
    .impact{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:16px}.impact article{padding:18px;border:1px solid #dce6e0;border-radius:18px;background:#fff}.impact strong{display:block;color:#0f5a46}.impact p{margin:7px 0 0;color:#65736f;font-size:.88rem;line-height:1.5}.note{margin-top:20px;padding:18px 20px;border-left:5px solid #c99a2e;border-radius:0 16px 16px 0;background:#fffaf0;color:#5d655f;line-height:1.55;font-size:.88rem}.note strong{color:#0f5a46}.sources a{color:#0f5a46;font-weight:850}
    @media(max-width:940px){.flow,.impact{grid-template-columns:1fr 1fr}.continents{grid-template-columns:1fr 1fr}.planner{grid-template-columns:1fr}}
    @media(max-width:620px){.shell{width:min(100% - 22px,1180px);padding:20px;border-radius:20px}.flow,.continents,.impact,.taxrow{grid-template-columns:1fr}.slider-head{display:block}.bigpct{margin-top:12px;width:max-content}.sliderline{grid-template-columns:1fr 90px}.row{grid-template-columns:1fr 72px}}
  </style>
  <div class="shell">
    <div class="eye" data-t="eye"></div>
    <h2 data-t="title"></h2>
    <p class="lead" data-t="lead"></p>

    <div class="flow">
      <article><span data-t="modelFlow"></span><b>2,000 Bio. Valu</b></article>
      <article><span data-t="basic"></span><b>147,960 Bio. Valu</b></article>
      <article><span data-t="pool"></span><b id="vvbd-pool">200,000 Bio. Valu</b></article>
      <article class="rest"><span data-t="rest"></span><b id="vvbd-rest">52,040 Bio. Valu</b></article>
    </div>

    <div class="sliderbox">
      <div class="slider-head"><div><h3 data-t="rateTitle"></h3><p data-t="rateLead"></p></div><div class="bigpct" id="vvbd-rate-big">10,0 %</div></div>
      <div class="sliderline"><input id="vvbd-rate" type="range" min="5" max="15" step="0.1" value="10"><input id="vvbd-rate-num" type="number" min="5" max="15" step="0.1" value="10" aria-label="Gemeinschaftsbeitrag in Prozent"></div>
      <div class="hint"><strong data-t="rateLabel"></strong> · <span data-t="rateHint"></span></div>
    </div>

    <div class="taxrow">
      <div class="tax"><b>0 %</b><span data-t="taxIncome"></span></div>
      <div class="tax"><b>0 %</b><span data-t="taxProduct"></span></div>
    </div>

    <div class="sectiontitle"><h3 data-t="distributionTitle"></h3><p data-t="distributionLead"></p></div>
    <div class="continents" id="vvbd-regions"></div>

    <div class="sliderbox">
      <div class="slider-head"><div><h3 data-t="bufferTitle"></h3><p data-t="bufferLead"></p></div><div class="bigpct" id="vvbd-buffer-big">0,07 %</div></div>
      <div class="sliderline"><input id="vvbd-buffer" type="range" min="0" max="2" step="0.01" value="0.07"><input id="vvbd-buffer-num" type="number" min="0" max="2" step="0.01" value="0.07" aria-label="Globaler Puffer in Prozent"></div>
      <div class="hint"><strong data-t="bufferLabel"></strong></div>
    </div>

    <div class="perperson"><span data-t="perPerson"></span>: <b id="vvbd-perperson"></b></div>

    <div class="sectiontitle"><h3 data-t="categoryTitle"></h3><p data-t="categoryLead"></p></div>
    <div class="planner">
      <div class="panel">
        <div class="row"><label><span data-t="public"></span><input id="vvbd-public" type="range" min="0" max="80" step="1" value="40"><small data-t="publicHint"></small></label><div class="pct"><span id="vvbd-public-pct">40</span> %</div></div>
        <div class="row"><label><span data-t="agri"></span><input id="vvbd-agri" type="range" min="0" max="80" step="1" value="25"><small data-t="agriHint"></small></label><div class="pct"><span id="vvbd-agri-pct">25</span> %</div></div>
        <div class="row"><label><span data-t="health"></span><input id="vvbd-health" type="range" min="0" max="80" step="1" value="20"><small data-t="healthHint"></small></label><div class="pct"><span id="vvbd-health-pct">20</span> %</div></div>
        <div class="row"><label><span data-t="education"></span><input id="vvbd-education" type="range" min="0" max="80" step="1" value="10"><small data-t="educationHint"></small></label><div class="pct"><span id="vvbd-education-pct">10</span> %</div></div>
        <div class="amounts" aria-live="polite">
          <div class="amount"><span data-t="globalAllocated"></span><b id="vvbd-global"></b></div>
          <div class="amount"><span data-t="europeExample"></span><b id="vvbd-europe"></b></div>
          <div class="amount"><span data-t="reserveLabel"></span><b id="vvbd-reserve"></b></div>
        </div>
      </div>
      <div class="panel lightbox"><div><div id="vvbd-light" class="light" aria-label="Budgetampel"></div><div id="vvbd-status" class="status"></div><p id="vvbd-status-copy" class="statuscopy"></p><div class="reservebox" data-t="ampelMeaning"></div></div></div>
    </div>

    <div class="sectiontitle"><h3 data-t="impactTitle"></h3><p data-t="impactLead"></p></div>
    <div class="impact"><article><strong data-t="impactHumanH"></strong><p data-t="impactHumanP"></p></article><article><strong data-t="impactAgriH"></strong><p data-t="impactAgriP"></p></article><article><strong data-t="impactHealthH"></strong><p data-t="impactHealthP"></p></article><article><strong data-t="impactEduH"></strong><p data-t="impactEduP"></p></article></div>
    <div class="note sources"><strong data-t="sourceH"></strong> <span data-t="sourceP"></span><br><br><a href="https://www.un.org/development/desa/pd/content/World-Population-Prospects-2024" target="_blank" rel="noopener">UN World Population Prospects 2024</a> · <a href="https://www.mckinsey.com/industries/financial-services/our-insights/global-payments-report" target="_blank" rel="noopener">McKinsey Global Payments Report</a></div>
  </div>`;

  const $ = s => root.querySelector(s);
  const all = s => Array.from(root.querySelectorAll(s));
  const modelFlow = 2000;
  const basicIncome = 147.96;
  const worldModelPeople = 8.22e9;
  let lang = 'de';

  function locale(){ return lang==='en' ? 'en-US' : lang==='es' ? 'es-ES' : 'de-DE'; }
  function fmt(n,d=3){ return new Intl.NumberFormat(locale(),{minimumFractionDigits:d,maximumFractionDigits:d}).format(n); }
  function pct(n,d=2){ return new Intl.NumberFormat(locale(),{minimumFractionDigits:d,maximumFractionDigits:d}).format(n)+' %'; }
  function bio(n,d=3){ return fmt(n,d)+' Bio. Valu'; }
  function currentCopy(){ return copy[lang] || copy.de; }

  function renderRegions(remaining, bufferRate){
    const c = currentCopy();
    const container = $('#vvbd-regions');
    const humanBudget = Math.max(0, remaining) * (1-bufferRate/100);
    container.innerHTML = regions.map(r=>{
      const amount = humanBudget * (r.share/100);
      return `<div class="continent"><strong>${r.icon} ${r[lang] || r.de}</strong><div class="meta"><div><span>${c.pop}</span><b>${r.pop}</b></div><div><span>${c.share}</span><b>${pct(r.share,2)}</b></div></div><div class="budget"><small>${c.budget}</small><b>${bio(amount,3)}</b></div></div>`;
    }).join('') + `<div class="continent globalcard"><strong>${c.globalTasks}</strong><div class="meta"><div><span>${c.pop}</span><b>${c.globalTasksPop}</b></div><div><span>${c.share}</span><b>${pct(bufferRate,2)}</b></div></div><div class="budget"><small>${c.budget}</small><b>${bio(Math.max(0,remaining)*(bufferRate/100),3)}</b></div><div class="hint">${c.globalTasksHint}</div></div>`;
  }

  function calculate(){
    const rate = Number($('#vvbd-rate').value);
    const bufferRate = Number($('#vvbd-buffer').value);
    $('#vvbd-rate-num').value = rate.toFixed(1);
    $('#vvbd-buffer-num').value = bufferRate.toFixed(2);
    $('#vvbd-rate-big').textContent = pct(rate,1);
    $('#vvbd-buffer-big').textContent = pct(bufferRate,2);

    const pool = modelFlow * rate/100;
    const remaining = pool - basicIncome;
    $('#vvbd-pool').textContent = bio(pool,3);
    $('#vvbd-rest').textContent = remaining >= 0 ? bio(remaining,3) : '- '+bio(Math.abs(remaining),3);

    renderRegions(remaining, bufferRate);

    const humanBudget = Math.max(0, remaining) * (1-bufferRate/100);
    const perPerson = humanBudget * 1e12 / worldModelPeople;
    $('#vvbd-perperson').textContent = new Intl.NumberFormat(locale(),{maximumFractionDigits:0}).format(perPerson)+' Valu';

    const ids=['public','agri','health','education'];
    const values=ids.map(id=>Number($('#vvbd-'+id).value));
    ids.forEach((id,i)=>$('#vvbd-'+id+'-pct').textContent=values[i]);
    const sum=values.reduce((a,b)=>a+b,0);
    const reserve=100-sum;
    const europeBudget = humanBudget * 0.0896;
    $('#vvbd-global').textContent = remaining>0 ? bio(remaining*sum/100,3) : '—';
    $('#vvbd-europe').textContent = remaining>0 ? bio(europeBudget*sum/100,3) : '—';
    $('#vvbd-reserve').textContent = remaining>0 && reserve>=0 ? bio(remaining*reserve/100,3)+' · '+pct(reserve,0) : (reserve<0 ? '- '+pct(Math.abs(reserve),0) : '—');

    const c=currentCopy();
    const light=$('#vvbd-light');
    light.classList.remove('yellow','red');
    if(remaining<0 || reserve<0){ light.classList.add('red'); $('#vvbd-status').textContent=c.red; $('#vvbd-status-copy').textContent=c.redCopy; }
    else if(reserve<5){ light.classList.add('yellow'); $('#vvbd-status').textContent=c.yellow; $('#vvbd-status-copy').textContent=c.yellowCopy; }
    else { $('#vvbd-status').textContent=c.green; $('#vvbd-status-copy').textContent=c.greenCopy; }
  }

  function applyLanguage(next){
    lang = copy[next] ? next : 'de';
    const c=currentCopy();
    all('[data-t]').forEach(el=>{ const key=el.getAttribute('data-t'); if(c[key]!==undefined) el.textContent=c[key]; });
    calculate();
  }

  function syncRangeNumber(rangeId, numberId){
    const range=$(rangeId), num=$(numberId);
    range.addEventListener('input',calculate);
    num.addEventListener('change',()=>{ let v=Number(num.value); const min=Number(range.min), max=Number(range.max); if(!Number.isFinite(v)) v=Number(range.value); v=Math.max(min,Math.min(max,v)); range.value=v; calculate(); });
  }

  syncRangeNumber('#vvbd-rate','#vvbd-rate-num');
  syncRangeNumber('#vvbd-buffer','#vvbd-buffer-num');
  ['public','agri','health','education'].forEach(id=>$('#vvbd-'+id).addEventListener('input',calculate));

  document.addEventListener('valuventum:language',e=>applyLanguage(e.detail && e.detail.lang));
  new MutationObserver(()=>{ const l=(document.documentElement.lang||'de').slice(0,2).toLowerCase(); if(copy[l] && l!==lang) applyLanguage(l); }).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});

  applyLanguage((document.documentElement.lang||'de').slice(0,2).toLowerCase());
})();