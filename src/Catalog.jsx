import { useState } from "react";

// === ТОВАРЫ ===
const products = [
  {
    id: 19,
    nameRu: "Пластырь от холки",
    nameDe: "Pflaster gegen Nackenverspannungen",
    shortRu: "Обезболивание и восстановление мышц и суставов",
    shortDe: "Schmerzlinderung und Regeneration von Muskeln und Gelenken",
    price: "указать цену",
    article: "00000185CIA054",
    image: "https://imgur.com/SEiFrPL.png",
    fullRu: "Пластырь изготовлен на основе современных нанотехнологий, достижений китайской народной и традиционной медицин. Пластырь обладает противовоспалительным, обезболивающим, и мышечно-расслабляющим действиями, способствует восстановлению функции опорно-двигательного аппарата: лечение суставов, связок и мышц. Использование пластыря с полынью способствует улучшению микроциркуляции, снятию воспаления, улучшению венозного оттока и уменьшению застоя крови. Расслабляет мышцы и связки, улучшает местный метаболизм. Способствует восстановлению функции опорно-двигательного аппарата, уменьшению кровоподтеков при травмах мягких тканей и суставов. Состав: Картамин, Чуаньхионг, Саньци, Даньшэнь, Хуанцзин (Polygonatum), Орхидея (Dendrobium), Лонггу, Цзяогулан, Годжи, Жасмин, Танггуэй, Черная слива (ву-мэй).",
    fullDe: "Das Pflaster basiert auf modernen Nanotechnologien sowie traditioneller chinesischer Medizin. Es wirkt entzündungshemmend, schmerzlindernd und muskelentspannend und fördert die Regeneration des Bewegungsapparates: Behandlung von Gelenken, Bändern und Muskeln. Beifuß verbessert die Mikrozirkulation, lindert Entzündungen, fördert den venösen Rückfluss und reduziert Stauungen. Es entspannt Muskeln und Bänder, verbessert den lokalen Stoffwechsel. Zusammensetzung: Carthamus (Kartamin), Ligusticum (Chuanxiong), Sanqi-Kraut, Salvia miltiorrhiza (Danshen), Polygonatum (Huangjing), Dendrobium-Orchidee, Longgu, Jiaogulan, Goji, Jasmin, Danggui, Schwarze Pflaume (Wu Mei).",
    usageRu: "Наклеить на область холки на сухую и чистую кожу. Оставить на 6–12 часов. Применять курсами. Избегать попадания на открытые раны.",
    usageDe: "Auf trockene, saubere Haut im Nackenbereich kleben. 6–12 Stunden einwirken lassen. Kurenweise anwenden. Kontakt mit offenen Wunden vermeiden."
  },
  {
  id: 26,
  nameRu: "SEALUXE Глубоко увлажняющий крем с морской эссенцией 50 г",
  nameDe: "SEALUXE Tiefenfeuchtigkeitscreme mit Meeresessenz 50 g",
  shortRu: "Крем для интенсивного увлажнения и упругости кожи",
  shortDe: "Intensiv feuchtigkeitsspendende Creme für Elastizität und Frische",
  price: "указать цену",
  article: "00000000SEA026",
  image: "https://imgur.com/SoyQeDL.png",
  fullRu: "Этот глубоко увлажняющий крем обогащён полипептидами и экстрактами растений для эффективного насыщения кожи влагой. Усиливает транспортировку влаги в глубокие слои кожи, обеспечивает увлажнение каждого слоя, делает кожу более упругой, эластичной и сияющей. Состав: вода, глицерин, эфир коко-каприловой/каприновой кислоты, бутиленгликоль, кокосовое масло, полиэтиленгликоль-8, диоктиловый эфир, масло авокадо, масло макадамии, изононилизононаноат, цетиловый спирт, пальмитоилтетрапептид-7, пальмитоилтрипептид-1, гиалуронат натрия, полиакрилат натрия, алкан c18-21, тридецет-6, сополимер гидроксиэтилакрилата/акрилоилдиметилтаурата натрия, сквалан, экстракт tremella fuciformis, полисорбат-60, стеарет-21, ксантановая камедь, глицерилстеарат, β-глюкан, динатрий ЭДТА, этилгексилглицерин, феноксиэтанол, экстракт древесного яблока, экстракт листьев бамбука, хлорфенезин, каприлилгликоль, полиакриловая кислота, полисорбат-20, экстракт oldenlandia diffusa, экстракт жимолости.",
  fullDe: "Diese tief feuchtigkeitsspendende Creme ist mit Peptiden und Pflanzenextrakten angereichert, die eine intensive Durchfeuchtung der Haut fördern. Die Formel sorgt dafür, dass Feuchtigkeit in die tieferen Hautschichten transportiert wird und jede Schicht optimal hydratisiert bleibt. Die Creme macht die Haut elastischer, straffer und sichtbar frischer. Inhaltsstoffe: Wasser, Glycerin, Kokos-Caprylsäure/Caprinsäure-Ester, Butylenglykol, Kokosöl, Polyethylenglykol-8, Dioctylether, Avocadoöl, Macadamianussöl, Isononylisononanoat, Cetylalkohol, Palmitoyltetrapeptid-7, Palmitoyltripeptid-1, Natriumhyaluronat, Natriumpolyacrylat, Alkane C18-21, Trideceth-6, Hydroxyethylacrylat/Acryloyldimethyltaurat-Natrium-Copolymer, Squalan, Tremella-Fuciformis-Extrakt, Polysorbat-60, Steareth-21, Xanthan, Glycerylstearat, β-Glucan, Dinatrium-EDTA, Ethylhexylglycerin, Phenoxyethanol, Limonia-acidissima-Extrakt, Bambusblatt-Extrakt, Chlorphenesin, Caprylylglykol, Polyacrylsäure, Polysorbat-20, Oldenlandia-diffusa-Extrakt, Lonicera-caprifolium-Extrakt.",
  usageRu: "Нанесите небольшое количество крема на очищенную и тонизированную кожу лица и шеи утром и вечером. Аккуратно массируйте до полного впитывания.",
  usageDe: "Tragen Sie eine kleine Menge der Creme morgens und abends nach der Reinigung und Tonisierung auf Gesicht und Hals auf. Sanft einmassieren, bis sie vollständig eingezogen ist."
  },
  {
  id: 27,
  nameRu: "Подтягивающий крем с эффектом лифтинга (50 г)",
  nameDe: "Straffende Lifting-Creme (50 g)",
  shortRu: "Лифтинг-крем для упругости и молодости кожи",
  shortDe: "Lifting-Creme für Festigkeit und jugendliche Haut",
  price: "указать цену",
  article: "00000000LFT027",
  image: "https://imgur.com/u2yLFkM.png",
  fullRu: "Этот крем содержит эссенции и растительные экстракты для глубокого увлажнения и питания кожи, делает кожу мягкой и упругой. Ацетил гексапептид-1 стимулирует выработку коллагена, разглаживает морщины и укрепляет кожу. Полисахаридная эссенция мгновенно подтягивает кожу, улучшает удержание влаги. Крем обогащён пептидами аргинина/лизина, эссенцией персиковой камеди и ботулотоксином улитки, что обеспечивает регенерацию, защиту, разглаживание морщин, питание и восстановление. Регулярное применение делает кожу эластичной, гладкой и сияющей. Идеально подходит для вечернего ухода и восстановления кожи во время сна.",
  fullDe: "Diese Creme enthält Essenzen und Pflanzenextrakte für eine tiefe Feuchtigkeitsversorgung und Nährung der Haut. Acetylhexapeptid-1 stimuliert die Kollagenproduktion, glättet Falten und stärkt die Hautfestigkeit. Die Polysaccharid-Essenz sorgt für sofortigen Lifting-Effekt und verbessert die Feuchtigkeitsbindung. Angereichert mit Arginin/Lysin-Peptiden, Pfirsichgummi-Essenz und Schneckengift, bietet die Creme Regeneration, Schutz, Faltenglättung und intensive Pflege. Die regelmäßige Anwendung macht die Haut elastisch, glatt und strahlend. Perfekt für die nächtliche Hautpflege und Regeneration während des Schlafs.",
  usageRu: "Наносите крем на лицо и шею после очищения и тонизирования вечером. Аккуратно массируйте до полного впитывания.",
  usageDe: "Abends nach der Reinigung und Tonisierung auf Gesicht und Hals auftragen. Sanft einmassieren, bis die Creme vollständig eingezogen ist."
  },
  {
  id: 28,
  nameRu: "SEALUXE Ночной увлажняющий крем 50 г",
  nameDe: "SEALUXE Nacht-Feuchtigkeitscreme 50 g",
  shortRu: "Глубоко увлажняющий и восстанавливающий ночной крем",
  shortDe: "Tief feuchtigkeitsspendende und regenerierende Nachtcreme",
  price: "указать цену",
  article: "00000000SEA028",
  image: "https://imgur.com/L8w7JEW.png",
  fullRu: "Этот ночной крем обогащён активными ингредиентами для глубокого увлажнения, уменьшения морщин и улучшения текстуры кожи. В составе: масло ши, экстракт Caesalpinia Spinosa, олигопептид-6, экстракт почек бука, маточное молочко, церамид NP, гиалуронат натрия, экстракт босвеллии, экстракт винограда, центелла азиатская и морские водоросли. Благодаря комплексу минералов, витаминов, гиалуроновой кислоты, церамидов и натуральных экстрактов крем интенсивно питает, омолаживает, поддерживает эластичность и барьерные функции кожи. Лёгкая текстура быстро впитывается, не оставляет липкости. Приятный аромат с нотами дыни, морского бриза, цветов и мускуса. Подходит для ежедневного вечернего ухода.",
  fullDe: "Diese Nachtcreme ist mit aktiven Inhaltsstoffen angereichert und spendet intensive Feuchtigkeit, reduziert Falten und verbessert die Hautstruktur. Enthält Sheabutter, Caesalpinia Spinosa-Gummi, Oligopeptid-6, Buchenknospenextrakt, Gelée Royale, Ceramid NP, Natriumhyaluronat, Boswellia-Extrakt, Traubenextrakt, Centella Asiatica und Meeresalgen. Durch die Kombination von Mineralien, Vitaminen, Hyaluronsäure, Ceramiden und natürlichen Extrakten wird die Haut intensiv genährt, regeneriert und ihre Elastizität gefördert. Die leichte Textur zieht schnell ein, ohne zu kleben. Angenehmer Duft nach Melone, Meeresbrise, Blumen und Moschus. Ideal für die tägliche abendliche Anwendung.",
  usageRu: "Нанесите небольшое количество крема на очищенную и тонизированную кожу лица и шеи вечером. Аккуратно массируйте до полного впитывания.",
  usageDe: "Abends nach der Reinigung und Tonisierung eine kleine Menge der Creme auf Gesicht und Hals auftragen und sanft einmassieren, bis sie vollständig eingezogen ist."
  },
  {
  id: 29,
  nameRu: "SEALUXE Омолаживающий тонер (210 мл)",
  nameDe: "SEALUXE Verjüngender Toner (210 ml)",
  shortRu: "Омолаживающий и глубоко увлажняющий тонер для лица",
  shortDe: "Verjüngender und tief feuchtigkeitsspendender Gesichtstoner",
  price: "указать цену",
  article: "00000000TON029",
  image: "https://imgur.com/ayE9ir5.png",
  fullRu: "Омолаживающий тонер — это эликсир молодости для вашей кожи, сочетающий природные компоненты и инновационные технологии. Тримелла (гриб трюфель) обеспечивает глубокое увлажнение, действует как гиалуроновая кислота и защищает от свободных радикалов. Пептиды жемчуга стимулируют восстановление и повышают эластичность кожи. Эфирные масла питают кожу, а витамин Е активно борется с оксидативным стрессом. Центелла азиатская ускоряет синтез коллагена и заживление. Тонер не только ухаживает, но и активно борется с возрастными изменениями.",
  fullDe: "Das verjüngende Tonikum ist ein Elixier der Jugend für Ihre Haut, das die Kraft der Natur mit innovativer Forschung vereint. Tremella, auch als „Trüffelpilz“ bekannt, spendet intensive Feuchtigkeit, wirkt wie Hyaluronsäure und schützt vor freien Radikalen. Perlenpeptide fördern die Regeneration und unterstützen die Hautelastizität. Ätherische Öle nähren die Haut, während Vitamin E aktiv oxidativen Stress bekämpft. Centella Asiatica regt die Kollagensynthese an und beschleunigt die Heilung. Dieser Toner ist nicht nur Pflege, sondern ein effektives Mittel gegen Hautalterung.",
  usageRu: "Нанесите тонер на очищенную кожу лица и шеи с помощью ватного диска или ладонями. Используйте утром и вечером перед нанесением крема.",
  usageDe: "Tragen Sie das Tonikum morgens und abends nach der Reinigung mit einem Wattepad oder den Händen auf Gesicht und Hals auf. Anschließend Creme verwenden."
  },
  {
  id: 30,
  nameRu: "SEALUXE сыворотка с пробиотиками 40 мл",
  nameDe: "SEALUXE Probiotisches Serum 40 ml",
  shortRu: "Интенсивная сыворотка с пробиотиками для глубокого восстановления",
  shortDe: "Intensives Serum mit Probiotika zur tiefen Regeneration",
  price: "указать цену",
  article: "00000000PRB030",
  image: "https://imgur.com/ew5H3h2.png",
  fullRu: "Сыворотка обогащена концентрированными пробиотиками для интенсивного ухода за кожей. Она способствует восстановлению микробиома кожи, глубоко увлажняет, смягчает и поддерживает регенерацию. Активные компоненты: пробиотики для восстановления здоровья кожи, фильтрат ферментации соевого молока, инулин и олигосахарид α-глюкана для улучшения текстуры и увлажнения, никотинамид для повышения эластичности и сияния, а также 4D гиалуронат натрия для многоуровневого увлажнения. Подходит для всех типов кожи.",
  fullDe: "Das Serum ist mit konzentrierten Probiotika angereichert und bietet eine intensive Pflege zur Regeneration und Wiederherstellung der Haut. Probiotika stärken das natürliche Hautmikrobiom, während fermentierter Sojamilch-Filtrat die Haut mit Nährstoffen versorgt. Inulin und α-Glucan-Oligosaccharid wirken als Präbiotika und verbessern die Textur und Feuchtigkeit der Haut. Niacinamid erhöht die Elastizität und verleiht der Haut Strahlkraft. 4D-Natriumhyaluronat sorgt für langanhaltende, mehrschichtige Feuchtigkeit. Geeignet für alle Hauttypen.",
  usageRu: "Нанесите небольшое количество сыворотки на очищенную кожу лица и шеи утром и/или вечером. Аккуратно распределите до полного впитывания.",
  usageDe: "Tragen Sie eine kleine Menge des Serums morgens und/oder abends nach der Reinigung auf Gesicht und Hals auf und massieren Sie es sanft ein."
  },
  {
  id: 31,
  nameRu: "SEALUXE Интенсивно увлажняющий крем с жемчугом (30 г)",
  nameDe: "SEALUXE Intensiv feuchtigkeitsspendende Perlencreme (30 g)",
  shortRu: "Крем с жемчугом для глубокого увлажнения и сияния кожи",
  shortDe: "Perlencreme für tiefe Feuchtigkeit und strahlende Haut",
  price: "указать цену", // укажи нужную цену!
  article: "00000000PCRM031",
  image: "https://imgur.com/1qmAtWp.png",
  fullRu: "Интенсивно увлажняющий крем с жемчугом из серии SEALUXE сочетает в себе силу гидролизованного жемчуга, гиалуроновой кислоты, экстракта хризантемы и бетаина для комплексного ухода. Гидролизованный жемчуг укрепляет кожу, выравнивает тон и придает сияние, а гиалуроновая кислота увлажняет до самых глубоких слоев, сокращая морщины. Экстракт хризантемы защищает от свободных радикалов и воспалений, делая цвет лица ровным и свежим. Бетаин смягчает и увлажняет даже самую сухую или чувствительную кожу. Этот крем идеально завершает ритуал ухода, обеспечивая коже молодость, гладкость и сияние.",
  fullDe: "Die intensiv feuchtigkeitsspendende Perlencreme von SEALUXE vereint die Kraft von hydrolysiertem Perlenextrakt, Hyaluronsäure, Chrysanthemenextrakt und Betain für eine umfassende Pflege. Hydrolysiertes Perlenextrakt stärkt die Haut, gleicht den Hautton aus und verleiht Strahlkraft, während Hyaluronsäure tief hydratisiert und Falten reduziert. Chrysanthemenextrakt bietet Schutz vor freien Radikalen und Entzündungen, sorgt für einen ebenmäßigen Teint. Betain spendet Feuchtigkeit und macht auch trockene oder empfindliche Haut weich. Diese Creme ist der perfekte Abschluss der Pflege und verleiht jugendliche, glatte und strahlende Haut.",
  usageRu: "После очищения и тонизирования нанесите небольшое количество крема на кожу лица и шеи. Равномерно распределите легкими массирующими движениями до полного впитывания. Используйте утром и/или вечером.",
  usageDe: "Nach der Reinigung und Tonisierung eine kleine Menge der Creme auf Gesicht und Hals auftragen und sanft einmassieren, bis sie vollständig eingezogen ist. Morgens und/oder abends verwenden."
  },
  {
  id: 32,
  nameRu: "SEALUXE Крем для кожи вокруг глаз против морщин с проксиланом (20 г)",
  nameDe: "SEALUXE Anti-Falten Augencreme mit Proxylan (20 g)",
  shortRu: "Крем для глаз с проксиланом и гексапептидом-2 от морщин",
  shortDe: "Augencreme mit Proxylan und Hexapeptid-2 gegen Falten",
  price: "указать цену",
  article: "00000000EYE032",
  image: "https://imgur.com/r7Zf5xB.png",
  fullRu: "Крем для кожи вокруг глаз от SEALUXE содержит проксилан и гексапептид-2, интенсивно увлажняет и укрепляет кожу, не оставляя липкости. Легкая текстура светло-желтого цвета с нежным ароматом быстро впитывается и подходит для ежедневного ухода. При регулярном применении эффективно корректирует мелкие морщины и сухие заломы, поддерживает упругость и плотность кожи вокруг глаз.",
  fullDe: "Die Augencreme von SEALUXE mit Proxylan und Hexapeptid-2 spendet intensive Feuchtigkeit und stärkt die Haut, ohne ein klebriges Gefühl zu hinterlassen. Die leicht gelbliche, milchige Konsistenz und der zarte Duft machen sie angenehm in der Anwendung. Bei regelmäßiger Nutzung werden feine Linien und Trockenheitsfältchen sichtbar gemildert, die Elastizität und Festigkeit der Augenpartie werden unterstützt.",
  usageRu: "Нанесите небольшое количество крема на очищенную область вокруг глаз утром и вечером. Легкими похлопывающими движениями распределите до полного впитывания.",
  usageDe: "Tragen Sie morgens und abends eine kleine Menge der Creme auf die gereinigte Augenpartie auf und klopfen Sie sie sanft ein, bis sie vollständig eingezogen ist."
  },
  {
  id: 33,
  nameRu: "Капсульное масло‑эссенция Camellia (30 капсул × 0,5 мл)",
  nameDe: "Kamelienöl-Essenz in Kapseln (30 Kapseln × 0,5 ml)",
  shortRu: "Увлажняющее масло с ретинолом, VE и пептидами для гладкости кожи",
  shortDe: "Feuchtigkeitsspendendes Öl mit Retinol, VE und Peptiden für glatte Haut",
  price: "указать цену",
  article: "00000000CAM033",
  image: "https://imgur.com/REOmaVo.png",
  fullRu: "Капсульное масло-эссенция Camellia в уникальной капсульной упаковке сохраняет свежесть, легко наносится и быстро впитывается, не оставляя жирности. В составе: ретинол, витамин E, церамид NP и растительные масла (масло семян подсолнечника, камелии, плодов облепихи) для восстановления эластичности, увлажнения, питания и разглаживания кожи. 5 видов низкомолекулярных пептидов подтягивают и омолаживают кожу. Масло улучшает структуру кожи, уменьшает шероховатость и мелкие морщины, делает кожу мягкой и сияющей.",
  fullDe: "Die Camellia-Ölessenz in praktischen Kapseln bewahrt die Frische, ist leicht aufzutragen und zieht schnell ein, ohne zu fetten. Die Formel mit Retinol, Vitamin E, Ceramid NP sowie pflanzlichen Ölen (Sonnenblumen-, Kamelien- und Sanddornöl) spendet intensiv Feuchtigkeit, verbessert die Elastizität, glättet feine Linien und sorgt für ein geschmeidiges, strahlendes Hautbild. Fünf niedermolekulare Peptide wirken straffend und regenerierend. Ideal zur täglichen Pflege für trockene und empfindliche Haut.",
  usageRu: "После очищения кожи аккуратно открутите капсулу, равномерно распределите масло на лицо и помассируйте до полного впитывания.",
  usageDe: "Nach der Reinigung eine Kapsel öffnen, das Öl gleichmäßig im Gesicht verteilen und sanft einmassieren, bis es vollständig eingezogen ist."
  },
  {
  id: 34,
  nameRu: "SEALUXE Легкая маска для лица с камелией",
  nameDe: "SEALUXE Leichte Gesichtsmaske mit Kamelie",
  shortRu: "Увлажняющая маска с экстрактом камелии и 4D гиалуронатом",
  shortDe: "Feuchtigkeitsmaske mit Kamelienextrakt und 4D-Hyaluronat",
  price: "указать цену",
  article: "00000000CML034",
  image: "https://imgur.com/swkBnla.png",
  fullRu: "Легкая маска с экстрактом камелии эффективно устраняет сухость, глубоко увлажняет и сокращает поры, придавая коже мягкость и сияние. 4D гиалуронат натрия дарит коже ощущение свежести и эластичности. Кремовая текстура быстро впитывается. В составе: экстракт корня солодки, экстракт листьев розмарина, экстракт камелии, экстракт красных листьев, воск семян подсолнечника, экстракт цветков ромашки, кокосовое масло, экстракт корня женьшеня, цветочное молоко Тяньшу, авокадо.",
  fullDe: "Die leichte Gesichtsmaske mit Kamelienextrakt spendet intensive Feuchtigkeit, beseitigt Trockenheit und verfeinert die Poren. 4D-Hyaluronat sorgt für Frische, Elastizität und ein strahlendes Hautbild. Die cremige Textur zieht schnell ein und verwöhnt die Haut mit wertvollen Pflanzenextrakten: Süßholzwurzel-, Rosmarinblatt-, Kamelien- und Ginsengwurzelextrakt, Sonnenblumenwachs, Kamillenblütenextrakt, Kokosöl, Avocado, Blütenmilch und mehr.",
  usageRu: "На очищенную кожу лица нанесите маску равномерно, оставьте на 10–15 минут, затем удалите мягким полотенцем и смойте теплой водой.",
  usageDe: "Nach der Reinigung großzügig auf das Gesicht auftragen, 10–15 Minuten einwirken lassen, dann mit einem weichen Tuch entfernen und mit warmem Wasser abspülen."
  },
  {
  id: 20,
  nameRu: "CARICH Питательный расслабляющий бальзам на травах",
  nameDe: "CARICH Nährender entspannender Kräuterbalsam",
  shortRu: "Массажная жидкость для облегчения боли и восстановления",
  shortDe: "Massageflüssigkeit zur Schmerzlinderung und Regeneration",
  price: "указать цену",
  article: "00000452CGA046",
  image: "https://imgur.com/LsZKBWS.png",
  fullRu: "Массажная жидкость «Секреты китайской медицины» сочетает целебные свойства натуральных растительных экстрактов для облегчения боли и улучшения состояния кожи. Продукт предназначен для облегчения симптомов остеохондроза, суставных и мышечных болей, а также при головной и поясничной боли. Эффективен при вывихах, переломах, повреждениях мышц и сухожилий, воспалениях различной природы и кожных проблемах в стадии ремиссии. Действие продукта: — Снимает отёки и гематомы. — Обладает выраженным обезболивающим эффектом при ушибах, вывихах и растяжениях. — Способствует выведению токсинов и солей из застойных мышц. — Борется с папилломами. — Снимает мышечные спазмы. — Облегчает зуд и раздражение при укусах насекомых. — Улучшает подвижность суставов и способствует восстановлению хрящевой и соединительной ткани. — Улучшает циркуляцию крови. Состав: экстракт евкоммии липовидной, экстракт реймании клейкой, экстракт вернонии Каминга, экстракт спатолобуса поднятого, экстракт корня имбиря, экстракт мяты перечной, экстракт повилики китайской, экстракт ангелики китайской, экстракт лигустикума сычуаньского, экстракт атрактилодеса большеголового, экстракт шафрана, экстракт полигалы тонколистной, экстракт ангелики пушистой, экстракт женьшеня, экстракт нотоптеригиума надрезанного, экстракт центеллы азиатской, экстракт гастродии высокой, ионы серебра (0,4–0,6%).",
  fullDe: "Die Massageflüssigkeit „Geheimnisse der chinesischen Medizin“ vereint die heilenden Eigenschaften natürlicher Pflanzenextrakte zur Schmerzlinderung und Verbesserung des Hautzustands. Das Produkt ist zur Linderung von Symptomen bei Osteochondrose, Gelenk- und Muskelschmerzen sowie bei Kopf- und Rückenschmerzen bestimmt. Es ist wirksam bei Verstauchungen, Brüchen, Muskel- und Sehnenverletzungen, Entzündungen verschiedener Ursachen und Hautproblemen in der Remissionsphase. Wirkung des Produkts: – Reduziert Schwellungen und Hämatome. – Hat eine starke schmerzlindernde Wirkung bei Prellungen, Verstauchungen und Zerrungen. – Fördert die Ausleitung von Toxinen, Schlacken und Salzen aus verspannten Muskeln. – Wirkt gegen Papillome. – Lindert Muskelkrämpfe. – Mildert Juckreiz und Reizungen bei Insektenstichen. – Verbessert die Beweglichkeit der Gelenke und unterstützt die Regeneration von Knorpel- und Bindegewebe. – Fördert die Durchblutung. Zusammensetzung: Extrakt aus Eucommia ulmoides, Rehmannia glutinosa, Vernonia cumingiana, Spatholobus suberectus, Ingwerwurzel, Pfefferminze, Cuscuta chinensis, Angelica sinensis, Ligusticum chuanxiong, Atractylodes macrocephala, Safran, Polygala tenuifolia, Angelica pubescens, Ginseng, Notopterygium incisum, Centella asiatica, Gastrodia elata, Silberionen (0,4–0,6%).",
  usageRu: "Наносить на проблемные зоны легкими массирующими движениями 2–3 раза в день.",
  usageDe: "Auf die betroffenen Stellen 2–3 Mal täglich mit leichten, massierenden Bewegungen auftragen."
  },
  {
  id: 21,
  nameRu: "Растворимый напиток со спирулиной и пробиотиками 2 г x 20",
  nameDe: "Instantgetränk mit Spirulina und Probiotika 2 g x 20",
  shortRu: "Пробиотики, пребиотики и спирулина для иммунитета и пищеварения",
  shortDe: "Probiotika, Präbiotika und Spirulina für Immunität und Verdauung",
  price: "указать цену",
  article: "00000000SPB021",
  image: "https://imgur.com/TvGFkaF.png",
  fullRu: "Пробиотический комплекс: Напиток содержит разнообразные штаммы пробиотиков, такие как бифидобактерии, лактобациллы и стрептококки, которые способствуют поддержанию здоровой микрофлоры кишечника, улучшают пищеварение и укрепляют иммунную систему. Полезные олигосахариды: Наличие фруктоолигосахаридов, галактоолигосахаридов и других олигосахаридов делает напиток пребиотическим, так как эти компоненты стимулируют рост и активность полезных кишечных бактерий. Питательные вещества: Спирулина, водоросль, богатая белками, витаминами, минералами и антиоксидантами, способствует повышению общего уровня энергии и улучшению иммунитета. Поддержка иммунной системы: Комбинация пробиотиков и спирулины может укреплять иммунную систему, помогая организму бороться с инфекциями и воспалениями. Улучшение пищеварения: Пробиотики и пребиотики в составе напитка способствуют нормализации пищеварения, уменьшению вздутия живота и других проблем с желудочно-кишечным трактом. Объем: 40 г (2 г * 20 пакетиков). Состав: вода, сахар, низкомолекулярный изомальтоза, фруктоолигосахариды, галактоолигосахариды, соевые олигосахариды, кристаллическая фруктоза, устойчивый крахмал, замороженно-сушеное молозиво, порошок спирулины, бифидобактерии животного происхождения BLa36, бифидобактерии BI45, лактобациллы растительного происхождения JYLP-326, лактобациллы JYLC-374, Bacillus coagulans BCN019, лактококки JYLL-60, бифидобактерии JYBR-390, бифидобактерии HN019, лактобациллы HN001, лактобациллы LR47, лактобациллы LRa66, лактобациллы LC07, лактобациллы LC28, бифидобактерии BL21, лактобациллы растительного происхождения Lp90, CW006, лактококки CCFM7902, лактобациллы N13, бифидобактерии BBi77, бифидобактерии BLa54, лактобациллы Lp05, лактобациллы LA88, бифидобактерии BBrO2, лактобациллы LS09, лактобациллы LB50, термофильные стрептококки ST11, лактобациллы LG08, лактобациллы LH76, лактобациллы LF61, лактококки PP06, лактобациллы LJ09, лактобациллы LCr86.",
  fullDe: "Probiotischer Komplex: Das Getränk enthält verschiedene Stämme von Probiotika wie Bifidobakterien, Laktobazillen und Streptokokken, die eine gesunde Darmflora unterstützen, die Verdauung verbessern und das Immunsystem stärken. Nützliche Oligosaccharide: Die enthaltenen Fructooligosaccharide, Galactooligosaccharide und andere Oligosaccharide machen das Getränk präbiotisch, da diese Komponenten das Wachstum und die Aktivität nützlicher Darmbakterien fördern. Nährstoffe: Spirulina, eine Alge, die reich an Proteinen, Vitaminen, Mineralstoffen und Antioxidantien ist, trägt zur Steigerung des allgemeinen Energielevels und zur Verbesserung der Immunität bei. Immunsystem-Unterstützung: Die Kombination von Probiotika und Spirulina kann das Immunsystem stärken und dem Körper helfen, Infektionen und Entzündungen zu bekämpfen. Verbesserte Verdauung: Probiotika und Präbiotika in der Zusammensetzung des Getränks fördern die Normalisierung der Verdauung, reduzieren Blähungen und andere Probleme des Magen-Darm-Trakts. Menge: 40 g (2 g * 20 Beutel). Zutaten: Wasser, Zucker, niedermolekulare Isomaltose, Fructooligosaccharide, Galactooligosaccharide, Soja-Oligosaccharide, kristalline Fructose, resistente Stärke, gefriergetrocknetes Kolostrum, Spirulinapulver, Bifidobakterien tierischen Ursprungs BLa36, Bifidobakterien BI45, pflanzliche Laktobazillen JYLP-326, Laktobazillen JYLC-374, Bacillus coagulans BCN019, Laktokokken JYLL-60, Bifidobakterien JYBR-390, Bifidobakterien HN019, Laktobazillen HN001, Laktobazillen LR47, Laktobazillen LRa66, Laktobazillen LC07, Laktobazillen LC28, Bifidobakterien BL21, pflanzliche Laktobazillen Lp90, CW006, Laktokokken CCFM7902, Laktobazillen N13, Bifidobakterien BBi77, Bifidobakterien BLa54, Laktobazillen Lp05, Laktobazillen LA88, Bifidobakterien BBrO2, Laktobazillen LS09, Laktobazillen LB50, thermophile Streptokokken ST11, Laktobazillen LG08, Laktobazillen LH76, Laktobazillen LF61, Laktokokken PP06, Laktobazillen LJ09, Laktobazillen LCr86.",
  usageRu: "Растворить один пакетик в 100 мл тёплой воды, принимать 1-2 раза в день.",
  usageDe: "Einen Beutel in 100 ml warmem Wasser auflösen, 1-2 Mal täglich einnehmen."
  },
  {
    id: 18,
    nameRu: "Средство для стирки натурального шёлка и шерсти 800 мл",
    nameDe: "Waschmittel für Naturseide und Wolle 800 ml",
    shortRu: "Очищение, защита и аромат для деликатных тканей",
    shortDe: "Reinigung, Schutz und Duft für empfindliche Stoffe",
    price: "указать цену",
    article: "00000000SIL018",
    image: "https://imgur.com/XnqYPzM.png",
    fullRu: "Очищает и обеззараживает деликатную одежду, защищает волокна шелка и шерсти от повреждений, предотвращает усадку и деформацию после стирки, сокращает складки, защищает цвет и гладкость, защищает естественную текстуру тканей, делает их мягкими и пушистыми, нежными и комфортными. Тихий аромат османтуса наполнит Вашу одежду настроением умиротворения. Ручная стирка: 20 мл на 3-5 л воды, размешайте и растворите средство, замочите одежду на 10 минут, аккуратно промойте и ополосните 2-3 раза, высушите в прохладном месте, не подвергайте воздействию солнца. Машинная стирка: Добавьте необходимое количество средства и выберите режим «деликатная стирка» или щадящую программу для шерстяных тканей. Область применения: одежда из шелка и шерсти, нижнее белье, хлопчатобумажные и льняные ткани. Состав: ПАВ, добавки, консерванты, ароматизаторы. Объем: 800 мл. Меры предосторожности: - Количество средства, указанное в инструкции по применению, является рекомендуемым. Количество может быть увеличено или уменьшено в зависимости от фактической степени загрязнения одежды. - При стирке шерстяной одежды не трите ее интенсивно. Сушите ее в прохладном месте. Не подвергайте воздействию солнечных лучей. - Не принимайте средство перорально. Если Вы случайно проглотили его, как можно скорее обратитесь за медицинской помощью. Если средство попало в глаза, промойте большим количеством воды.",
    fullDe: "Reinigt und desinfiziert empfindliche Kleidung, schützt Seiden- und Wollfasern vor Beschädigung, verhindert Einlaufen und Verformung, reduziert Falten, bewahrt Farbe und Glätte, erhält die natürliche Textur der Stoffe. Der dezente Duft von Osmanthus schenkt ein Gefühl der Ruhe. Handwäsche: 20 ml auf 3–5 l Wasser geben, gut vermischen, Kleidung 10 Minuten einweichen, vorsichtig ausspülen, 2–3 Mal spülen und an einem kühlen Ort trocknen. Nicht dem Sonnenlicht aussetzen. Maschinenwäsche: Empfohlene Menge hinzufügen und Schonwaschgang wählen. Anwendung: Seide, Wolle, Unterwäsche, Baumwoll- und Leinenstoffe. Inhaltsstoffe: Tenside, Zusätze, Konservierungsmittel, Duftstoffe. Volumen: 800 ml. Vorsicht: Empfohlene Menge anpassen je nach Verschmutzungsgrad. Wolle nicht intensiv reiben. Vor Sonne schützen. Nicht einnehmen. Bei Augenkontakt mit viel Wasser ausspülen und ggf. ärztliche Hilfe aufsuchen.",
    usageRu: "Для ручной стирки – растворите 20 мл в 3–5 л воды, замочите на 10 минут, ополосните. Для машинной – добавьте нужное количество и выберите деликатный режим.",
    usageDe: "Handwäsche: 20 ml auf 3–5 l Wasser, 10 Min einweichen, ausspülen. Maschine: passende Menge hinzufügen und Schonwaschgang wählen.", 
    category: "Бытовая химия"
  },
  {
  id: 22,
  nameRu: "Питательный напиток с кальцием, магнием и цинком 300 мл",
  nameDe: "Nährstoffgetränk mit Calcium, Magnesium und Zink 300 ml",
  shortRu: "Минеральный напиток для костей, нервов и иммунитета",
  shortDe: "Mineralgetränk für Knochen, Nerven und Immunsystem",
  price: "указать цену",
  article: "00000000NMZ022",
  image: "https://imgur.com/rz8leQs.png",
  fullRu: "Напиток рекомендуется для людей, нуждающихся в повышенном потреблении минералов, для поддержания нормального уровня энергии, здоровья костей, нервной системы и иммунной защиты. Свойства напитка: ✔️ Поддержка здоровья костей и зубов ✔️ Регуляция нервной системы ✔️ Поддержка иммунной системы ✔️ Энергетическая поддержка ✔️ Улучшение состояния кожи ✔️ Поддержка сердечно-сосудистой системы ✔️ Снижение болей в мышцах и суставах. Магний — 230 мг, Кальций — 1800 мг, Цинк — 16 мг.",
  fullDe: "Das Getränk wird für Menschen empfohlen, die einen erhöhten Mineralstoffbedarf haben, um ein normales Energieniveau, die Gesundheit von Knochen, Nervensystem und Immunschutz zu unterstützen. Eigenschaften des Getränks: ✔️ Unterstützung der Gesundheit von Knochen und Zähnen ✔️ Regulierung des Nervensystems ✔️ Unterstützung des Immunsystems ✔️ Energieunterstützung ✔️ Verbesserung des Hautzustands ✔️ Unterstützung des Herz-Kreislauf-Systems ✔️ Verringerung von Muskel- und Gelenkschmerzen. Magnesium – 230 mg, Calcium – 1800 mg, Zink – 16 mg.",
  usageRu: "Откройте пакет и сразу употребляйте. Рекомендуемая дозировка — 2 пакета в день.",
  usageDe: "Beutel öffnen und sofort trinken. Empfohlene Dosierung: 2 Beutel pro Tag."
  },
  {
  id: 23,
  nameRu: "Сухое верблюжье молоко с пробиотиками 500 г",
  nameDe: "Kamelmilchpulver mit Probiotika 500 g",
  shortRu: "Питательное сухое молоко с пробиотиками для здоровья",
  shortDe: "Nährstoffreiches Kamelmilchpulver mit Probiotika für die Gesundheit",
  price: "указать цену",
  article: "00000000CMP023",
  image: "https://imgur.com/14eT1tU.png",
  fullRu: "Сухое верблюжье молоко Nilrich обогащено пробиотиками для оптимального питания и здоровья. Изготовленное из качественного молока с пастбищ, молоко дополнено пребиотиками, различными витаминами и минералами, а также активными пробиотиками. Продукт очищен с использованием передовых технологий, обладает хорошей растворимостью и нежным вкусом. Ингредиенты: Сырое верблюжье молоко или цельное сухое верблюжье молоко, обессоленная сухая сыворотка, изомальтоолигосахарид, концентрированный стандарт сывороточного белка, инулин (3 г/100 г), γ-линоленовая кислота (3 г/100 г), витамины (А, D, E, B, C), фолиевая кислота, пирофосфат железа, оксид цинка, натрий, карбонат кальция, таурин, пробиотики (Bifidobacterium Lactis, Streptococcus thermophilus). Пищевая ценность на 100 г: Энергия 1920 кДж, Белки 20,0 г, Жиры 20,0 г, Углеводы 48,0 г, Клетчатка 3,0 г, Натрий 550 мг, Витамин А 485 ед. gRE, Витамин D 8,6 мкг, Витамин E 11,35 мг -TE, Витамин B 0,95 мг, Витамин С 45,8 мг, Фолиевая кислота 285 ед. gDFE, Кальций 650 мг, Цинк 8,9 мг, Селен 5,56 мг, γ-линоленовая кислота 24,4 мкг, Таурин 3,0 г.",
  fullDe: "Nilrich Kamelmilchpulver ist mit Probiotika für optimale Ernährung und Gesundheit angereichert. Hergestellt aus hochwertiger Weidemilch, angereichert mit Präbiotika, verschiedenen Vitaminen und Mineralstoffen sowie aktiven Probiotika. Das Produkt wird mit modernen Technologien gereinigt, hat eine gute Löslichkeit und einen milden Geschmack. Zutaten: Rohes Kamelmilchpulver oder Vollkamelmilchpulver, entsalzenes Molkenpulver, Isomaltooligosaccharid, Molkenproteinkonzentrat, Inulin (3 g/100 g), γ-Linolensäure (3 g/100 g), Vitamine (A, D, E, B, C), Folsäure, Eisenpyrophosphat, Zinkoxid, Natrium, Calciumcarbonat, Taurin, Probiotika (Bifidobacterium Lactis, Streptococcus thermophilus). Nährwertangaben pro 100 g: Energie 1920 kJ, Eiweiß 20,0 g, Fett 20,0 g, Kohlenhydrate 48,0 g, Ballaststoffe 3,0 g, Natrium 550 mg, Vitamin A 485 IE gRE, Vitamin D 8,6 µg, Vitamin E 11,35 mg -TE, Vitamin B 0,95 mg, Vitamin C 45,8 mg, Folsäure 285 IE gDFE, Calcium 650 mg, Zink 8,9 mg, Selen 5,56 mg, γ-Linolensäure 24,4 µg, Taurin 3,0 g.",
  usageRu: "1. Налейте в чашку тёплую воду (~60°C). 2. Добавьте необходимое количество сухого молока. 3. Тщательно перемешайте до полного растворения. 4. Готово к употреблению. Пейте как можно скорее после приготовления. После открытия упаковки рекомендуется употребить в течение двух недель.",
  usageDe: "1. Gießen Sie warmes Wasser (ca. 60°C) in eine Tasse. 2. Geben Sie die benötigte Menge Milchpulver hinzu. 3. Gründlich umrühren, bis das Pulver vollständig aufgelöst ist. 4. Sofort nach der Zubereitung trinken. Nach dem Öffnen innerhalb von zwei Wochen aufbrauchen."
  }, 
  {
    id: 17,
    nameRu: "Антибактериальный гель для стирки с экстрактом бамбука 1 кг",
    nameDe: "Antibakterielles Waschgel mit Bambusextrakt 1 kg",
    shortRu: "Эффективная стирка и защита тканей",
    shortDe: "Effektives Waschen und Gewebeschutz",
    price: "указать цену",
    article: "00000000BAM017",
    image: "https://imgur.com/lram9DE.png",
    fullRu: "Антибактериальное средство для стирки с экстрактом бамбука специально создано для эффективной стирки и защиты Вашей одежды. Его формула, содержащая ПАВ (поверхностно-активное вещество), экстракт бамбука, воду, моющие факторы и ароматизаторы, обеспечивает мощное удаление загрязнений и бактерий, при этом бережно заботясь о тканях. Специально разработанная концентрированная формула с экстрактом бамбука обеспечивает антибактериальную защиту и придает Вашей одежде свежесть и чистоту. Таблица рекомендуемых доз для разного количества предметов одежды в стиральной машине делает это средство удобным в использовании и экономичным. Состав: ПАВ, экстракт бамбука, вода, моющие факторы, ароматизаторы.",
    fullDe: "Antibakterielles Waschmittel mit Bambusextrakt wurde speziell für effektive Reinigung und Schutz Ihrer Kleidung entwickelt. Die Formel mit Tensiden, Bambusextrakt, Wasser, Reinigungsfaktoren und Duftstoffen entfernt effektiv Schmutz und Bakterien und pflegt die Fasern. Die konzentrierte Zusammensetzung bietet antibakteriellen Schutz und verleiht der Kleidung Frische und Reinheit. Die Dosierungstabelle erleichtert die Anwendung und macht das Produkt sparsam im Verbrauch. Zusammensetzung: Tenside, Bambusextrakt, Wasser, Reinigungsfaktoren, Duftstoffe.",
    usageRu: "Добавьте средство в отсек для стирального порошка в зависимости от количества белья. Используйте согласно инструкции на упаковке.",
    usageDe: "Geben Sie das Mittel je nach Wäschemenge in das Waschmittelfach. Anwendung gemäß den Angaben auf der Verpackung."
  },
  {
  id: 24,
  nameRu: "Чай из кукурузных рылец 150 г",
  nameDe: "Tee aus Maisbart 150 g",
  shortRu: "Натуральный чай для выведения жидкости и поддержки организма",
  shortDe: "Natürlicher Tee zur Entwässerung und Körperunterstützung",
  price: "указать цену",
  article: "00000000CST024",
  image: "https://imgur.com/A01gtC8.png",
  fullRu: "Чай изготовлен на основе кукурузных рыльцев и не содержит добавок или сахара, что делает его идеальным для здорового образа жизни. Подходит для употребления на голодный желудок или ночью. Обладает мочегонными свойствами, способствует выведению лишней жидкости. Кукурузные рыльца богаты витамином Е, винной кислотой и другими полезными веществами. Чай поддерживает сбалансированное питание и основан на традициях китайской медицины. В упаковке 30 пакетиков по 5 г (всего 150 г). Состав: кукуруза, гречиха татарская, кукурузные рыльца, лопух большой, корень пуэрарии волосистой, гардения жасминовидная.",
  fullDe: "Tee aus Maisbart basiert auf Maisnarben und enthält weder Zusätze noch Zucker – ideal für eine gesunde Lebensweise. Der Tee kann auf nüchternen Magen oder nachts getrunken werden. Er besitzt harntreibende Eigenschaften und hilft, überschüssige Flüssigkeit aus dem Körper auszuleiten. Maisbart ist reich an Vitamin E, Weinsäure und anderen wertvollen Stoffen. Der Tee unterstützt eine ausgewogene Ernährung und basiert auf der traditionellen chinesischen Medizin. In der Packung befinden sich 30 Beutel à 5 g (insgesamt 150 g). Zutaten: Mais, Tartarbuchweizen, Maisbart, große Klette, Pueraria lobata Wurzel, Gardenia jasminoides.",
  usageRu: "Заварите 1 пакетик (5 г) в 200 мл горячей воды, настаивайте 5–10 минут. Пейте в любое время дня.",
  usageDe: "Einen Beutel (5 g) mit 200 ml heißem Wasser aufgießen, 5–10 Minuten ziehen lassen. Zu jeder Tageszeit genießen."
  },
  {
  id: 25,
  nameRu: "Массажная подушка из натурального латекса",
  nameDe: "Massagekissen aus Naturlatex",
  shortRu: "Эргономичная подушка для поддержки шеи и расслабления",
  shortDe: "Ergonomisches Kissen zur Nackenstütze und Entspannung",
  price: "указать цену",
  article: "00000000LAT025",
  image: "https://imgur.com/fzFaHf9.png",
  fullRu: "Размеры: 58 × 35 см, высота 10–12 см. Материал — натуральный латекс, импортирован из Таиланда. В процессе производства латекс вспенивается и принимает форму, образуя отверстия, пузыри и мелкие дефекты, что подтверждает подлинность материала. Натуральный латекс гарантирует оптимальную поддержку и долговечность. Эта массажная подушка обеспечивает максимальное удобство и расслабление, поддерживает правильную форму шеи и спины во время сна или отдыха.",
  fullDe: "Maße: 58 × 35 cm, Höhe 10–12 cm. Material: Naturlatex, importiert aus Thailand. Während des Herstellungsprozesses wird der Latex aufgeschäumt und geformt, was zur Bildung von unregelmäßigen Löchern, Blasen und kleinen Unvollkommenheiten führt, die die Echtheit des Naturlatex bestätigen. Das Material garantiert optimale Unterstützung und Langlebigkeit. Dieses Massagekissen sorgt für maximalen Komfort und Entspannung und unterstützt Nacken und Rücken während des Schlafs oder der Erholung.",
  usageRu: "Используйте подушку для сна или отдыха для поддержки шеи и расслабления мышц.",
  usageDe: "Verwenden Sie das Kissen beim Schlafen oder Ausruhen zur Unterstützung des Nackens und zur Entspannung der Muskulatur."
  },
  {
    id: 16,
    nameRu: "Отбеливающий гель для стирки с энзимами 2 кг",
    nameDe: "Bleich-Waschgel mit Enzymen 2 kg",
    shortRu: "Глубокая очистка и отбеливание одежды",
    shortDe: "Tiefenreinigung und Aufhellung der Kleidung",
    price: "указать цену",
    article: "00000000BLE016",
    image: "https://imgur.com/d1gP5q5.png",
    fullRu: "Отбеливающий гель для стирки с энзимами – средство, разработанное для тщательной очистки и отбеливания вашей одежды. Его компоненты, включая поверхностно-активные вещества, ферменты и энзимы, обеспечивают глубокое проникновение в ткани и эффективное устранение загрязнений. Сочетание поверхностно-активных веществ и ферментов позволяет этому гелю эффективно бороться с самыми стойкими пятнами, одновременно обеспечивая отличное отбеливание. Энзимы, входящие в состав средства, активно работают на молекулярном уровне, разлагая загрязнения и даря вашей одежде свежесть и яркость. Этот отбеливающий гель является надежным помощником в поддержании чистоты и яркости Вашей одежды, обеспечивая не только идеальную чистоту, но и сохраняя ее первоначальный вид на долгое время.",
    fullDe: "Bleich-Waschgel mit Enzymen ist ein Reinigungsmittel, das für die gründliche Reinigung und Aufhellung Ihrer Kleidung entwickelt wurde. Die Kombination aus Tensiden, Enzymen und biologischen Wirkstoffen dringt tief in die Fasern ein und entfernt selbst hartnäckige Flecken effektiv. Enzyme wirken auf molekularer Ebene, zersetzen Verschmutzungen und sorgen für Frische und Leuchtkraft. Dieses Gel ist ein zuverlässiger Helfer für perfekte Sauberkeit und den langfristigen Erhalt des ursprünglichen Aussehens Ihrer Kleidung.",
    usageRu: "Добавьте гель в отсек для моющих средств в стиральной машине. Следуйте дозировке на упаковке в зависимости от степени загрязнения и объема белья.",
    usageDe: "Geben Sie das Gel in das Waschmittelfach der Waschmaschine. Dosierung je nach Verschmutzungsgrad und Wäschemenge gemäß Verpackungsempfehlung.",
    category: "Бытовая химия"
  },
  {
    id: 15,
    nameRu: "Карандаш для удаления пятен",
    nameDe: "Fleckenentferner-Stift",
    shortRu: "Быстрое удаление самых упрямых пятен",
    shortDe: "Schnelle Entfernung hartnäckiger Flecken",
    price: "указать цену",
    article: "00000000STP015",
    image: "https://i.imgur.com/0DFpO3Z.png",
    fullRu: "Карандаш для удаления пятен - это универсальный инструмент, предназначенный для быстрого и эффективного удаления самых упрямых пятен с Вашей одежды. Его формула, основанная на экологически чистом растворителе, поверхностно-активных веществах и биологических ферментных соединениях, обеспечивает надежное удаление пятен, таких как синие чернила, крем для обуви, губная помада, кофе, красное вино, и даже сложные пятна от соусов. Специальный наконечник изготовлен из инновационных наноматериалов, обеспечивая легкость очистки. Этот карандаш удобен в использовании благодаря своему модному дизайну, компактности и гибкости. Он идеально подходит для локального удаления пятен, позволяя избежать необходимости полной очистки всей одежды. Однако важно помнить, что этот продукт не рекомендуется для материалов, таких как шелк, шерсть или кожа, которые могут подвергаться выцветанию под воздействием воды. Перед использованием на неизвестных материалах рекомендуется провести тест на скрытом участке одежды, чтобы избежать возможного обесцвечивания или других аномальных реакций. Активные ингредиенты: экологически чистый растворитель, поверхностно-активное вещество, технология биологических ферментных соединений.",
    fullDe: "Der Fleckenentferner-Stift ist ein vielseitiges Werkzeug zur schnellen und effektiven Entfernung selbst hartnäckigster Flecken aus Ihrer Kleidung. Die Formel basiert auf umweltfreundlichem Lösungsmittel, Tensiden und biologischen Enzymtechnologien und entfernt zuverlässig Flecken wie blaue Tinte, Schuhcreme, Lippenstift, Kaffee, Rotwein und sogar schwierige Saucenflecken. Die spezielle Spitze aus innovativen Nanomaterialien sorgt für einfache Reinigung. Dank modischem Design, Kompaktheit und Flexibilität ist der Stift ideal für gezielte Fleckenbehandlung – ohne die gesamte Kleidung reinigen zu müssen. Nicht geeignet für Seide, Wolle oder Leder. Vor der Anwendung an unauffälliger Stelle testen. Wirkstoffe: Umweltfreundliches Lösungsmittel, Tensid, Enzymtechnologie.",
    usageRu: "Нанесите карандаш на загрязнённый участок ткани и аккуратно протрите. При необходимости повторите. Тщательно смойте водой.",
    usageDe: "Mit dem Stift den Fleck auf dem Stoff einreiben. Bei Bedarf wiederholen. Gründlich mit Wasser ausspülen."
  },
  {
    id: 14,
    nameRu: "Очищающие влажные салфетки для кухни",
    nameDe: "Reinigungstücher für die Küche",
    shortRu: "Быстрое и эффективное удаление жира и пятен",
    shortDe: "Schnelle und effektive Entfernung von Fett und Flecken",
    price: "указать цену",
    article: "00000816CEA076",
    image: "https://imgur.com/AFsnq5H.png",
    fullRu: "Очищающие влажные салфетки для кухни предназначены специально для кухонных поверхностей и оборудования. Они обеспечивают быстрое и эффективное удаление загрязнений, пятен и жира с различных кухонных поверхностей, сохраняя их чистоту и блеск. Основные характеристики: Многофункциональность: Салфетки подходят для очистки столовых приборов, посуды, стеклокерамических плит, раковин и других поверхностей. Безопасность: Салфетки не содержат агрессивных химикатов и абсолютно безопасны для использования на пищевых и кухонных поверхностях. Удобство использования: Влажные салфетки легко извлекаются из упаковки, что делает их удобными для быстрого использования в любое время.",
    fullDe: "Reinigungstücher für die Küche wurden speziell für Küchenoberflächen und -geräte entwickelt. Sie entfernen schnell und effektiv Verschmutzungen, Flecken und Fett von verschiedenen Küchenflächen und sorgen für Sauberkeit und Glanz. Hauptmerkmale: Vielseitigkeit – geeignet für Besteck, Geschirr, Glaskeramikkochfelder, Spülen usw. Sicherheit – keine aggressiven Chemikalien, sicher für Küchen- und Lebensmitteloberflächen. Benutzerfreundlich – leicht aus der Verpackung zu entnehmen, jederzeit bequem anwendbar.",
    usageRu: "Достаньте салфетку и протрите загрязнённую поверхность. После применения при необходимости смойте водой.",
    usageDe: "Ein Tuch entnehmen und die verschmutzte Fläche abwischen. Bei Bedarf mit Wasser nachspülen."
  },
  {
    id: 1,
    nameRu: "Шариковый дезодорант-антиперспирант",
    nameDe: "Roll-on Deodorant Antitranspirant",
    shortRu: "Защита от запаха и пота на весь день",
    shortDe: "Schutz vor Geruch und Schweiß den ganzen Tag",
    price: "указать цену",
    article: "00002699CBA053",
    image: "https://i.imgur.com/iPloSgw.png",
    fullRu: "Обеспечивает эффективную защиту от пота и запаха на протяжении всего дня. Формула содержит натуральные экстракты, успокаивающие кожу, предотвращающие раздражение и создающие ощущение свежести. Подходит для всех типов кожи, включая чувствительную. Не оставляет следов на одежде.",
    fullDe: "Bietet den ganzen Tag über effektiven Schutz vor Schweiß und Geruch. Die Formel enthält natürliche Extrakte, die die Haut beruhigen, Irritationen vorbeugen und ein Gefühl von Frische hinterlassen. Für alle Hauttypen geeignet, auch empfindliche. Hinterlässt keine Spuren auf der Kleidung.",
    usageRu: "Наносить на чистую и сухую кожу подмышек утром или по мере необходимости.",
    usageDe: "Auf saubere, trockene Achselhaut morgens oder bei Bedarf auftragen."
  },
  {
    id: 2,
    nameRu: "Мыло от прыщей с эфирным маслом чайного дерева",
    nameDe: "Akne-Seife mit Teebaumöl",
    shortRu: "Очищает, обеззараживает, успокаивает",
    shortDe: "Reinigt, desinfiziert, beruhigt",
    price: "указать цену",
    article: "00000684LGF010",
    image: "https://i.imgur.com/BDKws0z.png",
    fullRu: "Содержит отборное эфирное масло чайного дерева с антибактериальными и противовоспалительными свойствами. Также в составе: масло полыни, экстракт алоэ, масло авокадо и оливковое масло, кокосовое масло. Эффективно борется с Propionibacterium acnes, ускоряет заживление и предотвращает новые воспаления.",
    fullDe: "Enthält hochwertiges Teebaumöl mit antibakterieller und entzündungshemmender Wirkung. Mit Wermutöl, Aloe-Extrakt, Avocado- und Olivenöl sowie Kokosöl. Wirksam gegen Propionibacterium acnes, beschleunigt die Heilung und beugt neuen Entzündungen vor.",
    usageRu: "Наносить на влажную кожу лица и тела, вспенить, помассировать и смыть водой. Использовать утром и вечером.",
    usageDe: "Auf feuchte Haut auftragen, aufschäumen, einmassieren und mit Wasser abspülen. Morgens und abends verwenden."
  },
  {
    id: 3,
    nameRu: "Успокаивающий увлажняющий крем с алоэ вера",
    nameDe: "Beruhigende Feuchtigkeitscreme mit Aloe Vera",
    shortRu: "Увлажнение и защита кожи",
    shortDe: "Feuchtigkeit und Schutz für die Haut",
    price: "указать цену",
    article: "00000634ASB042",
    image: "https://i.imgur.com/Y2DiRwt.png",
    fullRu: "Увлажняющий гель с алоэ вера успокаивает кожу, снижает воспаления, способствует заживлению и защищает от свободных радикалов. Подходит для чувствительной кожи.",
    fullDe: "Feuchtigkeitsgel mit Aloe Vera beruhigt die Haut, reduziert Entzündungen, fördert die Heilung und schützt vor freien Radikalen. Geeignet für empfindliche Haut.",
    usageRu: "После очищения и тонизирования кожи нанести необходимое количество геля на ладонь, равномерно распределить по лицу и мягко массировать до полного впитывания.",
    usageDe: "Nach der Reinigung und Tonisierung eine geeignete Menge auftragen, gleichmäßig verteilen und sanft einmassieren, bis es vollständig eingezogen ist."
  },
  {
    id: 4,
    nameRu: "Шёлковое мыло с нитями фиброина",
    nameDe: "Seife mit Seidenfaser-Fibroin",
    shortRu: "Глубокое очищение и смягчение кожи",
    shortDe: "Tiefenreinigung und Hautberuhigung",
    price: "указать цену",
    article: "00000123LPA036",
    image: "https://i.imgur.com/8nT9MtV.png",
    fullRu: "Содержит аминокислоты и растительные масла, питающие кожу, действует бережно и не вызывает раздражения, удерживает влагу, смягчает и успокаивает кожу. Кокоилглицинат калия и масло чайного дерева борются с огрублением кожи, растительный комплекс и протеины шелка удаляют лишний жир. Пена густая, с освежающим ароматом.",
    fullDe: "Enthält Aminosäuren und verschiedene pflanzliche Öle, die die Haut nähren, sanft reinigen und nicht reizen. Hält die Feuchtigkeit, macht die Haut weich und beruhigt. Kalium-Cocoylglycinat und Teebaumöl bekämpfen raue Haut, pflanzliche Komplexe und Seidenproteine entfernen überschüssiges Fett. Reichhaltiger Schaum mit frischem Duft.",
    usageRu: "Нанести на влажную кожу, вспенить, промассировать и смыть водой.",
    usageDe: "Auf feuchte Haut auftragen, aufschäumen, einmassieren und mit Wasser abspülen."
  },
  {
    id: 5,
    nameRu: "Высокоэффективное средство для удаления стойких загрязнений",
    nameDe: "Hocheffektiver Fleckenentferner",
    shortRu: "Быстро и глубоко удаляет пятна с одежды",
    shortDe: "Entfernt hartnäckige Flecken gründlich",
    price: "указать цену",
    article: "00000522ASF030",
    image: "https://i.imgur.com/gjSj7S4.png",
    fullRu: "Мощный пятновыводитель для воротников. Использует технологию быстрого эмульгирования и солюбилизации: глубоко проникает в ткань, растворяет и удаляет загрязнения, не повреждая волокна. Удаляет пятна от масла, крови, пота, фруктов и др. Тройная очистка: проникновение, эмульгирование, солюбилизация.",
    fullDe: "Leistungsstarker Fleckenentferner für Kragen. Dank Emulgier- und Solubilisierungstechnologie dringt tief in die Fasern ein, löst und entfernt Verschmutzungen, ohne das Gewebe zu beschädigen. Entfernt Öl-, Blut-, Schweiß-, Fruchtflecken u.a. Dreifachreinigung: Eindringen, Emulgieren, Solubilisieren.",
    usageRu: "Распылите на сухую одежду, оставьте на 3–5 минут, затем стирайте вручную или в машине.",
    usageDe: "Auf trockene Kleidung sprühen, 3–5 Minuten einwirken lassen, dann per Hand oder Maschine waschen."
  },
  {
    id: 6,
    nameRu: "Хозяйственное мыло с содой и энзимами",
    nameDe: "Hausseife mit Soda und Enzymen",
    shortRu: "Глубокая чистка и уход за одеждой",
    shortDe: "Tiefe Reinigung und Textilpflege",
    price: "указать цену",
    article: "00000531ASF036",
    image: "https://i.imgur.com/8Xd7PGv.png",
    fullRu: "Содержит пищевую соду и растительные масла, эффективно удаляет пятна и загрязнения, сохраняя мягкость ткани. Ферменты образуют обильную пену, глубоко очищают и ухаживают за волокнами.",
    fullDe: "Enthält Natron und pflanzliche Öle, entfernt effektiv Flecken und Verschmutzungen und erhält die Weichheit der Kleidung. Enzyme erzeugen reichlich Schaum für eine gründliche Reinigung.",
    usageRu: "Нанести мыло на влажную ткань, потереть, затем тщательно промыть водой.",
    usageDe: "Seife auf feuchten Stoff auftragen, reiben und gründlich mit Wasser abspülen."
  },
  {
    id: 7,
    nameRu: "Микромолекулярный гель для стирки на растительной основе",
    nameDe: "Mikromolekulares Waschgel auf Pflanzenbasis",
    shortRu: "Удаляет пятна, обеззараживает, аромат свежести",
    shortDe: "Fleckentfernung, Desinfektion, Frischeduft",
    price: "указать цену",
    article: "00001129ASF056",
    image: "https://i.imgur.com/cFzoH0P.png",
    fullRu: "Имеет приятный аромат, обеззараживает, удаляет пятна и легко смывается. Микромолекулярная пена глубоко очищает волокна. Мгновенное вспенивание, глубокое очищение, комплексная защита. Подходит для ручной и машинной стирки (кроме шелка, шерсти и деликатного белья).",
    fullDe: "Angenehmer Duft, desinfiziert, entfernt Flecken und lässt sich leicht ausspülen. Mikromolekularer Schaum reinigt tief. Sofortige Schaumbildung, Tiefenreinigung, Rundumschutz. Für Hand- und Maschinenwäsche (außer Seide, Wolle, Feinwäsche).",
    usageRu: "Ручная стирка: 10–20 мл на 3–5 л воды. Машинная: 25–30 мл на 8–10 предметов одежды.",
    usageDe: "Handwäsche: 10–20 ml auf 3–5 l Wasser. Maschinenwäsche: 25–30 ml für 8–10 Teile."
  },
  {
    id: 8,
    nameRu: "Антибактериальный гель для стирки с экстрактом бамбука",
    nameDe: "Antibakterielles Waschgel mit Bambusextrakt",
    shortRu: "Защита от бактерий и свежесть для одежды",
    shortDe: "Antibakterieller Schutz und Frische für Kleidung",
    price: "указать цену",
    article: "00000529DAA037",
    image: "https://i.imgur.com/vokEECG.png",
    fullRu: "Антибактериальное средство для стирки с экстрактом бамбука эффективно очищает и защищает ткани. Концентрированная формула экономична и подходит для разных типов тканей.",
    fullDe: "Antibakterielles Waschmittel mit Bambusextrakt reinigt effektiv und schützt Gewebe. Die konzentrierte Formel ist sparsam und für verschiedene Stoffarten geeignet.",
    usageRu: "Добавьте средство согласно таблице дозировки на упаковке. Подходит для ручной и машинной стирки. Хранить в недоступном для детей месте.",
    usageDe: "Dosierung gemäß Tabelle auf der Verpackung. Für Hand- und Maschinenwäsche geeignet. Von Kindern fernhalten."
  },
  {
    id: 9,
    nameRu: "Дезодоратор для холодильника",
    nameDe: "Kühlschrank-Deodorant",
    shortRu: "Устраняет запахи, антибактериальный эффект",
    shortDe: "Geruchsentferner, antibakteriell",
    price: "указать цену",
    article: "00000610DAA105",
    image: "https://i.imgur.com/3yqcBv9.png",
    fullRu: "Дезодоратор с активированным углем и чайными полифенолами эффективно устраняет запахи и борется с бактериями. Уголь из кокосовой скорлупы быстро нейтрализует запахи.",
    fullDe: "Der Kühlschrank-Deodorant mit Aktivkohle und Teepolyphenolen beseitigt effektiv Gerüche und bekämpft Bakterien. Kokosnussschalenkohle neutralisiert schnell unangenehme Gerüche.",
    usageRu: "Снимите пленку, откройте крышку, поместите в холодильник. Не помещать в морозильную камеру. Заменять каждые 2–3 месяца.",
    usageDe: "Folie entfernen, Deckel öffnen und in den Kühlschrank stellen. Nicht ins Gefrierfach legen. Alle 2–3 Monate austauschen."
  },
  {
    id: 10,
    nameRu: "Моющее средство для посуды",
    nameDe: "Geschirrspülmittel",
    shortRu: "Для посуды и овощей/фруктов, мягкое и безопасное",
    shortDe: "Für Geschirr und Obst/Gemüse, sanft und sicher",
    price: "указать цену",
    article: "00000815ASD001",
    image: "https://i.imgur.com/nXSm58k.png",
    fullRu: "Очищенная вода как основа, кокосовое ПАВ мягко удаляет жир и загрязнения. Глицерин ухаживает за кожей рук. Подходит для мытья фруктов и овощей.",
    fullDe: "Reines Wasser als Basis, Kokos-Tenside entfernen sanft Fett und Schmutz. Glycerin pflegt die Hände. Geeignet für Obst und Gemüse.",
    usageRu: "Нанесите на губку или растворите в воде. После мытья тщательно смыть водой.",
    usageDe: "Auf einen Schwamm auftragen oder in Wasser verdünnen. Danach gründlich mit Wasser abspülen."
  },
  {
    id: 11,
    nameRu: "Кухонное средство для удаления пятен от тяжелого масла",
    nameDe: "Küchenmittel gegen hartnäckige Ölflecken",
    shortRu: "Мощное средство против жирных загрязнений",
    shortDe: "Starkes Mittel gegen fettige Verschmutzungen",
    price: "указать цену",
    article: "00001153DAC056",
    image: "https://i.imgur.com/4njXyU2.png",
    fullRu: "Мощный спрей iLiFE для удаления стойких масляных пятен с поверхностей и тканей. Быстро проникает в загрязнения и легко смывается, не повреждая материал.",
    fullDe: "Leistungsstarkes iLiFE-Spray zur Entfernung hartnäckiger Ölflecken von Oberflächen und Textilien. Dringt schnell ein und lässt sich leicht abwaschen, ohne das Material zu beschädigen.",
    usageRu: "Распылить на загрязнение, оставить на 3–5 минут, протереть тканью/губкой и смыть водой.",
    usageDe: "Auf die Verschmutzung sprühen, 3–5 Minuten einwirken lassen, mit Tuch/Schwamm abwischen und mit Wasser abspülen."
  },
  {
    id: 12,
    nameRu: "Многофункциональная электролизная вода",
    nameDe: "Multifunktionales Elektrolytwasser",
    shortRu: "Для очищения поверхностей и удаления запахов",
    shortDe: "Zur Reinigung und Geruchsentfernung",
    price: "указать цену",
    article: "00000886KAB001",
    image: "https://i.imgur.com/ouFhqZl.png",
    fullRu: "Универсальный продукт на основе воды, без добавок. Очищает технику, мебель, стекла, экраны, адсорбирует формальдегид, удаляет остатки пестицидов с фруктов и овощей.",
    fullDe: "Universelles, zusatzstofffreies Wasserprodukt. Reinigt Geräte, Möbel, Glas, Bildschirme, adsorbiert Formaldehyd und entfernt Pestizidrückstände von Obst und Gemüse.",
    usageRu: "Распылить на поверхность, оставить на несколько секунд и вытереть. Для фруктов/овощей: распылить, 1–2 мин подождать и тщательно смыть.",
    usageDe: "Aufsprühen, einige Sekunden einwirken lassen und abwischen. Für Obst/Gemüse: aufsprühen, 1–2 Minuten warten und gründlich abspülen."
  },
  {
    id: 13,
    nameRu: "Салфетка для посуды с пузырьками",
    nameDe: "Geschirrreinigungstuch mit Bläschen",
    shortRu: "Универсальная салфетка с моющим эффектом",
    shortDe: "Multifunktionales Reinigungstuch mit Waschmittel",
    price: "указать цену",
    article: "00003296CGA146",
    image: "https://i.imgur.com/xfgtTDG.png",
    fullRu: "Моющие ингредиенты соответствуют стандарту GB14930.1A. Подходит для мытья фруктов, посуды, плиты и т.д. Состав: волокно восстановленной целлюлозы, полиэфир, ПАВ аминокислот, экстракт хурмы. Протестировано на раздражение кожи.",
    fullDe: "Reinigungsbestandteile gemäß Standard GB14930.1A. Geeignet zum Waschen von Obst, Geschirr, Herd usw. Zusammensetzung: regenerierte Zellulosefaser, Polyester, Aminosäure-Tenside, Kaki-Extrakt. Hautfreundlich getestet.",
    usageRu: "Не намокайте упаковку и остатки ткани. Перед применением на дорогой утвари протестируйте на незаметном участке. При попадании в глаза промыть водой. Хранить вдали от детей и животных.",
    usageDe: "Vermeiden Sie das Befeuchten der Verpackung und der restlichen Tücher. Bei empfindlichem Geschirr zuerst testen. Bei Augenkontakt mit Wasser spülen. Von Kindern und Tieren fernhalten."
  }
];

