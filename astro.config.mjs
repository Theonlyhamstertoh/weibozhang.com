import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind(), mdx(), icon()],
    output: "server",
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});
