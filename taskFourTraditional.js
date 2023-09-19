function countSabers(item) {
    const countSabersNegative = item.filter(function (value) {
      return value < 0;
    }).length;
    console.log(`Tienes ${countSabersNegative} sables defectuosos con energía negativa`);
  }
  
  const arraySabers = [2, -5, 5.3, -2.2, -4, 9.7, 5, 2];
  countSabers(arraySabers);
  