// ...твой импорт и массив products...

export default function Catalog() {
  const [expanded, setExpanded] = useState(null);
  const [cart, setCart] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const sendTelegramMessage = () => {
    const message = cart
      .map((item) => `• ${item.nameRu} – ${item.price}`)
      .join("%0A");
    const url = `https://t.me/nea4sh_03?text=🛒 Заказ / Bestellung:%0A${message}`;
    window.open(url, "_blank");
  };

  // Получаем список категорий (в том числе "Без категории")
  const categories = Array.from(new Set(products.map(p => p.category || "Без категории")));

  return (
    <div className="bg-green-100 min-h-screen relative">
      {/* --- Шапка, корзина и кнопка Telegram (оставь, где хочешь, например тут) --- */}
      <div className="text-center py-4">
        <button
          onClick={sendTelegramMessage}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full"
        >
          Отправить заказ в Telegram / Bestellung per Telegram senden
        </button>
      </div>

      {/* --- Основной контент с разбивкой по категориям --- */}
      <main className="p-4 mt-8">
        {categories.map(category => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-green-800">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
              {products
                .filter(product => (product.category || "Без категории") === category)
                .map(product => (
                  <div
                    key={product.id}
                    className="flex flex-col justify-between rounded-2xl shadow-md overflow-hidden bg-white transition-all duration-300 ease-in-out min-h-[620px]"
                  >
                    <div className="p-4 space-y-2">
                      <img
                        src={product.image}
                        alt={product.nameRu}
                        className="w-full h-48 object-contain mb-2"
                      />
                      <h2 className="text-lg font-semibold text-center">{product.nameRu}</h2>
                      <p className="text-sm text-gray-500 text-center">{product.nameDe}</p>
                      <p className="text-md mt-2 text-center">{product.shortRu}</p>
                      <p className="text-sm text-gray-500 text-center">{product.shortDe}</p>
                      <div className="mt-2 text-center font-semibold text-green-600">{product.price}</div>
                      <div className="text-xs text-center text-gray-500">
                        Артикул: {product.article || "—"}
                      </div>
                      <div className="flex justify-center gap-2 mt-2">
                        <button
                          onClick={() => handleToggle(product.id)}
                          className="text-sm px-4 py-1 bg-gray-100 rounded-full hover:bg-gray-200"
                        >
                          Подробнее / Mehr
                        </button>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="text-sm px-4 py-1 bg-green-500 text-white rounded-full hover:bg-green-600"
                        >
                          В корзину / In den Warenkorb
                        </button>
                      </div>
                      {expanded === product.id && (
                        <div className="mt-3 p-3 bg-gray-50 text-sm rounded-md max-h-60 overflow-y-auto transition-all duration-300 ease-in-out">
                          <div className="mb-2">
                            <strong>Описание:</strong>
                            <p>{product.fullRu}</p>
                            <p className="mt-1 text-gray-500">{product.fullDe}</p>
                          </div>
                          <div>
                            <strong>Применение:</strong>
                            <p>{product.usageRu}</p>
                            <p className="mt-1 text-gray-500">{product.usageDe}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </main>

      {/* --- Уведомление о добавлении --- */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Товар добавлен в корзину
        </div>
      )}
    </div>
  );
}
