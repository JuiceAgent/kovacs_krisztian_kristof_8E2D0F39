// Összegzés tétel
function osszegzes(pontok) {
  let osszeg = 0;
  for (let i = 0; i < pontok.length; i++) {
    osszeg += pontok[i];
  }
  return osszeg;
}

// Maximum kiválasztás
function legjobbPont(pontok) {
  let max = pontok[0];
  for (let i = 1; i < pontok.length; i++) {
    if (pontok[i] > max) {
      max = pontok[i];
    }
  }
  return max;
}

// Paraméteres függvény – játék ajánlása
function ajanlJatekot(kor) {
  if (kor < 12) {
    return "Minecraft";
  } else if (kor < 16) {
    return "Fortnite";
  } else {
    return "Elden Ring";
  }
}

// Logikai művelet – játék keresése
function vanEAjanlott(jatekok, keresett) {
  for (let i = 0; i < jatekok.length; i++) {
    if (jatekok[i].toLowerCase() === keresett.toLowerCase()) {
      return true;
    }
  }
  return false;
}

// Életkor alapján játék ajánlása
function jatekAjanlas() {
  const kor = parseInt(document.getElementById("kor").value);
  const ajanlas = ajanlJatekot(kor);
  document.getElementById("ajanlas").textContent = `Ajánlott játék: ${ajanlas}`;
}

// Pontszám feldolgozása
function szamitasok() {
  const input = document.getElementById("pontokInput").value;
  const pontok = input.split(",").map(szam => parseInt(szam.trim()));
  document.getElementById("osszegPont").textContent = osszegzes(pontok);
  document.getElementById("legjobbPont").textContent = legjobbPont(pontok);
}

// Keresés játéklistában
function keresJatek() {
  const keresett = document.getElementById("keresettJatek").value;
  const jatekok = ["Minecraft", "Fortnite", "Elden Ring"];
  const van = vanEAjanlott(jatekok, keresett);
  document.getElementById("keresEredmeny").textContent = van
    ? "A játék szerepel az ajánlottak között."
    : "A játék nem szerepel az ajánlottak között.";
}
