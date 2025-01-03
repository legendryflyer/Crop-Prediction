import { API_CONFIG } from '../config/api';
import { getIBMToken } from './ibmAuth';
import { FormData } from '../types/prediction';
import { predictCrop } from '../utils/prediction'; // Fallback local prediction

interface PredictionResponse {
  predictions: Array<{
    fields: string[];
    values: Array<string[]>;
  }>;
}

export async function getPrediction(formData: FormData): Promise<string> {
  // If no API key is configured, use local prediction
  if (!API_CONFIG.IBM_API_KEY) {
    return predictCrop(formData);
  }

  try {
    const token = await getIBMToken();
    
    const payload = {
      input_data: [{
        fields: ['temperature', 'humidity', 'soil_type', 'ph_level', 'rainfall'],
        values: [[
          formData.temperature,
          formData.humidity,
          formData.soilType,
          formData.phLevel,
          formData.rainfall
        ]]
      }]
    };

    const response = await fetch(API_CONFIG.SCORING_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: PredictionResponse = await response.json();
    
    if (!data.predictions?.[0]?.values?.[0]?.[0]) {
      throw new Error('Invalid prediction response format');
    }

    return data.predictions[0].values[0][0];
  } catch (error) {
    console.error('Prediction error:', error);
    // Fallback to local prediction if API fails
    return predictCrop(formData);
  }
}