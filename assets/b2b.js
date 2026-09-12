// Standalone B2B Wholesale Portal Controller
// Embedded products dataset from roastcoast.ru (Only active products)

const EMBEDDED_PRODUCTS = [
  {
    "url": "https://roastcoast.ru/cofe/dlya-espresso/black-forest-200g-espresso",
    "title": "Black Forest/Блэк Форест",
    "badge": "Эспрессо",
    "category": "espresso",
    "subtitle": "Фирменный бленд",
    "price": "613  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new03/blekforest-517x540.jpg"
    ],
    "description": "В составе бленда арабика из Бразилии и робуста из Уганды."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-espresso/el-classico-200g-espresso",
    "title": "El Classico/Эль Классико",
    "badge": "Эспрессо",
    "category": "espresso",
    "subtitle": "Фирменный бленд",
    "price": "667  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new03/elklassiko-517x540.jpg"
    ],
    "description": "Благодаря сочетанию в бленде натуральной Бразилии и мытой Колумбии, кофе сочный, сбалансированный,..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-espresso/sweet-hills-200g-espresso",
    "title": "Sweet Hills/Свит Хилс",
    "badge": "Эспрессо",
    "category": "espresso",
    "subtitle": "Фирменный бленд",
    "price": "620  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new03/svithills-517x540.jpg"
    ],
    "description": "Благодаря сочетанию в бленде натуральной Бразилии и Эфиопии, кофе очень сбалансированный, плотный,..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-espresso/braziliya-minas-zherajs-200g-espresso",
    "title": "Бразилия Минас Жерайс",
    "badge": "Эспрессо",
    "category": "espresso",
    "subtitle": "Бразилия • Спешелти",
    "price": "617  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new03/brazilijaminas-517x540.jpg"
    ],
    "description": "Насыщенный, сладкий кофе с приятной горчинкой и невысокой кислотностью."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-espresso/gvatemala-dekaf-200g-espresso",
    "title": "Гватемала Декаф",
    "badge": "Декаф",
    "category": "espresso",
    "subtitle": "Гватемала • Спешелти",
    "price": "755  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new07/novajapachkagvatemaladekaf-517x540.jpg"
    ],
    "description": "Смесь L&B Decaf состоит из разных компонентов, которые могут чередоваться, но основные регионы остаются..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/gvatemala-finka-san-antonio-200g-filtr",
    "title": "Гватемала Финка Сан Антонио",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Гватемала • Спешелти",
    "price": "818  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/newfilter/gvatemaladajkafinku-517x540.jpg"
    ],
    "description": "Регион  Chuabarena, Cubulco, Baja VerapazФермерыDiego PerezФерма San AntonioРазмер фермы1."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/gvatemala-el-sokorro-200g-filtr",
    "title": "Гватемала Эль Сокорро",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Гватемала • Спешелти",
    "price": "818  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/newfilter/gvatemaladajkafinkuel-517x540.jpg"
    ],
    "description": "Регион  Санта-Роса (Santa Rosa), окрестности озера АярзаФерма Финка Эль Сокорро (Finca El..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/indoneziya-sumatra-gajo-200g-filtr",
    "title": "Индонезия Суматра Гайо",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Индонезия • Спешелти",
    "price": "790  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/newfilter/indonezijasumatrajou-517x540.jpg"
    ],
    "description": "Провинция: АчехОкруг: БенермериахПроизводители: 490 небольших землевладельцев Площадь области..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/keniya-kabingara-200g-filtr",
    "title": "Кения Кабингара",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Кения • Спешелти",
    "price": "894  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/newfilter/kenijakapibara-517x540.jpg"
    ],
    "description": "Регион: округ КириньягаСбор урожая: май — июнь, ноябрь — декабрьКоличество осадков: 1200 мм в..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/keniya-kasinga-200g-filtr",
    "title": "Кения Касинга",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Кения • Спешелти",
    "price": "882  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new07/pachkakenijakaksimba-517x540.jpg"
    ],
    "description": "Мандарин, темные ягоды, черный чай, шиповникстанция  касинга регион  мачакос высота  1656 м почва..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/keniya-mtaro-200g-filtr",
    "title": "Кения Мтаро",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Кения • Спешелти",
    "price": "1 022  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/newfilter/kenijataro-517x540.jpg"
    ],
    "description": "Регион: округ КиамбуПлощадь поместья Mtaro Estate: 346 га Площадь кофейных посадок: 198,6 га Сбор..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/kitaj-sigan-200g-filtr",
    "title": "Китай Сиган",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Китай • Юньнань",
    "price": "888  ₽",
    "options": [
      "200 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new07/pachkagangamstajl-517x540.jpg"
    ],
    "description": "Тёмный виноград, красное вино, какаоРегион: провинция Юньнань, округ Пуэр, уезд МэнляньКооператив /..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/kolumbiya-alto-selo-200g-filtr",
    "title": "Колумбия Альто Сьело",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Колумбия • Спешелти",
    "price": "975  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new07/pachkakolumbijaetoselo-517x540.jpg"
    ],
    "description": "Яркий, сладкий лот редкой разновидности с тропическим и шоколадно-ореховым профилемРегион Уила,..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/kolumbiya-andzhelo-sosa-tabi-200g-filtr",
    "title": "Колумбия Анджело Соса (Таби)",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Колумбия • Спешелти",
    "price": "1 011  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new07/pachkaanzhelasosasola-517x540.jpg"
    ],
    "description": "Сочный, чистый, деликатный кофе с ягодно-фруктовым профилемПрофиль вкуса Тропические фрукты, ликер,..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/kolumbiya-guamo-200g-filtr",
    "title": "Колумбия Гуамо",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Колумбия • Спешелти",
    "price": "920  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/newfilter/kolguano2-517x540.jpg"
    ],
    "description": "регион: кальдас, манзанарес фермер: проект рефорествысота:  1800 мсорт: катурра обработка:..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/kolumbiya-papajo-200g-filtr",
    "title": "Колумбия Папайо",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Колумбия • Спешелти",
    "price": "975  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new07/pachkakolumbijamamajja-517x540.jpg"
    ],
    "description": "Сочный, плотный, сбалансированный лот редкой разновидности папайоПрофиль вкуса: Груша, красное яблоко,..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/kolumbiya-pachamama-mytyj-200g-filtr",
    "title": "Колумбия Пачамама (мытый)",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Колумбия • Спешелти",
    "price": "814  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new07/pachkapapamamafiltr-517x540.jpg"
    ],
    "description": "Чистый, свежий, сбалансированный лот с шоколадно-карамельным профилемПрофиль вкуса Шоколад,..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-espresso/kolumbiya-pachamama-mytyj-200g-espresso",
    "title": "Колумбия Пачамама (мытый)",
    "badge": "Эспрессо",
    "category": "espresso",
    "subtitle": "Колумбия • Спешелти",
    "price": "814  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new07/novajapachkakolumbijadzhimiachaacha-517x540.jpg"
    ],
    "description": "Чистый, свежий, сбалансированный лот с шоколадно-карамельным профилемПрофиль вкуса Шоколад,..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/kolumbiya-el-vergel-200g-filtr",
    "title": "Колумбия Эль Вергел",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Колумбия • Спешелти",
    "price": "966  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new07/pachkakolumbijajavertel-517x540.jpg"
    ],
    "description": "Алкогольные ноты, темные ягоды, темный шоколад, тропические фрукты,  цитрусырегион фресно ферма эль..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/ruanda-simbi-200g-filtr",
    "title": "Руанда Симби",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Руанда • Спешелти",
    "price": "1 126  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/newfilter/ruandapumba-517x540.jpg"
    ],
    "description": "Станция Simbi Washing Station Owner: Abdul RudahungaУрожай 2025 /2026Высота  1."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-espresso/uganda-mvezi-200g-espresso",
    "title": "Уганда Мвези",
    "badge": "Эспрессо",
    "category": "espresso",
    "subtitle": "Уганда • Спешелти",
    "price": "728  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new07/novajapachkaugandavezi-517x540.jpg"
    ],
    "description": "Вкусовые характеристики  Плотный кофе с винной кислотностью и сладким букетом спелой клубники, сливы и..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-filtra/efiopiya-konga-200g-filtr",
    "title": "Эфиопия Конга",
    "badge": "Фильтр",
    "category": "filter",
    "subtitle": "Эфиопия • Спешелти",
    "price": "894  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/newfilter/efiopijakingkong2-517x540.jpg"
    ],
    "description": "Регион: ИргачеффеСтанция обработки: КонгаПроизводители: местные фермерыВысота: 1950–2100 м над уровнем..."
  },
  {
    "url": "https://roastcoast.ru/cofe/dlya-espresso/efiopiya-sidamo-200g-espresso",
    "title": "Эфиопия Сидамо",
    "badge": "Эспрессо",
    "category": "espresso",
    "subtitle": "Эфиопия • Спешелти",
    "price": "627  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new03/efiopijasidamo-517x540.jpg"
    ],
    "description": "Эфиопия\r  Сидамо гр."
  },
  {
    "url": "https://roastcoast.ru/accessories/kakao-poroshok-cacao-22-24-1kg-irca-italiya",
    "title": "Какао порошок - Cacao 22/24 1кг, IRCA, Италия",
    "badge": "Какао",
    "category": "other",
    "subtitle": "IRCA • Италия",
    "price": "2 400  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new04/kakaoirka-517x540.jpg"
    ],
    "description": "RCA – 100% Какао-порошок алкализированный 22-24% какао-масла «Horeca Line» - идеален для приготовления..."
  },
  {
    "url": "https://roastcoast.ru/accessories/sredstvo-dlya-ochistki-kofemashin-ot-kofejnyh-masel-himteam-1000g",
    "title": "Средство для очистки кофемашин от кофейных масел himteam 1000г",
    "badge": "Уход",
    "category": "other",
    "subtitle": "Himteam • Проф. химия",
    "price": "1 150  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new04/new06/masel2-517x540.jpg"
    ],
    "description": "Эффективно удаляет труднорастворимые загрязнения, в т."
  },
  {
    "url": "https://roastcoast.ru/accessories/sredstvo-dlya-ochistki-molochnyh-sistem-i-kapuchinatora-himteam-1000ml",
    "title": "Средство для очистки молочных систем и капучинатора himteam 1000мл",
    "badge": "Уход",
    "category": "other",
    "subtitle": "Himteam • Проф. химия",
    "price": "990  ₽",
    "options": [
      "200 г",
      "1 000 г"
    ],
    "images": [
      "https://roastcoast.ru/image/cache/catalog/new04/new06/moloko2-517x540.jpg"
    ],
    "description": "Профессиональное средство для очистки молочных систем кофемашин предназначено для обеспечения длительной..."
  }
];

