import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/Projet7-OC/",
	server: {
		host: true,
		port: 3000,
	},
	build: {
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				assetFileNames: "assets/styles.css",
			},
		},
	},
});
