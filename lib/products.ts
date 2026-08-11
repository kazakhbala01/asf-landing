export type Dilution = {
  method: string;
  value: string;
};

/** ценовой уровень: старт — рабочая база, оптима — середина, премиум — топ */
export type Tier = "start" | "optima" | "premium";

export const tiers: Record<Tier, { label: string; hint: string }> = {
  start: { label: "Старт", hint: "Рабочая химия на каждый день" },
  optima: { label: "Оптима", hint: "Баланс цены и результата" },
  premium: { label: "Премиум", hint: "Максимальный результат" },
};

export type Product = {
  id: string;
  name: string;
  nameRu?: string;
  category: "colored" | "classic" | "allseason" | "interior" | "care";
  tier: Tier;
  /** короткая суть для карточки в каталоге */
  short: string;
  /** полное описание — в модальном окне */
  description: string;
  volumes: string[];
  /** пустой массив — норму подбирает технолог (нет данных в каталоге) */
  dilutions: Dilution[];
  /** реальное фото продукта в public/products; без него рисуется SVG-канистра */
  image?: string;
  /** canister accent color (brand palette only) */
  accent: string;
  bestseller?: boolean;
};

const PINK = "#d6067d";
const AMBER = "#ffb902";
const VIOLET = "#6d28d9";
const DARK = "#232323";

// Типы автохимии (три вида шампуней) + косметика и уход
export const categories: {
  id: Product["category"];
  title: string;
  tagline: string;
  accent: string;
}[] = [
  {
    id: "colored",
    title: "Цветная автохимия",
    tagline:
      "Цветная профессиональная автохимия — идеально подходит как для классических автомоек, так и для моек самообслуживания: благодаря универсальности работает с любыми видами оборудования. Плотная пена обладает насыщенным розовым цветом и справляется со всеми видами загрязнений.",
    accent: PINK,
  },
  {
    id: "classic",
    title: "Для классических моек",
    tagline:
      "Профессиональная автохимия для классических автомоек. Идеально подходит для летнего сезона, справляется с большинством видов автозагрязнений. Имеет в составе специальные присадки для защиты ЛКП авто.",
    accent: AMBER,
  },
  {
    id: "allseason",
    title: "Всесезонная автохимия",
    tagline:
      "Профессиональная всесезонная автохимия — удаляет все виды загрязнений, подходит для работы с любой водой. Содержит специальные присадки для защиты ЛКП авто. Обладает антистатическими свойствами.",
    accent: VIOLET,
  },
  {
    id: "interior",
    title: "ASF Interior",
    tagline: "Косметика для салона",
    accent: DARK,
  },
  {
    id: "care",
    title: "ASF Care",
    tagline: "Уход за экстерьером — шины, кузов, моторный отсек",
    accent: AMBER,
  },
];

/** Две витрины каталога: пена и уход. featured — что показываем в ряду */
export const groups: {
  id: "foam" | "care";
  title: string;
  tagline: string;
  categories: Product["category"][];
  featured: string[];
}[] = [
  {
    id: "foam",
    title: "Автошампуни",
    tagline: "Активная пена для бесконтактной мойки — три типа под разные задачи",
    categories: ["colored", "classic", "allseason"],
    featured: ["pink-active", "storm", "autogleam-prime"],
  },
  {
    id: "care",
    title: "Косметика и уход",
    tagline: "Салон, шины и моторный отсек",
    categories: ["interior", "care"],
    featured: ["polyrole-gloss", "black-tire", "hydro-shield"],
  },
];

/** цветовая маркировка типов: розовый — цветная, янтарный — для классических моек, фиолетовый — всесезонная */
export const lineColors = { PINK, AMBER, VIOLET, DARK };

