/* empty css                          */
import { c as createComponent, r as renderTemplate, o as renderComponent, m as maybeRenderHead, i as addAttribute, s as spreadAttributes, e as createAstro, u as unescapeHTML, q as Fragment } from '../astro_zuKL0lfp.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Image } from './blog_Y4lcYjz5.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                          */

const projectsData = [
  {
    title: "weibozhang.com v3",
    description: `The current website! Rebuilt it with Astro for simplicity`,
    href: "https://www.bluon.ai",
    date: /* @__PURE__ */ new Date("2024-05-23")
  },
  {
    title: "Bluon AI MasterMechanic",
    description: `An tech support chatbot for the HVAC technicians on the field`,
    href: "https://www.bluon.ai",
    date: /* @__PURE__ */ new Date("2024-05-23")
  },
  {
    title: "Packtime (Design Only)",
    description: `Schedule to meet with friends & teams`,
    href: "https://www.figma.com/design/yp5uPcV81F9ufxPCXh7DGE/Packtime?node-id=220-1306",
    date: /* @__PURE__ */ new Date("2024-04-15")
  },
  {
    title: "BudgetBird",
    description: "Budget Tracker App with Beautiful UI for college project",
    href: "https://budgetbird.vercel.app/",
    date: /* @__PURE__ */ new Date("2024-04-30")
  },
  {
    title: "Meowrite",
    description: "AI cover letter generator for job searching",
    href: "https://www.meowrite.com/",
    date: /* @__PURE__ */ new Date("2024-02-08")
  },
  {
    title: "Jello (Failed to Launch)",
    description: "Language learning through progressively harder audio challenges",
    href: "https://learnwithjello.com/",
    date: /* @__PURE__ */ new Date("2023-12-08")
  },
  {
    title: "weibozhang.com v2",
    description: `Turned my website into a blog using a nextjs template. Thought it was overcomplicated but did enjoy the process of blogging.`,
    date: /* @__PURE__ */ new Date("2023-11-13"),
    href: "https://blog-theonlyhamstertoh.vercel.app/"
  },
  {
    title: "SRWC Go App",
    description: `Reverse-engineers the CSULB SRWC App to generate barcode entry codes into the gym and view schedule without the bugginess of the app`,
    date: /* @__PURE__ */ new Date("2023-11-01"),
    href: "https://srwc.vercel.app/"
  },
  {
    title: "Musigroove ",
    description: `Timestamp your dance performance song for easy practice sessions`,
    date: /* @__PURE__ */ new Date("2023-09-23"),
    href: "https://musigroove.vercel.app/"
  },
  {
    title: "Mapbility (Never Launch)",
    description: "Map for the disabled to find accessible routes for universities",
    href: "https://mapbility.com/",
    date: /* @__PURE__ */ new Date("2023-09-16")
  },
  {
    title: "Cloudbear Discord Bot",
    description: "Language translation for discord servers. Includes auto-translation mode, quick translation, etc",
    href: "",
    date: /* @__PURE__ */ new Date("2023-09-16")
  },
  {
    title: "Project Webinar (Failed to Launch)",
    description: "Monetize virtual meets for educators and influencers with ease",
    href: "https://project-webinar.vercel.app/",
    date: /* @__PURE__ */ new Date("2023-03-04")
  },
  {
    title: "Moonwish Studios",
    description: `Co-founded a legal business entity that designed and developed modern responsive websites for local businesses in Orange County`,
    href: "https://www.moonwishstudios.com/",
    date: /* @__PURE__ */ new Date("2022-11-23")
  },
  {
    title: "Web Chatroom",
    description: `Built a fullstack live chatroom with websockets and express`,
    href: "https://github.com/Theonlyhamstertoh/websocket-chatroom",
    date: /* @__PURE__ */ new Date("2022-06-07")
  },
  {
    title: "weibozhang.com V1",
    description: `Built with a lovely interactive 3D mesh sphere with Just the Two of Us playing. Was super laggy but really proud of it`,
    date: /* @__PURE__ */ new Date("2021-08-28"),
    href: "https://portfolio-site-c03bilau5-theonlyhamstertoh.vercel.app/"
  },
  {
    title: "3D Maze Runner Game",
    description: `Built a randomly 3d generated maze game to play `,
    href: "https://maze-runner-theta.vercel.app/",
    date: /* @__PURE__ */ new Date("2021-08-25")
  },
  {
    title: "Stacks (Web Game)",
    description: `Attempt to stack as many blocks as you can!`,
    date: /* @__PURE__ */ new Date("2021-07-21"),
    href: "https://stacks-iota.vercel.app/"
  },
  {
    title: "Inventory App",
    description: `Track inventory. Made for Odin Project.`,
    date: /* @__PURE__ */ new Date("2021-07-23"),
    href: "https://github.com/Theonlyhamstertoh/inventory-app"
  },
  {
    title: "Ghost City",
    description: `A ThreeJS project of a city`,
    date: /* @__PURE__ */ new Date("2021-06-23"),
    href: "https://cvprojectapp.netlify.app/"
  },
  {
    title: "Haunted House",
    description: `Got into ThreeJS to create 3D worlds in website. This has a haunted house with bunch of coffins surrounding it.`,
    date: /* @__PURE__ */ new Date("2021-06-22"),
    href: "https://cvprojectapp.netlify.app/"
  },
  {
    title: "CV Project",
    description: `Create your resume/cv and print! Was very proud of this.`,
    date: /* @__PURE__ */ new Date("2021-06-16"),
    href: "https://cvprojectapp.netlify.app/"
  },
  {
    title: "Planet Cards",
    description: `Memory card game around planets. I am so happy that I have over 100+ plays on the leaderboard!`,
    date: /* @__PURE__ */ new Date("2021-06-11"),
    href: "https://planet-cards.vercel.app/"
  },
  {
    title: "Weather App",
    description: "Weather app made for Odin Project.",
    date: /* @__PURE__ */ new Date("2021-05-02"),
    href: "https://theonlyhamstertoh.github.io/weatherapp/"
  },
  {
    title: "Todo List",
    description: "Todo list made for Odin Project",
    date: /* @__PURE__ */ new Date("2021-04-11"),
    href: "https://github.com/Theonlyhamstertoh/todo-list"
  },
  {
    title: "Restauraunt App",
    description: "Restauraunt Website made for Odin Project",
    date: /* @__PURE__ */ new Date("2021-03-31"),
    href: "https://theonlyhamstertoh.github.io/restaurant/"
  },
  {
    title: "Tic Tac Toe",
    description: "Made for Odin Project. Most popular project by far!",
    date: /* @__PURE__ */ new Date("2021-03-30"),
    href: "https://theonlyhamstertoh.github.io/tictactoe/"
  },
  {
    title: "Library Project",
    description: "Keep track of books you read. Made for Odin Project",
    date: /* @__PURE__ */ new Date("2021-03-04"),
    href: "https://theonlyhamstertoh.github.io/libraryProject/"
  },
  {
    title: "Calculator App",
    description: "Made for Odin Project. Third real app I ever made!",
    date: /* @__PURE__ */ new Date("2021-02-19"),
    href: "https://theonlyhamstertoh.github.io/calculator-app/"
  },
  {
    title: "PixelArt",
    description: "Pixel Art Drawer.",
    date: /* @__PURE__ */ new Date("2021-02-11"),
    href: "https://theonlyhamstertoh.github.io/pixel-art-creator/"
  },
  {
    title: "Rock Paper Scissor",
    description: "Second real app I made for Odin Project!",
    date: /* @__PURE__ */ new Date("2021-01-23"),
    href: "https://theonlyhamstertoh.github.io/rock-paper-scissor-game/"
  },
  {
    title: "Lottery",
    description: "First real app I made!",
    date: /* @__PURE__ */ new Date("2021-01-15"),
    href: "https://theonlyhamstertoh.github.io/lottery-game/"
  },
  {
    title: "Google Homepage",
    description: "The beginning of everything. The start of Odin Project back in 2021!",
    date: /* @__PURE__ */ new Date("2021-01-03"),
    href: "https://theonlyhamstertoh.github.io/google-homepage/"
  }
];

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl mx-auto mt-3 divide-y divide-gray-200 dark:divide-gray-700"> <div class="gap-4 columns-2xs"> ${projectsData.map(({ href, title, date, description }) => renderTemplate`<article class="mb-4 break-inside-avoid-column "> <div${addAttribute(` rounded-md bg-zinc-50 border border-zinc-100  dark:border-gray-700`, "class")}> <div class="p-6"> <time class="font-light text-zinc-500 "${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleString("en-us", {
    month: "long",
    year: "numeric"
  })} </time> <h2 class="text-2xl font-medium leading-8 tracking-tight ">${title}</h2> <p class="mb-3 text-gray-500 max-w-none dark:text-gray-400">${description}</p> <a${addAttribute(href, "href")} target="_blank" class="">
