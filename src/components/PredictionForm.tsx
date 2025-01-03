import React, { useState } from 'react';
import { Icons } from './icons';
import { FormData, initialFormData } from '../types/prediction';
import { FIELD_CONSTRAINTS, SOIL_TYPES } from '../utils/constants';
import { sanitizeNumberInput } from '../utils/validation';
import { getPrediction } from '../services/predictionService';

export default function PredictionForm({ onPredict }: { onPredict: (result: string) => void }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNumberInput = (field: keyof FormData, value: string) => {
    const sanitizedValue = sanitizeNumberInput(value);
    const constraints = FIELD_CONSTRAINTS[field as keyof typeof FIELD_CONSTRAINTS];
    
    if (constraints) {
      const clampedValue = Math.min(Math.max(sanitizedValue, constraints.min), constraints.max);
      setFormData(prev => ({ ...prev, [field]: clampedValue }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const prediction = await getPrediction(formData);
      onPredict(prediction);
    } catch (err) {
      setError('Failed to get prediction. Using local prediction model instead.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Temperature (°C)
        </label>
        <input
          type="number"
          value={formData.temperature}
          onChange={(e) => handleNumberInput('temperature', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-green-500 focus:ring-green-500"
          min={FIELD_CONSTRAINTS.temperature.min}
          max={FIELD_CONSTRAINTS.temperature.max}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Humidity (%)
        </label>
        <input
          type="number"
          value={formData.humidity}
          onChange={(e) => handleNumberInput('humidity', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-green-500 focus:ring-green-500"
          min={FIELD_CONSTRAINTS.humidity.min}
          max={FIELD_CONSTRAINTS.humidity.max}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Soil Type
        </label>
        <select
          value={formData.soilType}
          onChange={(e) => setFormData(prev => ({ ...prev, soilType: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-green-500 focus:ring-green-500"
          required
        >
          {SOIL_TYPES.map(type => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          pH Level
        </label>
        <input
          type="number"
          value={formData.phLevel}
          onChange={(e) => handleNumberInput('phLevel', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-green-500 focus:ring-green-500"
          min={FIELD_CONSTRAINTS.phLevel.min}
          max={FIELD_CONSTRAINTS.phLevel.max}
          step="0.1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Rainfall (mm/year)
        </label>
        <input
          type="number"
          value={formData.rainfall}
          onChange={(e) => handleNumberInput('rainfall', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-green-500 focus:ring-green-500"
          min={FIELD_CONSTRAINTS.rainfall.min}
          max={FIELD_CONSTRAINTS.rainfall.max}
          required
        />
      </div>

      {error && (
        <div className="text-amber-600 dark:text-amber-400 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Icons.Loader className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <Icons.Send className="w-4 h-4 mr-2" />
        )}
        {isLoading ? 'Predicting...' : 'Predict Crop'}
      </button>
    </form>
  );
}