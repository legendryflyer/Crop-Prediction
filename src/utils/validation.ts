// Input validation utilities
export const isValidNumber = (value: number): boolean => {
  return !isNaN(value) && isFinite(value);
};

export const sanitizeNumberInput = (value: string): number => {
  const parsed = parseFloat(value);
  return isValidNumber(parsed) ? parsed : 0;
};