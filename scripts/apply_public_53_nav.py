from pathlib import Path

PAGES = [
("01", "index.html", "Startseite", False),
("02", "02_Registrieren.html", "Registrierung", False),
("03", "03_Verifizierung.html", "Verifizierung", True),
("04", "04_Anmelden.html", "Anmelden", True),
("05", "05_Wallet.html", "Mein Wallet", True),
("06", "06_Modell_Gemeinschaftsmodell.html", "Gemeinschaftsmodell", True),
("07", "07_Grundeinkommen.html", "Grundeinkommen", True),
("08", "08_Gemeinschaftsbeitrag.html", "Gemeinschaftsbeitrag", True),
("09", "09_Taetigkeit_Nachweis.html", "Tätigkeit & Nachweis", True),
("10", "10_Transparenz_Berechnung.html", "Transparenz & Berechnung", True),
("11", "11_Datenbasis_Quellen.html", "Datenbasis & Quellen", True),
("12", "12_Haeufige_Fragen.html", "Häufige Fragen", True),
("13", "13_Einbindung_bestehender_Werte.html", "Einbindung bestehender Werte", True),
("14", "14_Gemeinschaftsunterstuetzung.html", "Gemeinschaft & Unterstützung", True),
("15", "15_Taetigkeiten_Angebote.html", "Tätigkeiten & Angebote", True),
("16", "16_Gemeinschafts_Chat.html", "Gemeinschafts-Chat", True),
("17", "17_Termine_Reservierungen.html", "Termine & Reservierungen", True),
("18", "18_Veranstaltungen_Kalender.html", "Veranstaltungen & Kalender", True),
("19", "19_Suche_Regionen.html", "Suche & Regionen", True),
("20", "20_Meldungen_Moderation.html", "Meldungen & Moderation", True),
("21", "21_Marktplatz_Unternehmen.html", "Marktplatz & Unternehmen", True),
("22", "22_Shop.html", "Shop", True),
("23", "23_Firmenpraesentationen.html", "Firmenpräsentation", True),
("24", "24_Bestellung_Versand_Herkunft.html", "Bestellung, Versand & Herkunft", True),
("25", "25_Zahlung_Abwicklung.html", "Zahlung & Abwicklung", True),
("26", "26_Bewertungen_Beschwerden.html", "Bewertungen & Beschwerden", True),
("27", "27_Therapeuten_Pflege_Gesundheit.html", "Therapeuten, Pflege & Gesundheit", True),
("28", "28_Gastronomie_Vereine_Bauern.html", "Gastronomie, Vereine & Bauern", True),
("29", "29_Medienuebersicht.html", "Medienübersicht", True),
("30", "30_Videokanal.html", "Videokanal", True),
("31", "31_Projektkanal.html", "Projektkanal", True),
("32", "32_Medienarchiv.html", "Medienarchiv", True),
("33", "33_Forschung_Bildung.html", "Forschung & Bildung", True),
("34", "34_Dezentrale_Architektur.html", "Dezentrale Architektur", True),
("35", "35_Unveraenderbare_Grundstruktur.html", "Unveränderbare Grundstruktur", True),
("36", "36_Systemintegritaet.html", "Systemintegrität", True),
("37", "37_Knoten_Netzwerk.html", "Knoten & Netzwerk", True),
("38", "38_Transparenz_Pruefbarkeit.html", "Transparenz & Prüfbarkeit", True),
("39", "39_Finanzkreislaeufe_im_Vergleich.html", "Finanzkreisläufe", True),
("40", "40_Ueber_das_Projekt.html", "Über das Projekt", True),
("41", "41_Kontakt.html", "Kontakt", True),
("42", "42_Nutzungsregeln.html", "Nutzungsregeln", True),
("43", "43_Regeln_Rahmen.html", "Regeln & Rahmen", True),
("44", "44_Datenschutz.html", "Datenschutz", True),
("45", "45_Sicherheit_Datenschutz.html", "Sicherheit & Datenschutz", True),
("46", "46_Impressum.html", "Impressum", True),
("47", "47_Rechtliche_Hinweise.html", "Rechtliche Hinweise", True),
("48", "48_Sitemap.html", "Sitemap", True),
("49", "49_Globales_APT_Steuermodell.html", "APT-Steuermodell", True),
("50", "50_Heutiges_System_im_Vergleich.html", "Heutiges System", True),
("51", "51_APT_Modell_Auswirkungen.html", "APT-Auswirkungen", True),
("52", "52_Vom_Tempel_zum_digitalen_Geldstrom.html", "Digitaler Geldstrom", True),
("53", "53_Globales_Voting.html", "Globales Voting", False),
]