let allProducts = EMBEDDED_PRODUCTS;
let cart = {}; // key: "prodTitle-option", val: { title, option, qty, unitPriceRetail, unitPriceB2B, weightKg }
let currentCategory = 'all';
let currentView = 'table'; // 'table' (списком) is active by default
const B2B_DISCOUNT_PERCENT = 30; // 30% оптовая скидка от розницы
const MIN_ORDER_KG = 10; // Мин. оптовый заказ 10 кг

const SVG_MINUS = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="1.5" y1="5" x2="8.5" y2="5"/></svg>';
const SVG_PLUS = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="1.5" x2="5" y2="8.5"/><line x1="1.5" y1="5" x2="8.5" y2="5"/></svg>';

const B2B_CATEGORIES = [
    {
        id: 'milk_blends',
        title: 'СМЕСИ ДЛЯ МОЛОЧНЫХ НАПИТКОВ',
        subtitle: 'КОФЕ ДЛЯ МОЛОЧНЫХ НАПИТКОВ',
        match: (p) => (p.category === 'espresso' || p.badge === 'Эспрессо') && !p.title.toLowerCase().includes('декаф')
    },
    {
        id: 'decaf_lots',
        title: 'ДЕКАФЫ И ЛОУКАФЫ',
        subtitle: 'ДЕКАФЫ И ЛОУКАФЫ',
        match: (p) => p.title.toLowerCase().includes('декаф') || (p.badge && p.badge.toLowerCase().includes('декаф'))
    },
    {
        id: 'filter_lots',
        title: 'МОНОСОРТА И МИКРОЛОТЫ ДЛЯ ФИЛЬТРА',
        subtitle: 'КОФЕ СВЕЖЕГО УРОЖАЯ',
        match: (p) => (p.category === 'filter' || p.badge === 'Фильтр') && !p.title.toLowerCase().includes('декаф')
    },
    {
        id: 'other_items',
        title: 'КАКАО И СОПУТСТВУЮЩИЕ ТОВАРЫ',
        subtitle: 'ДЛЯ БАРИСТА И КОФЕМАШИН',
        match: (p) => p.category === 'other' || p.badge === 'Какао' || p.badge === 'Уход'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('view-cards');
    const grid = document.getElementById('productGrid');
    const tableWrap = document.getElementById('productTableWrapper');
    if (grid) grid.style.display = 'none';
    if (tableWrap) tableWrap.style.display = 'block';

    setupEventListeners();
    renderCatalog();
    updateCartUI();
});

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderCatalog();
        });
    }

    // Category Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentCategory = e.currentTarget.dataset.cat;
            renderCatalog();
        });
    });

    // View Toggles: Списком (table) and Карточки (cards)
    const viewCardsBtn = document.getElementById('viewCardsBtn');
    const viewTableBtn = document.getElementById('viewTableBtn');
    
    if (viewCardsBtn && viewTableBtn) {
        viewCardsBtn.addEventListener('click', () => {
            currentView = 'cards';
            viewCardsBtn.classList.add('active');
            viewTableBtn.classList.remove('active');
            document.body.classList.add('view-cards');
            const grid = document.getElementById('productGrid');
            const tableWrap = document.getElementById('productTableWrapper');
            if (grid) grid.style.display = 'grid';
            if (tableWrap) tableWrap.style.display = 'none';
        });

        viewTableBtn.addEventListener('click', () => {
            currentView = 'table';
            viewTableBtn.classList.add('active');
            viewCardsBtn.classList.remove('active');
            document.body.classList.remove('view-cards');
            const grid = document.getElementById('productGrid');
            const tableWrap = document.getElementById('productTableWrapper');
            if (grid) grid.style.display = 'none';
            if (tableWrap) tableWrap.style.display = 'block';
        });
    }

    // Clear cart
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            cart = {};
            updateCartUI();
            renderCatalog();
        });
    }

    // Invoice Modal
    const checkoutBtn = document.getElementById('checkoutBtn');
    const mobileCheckoutBtn = document.getElementById('mobileCheckoutBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const printInvoiceBtn = document.getElementById('printInvoiceBtn');

    if (checkoutBtn) checkoutBtn.addEventListener('click', openInvoiceModal);
    if (mobileCheckoutBtn) mobileCheckoutBtn.addEventListener('click', openInvoiceModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (printInvoiceBtn) printInvoiceBtn.addEventListener('click', () => window.print());
}

function getFilteredProducts() {
    const searchInput = document.getElementById('searchInput');
    const query = (searchInput && typeof searchInput.value === 'string') ? searchInput.value.toLowerCase().trim() : '';
    
    return allProducts.filter(p => {
        const titleMatch = p.title.toLowerCase().includes(query) || p.description.toLowerCase().includes(query) || p.subtitle.toLowerCase().includes(query);
        if (!titleMatch) return false;

        if (currentCategory === 'espresso') {
            return p.category === 'espresso';
        } else if (currentCategory === 'filter') {
            return p.category === 'filter';
        } else if (currentCategory === 'other') {
            return p.category === 'other';
        }
        return true;
    });
}

function parsePriceNum(priceStr) {
    if (!priceStr) return 0;
    const clean = priceStr.replace(/[^0-9]/g, '');
    return parseInt(clean, 10) || 0;
}

const collapsedCategories = new Set();
function toggleCategorySection(cardId) {
    const card = document.getElementById(cardId);
    if (card) {
        card.classList.toggle('collapsed');
        if (card.classList.contains('collapsed')) {
            collapsedCategories.add(cardId);
        } else {
            collapsedCategories.delete(cardId);
        }
    }
}

function renderCatalog() {
    const products = getFilteredProducts();
    
    // 1. Render Grid Cards (Alternative Cards View)
    const gridEl = document.getElementById('productGrid');
    if (gridEl) {
        gridEl.innerHTML = '';
        products.forEach(p => {
            const retail200 = parsePriceNum(p.price);
            const b2b200 = Math.round(retail200 * (1 - B2B_DISCOUNT_PERCENT / 100));
            const retail1000 = Math.round(retail200 * 3.4);
            const b2b1000 = Math.round(retail1000 * (1 - B2B_DISCOUNT_PERCENT / 100));
            const imgUrl = (p.images && p.images.length > 0) ? p.images[0] : 'https://roastcoast.ru/image/logo.svg';
            const escapedTitle = p.title.replace(/'/g, "\\'");

            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <span class="badge-roast">${p.badge}</span>
                    <img src="${imgUrl}" class="card-img" alt="${p.title}" loading="lazy" onerror="this.src='https://roastcoast.ru/image/logo.svg'">
                </div>
                <div class="card-body">
                    <div class="card-title" title="${p.title}">${p.title}</div>
                    <div class="card-subtitle">${p.subtitle}</div>
                    <div class="card-descr">${p.description}</div>
                    
                    <div class="card-bottom-section">
                        <div class="card-price-row">
                            <div class="price-box">
                                <span class="retail-price">${retail1000 > 0 ? retail1000 + ' ₽' : 'По запросу'}</span>
                                <span class="b2b-price">${b2b1000 > 0 ? b2b1000 + ' ₽' : 'Опт'}</span>
                            </div>
                            <span class="b2b-discount-tag">-30% Опт</span>
                        </div>

                        <div class="options-matrix">
                            <div class="option-row">
                                <span class="option-name">1 000 г</span>
                                <div class="qty-control">
                                    <button type="button" class="qty-btn qty-btn-minus" onclick="updateQty('${escapedTitle}', '1 000 г', ${retail1000}, ${b2b1000}, -1)">${SVG_MINUS}</button>
                                    <input type="text" class="qty-input" value="${cart[`${p.title}-1 000 г`] ? cart[`${p.title}-1 000 г`].qty : 0}" readonly>
                                    <button type="button" class="qty-btn qty-btn-plus" onclick="updateQty('${escapedTitle}', '1 000 г', ${retail1000}, ${b2b1000}, 1)">${SVG_PLUS}</button>
                                </div>
                            </div>
                            <div class="option-row">
                                <span class="option-name">200 г</span>
                                <div class="qty-control">
                                    <button type="button" class="qty-btn qty-btn-minus" onclick="updateQty('${escapedTitle}', '200 г', ${retail200}, ${b2b200}, -1)">${SVG_MINUS}</button>
                                    <input type="text" class="qty-input" value="${cart[`${p.title}-200 г`] ? cart[`${p.title}-200 г`].qty : 0}" readonly>
                                    <button type="button" class="qty-btn qty-btn-plus" onclick="updateQty('${escapedTitle}', '200 г', ${retail200}, ${b2b200}, 1)">${SVG_PLUS}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            gridEl.appendChild(card);
        });
    }

    // 2. Render Categorized List Sections (Default View matching screenshot)
    const listWrapperEl = document.getElementById('productTableWrapper');
    if (listWrapperEl) {
        listWrapperEl.innerHTML = '';

        let hasAnyRendered = false;

        B2B_CATEGORIES.forEach(cat => {
            const catProducts = products.filter(cat.match);
            if (catProducts.length === 0) return;

            if (hasAnyRendered) {
                const divider = document.createElement('div');
                divider.className = 'ring-divider';
                divider.innerHTML = '<div class="ring small"></div><div class="ring"></div><div class="ring small"></div>';
                listWrapperEl.appendChild(divider);
            }

            hasAnyRendered = true;
            const sectionCard = document.createElement('div');
            sectionCard.className = 'category-section-card' + (collapsedCategories.has(`cat-card-${cat.id}`) ? ' collapsed' : '');
            sectionCard.id = `cat-card-${cat.id}`;

            // Category Header
            const headerHtml = `
                <div class="category-section-header" onclick="toggleCategorySection('cat-card-${cat.id}')">
                    <div>
                        <div class="cat-tag-info">
                            <span>${cat.subtitle}</span>
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
                        </div>
                        <h2 class="cat-h2-title">${cat.title}</h2>
                    </div>
                    <svg class="cat-chevron-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                </div>
            `;

            // Category Items
            const productsHtml = catProducts.map(p => {
                const retail200 = parsePriceNum(p.price);
                const b2b200 = Math.round(retail200 * (1 - B2B_DISCOUNT_PERCENT / 100));
                const retail1000 = Math.round(retail200 * 3.4);
                const b2b1000 = Math.round(retail1000 * (1 - B2B_DISCOUNT_PERCENT / 100));
                const imgUrl = (p.images && p.images.length > 0) ? p.images[0] : 'https://roastcoast.ru/image/logo.svg';
                const escapedTitle = p.title.replace(/'/g, "\\'");

                const key1000 = `${p.title}-1 000 г`;
                const qty1000 = cart[key1000] ? cart[key1000].qty : 0;
                const key200 = `${p.title}-200 г`;
                const qty200 = cart[key200] ? cart[key200].qty : 0;

                const has1000 = p.options ? p.options.some(o => o.includes('1 000') || o.includes('1000')) : true;
                const isHot = p.title.includes('Classico') || p.title.includes('Sweet Hills') || p.title.includes('Минас');
                const isNew = p.title.includes('Кения') || p.title.includes('Антонио') || p.title.includes('Сиган');

                let badgeHtml = '';
                if (isHot) {
                    badgeHtml = '<span class="item-badge-pct" title="Хит продаж">%</span>';
                } else if (isNew) {
                    badgeHtml = '<span class="item-badge-new" title="Новинка">NEW</span>';
                }

                const btn1000 = qty1000 === 0 
                    ? `<button type="button" class="opt-btn-add" onclick="updateQty('${escapedTitle}', '1 000 г', ${retail1000}, ${b2b1000}, 1, this)">+</button>`
                    : `<div class="opt-qty-control">
                         <button type="button" class="opt-qty-btn" onclick="updateQty('${escapedTitle}', '1 000 г', ${retail1000}, ${b2b1000}, -1, this)">–</button>
                         <span class="opt-qty-num">${qty1000}</span>
                         <button type="button" class="opt-qty-btn" onclick="updateQty('${escapedTitle}', '1 000 г', ${retail1000}, ${b2b1000}, 1, this)">+</button>
                       </div>`;

                const btn200 = qty200 === 0 
                    ? `<button type="button" class="opt-btn-add" onclick="updateQty('${escapedTitle}', '200 г', ${retail200}, ${b2b200}, 1, this)">+</button>`
                    : `<div class="opt-qty-control">
                         <button type="button" class="opt-qty-btn" onclick="updateQty('${escapedTitle}', '200 г', ${retail200}, ${b2b200}, -1, this)">–</button>
                         <span class="opt-qty-num">${qty200}</span>
                         <button type="button" class="opt-qty-btn" onclick="updateQty('${escapedTitle}', '200 г', ${retail200}, ${b2b200}, 1, this)">+</button>
                       </div>`;

                const row1000 = has1000 ? `
                    <div class="prod-opt-row">
                        <span class="opt-weight">1 кг</span>
                        <span class="opt-grind">В зернах</span>
                        <span class="opt-price">${b2b1000.toLocaleString('ru-RU')} ₽</span>
                        <div class="opt-btn-wrap">
                            ${btn1000}
                        </div>
                    </div>
                ` : '';

                const row200 = `
                    <div class="prod-opt-row">
                        <span class="opt-weight">200 г</span>
                        <span class="opt-grind">В зернах</span>
                        <span class="opt-price">${b2b200.toLocaleString('ru-RU')} ₽</span>
                        <div class="opt-btn-wrap">
                            ${btn200}
                        </div>
                    </div>
                `;

                return `
                    <div class="b2b-list-item">
                        <div class="prod-item-top">
                            <img src="${imgUrl}" class="prod-item-pack-img" alt="${p.title}" loading="lazy" onerror="this.src='https://roastcoast.ru/image/logo.svg'">
                            <div class="prod-item-heading">
                                <div class="prod-item-title">${p.title}</div>
                                <div class="prod-item-sub">${p.subtitle || 'натуральный • Спешелти'}</div>
                            </div>
                            <div class="prod-item-badges">
                                ${badgeHtml}
                                <button type="button" class="prod-fav-btn" onclick="this.classList.toggle('active'); event.stopPropagation();" title="В избранное">
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                                </button>
                            </div>
                        </div>
                        <div class="prod-options-stack">
                            ${row1000}
                            ${row200}
                        </div>
                    </div>
                `;
            }).join('');

            sectionCard.innerHTML = `
                ${headerHtml}
                <div class="category-products-container">
                    ${productsHtml}
                </div>
            `;

            listWrapperEl.appendChild(sectionCard);
        });

        if (!hasAnyRendered) {
            listWrapperEl.innerHTML = '<div style="text-align:center; padding:40px; background:#fff; border-radius:12px; border:1px solid var(--color-border); color:var(--color-fg-muted);">Товары по вашему запросу не найдены.</div>';
        }
    }
}

function findOptWrap(title, opt) {
    const listItems = document.querySelectorAll('.b2b-list-item');
    const is1000 = opt.includes('1 000') || opt.includes('1000') || opt.includes('1k') || opt.includes('1 к') || opt.includes('1кг');
    for (const item of listItems) {
        const titleEl = item.querySelector('.prod-item-title');
        if (titleEl && titleEl.textContent.trim().toLowerCase() === title.trim().toLowerCase()) {
            const rows = item.querySelectorAll('.prod-opt-row');
            for (const row of rows) {
                const weightEl = row.querySelector('.opt-weight');
                if (weightEl) {
                    const txt = weightEl.textContent.trim();
                    if ((is1000 && (txt.includes('1') || txt.includes('кг'))) || (!is1000 && txt.includes('200'))) {
                        return row.querySelector('.opt-btn-wrap');
                    }
                }
            }
        }
    }
    return null;
}

function updateOptControlDOM(title, opt, retailPrice, b2bPrice, qty, triggerBtn) {
    let wrap = triggerBtn ? triggerBtn.closest('.opt-btn-wrap') : null;
    if (!wrap) {
        wrap = findOptWrap(title, opt);
    }
    if (wrap) {
        const escapedTitle = title.replace(/'/g, "\\'");
        if (qty > 0) {
            wrap.innerHTML = `
                <div class="opt-qty-control">
                    <button type="button" class="opt-qty-btn" onclick="updateQty('${escapedTitle}', '${opt}', ${retailPrice}, ${b2bPrice}, -1, this)">–</button>
                    <span class="opt-qty-num">${qty}</span>
                    <button type="button" class="opt-qty-btn" onclick="updateQty('${escapedTitle}', '${opt}', ${retailPrice}, ${b2bPrice}, 1, this)">+</button>
                </div>
            `;
        } else {
            wrap.innerHTML = `
                <button type="button" class="opt-btn-add" onclick="updateQty('${escapedTitle}', '${opt}', ${retailPrice}, ${b2bPrice}, 1, this)">+</button>
            `;
        }
    }
}

function updateQty(title, opt, retailPrice, b2bPrice, delta, triggerBtn) {
    const itemKey = `${title}-${opt}`;
    
    let weightKg = 0.2;
    if (opt.includes('1 000') || opt.includes('1000') || opt.includes('1k') || opt.includes('1 к') || opt.includes('1кг')) {
        weightKg = 1.0;
    }

    if (!cart[itemKey]) {
        cart[itemKey] = {
            title,
            option: opt,
            qty: 0,
            unitPriceRetail: retailPrice,
            unitPriceB2B: b2bPrice,
            weightKg
        };
    }

    cart[itemKey].qty += delta;

    if (cart[itemKey].qty <= 0) {
        delete cart[itemKey];
    }

    const currentQty = cart[itemKey] ? cart[itemKey].qty : 0;
    updateOptControlDOM(title, opt, retailPrice, b2bPrice, currentQty, triggerBtn);
    updateCartUI();
}

function updateCartUI() {
    const cartListEl = document.getElementById('cartItemsList');
    if (!cartListEl) return;
    
    cartListEl.innerHTML = '';

    let totalWeight = 0;
    let totalRetail = 0;
    let totalB2B = 0;
    let totalCount = 0;

    const cartEntries = Object.values(cart);

    if (cartEntries.length === 0) {
        cartListEl.innerHTML = '<div style="color:var(--color-fg-muted); text-align:center; padding:28px 0; font-size:0.88rem;">Выберите кофе и фасовку в каталоге</div>';
    } else {
        cartEntries.forEach(item => {
            totalCount += item.qty;
            const itemWeight = item.qty * item.weightKg;
            totalWeight += itemWeight;
            
            const itemRetail = item.qty * item.unitPriceRetail;
            const itemB2B = item.qty * item.unitPriceB2B;
            totalRetail += itemRetail;
            totalB2B += itemB2B;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div style="flex:1; min-width:0;">
                    <div class="cart-item-title" style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.title}</div>
                    <div class="cart-item-meta">${item.option} × ${item.qty} шт. (${itemWeight.toFixed(1)} кг)</div>
                </div>
                <div class="cart-item-price">${itemB2B.toLocaleString('ru-RU')} ₽</div>
            `;
            cartListEl.appendChild(cartItem);
        });
    }

    const totalDiscount = totalRetail - totalB2B;

    const totalItemsCountEl = document.getElementById('totalItemsCount');
    const totalWeightKgEl = document.getElementById('totalWeightKg');
    const totalRetailPriceEl = document.getElementById('totalRetailPrice');
    const totalDiscountSumEl = document.getElementById('totalDiscountSum');
    const totalB2BPriceEl = document.getElementById('totalB2BPrice');
    const sidebarBigSumEl = document.getElementById('sidebarBigSum');

    if (totalItemsCountEl) totalItemsCountEl.textContent = totalCount;
    if (totalWeightKgEl) totalWeightKgEl.textContent = `${totalWeight.toFixed(1)} кг`;
    if (totalRetailPriceEl) totalRetailPriceEl.textContent = `${totalRetail.toLocaleString('ru-RU')} ₽`;
    if (totalDiscountSumEl) totalDiscountSumEl.textContent = `-${totalDiscount.toLocaleString('ru-RU')} ₽`;
    if (totalB2BPriceEl) totalB2BPriceEl.textContent = `${totalB2B.toLocaleString('ru-RU')} ₽`;
    if (sidebarBigSumEl) sidebarBigSumEl.textContent = `${totalB2B.toLocaleString('ru-RU')} ₽`;

    // Progress bar for wholesale tier
    const progressFill = document.getElementById('progressFill');
    const progressWeightText = document.getElementById('progressWeightText');
    if (progressFill && progressWeightText) {
        const percent = Math.min(100, (totalWeight / MIN_ORDER_KG) * 100);
        progressFill.style.width = `${percent}%`;
        progressWeightText.textContent = `${totalWeight.toFixed(1)} / ${MIN_ORDER_KG} кг`;
    }

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        if (totalCount === 0) {
            checkoutBtn.disabled = true;
            checkoutBtn.style.opacity = '0.5';
            checkoutBtn.style.cursor = 'not-allowed';
        } else {
            checkoutBtn.disabled = false;
            checkoutBtn.style.opacity = '1';
            checkoutBtn.style.cursor = 'pointer';
        }
    }

    // Mobile action bar buttons (styled like reference, with invoice and price-list actions)
    const mobileCheckoutBtn = document.getElementById('mobileCheckoutBtn');
    const mobileOrderBtnText = document.getElementById('mobileOrderBtnText');
    if (mobileCheckoutBtn) {
        if (totalCount > 0) {
            mobileCheckoutBtn.style.opacity = '1';
            mobileCheckoutBtn.disabled = false;
            mobileCheckoutBtn.style.cursor = 'pointer';
            if (mobileOrderBtnText) {
                mobileOrderBtnText.textContent = `Счёт (${totalB2B.toLocaleString('ru-RU')} ₽)`;
            }
        } else {
            mobileCheckoutBtn.style.opacity = '0.5';
            mobileCheckoutBtn.disabled = true;
            mobileCheckoutBtn.style.cursor = 'not-allowed';
            if (mobileOrderBtnText) {
                mobileOrderBtnText.textContent = 'Сформировать счёт';
            }
        }
    }
}

function openInvoiceModal() {
    const modal = document.getElementById('invoiceModal');
    if (!modal) return;
    
    modal.classList.add('active');

    const invoiceTableBody = document.getElementById('modalInvoiceTableBody');
    if (invoiceTableBody) {
        invoiceTableBody.innerHTML = '';

        let sumB2B = 0;
        let idx = 1;

        Object.values(cart).forEach(item => {
            const itemSum = item.qty * item.unitPriceB2B;
            sumB2B += itemSum;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${idx++}</td>
                <td><strong>${item.title}</strong> (${item.option})</td>
                <td>${item.qty} шт.</td>
                <td>${item.unitPriceB2B.toLocaleString('ru-RU')} ₽</td>
                <td><strong>${itemSum.toLocaleString('ru-RU')} ₽</strong></td>
            `;
            invoiceTableBody.appendChild(tr);
        });

        const dateStr = new Date().toLocaleDateString('ru-RU');
        document.getElementById('invoiceDate').textContent = dateStr;
        document.getElementById('invoiceNumber').textContent = `RC-${Math.floor(10000 + Math.random() * 90000)}`;
        document.getElementById('modalTotalSum').textContent = `${sumB2B.toLocaleString('ru-RU')} ₽`;
    }
}

function closeModal() {
    const modal = document.getElementById('invoiceModal');
    if (modal) modal.classList.remove('active');
}

// Cup Cost & Margin Calculator Logic
function initCalcModal() {
    const openBtn = document.getElementById('openCalcModalBtn');
    const closeBtn = document.getElementById('closeCalcModalBtn');
    const modal = document.getElementById('calcModal');
    if (!modal) return;

    if (openBtn) openBtn.addEventListener('click', () => modal.classList.add('active'));
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));

    const inputs = ['calcCoffeePrice', 'calcDose', 'calcEspressoSell', 'calcCapSell'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', recalcMargin);
    });

    recalcMargin();
}

