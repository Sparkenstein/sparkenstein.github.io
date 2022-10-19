import { defineConfig } from 'vite'
import path from "node:path";

export default defineConfig({
    base: "/",
    server: { port: 3000 },
    build: { outDir: "docs" },
    resolve: {
        alias: [
            {
                find: /^#/,
                replacement: '#',
                customResolver(id) {
                    //    TODO: hardcoded chalk specific baheviour, but it works
                    // console.log("\n ID===",id)
                    if (id === "#ansi-styles") {
                        return path.resolve("node_modules", "chalk", "source", "vendor", id.replace("#", ""), "index.js")
                    }
                    if (id === "#supports-color") {
                        return path.resolve("node_modules", "chalk", "source", "vendor", id.replace("#", ""), "browser.js")
                    }
                }
            }
        ]
    }
})
