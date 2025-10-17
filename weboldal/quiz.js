// Quiz data
const questions = [
  {
    question: "How often do you play video games?",
    options: [
      { text: "Daily", points: 5 },
      { text: "Several times a week", points: 4 },
      { text: "Once a week", points: 3 },
      { text: "Occasionally", points: 2 },
      { text: "Rarely", points: 1 },
    ],
  },
  {
    question: "What type of games do you prefer?",
    options: [
      { text: "Action and Adventure", points: 5 },
      { text: "Strategy and Puzzle", points: 4 },
      { text: "Sports and Racing", points: 3 },
      { text: "Simulation and Building", points: 4 },
      { text: "Casual and Mobile", points: 2 },
    ],
  },
  {
    question: "Do you prefer single-player or multiplayer games?",
    options: [
      { text: "Multiplayer only", points: 5 },
      { text: "Mostly multiplayer", points: 4 },
      { text: "Both equally", points: 3 },
      { text: "Mostly single-player", points: 4 },
      { text: "Single-player only", points: 3 },
    ],
  },
  {
    question: "How important are graphics to you?",
    options: [
      { text: "Very important", points: 5 },
      { text: "Important", points: 4 },
      { text: "Somewhat important", points: 3 },
      { text: "Not very important", points: 2 },
      { text: "Not important at all", points: 1 },
    ],
  },
  {
    question: "Do you enjoy challenging games?",
    options: [
      { text: "Love extreme challenges", points: 5 },
      { text: "Enjoy a good challenge", points: 4 },
      { text: "Moderate difficulty", points: 3 },
      { text: "Prefer easier games", points: 2 },
      { text: "Want very easy games", points: 1 },
    ],
  },
]

// Quiz state
let currentQuestion = 0
let answers = []

// Declare functions before using them
function osszegzes(arr) {
  return arr.reduce((acc, val) => acc + val, 0)
}

function legjobbPont(arr) {
  return Math.max(...arr)
}

function ajanlJatekot(age) {
  if (age < 12) {
    return "Among Us"
  } else if (age < 18) {
    return "Fortnite"
  } else {
    return "Elden Ring"
  }
}

function vanEAjanlott(list, item) {
  return list.includes(item)
}

// Initialize quiz
function initQuiz() {
  renderQuestion()
  renderProgressBars()
}

// Render progress bars
function renderProgressBars() {
  const progressBars = document.getElementById("progressBars")
  progressBars.innerHTML = ""

  for (let i = 0; i < questions.length; i++) {
    const bar = document.createElement("div")
    bar.className = "progress-bar"

    if (i < currentQuestion) {
      bar.classList.add("completed")
    } else if (i === currentQuestion) {
      bar.classList.add("current")
    }

    progressBars.appendChild(bar)
  }
}

