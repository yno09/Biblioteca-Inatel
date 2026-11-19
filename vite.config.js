import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// React Compiler removido: o preset estava incompatível e gerava
// "[BabelError] .presets[1][2] must be a string" (página em branco).
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