function recalcMargin() {
    const coffeePrice = parseFloat(document.getElementById('calcCoffeePrice')?.value || 1400);
    const dose = parseFloat(document.getElementById('calcDose')?.value || 18);
    const espressoSell = parseFloat(document.getElementById('calcEspressoSell')?.value || 150);
    const capSell = parseFloat(document.getElementById('calcCapSell')?.value || 220);

    const costPerGram = coffeePrice / 1000;
    const espressoCost = costPerGram * dose;
    const espressoMargin = espressoSell > 0 ? ((espressoSell - espressoCost) / espressoSell) * 100 : 0;

    const milkCost = 12; // ~150ml milk = 12 RUB
    const capCost = espressoCost + milkCost;

    const cupsPerKg = 1000 / dose;
    const profitPerCup = espressoSell - espressoCost;
    const profitPerKg = profitPerCup * cupsPerKg;

    const costEspressoEl = document.getElementById('calcCostEspressoText');
    const marginEspressoEl = document.getElementById('calcMarginEspressoText');
    const costCapEl = document.getElementById('calcCostCapText');
    const profitPerKgEl = document.getElementById('calcProfitPerKgText');

    if (costEspressoEl) costEspressoEl.textContent = `${espressoCost.toFixed(2)} ₽`;
    if (marginEspressoEl) marginEspressoEl.textContent = `${espressoMargin.toFixed(1)}%`;
    if (costCapEl) costCapEl.textContent = `${capCost.toFixed(2)} ₽`;
    if (profitPerKgEl) profitPerKgEl.textContent = `${Math.round(profitPerKg).toLocaleString('ru-RU')} ₽`;
}