// Render current question
function renderQuestion() {
  const questionNumber = document.getElementById("questionNumber")
  const questionText = document.getElementById("questionText")
  const optionsContainer = document.getElementById("optionsContainer")

  questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`
  questionText.textContent = questions[currentQuestion].question

  optionsContainer.innerHTML = ""

  questions[currentQuestion].options.forEach((option, index) => {
    const optionDiv = document.createElement("div")
    optionDiv.className = "quiz-option"
    optionDiv.textContent = option.text
    optionDiv.onclick = () => handleAnswer(option.points)
    optionsContainer.appendChild(optionDiv)
  })
}

// Handle answer selection
function handleAnswer(points) {
  answers.push(points)

  if (currentQuestion < questions.length - 1) {
    currentQuestion++
    renderQuestion()
    renderProgressBars()
  } else {
    showResults()
  }
}

// Show results
function showResults() {
  document.getElementById("quizCard").style.display = "none"
  document.getElementById("resultsCard").style.display = "block"

  // Calculate total score using osszegzes function
  const totalScore = osszegzes(answers)
  const maxScore = questions.length * 5
  const percentage = Math.round((totalScore / maxScore) * 100)

  // Display score
  document.getElementById("scoreValue").textContent = `${totalScore}/${maxScore}`
  document.getElementById("scorePercentage").textContent = `(${percentage}%)`

  // Determine gamer level
  const gamerLevel = getGamerLevel(totalScore)
  const levelElement = document.getElementById("gamerLevel")
  levelElement.textContent = gamerLevel.level
  levelElement.className = `level-value ${gamerLevel.className}`

  // Calculate highest score from example scores using legjobbPont function
  const exampleScores = [15, 22, 18, 25, 20]
  const highestScore = legjobbPont(exampleScores)
  document.getElementById("highestScore").textContent = highestScore

  // Setup age input listener
  const ageInput = document.getElementById("ageInput")
  ageInput.addEventListener("input", handleAgeInput)

  // Setup favorite game input listener
  const favoriteInput = document.getElementById("favoriteInput")
  favoriteInput.addEventListener("input", handleFavoriteInput)
}

// Get gamer level based on score
function getGamerLevel(score) {
  if (score >= 23) {
    return { level: "Hardcore Gamer", className: "hardcore" }
  } else if (score >= 18) {
    return { level: "Dedicated Gamer", className: "dedicated" }
  } else if (score >= 13) {
    return { level: "Casual Gamer", className: "casual" }
  } else {
    return { level: "Beginner Gamer", className: "beginner" }
  }
}

// Handle age input
function handleAgeInput(event) {
  const age = Number.parseInt(event.target.value)
  const ageRecommendation = document.getElementById("ageRecommendation")

  if (age && age > 0) {
    // Use ajanlJatekot function to get recommendation
    const recommendedGame = ajanlJatekot(age)

    document.getElementById("displayAge").textContent = age
    document.getElementById("recommendedGame").textContent = recommendedGame
    ageRecommendation.style.display = "block"
  } else {
    ageRecommendation.style.display = "none"
  }
}

// Handle favorite game input
function handleFavoriteInput(event) {
  const favoriteGame = event.target.value.trim()
  const favoriteResult = document.getElementById("favoriteResult")

  if (favoriteGame) {
    // Popular games list
    const popularGames = ["Minecraft", "The Legend of Zelda: Breath of the Wild", "The Witcher 3: Wild Hunt", "Red Dead Redemption 2", "Grand Theft Auto V", "Super Mario Odyssey", "Elden Ring", "Dark Souls", "Halo: Combat Evolved", "Fortnite", "Among Us", "Tetris", "Half-Life 2", "The Last of Us", "Portal 2", "Super Mario 64", "Call of Duty 4: Modern Warfare", "Mass Effect 2", "Bloodborne", "Overwatch", "The Elder Scrolls V: Skyrim", "Metal Gear Solid V: The Phantom Pain", "Celeste", "Animal Crossing: New Horizons", "Hades", "Final Fantasy VII", "Doom (1993)", "Resident Evil 4", "Super Metroid", "God of War (2018)", "Street Fighter II", "Fallout 3", "League of Legends", "Counter-Strike: Global Offensive", "Persona 5", "Splatoon 2", "Journey", "Mario Kart 8 Deluxe", "The Legend of Zelda: Ocarina of Time", "Metroid Prime", "The Sims 4", "Rocket League", "Sid Meier's Civilization VI", "Dark Souls III", "The Legend of Zelda: Majora’s Mask", "Super Smash Bros. Ultimate", "Destiny 2", "Hollow Knight", "GTA San Andreas", "Cuphead", "FIFA 21", "Final Fantasy X", "Uncharted 4: A Thief’s End", "Sekiro: Shadows Die Twice", "Bioshock", "Monster Hunter: World", "Cyberpunk 2077", "Dead Cells", "Splinter Cell: Chaos Theory", "Fall Guys", "Bloodstained: Ritual of the Night", "Valorant", "Overcooked 2", "Dark Souls II", "The Legend of Zelda: Twilight Princess", "Ratchet & Clank: Rift Apart", "Persona 4 Golden", "Super Mario World", "Forza Horizon 5", "Half-Life", "Mass Effect", "The Elder Scrolls IV: Oblivion", "Diablo III", "Crash Bandicoot N. Sane Trilogy", "Mario Party 2", "The Outer Worlds", "Stardew Valley", "Fire Emblem: Three Houses", "The Legend of Zelda: Wind Waker", "Ori and the Blind Forest", "Fallout: New Vegas", "Metroid Dread", "Dead Space", "Star Wars Jedi: Fallen Order", "Tony Hawk's Pro Skater 2", "Resident Evil 2 Remake", "Call of Duty: Warzone", "Super Mario Galaxy", "Super Mario Sunshine", "Cuphead", "Gears of War", "DOOM Eternal", "Street Fighter V", "The Binding of Isaac", "Hollow Knight: Silksong", "Darkest Dungeon", "No Man's Sky", "Dead by Daylight", "Dragon Age: Origins", "Persona 3", "The Division 2", "Mass Effect 3", "Fallout 4", "Terraria", "Baldur's Gate II", "Valorant", "Splatoon", "Overwatch 2", "Plants vs Zombies", "Little Nightmares", "Forza Motorsport 7", "Batman: Arkham City", "Fable II", "Bayonetta", "Donkey Kong Country: Tropical Freeze", "Metal Gear Solid 3: Snake Eater", "Rocket Arena", "Bloodborne: The Old Hunters", "The Outer Wilds", "Super Meat Boy", "Danganronpa: Trigger Happy Havoc", "Dragon Quest XI", "Cuphead", "Shovel Knight", "Katamari Damacy", "Celeste", "Firewatch", "Inside", "Dark Souls Remastered", "Assassin’s Creed II", "Wolfenstein II: The New Colossus", "Monster Hunter Rise", "Guilty Gear Strive", "Dead Space 2", "The Witcher 2: Assassins of Kings", "Minecraft Dungeons", "Minecraft Earth", "StarCraft II", "Persona 4", "Bioshock Infinite", "Super Mario Maker 2", "Far Cry 5", "The Legend of Zelda: Link’s Awakening (Remake)", "Borderlands 3", "Splatoon 3", "Assassin’s Creed Odyssey", "Team Fortress 2", "Ori and the Will of the Wisps", "Call of Duty: Black Ops", "Valorant", "Halo Infinite", "Minecraft Story Mode", "The Legend of Zelda: Skyward Sword", "Left 4 Dead 2", "Super Mario Party", "Dead Rising 2", "Portal", "Life is Strange", "Call of Duty: Modern Warfare (2019)", "Final Fantasy XIV", "Doom 3", "Uncharted: Drake’s Fortune", "The Legend of Zelda: A Link Between Worlds", "Fallout 76", "Mortal Kombat 11", "XCOM 2", "Super Mario Bros.", "NBA 2K21", "Journey", "Minecraft Classic", "GTA IV", "Final Fantasy XV", "Kingdom Hearts III", "Minecraft: Story Mode – Season Two", "Metroid Fusion", "Assassin’s Creed IV: Black Flag", "Donkey Kong Country Returns", "Ghost of Tsushima", "Dark Souls: Prepare to Die Edition", "Psychonauts 2", "Persona 5 Royal", "Cuphead", "Minecraft Dungeons"];

    // Use vanEAjanlott function to check if game is in list
    const isInList = vanEAjanlott(popularGames, favoriteGame)

    if (isInList) {
      favoriteResult.textContent = `✓ Yes! "${favoriteGame}" is in our popular games list!`
      favoriteResult.className = "favorite-result found"
    } else {
      favoriteResult.textContent = `✗ "${favoriteGame}" is not in our current popular games list.`
      favoriteResult.className = "favorite-result not-found"
    }

    favoriteResult.style.display = "block"
  } else {
    favoriteResult.style.display = "none"
  }
}

// Reset quiz
function resetQuiz() {
  currentQuestion = 0
  answers = []
  document.getElementById("quizCard").style.display = "block"
  document.getElementById("resultsCard").style.display = "none"
  document.getElementById("ageInput").value = ""
  document.getElementById("favoriteInput").value = ""
  initQuiz()
}

// Initialize quiz when page loads
if (document.getElementById("quizCard")) {
  initQuiz()
}
