import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), mdx(), icon()],
    output: "static",
    site: "https://weibozhang.com/",
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});
