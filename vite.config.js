import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mini_Project1/', // 👈 importante: debe tener slash inicial y final
})

 