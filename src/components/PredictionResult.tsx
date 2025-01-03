import React from 'react';
import { Icons } from './icons';

export default function PredictionResult({ prediction }: { prediction: string | null }) {
  if (!prediction) return null;

  return (
    <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
      <div className="flex items-center space-x-3">
        <Icons.Leaf className="w-6 h-6 text-green-600 dark:text-green-500" />
        <h3 className="text-lg font-medium text-green-900 dark:text-green-100">
          Predicted Crop
        </h3>
      </div>
      <p className="mt-2 text-xl font-bold text-green-700 dark:text-green-300">
        {prediction}
      </p>
      <p className="mt-1 text-sm text-green-600 dark:text-green-400">
        Based on the provided environmental conditions, this crop is recommended for optimal yield.
      </p>
    </div>
  );
}