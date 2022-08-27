export default {
    base: "./",
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: "[name].js",
                entryFileNames: "[name].js",
                assetFileNames: "assets/[name][extname]",
            },
        },
    },
};