Visit &rarr;
</a> </div> </div> </article>`)} </div> </div> ` })}`;
}, "/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/projects/index.astro", void 0);

const $$file$1 = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/projects/index.astro";
const $$url$1 = "/projects";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/weibozhang/Documents/code/js/weibozhang.com/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$1 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { icon, label, href, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" class="flex items-center justify-center gap-1 p-2 text-sm transition border rounded-lg max-w-32 grow hover:rotate-2 bg-zinc-50 border-zinc-100 sm:text-base sm:px-4 sm:gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5 sm:size-6 shrink-0 " + className, "name": icon })} ${label} </a>`;
}, "/Users/weibozhang/Documents/code/js/weibozhang.com/src/components/link.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const imageFiles = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/static/images/gallery/Shanghai-trip-2024-2.png": () => import('../Shanghai-trip-2024-2_DF3ogoQz.mjs'),"/src/static/images/gallery/Shanghai-trip-2024-lbqa-029.jpg": () => import('../Shanghai-trip-2024-lbqa-029_C1ZzzAKp.mjs'),"/src/static/images/gallery/Shanghai-trip-2024-lbqa-1.png": () => import('../Shanghai-trip-2024-lbqa-1_D1Un5ZxM.mjs'),"/src/static/images/gallery/Shanghai-trip-2024-lbqa-139.jpg": () => import('../Shanghai-trip-2024-lbqa-139_DS78Nll9.mjs'),"/src/static/images/gallery/Shanghai-trip-2024-lbqa-141.jpg": () => import('../Shanghai-trip-2024-lbqa-141_CdMfcS54.mjs'),"/src/static/images/gallery/Shanghai-trip-2024-lbqa-144.jpg": () => import('../Shanghai-trip-2024-lbqa-144_BVp5Hj9y.mjs'),"/src/static/images/gallery/Shanghai-trip-2024-lbqa-260.jpg": () => import('../Shanghai-trip-2024-lbqa-260_DzCtff1x.mjs'),"/src/static/images/gallery/Shanghai-trip-2024-lbqa-261.jpg": () => import('../Shanghai-trip-2024-lbqa-261_gRqWaEF0.mjs'),"/src/static/images/gallery/Shanghai-trip-2024-lbqa-265.jpg": () => import('../Shanghai-trip-2024-lbqa-265_BNGvPUrO.mjs'),"/src/static/images/gallery/gallery-1.png": () => import('../gallery-1_Dq1LZeXQ.mjs'),"/src/static/images/gallery/gallery-2.png": () => import('../gallery-2_Bz0njFTj.mjs'),"/src/static/images/gallery/gallery-3.png": () => import('../gallery-3_CBHkf8Dy.mjs'),"/src/static/images/gallery/gallery-4.png": () => import('../gallery-4_CjZdCN5T.mjs'),"/src/static/images/gallery/gallery-5.jpg": () => import('../gallery-5_CUETQuet.mjs'),"/src/static/images/gallery/gallery-6.jpg": () => import('../gallery-6_C2885SPF.mjs'),"/src/static/images/gallery/qingdao-trip-2024-lbqa-128.jpg": () => import('../qingdao-trip-2024-lbqa-128_DPlr7Amx.mjs'),"/src/static/images/gallery/qingdao-trip-2024-lbqa-134.jpg": () => import('../qingdao-trip-2024-lbqa-134_DdB2eCWm.mjs'),"/src/static/images/gallery/qingdao-trip-2024-lbqa-138.jpg": () => import('../qingdao-trip-2024-lbqa-138_DOMejbG-.mjs')}), () => "/src/static/images/gallery/*{jpeg,jpg,png,gif}");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-dotted-blur -z-10" data-astro-cid-j7pv25f6></div> <main class="" data-astro-cid-j7pv25f6> <div class="max-w-xl mx-auto" data-astro-cid-j7pv25f6> <h1 class="mt-8 mb-2 text-4xl tracking-wide text-center md:text-7xl font-cal font text-zinc-800" data-astro-cid-j7pv25f6>
Weibo Zhang
</h1> <p class="mb-4 text-sm font-light text-center text-zinc-800" data-astro-cid-j7pv25f6>
Traveler | Software Developer | Photographer
</p> </div> <div class="flex flex-col items-center justify-center max-w-2xl p-6 mx-auto my-8 border rounded-lg h-fit border-zinc-100" data-astro-cid-j7pv25f6> <p class="text-sm leading-loose text-center sm:leading-loose sm:text-base text-zinc-800 text-balance" data-astro-cid-j7pv25f6>
Hi, I'm Weibo. I'm a current college student studying Computer Science. In my free time, I am probably
                dreaming of travel plans, freestyling to music, programming passion projects, journaling, and being a
                homebody :D Contact me
