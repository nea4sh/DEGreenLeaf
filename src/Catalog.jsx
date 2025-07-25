import React, { useState, useMemo } from "react";

// ВСТАВЬ СВОЙ МАССИВ PRODUCTS СЮДА (пример ниже)
const products = [
  { 
  "id": 1,
  "nameRu": "Шариковый дезодорант-антиперспирант",
  "nameDe": "Roll-on Deodorant Antitranspirant",
  "nameEn": "Roll-on Deodorant Antiperspirant",
  "shortRu": "Защита от запаха и пота на весь день",
  "shortDe": "Schutz vor Geruch und Schweiß den ganzen Tag",
  "shortEn": "All-day protection from sweat and odor",
  "price": "1000",
  "article": "00002699CBA053",
  "image": "https://i.imgur.com/iPloSgw.png",
  "fullRu": "Шариковый дезодорант-антиперспирант обеспечивает надёжную защиту от пота и неприятного запаха на протяжении всего дня. Его формула основана на натуральных компонентах, которые не только блокируют потоотделение, но и заботятся о коже. В составе дезодоранта содержатся растительные экстракты, обладающие успокаивающим и антисептическим действием, предотвращающие раздражение и воспаления. Не содержит спирта, парабенов и агрессивных химикатов, благодаря чему подходит для всех типов кожи, включая чувствительную. Быстро впитывается, не оставляет белых следов на одежде и не вызывает ощущения липкости. Удобный шариковый аппликатор позволяет равномерно наносить средство. Идеально для повседневного использования — на работе, во время спорта или в поездках.",
  "fullDe": "Der Roll-on-Deodorant-Antitranspirant bietet zuverlässigen Schutz vor Schweiß und unangenehmem Geruch den ganzen Tag. Die Formel basiert auf natürlichen Inhaltsstoffen, die nicht nur das Schwitzen reduzieren, sondern auch die Haut pflegen. Enthaltene pflanzliche Extrakte wirken beruhigend und antiseptisch, beugen Hautreizungen vor und sind frei von Alkohol und Parabenen – ideal für empfindliche Haut. Der Deodorant zieht schnell ein, hinterlässt keine weißen Spuren auf der Kleidung und sorgt für ein angenehmes Frischegefühl. Der praktische Roll-on-Applikator ermöglicht ein gleichmäßiges Auftragen. Perfekt für den täglichen Gebrauch – ob im Büro, beim Sport oder auf Reisen.",
  "fullEn": "This roll-on deodorant antiperspirant provides long-lasting protection against sweat and unpleasant odor throughout the day. The formula is based on natural ingredients that not only reduce perspiration but also gently care for the skin. Infused with plant extracts known for their soothing and antiseptic properties, it helps prevent irritation and is free from alcohol, parabens, and harsh chemicals, making it suitable even for sensitive skin. The deodorant absorbs quickly, leaves no white marks on clothing, and doesn’t feel sticky. The convenient roll-on applicator ensures smooth and even coverage. Perfect for everyday use—at work, during workouts, or while traveling.",
  "usageRu": "Наносить на чистую и сухую кожу подмышек утром или по мере необходимости. Не использовать на раздражённой или повреждённой коже.",
  "usageDe": "Auf saubere, trockene Achselhaut morgens oder bei Bedarf auftragen. Nicht auf gereizter oder verletzter Haut anwenden.",
  "usageEn": "Apply to clean, dry underarms in the morning or as needed. Do not apply to irritated or broken skin.",
  "category": "personalcare"
  },
  {
  "id": 2,
  "nameRu": "Мыло от прыщей с эфирным маслом чайного дерева",
  "nameDe": "Akne-Seife mit Teebaumöl",
  "nameEn": "Anti-Acne Soap with Tea Tree Oil",
  "shortRu": "Очищает, обеззараживает, успокаивает",
  "shortDe": "Reinigt, desinfiziert, beruhigt",
  "shortEn": "Cleanses, disinfects, and soothes the skin",
  "price": "850",
  "article": "00000684LGF010",
  "image": "https://i.imgur.com/BDKws0z.png",
  "fullRu": "Мыло от прыщей с эфирным маслом чайного дерева — это мощное средство для глубокого очищения и ухода за проблемной кожей. Его уникальная формула разработана специально для борьбы с воспалениями, угревой сыпью и жирным блеском. Эфирное масло чайного дерева обладает выраженными антибактериальными и антисептическими свойствами, эффективно уничтожая бактерии, вызывающие акне (в том числе Propionibacterium acnes), снижая воспаления и предотвращая появление новых высыпаний. В состав мыла также входят натуральные компоненты: масло полыни, экстракт алоэ вера, масло авокадо, оливковое масло и кокосовое масло. Эти ингредиенты усиливают успокаивающее и заживляющее действие, смягчают кожу, увлажняют её и способствуют восстановлению защитного барьера. Мыло деликатно очищает, не пересушивая кожу, подходит как для лица, так и для тела. Рекомендуется для ежедневного использования, особенно в утреннем и вечернем уходе. Подходит для подростков и взрослых с чувствительной, жирной и комбинированной кожей, склонной к высыпаниям.",
  "fullDe": "Die Akne-Seife mit Teebaumöl ist ein effektives Reinigungs- und Pflegemittel für unreine und empfindliche Haut. Ihre spezielle Formel wurde entwickelt, um Entzündungen zu lindern, überschüssiges Hautfett zu entfernen und die Bildung von Pickeln und Mitessern zu verhindern. Das enthaltene ätherische Teebaumöl wirkt stark antibakteriell und antiseptisch, bekämpft gezielt Propionibacterium acnes und unterstützt die Heilung entzündeter Hautpartien. Zusätzliche natürliche Inhaltsstoffe wie Wermutöl, Aloe Vera-Extrakt, Avocadoöl, Olivenöl und Kokosöl beruhigen die Haut, spenden Feuchtigkeit und stärken die natürliche Hautbarriere. Die Seife reinigt sanft, ohne auszutrocknen, und ist für Gesicht und Körper geeignet. Ideal für die tägliche Anwendung morgens und abends. Besonders empfohlen für Jugendliche und Erwachsene mit fettiger, unreiner oder empfindlicher Haut.",
  "fullEn": "This anti-acne soap with tea tree essential oil is a powerful cleansing and skincare product designed for oily, acne-prone, and sensitive skin. Its advanced formula effectively combats inflammation, reduces excess oil, and helps prevent future breakouts. Tea tree oil is known for its strong antibacterial and antiseptic properties, targeting acne-causing bacteria (such as Propionibacterium acnes) and supporting skin healing. The soap is enriched with natural ingredients including wormwood oil, aloe vera extract, avocado oil, olive oil, and coconut oil. These botanicals soothe the skin, provide deep hydration, and help restore the skin’s natural barrier. It cleanses gently without over-drying and is suitable for both facial and body use. Perfect for daily use in both morning and evening routines. Recommended for teenagers and adults with oily, sensitive, or blemish-prone skin.",
  "usageRu": "Наносить на влажную кожу лица и тела, вспенить, помассировать и смыть водой. Использовать утром и вечером.",
  "usageDe": "Auf feuchte Haut auftragen, aufschäumen, einmassieren und mit Wasser abspülen. Morgens und abends verwenden.",
  "usageEn": "Apply to wet skin on face and body, lather, massage gently, and rinse with water. Use morning and evening.",
  "category": "facecare"
  },
  {
  "id": 3,
  "nameRu": "Успокаивающий увлажняющий крем с алоэ вера",
  "nameDe": "Beruhigende Feuchtigkeitscreme mit Aloe Vera",
  "nameEn": "Soothing Moisturizing Cream with Aloe Vera",
  "shortRu": "Увлажнение и защита кожи",
  "shortDe": "Feuchtigkeit und Schutz für die Haut",
  "shortEn": "Moisturizes and protects the skin",
  "price": "950",
  "article": "00000634ASB042",
  "image": "https://i.imgur.com/Y2DiRwt.png",
  "fullRu": "Успокаивающий крем-гель с алоэ вера предназначен для интенсивного увлажнения и восстановления кожи, склонной к раздражениям и сухости. Благодаря высокому содержанию натурального геля алоэ вера, средство глубоко проникает в кожу, снимая покраснения, смягчая и насыщая клетки влагой. Лёгкая текстура не оставляет жирной плёнки и быстро впитывается, делая кожу более гладкой и эластичной. Подходит для ежедневного применения после очищения, особенно в жаркое время года или после пребывания на солнце. Может использоваться как основное средство ухода или как восстанавливающая маска. Рекомендован для всех типов кожи, включая чувствительную.",
  "fullDe": "Die beruhigende Feuchtigkeitscreme mit Aloe Vera wurde speziell entwickelt, um trockene und empfindliche Haut intensiv zu pflegen und zu beruhigen. Der hohe Anteil an natürlichem Aloe-Vera-Gel spendet tiefenwirksame Feuchtigkeit, lindert Rötungen und fördert die Regeneration der Haut. Die leichte Textur zieht schnell ein, ohne einen fettigen Film zu hinterlassen, und sorgt für ein geschmeidiges, frisches Hautgefühl. Ideal für die tägliche Pflege nach der Reinigung – besonders an heißen Tagen oder nach dem Sonnenbaden. Kann auch als beruhigende Maske verwendet werden. Geeignet für alle Hauttypen, auch für empfindliche Haut.",
  "fullEn": "This soothing moisturizing cream with aloe vera is specially formulated to calm, hydrate, and restore dry and sensitive skin. With a high concentration of natural aloe vera gel, it penetrates deeply to reduce redness, relieve irritation, and replenish moisture. Its light, non-greasy texture absorbs quickly, leaving the skin soft, smooth, and refreshed. Ideal for daily use after cleansing, especially in hot weather or after sun exposure. Can also be used as a calming mask. Suitable for all skin types, including sensitive skin.",
  "usageRu": "После очищения и тонизирования кожи нанести необходимое количество геля на ладонь, равномерно распределить по лицу и мягко массировать до полного впитывания.",
  "usageDe": "Nach der Reinigung und Tonisierung eine geeignete Menge auftragen, gleichmäßig verteilen und sanft einmassieren, bis es vollständig eingezogen ist.",
  "usageEn": "After cleansing and toning the skin, apply an appropriate amount of gel to the palm, spread evenly over the face, and gently massage until fully absorbed.",
  "category": "facecare"
  },
  {
  "id": 4,
  "nameRu": "Шёлковое мыло с нитями фиброина",
  "nameDe": "Seife mit Seidenfaser-Fibroin",
  "nameEn": "Silk Soap with Fibroin Threads",
  "shortRu": "Глубокое очищение и смягчение кожи",
  "shortDe": "Tiefenreinigung und Hautberuhigung",
  "shortEn": "Deep cleansing and skin softening",
  "price": "920",
  "article": "00000123LPA036",
  "image": "https://i.imgur.com/8nT9MtV.png",
  "fullRu": "Шёлковое мыло с нитями фиброина — это бережный уход для кожи лица и тела с выраженным смягчающим и очищающим эффектом. В состав мыла входят аминокислоты и растительные масла, которые питают и восстанавливают кожу, поддерживая оптимальный уровень увлажнённости. Кокоилглицинат калия и масло чайного дерева активно борются с огрубением и шелушением кожи, способствуют её выравниванию. Комплекс растительных компонентов и протеины шёлка мягко удаляют излишки кожного сала и загрязнения, делая кожу бархатистой и свежей. Пена густая, обволакивающая, с деликатным освежающим ароматом. Подходит для всех типов кожи, включая чувствительную. Рекомендуется для ежедневного применения.",
  "fullDe": "Die Seife mit Seidenfaser-Fibroin ist eine sanfte Pflege für Gesicht und Körper mit intensiv reinigender und beruhigender Wirkung. Sie enthält Aminosäuren und pflanzliche Öle, die die Haut nähren und den Feuchtigkeitshaushalt bewahren. Kalium-Cocoylglycinat und Teebaumöl helfen, raue Stellen zu glätten und die Haut geschmeidiger zu machen. Pflanzliche Komplexe und Seidenproteine entfernen überschüssigen Talg, ohne die Haut auszutrocknen. Der reichhaltige Schaum reinigt gründlich und verleiht ein frisches Hautgefühl. Für alle Hauttypen geeignet, auch für empfindliche. Empfohlen für die tägliche Anwendung.",
  "fullEn": "Silk soap with fibroin threads offers gentle daily care for the face and body, providing deep cleansing and softness. Enriched with amino acids and botanical oils, it nourishes the skin while maintaining its moisture balance. Potassium cocoyl glycinate and tea tree oil help smooth rough skin and soothe irritation. The plant-based complex and silk proteins gently eliminate excess oil and impurities, leaving the skin refreshed, soft, and comfortable. Produces a rich foam with a pleasant, fresh aroma. Suitable for all skin types, including sensitive skin. Recommended for daily use.",
  "usageRu": "Нанести на влажную кожу, вспенить, промассировать и смыть водой.",
  "usageDe": "Auf feuchte Haut auftragen, aufschäumen, einmassieren und mit Wasser abspülen.",
  "usageEn": "Apply to wet skin, lather, massage gently, and rinse with water.",
  "category": "bodycare"
  },
  {
  "id": 5,
  "nameRu": "Высокоэффективное средство для удаления стойких загрязнений",
  "nameDe": "Hocheffektiver Fleckenentferner",
  "nameEn": "High-Efficiency Stain Remover",
  "shortRu": "Быстро и глубоко удаляет пятна с одежды",
  "shortDe": "Entfernt hartnäckige Flecken gründlich",
  "shortEn": "Quickly and deeply removes stains from clothing",
  "price": "790",
  "article": "00000522ASF030",
  "image": "https://i.imgur.com/gjSj7S4.png",
  "fullRu": "Высокоэффективное средство для удаления стойких загрязнений предназначено для глубокой и быстрой очистки ткани без повреждения волокон. Его формула использует технологию тройного действия: проникновение, эмульгирование и солюбилизация. Это позволяет эффективно удалять даже самые сложные пятна — от жира, крови, пота, фруктов и других органических загрязнений. Средство глубоко проникает в структуру ткани, расщепляет загрязнения и облегчает их удаление при стирке. Особенно эффективно для обработки воротников, манжет и других участков с постоянными загрязнениями. Подходит для использования перед ручной или машинной стиркой. Обладает нейтральным ароматом и безопасно для большинства типов тканей.",
  "fullDe": "Der hocheffektive Fleckenentferner wurde für die schnelle und gründliche Reinigung entwickelt, ohne die Textilfasern zu beschädigen. Die Formel basiert auf einer Dreifachtechnologie: Eindringen, Emulgieren und Solubilisieren. Dadurch können selbst hartnäckigste Flecken wie Fett, Blut, Schweiß, Obst und andere organische Verschmutzungen entfernt werden. Das Mittel dringt tief in das Gewebe ein, löst die Flecken auf und erleichtert deren Entfernung beim Waschen. Besonders geeignet zur Vorbehandlung von Kragen, Manschetten und stark verschmutzten Bereichen. Vor dem Hand- oder Maschinenwaschgang anwendbar. Neutraler Duft, für die meisten Stoffarten sicher.",
  "fullEn": "This high-efficiency stain remover is designed to deeply and quickly eliminate stubborn stains without damaging fabric fibers. It employs a triple-action technology: penetration, emulsification, and solubilization. This allows it to tackle even the toughest stains such as oil, blood, sweat, fruit, and other organic residues. The formula penetrates deeply into fabrics, dissolves contaminants, and makes them easy to wash away. Ideal for treating collars, cuffs, and other commonly soiled areas. Suitable for both hand and machine wash. Features a neutral scent and is safe for most fabric types.",
  "usageRu": "Распылите на сухую одежду, оставьте на 3–5 минут, затем стирайте вручную или в машине.",
  "usageDe": "Auf trockene Kleidung sprühen, 3–5 Minuten einwirken lassen, dann per Hand oder Maschine waschen.",
  "usageEn": "Spray onto dry clothing, leave for 3–5 minutes, then wash by hand or machine.",
  "category": "ecolaundry"
  },
  {
  "id": 6,
  "nameRu": "Хозяйственное мыло с содой и энзимами",
  "nameDe": "Hausseife mit Soda und Enzymen",
  "nameEn": "Household Soap with Baking Soda and Enzymes",
  "shortRu": "Глубокая чистка и уход за одеждой",
  "shortDe": "Tiefe Reinigung und Textilpflege",
  "shortEn": "Deep fabric cleaning and garment care",
  "price": "690",
  "article": "00000531ASF036",
  "image": "https://i.imgur.com/8Xd7PGv.png",
  "fullRu": "Хозяйственное мыло с содой и энзимами — это универсальное средство для эффективного удаления различных загрязнений с тканей. Пищевая сода обладает природными очищающими и дезодорирующими свойствами, а ферменты обеспечивают глубокое расщепление жиров и белковых пятен. Мыло образует густую пену, которая проникает в волокна ткани, не повреждая их, и при этом сохраняет мягкость и эластичность материала. Благодаря добавлению растительных масел средство деликатно воздействует на ткань и руки, не вызывая раздражения. Подходит для ручной стирки, предварительной обработки и чистки трудновыводимых пятен на одежде, детских вещах и кухонном текстиле.",
  "fullDe": "Die Hausseife mit Soda und Enzymen ist ein vielseitiges Reinigungsmittel zur effektiven Entfernung verschiedener Flecken aus Textilien. Natron besitzt natürliche Reinigungs- und Geruchsneutralisierungseigenschaften, während Enzyme Fett- und Eiweißflecken tiefgreifend zersetzen. Die Seife erzeugt einen reichhaltigen Schaum, der tief in die Fasern eindringt, ohne sie zu beschädigen, und gleichzeitig die Weichheit und Elastizität des Materials erhält. Dank der Zugabe pflanzlicher Öle wirkt sie sanft auf Stoffe und Hände, ohne Hautreizungen zu verursachen. Ideal für die Handwäsche, Vorbehandlung und Reinigung von hartnäckigen Flecken auf Kleidung, Babytextilien und Küchentextilien.",
  "fullEn": "This household soap with baking soda and enzymes is a versatile solution for effectively removing stains from fabrics. Baking soda provides natural cleansing and deodorizing power, while enzymes break down grease and protein-based stains. The soap produces a rich lather that penetrates deeply into fibers without damaging them and helps maintain the fabric’s softness and elasticity. Enriched with plant-based oils, it’s gentle on both textiles and hands, making it suitable for hand washing, pre-treatment, and deep-cleaning of stubborn stains on clothing, baby wear, and kitchen textiles.",
  "usageRu": "Нанести мыло на влажную ткань, потереть, затем тщательно промыть водой.",
  "usageDe": "Seife auf feuchten Stoff auftragen, reiben und gründlich mit Wasser abspülen.",
  "usageEn": "Apply soap to damp fabric, rub, then rinse thoroughly with water.",
  "category": "ecolaundry"
  },
  {
  "id": 7,
  "nameRu": "Микромолекулярный гель для стирки на растительной основе",
  "nameDe": "Mikromolekulares Waschgel auf Pflanzenbasis",
  "nameEn": "Plant-Based Micromolecular Laundry Gel",
  "shortRu": "Удаляет пятна, обеззараживает, аромат свежести",
  "shortDe": "Fleckentfernung, Desinfektion, Frischeduft",
  "shortEn": "Stain removal, disinfection, fresh scent",
  "price": "790",
  "article": "00001129ASF056",
  "image": "https://i.imgur.com/cFzoH0P.png",
  "fullRu": "Микромолекулярный гель на растительной основе предназначен для эффективной и безопасной стирки. Его инновационная формула быстро вспенивается, образуя микропену, которая глубоко проникает в волокна ткани, очищает и удаляет даже стойкие пятна. Гель обладает дезинфицирующим эффектом и дарит приятный аромат свежести. Он легко смывается, не оставляя следов и не раздражая кожу. Подходит как для ручной, так и для машинной стирки, за исключением деликатных тканей (шёлк, шерсть, кружево). Обеспечивает комплексную защиту одежды и тканей при регулярном использовании.",
  "fullDe": "Das mikromolekulare Waschgel auf Pflanzenbasis ist eine effektive und schonende Lösung für die tägliche Wäsche. Die innovative Formel bildet sofort Schaum, der tief in die Fasern eindringt und hartnäckige Flecken entfernt. Das Gel hat eine desinfizierende Wirkung und verleiht der Wäsche einen frischen Duft. Es lässt sich leicht ausspülen, ohne Rückstände zu hinterlassen oder die Haut zu reizen. Geeignet für Hand- und Maschinenwäsche (außer Seide, Wolle und Feinwäsche). Es bietet umfassenden Schutz für Kleidung und Textilien bei regelmäßiger Anwendung.",
  "fullEn": "This plant-based micromolecular laundry gel is a powerful yet gentle cleaning solution for daily laundry. Its advanced formula produces instant foam that deeply penetrates fabric fibers to remove tough stains. It disinfects, leaves a fresh scent, and rinses out easily without residue or irritation. Suitable for both hand and machine washing, except for delicate fabrics such as silk, wool, and lace. Provides comprehensive garment protection with regular use.",
  "usageRu": "Ручная стирка: 10–20 мл на 3–5 л воды. Машинная: 25–30 мл на 8–10 предметов одежды.",
  "usageDe": "Handwäsche: 10–20 ml auf 3–5 l Wasser. Maschinenwäsche: 25–30 ml für 8–10 Teile.",
  "usageEn": "Hand wash: 10–20 ml per 3–5 L of water. Machine wash: 25–30 ml for 8–10 pieces of clothing.",
  "category": "ecolaundry"
  },
  {
  "id": 8,
  "nameRu": "Антибактериальный гель для стирки с экстрактом бамбука",
  "nameDe": "Antibakterielles Waschgel mit Bambusextrakt",
  "nameEn": "Antibacterial Laundry Gel with Bamboo Extract",
  "shortRu": "Защита от бактерий и свежесть для одежды",
  "shortDe": "Antibakterieller Schutz und Frische für Kleidung",
  "shortEn": "Antibacterial protection and fabric freshness",
  "price": "850",
  "article": "00000529DAA037",
  "image": "https://i.imgur.com/vokEECG.png",
  "fullRu": "Антибактериальный гель для стирки с экстрактом бамбука — это универсальное и концентрированное средство, обеспечивающее не только эффективное удаление загрязнений, но и антибактериальную защиту тканей. Экстракт бамбука обладает природными антисептическими свойствами, препятствует размножению бактерий, устраняет неприятные запахи и придаёт вещам лёгкий аромат свежести. Благодаря концентрированной формуле средство экономично в использовании и подходит для стирки различных типов тканей, включая детскую и повседневную одежду. Рекомендуется для регулярного применения при ручной и машинной стирке. Легко выполаскивается, не оставляя следов на одежде.",
  "fullDe": "Das antibakterielle Waschgel mit Bambusextrakt ist ein konzentriertes Allzweckmittel, das nicht nur hartnäckige Verschmutzungen entfernt, sondern auch einen wirksamen antibakteriellen Schutz bietet. Bambusextrakt hat natürliche antiseptische Eigenschaften, hemmt das Bakterienwachstum, beseitigt unangenehme Gerüche und verleiht der Kleidung einen dezenten Frischeduft. Die konzentrierte Formel ist besonders ergiebig und eignet sich für verschiedene Textilien, auch für Kinderkleidung und den täglichen Gebrauch. Ideal für die regelmäßige Anwendung bei Hand- und Maschinenwäsche. Rückstandsfrei ausspülbar.",
  "fullEn": "Antibacterial laundry gel with bamboo extract is a concentrated all-purpose detergent that delivers powerful cleaning along with antibacterial fabric protection. Bamboo extract provides natural antiseptic benefits, prevents bacterial growth, eliminates unpleasant odors, and leaves clothes with a light, fresh scent. Its concentrated formula is economical and suitable for a wide range of fabrics, including children's and everyday wear. Ideal for regular use in both hand and machine washing. Rinses out easily with no residue.",
  "usageRu": "Добавьте средство согласно таблице дозировки на упаковке. Подходит для ручной и машинной стирки. Хранить в недоступном для детей месте.",
  "usageDe": "Dosierung gemäß Tabelle auf der Verpackung. Für Hand- und Maschinenwäsche geeignet. Von Kindern fernhalten.",
  "usageEn": "Use dosage as indicated on the package. Suitable for both hand and machine washing. Keep out of reach of children.",
  "category": "ecolaundry"
  },
  {
  "id": 9,
  "nameRu": "Дезодоратор для холодильника",
  "nameDe": "Kühlschrank-Deodorant",
  "nameEn": "Refrigerator Deodorizer",
  "shortRu": "Устраняет запахи, антибактериальный эффект",
  "shortDe": "Geruchsentferner, antibakteriell",
  "shortEn": "Eliminates odors, antibacterial effect",
  "price": "590",
  "article": "00000610DAA105",
  "image": "https://i.imgur.com/3yqcBv9.png",
  "fullRu": "Дезодоратор для холодильника на основе активированного угля и чайных полифенолов — это эффективное средство для устранения неприятных запахов и бактерий. Активированный уголь, полученный из кокосовой скорлупы, обладает высокой пористостью, что позволяет ему быстро абсорбировать запахи и влагу. Чайные полифенолы дополняют антибактериальное действие, предотвращая рост патогенной микрофлоры. Средство безопасно для использования рядом с продуктами и не требует электричества или батареек. Подходит для размещения в любых зонах холодильника (кроме морозильной камеры). Прост в использовании и рассчитан на длительное применение — до 3 месяцев без замены.",
  "fullDe": "Der Kühlschrank-Deodorant mit Aktivkohle und Teepolyphenolen ist eine effektive Lösung zur Beseitigung unangenehmer Gerüche und zur Bekämpfung von Bakterien. Die aus Kokosnussschalen gewonnene Aktivkohle besitzt eine hohe Porosität, die Gerüche und Feuchtigkeit schnell absorbiert. Die enthaltenen Teepolyphenole ergänzen die antibakterielle Wirkung und verhindern das Wachstum schädlicher Mikroorganismen. Sicher im Kontakt mit Lebensmitteln, benötigt weder Strom noch Batterien. Geeignet für alle Bereiche im Kühlschrank, außer dem Gefrierfach. Einfache Anwendung, Wirkung bis zu 3 Monate.",
  "fullEn": "This refrigerator deodorizer with activated charcoal and tea polyphenols is an efficient solution for eliminating unpleasant odors and combating bacteria. The coconut shell-derived charcoal has high porosity, allowing it to rapidly absorb moisture and odors. Tea polyphenols enhance the antibacterial effect by suppressing microbial growth. Safe for use around food, requires no electricity or batteries. Suitable for all refrigerator compartments (except the freezer). Easy to use and lasts up to 3 months without replacement.",
  "usageRu": "Снимите пленку, откройте крышку, поместите в холодильник. Не помещать в морозильную камеру. Заменять каждые 2–3 месяца.",
  "usageDe": "Folie entfernen, Deckel öffnen und in den Kühlschrank stellen. Nicht ins Gefrierfach legen. Alle 2–3 Monate austauschen.",
  "usageEn": "Remove film, open the lid, and place in the refrigerator. Do not place in the freezer. Replace every 2–3 months.",
  "category": "ecohome"
  },
  {
  "id": 10,
  "nameRu": "Моющее средство для посуды",
  "nameDe": "Geschirrspülmittel",
  "nameEn": "Dishwashing Liquid",
  "shortRu": "Для посуды и овощей/фруктов, мягкое и безопасное",
  "shortDe": "Für Geschirr und Obst/Gemüse, sanft und sicher",
  "shortEn": "Gentle and safe for dishes and fruits/vegetables",
  "price": "указать цену",
  "article": "00000815ASD001",
  "image": "https://i.imgur.com/nXSm58k.png",
  "fullRu": "Это экологичное моющее средство эффективно и безопасно удаляет жир, грязь и неприятные запахи с посуды, столовых приборов, а также с фруктов и овощей. В основе средства очищенная вода и мягкие кокосовые ПАВ, которые бережно воздействуют на кожу рук и предотвращают её сухость. Глицерин в составе дополнительно ухаживает за кожей, сохраняя её увлажнённой и мягкой даже при частом мытье. Средство полностью смывается водой, не оставляет следов на посуде и продуктах, а также не содержит вредных химических веществ. Подходит для ежедневного использования в домашних условиях.",
  "fullDe": "Dieses umweltfreundliche Geschirrspülmittel entfernt wirksam und sicher Fett, Schmutz und unangenehme Gerüche von Geschirr, Besteck sowie Obst und Gemüse. Die Basis aus reinem Wasser und milden Kokostensiden sorgt für eine sanfte Reinigung, schützt die Hände vor Trockenheit und Irritationen. Das enthaltene Glycerin pflegt die Haut zusätzlich und hält sie geschmeidig, selbst bei häufigem Gebrauch. Das Mittel lässt sich vollständig mit Wasser ausspülen, hinterlässt keine Rückstände auf Geschirr und Lebensmitteln und enthält keine schädlichen Chemikalien. Ideal für den täglichen Gebrauch im Haushalt.",
  "fullEn": "This eco-friendly dishwashing liquid safely and effectively removes grease, dirt, and odors from dishes, utensils, and even fruits and vegetables. Formulated with purified water and gentle coconut-based surfactants, it cleans without drying out or irritating the skin. Glycerin helps keep hands moisturized and soft even with frequent use. The product rinses off completely without leaving residues on dishes or produce and contains no harmful chemicals. Perfectly suitable for daily household use.",
  "usageRu": "Нанесите на губку или растворите в воде. После мытья тщательно смыть водой.",
  "usageDe": "Auf einen Schwamm auftragen oder in Wasser verdünnen. Danach gründlich mit Wasser abspülen.",
  "usageEn": "Apply to a sponge or dilute in water. Rinse thoroughly with water after washing.",
  "category": "ecohome"
  },
  {
  "id": 11,
  "nameRu": "Кухонное средство для удаления пятен от тяжелого масла",
  "nameDe": "Küchenmittel gegen hartnäckige Ölflecken",
  "nameEn": "Kitchen Heavy Oil Stain Remover",
  "shortRu": "Мощное средство против жирных загрязнений",
  "shortDe": "Starkes Mittel gegen fettige Verschmutzungen",
  "shortEn": "Powerful solution against greasy stains",
  "price": "указать цену",
  "article": "00001153DAC056",
  "image": "https://i.imgur.com/4njXyU2.png",
  "fullRu": "Это эффективное кухонное средство от iLiFE быстро и качественно устраняет даже самые стойкие масляные и жирные пятна с кухонных поверхностей, плит, духовок и текстиля. Благодаря инновационной формуле спрей глубоко проникает в загрязнения, быстро эмульгирует и растворяет жир, облегчая его удаление без повреждения материалов. Средство полностью смывается водой, не оставляет разводов и безопасно для большинства поверхностей на кухне. Подходит для ежедневного использования и значительно упрощает процесс уборки на кухне.",
  "fullDe": "Dieses leistungsstarke Küchenmittel von iLiFE entfernt schnell und effektiv selbst hartnäckigste Öl- und Fettflecken von Küchenoberflächen, Herdplatten, Backöfen und Textilien. Die innovative Formel dringt tief in die Verschmutzungen ein, emulgiert und löst Fett mühelos, ohne Oberflächen zu beschädigen. Das Mittel lässt sich vollständig mit Wasser abspülen, hinterlässt keine Schlieren und ist für die meisten Küchenoberflächen unbedenklich. Ideal für den täglichen Gebrauch, vereinfacht die Küchenreinigung erheblich.",
  "fullEn": "This highly effective kitchen spray from iLiFE quickly and thoroughly removes even the toughest oil and grease stains from kitchen surfaces, stoves, ovens, and fabrics. Its innovative formula penetrates deeply into stains, quickly emulsifying and dissolving grease for easy removal without damaging surfaces. The product rinses off completely, leaves no streaks, and is safe for most kitchen materials. Perfect for everyday use, significantly simplifying kitchen cleaning tasks.",
  "usageRu": "Распылить на загрязнение, оставить на 3–5 минут, протереть тканью/губкой и смыть водой.",
  "usageDe": "Auf die Verschmutzung sprühen, 3–5 Minuten einwirken lassen, mit Tuch/Schwamm abwischen und mit Wasser abspülen.",
  "usageEn": "Spray on the stain, leave for 3–5 minutes, wipe with a cloth or sponge, and rinse with water.",
  "category": "ecohome"
  },
  {
  "id": 12,
  "nameRu": "Многофункциональная электролизная вода",
  "nameDe": "Multifunktionales Elektrolytwasser",
  "nameEn": "Multifunctional Electrolyzed Water",
  "shortRu": "Для очищения поверхностей и удаления запахов",
  "shortDe": "Zur Reinigung und Geruchsentfernung",
  "shortEn": "For surface cleaning and odor removal",
  "price": "указать цену",
  "article": "00000886KAB001",
  "image": "https://i.imgur.com/ouFhqZl.png",
  "fullRu": "Многофункциональная электролизная вода — это безопасное и экологичное средство без химических добавок, предназначенное для эффективного очищения различных поверхностей в доме. Продукт прекрасно справляется с загрязнениями на технике, мебели, стекле, мониторах и экранах, а также эффективно адсорбирует формальдегид, снижая его содержание в воздухе. Отлично удаляет остатки пестицидов с поверхности фруктов и овощей, делая их безопасными для употребления. Средство абсолютно гипоаллергенно, не содержит отдушек, безопасно для людей и домашних животных. Подходит для ежедневного применения и не требует дополнительных средств защиты при использовании.",
  "fullDe": "Das multifunktionale Elektrolytwasser ist ein sicheres und umweltfreundliches Reinigungsmittel ohne chemische Zusätze, das für eine effektive Reinigung verschiedener Haushaltsoberflächen entwickelt wurde. Es entfernt zuverlässig Schmutz von Geräten, Möbeln, Glas, Monitoren und Bildschirmen und adsorbiert effektiv Formaldehyd, wodurch dessen Konzentration in der Raumluft reduziert wird. Außerdem beseitigt es gründlich Pestizidrückstände auf Obst und Gemüse und macht diese sicher für den Verzehr. Das Produkt ist absolut hypoallergen, frei von Duftstoffen und sicher für Menschen sowie Haustiere. Ideal für den täglichen Gebrauch, ohne dass zusätzliche Schutzmaßnahmen erforderlich sind.",
  "fullEn": "Multifunctional Electrolyzed Water is a safe and eco-friendly cleaner free from chemical additives, designed for effectively cleaning various household surfaces. The product excellently removes dirt from electronics, furniture, glass, monitors, and screens, while effectively adsorbing formaldehyde to improve air quality. It thoroughly eliminates pesticide residues from fruits and vegetables, ensuring they are safe for consumption. This solution is completely hypoallergenic, fragrance-free, and safe for both people and pets. Suitable for daily use, it requires no additional protective equipment during application.",
  "usageRu": "Распылить на поверхность, оставить на несколько секунд и вытереть. Для фруктов/овощей: распылить, 1–2 мин подождать и тщательно смыть.",
  "usageDe": "Aufsprühen, einige Sekunden einwirken lassen und abwischen. Für Obst/Gemüse: aufsprühen, 1–2 Minuten warten und gründlich abspülen.",
  "usageEn": "Spray onto surface, wait a few seconds, then wipe clean. For fruits/vegetables: spray, wait 1–2 minutes, then rinse thoroughly.",
  "category": "ecohome"
  },
  {
  "id": 13,
  "nameRu": "Салфетка для посуды с пузырьками",
  "nameDe": "Geschirrreinigungstuch mit Bläschen",
  "nameEn": "Dish Cleaning Cloth with Bubbles",
  "shortRu": "Универсальная салфетка с моющим эффектом",
  "shortDe": "Multifunktionales Reinigungstuch mit Waschmittel",
  "shortEn": "Universal cleaning cloth with washing effect",
  "price": "указать цену",
  "article": "00003296CGA146",
  "image": "https://i.imgur.com/xfgtTDG.png",
  "fullRu": "Салфетка для посуды с пузырьками — инновационное средство для уборки, сочетающее эффективные моющие свойства и бережный уход за поверхностями. Она отлично подходит для мытья посуды, фруктов и овощей, варочных поверхностей, плит и других кухонных предметов. Специальная пузырчатая структура позволяет эффективно удалять жир, загрязнения и остатки пищи без применения дополнительных чистящих средств, сохраняя при этом текстуру и внешний вид поверхностей. Салфетка выполнена из волокна восстановленной целлюлозы и полиэфира, обладает высокой впитывающей способностью, быстро сохнет и не допускает размножения бактерий. Гипоаллергенна, протестирована на раздражение кожи, подходит для частого применения и безопасна для всей семьи.",
  "fullDe": "Das Geschirrreinigungstuch mit Bläschen ist ein innovatives Reinigungsmittel, das effektive Wascheigenschaften und schonende Pflege vereint. Es eignet sich hervorragend zum Reinigen von Geschirr, Obst und Gemüse, Kochflächen, Herden und anderen Küchenutensilien. Die spezielle Struktur mit Bläschen entfernt effektiv Fett, Schmutz und Speisereste ohne zusätzliche Reinigungsmittel, schützt dabei aber die Textur und das Aussehen der Oberflächen. Das Tuch besteht aus regenerierten Zellulosefasern und Polyester, hat eine hohe Saugfähigkeit, trocknet schnell und verhindert die Vermehrung von Bakterien. Es ist hypoallergen, hautfreundlich getestet, ideal für häufige Verwendung und sicher für die ganze Familie.",
  "fullEn": "The Dish Cleaning Cloth with Bubbles is an innovative cleaning solution that combines effective cleaning properties with gentle surface care. Ideal for cleaning dishes, fruits, vegetables, cooking surfaces, stovetops, and various kitchen items. Its unique bubble structure effectively removes grease, dirt, and food residues without additional cleaning agents, preserving surface textures and appearances. Made from regenerated cellulose fibers and polyester, the cloth has excellent absorbency, dries quickly, and prevents bacterial growth. Hypoallergenic, skin-friendly tested, suitable for frequent use, and safe for the entire family.",
  "usageRu": "Не намокайте упаковку и остатки ткани. Перед применением на дорогой утвари протестируйте на незаметном участке. При попадании в глаза промыть водой. Хранить вдали от детей и животных.",
  "usageDe": "Vermeiden Sie das Befeuchten der Verpackung und der restlichen Tücher. Bei empfindlichem Geschirr zuerst testen. Bei Augenkontakt mit Wasser spülen. Von Kindern und Tieren fernhalten.",
  "usageEn": "Avoid wetting the packaging and remaining cloths. Test on inconspicuous areas of valuable utensils first. Rinse thoroughly with water in case of eye contact. Keep out of reach of children and pets.",
  "category": "ecohome"
  },
  {
  "id": 14,
  "nameRu": "Очищающие влажные салфетки для кухни",
  "nameDe": "Reinigungstücher für die Küche",
  "nameEn": "Kitchen Cleaning Wet Wipes",
  "shortRu": "Быстрое и эффективное удаление жира и пятен",
  "shortDe": "Schnelle und effektive Entfernung von Fett und Flecken",
  "shortEn": "Quick and effective grease and stain removal",
  "price": "указать цену",
  "article": "00000816CEA076",
  "image": "https://imgur.com/AFsnq5H.png",
  "fullRu": "Очищающие влажные салфетки для кухни специально разработаны для быстрого и качественного удаления загрязнений и жира с любых кухонных поверхностей и оборудования. Идеально подходят для ежедневного ухода за столовыми приборами, посудой, стеклокерамическими плитами, раковинами, холодильниками, микроволновыми печами и другими кухонными приборами. Салфетки не содержат агрессивных химических веществ, поэтому безопасны для применения на поверхностях, контактирующих с пищей. Благодаря особой формуле салфетки эффективно растворяют жир и удаляют стойкие пятна, не оставляя разводов и липкости. Удобная упаковка позволяет быстро и легко извлекать салфетки, делая их незаменимыми помощниками на кухне и в быту.",
  "fullDe": "Die Reinigungstücher für die Küche wurden speziell für eine schnelle und gründliche Entfernung von Schmutz, Fett und Flecken von allen Küchenoberflächen und Geräten entwickelt. Sie eignen sich perfekt zur täglichen Reinigung von Besteck, Geschirr, Glaskeramikkochfeldern, Spülen, Kühlschränken, Mikrowellen und anderen Küchenutensilien. Die Tücher enthalten keine aggressiven Chemikalien und sind daher sicher für Lebensmitteloberflächen. Dank der speziellen Wirkformel lösen sie effektiv Fett und entfernen hartnäckige Flecken, ohne Schlieren oder Klebrigkeit zu hinterlassen. Die praktische Verpackung ermöglicht ein einfaches Entnehmen und macht sie zu einem unverzichtbaren Helfer in Küche und Haushalt.",
  "fullEn": "Kitchen Cleaning Wet Wipes are specially designed to quickly and effectively remove dirt, grease, and stains from all kitchen surfaces and equipment. Ideal for daily cleaning of cutlery, dishes, glass-ceramic cooktops, sinks, refrigerators, microwaves, and other kitchen appliances. The wipes do not contain harsh chemicals and are safe for use on food-contact surfaces. Thanks to their special formula, the wipes effectively dissolve grease and eliminate stubborn stains without leaving streaks or stickiness. The convenient packaging allows for quick and easy use, making them an essential helper in the kitchen and household.",
  "usageRu": "Достаньте салфетку и протрите загрязнённую поверхность. После применения при необходимости смойте водой.",
  "usageDe": "Ein Tuch entnehmen und die verschmutzte Fläche abwischen. Bei Bedarf mit Wasser nachspülen.",
  "usageEn": "Take a wipe and clean the dirty surface. Rinse with water after use if necessary.",
  "category": "ecolaundry"
  },
  {
  "id": 16,
  "nameRu": "Отбеливающий гель для стирки с энзимами 2 кг",
  "nameDe": "Bleich-Waschgel mit Enzymen 2 kg",
  "nameEn": "Whitening Laundry Gel with Enzymes 2 kg",
  "shortRu": "Глубокая очистка и отбеливание одежды",
  "shortDe": "Tiefenreinigung und Aufhellung der Kleidung",
  "shortEn": "Deep cleaning and whitening of clothes",
  "price": "указать цену",
  "article": "00000000BLE016",
  "image": "https://imgur.com/d1gP5q5.png",
  "fullRu": "Отбеливающий гель для стирки с энзимами — это современное средство для эффективной и деликатной стирки белых и светлых тканей. Инновационная формула геля сочетает поверхностно-активные вещества и специальные энзимы, которые активно расщепляют и удаляют даже самые сложные загрязнения и пятна. Средство глубоко проникает в волокна ткани, растворяет остатки жира, белков, крахмала и придаёт белью ослепительную белизну, не повреждая структуру волокон. Подходит для ручной и автоматической стирки, предотвращает появление серого налёта, сохраняет яркость белого цвета. Регулярное использование помогает поддерживать идеальную чистоту и свежесть ваших вещей. Гель легко дозируется и быстро растворяется даже в прохладной воде.",
  "fullDe": "Das Bleich-Waschgel mit Enzymen ist ein modernes Mittel für die effektive und schonende Reinigung von weißer und heller Kleidung. Die innovative Formel kombiniert Tenside und spezielle Enzyme, die selbst hartnäckige Flecken und Verschmutzungen lösen und entfernen. Das Mittel dringt tief in die Fasern ein, löst Fett-, Protein- und Stärkereste und verleiht Ihrer Wäsche strahlende Weiße, ohne die Stoffstruktur zu beschädigen. Geeignet für Hand- und Maschinenwäsche, verhindert Grauschleier und erhält die Leuchtkraft weißer Textilien. Bei regelmäßiger Anwendung bleibt Ihre Wäsche perfekt sauber und frisch. Das Gel ist leicht zu dosieren und löst sich selbst bei niedrigen Temperaturen schnell auf.",
  "fullEn": "The whitening laundry gel with enzymes is a modern solution for deep and gentle cleaning of white and light-colored fabrics. Its advanced formula combines surfactants and specialized enzymes that break down and remove even the toughest stains and dirt. The gel penetrates deep into the fibers, dissolves grease, protein, and starch residues, and restores brilliant whiteness without damaging the fabric structure. Suitable for both hand and machine washing, it prevents grayish residue and keeps your laundry bright white. Regular use ensures perfect cleanliness and long-lasting freshness. The gel is easy to dose and dissolves quickly, even in cold water.",
  "usageRu": "Добавьте гель в отсек для моющих средств в стиральной машине. Следуйте дозировке на упаковке в зависимости от степени загрязнения и объема белья.",
  "usageDe": "Geben Sie das Gel in das Waschmittelfach der Waschmaschine. Dosierung je nach Verschmutzungsgrad und Wäschemenge gemäß Verpackungsempfehlung.",
  "usageEn": "Add the gel to the detergent compartment of your washing machine. Follow the dosage instructions on the packaging based on the level of soiling and laundry load.",
  "category": "ecolaundry"
  },
  {
  "id": 17,
  "nameRu": "Антибактериальный гель для стирки с экстрактом бамбука 1 кг",
  "nameDe": "Antibakterielles Waschgel mit Bambusextrakt 1 kg",
  "nameEn": "Antibacterial Bamboo Laundry Gel 1 kg",
  "shortRu": "Эффективная стирка и защита тканей",
  "shortDe": "Effektives Waschen und Gewebeschutz",
  "shortEn": "Effective washing and fabric protection",
  "price": "указать цену",
  "article": "00000000BAM017",
  "image": "https://imgur.com/lram9DE.png",
  "fullRu": "Антибактериальный гель для стирки с экстрактом бамбука предназначен для комплексного ухода за бельём и одеждой всех типов. Его уникальная формула на основе ПАВ, экстракта бамбука, воды, моющих факторов и ароматизаторов глубоко проникает в структуру ткани, эффективно удаляя грязь, неприятные запахи и болезнетворные бактерии. Концентрированное средство с экстрактом бамбука не только очищает, но и обеспечивает антибактериальную защиту, поддерживает мягкость и свежесть ткани после каждой стирки. Практичная система дозировки облегчает применение как в ручной, так и в машинной стирке, делая расход максимально экономичным. Подходит для регулярного использования, безопасен для здоровья и окружающей среды.",
  "fullDe": "Das antibakterielle Waschgel mit Bambusextrakt ist für die umfassende Pflege aller Arten von Wäsche und Kleidung entwickelt. Die spezielle Formel mit Tensiden, Bambusextrakt, Wasser, Reinigungsfaktoren und Duftstoffen dringt tief in die Fasern ein und entfernt effektiv Schmutz, unangenehme Gerüche und krankheitserregende Bakterien. Die konzentrierte Zusammensetzung bietet antibakteriellen Schutz und hält die Textilien nach jedem Waschen weich und frisch. Dank des praktischen Dosiersystems eignet sich das Mittel sowohl für die Hand- als auch Maschinenwäsche und ist äußerst sparsam im Verbrauch. Für den regelmäßigen Gebrauch geeignet, gesundheitsschonend und umweltfreundlich.",
  "fullEn": "The antibacterial bamboo laundry gel is designed for thorough care of all types of laundry and clothing. Its unique formula based on surfactants, bamboo extract, water, cleaning agents, and fragrances penetrates deep into fabric fibers, effectively removing dirt, unpleasant odors, and harmful bacteria. The concentrated formula with bamboo extract not only cleans but also provides antibacterial protection, keeping your clothes soft and fresh after every wash. Convenient dosing makes it suitable for both hand and machine washing, ensuring economical use. Safe for daily use, gentle on skin and environmentally friendly.",
  "usageRu": "Добавьте средство в отсек для стирального порошка в зависимости от количества белья. Используйте согласно инструкции на упаковке.",
  "usageDe": "Geben Sie das Mittel je nach Wäschemenge in das Waschmittelfach. Anwendung gemäß den Angaben auf der Verpackung.",
  "usageEn": "Add the gel to the detergent compartment depending on laundry amount. Use according to instructions on the package.",
  "category": "ecolaundry"
  },
  {
  "id": 18,
  "nameRu": "Средство для стирки натурального шёлка и шерсти 800 мл",
  "nameDe": "Waschmittel für Naturseide und Wolle 800 ml",
  "nameEn": "Detergent for Natural Silk and Wool 800 ml",
  "shortRu": "Очищение, защита и аромат для деликатных тканей",
  "shortDe": "Reinigung, Schutz und Duft für empfindliche Stoffe",
  "shortEn": "Cleans, protects, and scents delicate fabrics",
  "price": "указать цену",
  "article": "00000000SIL018",
  "image": "https://imgur.com/XnqYPzM.png",
  "fullRu": "Специальное средство для стирки деликатных тканей, созданное для бережного ухода за шелком, шерстью, а также хлопковыми и льняными изделиями. Формула глубоко очищает и обеззараживает одежду, предотвращает усадку и деформацию после стирки, защищает волокна от повреждений, сохраняя их естественную мягкость, пушистость и эластичность. Средство минимизирует образование складок, сохраняет яркость цвета и гладкость поверхности ткани. Благодаря нежному аромату османтуса одежда наполняется свежестью и умиротворением. Продукт прост в применении и подходит как для ручной, так и для машинной стирки. Состав: ПАВ, добавки, консерванты, ароматизаторы. Меры предосторожности: Не подвергайте одежду интенсивному трению и солнечным лучам. При попадании в глаза промойте большим количеством воды.",
  "fullDe": "Ein spezielles Waschmittel für empfindliche Stoffe wie Seide und Wolle, aber auch für Baumwoll- und Leinenwaren. Die Formel reinigt und desinfiziert tiefenwirksam, schützt die Fasern vor Schäden, verhindert Einlaufen und Verformung nach dem Waschen, erhält ihre natürliche Weichheit, Flauschigkeit und Elastizität. Das Mittel reduziert Faltenbildung, erhält Farbbrillanz und eine glatte Oberfläche. Der dezente Osmanthus-Duft verleiht der Kleidung ein Gefühl von Frische und Ruhe. Praktisch für Hand- und Maschinenwäsche. Inhaltsstoffe: Tenside, Zusätze, Konservierungsmittel, Duftstoffe. Vorsichtsmaßnahmen: Kleidung nicht stark reiben und nicht dem Sonnenlicht aussetzen. Bei Augenkontakt mit viel Wasser ausspülen.",
  "fullEn": "A special detergent designed for gentle care of delicate fabrics such as silk, wool, as well as cotton and linen. The formula deeply cleanses and disinfects, prevents shrinking and deformation after washing, protects fibers from damage while keeping them naturally soft, fluffy, and elastic. It minimizes creases, preserves vibrant color, and maintains a smooth fabric surface. The subtle scent of osmanthus brings freshness and tranquility to your clothing. Easy to use and suitable for both hand and machine washing. Ingredients: surfactants, additives, preservatives, fragrances. Precautions: Do not rub woolen clothes vigorously, avoid exposure to sunlight. If product gets into eyes, rinse thoroughly with water.",
  "usageRu": "Для ручной стирки – растворите 20 мл в 3–5 л воды, замочите на 10 минут, ополосните. Для машинной – добавьте нужное количество и выберите деликатный режим.",
  "usageDe": "Handwäsche: 20 ml auf 3–5 l Wasser, 10 Min einweichen, ausspülen. Maschine: passende Menge hinzufügen und Schonwaschgang wählen.",
  "usageEn": "For hand washing: dissolve 20 ml in 3–5 liters of water, soak for 10 minutes, rinse well. For machine washing: add the required amount and select the delicate cycle.",
  "category": "health"
  },
  {
  "id": 19,
  "nameRu": "Пластырь от холки",
  "nameDe": "Pflaster gegen Nackenverspannungen",
  "nameEn": "Patch for Neck and Shoulder Tension",
  "shortRu": "Обезболивание и восстановление мышц и суставов",
  "shortDe": "Schmerzlinderung und Regeneration von Muskeln und Gelenken",
  "shortEn": "Pain relief and recovery for muscles and joints",
  "price": "указать цену",
  "article": "00000185CIA054",
  "image": "https://imgur.com/SEiFrPL.png",
  "fullRu": "Пластырь от холки создан на основе современных нанотехнологий, объединяя опыт китайской народной медицины и последние достижения в области восстановления опорно-двигательного аппарата. Благодаря уникальному комплексу натуральных ингредиентов пластырь обладает противовоспалительным, обезболивающим и мышечно-расслабляющим действием. Он помогает снять напряжение в мышцах и связках, улучшает микроциркуляцию крови, способствует быстрому снятию воспаления, ускоряет регенерацию тканей и уменьшает застой крови. Пластырь эффективен при болях и дискомфорте в области шеи, плеч, спины, а также при травмах мягких тканей, ушибах, синяках и ревматических болях. Использование пластыря обеспечивает не только быстрое облегчение боли, но и общее улучшение состояния мышц и суставов. Состав: картамин, чуаньхионг, саньци, даньшэнь, хуанцзин (Polygonatum), орхидея (Dendrobium), лонггу, цзяогулан, годжи, жасмин, танггуэй, черная слива (ву-мэй).",
  "fullDe": "Das Pflaster gegen Nackenverspannungen basiert auf modernen Nanotechnologien und vereint das Wissen der traditionellen chinesischen Medizin mit neuesten Entwicklungen zur Unterstützung des Bewegungsapparates. Der einzigartige Mix aus natürlichen Inhaltsstoffen wirkt entzündungshemmend, schmerzlindernd und muskelentspannend. Es hilft, Muskelverspannungen und Schmerzen zu lindern, fördert die Mikrozirkulation, reduziert Schwellungen und regt die Regeneration des Gewebes an. Besonders wirksam bei Verspannungen und Schmerzen im Nacken-, Schulter- und Rückenbereich sowie bei Verletzungen von Weichteilen, Prellungen und rheumatischen Beschwerden. Die Anwendung sorgt nicht nur für eine schnelle Linderung, sondern verbessert langfristig das Wohlbefinden von Muskeln und Gelenken. Zusammensetzung: Carthamus (Kartamin), Ligusticum (Chuanxiong), Sanqi-Kraut, Salvia miltiorrhiza (Danshen), Polygonatum (Huangjing), Dendrobium-Orchidee, Longgu, Jiaogulan, Goji, Jasmin, Danggui, Schwarze Pflaume (Wu Mei).",
  "fullEn": "This patch for neck and shoulder tension is developed with modern nanotechnology and combines the wisdom of traditional Chinese medicine with advanced innovations for musculoskeletal health. Its unique blend of natural ingredients delivers anti-inflammatory, pain-relieving, and muscle-relaxing effects. The patch helps to relieve muscle tension, improve local blood flow, reduce swelling, and accelerate tissue regeneration. Effective for neck, shoulder, and back pain, as well as for soft tissue injuries, bruises, and rheumatic discomfort. Application provides not only fast pain relief but also long-term improvement of muscle and joint function. Ingredients: Carthamus, Ligusticum, Sanqi herb, Salvia miltiorrhiza, Polygonatum, Dendrobium orchid, Longgu, Jiaogulan, Goji, Jasmine, Danggui, Black plum (Wu Mei).",
  "usageRu": "Наклеить на область холки на сухую и чистую кожу. Оставить на 6–12 часов. Применять курсами. Избегать попадания на открытые раны.",
  "usageDe": "Auf trockene, saubere Haut im Nackenbereich kleben. 6–12 Stunden einwirken lassen. Kurenweise anwenden. Kontakt mit offenen Wunden vermeiden.",
  "usageEn": "Apply to clean, dry skin on the neck area. Leave on for 6–12 hours. Use in courses. Avoid contact with open wounds.",
  "category": "health"
  },
  {
  "id": 20,
  "nameRu": "CARICH Питательный расслабляющий бальзам на травах",
  "nameDe": "CARICH Nährender entspannender Kräuterbalsam",
  "nameEn": "CARICH Nourishing Relaxing Herbal Balm",
  "shortRu": "Массажная жидкость для облегчения боли и восстановления",
  "shortDe": "Massageflüssigkeit zur Schmerzlinderung und Regeneration",
  "shortEn": "Massage liquid for pain relief and recovery",
  "price": "указать цену",
  "article": "00000452CGA046",
  "image": "https://imgur.com/LsZKBWS.png",
  "fullRu": "Массажная жидкость «Секреты китайской медицины» сочетает целебные свойства натуральных растительных экстрактов для облегчения боли и улучшения состояния кожи. Продукт предназначен для облегчения симптомов остеохондроза, суставных и мышечных болей, а также при головной и поясничной боли. Эффективен при вывихах, переломах, повреждениях мышц и сухожилий, воспалениях различной природы и кожных проблемах в стадии ремиссии. Действие продукта: — Снимает отёки и гематомы. — Обладает выраженным обезболивающим эффектом при ушибах, вывихах и растяжениях. — Способствует выведению токсинов и солей из застойных мышц. — Борется с папилломами. — Снимает мышечные спазмы. — Облегчает зуд и раздражение при укусах насекомых. — Улучшает подвижность суставов и способствует восстановлению хрящевой и соединительной ткани. — Улучшает циркуляцию крови.",
  "fullDe": "Die Massageflüssigkeit „Geheimnisse der chinesischen Medizin“ vereint die heilenden Eigenschaften natürlicher Pflanzenextrakte zur Schmerzlinderung und Verbesserung des Hautzustands. Das Produkt ist zur Linderung von Symptomen bei Osteochondrose, Gelenk- und Muskelschmerzen sowie bei Kopf- und Rückenschmerzen bestimmt. Es ist wirksam bei Verstauchungen, Brüchen, Muskel- und Sehnenverletzungen, Entzündungen verschiedener Ursachen und Hautproblemen in der Remissionsphase. Wirkung des Produkts: – Reduziert Schwellungen und Hämatome. – Hat eine starke schmerzlindernde Wirkung bei Prellungen, Verstauchungen und Zerrungen. – Fördert die Ausleitung von Toxinen, Schlacken und Salzen aus verspannten Muskeln. – Wirkt gegen Papillome. – Lindert Muskelkrämpfe. – Mildert Juckreiz und Reizungen bei Insektenstichen. – Verbessert die Beweglichkeit der Gelenke und unterstützt die Regeneration von Knorpel- und Bindegewebe. – Fördert die Durchblutung.",
  "fullEn": "The massage liquid 'Secrets of Chinese Medicine' combines the healing properties of natural herbal extracts to relieve pain and improve skin condition. The product is intended to alleviate symptoms of osteochondrosis, joint and muscle pain, as well as headaches and lower back pain. It is effective for sprains, fractures, muscle and tendon injuries, inflammation of various origins, and skin problems during remission. The product helps reduce swelling and bruises, provides strong pain relief for contusions, dislocations, and sprains, aids in the removal of toxins and salts from stagnant muscles, fights papillomas, relieves muscle spasms, soothes itching and irritation from insect bites, improves joint mobility, and supports the restoration of cartilage and connective tissue. It also improves blood circulation.",
  "usageRu": "Наносить на проблемные зоны легкими массирующими движениями 2–3 раза в день.",
  "usageDe": "Auf die betroffenen Stellen 2–3 Mal täglich mit leichten, massierenden Bewegungen auftragen.",
  "usageEn": "Apply to problem areas with light massage movements 2–3 times a day.",
  "category": "health"
  },
  {
  "id": 21,
  "nameRu": "Растворимый напиток со спирулиной и пробиотиками 2 г x 20",
  "nameDe": "Instantgetränk mit Spirulina und Probiotika 2 g x 20",
  "shortRu": "Пробиотики и спирулина для пищеварения и иммунитета",
  "shortDe": "Probiotika und Spirulina für Verdauung und Immunität",
  "price": "указать цену",
  "article": "00000000SPB021",
  "image": "https://imgur.com/TvGFkaF.png",
  "fullRu": "Пробиотический напиток с пребиотиками и спирулиной поддерживает пищеварение и иммунитет. В составе — комплекс пробиотиков и пребиотиков, спирулина, витамины и минералы. Улучшает работу ЖКТ, повышает энергию и иммунную защиту.",
  "fullDe": "Probiotisches Getränk mit Präbiotika und Spirulina unterstützt Verdauung und Immunität. Enthält Probiotika, Präbiotika, Spirulina, Vitamine und Mineralstoffe. Fördert die Darmgesundheit, Energie und Abwehrkräfte.",
  "usageRu": "Растворите пакетик в 100 мл воды, принимайте 1–2 раза в день.",
  "usageDe": "Einen Beutel in 100 ml Wasser auflösen, 1–2 Mal täglich einnehmen.",
  "category": "health"
  },
  {
  "id": 22,
  "nameRu": "Питательный напиток с кальцием, магнием и цинком 300 мл",
  "nameDe": "Nährstoffgetränk mit Calcium, Magnesium und Zink 300 ml",
  "shortRu": "Минеральный напиток для костей, нервов и иммунитета",
  "shortDe": "Mineralgetränk für Knochen, Nerven und Immunsystem",
  "price": "указать цену",
  "article": "00000000NMZ022",
  "image": "https://imgur.com/rz8leQs.png",
  "fullRu": "Напиток рекомендуется для людей, нуждающихся в повышенном потреблении минералов, для поддержания нормального уровня энергии, здоровья костей, нервной системы и иммунной защиты. Свойства напитка: ✔️ Поддержка здоровья костей и зубов ✔️ Регуляция нервной системы ✔️ Поддержка иммунной системы ✔️ Энергетическая поддержка ✔️ Улучшение состояния кожи ✔️ Поддержка сердечно-сосудистой системы ✔️ Снижение болей в мышцах и суставах. Магний — 230 мг, Кальций — 1800 мг, Цинк — 16 мг.",
  "fullDe": "Das Getränk wird für Menschen empfohlen, die einen erhöhten Mineralstoffbedarf haben, um ein normales Energieniveau, die Gesundheit von Knochen, Nervensystem und Immunschutz zu unterstützen. Eigenschaften des Getränks: ✔️ Unterstützung der Gesundheit von Knochen und Zähnen ✔️ Regulierung des Nervensystems ✔️ Unterstützung des Immunsystems ✔️ Energieunterstützung ✔️ Verbesserung des Hautzustands ✔️ Unterstützung des Herz-Kreislauf-Systems ✔️ Verringerung von Muskel- und Gelenkschmerzen. Magnesium – 230 mg, Calcium – 1800 mg, Zink – 16 mg.",
  "usageRu": "Откройте пакет и сразу употребляйте. Рекомендуемая дозировка — 2 пакета в день.",
  "usageDe": "Beutel öffnen und sofort trinken. Empfohlene Dosierung: 2 Beutel pro Tag.",
  "category": "health"
  },
  {
  "id": 23,
  "nameRu": "Сухое верблюжье молоко с пробиотиками 500 г",
  "nameDe": "Kamelmilchpulver mit Probiotika 500 g",
  "shortRu": "Питательное сухое молоко с пробиотиками для здоровья",
  "shortDe": "Nährstoffreiches Kamelmilchpulver mit Probiotika für die Gesundheit",
  "price": "указать цену",
  "article": "00000000CMP023",
  "image": "https://imgur.com/14eT1tU.png",
  "fullRu": "Сухое верблюжье молоко Nilrich обогащено пробиотиками для оптимального питания и здоровья. Изготовленное из качественного молока с пастбищ, молоко дополнено пребиотиками, различными витаминами и минералами, а также активными пробиотиками. Продукт очищен с использованием передовых технологий, обладает хорошей растворимостью и нежным вкусом. Ингредиенты: Сырое верблюжье молоко или цельное сухое верблюжье молоко, обессоленная сухая сыворотка, изомальтоолигосахарид, концентрированный стандарт сывороточного белка, инулин (3 г/100 г), γ-линоленовая кислота (3 г/100 г), витамины (А, D, E, B, C), фолиевая кислота, пирофосфат железа, оксид цинка, натрий, карбонат кальция, таурин, пробиотики (Bifidobacterium Lactis, Streptococcus thermophilus). Пищевая ценность на 100 г: Энергия 1920 кДж, Белки 20,0 г, Жиры 20,0 г, Углеводы 48,0 г, Клетчатка 3,0 г, Натрий 550 мг, Витамин А 485 ед. gRE, Витамин D 8,6 мкг, Витамин E 11,35 мг -TE, Витамин B 0,95 мг, Витамин С 45,8 мг, Фолиевая кислота 285 ед. gDFE, Кальций 650 мг, Цинк 8,9 мг, Селен 5,56 мг, γ-линоленовая кислота 24,4 мкг, Таурин 3,0 г.",
  "fullDe": "Nilrich Kamelmilchpulver ist mit Probiotika für optimale Ernährung und Gesundheit angereichert. Hergestellt aus hochwertiger Weidemilch, angereichert mit Präbiotika, verschiedenen Vitaminen und Mineralstoffen sowie aktiven Probiotika. Das Produkt wird mit modernen Technologien gereinigt, hat eine gute Löslichkeit und einen milden Geschmack. Zutaten: Rohes Kamelmilchpulver oder Vollkamelmilchpulver, entsalzenes Molkenpulver, Isomaltooligosaccharid, Molkenproteinkonzentrat, Inulin (3 g/100 g), γ-Linolensäure (3 g/100 g), Vitamine (A, D, E, B, C), Folsäure, Eisenpyrophosphat, Zinkoxid, Natrium, Calciumcarbonat, Taurin, Probiotika (Bifidobacterium Lactis, Streptococcus thermophilus). Nährwertangaben pro 100 g: Energie 1920 kJ, Eiweiß 20,0 g, Fett 20,0 g, Kohlenhydrate 48,0 g, Ballaststoffe 3,0 g, Natrium 550 mg, Vitamin A 485 IE gRE, Vitamin D 8,6 µg, Vitamin E 11,35 mg -TE, Vitamin B 0,95 mg, Vitamin C 45,8 mg, Folsäure 285 IE gDFE, Calcium 650 mg, Zink 8,9 mg, Selen 5,56 mg, γ-Linolensäure 24,4 µg, Taurin 3,0 g.",
  "usageRu": "1. Налейте в чашку тёплую воду (~60°C). 2. Добавьте необходимое количество сухого молока. 3. Тщательно перемешайте до полного растворения. 4. Готово к употреблению. Пейте как можно скорее после приготовления. После открытия упаковки рекомендуется употребить в течение двух недель.",
  "usageDe": "1. Gießen Sie warmes Wasser (ca. 60°C) in eine Tasse. 2. Geben Sie die benötigte Menge Milchpulver hinzu. 3. Gründlich umrühren, bis das Pulver vollständig aufgelöst ist. 4. Sofort nach der Zubereitung trinken. Nach dem Öffnen innerhalb von zwei Wochen aufbrauchen.",
  "category": "health"
  },
  {
  "id": 24,
  "nameRu": "Чай из кукурузных рылец 150 г",
  "nameDe": "Tee aus Maisbart 150 g",
  "shortRu": "Натуральный чай для выведения жидкости и поддержки организма",
  "shortDe": "Natürlicher Tee zur Entwässerung und Körperunterstützung",
  "price": "указать цену",
  "article": "00000000CST024",
  "image": "https://imgur.com/a/YXzxr5B",
  "fullRu": "Чай изготовлен на основе кукурузных рыльцев и не содержит добавок или сахара, что делает его идеальным для здорового образа жизни. Подходит для употребления на голодный желудок или ночью. Обладает мочегонными свойствами, способствует выведению лишней жидкости. Кукурузные рыльца богаты витамином Е, винной кислотой и другими полезными веществами. Чай поддерживает сбалансированное питание и основан на традициях китайской медицины. В упаковке 30 пакетиков по 5 г (всего 150 г). Состав: кукуруза, гречиха татарская, кукурузные рыльца, лопух большой, корень пуэрарии волосистой, гардения жасминовидная.",
  "fullDe": "Tee aus Maisbart basiert auf Maisnarben und enthält weder Zusätze noch Zucker – ideal für eine gesunde Lebensweise. Der Tee kann auf nüchternen Magen oder nachts getrunken werden. Er besitzt harntreibende Eigenschaften und hilft, überschüssige Flüssigkeit aus dem Körper auszuleiten. Maisbart ist reich an Vitamin E, Weinsäure und anderen wertvollen Stoffen. Der Tee unterstützt eine ausgewogene Ernährung und basiert auf der traditionellen chinesischen Medizin. In der Packung befinden sich 30 Beutel à 5 g (insgesamt 150 g). Zutaten: Mais, Tartarbuchweizen, Maisbart, große Klette, Pueraria lobata Wurzel, Gardenia jasminoides.",
  "usageRu": "Заварите 1 пакетик (5 г) в 200 мл горячей воды, настаивайте 5–10 минут. Пейте в любое время дня.",
  "usageDe": "Einen Beutel (5 g) mit 200 ml heißem Wasser aufgießen, 5–10 Minuten ziehen lassen. Zu jeder Tageszeit genießen.",
  "category": "health"
  },
  {
  "id": 25,
  "nameRu": "Массажная подушка из натурального латекса",
  "nameDe": "Massagekissen aus Naturlatex",
  "shortRu": "Эргономичная подушка для поддержки шеи и расслабления",
  "shortDe": "Ergonomisches Kissen zur Nackenstütze und Entspannung",
  "price": "указать цену",
  "article": "00000000LAT025",
  "image": "https://imgur.com/fzFaHf9.png",
  "fullRu": "Размеры: 58 × 35 см, высота 10–12 см. Материал — натуральный латекс, импортирован из Таиланда. В процессе производства латекс вспенивается и принимает форму, образуя отверстия, пузыри и мелкие дефекты, что подтверждает подлинность материала. Натуральный латекс гарантирует оптимальную поддержку и долговечность. Эта массажная подушка обеспечивает максимальное удобство и расслабление, поддерживает правильную форму шеи и спины во время сна или отдыха.",
  "fullDe": "Maße: 58 × 35 cm, Höhe 10–12 cm. Material: Naturlatex, importiert aus Thailand. Während des Herstellungsprozesses wird der Latex aufgeschäumt und geformt, was zur Bildung von unregelmäßigen Löchern, Blasen und kleinen Unvollkommenheiten führt, die die Echtheit des Naturlatex bestätigen. Das Material garantiert optimale Unterstützung und Langlebigkeit. Dieses Massagekissen sorgt für maximalen Komfort und Entspannung und unterstützt Nacken und Rücken während des Schlafs oder der Erholung.",
  "usageRu": "Используйте подушку для сна или отдыха для поддержки шеи и расслабления мышц.",
  "usageDe": "Verwenden Sie das Kissen beim Schlafen oder Ausruhen zur Unterstützung des Nackens und zur Entspannung der Muskulatur.",
  "category": "health"
  },
  {
  "id": 26,
  "nameRu": "SEALUXE Глубоко увлажняющий крем с морской эссенцией 50 г",
  "nameDe": "SEALUXE Tiefenfeuchtigkeitscreme mit Meeresessenz 50 g",
  "shortRu": "Крем для интенсивного увлажнения и упругости кожи",
  "shortDe": "Intensiv feuchtigkeitsspendende Creme für Elastizität und Frische",
  "price": "указать цену",
  "article": "00000000SEA026",
  "image": "https://imgur.com/SoyQeDL.png",
  "fullRu": "Этот глубоко увлажняющий крем обогащён полипептидами и экстрактами растений для эффективного насыщения кожи влагой. Усиливает транспортировку влаги в глубокие слои кожи, обеспечивает увлажнение каждого слоя, делает кожу более упругой, эластичной и сияющей. Состав: вода, глицерин, эфир коко-каприловой/каприновой кислоты, бутиленгликоль, кокосовое масло, полиэтиленгликоль-8, диоктиловый эфир, масло авокадо, масло макадамии, изононилизононаноат, цетиловый спирт, пальмитоилтетрапептид-7, пальмитоилтрипептид-1, гиалуронат натрия, полиакрилат натрия, алкан c18-21, тридецет-6, сополимер гидроксиэтилакрилата/акрилоилдиметилтаурата натрия, сквалан, экстракт tremella fuciformis, полисорбат-60, стеарет-21, ксантановая камедь, глицерилстеарат, β-глюкан, динатрий ЭДТА, этилгексилглицерин, феноксиэтанол, экстракт древесного яблока, экстракт листьев бамбука, хлорфенезин, каприлилгликоль, полиакриловая кислота, полисорбат-20, экстракт oldenlandia diffusa, экстракт жимолости.",
  "fullDe": "Diese tief feuchtigkeitsspendende Creme ist mit Peptiden und Pflanzenextrakten angereichert, die eine intensive Durchfeuchtung der Haut fördern. Die Formel sorgt dafür, dass Feuchtigkeit in die tieferen Hautschichten transportiert wird und jede Schicht optimal hydratisiert bleibt. Die Creme macht die Haut elastischer, straffer und sichtbar frischer. Inhaltsstoffe: Wasser, Glycerin, Kokos-Caprylsäure/Caprinsäure-Ester, Butylenglykol, Kokosöl, Polyethylenglykol-8, Dioctylether, Avocadoöl, Macadamianussöl, Isononylisononanoat, Cetylalkohol, Palmitoyltetrapeptid-7, Palmitoyltripeptid-1, Natriumhyaluronat, Natriumpolyacrylat, Alkane C18-21, Trideceth-6, Hydroxyethylacrylat/Acryloyldimethyltaurat-Natrium-Copolymer, Squalan, Tremella-Fuciformis-Extrakt, Polysorbat-60, Steareth-21, Xanthan, Glycerylstearat, β-Glucan, Dinatrium-EDTA, Ethylhexylglycerin, Phenoxyethanol, Limonia-acidissima-Extrakt, Bambusblatt-Extrakt, Chlorphenesin, Caprylylglykol, Polyacrylsäure, Polysorbat-20, Oldenlandia-diffusa-Extrakt, Lonicera-caprifolium-Extrakt.",
  "usageRu": "Нанесите небольшое количество крема на очищенную и тонизированную кожу лица и шеи утром и вечером. Аккуратно массируйте до полного впитывания.",
  "usageDe": "Tragen Sie eine kleine Menge der Creme morgens und abends nach der Reinigung und Tonisierung auf Gesicht und Hals auf. Sanft einmassieren, bis sie vollständig eingezogen ist.",
  "category": "facecare"
  },
  {
  "id": 27,
  "nameRu": "Подтягивающий крем с эффектом лифтинга (50 г)",
  "nameDe": "Straffende Lifting-Creme (50 g)",
  "shortRu": "Лифтинг-крем для упругости и молодости кожи",
  "shortDe": "Lifting-Creme für Festigkeit und jugendliche Haut",
  "price": "указать цену",
  "article": "00000000LFT027",
  "image": "https://imgur.com/u2yLFkM.png",
  "fullRu": "Этот крем содержит эссенции и растительные экстракты для глубокого увлажнения и питания кожи, делает кожу мягкой и упругой. Ацетил гексапептид-1 стимулирует выработку коллагена, разглаживает морщины и укрепляет кожу. Полисахаридная эссенция мгновенно подтягивает кожу, улучшает удержание влаги. Крем обогащён пептидами аргинина/лизина, эссенцией персиковой камеди и ботулотоксином улитки, что обеспечивает регенерацию, защиту, разглаживание морщин, питание и восстановление. Регулярное применение делает кожу эластичной, гладкой и сияющей. Идеально подходит для вечернего ухода и восстановления кожи во время сна.",
  "fullDe": "Diese Creme enthält Essenzen und Pflanzenextrakte für eine tiefe Feuchtigkeitsversorgung und Nährung der Haut. Acetylhexapeptid-1 stimuliert die Kollagenproduktion, glättet Falten und stärkt die Hautfestigkeit. Die Polysaccharid-Essenz sorgt für sofortigen Lifting-Effekt und verbessert die Feuchtigkeitsbindung. Angereichert mit Arginin/Lysin-Peptiden, Pfirsichgummi-Essenz und Schneckengift, bietet die Creme Regeneration, Schutz, Faltenglättung und intensive Pflege. Die regelmäßige Anwendung macht die Haut elastisch, glatt und strahlend. Perfekt für die nächtliche Hautpflege und Regeneration während des Schlafs.",
  "usageRu": "Наносите крем на лицо и шею после очищения и тонизирования вечером. Аккуратно массируйте до полного впитывания.",
  "usageDe": "Abends nach der Reinigung und Tonisierung auf Gesicht und Hals auftragen. Sanft einmassieren, bis die Creme vollständig eingezogen ist.",
  "category": "facecare"
  },
  {
  "id": 28,
  "nameRu": "SEALUXE Ночной увлажняющий крем 50 г",
  "nameDe": "SEALUXE Nacht-Feuchtigkeitscreme 50 g",
  "shortRu": "Глубоко увлажняющий и восстанавливающий ночной крем",
  "shortDe": "Tief feuchtigkeitsspendende und regenerierende Nachtcreme",
  "price": "указать цену",
  "article": "00000000SEA028",
  "image": "https://imgur.com/L8w7JEW.png",
  "fullRu": "Этот ночной крем обогащён активными ингредиентами для глубокого увлажнения, уменьшения морщин и улучшения текстуры кожи. В составе: масло ши, экстракт Caesalpinia Spinosa, олигопептид-6, экстракт почек бука, маточное молочко, церамид NP, гиалуронат натрия, экстракт босвеллии, экстракт винограда, центелла азиатская и морские водоросли. Благодаря комплексу минералов, витаминов, гиалуроновой кислоты, церамидов и натуральных экстрактов крем интенсивно питает, омолаживает, поддерживает эластичность и барьерные функции кожи. Лёгкая текстура быстро впитывается, не оставляет липкости. Приятный аромат с нотами дыни, морского бриза, цветов и мускуса. Подходит для ежедневного вечернего ухода.",
  "fullDe": "Diese Nachtcreme ist mit aktiven Inhaltsstoffen angereichert und spendet intensive Feuchtigkeit, reduziert Falten und verbessert die Hautstruktur. Enthält Sheabutter, Caesalpinia Spinosa-Gummi, Oligopeptid-6, Buchenknospenextrakt, Gelée Royale, Ceramid NP, Natriumhyaluronat, Boswellia-Extrakt, Traubenextrakt, Centella Asiatica und Meeresalgen. Durch die Kombination von Mineralien, Vitaminen, Hyaluronsäure, Ceramiden und natürlichen Extrakten wird die Haut intensiv genährt, regeneriert und ihre Elastizität gefördert. Die leichte Textur zieht schnell ein, ohne zu kleben. Angenehmer Duft nach Melone, Meeresbrise, Blumen und Moschus. Ideal für die tägliche abendliche Anwendung.",
  "usageRu": "Нанесите небольшое количество крема на очищенную и тонизированную кожу лица и шеи вечером. Аккуратно массируйте до полного впитывания.",
  "usageDe": "Abends nach der Reinigung und Tonisierung eine kleine Menge der Creme auf Gesicht und Hals auftragen und sanft einmassieren, bis sie vollständig eingezogen ist.",
  "category": "facecare"
  },
  {
  "id": 29,
  "nameRu": "SEALUXE Омолаживающий тонер (210 мл)",
  "nameDe": "SEALUXE Verjüngender Toner (210 ml)",
  "shortRu": "Омолаживающий и глубоко увлажняющий тонер для лица",
  "shortDe": "Verjüngender und tief feuchtigkeitsspendender Gesichtstoner",
  "price": "указать цену",
  "article": "00000000TON029",
  "image": "https://imgur.com/ayE9ir5.png",
  "fullRu": "Омолаживающий тонер — это эликсир молодости для вашей кожи, сочетающий природные компоненты и инновационные технологии. Тримелла (гриб трюфель) обеспечивает глубокое увлажнение, действует как гиалуроновая кислота и защищает от свободных радикалов. Пептиды жемчуга стимулируют восстановление и повышают эластичность кожи. Эфирные масла питают кожу, а витамин Е активно борется с оксидативным стрессом. Центелла азиатская ускоряет синтез коллагена и заживление. Тонер не только ухаживает, но и активно борется с возрастными изменениями.",
  "fullDe": "Das verjüngende Tonikum ist ein Elixier der Jugend für Ihre Haut, das die Kraft der Natur mit innovativer Forschung vereint. Tremella, auch als „Trüffelpilz“ bekannt, spendet intensive Feuchtigkeit, wirkt wie Hyaluronsäure und schützt vor freien Radikalen. Perlenpeptide fördern die Regeneration und unterstützen die Hautelastizität. Ätherische Öle nähren die Haut, während Vitamin E aktiv oxidativen Stress bekämpft. Centella Asiatica regt die Kollagensynthese an und beschleunigt die Heilung. Dieser Toner ist nicht nur Pflege, sondern ein effektives Mittel gegen Hautalterung.",
  "usageRu": "Нанесите тонер на очищенную кожу лица и шеи с помощью ватного диска или ладонями. Используйте утром и вечером перед нанесением крема.",
  "usageDe": "Tragen Sie das Tonikum morgens und abends nach der Reinigung mit einem Wattepad oder den Händen auf Gesicht und Hals auf. Anschließend Creme verwenden.",
  "category": "facecare"
  },
  {
  "id": 30,
  "nameRu": "SEALUXE сыворотка с пробиотиками 40 мл",
  "nameDe": "SEALUXE Probiotisches Serum 40 ml",
  "shortRu": "Интенсивная сыворотка с пробиотиками для глубокого восстановления",
  "shortDe": "Intensives Serum mit Probiotika zur tiefen Regeneration",
  "price": "указать цену",
  "article": "00000000PRB030",
  "image": "https://imgur.com/ew5H3h2.png",
  "fullRu": "Сыворотка обогащена концентрированными пробиотиками для интенсивного ухода за кожей. Она способствует восстановлению микробиома кожи, глубоко увлажняет, смягчает и поддерживает регенерацию. Активные компоненты: пробиотики для восстановления здоровья кожи, фильтрат ферментации соевого молока, инулин и олигосахарид α-глюкана для улучшения текстуры и увлажнения, никотинамид для повышения эластичности и сияния, а также 4D гиалуронат натрия для многоуровневого увлажнения. Подходит для всех типов кожи.",
  "fullDe": "Das Serum ist mit konzentrierten Probiotika angereichert und bietet eine intensive Pflege zur Regeneration und Wiederherstellung der Haut. Probiotika stärken das natürliche Hautmikrobiom, während fermentierter Sojamilch-Filtrat die Haut mit Nährstoffen versorgt. Inulin und α-Glucan-Oligosaccharid wirken als Präbiotika und verbessern die Textur und Feuchtigkeit der Haut. Niacinamid erhöht die Elastizität und verleiht der Haut Strahlkraft. 4D-Natriumhyaluronat sorgt für langanhaltende, mehrschichtige Feuchtigkeit. Geeignet für alle Hauttypen.",
  "usageRu": "Нанесите небольшое количество сыворотки на очищенную кожу лица и шеи утром и/или вечером. Аккуратно распределите до полного впитывания.",
  "usageDe": "Tragen Sie eine kleine Menge des Serums morgens und/oder abends nach der Reinigung auf Gesicht und Hals auf und massieren Sie es sanft ein.",
  "category": "facecare"
  },
  {
  "id": 31,
  "nameRu": "SEALUXE Интенсивно увлажняющий крем с жемчугом (30 г)",
  "nameDe": "SEALUXE Intensiv feuchtigkeitsspendende Perlencreme (30 g)",
  "shortRu": "Крем с жемчугом для глубокого увлажнения и сияния кожи",
  "shortDe": "Perlencreme für tiefe Feuchtigkeit und strahlende Haut",
  "price": "указать цену", // укажи нужную цену!
  "article": "00000000PCRM031",
  "image": "https://imgur.com/1qmAtWp.png",
  "fullRu": "Интенсивно увлажняющий крем с жемчугом из серии SEALUXE сочетает в себе силу гидролизованного жемчуга, гиалуроновой кислоты, экстракта хризантемы и бетаина для комплексного ухода. Гидролизованный жемчуг укрепляет кожу, выравнивает тон и придает сияние, а гиалуроновая кислота увлажняет до самых глубоких слоев, сокращая морщины. Экстракт хризантемы защищает от свободных радикалов и воспалений, делая цвет лица ровным и свежим. Бетаин смягчает и увлажняет даже самую сухую или чувствительную кожу. Этот крем идеально завершает ритуал ухода, обеспечивая коже молодость, гладкость и сияние.",
  "fullDe": "Die intensiv feuchtigkeitsspendende Perlencreme von SEALUXE vereint die Kraft von hydrolysiertem Perlenextrakt, Hyaluronsäure, Chrysanthemenextrakt und Betain für eine umfassende Pflege. Hydrolysiertes Perlenextrakt stärkt die Haut, gleicht den Hautton aus und verleiht Strahlkraft, während Hyaluronsäure tief hydratisiert und Falten reduziert. Chrysanthemenextrakt bietet Schutz vor freien Radikalen und Entzündungen, sorgt für einen ebenmäßigen Teint. Betain spendet Feuchtigkeit und macht auch trockene oder empfindliche Haut weich. Diese Creme ist der perfekte Abschluss der Pflege und verleiht jugendliche, glatte und strahlende Haut.",
  "usageRu": "После очищения и тонизирования нанесите небольшое количество крема на кожу лица и шеи. Равномерно распределите легкими массирующими движениями до полного впитывания. Используйте утром и/или вечером.",
  "usageDe": "Nach der Reinigung und Tonisierung eine kleine Menge der Creme auf Gesicht und Hals auftragen und sanft einmassieren, bis sie vollständig eingezogen ist. Morgens und/oder abends verwenden.",
  "category": "facecare"
  },
  {
  "id": 32,
  "nameRu": "SEALUXE Крем для кожи вокруг глаз против морщин с проксиланом (20 г)",
  "nameDe": "SEALUXE Anti-Falten Augencreme mit Proxylan (20 g)",
  "shortRu": "Крем для глаз с проксиланом и гексапептидом-2 от морщин",
  "shortDe": "Augencreme mit Proxylan und Hexapeptid-2 gegen Falten",
  "price": "указать цену",
  "article": "00000000EYE032",
  "image": "https://imgur.com/r7Zf5xB.png",
  "fullRu": "Крем для кожи вокруг глаз от SEALUXE содержит проксилан и гексапептид-2, интенсивно увлажняет и укрепляет кожу, не оставляя липкости. Легкая текстура светло-желтого цвета с нежным ароматом быстро впитывается и подходит для ежедневного ухода. При регулярном применении эффективно корректирует мелкие морщины и сухие заломы, поддерживает упругость и плотность кожи вокруг глаз.",
  "fullDe": "Die Augencreme von SEALUXE mit Proxylan und Hexapeptid-2 spendet intensive Feuchtigkeit und stärkt die Haut, ohne ein klebriges Gefühl zu hinterlassen. Die leicht gelbliche, milchige Konsistenz und der zarte Duft machen sie angenehm in der Anwendung. Bei regelmäßiger Nutzung werden feine Linien und Trockenheitsfältchen sichtbar gemildert, die Elastizität und Festigkeit der Augenpartie werden unterstützt.",
  "usageRu": "Нанесите небольшое количество крема на очищенную область вокруг глаз утром и вечером. Легкими похлопывающими движениями распределите до полного впитывания.",
  "usageDe": "Tragen Sie morgens und abends eine kleine Menge der Creme auf die gereinigte Augenpartie auf und klopfen Sie sie sanft ein, bis sie vollständig eingezogen ist.",
  "category": "facecare"
  },
  {
  "id": 33,
  "nameRu": "Капсульное масло‑эссенция Camellia (30 капсул × 0,5 мл)",
  "nameDe": "Kamelienöl-Essenz in Kapseln (30 Kapseln × 0,5 ml)",
  "shortRu": "Увлажняющее масло с ретинолом, VE и пептидами для гладкости кожи",
  "shortDe": "Feuchtigkeitsspendendes Öl mit Retinol, VE und Peptiden für glatte Haut",
  "price": "указать цену",
  "article": "00000000CAM033",
  "image": "https://imgur.com/REOmaVo.png",
  "fullRu": "Капсульное масло-эссенция Camellia в уникальной капсульной упаковке сохраняет свежесть, легко наносится и быстро впитывается, не оставляя жирности. В составе: ретинол, витамин E, церамид NP и растительные масла (масло семян подсолнечника, камелии, плодов облепихи) для восстановления эластичности, увлажнения, питания и разглаживания кожи. 5 видов низкомолекулярных пептидов подтягивают и омолаживают кожу. Масло улучшает структуру кожи, уменьшает шероховатость и мелкие морщины, делает кожу мягкой и сияющей.",
  "fullDe": "Die Camellia-Ölessenz in praktischen Kapseln bewahrt die Frische, ist leicht aufzutragen und zieht schnell ein, ohne zu fetten. Die Formel mit Retinol, Vitamin E, Ceramid NP sowie pflanzlichen Ölen (Sonnenblumen-, Kamelien- und Sanddornöl) spendet intensiv Feuchtigkeit, verbessert die Elastizität, glättet feine Linien und sorgt für ein geschmeidiges, strahlendes Hautbild. Fünf niedermolekulare Peptide wirken straffend und regenerierend. Ideal zur täglichen Pflege für trockene und empfindliche Haut.",
  "usageRu": "После очищения кожи аккуратно открутите капсулу, равномерно распределите масло на лицо и помассируйте до полного впитывания.",
  "usageDe": "Nach der Reinigung eine Kapsel öffnen, das Öl gleichmäßig im Gesicht verteilen und sanft einmassieren, bis es vollständig eingezogen ist.",
  "category": "facecare"
  },
  {
  "id": 34,
  "nameRu": "SEALUXE Легкая маска для лица с камелией",
  "nameDe": "SEALUXE Leichte Gesichtsmaske mit Kamelie",
  "shortRu": "Увлажняющая маска с экстрактом камелии и 4D гиалуронатом",
  "shortDe": "Feuchtigkeitsmaske mit Kamelienextrakt und 4D-Hyaluronat",
  "price": "указать цену",
  "article": "00000000CML034",
  "image": "https://imgur.com/swkBnla.png",
  "fullRu": "Легкая маска с экстрактом камелии эффективно устраняет сухость, глубоко увлажняет и сокращает поры, придавая коже мягкость и сияние. 4D гиалуронат натрия дарит коже ощущение свежести и эластичности. Кремовая текстура быстро впитывается. В составе: экстракт корня солодки, экстракт листьев розмарина, экстракт камелии, экстракт красных листьев, воск семян подсолнечника, экстракт цветков ромашки, кокосовое масло, экстракт корня женьшеня, цветочное молоко Тяньшу, авокадо.",
  "fullDe": "Die leichte Gesichtsmaske mit Kamelienextrakt spendet intensive Feuchtigkeit, beseitigt Trockenheit und verfeinert die Poren. 4D-Hyaluronat sorgt für Frische, Elastizität und ein strahlendes Hautbild. Die cremige Textur zieht schnell ein und verwöhnt die Haut mit wertvollen Pflanzenextrakten: Süßholzwurzel-, Rosmarinblatt-, Kamelien- und Ginsengwurzelextrakt, Sonnenblumenwachs, Kamillenblütenextrakt, Kokosöl, Avocado, Blütenmilch und mehr.",
  "usageRu": "На очищенную кожу лица нанесите маску равномерно, оставьте на 10–15 минут, затем удалите мягким полотенцем и смойте теплой водой.",
  "usageDe": "Nach der Reinigung großzügig auf das Gesicht auftragen, 10–15 Minuten einwirken lassen, dann mit einem weichen Tuch entfernen und mit warmem Wasser abspülen.",
  "category": "facecare"
  }
];
  

