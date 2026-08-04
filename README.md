# ASF — Astana Soap Factory Landing Page

Одностраничный сайт производителя профессиональной автохимии. Next.js 15 + Tailwind CSS 4, полностью статический.

## Запуск локально

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Деплой на Vercel

1. Залейте проект в GitHub (или используйте `vercel` CLI).
2. На [vercel.com](https://vercel.com) → **Add New Project** → импортируйте репозиторий.
3. Фреймворк определится автоматически (Next.js). Настройки менять не нужно — жмите **Deploy**.

Либо из терминала:

```bash
npx vercel
```

## Как заменить временные картинки на реальные фото

Два вида заглушек:

**Канистры продуктов** — SVG (компонент `components/Canister.tsx`):
1. Положите фото в `public/products/`, имя файла = `id` продукта из `lib/products.ts` (например, `public/products/pink-active.png`). Фон белый или прозрачный, пропорции ~3:4.
2. В `components/Products.tsx` и `components/Hero.tsx` замените `<Canister …/>` на `<Image src={/products/${product.id}.png} …/>` (импорт из `next/image`).

**Фото-слоты** (компонент `components/Photo.tsx`, серые блоки с подписью) — заменить на `<Image>` с тем же `className`:
- Hero: авто в активной пене — `components/Hero.tsx`
- Опт: отгрузка / склад / фуры — `components/Wholesale.tsx`
- Производственный цех — `components/Capacity.tsx`
- Основатель / команда + 2 малых кадра — `components/AboutCompany.tsx`

## Что заменить перед публикацией

- **Отзывы** в `components/Testimonials.tsx` — сейчас заглушки, нужны реальные.
- Таблица «Производство» в `components/Capacity.tsx` — можно добавить реальные мощности (тонны/мес и т.п.).
- Если есть сертификаты (EAC и др.) — прислать, добавим в блок «Качество».

## Где редактировать контент

| Что | Файл |
|---|---|
| Продукты, описания, нормы разведения, фасовка | `lib/products.ts` |
| Телефоны, почта, адрес, Instagram | `lib/products.ts` (объект `contacts`) |
| Цифры о компании | `components/AboutCompany.tsx` |
| Шаги «Как мы работаем» | `components/HowWeWork.tsx` |
| Тексты hero / опт / производство | `components/Hero.tsx`, `components/Wholesale.tsx`, `components/Capacity.tsx` |
