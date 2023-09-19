function distance(coordinateXOne, coordinateXTwo, coordinateYOne, coordinateYTwo){
    return Math.sqrt(Math.pow(coordinateXTwo - coordinateXOne, 2) + Math.pow(coordinateYTwo - coordinateYOne, 2))
}

const distanceTotal = distance(123.1, 43.2, 202, 602);
console.log("La distancia total es de: ", distanceTotal);

