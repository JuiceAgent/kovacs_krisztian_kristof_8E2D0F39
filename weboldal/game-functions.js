/**
 * Sum Pattern - Calculate Total Score
 * Sums up all points in an array
 */
function osszegzes(pontok) {
  let osszeg = 0
  for (let i = 0; i < pontok.length; i++) {
    osszeg += pontok[i]
  }
  return osszeg
}

/**
 * Parameterized Function - Game Recommendation
 * Recommends a game based on the user's age
 */
function ajanlJatekot(kor) {
  if (kor < 12) {
    return "Minecraft"
  } else if (kor < 16) {
    return "Fortnite"
  } else {
    return "Elden Ring"
  }
}

/**
 * Logical Operation and Conditional Statement
 * Checks if a game exists in the list (case-insensitive)
 */
function vanEAjanlott(jatekok, keresett) {
  for (let i = 0; i < jatekok.length; i++) {
    if (jatekok[i].toLowerCase() === keresett.toLowerCase()) {
      return true
    }
  }
  return false
}

/**
 * Maximum Selection - Get the Highest Score
 * Returns the highest score from an array of scores
 */
function legjobbPont(pontok) {
  let max = pontok[0]
  for (let i = 1; i < pontok.length; i++) {
    if (pontok[i] > max) {
      max = pontok[i]
    }
  }
  return max
}
