import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
//   server: {
//     proxy: {
//       '/': {
//            target: 'http://127.0.0.1:5000',
//            changeOrigin: true,
//            secure: false,
//        }
//   }
// }
})



