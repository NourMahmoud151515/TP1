function startGame() {
  let difficulty = prompt(
    "Choisissez un niveau : Facile (1), Intermédiaire (2), Difficile (3)"
  );

  let maxAttempts, range;

  switch (difficulty) {
    case "1":
      maxAttempts = 10;
      range = 50;
      break;
    case "2":
      maxAttempts = 7;
      range = 100;
      break;
    case "3":
      maxAttempts = 5;
      range = 200;
      break;
    default:
      alert("Niveau invalide. Choisissez 1, 2 ou 3.");
      return;
  }

  let secretNumber = Math.floor(Math.random() * range) + 1;
  let attempts = 0;
  let guessed = false;

  while (attempts < maxAttempts && !guessed) {
    let guess = parseInt(
      prompt(
        `Devinez un nombre entre 1 et ${range} (Tentative ${
          attempts + 1
        }/${maxAttempts})`
      )
    );

    if (isNaN(guess)) {
      alert("Veuillez entrer un nombre valide.");
      continue;
    }

    attempts++;

    if (guess === secretNumber) {
      alert(
        `Bravo ! Vous avez trouvé le nombre ${secretNumber} en ${attempts} tentatives.`
      );
      guessed = true;
    } else if (guess < secretNumber) {
      alert("Trop bas !");
    } else {
      alert("Trop haut !");
    }
  }

  if (!guessed) {
    alert(`Echec ! Le nombre était ${secretNumber}.`);
  }

  if (confirm("Voulez-vous rejouer ?")) {
    startGame();
  }
}
