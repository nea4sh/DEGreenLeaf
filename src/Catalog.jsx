import React, { useState, useMemo } from "react";

// ВСТАВЬ СВОЙ МАССИВ PRODUCTS СЮДА (пример ниже)
const products = [
  {
    id: 1,
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
  },
  // ... все твои товары!
];

// Курсы валют (можно обновить)
const RUBLE_TO_DOLLAR = 90;
const RUBLE_TO_EURO = 98;

// Переводим цену в три валюты и возвращаем строку
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

const LANGS = [
  { code: "ru", label: "🇷🇺" },
  { code: "de", label: "🇩🇪" },
  { code: "en", label: "🇬🇧" },
];

const basketImg = "https://imgur.com/gbChm8g.png";

export default function Catalog() {
  const [lang, setLang] = useState("ru");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Категории (если нет, то "Без категории")
  const categories = useMemo(
    () => Array.from(new Set(products.map(p => p.category || "Без категории"))),
    []
  );

  // Фильтрация по поиску и категории
  const filteredProducts = useMemo(() => {
    let arr = products;
    if (activeCategory) arr = arr.filter(p => (p.category || "Без категории") === activeCategory);
    if (search) {
      const s = search.toLowerCase();
      arr = arr.filter(p =>
        (p[`name${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || "")
          .toLowerCase()
          .includes(s)
      );
    }
    return arr;
  }, [products, search, lang, activeCategory]);

  // Количество товара в корзине
  function getProductCount(id) {
    return cart.filter(item => item.id === id).length;
  }
  // Добавить товар
  function handleAdd(product) {
    setCart([...cart, product]);
  }
  // Убавить товар
  function handleRemove(product) {
    const idx = cart.findIndex(item => item.id === product.id);
    if (idx !== -1) {
      const newCart = [...cart];
      newCart.splice(idx, 1);
      setCart(newCart);
    }
  }
  // Убрать все
  function handleRemoveAll(id) {
    setCart(cart.filter(item => item.id !== id));
  }
  // Очистить фильтр категории
  function clearCategory() {
    setActiveCategory(null);
  }
  // Навигация по категории
  function handleCategoryClick(cat) {
    setActiveCategory(cat);
  }
  // Открыть/закрыть поиск на мобилке
  function toggleSearchMobile() {
    setShowSearchMobile(s => !s);
  }

  // Telegram
  function sendTelegramMessage() {
    const counts = {};
    cart.forEach(item => {
      counts[item.id] = (counts[item.id] || 0) + 1;
    });
    const message = Object.entries(counts)
      .map(([id, count]) => {
        const p = products.find(x => x.id === +id);
        return `• ${(p && p[`name${lang.charAt(0).toUpperCase()+lang.slice(1)}`]) || "Товар"} – ${formatPrice(p?.price, lang)} × ${count}`;
      })
      .join("%0A");
    const text = encodeURIComponent(
      (lang === "ru" ? "🛒 Заказ:" : lang === "de" ? "🛒 Bestellung:" : "🛒 Order:") + "\n" + message
    );
    window.open(`https://t.me/nea4sh_03?text=${text}`, "_blank");
  }

  return (
    <div className="bg-green-50 min-h-screen pb-12 relative">
      {/* === Шапка с языками, логотипом и поиском === */}
      <header className="bg-white shadow fixed w-full z-30 top-0 left-0">
        <div className="flex items-center justify-between px-3 py-3 max-w-5xl mx-auto relative">
          {/* Языки */}
          <div className="flex gap-2 items-center">
            {LANGS.map(l => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-2xl px-1 rounded-full transition ${lang === l.code ? 'ring-2 ring-green-400' : ''}`}
                title={l.code}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Логотип */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://i.imgur.com/KR2zF5W.png"
              alt="Логотип"
              className="h-28 w-auto"
              draggable={false}
              style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.07))" }}
            />
          </div>

          {/* Корзина + Поиск */}
          <div className="flex items-center gap-3">
            {/* Поиск десктоп */}
            <div className="hidden md:block mr-3">
              <div className="flex items-center border rounded-full px-3 py-1 bg-gray-50">
                <span className="mr-2 text-lg text-gray-400">🔍</span>
                <input
                  type="text"
                  placeholder={{
                    ru: "Поиск...",
                    de: "Suche...",
                    en: "Search..."
                  }[lang]}
                  className="bg-transparent outline-none w-40"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>
            {/* Поиск мобилка */}
            <button
              className="md:hidden text-2xl p-2 bg-gray-100 rounded-full"
              onClick={toggleSearchMobile}
              title="Поиск"
            >🔍</button>
            {/* Корзина */}
            <button
              className="relative"
              onClick={() => setCartOpen(o => !o)}
              title={{
                ru: "Корзина",
                de: "Warenkorb",
                en: "Cart"
              }[lang]}
            >
              <img src={basketImg} alt="Корзина" className="w-11 h-11" />
              {cart.length > 0 &&
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-green-500 text-white text-xs rounded-full px-2">
                  {cart.length}
                </span>
              }
            </button>
          </div>
        </div>
        {/* Поиск мобилка - выпадение */}
        {showSearchMobile && (
          <div className="md:hidden p-2 bg-white border-b shadow-sm">
            <div className="flex items-center border rounded-full px-3 py-2 bg-gray-50">
              <span className="mr-2 text-lg text-gray-400">🔍</span>
              <input
                type="text"
                placeholder={{
                  ru: "Поиск...",
                  de: "Suche...",
                  en: "Search..."
                }[lang]}
                className="bg-transparent outline-none w-full"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button className="ml-1 text-gray-400" onClick={toggleSearchMobile}>✖</button>
            </div>
          </div>
        )}
      </header>

      {/* === Боковая корзина === */}
      {cartOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 flex justify-end" onClick={() => setCartOpen(false)}>
          <div className="bg-white shadow-2xl rounded-l-3xl w-[340px] max-w-[90vw] p-5 h-full overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">
                {{
                  ru: "Корзина",
                  de: "Warenkorb",
                  en: "Cart"
                }[lang]}
              </span>
              <button className="text-2xl" onClick={() => setCartOpen(false)}>✖</button>
            </div>
            {cart.length === 0 ? (
              <div className="text-gray-500 mb-5">
                {{
                  ru: "Корзина пуста",
                  de: "Warenkorb ist leer",
                  en: "Cart is empty"
                }[lang]}
              </div>
            ) : (
              <div className="space-y-3">
                {Object.entries(
                  cart.reduce((acc, item) => {
                    acc[item.id] = acc[item.id] || { ...item, count: 0 };
                    acc[item.id].count += 1;
                    return acc;
                  }, {})
                ).map(([id, item]) => (
                  <div key={id} className="flex justify-between items-center border-b pb-1">
                    <div>
                      <span className="font-medium">{{
                        ru: item.nameRu,
                        de: item.nameDe,
                        en: item.nameEn
                      }[lang]}</span>
                      <div className="text-xs text-gray-400">{formatPrice(item.price, lang)}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleRemove(item)}
                        className="bg-gray-200 rounded px-2 text-lg font-bold hover:bg-gray-300"
                      >–</button>
                      <span className="mx-1 min-w-[18px] text-center">{item.count}</span>
                      <button
                        onClick={() => handleAdd(item)}
                        className="bg-gray-200 rounded px-2 text-lg font-bold hover:bg-gray-300"
                      >+</button>
                      <button
                        onClick={() => handleRemoveAll(item.id)}
                        className="ml-2 text-red-500 hover:text-red-700 text-lg"
                        title={{
                          ru: "Убрать все",
                          de: "Alles entfernen",
                          en: "Remove all"
                        }[lang]}
                      >×</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button
              disabled={cart.length === 0}
              onClick={sendTelegramMessage}
              className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed"
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

      {/* === Навигация по категориям === */}
      <nav className="pt-36 max-w-5xl mx-auto mb-3 flex flex-wrap gap-2 justify-center sticky top-32 z-20 bg-green-50">
        <button
          onClick={clearCategory}
          className={`px-4 py-2 rounded-full border ${activeCategory ? 'bg-white border-green-400 text-green-800' : 'bg-green-600 text-white border-green-600'} font-medium`}
        >
          {{
            ru: "Все товары",
            de: "Alle Produkte",
            en: "All products"
          }[lang]}
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 rounded-full border ${activeCategory === cat ? 'bg-green-600 text-white border-green-600' : 'bg-white border-green-400 text-green-800'} font-medium`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* === Товары === */}
      <main className="max-w-5xl mx-auto px-3">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-20 text-lg">
              {{
                ru: "Товары не найдены",
                de: "Keine Produkte gefunden",
                en: "No products found"
              }[lang]}
            </div>
          )}
          {filteredProducts.map(product => {
            const count = getProductCount(product.id);
            return (
              <div key={product.id} className="bg-white rounded-2xl shadow-md p-4 flex flex-col relative">
                <img src={product.image} alt={product[`name${lang.charAt(0).toUpperCase() + lang.slice(1)}`]} className="w-full h-44 object-contain mb-2" />
                <div className="font-semibold text-center text-lg">
                  {product[`name${lang.charAt(0).toUpperCase()+lang.slice(1)}`] || product.nameRu}
                </div>
                <div className="text-sm text-gray-500 text-center mb-1">
                  {product[`short${lang.charAt(0).toUpperCase()+lang.slice(1)}`] || product.shortRu}
                </div>
                <div className="text-green-700 font-semibold text-md text-center mb-1">
                  {formatPrice(product.price, lang)}
                </div>
                <div className="text-xs text-gray-400 text-center mb-1">
                  {product.article && `Артикул: ${product.article}`}
                </div>
                <div className="flex justify-center gap-2 mb-2">
                  <button
                    onClick={() => setExpanded(expanded === product.id ? null : product.id)}
                    className="text-sm px-4 py-1 bg-gray-100 rounded-full hover:bg-gray-200"
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
                      className="text-sm px-4 py-1 bg-green-500 text-white rounded-full hover:bg-green-600"
                    >
                      {{
                        ru: "В корзину",
                        de: "In den Warenkorb",
                        en: "Add to cart"
                      }[lang]}
                    </button>
                  ) : (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleRemove(product)}
                        className="bg-gray-200 rounded px-2 text-lg font-bold hover:bg-gray-300"
                      >–</button>
                      <span className="mx-1 min-w-[20px] text-center font-semibold">{count}</span>
                      <button
                        onClick={() => handleAdd(product)}
                        className="bg-gray-200 rounded px-2 text-lg font-bold hover:bg-gray-300"
                      >+</button>
                    </div>
                  )}
                </div>
                {expanded === product.id && (
                  <div className="mt-2 p-2 bg-gray-50 rounded text-sm max-h-48 overflow-y-auto">
                    <div>
                      <b>{
                        {
                          ru: "Описание",
                          de: "Beschreibung",
                          en: "Description"
                        }[lang]
                      }:</b>
                      <p className="mb-2">
                        {product[`full${lang.charAt(0).toUpperCase()+lang.slice(1)}`] || product.fullRu}
                      </p>
                      <b>{
                        {
                          ru: "Применение",
                          de: "Anwendung",
                          en: "Usage"
                        }[lang]
                      }:</b>
                      <p>
                         {product[`usage${lang.charAt(0).toUpperCase()+lang.slice(1)}`] || product.usageRu}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}