const categories = [
  { code: "deodorant",        ru: "Дезодоранты",           de: "Deodorants",             en: "Deodorants" },
  { code: "personalcare",     ru: "Личная гигиена",        de: "Körperhygiene",          en: "Personal Hygiene" },
  { code: "facecare",         ru: "Уход за кожей лица",    de: "Gesichtspflege",         en: "Facial Care" },
  { code: "ecohome",          ru: "Эко-средства для дома", de: "Öko-Haushaltsmittel",    en: "Eco Home Products" },
  { code: "makeup",           ru: "Декоративная косметика",de: "Dekorative Kosmetik",    en: "Decorative Cosmetics" },
  { code: "bodycare",         ru: "Уход за кожей тела",    de: "Körperpflege",           en: "Body Care" },
  { code: "haircare",         ru: "Уход для волос",        de: "Haarpflege",             en: "Hair Care" },
  { code: "oralcare",         ru: "Гигиена полости рта",   de: "Mundhygiene",            en: "Oral Hygiene" },
  { code: "kids",             ru: "Товары для детей",      de: "Produkte für Kinder",    en: "Products for Children" },
  { code: "health",           ru: "Здоровье",              de: "Gesundheit",             en: "Health" },
  { code: "ecolaundry",       ru: "Эко-средства для стирки",de: "Öko-Waschmittel",       en: "Eco Laundry Products" }
];