// Данные из каталога ASF (Каталог.pdf). Описания — дословно из каталога.
export const products: Product[] = [
  {
    id: "pink-active",
    name: "ASF Pink Active Foam",
    category: "colored",
    tier: "premium",
    short: "Плотная розовая пена с защитой ЛКП",
    description:
      "Профессиональное высококонцентрированное средство для бесконтактной мойки любого автотранспорта. Содержит антикоррозийные добавки для защиты ЛКП. Образует плотную активную пену насыщенного розового цвета.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [{ method: "Пеногенератор", value: "1:6 – 1:9" }],
    image: "/products/pink-active.jpg",
    accent: PINK,
    bestseller: true,
  },
  {
    id: "pink-soft",
    name: "ASF Pink Soft Active Foam",
    category: "colored",
    tier: "premium",
    short: "Густая устойчивая пена, все виды загрязнений",
    description:
      "Профессиональное высококонцентрированное средство для бесконтактной мойки любого автотранспорта. Образует густую, устойчивую пену. Удаляет все виды загрязнений. Имеет насыщенный розовый цвет.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [{ method: "Пенокомплект", value: "1:6 – 1:9" }],
    image: "/products/pink-soft.jpg",
    accent: PINK,
  },
  {
    id: "pink-force",
    name: "ASF Pink Force Active Foam",
    category: "colored",
    tier: "premium",
    short: "Для легковых и грузовых, безопасен для ЛКП",
    description:
      "Обеспечивает качественную и бережную мойку. Безопасен для ЛКП. Идеально подходит для мойки легковых и грузовых автомобилей. Обладает глубоким розовым цветом.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [{ method: "Дозатрон", value: "1–2 %" }],
    image: "/products/pink-force.jpg",
    accent: PINK,
    bestseller: true,
  },
  {
    id: "storm",
    name: "Active Foam Storm",
    category: "allseason",
    tier: "optima",
    short: "Разработан под жёсткую воду",
    description:
      "Высокоэффективный профессиональный автошампунь, разработанный для работы с жёсткой водой. Образует густую, устойчивую активную пену, эффективно размягчает и удаляет любые виды загрязнений.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [
      { method: "Пенокомплект", value: "1:6 – 1:12" },
      { method: "Пеногенератор", value: "1:60 – 1:120" },
      { method: "Дозатрон", value: "0,6–1,2 %" },
    ],
    image: "/products/storm.jpg",
    accent: VIOLET,
    bestseller: true,
  },
  {
    id: "strong",
    name: "Active Foam Strong",
    category: "classic",
    tier: "optima",
    short: "Самый экономичный — разведение до 1:200",
    description:
      "Высококонцентрированное сильнодействующее средство с отличным пенообразованием, предназначенное для бесконтактной мойки. Благодаря сбалансированной формуле обеспечивает экономичное разведение с водой, без потери моющих качеств.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [
      { method: "Пенокомплект", value: "1:10 – 1:20" },
      { method: "Пеногенератор", value: "1:100 – 1:200" },
      { method: "Дозатрон", value: "1–2 %" },
    ],
    image: "/products/strong.jpg",
    accent: AMBER,
  },
  {
    id: "autogleam-prime",
    name: "AutoGleam Prime",
    category: "classic",
    tier: "start",
    short: "Универсальный — легковые и грузовые",
    description:
      "Профессиональное высококонцентрированное средство для бесконтактной мойки любого автотранспорта. Содержит антикоррозийные добавки. Подходит для мойки как легковых, так и грузовых автомобилей. Максимально эффективно показывает себя в жёсткой воде.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [
      { method: "Пенокомплект", value: "1:6 – 1:9" },
      { method: "Пеногенератор", value: "1:70 – 1:110" },
      { method: "Дозатрон", value: "1–2 %" },
    ],
    image: "/products/autogleam-prime.jpg",
    accent: AMBER,
  },
  {
    id: "autogleam-ultra",
    name: "AutoGleam Ultra",
    category: "classic",
    tier: "start",
    short: "Защита кузова от зимних реагентов",
    description:
      "Обеспечивает качественную и бережную мойку. Содержит активные компоненты, предохраняющие кузов от воздействия дорожных реагентов в зимнее время.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [
      { method: "Пенокомплект", value: "1:5 – 1:10" },
      { method: "Пеногенератор", value: "1:50 – 1:110" },
      { method: "Дозатрон", value: "1,5–2 %" },
    ],
    image: "/products/autogleam-ultra.jpg",
    accent: AMBER,
  },
  {
    id: "autogleam-dozatron",
    name: "AutoGleam Dozatron",
    category: "allseason",
    tier: "start",
    short: "Для систем дозирования, работает на любой воде",
    description:
      "Профессиональное высококонцентрированное средство, разработанное специально для использования в системах дозирования. Эффективно удаляет самые сложные загрязнения, используя даже неподготовленную воду. Имеет умеренное пенообразование.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [
      { method: "Пенокомплект", value: "1:5 – 1:7" },
      { method: "Пеногенератор", value: "1:80 – 1:120" },
      { method: "Дозатрон", value: "1–2 %" },
    ],
    image: "/products/autogleam-dozatron.jpg",
    accent: VIOLET,
  },
  {
    id: "autogleam-premium",
    name: "AutoGleam Premium",
    category: "allseason",
    tier: "optima",
    short: "Топовый AutoGleam — быстрое смывание и сушка",
    description:
      "Профессиональный концентрат для бесконтактной мойки. Бережен к лакокрасочному покрытию, содержит ингибитор коррозии, обеспечивает эффективное очищение, быстрое смывание и сушку. PH 12.",
    volumes: ["1 кг", "5 кг", "20 кг"],
    // норм разведения в каталоге нет — подбирает технолог
    dilutions: [],
    image: "/products/autogleam-premium.jpg",
    accent: VIOLET,
  },
  {
    id: "polyrole-gloss",
    name: "Polyrole Shine Gloss",
    nameRu: "Глянцевый полироль",
    category: "interior",
    tier: "optima",
    short: "Глянцевый блеск пластика салона",
    description:
      "Полироль для пластика салона. Препятствует оседанию пыли. Не оставляет жирных следов. Придаёт глянцевый блеск.",
    volumes: ["0,5 л", "1 л", "5 кг"],
    dilutions: [{ method: "Готов к применению", value: "—" }],
    image: "/products/polyrole-gloss.jpg",
    accent: AMBER,
    bestseller: true,
  },
  {
    id: "polyrole-matte",
    name: "Polyrole Shine Matte",
    nameRu: "Матовый полироль",
    category: "interior",
    tier: "optima",
    short: "Матовый эффект без жирных следов",
    description:
      "Полироль для пластика салона. Препятствует оседанию пыли. Не оставляет жирных следов. Придаёт матовый эффект.",
    volumes: ["0,5 л", "1 л", "5 кг"],
    dilutions: [{ method: "Готов к применению", value: "—" }],
    image: "/products/polyrole-matte.jpg",
    accent: VIOLET,
  },
  {
    id: "black-tire",
    name: "Black Tire",
    nameRu: "Чернитель шин",
    category: "care",
    tier: "optima",
    short: "Глубокий чёрный цвет и блеск резины",
    description:
      "Восстанавливает первоначальный глубокий чёрный цвет, придаёт блеск, улучшает внешний вид резины. Защищает резину от растрескивания.",
    volumes: ["0,5 л", "1 л", "5 кг"],
    dilutions: [{ method: "Разведение с водой", value: "1:1 – 1:5" }],
    image: "/products/black-tire.jpg",
    accent: VIOLET,
    bestseller: true,
  },
  {
    id: "hydro-shield",
    name: "ASF Hydro Shield",
    nameRu: "Воск-полироль",
    category: "care",
    tier: "premium",
    short: "Блеск кузова и защита после мойки",
    description:
      "Средство для финишной обработки кузова: освежает внешний вид, придаёт блеск, полирует и защищает от внешних воздействий и окружающей среды.",
    volumes: ["1 л", "5 кг"],
    // норм разведения в каталоге нет — подбирает технолог
    dilutions: [],
    image: "/products/hydro-shield.jpg",
    accent: PINK,
    bestseller: true,
  },
  {
    id: "motor-cleaner",
    name: "ASF Motor Cleaner",
    nameRu: "Очиститель мотора",
    category: "care",
    tier: "optima",
    short: "Отмывает масляные загрязнения двигателя",
    description:
      "Профессиональное средство для очистки двигателя и моторного отсека от масляных и эксплуатационных загрязнений. Обеспечивает качественную и бережную очистку.",
    volumes: ["1 л", "5 кг"],
    dilutions: [
      { method: "Пенокомплект", value: "1:5 – 1:10" },
      { method: "Пеногенератор", value: "1:50 – 1:110" },
      { method: "Дозатрон", value: "1,5–2 %" },
    ],
    accent: AMBER,
  },
];

/** wa.me-ссылка с заготовленным сообщением */
export const waLink = (text: string) =>
  `https://wa.me/77473783166?text=${encodeURIComponent(text)}`;

export const contacts = {
  phones: ["+7 747 378 3166", "+7 771 700 2735", "+7 747 238 3166"],
  emails: ["asfropsd@gmail.com", "astanasoapfactory@gmail.com"],
  address: "г. Астана, ул. Сокпакбаева 20/2",
  addressLink: "https://2gis.kz/astana/geo/9570784863339802/71.382937,51.173911",
  whatsapp: "https://wa.me/77473783166",
  telegram: "https://t.me/Astanasoapfactory",
  instagram: "https://www.instagram.com/astanasoapfactory",
  marketplaces: [
    { name: "Kaspi.kz — официальный магазин", href: "https://l.kaspi.kz/shop/8utqPLhNxyXVB3M" },
    { name: "TEEZ.kz", href: "https://teez.kz/shop/11105" },
  ],
};
