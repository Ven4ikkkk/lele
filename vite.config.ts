import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Загружаем переменные окружения, чтобы прокинуть API_KEY
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Это позволяет использовать process.env.API_KEY внутри браузера после сборки
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  };
});