// --- Флаги PNG
const FLAGS = {
  ru: "https://imgur.com/j2R2ynb.png",
  de: "https://imgur.com/z59SrMa.png",
  en: "https://imgur.com/QOgt3c2.png",
};

// --- Картинка корзины
const basketImg = "https://imgur.com/gbChm8g.png";

// --- Курсы валют
const RUBLE_TO_DOLLAR = 90;
const RUBLE_TO_EURO = 98;

// --- Формат цены
function formatPrice(price, lang = "ru") {
  if (!price || typeof price !== "string" || price === "указать цену") {
    return {
      ru: "Цена по запросу",
      de: "Preis auf Anfrage",
      en: "Price on request"
    }[lang];рррррррррррррр
  }
  const rub = Number(price.replace(/[^\d]/g, ""));
  if (isNaN(rub)) return price;
  const dollar = (rub / RUBLE_TO_DOLLAR).toFixed(2);
  const euro = (rub / RUBLE_TO_EURO).toFixed(2);
  return `${rub.toLocaleString("ru-RU")} ₽ / ${dollar} $ / ${euro} €`;
}

// --- Языки
const LANGS = [
  { code: "ru", img: FLAGS.ru, label: "Русский" },
  { code: "de", img: FLAGS.de, label: "Deutsch" },
  { code: "en", img: FLAGS.en, label: "English" },
];

export default function Catalog() {
  const [lang, setLang] = useState("ru");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Категории (с "Без категории" если надо)
  const allCategories = useMemo(
    () =>
      Array.from(
        new Set([
          ...products.map(p => p.category || "uncategorized"),
        ])
      ),
    []
  );

  // --- Фильтрация товаров
  const filteredProducts = useMemo(() => {
    let arr = products;
    if (activeCategory)
      arr = arr.filter(p => (p.category || "uncategorized") === activeCategory);
    if (search) {
      const s = search.toLowerCase();
      arr = arr.filter(
        p =>
          (p[`name${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || "")
            .toLowerCase()
            .includes(s) ||
          (p[`short${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || "")
            .toLowerCase()
            .includes(s)
      );
    }
    return arr;
  }, [products, search, lang, activeCategory]);

  function getProductCount(id) {
    return cart.filter(item => item.id === id).length;
  }
  function handleAdd(product) {
    setCart([...cart, product]);
  }
  function handleRemove(product) {
    const idx = cart.findIndex(item => item.id === product.id);
    if (idx !== -1) {
      const newCart = [...cart];
      newCart.splice(idx, 1);
      setCart(newCart);
    }
  }
  function handleRemoveAll(id) {
    setCart(cart.filter(item => item.id !== id));
  }
  function clearCategory() {
    setActiveCategory(null);
  }
  function handleCategoryClick(cat) {
    setActiveCategory(cat);
  }

  function sendTelegramMessage() {
    const counts = {};
    cart.forEach(item => {
      counts[item.id] = (counts[item.id] || 0) + 1;
    });
    const message = Object.entries(counts)
      .map(([id, count]) => {
        const p = products.find(x => x.id === +id);
        return `• ${(p && p[`name${lang.charAt(0).toUpperCase() + lang.slice(1)}`]) || "Товар"} – ${formatPrice(p?.price, lang)} × ${count}`;
      })
      .join("%0A");
    const text = encodeURIComponent(
      (lang === "ru" ? "🛒 Заказ:" : lang === "de" ? "🛒 Bestellung:" : "🛒 Order:") + "\n" + message
    );
    window.open(`https://t.me/nea4sh_03?text=${text}`, "_blank");
  }

  // Для поиска категории по коду
  function getCategoryTitle(catCode) {
    if (catCode === "uncategorized")
      return { ru: "Без категории", de: "Ohne Kategorie", en: "Uncategorized" }[lang];
    const obj = categories.find(c => c.code === catCode);
    return obj ? obj[lang] : catCode;
  }

  return (
    <div>
      {/* --- ВСТРОЕННЫЕ СТИЛИ --- */}
    <style>{`
body, .bg-green-50 {
  background: #e9faee !important;
}

.catalog-header {
  background: #fff;
  box-shadow: 0 3px 10px 0 rgba(60,90,70,0.04);
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0;
}
.catalog-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 12px 10px 4px 10px;
  min-height: 72px;
}
.catalog-flags { display: flex; gap: 7px; }
.catalog-flag-btn {
  background: none;
  border: none;
  padding: 0;
  outline: none;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: border 0.2s;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.catalog-flag-btn.active { border: 2px solid #30bc6c; }
.catalog-logo {
  max-height: 90px;
  max-width: 330px;
  object-fit: contain;
  background: transparent;
  margin: 0;
}
.catalog-header-actions { display: flex; align-items: center; gap: 16px; }
.catalog-search {
  display: flex;
  align-items: center;
  background: #f3f7f4;
  border-radius: 20px;
  padding: 6px 15px;
  font-size: 17px;
}
.catalog-search input {
  border: none;
  background: none;
  outline: none;
  font-size: 17px;
  width: 130px;
  min-width: 0;
}
.catalog-cart-btn { background: none; border: none; padding: 0; position: relative; }
.catalog-cart-img { width: 38px; height: 38px; }
.catalog-cart-count {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #30bc6c;
  color: #fff;
  font-size: 14px;
  border-radius: 100%;
  padding: 0 7px;
  min-width: 19px;
  text-align: center;
}

/* -- КАТЕГОРИИ -- */
.catalog-categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px 7px;
  padding: 12px 0 5px 0;
  background: none;
}
.catalog-cat-btn {
  font-size: 17px;
  border-radius: 22px;
  border: 2px solid #30bc6c;
  background: none;
  padding: 6px 22px;
  transition: all 0.16s;
  color: #30bc6c;
  font-weight: 600;
  cursor: pointer;
  max-width: 90vw;
  min-width: 120px;
  white-space: normal;
  text-align: center;
  word-break: break-word;
  flex: 1 1 170px;
  box-sizing: border-box;
}
.catalog-cat-btn.active {
  background: #30bc6c;
  color: #fff;
  border-color: #23a45a;
}

/* --- КАРТОЧКИ (обновлено) --- */
.catalog-products {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  max-width: 1100px;
  gap: 26px;
  padding: 0 12px;
}
.catalog-card {
  flex: 1 1 calc((100% - 52px) / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px 0 rgba(60,90,70,0.07);
  padding: 20px 16px 18px;
  box-sizing: border-box;
  transition: box-shadow 0.2s;
}
.catalog-card img {
  max-width: 100px;
  max-height: 100px;
  margin-bottom: 13px;
  object-fit: contain;
  background: transparent;
}
.catalog-card-title {
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin-bottom: 3px;
  width: 100%;
  word-break: break-word;
  min-height: 48px;
}
.catalog-card-desc {
  font-size: 15px;
  text-align: center;
  margin-bottom: 8px;
  color: #5d675d;
  width: 100%;
  word-break: break-word;
  min-height: 34px;
}
.catalog-card-price {
  font-size: 17px;
  font-weight: 700;
  color: #30bc6c;
  margin-bottom: 2px;
}
.catalog-card-article {
  font-size: 12px;
  color: #a7b3a7;
  margin-bottom: 8px;
}
.catalog-card-details {
  font-size: 14px;
  background: #f4fbf6;
  margin-top: 10px;
  padding: 10px 13px;
  border-radius: 12px;
  width: 100%;
}
.catalog-card-btns {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  margin-top: auto;
}
.catalog-card-btn {
  border: none;
  border-radius: 20px;
  padding: 7px 17px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  background: #e8f9ef;
  color: #23a45a;
  transition: background 0.13s;
}
.catalog-card-btn.green {
  background: #30bc6c;
  color: #fff;
}

/* --- АДАПТИВ --- */
@media (max-width: 950px) {
  .catalog-card {
    flex: 1 1 calc((100% - 26px) / 2);
  }
}
@media (max-width: 600px) {
  .catalog-card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
`}</style>




      {/* --- HEADER --- */}
      <header className="catalog-header">
        <div className="catalog-header-row">
          {/* Флаги-языки */}
          <div className="catalog-flags">
            {LANGS.map(l => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`catalog-flag-btn${lang === l.code ? " active" : ""}`}
                title={l.label}
              >
                <img src={l.img} alt={l.code} style={{ width: 25, height: 25, borderRadius: "50%" }} />
              </button>
            ))}
          </div>
          {/* Логотип */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src="https://imgur.com/C2Z7Njw.png"
              alt="Логотип"
              className="catalog-logo"
              draggable={false}
              style={{ background: "transparent" }}
            />
          </div>
          {/* Поиск и корзина */}
          <div className="catalog-header-actions">
            <div className="catalog-search" style={{ display: "flex", alignItems: "center" }}>
              <span className="mr-2" style={{ fontSize: 18, color: "#aaa" }}>🔍</span>
              <input
                type="text"
                placeholder={{
                  ru: "Поиск...",
                  de: "Suche...",
                  en: "Search..."
                }[lang]}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button className="catalog-cart-btn" onClick={() => setCartOpen(o => !o)}>
              <img src={basketImg} alt="Корзина" className="catalog-cart-img" />
              {cart.length > 0 && (
                <span className="catalog-cart-count">{cart.length}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* --- Боковая корзина --- */}
      {cartOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 40,
          background: "rgba(0,0,0,0.22)", display: "flex", justifyContent: "end"
        }} onClick={() => setCartOpen(false)}>
          <div style={{
            background: "#fff", boxShadow: "0 0 36px 0 rgba(60,90,70,0.16)",
            borderRadius: "22px 0 0 22px", width: 320, maxWidth: "96vw",
            padding: 24, height: "100%", overflowY: "auto"
          }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontSize: 20, fontWeight: 600 }}>
                {{ ru: "Корзина", de: "Warenkorb", en: "Cart" }[lang]}
              </span>
              <button style={{ fontSize: 23 }} onClick={() => setCartOpen(false)}>✖</button>
            </div>
            {cart.length === 0 ? (
              <div style={{ color: "#999", marginBottom: 18 }}>
                {{ ru: "Корзина пуста", de: "Warenkorb ist leer", en: "Cart is empty" }[lang]}
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {Object.entries(
                  cart.reduce((acc, item) => {
                    acc[item.id] = acc[item.id] || { ...item, count: 0 };
                    acc[item.id].count += 1;
                    return acc;
                  }, {})
                ).map(([id, item]) => (
                  <div key={id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee", paddingBottom: 4 }}>
                    <div>
                      <span style={{ fontWeight: 500 }}>{item[`name${lang.charAt(0).toUpperCase() + lang.slice(1)}`]}</span>
                      <div style={{ fontSize: 13, color: "#4ea167" }}>{formatPrice(item.price, lang)}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <button onClick={() => handleRemove(item)} style={{ background: "#e8f9ef", border: "none", borderRadius: 9, padding: "0 10px", fontSize: 18 }}>–</button>
                      <span style={{ fontSize: 15, minWidth: 22, textAlign: "center" }}>{item.count}</span>
                      <button onClick={() => handleAdd(item)} style={{ background: "#e8f9ef", border: "none", borderRadius: 9, padding: "0 10px", fontSize: 18 }}>+</button>
                      <button onClick={() => handleRemoveAll(item.id)} style={{ color: "#e45050", background: "none", border: "none", fontSize: 18, marginLeft: 8 }}>×</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button
              disabled={cart.length === 0}
              onClick={sendTelegramMessage}
              style={{
                marginTop: 25, width: "100%",
                background: "#30bc6c", color: "#fff", fontWeight: 500,
                border: "none", padding: "11px 0", borderRadius: 22, fontSize: 17,
                opacity: cart.length === 0 ? 0.6 : 1, cursor: cart.length === 0 ? "not-allowed" : "pointer"
              }}
            >
              {{
                ru: "Отправить заказ в Telegram",
                de: "Bestellung in Telegram senden",
                en: "Send order to Telegram"
              }[lang]}
            </button>
          </div>
        </div>
      )}

      {/* --- Категории --- */}
      <nav className="catalog-categories">
        <button
          onClick={clearCategory}
          className={`catalog-cat-btn${!activeCategory ? " active" : ""}`}
        >
          {{
            ru: "Все товары",
            de: "Alle Produkte",
            en: "All products"
          }[lang]}
        </button>
        {allCategories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`catalog-cat-btn${activeCategory === cat ? " active" : ""}`}
          >
            {getCategoryTitle(cat)}
          </button>
        ))}
      </nav>

      {/* --- Товары --- */}
      <main className="catalog-products">
        {filteredProducts.length === 0 && (
          <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#555", padding: 30 }}>
            {{ ru: "Товары не найдены", de: "Keine Produkte gefunden", en: "No products found" }[lang]}
          </div>
        )}
        {filteredProducts.map(product => {
          const count = getProductCount(product.id);
          return (
            <div key={product.id} className="catalog-card">
              <img src={product.image} alt={product[`name${lang.charAt(0).toUpperCase() + lang.slice(1)}`]} />
              <div className="catalog-card-title">
                {product[`name${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || product.nameRu}
              </div>
              <div className="catalog-card-desc">
                {product[`short${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || product.shortRu}
              </div>
              <div className="catalog-card-price">
                {formatPrice(product.price, lang)}
              </div>
              <div className="catalog-card-article">
                {product.article && `Артикул: ${product.article}`}
              </div>
              <div className="catalog-card-btns">
                <button
                  onClick={() => setExpanded(expanded === product.id ? null : product.id)}
                  className="catalog-card-btn"
                  style={{ minWidth: 90 }}
                >
                  {{
                    ru: "Подробнее",
                    de: "Mehr Info",
                    en: "More info"
                  }[lang]}
                </button>
                {count === 0 ? (
                  <button
                    onClick={() => handleAdd(product)}
                    className="catalog-card-btn green"
                  >
                    {{
                      ru: "В корзину",
                      de: "In den Warenkorb",
                      en: "Add to cart"
                    }[lang]}
                  </button>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <button onClick={() => handleRemove(product)} className="catalog-card-btn">–</button>
                    <span style={{ minWidth: 20, fontWeight: 600, textAlign: "center" }}>{count}</span>
                    <button onClick={() => handleAdd(product)} className="catalog-card-btn">+</button>
                  </div>
                )}
              </div>
              {expanded === product.id && (
                <div className="catalog-card-details">
                  <b>{{ ru: "Описание", de: "Beschreibung", en: "Description" }[lang]}:</b>
                  <p style={{ marginBottom: 10 }}>
                    {product[`full${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || product.fullRu}
                  </p>
                  <b>{{ ru: "Применение", de: "Anwendung", en: "Usage" }[lang]}:</b>
                  <p>
                    {product[`usage${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || product.usageRu}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
}