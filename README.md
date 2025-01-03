Click to vist : https://crop-prediction-five.vercel.app/


Preview--> 


https://github.com/user-attachments/assets/294835aa-704d-4193-9ba3-939c12a55937

Crop Prediction App
This is a crop prediction app built using the IBM WatsonX.ai Studio. The app predicts the best crops to plant based on various factors, helping farmers make informed decisions to optimize crop yield and efficiency. The API used for predictions was created using a custom CSV file that contains relevant agricultural data for training.

Features
AI-based predictions: Uses IBM WatsonX.ai Studio to analyze various agricultural data and predict the best crop types.
Custom CSV-based API: The API is trained on a custom CSV file with detailed agricultural data to make accurate predictions.
User-friendly Interface: Allows users to input necessary details (such as soil type, weather, and location) to receive tailored predictions.
Real-time results: Provides instant crop predictions based on the provided data.
Technologies Used
IBM WatsonX.ai Studio: For machine learning and AI-powered predictions.
Custom CSV file: Contains data used to train the prediction model for more accurate results.
Frontend: Web-based interface for user interaction (HTML, CSS, JavaScript).
Backend: API integration for communicating with WatsonX.ai Studio for predictions.
Setup and Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/crop-prediction-app.git
cd crop-prediction-app
Install dependencies:

bash
Copy code
npm install
Set up WatsonX.ai Studio:

Create an IBM WatsonX.ai Studio account and generate your API key.
Set up the API key in the app configuration file (config.js or .env).
Add your custom CSV file:

Place your CSV file in the appropriate directory (e.g., data/).
Ensure the CSV file follows the structure required for prediction (e.g., includes columns for soil type, weather, and location).
Run the app:

bash
Copy code
npm start
This will start the development server, and you can access the app in your browser at http://localhost:3000.

Usage
Input the required data (e.g., location, soil conditions, and weather information).
Click on "Predict" to receive the recommended crop types based on the provided input.
View the results and make data-driven decisions on crop planting.
Contributing
Feel free to fork this project, open issues, or submit pull requests to improve the app. Contributions are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.

