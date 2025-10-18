# 📘 GameFinder Projekt Dokumentáció

## Áttekintés

A **GameFinder** egy webes alkalmazás, amely segít a felhasználóknak játékokat találni életkoruk, preferenciáik és érdeklődésük alapján.  
A projekt három HTML oldalt, egy CSS fájlt, valamint két JavaScript fájlt tartalmaz.

---

## 📄 `index.html` – Főoldal

### 🎯 Cél
A nyitóoldal célja, hogy bemutassa az oldal funkcionalitását, népszerű játékokat ismertessen, és navigációt biztosítson a kvízhez vagy az ajánlókhoz.

### 🔧 Főbb részek
- **Fejléc (Header)**: Navigációs menü (`Home`, `Recommendations`, `Quiz`).
- **Hős szekció (Hero Section)**:
  - Motivációs üzenet: _„Discover Your Next Favorite Game”_
  - Gombok: `Take the Quiz`, `Browse Games`
- **Népszerű játékok szekció**:
  - Kártyák játékokkal (pl. Minecraft, Fortnite)
  - Értékelés, korhatár, rövid leírás
- **Lábléc (Footer)**: Jogok és záróüzenet

---

## 📄 `ajanlok.html` – Ajánlók oldal

### 🎯 Cél
Részletes játékleírások megjelenítése különböző szempontok alapján.

### 🔧 Főbb részek
- **Fejléc és navigáció** – megegyezik az `index.html`-el
- **Oldalfejléc**:
  - Visszalépés a főoldalra
  - Bevezető szöveg
- **Játékajánlások**:
  - Minden játék kártyában jelenik meg
  - Leírás, funkciók, életkori ajánlás, játékos szám, játékidő
  - Színkódolt sávok a játékok csoportosításához

---

## 📄 `teszt.html` – Kvíz oldal

### 🎯 Cél
Interaktív kvíz, amellyel a felhasználó játékos profilját és ajánlásait kaphatja meg.

### 🔧 Főbb részek
- **Kvízkártya**:
  - Kérdések és válaszlehetőségek
  - Előrehaladási (progress) jelző
- **Eredménykártya**:
  - Pontszám és százalékos eredmény
  - „Gamer szint” meghatározása
  - Kor alapú játékajánló (életkor bevitellel)
  - Kedvenc játék ellenőrzése
  - Fun fact: Legmagasabb pontszám
- **JavaScript kapcsolatok**:
  - `quiz.js` – a kvíz logikája
  - `game-functions.js` – ajánlások, ellenőrzések

---

## 🎨 CSS – `styles.css`

### 🧩 Fő funkciók
- **Reszponzív design**: mobilra és desktopra optimalizált elrendezés
- **Stílusok**:
  - Gombok, ikonok, badge-ek
  - Flexbox és grid layout
  - Színkódok az ajánlókhoz
- **Animációk és átmenetek**: a vizuális élmény fokozására

---

## 📜 JavaScript fájlok

### ✅ `quiz.js`
- Kvízkérdések kezelése
- Válaszok feldolgozása
- Pontszám és „gamer szint” meghatározása
- DOM-manipuláció (kártyák megjelenítése/eltüntetése)

### ✅ `game-functions.js`
- Életkor alapú játékajánlás
- Kedvenc játék ellenőrzése
- Fun fact generálása
- Űrlapkezelés (pl. beküldés)



# 🕹️ Game Quiz – JavaScript Dokumentáció

Ez a dokumentáció két JavaScript fájlhoz készült:

- **Alapvető játékkal kapcsolatos segédfüggvények** (`helpers.js`)
- **Egy interaktív videójáték-kvíz alkalmazás** (`quiz.js`)

---

## 📁 1. `helpers.js` – Alap segédfüggvények

### `osszegzes(pontok)`

- **Típus:** Összegző minta  
- **Leírás:** Összeadja az összes pontot egy tömbből.  
- **Paraméter:**  
  - `pontok` *(number[])* – A pontszámokat tartalmazó tömb  
- **Visszatér:** Összesített pontszám *(number)*

```javascript
function osszegzes(pontok) {
  let osszeg = 0;
  for (let i = 0; i < pontok.length; i++) {
    osszeg += pontok[i];
  }
  return osszeg;
}
```

ajanlJatekot(kor)

Típus: Paraméterezett függvény

Leírás: Kor alapján ajánl egy játékot a felhasználónak

Paraméter:

kor (number) – A felhasználó életkora

Visszatér: Játék neve (string)

```javascript
function ajanlJatekot(kor) {
  if (kor < 12) {
    return "Minecraft";
  } else if (kor < 16) {
    return "Fortnite";
  } else {
    return "Elden Ring";
  }
}
```