CSS = '''
/* VALUVENTUM public 53-page navigation */
.vv-all-pages{padding:18px 0 20px;background:linear-gradient(180deg,#f7fbf9,#fff);border-bottom:1px solid var(--line,#dce6e0)}
.vv-all-wrap{width:min(1180px,92%);margin:auto}.vv-all-title{display:flex;align-items:center;gap:10px;margin-bottom:12px;color:var(--green,#0f5a46);font-size:.8rem;font-weight:900;letter-spacing:.11em;text-transform:uppercase}.vv-all-title:before{content:"";width:30px;height:3px;border-radius:99px;background:var(--gold,#c99a2e)}
.vv-all-links{display:flex;flex-wrap:wrap;gap:9px}.vv-all-link{display:inline-flex;align-items:center;gap:7px;padding:9px 12px;border:1px solid var(--line,#dce6e0);border-radius:999px;background:#fff;color:var(--green,#0f5a46);font-size:.83rem;font-weight:850;box-shadow:0 5px 14px rgba(15,90,70,.04);transition:transform .18s ease,border-color .18s ease,background .18s ease;text-decoration:none}.vv-all-link b{display:grid;place-items:center;min-width:24px;height:24px;padding:0 6px;border-radius:999px;background:var(--green,#0f5a46);color:#fff;font-size:.74rem}.vv-all-link:hover,.vv-all-link:focus-visible{transform:translateY(-2px);border-color:var(--gold,#c99a2e);background:var(--cream,#fffaf0);outline:none}
.vv-back-row{width:min(1180px,92%);margin:16px auto 0}.vv-back-btn{display:inline-flex;align-items:center;gap:7px;padding:9px 13px;border:1px solid var(--line,#dce6e0);border-radius:999px;background:#fff;color:var(--green,#0f5a46);font-size:.84rem;font-weight:900;box-shadow:0 5px 14px rgba(15,90,70,.04);text-decoration:none}.vv-back-btn:hover,.vv-back-btn:focus-visible{border-color:var(--gold,#c99a2e);background:var(--cream,#fffaf0);outline:none}
@media(max-width:700px){.vv-all-links{gap:7px}.vv-all-link{font-size:.76rem;padding:7px 9px}.vv-all-link b{min-width:21px;height:21px}}
'''

def nav_html(back=False):
    items=[]
    for num, filename, label, locked in PAGES:
        lock='🔒 ' if locked else ''
        items.append(f'<a class="vv-all-link" href="./{filename}"><b>{num}</b>{lock}{label}</a>')
    back_html = '<div class="vv-back-row"><a class="vv-back-btn" href="./index.html#seiten-01-53" onclick="if(history.length>1){history.back();return false;}">← Zurück</a></div>\n' if back else ''
    return back_html + '<nav class="vv-all-pages" id="seiten-01-53" aria-label="Alle 53 VALUVENTUM Seiten"><div class="vv-all-wrap"><div class="vv-all-title">Alle Seiten 01–53</div><div class="vv-all-links">'+''.join(items)+'</div></div></nav>\n'

def inject(path, back=False):
    p=Path(path)
    s=p.read_text(encoding='utf-8')
    if 'id="seiten-01-53"' in s:
        return False
    pos=s.find('</style>')
    if pos<0: raise RuntimeError(f'No </style> in {path}')
    s=s[:pos]+CSS+s[pos:]
    header_end=s.find('</header>')
    if header_end<0: raise RuntimeError(f'No </header> in {path}')
    header_end += len('</header>')
    # On index place 53-page navigation after existing 1–8 anchor navigation.
    if path=='index.html':
        marker='</nav>'
        start=s.find('id="uebersicht"')
        end=s.find(marker,start)
        if start>=0 and end>=0:
            header_end=end+len(marker)
    s=s[:header_end]+'\n'+nav_html(back)+s[header_end:]
    p.write_text(s,encoding='utf-8')
    return True

changed=[]
for path,back in [('index.html',False),('53_Globales_Voting.html',True)]:
    if inject(path,back): changed.append(path)
print('updated:', ', '.join(changed) if changed else 'nothing')
