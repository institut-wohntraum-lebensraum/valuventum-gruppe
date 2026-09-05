(function(){
  'use strict';

  function start(){
    const section=document.getElementById('rechner');
    if(!section)return;

    const calcgrid=section.querySelector('.calcgrid');
    const results=section.querySelector('.results');
    const traffic=document.getElementById('trafficStatus');
    const intro=section.querySelector('[data-i18n="calcP"]');
    if(!calcgrid||!results||!traffic)return;

    const t={
      de:{
        intro:'Neue VALUVENTUM®-Berechnung: Der jährliche Grundeinkommensbedarf wird aus Menschenzahl × Grundeinkommen × 12 berechnet. Für die Szenariorechnung werden 10 % eines Modellflusses von 2,0 Billiarden Valu als Gemeinschaftstopf angesetzt. Nach dem Grundeinkommen wird der verbleibende Betrag auf sieben Kontinente beziehungsweise globale Aufgaben sowie auf öffentliche Aufgaben, gesunde Landwirtschaft, Gesundheit und Bildung verteilt. Der McKinsey-Wert von 2,0 Billiarden USD bleibt getrennt als externer Quellenanker sichtbar.',
        poolTitle:'10-%-Gemeinschaftstopf · neue Berechnung',poolSub:'Der alte dynamische Satz nach Zahl der Erwerbstätigen wurde entfernt.',modelFlow:'Modellfluss',tenPercent:'10 % davon',annualBasic:'Grundeinkommen weltweit / Jahr',remaining:'Für Gemeinschaftsaufgaben verbleibend',
        splitTitle:'7 Kontinente / globale Aufgaben',splitSub:'Gleiche Modellverteilung des verbleibenden Gemeinschaftsbetrags.',
        monthly:'Grundeinkommen monatlich',yearly:'Grundeinkommen jährlich',annualNeed:'Jährlicher Grundeinkommensbedarf',source:'Externer Quellenanker',pool:'10-%-Modelltopf',rest:'Nach Grundeinkommen verbleibend',per7:'Je Kontinent / Globalbereich',tax:'Modellziel bei ausreichender Gesamtdeckung',taxValue:'0 % Einkommensteuer · 0 % Produkt/MwSt',
        green:'GRÜN – Verteilung mit Reserve',yellow:'GELB – kaum Reserve',red:'ROT – Budget überschritten',greenText:'Das Grundeinkommen ist bereits abgezogen. Die gewählte Verteilung bleibt innerhalb des verbleibenden Gemeinschaftsbudgets.',yellowText:'Die Verteilung bleibt noch innerhalb des Gemeinschaftsbudgets, aber die Reserve ist kleiner als 5 %.',redText:'Die gewählten Bereiche überschreiten zusammen 100 % des verbleibenden Gemeinschaftsbudgets.',scale:'Ampel: Grün = mindestens 5 % Reserve · Gelb = 0 bis unter 5 % Reserve · Rot = mehr als 100 % verplant',
        distribute:'52,04 Billionen Valu · Verteilung ausprobieren',global:'Global',continent:'Je Kontinent',public:'Öffentliche Aufgaben / Steuerersatz',publicHint:'Infrastruktur, Sicherheit, Feuerwehr, Verwaltung und weitere Gemeinschaftsaufgaben.',agri:'Gesunde Landwirtschaft',agriHint:'Bodenaufbau, schadstoffärmere Produktion, natürliches Saatgut sowie mechanische und solare Agrartechnik.',health:'Gesundheitssystem',healthHint:'Versorgung, Prävention, Pflege, Personal und notwendige Gesundheitsinfrastruktur.',education:'Bildung & Forschung',educationHint:'Schulen, Ausbildung, Weiterbildung, Forschung und frei zugängliches Wissen.',reserve:'Reserve',effect:'Heilwirkung im übertragenen Sinn',effectText:'Modellziel: wirtschaftlichen Druck verringern, gesündere Böden und Ernährung fördern, Gesundheitsversorgung stärken und Bildung langfristig absichern. Das ist keine medizinische Heilzusage.',note:'Transparenz: Die Valu-Beträge sind eine VALUVENTUM®-Szenariorechnung. McKinsey nennt 2,0 Billiarden USD an globalen „value flows“. Dieser externe USD-Wert ist nicht automatisch ein Valu-Wert.'
      },
      en:{
        intro:'New VALUVENTUM® calculation: the annual basic-income requirement is calculated from population × basic income × 12. For the scenario calculation, 10% of a model flow of 2.0 quadrillion Valu is used as the community pool. After basic income, the remaining amount is distributed across seven continents or global tasks and across public tasks, healthy agriculture, health and education. McKinsey’s USD 2.0 quadrillion remains visible separately as an external source anchor.',
        poolTitle:'10% community pool · new calculation',poolSub:'The old dynamic rate based on the number of workers has been removed.',modelFlow:'Model flow',tenPercent:'10% of it',annualBasic:'Worldwide basic income / year',remaining:'Remaining for community tasks',splitTitle:'7 continents / global tasks',splitSub:'Equal model distribution of the remaining community amount.',monthly:'Monthly basic income',yearly:'Annual basic income',annualNeed:'Annual basic-income requirement',source:'External source anchor',pool:'10% model pool',rest:'Remaining after basic income',per7:'Per continent / global area',tax:'Model target with sufficient total coverage',taxValue:'0% income tax · 0% product/VAT',green:'GREEN – allocation with reserve',yellow:'YELLOW – little reserve',red:'RED – budget exceeded',greenText:'Basic income has already been deducted. The selected allocation remains within the remaining community budget.',yellowText:'The allocation is still within the community budget, but reserve is below 5%.',redText:'The selected areas together exceed 100% of the remaining community budget.',scale:'Traffic light: Green = at least 5% reserve · Yellow = 0 to under 5% · Red = more than 100% allocated',distribute:'52.04 trillion Valu · try the allocation',global:'Global',continent:'Per continent',public:'Public tasks / tax replacement',publicHint:'Infrastructure, security, fire services, administration and other community tasks.',agri:'Healthy agriculture',agriHint:'Soil restoration, lower-pollutant production, natural seed and mechanical and solar agricultural technology.',health:'Health system',healthHint:'Care, prevention, nursing, staff and necessary health infrastructure.',education:'Education & research',educationHint:'Schools, training, continuing education, research and accessible knowledge.',reserve:'Reserve',effect:'Healing effect in a broader sense',effectText:'Model objective: reduce economic pressure, support healthier soils and food, strengthen health care and secure education over the long term. This is not a medical promise of healing.',note:'Transparency: the Valu amounts are a VALUVENTUM® scenario calculation. McKinsey cites USD 2.0 quadrillion in global “value flows”. This external USD figure is not automatically a Valu figure.'
      },
      es:{
        intro:'Nuevo cálculo VALUVENTUM®: la necesidad anual de renta básica se calcula con población × renta básica × 12. Para el escenario se utiliza como fondo comunitario el 10 % de un flujo modelo de 2,0 mil billones Valu. Después de la renta básica, el importe restante se distribuye entre siete continentes o tareas globales y entre tareas públicas, agricultura saludable, salud y educación. Los 2,0 mil billones USD de McKinsey siguen visibles por separado como referencia externa.',
        poolTitle:'Fondo comunitario del 10 % · nuevo cálculo',poolSub:'Se eliminó la antigua tasa dinámica basada en el número de trabajadores.',modelFlow:'Flujo modelo',tenPercent:'10 % del mismo',annualBasic:'Renta básica mundial / año',remaining:'Restante para tareas comunitarias',splitTitle:'7 continentes / tareas globales',splitSub:'Distribución igual del importe comunitario restante.',monthly:'Renta básica mensual',yearly:'Renta básica anual',annualNeed:'Necesidad anual de renta básica',source:'Referencia externa',pool:'Fondo modelo del 10 %',rest:'Restante después de la renta básica',per7:'Por continente / área global',tax:'Objetivo del modelo con cobertura total suficiente',taxValue:'0 % renta · 0 % producto/IVA',green:'VERDE – distribución con reserva',yellow:'AMARILLO – poca reserva',red:'ROJO – presupuesto excedido',greenText:'La renta básica ya está descontada. La distribución elegida permanece dentro del presupuesto comunitario restante.',yellowText:'La distribución todavía está dentro del presupuesto, pero la reserva es inferior al 5 %.',redText:'Las áreas elegidas superan conjuntamente el 100 % del presupuesto comunitario restante.',scale:'Semáforo: Verde = al menos 5 % de reserva · Amarillo = de 0 a menos del 5 % · Rojo = más del 100 % asignado',distribute:'52,04 billones Valu · probar la distribución',global:'Global',continent:'Por continente',public:'Tareas públicas / sustitución fiscal',publicHint:'Infraestructura, seguridad, bomberos, administración y otras tareas comunitarias.',agri:'Agricultura saludable',agriHint:'Regeneración del suelo, producción con menos contaminantes, semillas naturales y tecnología agrícola mecánica y solar.',health:'Sistema de salud',healthHint:'Atención, prevención, cuidados, personal e infraestructura sanitaria necesaria.',education:'Educación e investigación',educationHint:'Escuelas, formación, educación continua, investigación y conocimiento accesible.',reserve:'Reserva',effect:'Efecto reparador en sentido amplio',effectText:'Objetivo del modelo: reducir la presión económica, favorecer suelos y alimentos más sanos, reforzar la atención sanitaria y asegurar la educación a largo plazo. No es una promesa médica de curación.',note:'Transparencia: los importes Valu son un cálculo de escenario VALUVENTUM®. McKinsey cita 2,0 mil billones USD en “flujos de valor” globales. Esta cifra externa en USD no es automáticamente una cifra Valu.'
      }
    };

    function lang(){const x=(document.documentElement.lang||'de').toLowerCase();return x.startsWith('en')?'en':x.startsWith('es')?'es':'de';}
    function locale(){return lang()==='de'?'de-DE':lang()==='es'?'es-ES':'en-US';}
    function fmt(x,d){return Number(x).toLocaleString(locale(),{minimumFractionDigits:d,maximumFractionDigits:d});}
    function bio(x,d){return fmt(x/1e12,d)+(lang()==='en'?' tn Valu':' Bio. Valu');}
    function value(id){const e=document.getElementById(id);return e?Number(e.value)||0:0;}
    function set(id,text){const e=document.getElementById(id);if(e)e.textContent=text;}

    const controls=[...calcgrid.children].filter(el=>el.classList&&el.classList.contains('control'));
    const activeControl=controls.find(el=>el.querySelector('#activeExact'));
    const sourceControl=controls.find(el=>el.classList.contains('source-anchor-control'));
    const rateControl=controls.find(el=>el.classList.contains('reference-control'));
    const financeControl=controls.find(el=>el.classList.contains('vv-finance-control'));

    if(activeControl){
      activeControl.classList.add('vv-new-pool-control');
      activeControl.innerHTML=`
        <div class="vv-compat" hidden>
          <input id="active" value="3500000000"><input id="activeExact" value="3500000000"><b id="activeOut"></b>
        </div>
        <div class="controltop"><strong id="vvNewPoolTitle"></strong><b>10 %</b></div>
        <div class="vv-new-hero" id="vvNewPoolHero">200,00 Bio. Valu</div>
        <div class="vv-new-mini"><span id="vvNewPoolSub"></span></div>`;
    }

    if(rateControl){
      rateControl.classList.add('vv-new-flow-control');
      rateControl.innerHTML=`
        <div class="vv-compat" hidden><b id="rateOut"></b><b id="requiredRateHero"></b><div id="rateRelation"></div></div>
        <div class="controltop"><strong id="vvNewFlowTitle"></strong><b id="vvNewFlowRestTop">52,04 Bio. Valu</b></div>
        <div class="vv-new-flow">
          <div><span id="vvModelFlowLabel"></span><b>2,0 Billiarden Valu</b></div>
          <div><span id="vvTenPercentLabel"></span><b id="vvPoolValue">200,00 Bio. Valu</b></div>
          <div><span id="vvAnnualBasicLabel"></span><b id="vvAnnualBasicValue">147,96 Bio. Valu</b></div>
          <div class="rest"><span id="vvRemainingLabel"></span><b id="vvRemainingValue">52,04 Bio. Valu</b></div>
        </div>`;
    }

    if(financeControl){
      financeControl.classList.add('vv-new-seven-control');
      financeControl.innerHTML=`
        <div class="controltop"><strong id="vvSevenTitle"></strong><b>7 ×</b></div>
        <div class="vv-seven-grid">
          <div><strong>🌏 Asien</strong><span class="vvPer7">7,434 Bio. Valu</span></div>
          <div><strong>🌍 Afrika</strong><span class="vvPer7">7,434 Bio. Valu</span></div>
          <div><strong>🌍 Europa</strong><span class="vvPer7">7,434 Bio. Valu</span></div>
          <div><strong>🌎 Nordamerika</strong><span class="vvPer7">7,434 Bio. Valu</span></div>
          <div><strong>🌎 Südamerika</strong><span class="vvPer7">7,434 Bio. Valu</span></div>
          <div><strong>🌏 Australien/Ozeanien</strong><span class="vvPer7">7,434 Bio. Valu</span></div>
          <div><strong>❄️ Antarktika / globale Aufgaben</strong><span class="vvPer7">7,434 Bio. Valu</span></div>
        </div>
        <div class="hint" id="vvSevenSub"></div>`;
    }

    results.innerHTML=`
      <div class="result"><span id="vvMonthlyLabel"></span><b id="basicMonthly">1.500 Valu</b></div>
      <div class="result"><span id="vvYearlyLabel"></span><b id="basicYearly">18.000 Valu</b></div>
      <div class="result"><span id="vvAnnualNeedLabel"></span><b id="annualNeed">0,14796 Billiarden Valu</b></div>
      <div class="result"><span id="vvSourceLabel"></span><b>2,0 Billiarden USD</b></div>
      <div class="result vv-result-highlight"><span id="vvPoolResultLabel"></span><b id="vvPoolResult">200,00 Bio. Valu</b></div>
      <div class="result vv-result-highlight"><span id="vvRestResultLabel"></span><b id="vvRestResult">52,04 Bio. Valu</b></div>
      <div class="result vv-result-highlight"><span id="vvPer7ResultLabel"></span><b id="vvPer7Result">7,434 Bio. Valu</b></div>
      <div class="result vv-result-tax"><span id="vvTaxLabel"></span><b id="vvTaxValue"></b></div>
      <span id="activeBase" hidden></span><span id="activeDeduction" hidden></span>`;

    function budgetRow(id,pct){return `<div class="vv-budget-row"><div><strong id="vv-${id}-label"></strong><small id="vv-${id}-hint"></small><input id="vv-${id}" type="range" min="0" max="80" step="1" value="${pct}"></div><b id="vv-${id}-pct">${pct} %</b><span id="vv-${id}-global"></span><span id="vv-${id}-continent"></span></div>`}

    traffic.classList.add('vv-budget-traffic');
    traffic.innerHTML=`
      <div aria-label="Deckungsampel" class="traffic-light"><span class="lamp red" id="lampRed"></span><span class="lamp yellow" id="lampYellow"></span><span class="lamp green" id="lampGreen"></span></div>
      <div class="traffic-copy"><strong id="trafficHeadline"></strong><span id="trafficText"></span><small id="vvTrafficScale"></small></div>
      <div class="vv-budget-panel">
        <div class="vv-budget-title" id="vvDistTitle"></div>
        <div class="vv-budget-head"><span></span><b>%</b><b id="vvGlobalHead"></b><b id="vvContinentHead"></b></div>
        ${budgetRow('public',40)}${budgetRow('agri',25)}${budgetRow('health',20)}${budgetRow('education',10)}
        <div class="vv-budget-row vv-reserve-row"><div><strong id="vvReserveLabel"></strong></div><b id="vv-reserve-pct">5 %</b><span id="vv-reserve-global"></span><span id="vv-reserve-continent"></span></div>
        <div class="vv-effect"><strong id="vvEffectTitle"></strong><span id="vvEffectText"></span></div>
        <div class="vv-budget-note" id="vvBudgetNote"></div>
      </div>`;

    const style=document.createElement('style');
    style.id='vv-neuberechnung-style';
    style.textContent=`
      #rechner .vv-new-hero{display:grid;place-items:center;min-height:82px;border:1px solid #c8dfd5;border-radius:14px;background:#edf8f2;color:#0f5a46;font-size:clamp(1.8rem,3vw,2.5rem);font-weight:950}
      #rechner .vv-new-mini{margin-top:10px;padding:10px 12px;border-radius:12px;background:#fff8e7;color:#6d6449;font-size:.85rem}
      #rechner .vv-new-flow{display:grid;gap:8px;margin-top:10px}#rechner .vv-new-flow>div{display:grid;grid-template-columns:1fr auto;gap:10px;padding:10px 12px;border:1px solid #dce6e0;border-radius:12px;background:#fff}#rechner .vv-new-flow span{color:#66746f;font-size:.85rem}#rechner .vv-new-flow b{color:#0f5a46;font-variant-numeric:tabular-nums}#rechner .vv-new-flow .rest{background:#eaf7ef;border-color:#a7d7b8}#rechner .vv-new-flow .rest b{color:#08713f}
      #rechner .vv-seven-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:10px}#rechner .vv-seven-grid>div{padding:10px 11px;border:1px solid #dce6e0;border-radius:12px;background:#fff}#rechner .vv-seven-grid strong{display:block;color:#0f5a46;font-size:.84rem}#rechner .vv-seven-grid span{display:block;margin-top:3px;color:#9b6a00;font-weight:900;font-size:.9rem}
      #rechner .vv-result-highlight{background:#0b6b3a!important}#rechner .vv-result-highlight span{color:#d7eadf!important}#rechner .vv-result-highlight b{color:#ffd25f!important}#rechner .vv-result-tax{background:#fff8e7!important;border:1px solid #ead9a7!important}#rechner .vv-result-tax b{color:#0f5a46!important;font-size:1rem!important;line-height:1.35}
      #trafficStatus.vv-budget-traffic{align-items:start!important}#trafficStatus .vv-budget-panel{grid-column:1/-1;width:100%;margin-top:8px;padding-top:16px;border-top:1px solid rgba(15,90,70,.16);display:grid;gap:9px}#trafficStatus .vv-budget-title{color:#0f5a46;font-size:1.1rem;font-weight:950}#trafficStatus .vv-budget-head{display:grid;grid-template-columns:minmax(0,1fr) 72px 135px 145px;gap:9px;color:#0f5a46;font-size:.76rem;text-align:right;padding:0 10px}#trafficStatus .vv-budget-row{display:grid;grid-template-columns:minmax(300px,1fr) 72px 135px 145px;gap:9px;align-items:center;padding:10px 11px;border:1px solid rgba(15,90,70,.14);border-radius:13px;background:rgba(255,255,255,.78)}#trafficStatus .vv-budget-row>div{display:grid;gap:3px}#trafficStatus .vv-budget-row strong{color:#0f5a46}#trafficStatus .vv-budget-row small{color:#66746f;line-height:1.35}#trafficStatus .vv-budget-row input{width:100%;accent-color:#0f5a46;margin-top:3px}#trafficStatus .vv-budget-row>b,#trafficStatus .vv-budget-row>span{text-align:right;color:#0f5a46;font-weight:900;font-variant-numeric:tabular-nums}#trafficStatus .vv-reserve-row{background:#fff8e7;border-color:#ead9a7}#trafficStatus .vv-effect{display:grid;gap:4px;padding:13px 15px;border-left:5px solid #c99a2e;border-radius:0 13px 13px 0;background:#fffaf0}#trafficStatus .vv-effect strong{color:#0f5a46}#trafficStatus .vv-effect span{color:#53615d;line-height:1.5}#trafficStatus .vv-budget-note{padding:11px 13px;border-radius:11px;background:rgba(255,255,255,.62);color:#66746f;font-size:.8rem;line-height:1.45}
      @media(max-width:850px){#rechner .vv-seven-grid{grid-template-columns:1fr}#trafficStatus .vv-budget-head{display:none}#trafficStatus .vv-budget-row{grid-template-columns:1fr 70px}#trafficStatus .vv-budget-row>span{grid-column:1/-1;text-align:left;font-size:.82rem}}
    `;
    document.head.appendChild(style);

    function labels(){
      const c=t[lang()];
      if(intro)intro.textContent=c.intro;
      set('vvNewPoolTitle',c.poolTitle);set('vvNewPoolSub',c.poolSub);set('vvNewFlowTitle',c.remaining);set('vvModelFlowLabel',c.modelFlow);set('vvTenPercentLabel',c.tenPercent);set('vvAnnualBasicLabel',c.annualBasic);set('vvRemainingLabel',c.remaining);set('vvSevenTitle',c.splitTitle);set('vvSevenSub',c.splitSub);
      set('vvMonthlyLabel',c.monthly);set('vvYearlyLabel',c.yearly);set('vvAnnualNeedLabel',c.annualNeed);set('vvSourceLabel',c.source);set('vvPoolResultLabel',c.pool);set('vvRestResultLabel',c.rest);set('vvPer7ResultLabel',c.per7);set('vvTaxLabel',c.tax);set('vvTaxValue',c.taxValue);
      set('vvDistTitle',c.distribute);set('vvGlobalHead',c.global);set('vvContinentHead',c.continent);set('vv-public-label',c.public);set('vv-public-hint',c.publicHint);set('vv-agri-label',c.agri);set('vv-agri-hint',c.agriHint);set('vv-health-label',c.health);set('vv-health-hint',c.healthHint);set('vv-education-label',c.education);set('vv-education-hint',c.educationHint);set('vvReserveLabel',c.reserve);set('vvEffectTitle',c.effect);set('vvEffectText',c.effectText);set('vvBudgetNote',c.note);
    }

    function calculate(){
      const people=value('peopleExact');
      const basic=value('basicExact');
      const annual=people*basic*12;
      const pool=2e15*0.10;
      const remaining=pool-annual;
      const per7=remaining>0?remaining/7:0;
      const annualQuadrillion=annual/1e15;

      set('basicMonthly',fmt(basic,0)+' Valu');set('basicYearly',fmt(basic*12,0)+' Valu');set('annualNeed',fmt(annualQuadrillion,5)+(lang()==='en'?' quadrillion Valu':lang()==='es'?' mil billones Valu':' Billiarden Valu'));
      set('vvNewPoolHero',bio(pool,2));set('vvPoolValue',bio(pool,2));set('vvAnnualBasicValue',bio(annual,2));set('vvRemainingValue',remaining>=0?bio(remaining,2):'- '+bio(Math.abs(remaining),2));set('vvNewFlowRestTop',remaining>=0?bio(remaining,2):'- '+bio(Math.abs(remaining),2));set('vvPoolResult',bio(pool,2));set('vvRestResult',remaining>=0?bio(remaining,2):'- '+bio(Math.abs(remaining),2));set('vvPer7Result',remaining>=0?bio(per7,3):'—');
      section.querySelectorAll('.vvPer7').forEach(el=>el.textContent=remaining>=0?bio(per7,3):'—');

      const ids=['public','agri','health','education'];
      const shares=ids.map(id=>value('vv-'+id));
      const used=shares.reduce((a,b)=>a+b,0);
      const reserve=100-used;
      ids.forEach((id,i)=>{set('vv-'+id+'-pct',shares[i]+' %');set('vv-'+id+'-global',remaining>=0?bio(remaining*shares[i]/100,3):'—');set('vv-'+id+'-continent',remaining>=0?bio(per7*shares[i]/100,3):'—')});
      set('vv-reserve-pct',reserve+' %');set('vv-reserve-global',remaining>=0&&reserve>=0?bio(remaining*reserve/100,3):'—');set('vv-reserve-continent',remaining>=0&&reserve>=0?bio(per7*reserve/100,3):'—');

      const c=t[lang()];
      traffic.classList.remove('dark-green');
      if(remaining<0||reserve<0){traffic.dataset.state='red';set('trafficHeadline',c.red);set('trafficText',c.redText);traffic.style.background='#fff0ef';traffic.style.borderColor='#efb0aa';}
      else if(reserve<5){traffic.dataset.state='yellow';set('trafficHeadline',c.yellow);set('trafficText',c.yellowText);traffic.style.background='#fff8df';traffic.style.borderColor='#e9d17f';}
      else{traffic.dataset.state='green';traffic.classList.add('dark-green');set('trafficHeadline',c.green);set('trafficText',c.greenText);traffic.style.background='';traffic.style.borderColor='';}
      set('vvTrafficScale',c.scale);
      labels();
    }

    ['people','peopleExact','basic','basicExact','vv-public','vv-agri','vv-health','vv-education'].forEach(id=>{const e=document.getElementById(id);if(e){e.addEventListener('input',()=>setTimeout(calculate,0));e.addEventListener('change',()=>setTimeout(calculate,0));}});
    document.querySelectorAll('.vv-lang button[data-lang]').forEach(b=>b.addEventListener('click',()=>setTimeout(calculate,30)));
    new MutationObserver(()=>setTimeout(calculate,0)).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
    calculate();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();