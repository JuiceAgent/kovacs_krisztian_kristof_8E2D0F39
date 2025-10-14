# Videojáték Kalauz – Dokumentáció

## Oldalak
- **index.html**: A főoldal bemutatja az oldalt és néhány népszerű játékot.
- **ajanlok.html**: Részletes leírásokat ad néhány kiválasztott játékról.
- **teszt.html**: Egy interaktív rész, ahol a felhasználó kitölthet egy játékos kvízt.

## JavaScript-függvények
1. `osszegzes(pontok)` – összegzi a pontokat (összegzés tétel).
2. `ajanlJatekot(kor)` – kor alapján ajánl játékot (paraméteres függvény, elágazás).
3. `vanEAjanlott(jatekok, keresett)` – megmondja, szerepel-e egy játék a listában (logikai művelet, tömb, ciklus).
4. `legjobbPont(pontok)` – visszaadja a legnagyobb pontszámot (maximum tétel).

## Programozási tételek
- Alkalmaztam **összegzést** és **maximum kiválasztást**.

## Felhasznált elemek
- Aritmetikai műveletek: pontszámítás, összeadás.
- Logikai műveletek: `if`, `&&`, `==`.
- Tömb: játéklista, pontok tömb.
- Ciklus: `for` ciklus a függvényekben.
- Elágazás: játékajánlás `if-else` szerkezettel.

## Összegzés
A projekt egy egyszerű, de funkcionális videojáték-ajánló oldal, amely interaktív elemeket is tartalmaz JavaScript segítségével, megfelelve az összes megadott követelménynek.



## Összegzés tétel (összes pontszám kiszámítása)

function osszegzes(pontok) {
  let osszeg = 0;
  for (let i = 0; i < pontok.length; i++) {
    osszeg += pontok[i];
  }
  return osszeg;
}

## Paraméteres függvény – játék ajánlása

function ajanlJatekot(kor) {
  if (kor < 12) {
    return "Minecraft";
  } else if (kor < 16) {
    return "Fortnite";
  } else {
    return "Elden Ring";
  }
}

## Logikai művelet és elágazás

function vanEAjanlott(jatekok, keresett) {
  for (let i = 0; i < jatekok.length; i++) {
    if (jatekok[i].toLowerCase() === keresett.toLowerCase()) {
      return true;
    }
  }
  return false;
}


## Maximum tétel – legmagasabb pont kiválasztása

function legjobbPont(pontok) {
  let max = pontok[0];
  for (let i = 1; i < pontok.length; i++) {
    if (pontok[i] > max) {
      max = pontok[i];
    }
  }
  return max;
}


