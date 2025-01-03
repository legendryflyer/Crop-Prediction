export const API_CONFIG = {
  IBM_API_KEY: import.meta.env.VITE_IBM_API_KEY || '',
  TOKEN_URL: 'https://iam.cloud.ibm.com/identity/token',
  SCORING_URL: 'https://us-south.ml.cloud.ibm.com/ml/v4/deployments/8216e6b5-500d-447a-8789-25fd54e1136d/predictions?version=2021-05-01'
};