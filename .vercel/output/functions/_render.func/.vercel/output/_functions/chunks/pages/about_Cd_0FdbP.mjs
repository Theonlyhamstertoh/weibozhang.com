/* empty css                          */
import { c as createComponent, r as renderTemplate, d as renderHead, e as createAstro } from '../astro_zuKL0lfp.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${pageTitle}</title>${renderHead()}</head> <body> <a href="/">Home</a> <a href="/about/">About</a> <a href="/blog/">Blog</a> <h1>About Me</h1> <h2>... and my new Astro site!</h2> <p>I am working through Astro's introductory tutorial. This is the second page on my website, and it's the first one I built myself!</p> <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p> </body></html>`;
}, "/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/about.astro", void 0);

const $$file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
