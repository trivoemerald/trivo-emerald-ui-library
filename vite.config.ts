import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
      exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        variables: resolve(__dirname, "src/styles/variables.css"),
      },
      name: "MyUILibrary",
      formats: ["es", "cjs"],
      fileName: (format, entryName) =>
        entryName === "index"
          ? `index.${format === "es" ? "js" : "cjs"}`
          : `${entryName}.css`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "variables.css") return "variables.css";
          return "trivo-ui-library.[ext]";
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    emptyOutDir: true,
  },
});
