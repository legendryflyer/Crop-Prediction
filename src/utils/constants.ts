// Form field constraints
export const FIELD_CONSTRAINTS = {
  temperature: { min: 0, max: 50 },
  humidity: { min: 0, max: 100 },
  phLevel: { min: 0, max: 14 },
  rainfall: { min: 0, max: 5000 }
} as const;

export const SOIL_TYPES = ['loamy', 'clay', 'sandy', 'silt'] as const;