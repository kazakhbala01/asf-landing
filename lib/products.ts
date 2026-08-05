export type Dilution = {
  method: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  nameRu?: string;
  category: "pink" | "activefoam" | "autogleam" | "interior" | "care";
  description: string;
  volumes: string[];
  dilutions: Dilution[];
  /** canister accent color (brand palette only) */
  accent: string;
  bestseller?: boolean;
};

const PINK = "#d6067d";
const AMBER = "#ffb902";
const VIOLET = "#6d28d9";
const DARK = "#232323";

// Сегменты линейки — от премиума к базе, плюс салон и уход отдельно
export const categories: {
  id: Product["category"];
  title: string;
  tagline: string;
  accent: string;
}[] = [
  {
    id: "pink",
    title: "ASF Pink",
    tagline: "Премиальная линейка — фирменная розовая активная пена",
    accent: PINK,
  },
  {
    id: "activefoam",
    title: "Active Foam",
    tagline: "Средний сегмент — сильные концентраты, работают в жёсткой воде",
    accent: AMBER,
  },
  {
    id: "autogleam",
    title: "AutoGleam",
    tagline: "Базовая линейка — рабочая химия на каждый день",
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
    tagline: "Уход за экстерьером — шины и моторный отсек",
    accent: AMBER,
  },
];

/** цветовая маркировка линеек: розовый — Pink, янтарный — Active Foam, фиолетовый — AutoGleam */
export const lineColors = { PINK, AMBER, VIOLET, DARK };

// Данные из каталога ASF (Каталог.pdf). Описания — дословно из каталога.
export const products: Product[] = [
  {
    id: "pink-active",
    name: "ASF Pink Active Foam",
    category: "pink",
    description:
      "Профессиональное высококонцентрированное средство для бесконтактной мойки любого автотранспорта. Содержит антикоррозийные добавки для защиты ЛКП. Образует плотную активную пену насыщенного розового цвета.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [{ method: "Пеногенератор", value: "1:6 – 1:9" }],
    accent: PINK,
    bestseller: true,
  },
  {
    id: "pink-soft",
    name: "ASF Pink Soft Active Foam",
    category: "pink",
    description:
      "Профессиональное высококонцентрированное средство для бесконтактной мойки любого автотранспорта. Образует густую, устойчивую пену. Удаляет все виды загрязнений. Имеет насыщенный розовый цвет.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [{ method: "Пенокомплект", value: "1:6 – 1:9" }],
    accent: PINK,
  },
  {
    id: "pink-force",
    name: "ASF Pink Force Active Foam",
    category: "pink",
    description:
      "Обеспечивает качественную и бережную мойку. Безопасен для ЛКП. Идеально подходит для мойки легковых и грузовых автомобилей. Обладает глубоким розовым цветом.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [{ method: "Дозатрон", value: "1–2 %" }],
    accent: PINK,
    bestseller: true,
  },
  {
    id: "storm",
    name: "Active Foam Storm",
    category: "activefoam",
    description:
      "Высокоэффективный профессиональный автошампунь, разработанный для работы с жёсткой водой. Образует густую, устойчивую активную пену, эффективно размягчает и удаляет любые виды загрязнений.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [
      { method: "Пенокомплект", value: "1:6 – 1:12" },
      { method: "Пеногенератор", value: "1:60 – 1:120" },
      { method: "Дозатрон", value: "0,6–1,2 %" },
    ],
    accent: AMBER,
    bestseller: true,
  },
  {
    id: "strong",
    name: "Active Foam Strong",
    category: "activefoam",
    description:
      "Высококонцентрированное сильнодействующее средство с отличным пенообразованием, предназначенное для бесконтактной мойки. Благодаря сбалансированной формуле обеспечивает экономичное разведение с водой, без потери моющих качеств.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [
      { method: "Пенокомплект", value: "1:10 – 1:20" },
      { method: "Пеногенератор", value: "1:100 – 1:200" },
      { method: "Дозатрон", value: "1–2 %" },
    ],
    accent: AMBER,
  },
  {
    id: "autogleam-prime",
    name: "AutoGleam Prime",
    category: "autogleam",
    description:
      "Профессиональное высококонцентрированное средство для бесконтактной мойки любого автотранспорта. Содержит антикоррозийные добавки. Подходит для мойки как легковых, так и грузовых автомобилей. Максимально эффективно показывает себя в жёсткой воде.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [
      { method: "Пенокомплект", value: "1:6 – 1:9" },
      { method: "Пеногенератор", value: "1:70 – 1:110" },
      { method: "Дозатрон", value: "1–2 %" },
    ],
    accent: VIOLET,
  },
  {
    id: "autogleam-ultra",
    name: "AutoGleam Ultra",
    category: "autogleam",
    description:
      "Обеспечивает качественную и бережную мойку. Содержит активные компоненты, предохраняющие кузов от воздействия дорожных реагентов в зимнее время.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [
      { method: "Пенокомплект", value: "1:5 – 1:10" },
      { method: "Пеногенератор", value: "1:50 – 1:110" },
      { method: "Дозатрон", value: "1,5–2 %" },
    ],
    accent: VIOLET,
  },
  {
    id: "autogleam-dozatron",
    name: "AutoGleam Dozatron",
    category: "autogleam",
    description:
      "Профессиональное высококонцентрированное средство, разработанное специально для использования в системах дозирования. Эффективно удаляет самые сложные загрязнения, используя даже неподготовленную воду. Имеет умеренное пенообразование.",
    volumes: ["1 л", "5 кг", "20 кг"],
    dilutions: [
      { method: "Пенокомплект", value: "1:5 – 1:7" },
      { method: "Пеногенератор", value: "1:80 – 1:120" },
      { method: "Дозатрон", value: "1–2 %" },
    ],
    accent: VIOLET,
  },
  {
    id: "polyrole-gloss",
    name: "Polyrole Shine Gloss",
    category: "interior",
    description:
      "Полироль для пластика салона. Препятствует оседанию пыли. Не оставляет жирных следов. Придаёт глянцевый блеск.",
    volumes: ["1 л", "5 кг"],
    dilutions: [{ method: "Готов к применению", value: "—" }],
    accent: AMBER,
  },
  {
    id: "polyrole-matte",
    name: "Polyrole Shine Matte",
    category: "interior",
    description:
      "Полироль для пластика салона. Препятствует оседанию пыли. Не оставляет жирных следов. Придаёт матовый эффект.",
    volumes: ["1 л", "5 кг"],
    dilutions: [{ method: "Готов к применению", value: "—" }],
    accent: VIOLET,
  },
  {
    id: "black-tire",
    name: "Black Tire",
    nameRu: "Чернитель шин",
    category: "care",
    description:
      "Восстанавливает первоначальный глубокий чёрный цвет, придаёт блеск, улучшает внешний вид резины.",
    volumes: ["1 л", "5 кг"],
    dilutions: [{ method: "Разведение с водой", value: "1:1 – 1:5" }],
    accent: VIOLET,
    bestseller: true,
  },
  {
    id: "motor-cleaner",
    name: "ASF Motor Cleaner",
    nameRu: "Очиститель мотора",
    category: "care",
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

export const contacts = {
  phones: ["+7 747 378 3166", "+7 771 700 2735", "+7 747 238 3166"],
  emails: ["asfropsd@gmail.com", "astanasoapfactory@gmail.com"],
  address: "г. Астана, ул. Сокпакбаева 20/2",
  instagram: "https://www.instagram.com/astanasoapfactory",
};
