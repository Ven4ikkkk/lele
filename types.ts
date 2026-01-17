export interface Ingredient {
  name: string;
  percentage: string;
  description: string;
  benefit: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}