# Изображения с макета Figma (канал ot8cd94w, фрейм «Главная NDA Правки»)

Список узлов с картинками (IMAGE fill) — **16 уникальных**. В макете нет отдельных узлов типа VECTOR (иконки собраны из прямоугольников).

## Соответствие узлов и файлов для вёрстки

| Node ID   | Имя в Figma | Предлагаемый файл | Где использовать |
|-----------|-------------|-------------------|------------------|
| 1241:881  | logo-header 2 | logo-header.png | Шапка — логотип |
| 1241:1094 | logo-header 1 | logo-footer.png | Подвал — логотип (тот же логотип) |
| 1365:764  | image 2 | hero-sterilizer.png | Hero — картинка стерилизатора |
| 1241:922  | dsc_7925-2-1-min 1 | about-photo.jpg | Блок «О компании» — фото |
| 1241:918  | Снимок экрана... | office-map.jpg | Блок «Наш офис и склад» — карта/фото |
| 1241:941  | Davos_Partner_0006_johnson_and_johnson_logo 1 | catalog-johnson-johnson.png | Каталог — Johnson & Johnson |
| 1241:954  | Medtronic-Emblem 1 | catalog-medtronic.png | Каталог — Medtronic |
| 1241:944  | Smiths_Detection_Logo 1 | catalog-smiths.png | Каталог — Portex Smiths Medical |
| 1241:949  | 104.jpg 1 | catalog-philips.png | Каталог — Philips |
| 1241:962, 1241:963 | GE_logo_7455RGB 1/2 | catalog-ge-healthcare.png | Каталог — GE Healthcare |
| 1241:968  | l&r_logo... | catalog-lohmann-rauscher.png | Каталог — Lohmann & Rauscher |
| 1241:971  | Boston-Scientific-logo No tag 1 | catalog-boston-scientific.png | Каталог — Boston Scientific |
| 1241:976  | b5fe58d677a5ef77919051e9137e054d 1 | catalog-bowa.png | Каталог — BOWA |
| 1241:981  | terumo2 1 | catalog-terumo.png | Каталог — Terumo |
| 1241:988  | imported-3892-FP_Master_colRGB_LR 1 | catalog-fisher-paykel.png | Каталог — Fisher & Paykel |

Полный список node ID в `../figma-image-nodes.json`.

## Как получить файлы

1. **Через Figma API** (если есть токен и file key из URL файла):
   ```bash
   set FIGMA_ACCESS_TOKEN=ваш_токен
   set FIGMA_FILE_KEY=ключ_из_url_файла
   node scripts/download-figma-images.js
   ```
   Картинки появятся в папке `img/`.

2. **Вручную в Figma**: выделить нужный слой (по имени из таблицы), правый клик → Export → PNG/JPG. Логотипы — PNG, фото (о компании, офис) — JPG.
