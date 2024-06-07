import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/static";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
    theme: "material-theme-palenight",

    tokensMap: {},
};
// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        mdx({
            syntaxHighlight: false,
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
            extendMarkdownConfig: true,
        }),
        icon(),
    ],
    output: "static",
    site: "https://weibozhang.com/",
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});