</p> <div class="flex flex-wrap justify-center gap-3 my-6" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Link", $$Link, { "class": "text-[#0e76a8]", "href": "https://www.linkedin.com/in/weibozhang/", "icon": "tabler:brand-linkedin", "label": "LinkedIn", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Link", $$Link, { "href": "https://github.com/Theonlyhamstertoh", "icon": "tabler:brand-github", "label": "Github", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Link", $$Link, { "class": "text-green-400", "href": "https://open.spotify.com/user/eswggww5eu0qes3rs778hsrxj?si=8395e09dbdb34a56", "icon": "tabler:brand-spotify-filled", "label": "Spotify", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Link", $$Link, { "class": "text-[#5865F2]", "href": "https://discord.gg/sjNE8rPSMM", "icon": "tabler:brand-discord-filled", "label": "Discord", "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="max-w-6xl mx-auto columns-3xs" data-astro-cid-j7pv25f6> ${imageFiles.map((img) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": img.default, "width": 800, "alt": "Travel Photos I took during my time abroad and on road trips", "class": `mb-3 w-full rounded-md hover:rotate-2 transition hover:shadow-lg hover:outline outline-zinc-900 `, "data-astro-cid-j7pv25f6": true })}`)} </div> </main> ` })} `;
}, "/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/index.astro", void 0);

const $$file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };