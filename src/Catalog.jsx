import React, { useState, useMemo } from "react";

// ВСТАВЬ СВОЙ МАССИВ PRODUCTS СЮДА (пример ниже)
const products = [
  {
    id: 1,
    category: "Личная гигиена"
    nameRu: "Шариковый дезодорант-антиперспирант",
    nameDe: "Roll-on Deodorant Antitranspirant",
    nameEn: "Roll-on Deodorant Antiperspirant",
    shortRu: "Защита от запаха и пота на весь день",
    shortDe: "Schutz vor Geruch und Schweiß den ganzen Tag",
    shortEn: "All day protection against odor and sweat",
    price: "366",
    article: "00002699CBA053",
    image: "https://i.imgur.com/iPloSgw.png",
    fullRu: "Обеспечивает эффективную защиту от пота и запаха...",
    fullDe: "Bietet den ganzen Tag über effektiven Schutz...",
    fullEn: "Provides effective protection against sweat...",
    usageRu: "Наносить на чистую и сухую кожу подмышек...",
    usageDe: "Auf saubere, trockene Achselhaut morgens...",
    usageEn: "Apply to clean, dry underarm skin..."
  }
  // ... все твои товары!
];

// --- Категории (можно дополнять)
const categories = [
  { code: "deodorant", ru: "Дезодоранты", de: "Deodorants", en: "Deodorants" },
  { code: "Личная гигиена", ru: "Личная гигиена", de: "Körperhygiene", en: "Personal Hygiene" },
  { code: "Уход за кожей лица", ru: "Уход за кожей лица", de: "Gesichtspflege", en: "Facial Care" },
  { code: "Эко-средства для дома", ru: "Эко-средства для дома", de: "Öko-Haushaltsmittel", en: "Eco Home Products" },
  { code: "Декоративная косметика", ru: "Декоративная косметика", de: "Dekorative Kosmetik", en: "Decorative Cosmetics" },
  { code: "Уход за кожей тела", ru: "Уход за кожей тела", de: "Körperpflege", en: "Body Care" },
  { code: "Уход для волос", ru: "Уход для волос", de: "Haarpflege", en: "Hair Care" },
  { code: "Гигиена полости рта", ru: "Гигиена полости рта", de: "Mundhygiene", en: "Oral Hygiene" },
  { code: "Товары для детей", ru: "Товары для детей", de: "Produkte für Kinder", en: "Products for Children" },
  { code: "Здоровье", ru: "Здоровье", de: "Gesundheit", en: "Health" },
  { code: "Эко-средства для стирки", ru: "Эко-средства для стирки", de: "Öko-Waschmittel", en: "Eco Laundry Products" },
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
    }[lang];
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
      <style>
        {`
        body, .bg-green-50 { background: #e9faee !important; }
        .catalog-header {
          background: #fff; box-shadow: 0 3px 10px 0 rgba(60, 90, 70, 0.04);
          position: sticky; top: 0; z-index: 10; width: 100%;
          display: flex; flex-direction: column; align-items: stretch; padding: 0;
        }
        .catalog-header-row {
          display: flex; align-items: center; justify-content: space-between;
          max-width: 1100px; margin: 0 auto; padding: 12px 10px 4px 10px; min-height: 72px;
        }
        .catalog-flags { display: flex; gap: 7px; }
        .catalog-flag-btn {
          background: none; border: none; padding: 0;
          outline: none; border-radius: 50%; border: 2px solid transparent;
          transition: border 0.2s; width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
        }
        .catalog-flag-btn.active { border: 2px solid #30bc6c; }
        .catalog-logo {
          max-height: 90px; max-width: 330px; object-fit: contain; background: transparent; margin: 0;
        }
        .catalog-header-actions {
          display: flex; align-items: center; gap: 16px;
        }
        .catalog-search {
          display: flex; align-items: center; background: #f3f7f4;
          border-radius: 20px; padding: 6px 15px; font-size: 17px;
        }
        .catalog-search input {
          border: none; background: none; outline: none;
          font-size: 17px; width: 130px; min-width: 0;
        }
        .catalog-cart-btn { background: none; border: none; padding: 0; position: relative; }
        .catalog-cart-img { width: 38px; height: 38px; }
        .catalog-cart-count {
          position: absolute; top: -5px; right: -5px;
          background: #30bc6c; color: #fff; font-size: 14px; border-radius: 100%;
          padding: 0 7px; min-width: 19px; text-align: center;
        }
        .catalog-categories {
          display: flex; justify-content: center; flex-wrap: wrap; gap: 12px;
          padding: 15px 0 5px 0; background: none;
        }
        .catalog-cat-btn {
          font-size: 17px; border-radius: 22px; border: 2px solid #30bc6c;
          background: none; padding: 6px 22px; transition: all 0.16s; color: #30bc6c;
          font-weight: 600; cursor: pointer;
        }
        .catalog-cat-btn.active {
          background: #30bc6c; color: #fff; border-color: #23a45a;
        }
        .catalog-products {
          margin: 0 auto; 
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          max-width: 1100px; gap: 26px; padding: 0 12px;
        }
        .catalog-card {
          background: #fff; border-radius: 18px; box-shadow: 0 2px 8px 0 rgba(60,90,70,0.07);
          padding: 20px 16px 18px 16px; display: flex; flex-direction: column;
          align-items: center; transition: box-shadow 0.2s; margin-top: 0; min-height: 370px; position: relative;
        }
        .catalog-card img { max-width: 100px; max-height: 100px; margin-bottom: 13px; object-fit: contain; background: transparent; }
        .catalog-card-title { font-weight: 700; font-size: 20px; text-align: center; margin-bottom: 3px; }
        .catalog-card-desc { font-size: 15px; text-align: center; margin-bottom: 8px; color: #5d675d; min-height: 34px; }
        .catalog-card-price { font-size: 17px; font-weight: 700; color: #30bc6c; margin-bottom: 2px; }
        .catalog-card-article { font-size: 12px; color: #a7b3a7; margin-bottom: 8px; }
        .catalog-card-btns { display: flex; gap: 10px; width: 100%; justify-content: center; }
        .catalog-card-btn { border: none; border-radius: 20px; padding: 7px 17px; font-size: 15px; font-weight: 500; cursor: pointer; background: #e8f9ef; color: #23a45a; transition: background 0.13s; }
        .catalog-card-btn.green { background: #30bc6c; color: #fff; }
        .catalog-card-details { font-size: 14px; background: #f4fbf6; margin-top: 10px; padding: 10px 13px; border-radius: 12px; width: 100%; }
        /* --- Адаптив --- */
        @media (max-width: 950px) {
          .catalog-products { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .catalog-header-row { flex-direction: column; gap: 10px; }
          .catalog-logo { max-width: 160px; max-height: 60px; }
          .catalog-products { gap: 11px; grid-template-columns: repeat(2, 1fr); }
          .catalog-card { padding: 12px 7px 13px 7px; min-height: 330px; }
          .catalog-card img { max-width: 64px; max-height: 64px; }
        }
        `}
      </style>

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