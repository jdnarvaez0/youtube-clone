import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target: process.env.REACT_APP_API_URL,
				changeOrigin: true,
				// secure: false,
			},
		},
	},
});
