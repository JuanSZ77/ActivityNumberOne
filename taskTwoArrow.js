const readline = require('readline');
const shipName = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const shipPilotArrow = (identification) => {
  if (identification === "ARQ2555") {
    console.log("Esta nave es piloteada por Sara Bel-Sun");
  } else if (identification === "ARQ2556") {
    console.log("Esta nave es piloteada por Nodin Chavdri");
  } else if (identification === "ARQ2557") {
    console.log("Esta nave es piloteada por Finn");
  } else {
    console.log("Esta nave no está disponible por el momento");
  }
  shipName.close()
};

shipName.question("Ingresa la identificación de la nave: ", (identification) => {
  shipPilotArrow(identification);
});
