// Type definitions
export interface FormData {
  temperature: number;
  humidity: number;
  soilType: string;
  phLevel: number;
  rainfall: number;
}

export const initialFormData: FormData = {
  temperature: 25,
  humidity: 60,
  soilType: 'loamy',
  phLevel: 6.5,
  rainfall: 1000
};