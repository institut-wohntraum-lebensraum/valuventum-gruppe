(function(){
  'use strict';

  function init(){
    const section=document.getElementById('rechner');
    if(!section)return;

    const oldExtra=document.getElementById('vv-budget-distribution');
    if(oldExtra)oldExtra.remove();

    const results=section.querySelector('.results');
    if(!results)return;

    if(!document.getElementById('vv-old-pool')){
      const cards=[
        ['vv-old-pool','poolLabel'],
        ['vv-old-remaining','remainingLabel'],
        ['vv-old-per7','per7Label'],
        ['vv-old-taxgoal','taxGoalLabel']
      ];
      cards.forEach(([id,key])=>{
        const card=document.createElement('div');
        card.className='result';
        card.setAttribute('data-vv-old-adapt','1');
        card.innerHTML='<span data-vv-label="'+key+'"></span><b id="'+id+'"></b>';
        results.appendChild(card);
      });

      const note=document.createElement('div');
      note.id='vv-old-structure-note';
      note.className='hint';
      note.setAttribute('data-vv-old-adapt','1');
      note.style.gridColumn='1 / -1';
      note.style.marginTop='4px';
      results.appendChild(note);
    }

    const copy={
      de:{
        poolLabel:'10-%-Modelltopf aus dem globalen Zahlungsfluss',
        remainingLabel:'Nach dem Grundeinkommen verbleibend',
        per7Label:'Bei 7 gleichen Kontinent-/Globalanteilen',
        taxGoalLabel:'Modellziel bei ausreichender Gesamtdeckung',
        taxGoal:'0 % Einkommen · 0 % Produkt/MwSt',
        note:'Die neuen Werte sind direkt in den bestehenden Rechner eingebaut. 2,0 Billiarden USD bleiben der externe McKinsey-Quellenanker. Die daraus abgeleiteten Valu-Beträge sind eine VALUVENTUM®-Szenariorechnung und keine Aussage von McKinsey.',
        unit:' Bio. Valu',
        deficit:'Unterdeckung'
      },
      en:{
        poolLabel:'10% model pool from the global payment flow',
        remainingLabel:'Remaining after basic income',
        per7Label:'With 7 equal continent/global shares',
        taxGoalLabel:'Model target if total coverage is sufficient',
        taxGoal:'0% income · 0% product/VAT',
        note:'The new values are integrated directly into the existing calculator. USD 2.0 quadrillion remains the external McKinsey source anchor. The derived Valu amounts are a VALUVENTUM® scenario calculation, not a statement by McKinsey.',
        unit:' tn Valu',
        deficit:'Shortfall'
      },
      es:{
        poolLabel:'Fondo modelo del 10 % a partir del flujo mundial de pagos',
        remainingLabel:'Restante después de la renta básica',
        per7Label:'Con 7 partes iguales continentales/globales',
        taxGoalLabel:'Objetivo del modelo si la cobertura total es suficiente',
        taxGoal:'0 % renta · 0 % producto/IVA',
        note:'Los nuevos valores están integrados directamente en la calculadora existente. Los 2,0 mil billones USD siguen siendo la referencia externa de McKinsey. Los importes Valu derivados son un cálculo de escenario VALUVENTUM®, no una afirmación de McKinsey.',
        unit:' billones Valu',
        deficit:'Déficit'
      }
    };

    function language(){
      const lang=(document.documentElement.lang||'de').toLowerCase();
      return lang.startsWith('en')?'en':lang.startsWith('es')?'es':'de';
    }

    function locale(){return language()==='de'?'de-DE':language()==='es'?'es-ES':'en-US';}

    function fmt(value,digits){
      return Number(value).toLocaleString(locale(),{minimumFractionDigits:digits,maximumFractionDigits:digits});
    }

    function recalc(){
      const peopleEl=document.getElementById('peopleExact');
      const basicEl=document.getElementById('basicExact');
      if(!peopleEl||!basicEl)return;

      const people=Number(peopleEl.value)||0;
      const basic=Number(basicEl.value)||0;
      const annualNeed=people*basic*12;
      const scenarioPool=2e15*0.10;
      const remaining=scenarioPool-annualNeed;
      const per7=remaining>0?remaining/7:0;
      const c=copy[language()];

      section.querySelectorAll('[data-vv-label]').forEach(el=>{
        const key=el.getAttribute('data-vv-label');
        if(c[key])el.textContent=c[key];
      });

      const pool=document.getElementById('vv-old-pool');
      const rest=document.getElementById('vv-old-remaining');
      const share=document.getElementById('vv-old-per7');
      const tax=document.getElementById('vv-old-taxgoal');
      const note=document.getElementById('vv-old-structure-note');

      if(pool)pool.textContent=fmt(scenarioPool/1e12,2)+c.unit;
      if(rest){
        rest.textContent=(remaining>=0?fmt(remaining/1e12,2)+c.unit:c.deficit+' '+fmt(Math.abs(remaining)/1e12,2)+c.unit);
        rest.style.color=remaining>=0?'':'#b83b31';
      }
      if(share)share.textContent=remaining>=0?fmt(per7/1e12,3)+c.unit:'—';
      if(tax)tax.textContent=c.taxGoal;
      if(note)note.textContent=c.note;
    }

    ['people','peopleExact','basic','basicExact','active','activeExact'].forEach(id=>{
      const el=document.getElementById(id);
      if(el){
        el.addEventListener('input',()=>requestAnimationFrame(recalc));
        el.addEventListener('change',()=>requestAnimationFrame(recalc));
      }
    });

    const langObserver=new MutationObserver(recalc);
    langObserver.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});

    document.querySelectorAll('.vv-lang button[data-lang]').forEach(btn=>{
      btn.addEventListener('click',()=>setTimeout(recalc,0));
    });

    recalc();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