// Sample Pack Modal
function initSampleModal() {
    const openBtn = document.getElementById('openSamplePackModalBtn');
    const closeBtn = document.getElementById('closeSampleModalBtn');
    const modal = document.getElementById('samplePackModal');
    if (!modal) return;

    if (openBtn) openBtn.addEventListener('click', () => modal.classList.add('active'));
    if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
}

// Quick 25 kg Order Preset for Coffee Shop
function initQuickPreset() {
    const presetBtn = document.getElementById('quickPresetBtn');
    if (!presetBtn) return;

    presetBtn.addEventListener('click', () => {
        cart = {}; // Reset cart

        // Add 15kg El Classico 1000g
        updateCartQty('El Classico/Эль Классико', '1 000 г', 15);
        // Add 5kg Minas Gerais 1000g
        updateCartQty('Бразилия Минас Жерайс', '1 000 г', 5);
        // Add 5kg Filter Guatemala 1000g
        updateCartQty('Гватемала Финка Сан Антонио', '1 000 г', 5);

        renderCart();
        alert('⚡ Типовой заказ кофейни (25 кг) успешно добавлен в корзину!\nПрогресс-бар заполнен, оптовая скидка -30% рассчитана.');
    });
}

// Initialize extra B2B features on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initCalcModal();
    initTheme();
});

// Atmospheric Dark Steam Background (Вариант 5)
function toggleAtmosphericTheme() {
    const isDark = document.body.classList.toggle('theme-dark-steam');
    localStorage.setItem('roastcoast_theme', isDark ? 'dark-steam' : 'light');
    updateThemeBtn(isDark);
}

function updateThemeBtn(isDark) {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.innerHTML = isDark 
            ? '<span class="theme-icon">☕</span><span>Пар: Вкл</span>' 
            : '<span class="theme-icon">☀️</span><span>Светлая</span>';
    }
}

function initTheme() {
    const saved = localStorage.getItem('roastcoast_theme');
    // Default to dark-steam as requested
    const isDark = saved !== 'light';
    if (isDark) {
        document.body.classList.add('theme-dark-steam');
    } else {
        document.body.classList.remove('theme-dark-steam');
    }
    updateThemeBtn(isDark);
}

