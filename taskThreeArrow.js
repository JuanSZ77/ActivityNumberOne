const dailyTemperatures = [
    { max: 30.3, min: 20.7 },
    { max: 27.5, min: 24.2 },
    { max: 32, min: 22 },
    { max: 15.5, min: 10.1 },
    { max: 35, min: 28 },
    { max: 27.3, min: 19.2 },
    { max: 30.6, min: 26.8 },
  ];
  
  const averageTemperatureCalculation = (data) => {
    const temperatures = data.map((day) => (day.max + day.min) / 2);
    const temperatureMoonTotal = temperatures.reduce((total, temperature) => total + temperature, 0) / temperatures.length;
    return temperatureMoonTotal;
  };
  
  const moonTemperatureMessage = averageTemperatureCalculation(dailyTemperatures);
  console.log(`La temperature media de la luna es de ${moonTemperatureMessage.toFixed(1)} grados`);
  