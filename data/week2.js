window.LESSONS = window.LESSONS || [];
window.LESSONS.push(
/* ===================== TAG 8 ===================== */
{
  day: 8,
  title: "Wie spät ist es?",
  en: "Telling the time, days of the week, making a date",
  goals: [
    "ask and tell the time, officially (13:25) and in everyday speech (halb zwei)",
    "say the days of the week and the parts of the day",
    "use <b>um</b> for clock times and <b>am</b> for days",
    "arrange to meet someone"
  ],
  warmup: {
    items: [
      ["Say: 15, 45, 300, 1000.", "fünfzehn, fünfundvierzig, dreihundert, tausend"],
      ["I have a brother and no sister.", "Ich habe einen Bruder und keine Schwester."],
      ["Your email address, aloud.", "… Punkt … at … Punkt …"],
      ["Is that your husband? (formal)", "Ist das Ihr Mann?"]
    ]
  },
  dialogue: {
    title: "Ein Termin",
    scene: "Mei phones Jonas. Then, in the street, Omar asks a stranger for the time.",
    lines: [
      ["Mei", "Hallo Jonas, hier ist Mei. Hast du am Samstag Zeit?", "Hi Jonas, it's Mei. Do you have time on Saturday?"],
      ["Jonas", "Am Samstag? Ja. Wann?", "On Saturday? Yes. When?"],
      ["Mei", "Um drei? Wir gehen ins Café.", "At three? We'll go to a café."],
      ["Jonas", "Um drei ist gut. Oder um halb drei?", "Three is good. Or half past two?"],
      ["Mei", "Okay, dann um halb drei. Bis Samstag!", "Okay, half past two then. See you Saturday!"],
      ["Jonas", "Bis Samstag! Tschüss.", "See you Saturday! Bye."],
      ["", "Auf der Straße", "In the street"],
      ["Omar", "Entschuldigung, wie spät ist es?", "Excuse me, what time is it?"],
      ["Frau", "Es ist Viertel nach neun.", "It's a quarter past nine."],
      ["Omar", "Danke schön!", "Thank you!"],
      ["Frau", "Bitte schön.", "You're welcome."]
    ]
  },
  vocab: [
    ["Wie spät ist es? / Wie viel Uhr ist es?", "What time is it?"],
    ["Es ist … Uhr.", "It is … o'clock."],
    ["die Uhr", "die Uhren", "clock, watch; o'clock"],
    ["die Stunde", "die Stunden", "hour"],
    ["die Minute", "die Minuten", "minute"],
    ["halb", "half (halb drei = 2:30)"],
    ["Viertel nach / Viertel vor", "quarter past / quarter to"],
    ["nach / vor", "past / to (in clock times)"],
    ["um", "at (um 8 Uhr)"],
    ["am", "on (am Montag), in (am Morgen)"],
    ["von … bis", "from … to"],
    ["der Montag, Dienstag, Mittwoch", "Monday, Tuesday, Wednesday"],
    ["der Donnerstag, Freitag, Samstag, Sonntag", "Thursday, Friday, Saturday, Sunday"],
    ["das Wochenende", "die Wochenenden", "weekend"],
    ["der Morgen / der Vormittag", "morning / late morning"],
    ["der Mittag / der Nachmittag", "midday / afternoon"],
    ["der Abend / die Nacht", "evening / night"],
    ["der Tag", "die Tage", "day"],
    ["die Woche", "die Wochen", "week"],
    ["heute / morgen / gestern", "today / tomorrow / yesterday"],
    ["früh / spät", "early / late"],
    ["der Termin", "die Termine", "appointment"],
    ["Zeit haben", "to have time, to be free"],
    ["gehen", "to go"],
    ["ins Café / ins Kino", "to the café / to the cinema"],
    ["Entschuldigung!", "Excuse me! Sorry!"],
    ["dann", "then"],
    ["okay", "okay"]
  ],
  grammar: [
    { h: "Official time: the 24-hour clock",
      body: "<p>Used at stations, on TV, in offices and on every appointment card. Say the hour, <i>Uhr</i>, then the minutes.</p><div class='scroll'><table class='tbl'><tr><td>8:00</td><td>acht Uhr</td><td>13:25</td><td>dreizehn Uhr fünfundzwanzig</td></tr><tr><td>9:30</td><td>neun Uhr dreißig</td><td>19:45</td><td>neunzehn Uhr fünfundvierzig</td></tr><tr><td>0:15</td><td>null Uhr fünfzehn</td><td>23:05</td><td>dreiundzwanzig Uhr fünf</td></tr></table></div><div class='controls'><button class='say' type='button' data-say='acht Uhr. Dreizehn Uhr fünfundzwanzig. Neunzehn Uhr fünfundvierzig.' aria-label='Listen'><svg><use href='#i-speaker'/></svg></button><span class='note'>8:00 · 13:25 · 19:45</span></div>" },
    { h: "Everyday time: the 12-hour clock and the halb trap",
      body: "<div class='scroll'><table class='tbl'><tr><th>Time</th><th>Everyday German</th><th>Think</th></tr><tr><td>9:00</td><td>neun (Uhr)</td><td></td></tr><tr><td>9:05</td><td>fünf <b>nach</b> neun</td><td>five past nine</td></tr><tr><td>9:15</td><td><b>Viertel nach</b> neun</td><td>quarter past nine</td></tr><tr><td>9:20</td><td>zwanzig nach neun</td><td>twenty past nine</td></tr><tr><td>9:30</td><td><b>halb zehn</b></td><td>half <b>of the way to ten</b></td></tr><tr><td>9:40</td><td>zwanzig <b>vor</b> zehn</td><td>twenty to ten</td></tr><tr><td>9:45</td><td><b>Viertel vor</b> zehn</td><td>quarter to ten</td></tr><tr><td>9:55</td><td>fünf vor zehn</td><td>five to ten</td></tr></table></div><div class='rule'><b>halb drei = 2:30</b>, not 3:30. Germans count the half hour towards the <i>next</i> hour. Get this wrong and you arrive an hour late.</div><div class='controls'><button class='say' type='button' data-say='Viertel nach neun. Halb zehn. Viertel vor zehn.' aria-label='Listen'><svg><use href='#i-speaker'/></svg></button><span class='note'>9:15 · 9:30 · 9:45</span></div>" },
    { h: "um, am, von … bis, and the verb in position 2",
      body: "<ul><li><b>um</b> + clock time: <i>um acht Uhr, um halb drei</i></li><li><b>am</b> + day or part of the day: <i>am Montag, am Morgen, am Abend, am Wochenende</i> (exception: <i>in der Nacht</i>)</li><li><b>von … bis</b>: <i>von 9 bis 17 Uhr</i></li><li>Question: <i>Wann?</i> → <i>Um … / Am …</i></li></ul><p>If you start a sentence with the time, the verb still stays in position 2 and the subject moves behind it: <i>Am Samstag <b>gehe</b> ich ins Café. Um drei <b>habe</b> ich Zeit.</i></p><p>Watch the two <i>morgen</i>: <i>morgen</i> (lowercase) = tomorrow; <i>der Morgen</i> = the morning. Tomorrow morning is <i>morgen früh</i>.</p>" }
  ],
  practice: [
    { h: "A. Everyday time", items: [
      ["7:00", "sieben Uhr"], ["7:15", "Viertel nach sieben"], ["7:30", "halb acht"], ["7:45", "Viertel vor acht"], ["8:10", "zehn nach acht"], ["8:50", "zehn vor neun"], ["2:30", "halb drei"]
    ]},
    { h: "B. Official time", items: [
      ["14:30", "vierzehn Uhr dreißig"], ["19:45", "neunzehn Uhr fünfundvierzig"], ["0:15", "null Uhr fünfzehn"], ["23:05", "dreiundzwanzig Uhr fünf"], ["16:20", "sechzehn Uhr zwanzig"]
    ]},
    { h: "C. um, am, von … bis", items: [
      ["___ Montag arbeite ich.", "<b>Am</b> Montag arbeite ich."],
      ["Der Kurs beginnt ___ 9 Uhr.", "Der Kurs beginnt <b>um</b> 9 Uhr."],
      ["Ich arbeite ___ 8 ___ 16 Uhr.", "Ich arbeite <b>von</b> 8 <b>bis</b> 16 Uhr."],
      ["___ Wochenende habe ich Zeit.", "<b>Am</b> Wochenende habe ich Zeit."],
      ["___ Abend lerne ich Deutsch.", "<b>Am</b> Abend lerne ich Deutsch."],
      ["Wir gehen ___ halb acht ins Kino.", "Wir gehen <b>um</b> halb acht ins Kino."]
    ]},
    { h: "D. Word order", items: [
      ["am / ich / Freitag / Zeit / habe", "Am Freitag habe ich Zeit."],
      ["Kurs / beginnt / um / der / neun", "Der Kurs beginnt um neun."],
      ["wann / du / hast / Zeit / ?", "Wann hast du Zeit?"],
      ["um drei / gehen / ins Café / wir", "Um drei gehen wir ins Café."]
    ]}
  ],
  speak: "<p>Say your week for three days: <i>Am Montag arbeite ich von … bis … Am Abend … Am Samstag …</i> Then ask <i>Wie spät ist es?</i> and answer with the real time, first officially, then in everyday form.</p>",
  cando: [
    "tell the time both ways",
    "say the days of the week and parts of the day",
    "use um and am correctly",
    "arrange a time to meet"
  ],
  tip: { h: "Pünktlichkeit",
    body: "<p>The cliché is true: for appointments, arrive five minutes early. Being ten minutes late without a message counts as rude, and a doctor's practice may give your slot away. If you are running late, a short call or text (<i>Ich komme 10 Minuten später</i>) fixes almost everything. For private invitations, up to 15 minutes late is fine; earlier than the stated time is not. And remember: <i>halb drei</i> is 2:30.</p>" }
},

/* ===================== TAG 9 ===================== */
{
  day: 9,
  title: "Mein Tag",
  en: "Daily routine: separable verbs and vowel-changing verbs",
  goals: [
    "describe your day from getting up to going to bed",
    "use separable verbs: aufstehen, einkaufen, fernsehen, anrufen",
    "use verbs that change their vowel: essen, schlafen, fahren, lesen, sehen, nehmen",
    "order events with zuerst, dann, danach"
  ],
  warmup: {
    items: [
      ["Everyday time: 6:30, 8:45, 12:00, 18:15", "halb sieben, Viertel vor neun, zwölf (Uhr), Viertel nach sechs"],
      ["On Monday I have time. (start with Am Montag)", "Am Montag habe ich Zeit."],
      ["At what time does the course start?", "Um wie viel Uhr beginnt der Kurs? / Wann beginnt der Kurs?"],
      ["Excuse me, what time is it?", "Entschuldigung, wie spät ist es?"]
    ]
  },
  dialogue: {
    title: "Omars Tag",
    scene: "Lucía asks Omar about his working day.",
    lines: [
      ["Lucía", "Omar, wann stehst du auf?", "Omar, when do you get up?"],
      ["Omar", "Ich stehe um sechs Uhr auf. Dann dusche ich und frühstücke.", "I get up at six. Then I shower and have breakfast."],
      ["Lucía", "Und dann?", "And then?"],
      ["Omar", "Um sieben fahre ich zur Arbeit. Das Restaurant macht um elf auf.", "At seven I go to work. The restaurant opens at eleven."],
      ["Lucía", "Wie lange arbeitest du?", "How long do you work?"],
      ["Omar", "Bis 16 Uhr. Ich koche, koche, koche.", "Until 4 pm. I cook, cook, cook."],
      ["Lucía", "Und am Abend?", "And in the evening?"],
      ["Omar", "Am Abend kaufe ich ein, dann koche ich zu Hause. Ich sehe ein bisschen fern und lese.", "In the evening I shop, then I cook at home. I watch a bit of TV and read."],
      ["Lucía", "Und wann lernst du Deutsch?", "And when do you learn German?"],
      ["Omar", "Jeden Tag dreißig Minuten. Im Bus!", "Thirty minutes every day. On the bus!"],
      ["Lucía", "Und wann schläfst du?", "And when do you sleep?"],
      ["Omar", "Um elf gehe ich ins Bett. Ich schlafe sofort.", "At eleven I go to bed. I fall asleep immediately."]
    ]
  },
  vocab: [
    ["aufstehen (ich stehe … auf)", "to get up"],
    ["anfangen (er fängt … an)", "to begin, to start"],
    ["aufmachen / zumachen", "to open / to close"],
    ["einkaufen (ich kaufe … ein)", "to shop, to buy groceries"],
    ["fernsehen (er sieht … fern)", "to watch TV"],
    ["anrufen (ich rufe … an)", "to phone, to call"],
    ["mitkommen", "to come along"],
    ["duschen", "to shower"],
    ["frühstücken / das Frühstück", "to have breakfast / breakfast"],
    ["kochen", "to cook"],
    ["essen (du isst, er isst)", "to eat"],
    ["trinken", "to drink"],
    ["schlafen (du schläfst, er schläft)", "to sleep"],
    ["fahren (du fährst, er fährt)", "to go (by vehicle), to drive"],
    ["lesen (du liest, er liest)", "to read"],
    ["sehen (du siehst, er sieht)", "to see"],
    ["nehmen (du nimmst, er nimmt)", "to take"],
    ["treffen (du triffst, er trifft)", "to meet"],
    ["die Arbeit / zur Arbeit", "work / to work (going there)"],
    ["zu Hause / nach Hause", "at home / (going) home"],
    ["ins Bett gehen", "to go to bed"],
    ["das Mittagessen / das Abendessen", "lunch / dinner"],
    ["jeden Tag", "every day"],
    ["zuerst / dann / danach", "first / then / after that"],
    ["sofort", "immediately"],
    ["das Restaurant", "die Restaurants", "restaurant"],
    ["der Bus", "die Busse", "bus"]
  ],
  grammar: [
    { h: "Separable verbs: the prefix goes to the end",
      body: "<p>Many verbs are made of a prefix plus a verb: <i>auf|stehen, ein|kaufen, fern|sehen, an|rufen</i>. In a sentence the verb part is conjugated in position 2 and the prefix goes <b>to the very end</b>.</p><div class='scroll'><table class='tbl'><tr><th>Infinitive</th><th>Sentence</th></tr><tr><td>auf|stehen</td><td>Ich <b>stehe</b> um sechs Uhr <b>auf</b>.</td></tr><tr><td>ein|kaufen</td><td>Am Abend <b>kaufe</b> ich <b>ein</b>.</td></tr><tr><td>fern|sehen</td><td>Er <b>sieht</b> ein bisschen <b>fern</b>.</td></tr><tr><td>an|rufen</td><td>Wann <b>rufst</b> du Mei <b>an</b>?</td></tr><tr><td>an|fangen</td><td>Der Kurs <b>fängt</b> um neun <b>an</b>.</td></tr></table></div><p>Common separable prefixes: <b>an-, auf-, aus-, ein-, mit-, ab-, zu-, zurück-, fern-</b>. In speech the prefix carries the stress: <i>AUFstehen</i>. In this book separable verbs are shown with a bar in the verb list.</p>" },
    { h: "Verbs that change their vowel (only du and er/sie/es)",
      body: "<p>A group of common verbs changes the stem vowel in the <b>du</b> and <b>er/sie/es</b> forms only. Everything else is regular.</p><div class='scroll'><table class='tbl'><tr><th>Change</th><th>Verbs</th><th>du</th><th>er / sie / es</th></tr><tr><td class='k'>e → i</td><td>essen, sprechen, nehmen, treffen, geben, helfen</td><td>isst, sprichst, nimmst, triffst, gibst, hilfst</td><td>isst, spricht, nimmt, trifft, gibt, hilft</td></tr><tr><td class='k'>e → ie</td><td>lesen, sehen, fernsehen</td><td>liest, siehst</td><td>liest, sieht … fern</td></tr><tr><td class='k'>a → ä</td><td>fahren, schlafen, anfangen, waschen</td><td>fährst, schläfst, fängst an</td><td>fährt, schläft, fängt an</td></tr><tr><td class='k'>au → äu</td><td>laufen</td><td>läufst</td><td>läuft</td></tr></table></div><p><i>ihr</i> and <i>wir</i> never change: <i>ihr esst, wir fahren</i>. Order your day with <b>zuerst … dann … danach</b>: <i>Zuerst dusche ich, dann frühstücke ich, danach fahre ich zur Arbeit.</i></p>" }
  ],
  practice: [
    { h: "A. Build the sentence (prefix at the end)", items: [
      ["ich / aufstehen / um 7", "Ich stehe um 7 auf."],
      ["Omar / einkaufen / am Abend", "Omar kauft am Abend ein."],
      ["wir / fernsehen / am Wochenende", "Wir sehen am Wochenende fern."],
      ["wann / du / anrufen / Mei / ?", "Wann rufst du Mei an?"],
      ["der Kurs / anfangen / um 9", "Der Kurs fängt um 9 an."],
      ["du / mitkommen / ?", "Kommst du mit?"]
    ]},
    { h: "B. Vowel changes", items: [
      ["du (schlafen)", "du schläfst"], ["er (essen)", "er isst"], ["sie – she (lesen)", "sie liest"], ["du (fahren)", "du fährst"],
      ["er (sehen)", "er sieht"], ["du (nehmen)", "du nimmst"], ["ihr (sprechen)", "ihr sprecht (no change!)"], ["wir (essen)", "wir essen"]
    ]},
    { h: "C. Say it in German", items: [
      ["She gets up at half past six.", "Sie steht um halb sieben auf."],
      ["What do you (du) eat for breakfast?", "Was isst du zum Frühstück?"],
      ["He watches TV in the evening.", "Er sieht am Abend fern."],
      ["I go to bed at eleven.", "Ich gehe um elf ins Bett."],
      ["First I shower, then I have breakfast.", "Zuerst dusche ich, dann frühstücke ich."]
    ]}
  ],
  speak: "<p>Describe your own day in six sentences with <i>zuerst, dann, danach</i>, at least two separable verbs and one vowel-changing verb. Say it aloud, then write it down.</p><p><i>Ich stehe um … auf. Zuerst … Dann fahre ich … Am Abend … Um … gehe ich ins Bett.</i></p>",
  cando: [
    "describe my daily routine",
    "put the prefix of a separable verb at the end",
    "use essen, schlafen, fahren, lesen, sehen, nehmen correctly",
    "order events with zuerst, dann, danach"
  ],
  tip: { h: "Mahlzeit! German meals",
    body: "<p><i>Frühstück</i> is bread or rolls with cheese, cold cuts or jam. <i>Mittagessen</i> was traditionally the warm meal of the day, and in many workplaces and schools it still is; at noon colleagues greet each other with <i>Mahlzeit!</i>. The evening meal is often <i>Abendbrot</i>: bread, cheese, sausage, a cold meal around 6 or 7 pm. Restaurants serve later, but kitchens in small towns can close by 9 pm.</p>" }
},

/* ===================== TAG 10 ===================== */
{
  day: 10,
  title: "Im Café bestellen",
  en: "Food and drink, ordering, möchten and mögen, prices",
  goals: [
    "order food and drink politely and ask for the bill",
    "use <b>möchten</b> (would like) and <b>mögen</b> (to like)",
    "say prices in euros and cents",
    "name common foods and drinks"
  ],
  warmup: {
    items: [
      ["du forms: essen, schlafen, lesen, fahren", "du isst, du schläfst, du liest, du fährst"],
      ["I get up at seven and shop in the evening.", "Ich stehe um sieben auf und kaufe am Abend ein."],
      ["Prices aloud: 2,30 € and 15,99 €", "zwei Euro dreißig; fünfzehn Euro neunundneunzig"],
      ["When does the course start? – At half past eight.", "Wann fängt der Kurs an? – Um halb neun."]
    ]
  },
  dialogue: {
    title: "Im Café",
    scene: "Lucía and Mei order at a café in Kreuzberg, then pay.",
    lines: [
      ["Kellner", "Guten Tag! Was möchten Sie?", "Good afternoon! What would you like?"],
      ["Lucía", "Ich möchte einen Kaffee, bitte. Und ein Stück Apfelkuchen.", "I'd like a coffee, please. And a piece of apple cake."],
      ["Kellner", "Gern. Und Sie?", "Of course. And you?"],
      ["Mei", "Ich hätte gern einen Tee mit Milch. Und ein Wasser, bitte.", "I'd like a tea with milk. And a water, please."],
      ["Kellner", "Mit oder ohne Kohlensäure?", "Sparkling or still?"],
      ["Mei", "Ohne, bitte.", "Still, please."],
      ["Kellner", "Kommt sofort.", "Coming right up."],
      ["", "Später", "Later"],
      ["Lucía", "Entschuldigung, wir möchten zahlen, bitte.", "Excuse me, we'd like to pay, please."],
      ["Kellner", "Zusammen oder getrennt?", "Together or separately?"],
      ["Lucía", "Getrennt, bitte.", "Separately, please."],
      ["Kellner", "Der Kaffee und der Kuchen: das macht sechs Euro achtzig.", "The coffee and the cake: that's six euros eighty."],
      ["Lucía", "Sieben Euro, bitte. Stimmt so.", "Seven euros, please. Keep the change."],
      ["Kellner", "Vielen Dank!", "Thank you very much!"]
    ]
  },
  vocab: [
    ["der Kaffee / der Tee", "coffee / tea"],
    ["das Wasser (mit / ohne Kohlensäure)", "water (sparkling / still)"],
    ["die Milch / der Zucker", "milk / sugar"],
    ["der Saft", "die Säfte", "juice"],
    ["das Bier / der Wein", "beer / wine"],
    ["das Brot", "die Brote", "bread"],
    ["das Brötchen", "die Brötchen", "bread roll"],
    ["der Kuchen", "die Kuchen", "cake"],
    ["das Stück", "die Stücke", "piece"],
    ["die Suppe", "die Suppen", "soup"],
    ["der Salat", "die Salate", "salad"],
    ["das Fleisch / der Fisch", "meat / fish"],
    ["die Kartoffel", "die Kartoffeln", "potato"],
    ["der Reis / die Nudeln", "rice / pasta, noodles"],
    ["das Ei", "die Eier", "egg"],
    ["der Käse / die Wurst", "cheese / sausage, cold cuts"],
    ["das Gemüse / das Obst", "vegetables / fruit"],
    ["der Apfel", "die Äpfel", "apple"],
    ["die Speisekarte", "die Speisekarten", "menu"],
    ["die Rechnung", "die Rechnungen", "bill"],
    ["bestellen / zahlen (bezahlen)", "to order / to pay"],
    ["Ich möchte … / Ich hätte gern …", "I would like …"],
    ["Was möchten Sie?", "What would you like?"],
    ["mit / ohne", "with / without"],
    ["zusammen / getrennt", "together / separately"],
    ["Das macht … Euro.", "That comes to … euros."],
    ["Stimmt so.", "Keep the change."],
    ["lecker", "delicious, tasty"],
    ["der Kellner / die Kellnerin", "waiter / waitress"],
    ["etwas", "something"]
  ],
  grammar: [
    { h: "möchten (would like) and mögen (to like)",
      body: "<div class='scroll'><table class='tbl'><tr><th></th><th>möchten<br><small>would like</small></th><th>mögen<br><small>like</small></th></tr><tr><td class='k'>ich</td><td>möchte</td><td>mag</td></tr><tr><td class='k'>du</td><td>möchtest</td><td>magst</td></tr><tr><td class='k'>er / sie / es</td><td>möchte</td><td>mag</td></tr><tr><td class='k'>wir</td><td>möchten</td><td>mögen</td></tr><tr><td class='k'>ihr</td><td>möchtet</td><td>mögt</td></tr><tr><td class='k'>sie / Sie</td><td>möchten</td><td>mögen</td></tr></table></div><p><b>möchten</b> is for ordering and wishes: <i>Ich möchte einen Kaffee.</i> <b>mögen</b> is for general likes: <i>Ich mag Kaffee. Magst du Fisch?</i> Note the <i>ich</i> and <i>er</i> forms are identical and have no ending. What you order is the object, so masculine takes <b>einen</b>: <i>einen Kaffee, einen Tee, einen Salat</i>; but <i>eine Cola, eine Suppe, ein Wasser, ein Bier</i>.</p><p><b>Ich hätte gern …</b> is a fixed, extra-polite way to order. Use it at counters and in shops too.</p>" },
    { h: "Prices and paying",
      body: "<ul><li>6,80 € = <i>sechs Euro achtzig</i>; 0,90 € = <i>neunzig Cent</i>; 12,00 € = <i>zwölf Euro</i>.</li><li>Ask: <i>Was kostet der Kuchen? Wie viel kostet das?</i> Answer: <i>Der Kuchen kostet 3,50 €. Das macht 6,80 €.</i></li><li>Tipping: you do not leave coins on the table. When the waiter names the total, say the amount you want to pay including the tip (<i>Sieben Euro, bitte</i>) or say <i>Stimmt so</i> (keep the change). Five to ten percent is normal.</li><li>Food with no article uses <b>kein</b> for negation: <i>Ich esse kein Fleisch. Ich trinke keinen Kaffee.</i></li></ul>" }
  ],
  practice: [
    { h: "A. möchten or mögen", items: [
      ["Ich ___ (möchten) einen Tee.", "Ich <b>möchte</b> einen Tee."],
      ["___ (mögen) du Kuchen?", "<b>Magst</b> du Kuchen?"],
      ["Wir ___ (möchten) zahlen, bitte.", "Wir <b>möchten</b> zahlen, bitte."],
      ["Er ___ (mögen) keinen Fisch.", "Er <b>mag</b> keinen Fisch."],
      ["Was ___ (möchten) Sie?", "Was <b>möchten</b> Sie?"],
      ["Ihr ___ (mögen) Pizza, oder?", "Ihr <b>mögt</b> Pizza, oder?"]
    ]},
    { h: "B. einen, eine or ein", items: [
      ["Ich möchte ___ Kaffee.", "Ich möchte <b>einen</b> Kaffee."],
      ["Ich hätte gern ___ Cola.", "Ich hätte gern <b>eine</b> Cola."],
      ["Wir nehmen ___ Salat und ___ Suppe.", "Wir nehmen <b>einen</b> Salat und <b>eine</b> Suppe."],
      ["Ich möchte ___ Brötchen mit Käse.", "Ich möchte <b>ein</b> Brötchen mit Käse."],
      ["Er trinkt ___ Bier.", "Er trinkt <b>ein</b> Bier."]
    ]},
    { h: "C. Prices aloud", items: [
      ["3,50 €", "drei Euro fünfzig"], ["12,99 €", "zwölf Euro neunundneunzig"], ["0,75 €", "fünfundsiebzig Cent"], ["24,00 €", "vierundzwanzig Euro"], ["8,20 €", "acht Euro zwanzig"]
    ]},
    { h: "D. In the café", items: [
      ["I would like a coffee with milk, please.", "Ich möchte einen Kaffee mit Milch, bitte."],
      ["The bill, please. / We'd like to pay.", "Die Rechnung, bitte. / Wir möchten zahlen."],
      ["Together or separately?", "Zusammen oder getrennt?"],
      ["I don't eat meat.", "Ich esse kein Fleisch."],
      ["What does the cake cost?", "Was kostet der Kuchen?"],
      ["Keep the change.", "Stimmt so."]
    ]}
  ],
  speak: "<p>Play both roles: order a drink, a main dish and a dessert, ask for the bill, and pay with a tip. Then swap: you are the waiter and ask <i>Was möchten Sie? Mit oder ohne …? Zusammen oder getrennt?</i></p>",
  cando: [
    "order in a café or restaurant",
    "say what I like and don't like to eat",
    "ask for and pay the bill, with a tip",
    "say prices"
  ],
  tip: { h: "Café rules",
    body: "<p>In most cafés and restaurants you seat yourself; wait to be seated only if a sign says <i>Bitte warten Sie, Sie werden platziert</i>. The waiter will not bring the bill until you ask. Tap water is not served automatically; order <i>Leitungswasser</i> or bottled water, and expect to pay for the bottle. Many smaller places take only cash (<i>nur Bargeld</i>), so keep some. Bread on the table at a restaurant is sometimes charged.</p>" }
},

/* ===================== TAG 11 ===================== */
{
  day: 11,
  title: "Einkaufen",
  en: "Shopping for food, quantities, den / die / das, es gibt",
  goals: [
    "buy food at a market or supermarket and ask for prices",
    "use quantities: ein Kilo, eine Flasche, ein Stück",
    "use the accusative with the definite article: den, die, das",
    "say what there is with <b>es gibt</b>"
  ],
  warmup: {
    items: [
      ["I'd like a tea and a piece of cake.", "Ich möchte einen Tee und ein Stück Kuchen."],
      ["Do you like fish? – No, I don't like fish.", "Magst du Fisch? – Nein, ich mag keinen Fisch."],
      ["9,60 € aloud", "neun Euro sechzig"],
      ["Together or separately? – Separately, please.", "Zusammen oder getrennt? – Getrennt, bitte."]
    ]
  },
  dialogue: {
    title: "Auf dem Markt",
    scene: "Saturday morning. Omar buys vegetables and cheese at the weekly market.",
    lines: [
      ["Verkäufer", "Guten Morgen! Was darf es sein?", "Good morning! What can I get you?"],
      ["Omar", "Ich hätte gern ein Kilo Tomaten und einen Salat.", "I'd like a kilo of tomatoes and a lettuce."],
      ["Verkäufer", "Gern. Sonst noch etwas?", "Certainly. Anything else?"],
      ["Omar", "Ja, 500 Gramm Käse. Was kostet der Käse?", "Yes, 500 grams of cheese. How much is the cheese?"],
      ["Verkäufer", "Zwei Euro zwanzig pro hundert Gramm.", "Two euros twenty per hundred grams."],
      ["Omar", "Gut. Und haben Sie auch Brot?", "Good. And do you have bread too?"],
      ["Verkäufer", "Nein, Brot gibt es beim Bäcker, da drüben.", "No, bread is at the baker's, over there."],
      ["Omar", "Okay, dann ist das alles.", "Okay, then that's all."],
      ["Verkäufer", "Das macht dreizehn Euro vierzig.", "That's thirteen euros forty."],
      ["Omar", "Fünfzehn Euro, bitte.", "Fifteen euros, please."],
      ["Verkäufer", "Und ein Euro sechzig zurück. Schönen Tag noch!", "And one euro sixty change. Have a nice day!"],
      ["Omar", "Danke, gleichfalls!", "Thanks, you too!"]
    ]
  },
  vocab: [
    ["der Supermarkt", "die Supermärkte", "supermarket"],
    ["der Markt", "die Märkte", "market"],
    ["der Bäcker / die Bäckerei", "baker / bakery"],
    ["der Verkäufer / die Verkäuferin", "shop assistant, seller"],
    ["kaufen / einkaufen", "to buy / to shop"],
    ["brauchen", "to need"],
    ["das Kilo / das Gramm / der Liter", "kilo / gram / litre"],
    ["die Flasche", "die Flaschen", "bottle"],
    ["die Packung", "die Packungen", "packet"],
    ["die Dose", "die Dosen", "can, tin"],
    ["die Tomate", "die Tomaten", "tomato"],
    ["die Zwiebel", "die Zwiebeln", "onion"],
    ["die Banane / die Orange", "banana / orange"],
    ["die Butter / das Öl", "butter / oil"],
    ["der Joghurt / die Schokolade", "yoghurt / chocolate"],
    ["das Mehl / der Zucker / das Salz", "flour / sugar / salt"],
    ["die Kasse", "die Kassen", "checkout, till"],
    ["die Tüte", "die Tüten", "bag (plastic or paper)"],
    ["teuer / billig / günstig", "expensive / cheap / good value"],
    ["frisch", "fresh"],
    ["Was darf es sein?", "What can I get you?"],
    ["Sonst noch etwas?", "Anything else?"],
    ["Das ist alles.", "That's all."],
    ["Schönen Tag noch! – Danke, gleichfalls!", "Have a nice day! – Thanks, you too!"],
    ["es gibt", "there is / there are"],
    ["da drüben", "over there"],
    ["zurück", "back (change: … zurück)"],
    ["pro", "per"]
  ],
  grammar: [
    { h: "The accusative with der, die, das",
      body: "<p>You met it with <i>einen</i> on Tag 6. The definite article does the same: only the masculine changes.</p><div class='scroll'><table class='tbl'><tr><th></th><th>masculine</th><th>feminine</th><th>neuter</th><th>plural</th></tr><tr><td class='k'>subject</td><td>der Käse</td><td>die Butter</td><td>das Brot</td><td>die Tomaten</td></tr><tr><td class='k'>object</td><td><b>den</b> Käse</td><td>die Butter</td><td>das Brot</td><td>die Tomaten</td></tr></table></div><p><i>Ich kaufe <b>den</b> Käse, <b>die</b> Butter, <b>das</b> Brot und <b>die</b> Tomaten.</i></p><p>Verbs whose object takes the accusative include: haben, kaufen, brauchen, essen, trinken, nehmen, möchten, suchen, finden, sehen, lesen, kochen, bestellen. Almost every verb with a direct object, in fact.</p>" },
    { h: "es gibt and quantities",
      body: "<p><b>es gibt</b> (there is / there are) is followed by the accusative: <i>Es gibt <b>einen</b> Markt. Gibt es hier <b>einen</b> Supermarkt? Es gibt <b>kein</b> Brot.</i></p><p>Quantities stand directly before the noun, with no word for \"of\":</p><ul><li><i>ein Kilo Tomaten, 500 Gramm Käse, ein Liter Milch</i></li><li><i>eine Flasche Wasser, zwei Flaschen Wein</i></li><li><i>eine Packung Nudeln, eine Dose Tomaten, ein Stück Kuchen</i></li></ul><p>Ask prices with <i>Was kostet …?</i> for one thing and <i>Was kosten …?</i> for several: <i>Was kosten die Äpfel?</i></p>" }
  ],
  practice: [
    { h: "A. den, die or das", items: [
      ["Ich kaufe ___ Salat.", "Ich kaufe <b>den</b> Salat."],
      ["Ich nehme ___ Butter.", "Ich nehme <b>die</b> Butter."],
      ["Brauchst du ___ Brot?", "Brauchst du <b>das</b> Brot?"],
      ["Wir essen ___ Kuchen.", "Wir essen <b>den</b> Kuchen."],
      ["Siehst du ___ Verkäufer?", "Siehst du <b>den</b> Verkäufer?"],
      ["Ich brauche ___ Tomaten.", "Ich brauche <b>die</b> Tomaten."]
    ]},
    { h: "B. Write the shopping list in German", items: [
      ["1 kg potatoes", "ein Kilo Kartoffeln"], ["2 bottles of water", "zwei Flaschen Wasser"], ["200 g cheese", "zweihundert Gramm Käse"],
      ["1 packet of pasta", "eine Packung Nudeln"], ["6 eggs", "sechs Eier"], ["1 litre of milk", "ein Liter Milch"]
    ]},
    { h: "C. es gibt", items: [
      ["Is there a supermarket here?", "Gibt es hier einen Supermarkt?"],
      ["There is a market on Saturday.", "Am Samstag gibt es einen Markt."],
      ["There is no bread.", "Es gibt kein Brot."],
      ["Is there fresh fish?", "Gibt es frischen Fisch? (or simply: Gibt es Fisch?)"]
    ]},
    { h: "D. At the market", items: [
      ["Anything else? – No, that's all.", "Sonst noch etwas? – Nein, das ist alles."],
      ["How much is the cheese?", "Was kostet der Käse?"],
      ["I need a kilo of apples and a lettuce.", "Ich brauche ein Kilo Äpfel und einen Salat."],
      ["Have a nice day! – Thanks, you too!", "Schönen Tag noch! – Danke, gleichfalls!"]
    ]}
  ],
  speak: "<p>Write your real shopping list for this week in German, with quantities and the right article where you use one. Read it aloud. Then act out buying three of the items at a market stall.</p>",
  cando: [
    "buy food and ask prices",
    "say quantities",
    "use den, die, das for the object of a sentence",
    "say what there is and isn't with es gibt"
  ],
  tip: { h: "Pfand, Tüten and Sundays",
    body: "<p>Bring your own bag; shops charge for <i>Tüten</i>. Most bottles and cans carry a deposit (<i>Pfand</i>, 8 to 25 cents) that you get back at the machine by the entrance; keep the receipt and hand it in at the till. In some supermarkets you weigh loose fruit yourself and print a sticker. Cashiers scan fast and you pack fast; have your card or cash ready. And plan ahead: almost all shops are closed on Sundays.</p>" }
},

/* ===================== TAG 12 ===================== */
{
  day: 12,
  title: "Freizeit und Hobbys",
  en: "Free time, likes with gern, how often, invitations",
  goals: [
    "talk about hobbies and free time",
    "say what you like doing with <b>gern</b>, <b>lieber</b>, <b>am liebsten</b>",
    "say how often: immer, oft, manchmal, selten, nie",
    "invite someone and accept or decline"
  ],
  warmup: {
    items: [
      ["I buy the cheese, the milk and the bread.", "Ich kaufe den Käse, die Milch und das Brot."],
      ["Is there a market here? – Yes, on Saturday.", "Gibt es hier einen Markt? – Ja, am Samstag."],
      ["a bottle of water; two kilos of apples", "eine Flasche Wasser; zwei Kilo Äpfel"],
      ["That's all. Have a nice day!", "Das ist alles. Schönen Tag noch!"]
    ]
  },
  dialogue: {
    title: "Was machst du gern?",
    scene: "Jonas and Mei chat about their weekends.",
    lines: [
      ["Jonas", "Was machst du am Wochenende gern, Mei?", "What do you like doing at the weekend, Mei?"],
      ["Mei", "Ich spiele gern Tennis und ich lese gern. Und du?", "I like playing tennis and I like reading. And you?"],
      ["Jonas", "Ich spiele Fußball. Und ich koche sehr gern.", "I play football. And I really like cooking."],
      ["Mei", "Kochst du oft?", "Do you cook often?"],
      ["Jonas", "Ja, fast jeden Tag. Ich gehe nicht gern ins Restaurant. Zu teuer!", "Yes, almost every day. I don't like going to restaurants. Too expensive!"],
      ["Mei", "Hörst du gern Musik?", "Do you like listening to music?"],
      ["Jonas", "Ja, sehr gern! Ich spiele auch Gitarre. Und ich gehe gern ins Kino. Kommst du am Freitag mit?", "Yes, very much! I also play the guitar. And I like going to the cinema. Are you coming along on Friday?"],
      ["Mei", "Ins Kino? Ja, gern! Was läuft?", "To the cinema? Yes, I'd love to! What's on?"],
      ["Jonas", "Ein Film aus Frankreich.", "A film from France."],
      ["Mei", "Super. Bis Freitag!", "Great. See you Friday!"]
    ]
  },
  vocab: [
    ["die Freizeit", "free time"],
    ["das Hobby", "die Hobbys", "hobby"],
    ["spielen (Fußball, Tennis, Gitarre, Klavier)", "to play (football, tennis, guitar, piano)"],
    ["Musik hören", "to listen to music"],
    ["tanzen / singen", "to dance / to sing"],
    ["schwimmen / wandern", "to swim / to hike"],
    ["joggen / laufen", "to jog / to run, to walk"],
    ["Rad fahren / das Fahrrad", "to cycle / bicycle"],
    ["reisen / fotografieren / malen", "to travel / to take photos / to paint"],
    ["Sport machen / der Sport", "to do sport / sport"],
    ["ins Kino gehen / der Film", "to go to the cinema / film"],
    ["ins Theater / ins Museum / ins Schwimmbad", "to the theatre / museum / swimming pool"],
    ["in den Park / in die Stadt", "to the park / into town"],
    ["gern / nicht gern", "gladly (= like doing) / don't like doing"],
    ["lieber / am liebsten", "rather (= prefer) / most of all"],
    ["immer / oft / manchmal", "always / often / sometimes"],
    ["selten / nie", "rarely / never"],
    ["sehr", "very"],
    ["zu (zu teuer)", "too (too expensive)"],
    ["mitkommen", "to come along"],
    ["Was läuft?", "What's on? (cinema)"],
    ["Ja, gern! / Nein, leider nicht.", "Yes, I'd love to! / No, unfortunately not."],
    ["Super! / Toll!", "Great!"]
  ],
  grammar: [
    { h: "gern: liking to do something",
      body: "<p>German has no verb \"to like doing\". You take the activity and add <b>gern</b> after the verb.</p><p><i>Ich spiele <b>gern</b> Tennis.</i> = I like playing tennis.<br><i>Ich koche <b>nicht gern</b>.</i> = I don't like cooking.<br><i>Kochst du <b>gern</b>?</i> = Do you like cooking?</p><p>To compare: <b>gern → lieber → am liebsten</b>:<br><i>Ich trinke gern Tee, lieber Kaffee und am liebsten Wasser.</i> (I like tea, I prefer coffee, and I like water most of all.)</p>" },
    { h: "How often, and where you go",
      body: "<p>Frequency words go after the verb, or in position 1 for emphasis (verb still second):</p><div class='scroll'><table class='tbl'><tr><td>immer</td><td>always</td><td rowspan='5'><i>Ich koche <b>oft</b>. <b>Manchmal</b> gehe ich ins Kino. Ich sehe <b>nie</b> fern. Er spielt <b>jeden Tag</b> Fußball.</i></td></tr><tr><td>oft</td><td>often</td></tr><tr><td>manchmal</td><td>sometimes</td></tr><tr><td>selten</td><td>rarely</td></tr><tr><td>nie</td><td>never</td></tr></table></div><p>Going somewhere uses <b>in</b> + accusative. With <i>das</i> it contracts to <b>ins</b>: <i>ins Kino, ins Theater, ins Museum, ins Schwimmbad, ins Restaurant, ins Café</i>. Masculine and feminine keep their article: <i>in den Park, in die Stadt, in die Disco</i>.</p><p>Invitation: <i>Kommst du mit? Hast du Lust?</i> Answers: <i>Ja, gern! / Nein, leider nicht, ich habe keine Zeit.</i></p>" }
  ],
  practice: [
    { h: "A. Sentences with gern", items: [
      ["ich / Fußball spielen", "Ich spiele gern Fußball."],
      ["Mei / lesen / nicht", "Mei liest nicht gern."],
      ["wir / Musik hören", "Wir hören gern Musik."],
      ["du / kochen / ?", "Kochst du gern?"],
      ["Sie (formal) / reisen / ?", "Reisen Sie gern?"]
    ]},
    { h: "B. How often", items: [
      ["I never watch TV.", "Ich sehe nie fern."],
      ["She often goes to the cinema.", "Sie geht oft ins Kino."],
      ["We sometimes play tennis.", "Wir spielen manchmal Tennis. / Manchmal spielen wir Tennis."],
      ["He rarely cooks.", "Er kocht selten."],
      ["I always drink coffee in the morning.", "Ich trinke am Morgen immer Kaffee. / Am Morgen trinke ich immer Kaffee."]
    ]},
    { h: "C. gern, lieber, am liebsten", items: [
      ["Ich trinke ___ Tee, ___ Kaffee und ___ Wasser.", "Ich trinke <b>gern</b> Tee, <b>lieber</b> Kaffee und <b>am liebsten</b> Wasser."],
      ["Do you prefer tennis or football?", "Spielst du lieber Tennis oder Fußball?"],
      ["I like the cinema best of all.", "Am liebsten gehe ich ins Kino."]
    ]},
    { h: "D. ins, in den, in die", items: [
      ["Wir gehen ___ Kino.", "Wir gehen <b>ins</b> Kino."],
      ["Ich gehe ___ Park.", "Ich gehe <b>in den</b> Park."],
      ["Gehst du ___ Stadt?", "Gehst du <b>in die</b> Stadt?"],
      ["Are you coming along to the cinema? – Yes, gladly! / No, unfortunately not, I have no time.", "Kommst du mit ins Kino? – Ja, gern! / Nein, leider nicht, ich habe keine Zeit."]
    ]}
  ],
  speak: "<p>Talk about three hobbies with <i>gern, lieber, am liebsten</i> and a frequency word for each: <i>Ich spiele gern … Das mache ich oft. Lieber …</i> Then invite an imaginary friend to the cinema on Friday and answer as the friend, once yes and once no.</p>",
  cando: [
    "talk about my hobbies",
    "say what I like, prefer and like best",
    "say how often I do something",
    "invite someone and answer an invitation"
  ],
  tip: { h: "Der Verein",
    body: "<p>German social life runs through clubs (<i>Vereine</i>): sports clubs, choirs, hiking groups, volunteer fire brigades, allotment gardens. Membership usually costs 10 to 30 euros a month. Joining a <i>Sportverein</i> or a choir is the fastest way to meet Germans and to hear everyday German every week. Look for <i>Verein</i> plus your town, or ask at the <i>Rathaus</i>.</p>" }
},

/* ===================== TAG 13 ===================== */
{
  day: 13,
  title: "Können, müssen, wollen",
  en: "Modal verbs and the sentence bracket",
  goals: [
    "say what you can, must and want to do",
    "conjugate können, müssen, wollen and möchten",
    "put the second verb at the end of the sentence (the bracket)",
    "ask for help and say you don't understand"
  ],
  warmup: {
    items: [
      ["I like cooking, but I don't like shopping.", "Ich koche gern, aber ich kaufe nicht gern ein."],
      ["We often go to the cinema.", "Wir gehen oft ins Kino."],
      ["I prefer tea. I like water best.", "Ich trinke lieber Tee. Am liebsten trinke ich Wasser."],
      ["Are you coming along? – Yes, gladly.", "Kommst du mit? – Ja, gern."]
    ]
  },
  dialogue: {
    title: "Können Sie mir helfen?",
    scene: "Omar has a form from the school office and does not understand one line.",
    lines: [
      ["Omar", "Entschuldigung, können Sie mir helfen? Ich muss ein Formular ausfüllen, aber ich verstehe das nicht.", "Excuse me, can you help me? I have to fill in a form, but I don't understand it."],
      ["Frau Klein", "Natürlich. Was verstehen Sie nicht?", "Of course. What don't you understand?"],
      ["Omar", "Hier: „Staatsangehörigkeit\". Was bedeutet das?", "Here: \"Staatsangehörigkeit\". What does that mean?"],
      ["Frau Klein", "Das ist Ihre Nationalität. Sie sind Syrer, also schreiben Sie „syrisch\".", "That is your nationality. You are Syrian, so you write \"syrisch\"."],
      ["Omar", "Ah, danke. Und muss ich hier unterschreiben?", "Ah, thanks. And do I have to sign here?"],
      ["Frau Klein", "Ja, hier unten. Und Sie müssen das Formular bis Freitag abgeben.", "Yes, down here. And you have to hand the form in by Friday."],
      ["Omar", "Kann ich das Formular auch per E-Mail schicken?", "Can I send the form by email too?"],
      ["Frau Klein", "Nein, das geht leider nicht. Aber Sie können es hier im Büro abgeben.", "No, unfortunately that doesn't work. But you can hand it in here at the office."],
      ["Omar", "Gut. Ich will den Kurs unbedingt machen. Vielen Dank für Ihre Hilfe!", "Good. I really want to do the course. Thank you very much for your help!"],
      ["Frau Klein", "Gern geschehen.", "You're welcome."]
    ]
  },
  vocab: [
    ["können", "can, to be able to"],
    ["müssen", "must, to have to"],
    ["wollen", "to want to"],
    ["helfen (er hilft)", "to help"],
    ["verstehen", "to understand"],
    ["bedeuten / Was bedeutet das?", "to mean / What does that mean?"],
    ["das Formular", "die Formulare", "form"],
    ["ausfüllen", "to fill in"],
    ["unterschreiben / die Unterschrift", "to sign / signature"],
    ["abgeben", "to hand in"],
    ["schicken", "to send"],
    ["per E-Mail / per Post", "by email / by post"],
    ["das Büro", "die Büros", "office"],
    ["die Hilfe", "help"],
    ["die Staatsangehörigkeit / die Nationalität", "nationality (on forms) / nationality"],
    ["oben / unten", "at the top / at the bottom"],
    ["also", "so, therefore (not \"also\"!)"],
    ["unbedingt", "absolutely, definitely"],
    ["Das geht (nicht).", "That works. / That's not possible."],
    ["Können Sie mir helfen?", "Can you help me?"],
    ["Ich verstehe das nicht.", "I don't understand that."],
    ["Können Sie das bitte wiederholen?", "Can you please repeat that?"],
    ["Sprechen Sie bitte langsam.", "Please speak slowly."],
    ["Was heißt … auf Deutsch?", "What is … in German?"],
    ["Gern geschehen.", "You're welcome."],
    ["leben", "to live (be alive, live one's life)"],
    ["der Traum", "die Träume", "dream"]
  ],
  grammar: [
    { h: "The modal verbs",
      body: "<p>They are irregular in the singular, and the <i>ich</i> and <i>er</i> forms are identical with no ending.</p><div class='scroll'><table class='tbl'><tr><th></th><th>können<br><small>can</small></th><th>müssen<br><small>must</small></th><th>wollen<br><small>want to</small></th><th>möchten<br><small>would like to</small></th></tr><tr><td class='k'>ich</td><td>kann</td><td>muss</td><td>will</td><td>möchte</td></tr><tr><td class='k'>du</td><td>kannst</td><td>musst</td><td>willst</td><td>möchtest</td></tr><tr><td class='k'>er / sie / es</td><td>kann</td><td>muss</td><td>will</td><td>möchte</td></tr><tr><td class='k'>wir</td><td>können</td><td>müssen</td><td>wollen</td><td>möchten</td></tr><tr><td class='k'>ihr</td><td>könnt</td><td>müsst</td><td>wollt</td><td>möchtet</td></tr><tr><td class='k'>sie / Sie</td><td>können</td><td>müssen</td><td>wollen</td><td>möchten</td></tr></table></div><p>Careful: <i>ich will</i> means \"I want\", not \"I will\". <i>wollen</i> is strong; in shops and offices say <i>Ich möchte</i>.</p>" },
    { h: "The sentence bracket (Satzklammer)",
      body: "<p>The modal verb takes position 2. The main verb goes to the <b>end</b> as an infinitive. Everything else sits between them, inside the bracket.</p><div class='scroll'><table class='tbl'><tr><th>1</th><th>2 (modal)</th><th>middle</th><th>end (infinitive)</th></tr><tr><td>Ich</td><td><b>muss</b></td><td>heute ein Formular</td><td><b>ausfüllen</b>.</td></tr><tr><td>Kannst</td><td>du</td><td>morgen</td><td><b>kommen</b>?</td></tr><tr><td>Wann</td><td><b>musst</b></td><td>du</td><td><b>arbeiten</b>?</td></tr><tr><td>Wir</td><td><b>wollen</b></td><td>am Samstag ins Kino</td><td><b>gehen</b>.</td></tr></table></div><p>Separable verbs go to the end in one piece: <i>Ich muss um 6 Uhr <b>aufstehen</b>.</i> When the main verb is obvious, drop it: <i>Ich kann Deutsch. Ich muss nach Hause. Ich möchte einen Kaffee.</i></p>" }
  ],
  practice: [
    { h: "A. Forms", items: [
      ["ich (können)", "ich kann"], ["du (müssen)", "du musst"], ["er (wollen)", "er will"], ["wir (können)", "wir können"], ["ihr (müssen)", "ihr müsst"], ["Sie (wollen)", "Sie wollen"], ["sie – she (möchten)", "sie möchte"]
    ]},
    { h: "B. Build the sentence with the bracket", items: [
      ["ich / müssen / heute / arbeiten", "Ich muss heute arbeiten."],
      ["du / können / gut / kochen / ?", "Kannst du gut kochen?"],
      ["wir / wollen / am Samstag / ins Kino gehen", "Wir wollen am Samstag ins Kino gehen."],
      ["Omar / müssen / das Formular / ausfüllen", "Omar muss das Formular ausfüllen."],
      ["wann / ihr / können / kommen / ?", "Wann könnt ihr kommen?"],
      ["ich / müssen / um 6 Uhr / aufstehen", "Ich muss um 6 Uhr aufstehen."]
    ]},
    { h: "C. können, müssen or wollen?", items: [
      ["Ich ___ nicht schwimmen. Ich lerne es.", "Ich <b>kann</b> nicht schwimmen."],
      ["Sie ___ das Formular unterschreiben. Das ist Pflicht (obligatory).", "Sie <b>müssen</b> das Formular unterschreiben."],
      ["Er ___ in Deutschland leben. Das ist sein Traum.", "Er <b>will</b> in Deutschland leben."],
      ["___ du mir helfen?", "<b>Kannst</b> du mir helfen?"],
      ["Wir ___ bis Freitag das Formular abgeben.", "Wir <b>müssen</b> bis Freitag das Formular abgeben."]
    ]},
    { h: "D. Survival phrases", items: [
      ["Can you repeat that, please?", "Können Sie das bitte wiederholen?"],
      ["What does \"Ausgang\" mean?", "Was bedeutet „Ausgang\"?"],
      ["I don't understand that.", "Ich verstehe das nicht."],
      ["Can I send the form by email?", "Kann ich das Formular per E-Mail schicken?"]
    ]}
  ],
  speak: "<p>Say three sentences about your German plan, one with each modal verb:</p><p><i>Ich will in Deutschland leben. Ich muss jeden Tag Deutsch lernen. Ich kann schon ein bisschen Deutsch sprechen.</i></p><p>Then add what you would like: <i>Ich möchte …</i></p>",
  cando: [
    "say what I can, must and want to do",
    "put the second verb at the end",
    "ask for help and ask what a word means",
    "handle a form at an office"
  ],
  tip: { h: "Directness and politeness",
    body: "<p>Germans are direct: <i>Nein, das geht nicht</i> is a normal answer, not an insult. Politeness lives in small words: <i>bitte, danke, Entschuldigung</i>, and in using <i>Sie</i> and <i>möchte</i> instead of <i>will</i>. <i>Ich will einen Kaffee</i> sounds like a demand; <i>Ich möchte einen Kaffee, bitte</i> is how it is done. When you did not understand, saying so plainly (<i>Ich verstehe das nicht, können Sie das bitte wiederholen?</i>) is respected, not judged.</p>" }
},

/* ===================== TAG 14 ===================== */
{
  day: 14,
  title: "Wiederholung: Woche 2",
  en: "Review, a visit to the bakery, mini test",
  mins: {warmup:2, dialogue:5, vocab:5, grammar:6, practice:9, speak:3},
  labels: {grammar:["Wiederholung","Review of week 2"], practice:["Mini-Test","Mini test"]},
  goals: [
    "buy bread and rolls at a German bakery",
    "review time, daily routine, ordering, shopping, hobbies and modal verbs",
    "test yourself with 15 items",
    "role-play a full shop conversation"
  ],
  warmup: {
    intro: "Quick fire, out loud.",
    items: [
      ["7:30 (everyday) · 19:45 (official)", "halb acht · neunzehn Uhr fünfundvierzig"],
      ["I get up at 6. I'd like a coffee. I can cook.", "Ich stehe um 6 auf. Ich möchte einen Kaffee. Ich kann kochen."],
      ["We have to work on Saturday.", "Wir müssen am Samstag arbeiten."]
    ]
  },
  dialogue: {
    title: "Beim Bäcker",
    scene: "Sunday morning. Mei buys breakfast at the bakery.",
    lines: [
      ["Verkäuferin", "Guten Morgen! Der Nächste, bitte. Was darf es sein?", "Good morning! Next, please. What can I get you?"],
      ["Mei", "Guten Morgen. Ich hätte gern zwei Brötchen und ein Vollkornbrot.", "Good morning. I'd like two rolls and a wholemeal loaf."],
      ["Verkäuferin", "Ein ganzes oder ein halbes?", "A whole one or a half?"],
      ["Mei", "Ein halbes, bitte.", "A half, please."],
      ["Verkäuferin", "Geschnitten?", "Sliced?"],
      ["Mei", "Ja, bitte. Und was ist das da?", "Yes, please. And what is that there?"],
      ["Verkäuferin", "Das ist eine Brezel. Sehr lecker!", "That's a pretzel. Very tasty!"],
      ["Mei", "Dann noch zwei Brezeln, bitte. Und ein Stück Käsekuchen zum Mitnehmen.", "Then two pretzels as well, please. And a piece of cheesecake to take away."],
      ["Verkäuferin", "Alles zusammen acht Euro neunzig.", "All together eight euros ninety."],
      ["Mei", "Kann ich mit Karte zahlen?", "Can I pay by card?"],
      ["Verkäuferin", "Ja, natürlich. … Danke, schönen Sonntag noch!", "Yes, of course. … Thank you, have a nice Sunday!"],
      ["Mei", "Danke, gleichfalls.", "Thanks, you too."]
    ]
  },
  vocab: [
    ["das Vollkornbrot", "wholemeal bread"],
    ["die Brezel", "die Brezeln", "pretzel"],
    ["der Käsekuchen", "cheesecake"],
    ["das Croissant", "die Croissants", "croissant"],
    ["ganz / halb", "whole / half"],
    ["geschnitten", "sliced"],
    ["zum Mitnehmen / zum Hieressen", "to take away / to eat here"],
    ["mit Karte zahlen / bar zahlen", "to pay by card / to pay cash"],
    ["das Bargeld", "cash"],
    ["Der Nächste, bitte.", "Next, please."],
    ["Alles zusammen …", "All together …"],
    ["der Kunde / die Kundin", "customer"],
    ["die Öffnungszeiten", "opening hours"],
    ["geöffnet / geschlossen", "open / closed"],
    ["noch", "still; also (dann noch zwei = then two more)"]
  ],
  grammar: [
    { h: "Week 2 on one card",
      body: "<div class='scroll'><table class='tbl'><tr><th>Topic</th><th>Remember</th></tr><tr><td class='k'>time</td><td>um 8 Uhr · am Montag · am Abend · von 9 bis 17 Uhr · halb drei = 2:30</td></tr><tr><td class='k'>separable verbs</td><td>Ich stehe um 6 <b>auf</b>. Wann rufst du <b>an</b>?</td></tr><tr><td class='k'>vowel changes (du, er)</td><td>isst, schläft, fährt, liest, sieht, nimmt, spricht</td></tr><tr><td class='k'>möchten / mögen</td><td>Ich möchte einen Kaffee. Ich mag Kaffee.</td></tr><tr><td class='k'>accusative</td><td>den / die / das · einen / eine / ein · keinen</td></tr><tr><td class='k'>es gibt</td><td>Gibt es hier einen Markt?</td></tr><tr><td class='k'>gern</td><td>gern → lieber → am liebsten · Ich koche nicht gern.</td></tr><tr><td class='k'>modal verbs</td><td>kann, muss, will, möchte + infinitive at the end</td></tr></table></div>" }
  ],
  practice: [
    { h: "Mini-Test (15 items)", note: "All fifteen first, then reveal. Twelve or more right: on to week 3. Fewer: repeat Tag 9 and Tag 13 before Tag 15.", items: [
      ["9:45 in everyday German", "Viertel vor zehn"],
      ["___ Montag habe ich Zeit.", "<b>Am</b> Montag habe ich Zeit."],
      ["Ich ___ um 7 Uhr ___ (aufstehen).", "Ich <b>stehe</b> um 7 Uhr <b>auf</b>."],
      ["Er ___ (fahren) nach Hamburg.", "Er <b>fährt</b> nach Hamburg."],
      ["Du ___ (lesen) gern.", "Du <b>liest</b> gern."],
      ["Ich möchte ___ Kaffee.", "Ich möchte <b>einen</b> Kaffee."],
      ["Ich brauche ___ Brot.", "Ich brauche <b>das</b> Brot."],
      ["Ich spiele ___ Tennis, aber ___ Fußball. (like / prefer)", "Ich spiele <b>gern</b> Tennis, aber <b>lieber</b> Fußball."],
      ["Wir ___ (können) am Freitag nicht kommen.", "Wir <b>können</b> am Freitag nicht kommen."],
      ["___ (müssen) du heute arbeiten?", "<b>Musst</b> du heute arbeiten?"],
      ["Sie (she) ___ (wollen) Deutsch lernen.", "Sie <b>will</b> Deutsch lernen."],
      ["Order: ins Kino / ich / gehen / am Samstag / möchte", "Am Samstag möchte ich ins Kino gehen. / Ich möchte am Samstag ins Kino gehen."],
      ["Together or separately?", "Zusammen oder getrennt?"],
      ["Anything else? – No, that's all.", "Sonst noch etwas? – Nein, das ist alles."],
      ["Can you help me?", "Können Sie mir helfen?"]
    ]}
  ],
  speak: "<p>Role-play the bakery dialogue with both voices. Then do it again and change the items: a whole loaf, three croissants, a coffee to take away, and pay cash. Time yourself: a real bakery conversation takes under a minute.</p>",
  cando: [
    "buy bread at a bakery and pay by card or cash",
    "everything from Tag 8 to Tag 13",
    "hold a short shop conversation from start to finish"
  ],
  tip: { h: "Three thousand kinds of bread",
    body: "<p>Germany has more than 3,000 registered types of bread and rolls, and every region names them differently: a roll is <i>Brötchen</i> in the north, <i>Semmel</i> in Bavaria and Austria, <i>Schrippe</i> in Berlin, <i>Weck</i> in the southwest. Bakeries open early, even on Sunday mornings for a few hours, which is why the Sunday bakery queue is a German ritual. Many still prefer cash; keep coins for the <i>Brötchen</i>.</p>" }
}
);
