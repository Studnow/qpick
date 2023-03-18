import { defineConfig } from "vite";

import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";
// import { webfontDownload } from "vite-plugin-webfont-dl";

function handlebarsOverride(options) {
  const plugin = handlebars(options);
  // Currently handleHotUpdate skips further processing, which bypasses
  // postcss and in turn tailwind doesn't pick up file changes
  delete plugin.handleHotUpdate;
  return plugin;
}

export default defineConfig({
  base: "/qpick/", // for deploy to gh-pages base = outDir
  build: {
    outDir: "qpick",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "product-page": resolve(__dirname, "pages/product.html"),
        "favorites-page": resolve(__dirname, "pages/favorites.html"),
        "shopping-cart-page": resolve(__dirname, "pages/shopping-cart.html"),
        "conditions-page": resolve(__dirname, "pages/conditions.html"),
        "ordering-page": resolve(__dirname, "pages/ordering.html"),
      },
    },
  },
  plugins: [
    handlebarsOverride({
      context: {
        title: "Handlebars",
      },
      partialDirectory: [
        resolve(__dirname, "./src/partials"),
        resolve(__dirname, "./src/partials/nav"),
        resolve(__dirname, "./src/partials/content"),
        resolve(__dirname, "./src/partials/blocks"),
      ],
    }),
    // handlebars({}),
    // webfontDownload(),
  ],
});
