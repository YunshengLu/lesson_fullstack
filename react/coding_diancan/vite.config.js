import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(_dirname,'src')
    }
  }
})
