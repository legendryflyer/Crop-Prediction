import React from 'react';
import { Icons } from './components/icons';
import PredictionForm from './components/PredictionForm';
import PredictionResult from './components/PredictionResult';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [prediction, setPrediction] = React.useState<string | null>(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Icons.Sprout className="w-12 h-12 text-green-600 dark:text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Crop Prediction System
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Enter environmental parameters to get crop recommendations
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <PredictionForm onPredict={setPrediction} />
            <PredictionResult prediction={prediction} />
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>This is a demonstration version. For production use, connect to IBM Watson ML API.</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;