import { API_CONFIG } from '../config/api';

export async function getIBMToken(): Promise<string> {
  const params = new URLSearchParams({
    'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
    'apikey': API_CONFIG.IBM_API_KEY
  });

  const response = await fetch(API_CONFIG.TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    body: params
  });

  if (!response.ok) {
    throw new Error('Failed to obtain IBM token');
  }

  const data = await response.json();
  return data.access_token;
}