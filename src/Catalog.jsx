import { useState } from "react";

// === ТОВАРЫ ===
const products = [
  {
    id: 19,
    nameRu: "Пластырь от холки",
    nameDe: "Pflaster gegen Nackenverspannungen",
    shortRu: "Обезболивание и восстановление мышц и суставов",
    shortDe: "Schmerzlinderung und Regeneration von Muskeln und Gelenken",
    price: "787 ₽",
    article: "00000185CIA054",
    image: "https://imgur.com/SEiFrPL.png",
    fullRu: "Пластырь изготовлен на основе современных нанотехнологий, достижений китайской народной и традиционной медицин. Пластырь обладает противовоспалительным, обезболивающим, и мышечно-расслабляющим действиями, способствует восстановлению функции опорно-двигательного аппарата: лечение суставов, связок и мышц. Использование пластыря с полынью способствует улучшению микроциркуляции, снятию воспаления, улучшению венозного оттока и уменьшению застоя крови. Расслабляет мышцы и связки, улучшает местный метаболизм. Способствует восстановлению функции опорно-двигательного аппарата, уменьшению кровоподтеков при травмах мягких тканей и суставов. Состав: Картамин, Чуаньхионг, Саньци, Даньшэнь, Хуанцзин (Polygonatum), Орхидея (Dendrobium), Лонггу, Цзяогулан, Годжи, Жасмин, Танггуэй, Черная слива (ву-мэй).",
    fullDe: "Das Pflaster basiert auf modernen Nanotechnologien sowie traditioneller chinesischer Medizin. Es wirkt entzündungshemmend, schmerzlindernd und muskelentspannend und fördert die Regeneration des Bewegungsapparates: Behandlung von Gelenken, Bändern und Muskeln. Beifuß verbessert die Mikrozirkulation, lindert Entzündungen, fördert den venösen Rückfluss und reduziert Stauungen. Es entspannt Muskeln und Bänder, verbessert den lokalen Stoffwechsel. Zusammensetzung: Carthamus (Kartamin), Ligusticum (Chuanxiong), Sanqi-Kraut, Salvia miltiorrhiza (Danshen), Polygonatum (Huangjing), Dendrobium-Orchidee, Longgu, Jiaogulan, Goji, Jasmin, Danggui, Schwarze Pflaume (Wu Mei).",
    usageRu: "Наклеить на область холки на сухую и чистую кожу. Оставить на 6–12 часов. Применять курсами. Избегать попадания на открытые раны.",
    usageDe: "Auf trockene, saubere Haut im Nackenbereich kleben. 6–12 Stunden einwirken lassen. Kurenweise anwenden. Kontakt mit offenen Wunden vermeiden."
  },
  {
  id: 20,
  nameRu: "CARICH Питательный расслабляющий бальзам на травах",
  nameDe: "CARICH Nährender entspannender Kräuterbalsam",
  shortRu: "Массажная жидкость для облегчения боли и восстановления",
  shortDe: "Massageflüssigkeit zur Schmerzlinderung und Regeneration",
  price: "988 ₽",
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
  price: "1500 ₽",
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
    price: "478 ₽",
    article: "00000000SIL018",
    image: "https://imgur.com/XnqYPzM.png",
    fullRu: "Очищает и обеззараживает деликатную одежду, защищает волокна шелка и шерсти от повреждений, предотвращает усадку и деформацию после стирки, сокращает складки, защищает цвет и гладкость, защищает естественную текстуру тканей, делает их мягкими и пушистыми, нежными и комфортными. Тихий аромат османтуса наполнит Вашу одежду настроением умиротворения. Ручная стирка: 20 мл на 3-5 л воды, размешайте и растворите средство, замочите одежду на 10 минут, аккуратно промойте и ополосните 2-3 раза, высушите в прохладном месте, не подвергайте воздействию солнца. Машинная стирка: Добавьте необходимое количество средства и выберите режим «деликатная стирка» или щадящую программу для шерстяных тканей. Область применения: одежда из шелка и шерсти, нижнее белье, хлопчатобумажные и льняные ткани. Состав: ПАВ, добавки, консерванты, ароматизаторы. Объем: 800 мл. Меры предосторожности: - Количество средства, указанное в инструкции по применению, является рекомендуемым. Количество может быть увеличено или уменьшено в зависимости от фактической степени загрязнения одежды. - При стирке шерстяной одежды не трите ее интенсивно. Сушите ее в прохладном месте. Не подвергайте воздействию солнечных лучей. - Не принимайте средство перорально. Если Вы случайно проглотили его, как можно скорее обратитесь за медицинской помощью. Если средство попало в глаза, промойте большим количеством воды.",
    fullDe: "Reinigt und desinfiziert empfindliche Kleidung, schützt Seiden- und Wollfasern vor Beschädigung, verhindert Einlaufen und Verformung, reduziert Falten, bewahrt Farbe und Glätte, erhält die natürliche Textur der Stoffe. Der dezente Duft von Osmanthus schenkt ein Gefühl der Ruhe. Handwäsche: 20 ml auf 3–5 l Wasser geben, gut vermischen, Kleidung 10 Minuten einweichen, vorsichtig ausspülen, 2–3 Mal spülen und an einem kühlen Ort trocknen. Nicht dem Sonnenlicht aussetzen. Maschinenwäsche: Empfohlene Menge hinzufügen und Schonwaschgang wählen. Anwendung: Seide, Wolle, Unterwäsche, Baumwoll- und Leinenstoffe. Inhaltsstoffe: Tenside, Zusätze, Konservierungsmittel, Duftstoffe. Volumen: 800 ml. Vorsicht: Empfohlene Menge anpassen je nach Verschmutzungsgrad. Wolle nicht intensiv reiben. Vor Sonne schützen. Nicht einnehmen. Bei Augenkontakt mit viel Wasser ausspülen und ggf. ärztliche Hilfe aufsuchen.",
    usageRu: "Для ручной стирки – растворите 20 мл в 3–5 л воды, замочите на 10 минут, ополосните. Для машинной – добавьте нужное количество и выберите деликатный режим.",
    usageDe: "Handwäsche: 20 ml auf 3–5 l Wasser, 10 Min einweichen, ausspülen. Maschine: passende Menge hinzufügen und Schonwaschgang wählen."
  },
  {
  id: 22,
  nameRu: "Питательный напиток с кальцием, магнием и цинком 300 мл",
  nameDe: "Nährstoffgetränk mit Calcium, Magnesium und Zink 300 ml",
  shortRu: "Минеральный напиток для костей, нервов и иммунитета",
  shortDe: "Mineralgetränk für Knochen, Nerven und Immunsystem",
  price: "998 ₽",
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
  price: "2499 ₽",
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
    price: "289 ₽",
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
  price: "460 ₽",
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
  price: "3689 ₽",
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
    price: "589 ₽",
    article: "00000000BLE016",
    image: "https://imgur.com/d1gP5q5.png",
    fullRu: "Отбеливающий гель для стирки с энзимами – средство, разработанное для тщательной очистки и отбеливания вашей одежды. Его компоненты, включая поверхностно-активные вещества, ферменты и энзимы, обеспечивают глубокое проникновение в ткани и эффективное устранение загрязнений. Сочетание поверхностно-активных веществ и ферментов позволяет этому гелю эффективно бороться с самыми стойкими пятнами, одновременно обеспечивая отличное отбеливание. Энзимы, входящие в состав средства, активно работают на молекулярном уровне, разлагая загрязнения и даря вашей одежде свежесть и яркость. Этот отбеливающий гель является надежным помощником в поддержании чистоты и яркости Вашей одежды, обеспечивая не только идеальную чистоту, но и сохраняя ее первоначальный вид на долгое время.",
    fullDe: "Bleich-Waschgel mit Enzymen ist ein Reinigungsmittel, das für die gründliche Reinigung und Aufhellung Ihrer Kleidung entwickelt wurde. Die Kombination aus Tensiden, Enzymen und biologischen Wirkstoffen dringt tief in die Fasern ein und entfernt selbst hartnäckige Flecken effektiv. Enzyme wirken auf molekularer Ebene, zersetzen Verschmutzungen und sorgen für Frische und Leuchtkraft. Dieses Gel ist ein zuverlässiger Helfer für perfekte Sauberkeit und den langfristigen Erhalt des ursprünglichen Aussehens Ihrer Kleidung.",
    usageRu: "Добавьте гель в отсек для моющих средств в стиральной машине. Следуйте дозировке на упаковке в зависимости от степени загрязнения и объема белья.",
    usageDe: "Geben Sie das Gel in das Waschmittelfach der Waschmaschine. Dosierung je nach Verschmutzungsgrad und Wäschemenge gemäß Verpackungsempfehlung."
  },
  {
    id: 15,
    nameRu: "Карандаш для удаления пятен",
    nameDe: "Fleckenentferner-Stift",
    shortRu: "Быстрое удаление самых упрямых пятен",
    shortDe: "Schnelle Entfernung hartnäckiger Flecken",
    price: "150 ₽",
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
    price: "254 ₽",
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
    price: "366 ₽",
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
    price: "250 ₽",
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
    price: "278 ₽",
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
    price: "224 ₽",
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
    price: "300 ₽",
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
    price: "289 ₽",
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
    price: "299 ₽",
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
    price: "289 ₽",
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
    price: "199 ₽",
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
    price: "249 ₽",
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
    price: "275 ₽",
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
    price: "346 ₽",
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
    price: "279 ₽",
    article: "00003296CGA146",
    image: "https://i.imgur.com/xfgtTDG.png",
    fullRu: "Моющие ингредиенты соответствуют стандарту GB14930.1A. Подходит для мытья фруктов, посуды, плиты и т.д. Состав: волокно восстановленной целлюлозы, полиэфир, ПАВ аминокислот, экстракт хурмы. Протестировано на раздражение кожи.",
    fullDe: "Reinigungsbestandteile gemäß Standard GB14930.1A. Geeignet zum Waschen von Obst, Geschirr, Herd usw. Zusammensetzung: regenerierte Zellulosefaser, Polyester, Aminosäure-Tenside, Kaki-Extrakt. Hautfreundlich getestet.",
    usageRu: "Не намокайте упаковку и остатки ткани. Перед применением на дорогой утвари протестируйте на незаметном участке. При попадании в глаза промыть водой. Хранить вдали от детей и животных.",
    usageDe: "Vermeiden Sie das Befeuchten der Verpackung und der restlichen Tücher. Bei empfindlichem Geschirr zuerst testen. Bei Augenkontakt mit Wasser spülen. Von Kindern und Tieren fernhalten."
  }
];

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

  return (
    <div className="bg-green-100 min-h-screen relative">
      <header className="bg-white shadow-md py-4 flex justify-center">
        <img src="https://i.imgur.com/BL2lZZb.png" alt="GreenLeaf Logo" className="w-72 h-auto" />
      </header>

      <div className="fixed top-5 left-5 bg-white border border-gray-300 rounded-lg p-4 shadow-md max-w-sm z-50">
        <h3 className="font-semibold mb-2">🛍️ Ваша корзина / Ihr Warenkorb</h3>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">Корзина пуста / Der Warenkorb ist leer</p>
        ) : (
          <ul className="space-y-1 max-h-40 overflow-y-auto pr-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center text-sm">
                <span>{item.nameRu}</span>
                <button
                  onClick={() => setCart(cart.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-700 text-xs"
                >
                  Удалить / Entfernen
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Товар добавлен в корзину
        </div>
      )}

      <main className="p-4 mt-24">
        <div className="text-center mb-4">
          <button
            onClick={sendTelegramMessage}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full"
          >
            Отправить заказ в Telegram / Bestellung per Telegram senden
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {products.map((product) => (
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
          ))}
        </div>
      </main>
    </div>
  );
}