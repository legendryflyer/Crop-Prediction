// Crop prediction logic
interface CropConditions {
  minTemp: number;
  maxTemp: number;
  minHumidity: number;
  maxHumidity: number;
  minPh: number;
  maxPh: number;
  minRainfall: number;
  maxRainfall: number;
  soilTypes: string[];
}

const cropRequirements: Record<string, CropConditions> = {
  'Rice': {
    minTemp: 20,
    maxTemp: 35,
    minHumidity: 60,
    maxHumidity: 90,
    minPh: 5.5,
    maxPh: 7.5,
    minRainfall: 800,
    maxRainfall: 2200,
    soilTypes: ['clay', 'loamy']
  },
  'Wheat': {
    minTemp: 15,
    maxTemp: 25,
    minHumidity: 40,
    maxHumidity: 70,
    minPh: 6.0,
    maxPh: 7.5,
    minRainfall: 500,
    maxRainfall: 1200,
    soilTypes: ['loamy', 'clay']
  },
  'Corn': {
    minTemp: 20,
    maxTemp: 30,
    minHumidity: 50,
    maxHumidity: 80,
    minPh: 5.8,
    maxPh: 7.0,
    minRainfall: 600,
    maxRainfall: 1200,
    soilTypes: ['loamy', 'sandy']
  },
  'Soybeans': {
    minTemp: 20,
    maxTemp: 30,
    minHumidity: 45,
    maxHumidity: 85,
    minPh: 6.0,
    maxPh: 7.0,
    minRainfall: 500,
    maxRainfall: 1500,
    soilTypes: ['loamy', 'clay']
  }
};

export const predictCrop = (params: {
  temperature: number;
  humidity: number;
  soilType: string;
  phLevel: number;
  rainfall: number;
}): string => {
  const suitableCrops = Object.entries(cropRequirements).filter(([_, conditions]) => {
    return (
      params.temperature >= conditions.minTemp &&
      params.temperature <= conditions.maxTemp &&
      params.humidity >= conditions.minHumidity &&
      params.humidity <= conditions.maxHumidity &&
      params.phLevel >= conditions.minPh &&
      params.phLevel <= conditions.maxPh &&
      params.rainfall >= conditions.minRainfall &&
      params.rainfall <= conditions.maxRainfall &&
      conditions.soilTypes.includes(params.soilType)
    );
  });

  if (suitableCrops.length === 0) {
    return 'No suitable crop found for these conditions';
  }

  // Return the most suitable crop (first match)
  return suitableCrops[0][0];
};