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
        title: 'КАКАО И ПРОЧЕЕ',
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
            if (grid) {
                grid.style.display = 'grid';
                document.querySelectorAll('input.qty-input[data-card-key]').forEach(input => {
                    const key = input.getAttribute('data-card-key');
                    input.value = cart[key] ? cart[key].qty : 0;
                });
            }
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

    // Invoice Modal & B2B Checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    const mobileCheckoutBtn = document.getElementById('mobileCheckoutBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const printInvoiceBtn = document.getElementById('printInvoiceBtn');
    const buyerInnSearchBtn = document.getElementById('buyerInnSearchBtn');
    const buyerInnInput = document.getElementById('buyerInnInput');

    if (checkoutBtn) checkoutBtn.addEventListener('click', openInvoiceModal);
    if (mobileCheckoutBtn) mobileCheckoutBtn.addEventListener('click', openInvoiceModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (printInvoiceBtn) printInvoiceBtn.addEventListener('click', () => window.print());
    if (buyerInnSearchBtn) buyerInnSearchBtn.addEventListener('click', () => handleInnSearch());
    if (buyerInnInput) {
        buyerInnInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleInnSearch();
            }
        });
    }
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

// By default, ALL category sections are closed/collapsed.
// Only categories explicitly opened by the user are tracked in expandedCategories.
const expandedCategories = new Set();

function toggleCategorySection(cardId) {
    const card = document.getElementById(cardId);
    if (!card) return;
    if (expandedCategories.has(cardId)) {
        expandedCategories.delete(cardId);
        card.classList.add('collapsed');
    } else {
        expandedCategories.add(cardId);
        card.classList.remove('collapsed');
    }
}

function updateCardControlDOM(title, opt, qty) {
    const itemKey = `${title}-${opt}`;
    const inputs = document.querySelectorAll(`input.qty-input[data-card-key="${CSS.escape(itemKey)}"]`);
    inputs.forEach(input => {
        input.value = qty;
    });
}

function renderCatalog() {
    const products = getFilteredProducts();
    
    // 1. Render Grid Cards (Alternative Cards View)
    const gridEl = document.getElementById('productGrid');
    if (gridEl) {
        gridEl.innerHTML = '';
        products.forEach(p => {
            const isOther = (p.category === 'other' || p.badge === 'Какао' || p.badge === 'Уход');
            const rawPrice = parsePriceNum(p.price);

            let retail1000 = 0;
            let b2b1000 = 0;
            let retail200 = 0;
            let b2b200 = 0;
            let optKey1000 = '1 000 г';
            let optLabel1000 = '1 000 г';

            if (isOther) {
                retail1000 = rawPrice;
                b2b1000 = Math.round(retail1000 * (1 - B2B_DISCOUNT_PERCENT / 100));
                if (p.title.includes('молочных систем')) {
                    optKey1000 = '1 000 мл';
                    optLabel1000 = '1 000 мл';
                }
            } else {
                retail200 = rawPrice;
                b2b200 = Math.round(retail200 * (1 - B2B_DISCOUNT_PERCENT / 100));
                retail1000 = Math.round(retail200 * 3.4);
                b2b1000 = Math.round(retail1000 * (1 - B2B_DISCOUNT_PERCENT / 100));
            }

            const imgUrl = (p.images && p.images.length > 0) ? p.images[0] : 'https://roastcoast.ru/image/logo.svg';
            const escapedTitle = p.title.replace(/'/g, "\\'");

            const key1000 = `${p.title}-${optKey1000}`;
            const qty1000 = cart[key1000] ? cart[key1000].qty : 0;
            const key200 = `${p.title}-200 г`;
            const qty200 = cart[key200] ? cart[key200].qty : 0;

            let optionsHtml = `
                <div class="option-row">
                    <span class="option-name">${optLabel1000}</span>
                    <div class="qty-control">
                        <button type="button" class="qty-btn qty-btn-minus" onclick="updateQty('${escapedTitle}', '${optKey1000}', ${retail1000}, ${b2b1000}, -1, this)">${SVG_MINUS}</button>
                        <input type="text" class="qty-input" data-card-key="${escapedTitle}-${optKey1000}" value="${qty1000}" readonly>
                        <button type="button" class="qty-btn qty-btn-plus" onclick="updateQty('${escapedTitle}', '${optKey1000}', ${retail1000}, ${b2b1000}, 1, this)">${SVG_PLUS}</button>
                    </div>
                </div>
            `;

            if (!isOther) {
                optionsHtml += `
                    <div class="option-row">
                        <span class="option-name">200 г</span>
                        <div class="qty-control">
                            <button type="button" class="qty-btn qty-btn-minus" onclick="updateQty('${escapedTitle}', '200 г', ${retail200}, ${b2b200}, -1, this)">${SVG_MINUS}</button>
                            <input type="text" class="qty-input" data-card-key="${escapedTitle}-200 г" value="${qty200}" readonly>
                            <button type="button" class="qty-btn qty-btn-plus" onclick="updateQty('${escapedTitle}', '200 г', ${retail200}, ${b2b200}, 1, this)">${SVG_PLUS}</button>
                        </div>
                    </div>
                `;
            }

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
                                <span class="retail-price">${retail1000 > 0 ? retail1000.toLocaleString('ru-RU') + ' ₽' : 'По запросу'}</span>
                                <span class="b2b-price">${b2b1000 > 0 ? b2b1000.toLocaleString('ru-RU') + ' ₽' : 'Опт'}</span>
                            </div>
                            <span class="b2b-discount-tag">-30% Опт</span>
                        </div>

                        <div class="options-matrix">
                            ${optionsHtml}
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
            const isExpanded = expandedCategories.has(`cat-card-${cat.id}`);
            sectionCard.className = 'category-section-card' + (isExpanded ? '' : ' collapsed');
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
                const isOther = (p.category === 'other' || p.badge === 'Какао' || p.badge === 'Уход');
                const rawPrice = parsePriceNum(p.price);

                let retail1000 = 0;
                let b2b1000 = 0;
                let retail200 = 0;
                let b2b200 = 0;
                let grind1000 = 'В зернах';
                let weightLabel1000 = '1 кг';
                let optKey1000 = '1 000 г';

                if (isOther) {
                    retail1000 = rawPrice;
                    b2b1000 = Math.round(retail1000 * (1 - B2B_DISCOUNT_PERCENT / 100));
                    
                    if (p.title.includes('молочных систем')) {
                        grind1000 = 'Жидкость';
                        weightLabel1000 = '1 л';
                        optKey1000 = '1 000 мл';
                    } else {
                        grind1000 = 'Порошок';
                        weightLabel1000 = '1 кг';
                        optKey1000 = '1 000 г';
                    }
                } else {
                    retail200 = rawPrice;
                    b2b200 = Math.round(retail200 * (1 - B2B_DISCOUNT_PERCENT / 100));
                    retail1000 = Math.round(retail200 * 3.4);
                    b2b1000 = Math.round(retail1000 * (1 - B2B_DISCOUNT_PERCENT / 100));
                }

                const imgUrl = (p.images && p.images.length > 0) ? p.images[0] : 'https://roastcoast.ru/image/logo.svg';
                const escapedTitle = p.title.replace(/'/g, "\\'");

                const key1000 = `${p.title}-${optKey1000}`;
                const qty1000 = cart[key1000] ? cart[key1000].qty : 0;
                const key200 = `${p.title}-200 г`;
                const qty200 = cart[key200] ? cart[key200].qty : 0;

                const isHot = p.title.includes('Classico') || p.title.includes('Sweet Hills') || p.title.includes('Минас');
                const isNew = p.title.includes('Кения') || p.title.includes('Антонио') || p.title.includes('Сиган');

                let badgeHtml = '';
                if (isHot) {
                    badgeHtml = '<span class="item-badge-pct" title="Хит продаж">%</span>';
                } else if (isNew) {
                    badgeHtml = '<span class="item-badge-new" title="Новинка">NEW</span>';
                }

                const btn1000 = qty1000 === 0 
                    ? `<button type="button" class="opt-btn-add" onclick="updateQty('${escapedTitle}', '${optKey1000}', ${retail1000}, ${b2b1000}, 1, this)">+</button>`
                    : `<div class="opt-qty-control">
                         <button type="button" class="opt-qty-btn" onclick="updateQty('${escapedTitle}', '${optKey1000}', ${retail1000}, ${b2b1000}, -1, this)">–</button>
                         <span class="opt-qty-num">${qty1000}</span>
                         <button type="button" class="opt-qty-btn" onclick="updateQty('${escapedTitle}', '${optKey1000}', ${retail1000}, ${b2b1000}, 1, this)">+</button>
                       </div>`;

                const row1000 = `
                    <div class="prod-opt-row">
                        <span class="opt-weight">${weightLabel1000}</span>
                        <span class="opt-grind">${grind1000}</span>
                        <span class="opt-price">${b2b1000.toLocaleString('ru-RU')} ₽</span>
                        <div class="opt-btn-wrap">
                            ${btn1000}
                        </div>
                    </div>
                `;

                let row200 = '';
                if (!isOther) {
                    const btn200 = qty200 === 0 
                        ? `<button type="button" class="opt-btn-add" onclick="updateQty('${escapedTitle}', '200 г', ${retail200}, ${b2b200}, 1, this)">+</button>`
                        : `<div class="opt-qty-control">
                             <button type="button" class="opt-qty-btn" onclick="updateQty('${escapedTitle}', '200 г', ${retail200}, ${b2b200}, -1, this)">–</button>
                             <span class="opt-qty-num">${qty200}</span>
                             <button type="button" class="opt-qty-btn" onclick="updateQty('${escapedTitle}', '200 г', ${retail200}, ${b2b200}, 1, this)">+</button>
                           </div>`;

                    row200 = `
                        <div class="prod-opt-row">
                            <span class="opt-weight">200 г</span>
                            <span class="opt-grind">В зернах</span>
                            <span class="opt-price">${b2b200.toLocaleString('ru-RU')} ₽</span>
                            <div class="opt-btn-wrap">
                                ${btn200}
                            </div>
                        </div>
                    `;
                }

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
    const is1000 = opt.includes('1 000') || opt.includes('1000') || opt.includes('1k') || opt.includes('1 к') || opt.includes('1кг') || opt.includes('1 л') || opt.includes('1л') || opt.includes('мл');
    for (const item of listItems) {
        const titleEl = item.querySelector('.prod-item-title');
        if (titleEl && titleEl.textContent.trim().toLowerCase() === title.trim().toLowerCase()) {
            const rows = item.querySelectorAll('.prod-opt-row');
            for (const row of rows) {
                const weightEl = row.querySelector('.opt-weight');
                if (weightEl) {
                    const txt = weightEl.textContent.trim();
                    if ((is1000 && (txt.includes('1') || txt.includes('кг') || txt.includes('л'))) || (!is1000 && txt.includes('200'))) {
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
    const is1kg = opt.includes('1 000') || opt.includes('1000') || opt.includes('1k') || opt.includes('1 к') || opt.includes('1кг') || opt.includes('1 л') || opt.includes('1л') || opt.includes('мл');
    
    let weightKg = is1kg ? 1.0 : 0.2;

    const prevQty = cart[itemKey] ? cart[itemKey].qty : 0;

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

    if (prevQty === 0 && delta > 0) {
        // "при первом добавлении чтобы сразу было 10кг"
        cart[itemKey].qty = 10;
    } else {
        cart[itemKey].qty += delta;
    }

    if (cart[itemKey].qty <= 0) {
        delete cart[itemKey];
    }

    const currentQty = cart[itemKey] ? cart[itemKey].qty : 0;
    
    // 1. Update List view DOM
    updateOptControlDOM(title, opt, retailPrice, b2bPrice, currentQty, triggerBtn);
    
    // 2. Update Card view DOM (input counter)
    updateCardControlDOM(title, opt, currentQty);
    
    // 3. Update Cart sidebar and mobile bottom bar
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

// ==========================================================================
// B2B INVOICE & CHECKOUT WORKFLOW (INN LOOKUP, GOST QR, ERP PIPELINE)
// ==========================================================================

const B2B_COMPANY_PRESETS = {
    '7703401545': {
        name: 'Алюминиевая Ассоциация (Ассоциация производителей, поставщиков и потребителей алюминия)',
        inn: '7703401545',
        kpp: '770301001',
        ogrn: '1157700018222',
        address: '123100, г. Москва, наб. Краснопресненская, д. 8, эт. 9, ком. 904',
        delivery: 'СДЭК До двери / г. Москва, ул. 1905 года, д. 10',
        edo: '1С-ЭДО / Диадок (ID: 2BM-7703401545)'
    },
    '7801234567': {
        name: 'ООО «Кофейня на Невском»',
        inn: '7801234567',
        kpp: '780101001',
        ogrn: '1197847012345',
        address: 'г. Санкт-Петербург, Невский пр-кт, д. 24, лит. А',
        delivery: 'СДЭК До двери / ПВЗ Невский 28',
        edo: '1С-ЭДО / Диадок (УПД день в день)'
    },
    '7724918230': {
        name: 'ООО «Кофейная Компания»',
        inn: '7724918230',
        kpp: '772401001',
        ogrn: '1157746819230',
        address: 'г. Москва, ул. Новый Арбат, д. 12',
        delivery: 'СДЭК До двери / ПВЗ Новый Арбат 16',
        edo: 'СБИС (Тензор) (ID: 2BE-7724918230)'
    },
    '7704229718': {
        name: 'ООО «Кофемания»',
        inn: '7704229718',
        kpp: '770401001',
        ogrn: '1027739188040',
        address: 'г. Москва, ул. Большая Никитская, д. 13/6',
        delivery: 'СДЭК До двери / ПВЗ ул. Большая Никитская, 20',
        edo: '1С-ЭДО (Калуга Астрал)'
    },
    '781298451000': {
        name: 'ИП Смирнов Александр Васильевич (Espresso Bar)',
        inn: '781298451000',
        kpp: '— (ИП)',
        ogrn: 'ОГРНИП 321784700098765',
        address: 'г. Севастополь, ул. Большая Морская, д. 15',
        delivery: 'СДЭК Самовывоз / ПВЗ Большая Морская 21',
        edo: '1С-ЭДО (Калуга Астрал)'
    }
};

let currentBuyerCompany = B2B_COMPANY_PRESETS['7801234567'];
let currentInvoiceNumber = 'RC-94812';
let currentInvoiceSum = 0;
let qrCodeInstance = null;

function applyPresetCompany(inn) {
    const input = document.getElementById('buyerInnInput');
    if (input) input.value = inn;
    handleInnSearch(inn);
}
window.applyPresetCompany = applyPresetCompany;

function handleInnSearch(forcedInn) {
    const input = document.getElementById('buyerInnInput');
    const inn = (forcedInn || (input ? input.value : '')).trim();
    if (!inn) return;

    let company = B2B_COMPANY_PRESETS[inn];
    if (!company) {
        // Dynamic fallback generator for any entered INN
        company = {
            name: (inn.length === 12) ? `ИП Предприниматель (ИНН ${inn})` : `ООО «Кофейный Партнёр» (ИНН ${inn})`,
            inn: inn,
            kpp: (inn.length === 12) ? '— (ИП)' : '770101001',
            ogrn: 'ОГРН 120' + inn.slice(0, 8),
            address: 'г. Россия, юридический адрес организации контрагента',
            delivery: 'СДЭК До терминала / До двери',
            edo: '1С-ЭДО (Автоматическая выгрузка УПД)'
        };
    }

    currentBuyerCompany = company;
    updateBuyerCompanyCard(company);
    updateB2BQrCode();
}
window.handleInnSearch = handleInnSearch;

function updateBuyerCompanyCard(company) {
    const nameEl = document.getElementById('buyerCardName');
    const detailsEl = document.getElementById('buyerCardDetails');
    const addrEl = document.getElementById('buyerCardAddress');
    const edoEl = document.getElementById('buyerCardEdo');
    const delivEl = document.getElementById('buyerCardDelivery');

    if (nameEl) nameEl.textContent = company.name;
    if (detailsEl) detailsEl.innerHTML = `ИНН: <strong>${company.inn}</strong> &bull; КПП: <strong>${company.kpp}</strong> &bull; ОГРН: <strong>${company.ogrn}</strong>`;
    if (addrEl) addrEl.textContent = `Юр. адрес: ${company.address}`;
    if (edoEl) edoEl.textContent = `ЭДО: ${company.edo}`;
    if (delivEl) delivEl.innerHTML = `Доставка: <strong>${company.delivery}</strong>`;
}

function switchPaymentTab(tabName) {
    const tabBtnQr = document.getElementById('tabBtnQr');
    const tabBtnPdf = document.getElementById('tabBtnPdf');
    const tabContentQr = document.getElementById('tabContentQr');
    const tabContentPdf = document.getElementById('tabContentPdf');

    if (tabName === 'qr') {
        if (tabBtnQr) tabBtnQr.classList.add('active');
        if (tabBtnPdf) tabBtnPdf.classList.remove('active');
        if (tabContentQr) tabContentQr.classList.add('active');
        if (tabContentPdf) tabContentPdf.classList.remove('active');
        updateB2BQrCode();
    } else {
        if (tabBtnQr) tabBtnQr.classList.remove('active');
        if (tabBtnPdf) tabBtnPdf.classList.add('active');
        if (tabContentQr) tabContentQr.classList.remove('active');
        if (tabContentPdf) tabContentPdf.classList.add('active');
    }
}
window.switchPaymentTab = switchPaymentTab;

function updateB2BQrCode() {
    const container = document.getElementById('b2bQrCodeContainer');
    if (!container) return;

    container.innerHTML = '';

    // Standard Russian Banking QR Code String (GOST R 56042-2014 / SBP B2B)
    const sumInKopecks = Math.round(currentInvoiceSum * 100);
    const buyerName = (currentBuyerCompany && currentBuyerCompany.name) ? currentBuyerCompany.name : 'Покупатель B2B';
    const purpose = `Оплата по счету ${currentInvoiceNumber} за свежеобжаренный кофе для ${buyerName} без НДС`;

    const qrData = `ST00012|Name=ООО "РОСТКОСТ"|PersonalAcc=40702810000000012345|BankName=РНКБ БАНК (ПАО)|BIC=043510607|CorrespAcc=30101810335100000607|PayeeINN=9201529124|KPP=920101001|Sum=${sumInKopecks}|Purpose=${purpose}`;

    try {
        if (typeof QRCode !== 'undefined') {
            qrCodeInstance = new QRCode(container, {
                text: qrData,
                width: 170,
                height: 170,
                colorDark: "#1f1813",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M
            });
        } else {
            container.innerHTML = `<div style="font-size:0.75rem; color:var(--color-fg-muted); text-align:center; padding:20px;">[QR-код: ${currentInvoiceNumber}]</div>`;
        }
    } catch (e) {
        console.warn('QR Code generation notice:', e);
    }
}

function simulateSuccessfulPayment() {
    const simBtn = document.getElementById('simulatePaymentBtn');
    if (simBtn) {
        simBtn.disabled = true;
        simBtn.innerHTML = '<span>Проверка банком...</span>';
    }

    setTimeout(() => {
        const mainView = document.getElementById('invoiceMainView');
        const successScreen = document.getElementById('orderSuccessScreen');
        if (mainView) mainView.style.display = 'none';
        if (successScreen) successScreen.classList.add('active');

        const successOrderNum = document.getElementById('successOrderNum');
        const successOrderSum = document.getElementById('successOrderSum');
        const successTrackNum = document.getElementById('successTrackNum');
        const successEdoDetails = document.getElementById('successEdoDetails');

        if (successOrderNum) successOrderNum.textContent = currentInvoiceNumber;
        if (successOrderSum) successOrderSum.textContent = `${currentInvoiceSum.toLocaleString('ru-RU')} ₽`;
        if (successTrackNum) successTrackNum.textContent = `RC-SDEK-${Math.floor(100000 + Math.random() * 900000)}`;
        if (successEdoDetails && currentBuyerCompany) {
            successEdoDetails.textContent = `Электронный УПД автоматически передан через ${currentBuyerCompany.edo} для ${currentBuyerCompany.name} (ИНН: ${currentBuyerCompany.inn}). Подписан КЭП RoastCoast.`;
        }

        if (simBtn) {
            simBtn.disabled = false;
            simBtn.innerHTML = '<span>Подтвердить оплату (тест)</span>';
        }
    }, 650);
}
window.simulateSuccessfulPayment = simulateSuccessfulPayment;

function simulateOrderReservation() {
    alert(`Заказ ${currentInvoiceNumber} на сумму ${currentInvoiceSum.toLocaleString('ru-RU')} ₽ успешно переведён в статус «РЕЗЕРВ (3 дня)» в МойСклад!\nСчёт сформирован. Ожидается безналичный платёж от ${currentBuyerCompany.name}.`);
}
window.simulateOrderReservation = simulateOrderReservation;

function downloadPaymentOrderTxt() {
    const sumFormatted = Number(currentInvoiceSum).toFixed(2);
    const dateFormatted = new Date().toLocaleDateString('ru-RU');
    const invoiceNum = currentInvoiceNumber || 'RC-94812';
    const numDigits = invoiceNum.replace(/\D/g, '') || '94812';
    const buyerName = (currentBuyerCompany && currentBuyerCompany.name) ? currentBuyerCompany.name : 'ООО «Кофейня на Невском»';
    const buyerInn = (currentBuyerCompany && currentBuyerCompany.inn) ? currentBuyerCompany.inn : '7801234567';
    const buyerKpp = (currentBuyerCompany && currentBuyerCompany.kpp && currentBuyerCompany.kpp !== '— (ИП)') ? currentBuyerCompany.kpp : '';

    const content = [
        '1CClientBankExchange',
        'ВерсияФормата=1.03',
        'Кодировка=Windows',
        'Отправитель=RoastCoast B2B Portal',
        `ДатаСоздания=${dateFormatted}`,
        'ВремяСоздания=12:00:00',
        `ДатаНачала=${dateFormatted}`,
        `ДатаКонца=${dateFormatted}`,
        'РасчСчет=40702810000000012345',
        'СекцияДокумент=Платежное поручение',
        `Номер=${numDigits}`,
        `Дата=${dateFormatted}`,
        `Сумма=${sumFormatted}`,
        `Плательщик=${buyerName}`,
        `ПлательщикИНН=${buyerInn}`,
        `ПлательщикКПП=${buyerKpp}`,
        'Получатель=ООО "РОСТКОСТ"',
        'ПолучательИНН=9201529124',
        'ПолучательКПП=920101001',
        'ПолучательРасчСчет=40702810000000012345',
        'ПолучательБанк1=РНКБ БАНК (ПАО)',
        'ПолучательБИК=043510607',
        'ПолучательКорсчет=30101810335100000607',
        'ВидОплаты=01',
        'Очередность=5',
        `НазначениеПлатежа=Оплата по счету ${invoiceNum} от ${dateFormatted} за свежеобжаренный кофе без НДС`,
        'КонецДокумента',
        'КонецФайла'
    ].join('\r\n');

    const blob = new Blob([content], { type: 'text/plain;charset=windows-1251' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Platizhka_${invoiceNum}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
window.downloadPaymentOrderTxt = downloadPaymentOrderTxt;

function resetAndCloseSuccessModal() {
    closeModal();
    // Clear cart and update UI
    cart = {};
    if (typeof updateCartUI === 'function') updateCartUI();
    if (typeof renderCatalog === 'function') renderCatalog();

    // Reset views for next time
    setTimeout(() => {
        const mainView = document.getElementById('invoiceMainView');
        const successScreen = document.getElementById('orderSuccessScreen');
        if (mainView) mainView.style.display = 'block';
        if (successScreen) successScreen.classList.remove('active');
    }, 300);
}
window.resetAndCloseSuccessModal = resetAndCloseSuccessModal;

function openInvoiceModal() {
    const modal = document.getElementById('invoiceModal');
    if (!modal) return;
    
    // Reset view states
    const mainView = document.getElementById('invoiceMainView');
    const successScreen = document.getElementById('orderSuccessScreen');
    if (mainView) mainView.style.display = 'block';
    if (successScreen) successScreen.classList.remove('active');

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

        currentInvoiceSum = sumB2B;
        currentInvoiceNumber = `RC-${Math.floor(10000 + Math.random() * 90000)}`;

        const dateStr = new Date().toLocaleDateString('ru-RU');
        const dateEl = document.getElementById('invoiceDate');
        const numEl = document.getElementById('invoiceNumber');
        const totalEl = document.getElementById('modalTotalSum');

        if (dateEl) dateEl.textContent = dateStr;
        if (numEl) numEl.textContent = currentInvoiceNumber;
        if (totalEl) totalEl.textContent = `${sumB2B.toLocaleString('ru-RU')} ₽`;

        // Initialize company and QR
        handleInnSearch();
        updateB2BQrCode();
    }
}

function closeModal() {
    const modal = document.getElementById('invoiceModal');
    if (modal) modal.classList.remove('active');
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
        alert('Типовой заказ кофейни (25 кг) успешно добавлен в корзину!\nПрогресс-бар заполнен, оптовая скидка -30% рассчитана.');
    });
}

// Initialize extra B2B features on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initSampleModal();
    initQuickPreset();
});

// Off-Canvas Navigation Drawer Controls
function toggleNavDrawer(forceOpen) {
    const drawer = document.getElementById('navDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (!drawer || !overlay) return;

    const isOpen = drawer.classList.contains('active');
    const shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : !isOpen;

    if (shouldOpen) {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close drawer on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        toggleNavDrawer(false);
        const modals = document.querySelectorAll('.modal-overlay.active');
        modals.forEach(m => m.classList.remove('active'));
    }
});

// Modal open helpers
function openWholesaleTermsModal() {
    const modal = document.getElementById('wholesaleTermsModal');
    if (modal) modal.classList.add('active');
}

function openDeliveryModal() {
    const modal = document.getElementById('deliveryModal');
    if (modal) modal.classList.add('active');
}

function openPrivateLabelModal() {
    const modal = document.getElementById('privateLabelModal');
    if (modal) modal.classList.add('active');
}

function openHorecaModal() {
    const modal = document.getElementById('horecaModal');
    if (modal) modal.classList.add('active');
}

function openCabinetInfo() {
    const modal = document.getElementById('cabinetModal');
    if (modal) {
        modal.classList.add('active');
    } else {
        alert('Личный кабинет оптовика: Мои заказы, Персональный прайс, Документы и реквизиты.');
    }
}

