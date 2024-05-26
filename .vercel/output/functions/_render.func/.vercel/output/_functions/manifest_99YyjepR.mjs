import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_zuKL0lfp.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.DexTYpRO.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.DexTYpRO.css"},{"type":"inline","content":"@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.nav-item[data-astro-cid-5knycien]{border-radius:.375rem;padding:.25rem .5rem;outline-color:#f4f4f5;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.nav-item[data-astro-cid-5knycien]:hover{--tw-rotate: 3deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity));outline-style:solid}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.DexTYpRO.css"},{"type":"inline","content":"@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.nav-item[data-astro-cid-5knycien]{border-radius:.375rem;padding:.25rem .5rem;outline-color:#f4f4f5;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.nav-item[data-astro-cid-5knycien]:hover{--tw-rotate: 3deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity));outline-style:solid}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/now","isIndex":false,"type":"page","pattern":"^\\/now\\/?$","segments":[[{"content":"now","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/now.mdx","pathname":"/now","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.DexTYpRO.css"},{"type":"inline","content":"@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.nav-item[data-astro-cid-5knycien]{border-radius:.375rem;padding:.25rem .5rem;outline-color:#f4f4f5;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.nav-item[data-astro-cid-5knycien]:hover{--tw-rotate: 3deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity));outline-style:solid}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZL4CV8D.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/about.DexTYpRO.css"},{"type":"inline","content":"@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans Variable;font-style:normal;font-display:swap;font-weight:100 1000;src:url(/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.nav-item[data-astro-cid-5knycien]{border-radius:.375rem;padding:.25rem .5rem;outline-color:#f4f4f5;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.nav-item[data-astro-cid-5knycien]:hover{--tw-rotate: 3deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-bg-opacity: 1;background-color:rgb(250 250 250 / var(--tw-bg-opacity));outline-style:solid}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n@font-face{font-family:CalSans;src:url(/fonts/CalSans-SemiBold.ttf) format(\"truetype\");font-weight:400;font-style:normal;font-display:swap}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/about.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/now.mdx",{"propagation":"none","containsHead":true}],["/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/projects/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_Cd_0FdbP.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_MB7ukBFa.mjs","/src/pages/now.mdx":"chunks/pages/now_B8lg48ZF.mjs","\u0000@astrojs-manifest":"manifest_99YyjepR.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_B8c9DH8d.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_BkQSisDT.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_D0vF3f10.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._CzhKdb-Z.mjs","\u0000@astro-page:src/pages/now@_@mdx":"chunks/now_DfTG8R1n.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_Drb21M8R.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CqU_-FqL.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/a-promise-to-my-friend.mdx?astroContentCollectionEntry=true":"chunks/a-promise-to-my-friend_DcFJaOn1.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/choosing-lifestyles.mdx?astroContentCollectionEntry=true":"chunks/choosing-lifestyles_Dnd6OYqZ.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/embracing-vulnerability.mdx?astroContentCollectionEntry=true":"chunks/embracing-vulnerability_Duqp8krm.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/intentional-vs-passive-education.mdx?astroContentCollectionEntry=true":"chunks/intentional-vs-passive-education_bXh6KqdB.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/japan-spending-summary.mdx?astroContentCollectionEntry=true":"chunks/japan-spending-summary_lNVV4smU.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/october-2023-review.mdx?astroContentCollectionEntry=true":"chunks/october-2023-review_DHUHLWeh.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/roadmap-to-finding-first-customers-as-tech-person.mdx?astroContentCollectionEntry=true":"chunks/roadmap-to-finding-first-customers-as-tech-person_BIx9NHgM.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/september-2023-review.mdx?astroContentCollectionEntry=true":"chunks/september-2023-review_BnOGYOMW.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/slowing-down-my-life.mdx?astroContentCollectionEntry=true":"chunks/slowing-down-my-life_BlugzNI0.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/what-is-driving-you.mdx?astroContentCollectionEntry=true":"chunks/what-is-driving-you_lWY3KgSF.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/what-my-future-self-will-regret.mdx?astroContentCollectionEntry=true":"chunks/what-my-future-self-will-regret_CEaQ9PjS.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/why-I-travel.mdx?astroContentCollectionEntry=true":"chunks/why-I-travel_CGKdAVnN.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2024/blog-refresh.mdx?astroContentCollectionEntry=true":"chunks/blog-refresh_C8GBqxVt.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2024/moving-out.mdx?astroContentCollectionEntry=true":"chunks/moving-out_DdUmSKSw.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/a-promise-to-my-friend.mdx?astroPropagatedAssets":"chunks/a-promise-to-my-friend_cBVK76G6.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/choosing-lifestyles.mdx?astroPropagatedAssets":"chunks/choosing-lifestyles_Dp80W0x9.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/embracing-vulnerability.mdx?astroPropagatedAssets":"chunks/embracing-vulnerability_Cl9nGXb3.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/intentional-vs-passive-education.mdx?astroPropagatedAssets":"chunks/intentional-vs-passive-education_DBqogAqE.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/japan-spending-summary.mdx?astroPropagatedAssets":"chunks/japan-spending-summary_B97Bv0as.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/october-2023-review.mdx?astroPropagatedAssets":"chunks/october-2023-review_Bmt5cBjq.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/roadmap-to-finding-first-customers-as-tech-person.mdx?astroPropagatedAssets":"chunks/roadmap-to-finding-first-customers-as-tech-person_eUtEA4yO.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/september-2023-review.mdx?astroPropagatedAssets":"chunks/september-2023-review_DKha-3Ie.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/slowing-down-my-life.mdx?astroPropagatedAssets":"chunks/slowing-down-my-life_BogaLKG6.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/what-is-driving-you.mdx?astroPropagatedAssets":"chunks/what-is-driving-you_DVBISFzj.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/what-my-future-self-will-regret.mdx?astroPropagatedAssets":"chunks/what-my-future-self-will-regret_DGZPEJfw.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/why-I-travel.mdx?astroPropagatedAssets":"chunks/why-I-travel_CQNLMzJ3.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2024/blog-refresh.mdx?astroPropagatedAssets":"chunks/blog-refresh_D_0TxU_W.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2024/moving-out.mdx?astroPropagatedAssets":"chunks/moving-out_BHzTgu_o.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/Shanghai-trip-2024-2.png":"chunks/Shanghai-trip-2024-2_DF3ogoQz.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/Shanghai-trip-2024-lbqa-029.jpg":"chunks/Shanghai-trip-2024-lbqa-029_C1ZzzAKp.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/Shanghai-trip-2024-lbqa-1.png":"chunks/Shanghai-trip-2024-lbqa-1_D1Un5ZxM.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/Shanghai-trip-2024-lbqa-139.jpg":"chunks/Shanghai-trip-2024-lbqa-139_DS78Nll9.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/Shanghai-trip-2024-lbqa-141.jpg":"chunks/Shanghai-trip-2024-lbqa-141_CdMfcS54.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/Shanghai-trip-2024-lbqa-144.jpg":"chunks/Shanghai-trip-2024-lbqa-144_BVp5Hj9y.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/Shanghai-trip-2024-lbqa-260.jpg":"chunks/Shanghai-trip-2024-lbqa-260_DzCtff1x.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/Shanghai-trip-2024-lbqa-261.jpg":"chunks/Shanghai-trip-2024-lbqa-261_gRqWaEF0.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/Shanghai-trip-2024-lbqa-265.jpg":"chunks/Shanghai-trip-2024-lbqa-265_BNGvPUrO.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-1.png":"chunks/gallery-1_Dq1LZeXQ.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-2.png":"chunks/gallery-2_Bz0njFTj.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-3.png":"chunks/gallery-3_CBHkf8Dy.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-4.png":"chunks/gallery-4_CjZdCN5T.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-5.jpg":"chunks/gallery-5_CUETQuet.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-6.jpg":"chunks/gallery-6_C2885SPF.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/qingdao-trip-2024-lbqa-128.jpg":"chunks/qingdao-trip-2024-lbqa-128_DPlr7Amx.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/qingdao-trip-2024-lbqa-134.jpg":"chunks/qingdao-trip-2024-lbqa-134_DdB2eCWm.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/qingdao-trip-2024-lbqa-138.jpg":"chunks/qingdao-trip-2024-lbqa-138_DOMejbG-.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/a-promise-to-my-friend.mdx":"chunks/a-promise-to-my-friend_DZNoDIo8.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/choosing-lifestyles.mdx":"chunks/choosing-lifestyles_IO8AU8di.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/embracing-vulnerability.mdx":"chunks/embracing-vulnerability_BRIktAGG.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/intentional-vs-passive-education.mdx":"chunks/intentional-vs-passive-education_QaHdTWN5.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/japan-spending-summary.mdx":"chunks/japan-spending-summary_DzcfIoui.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/october-2023-review.mdx":"chunks/october-2023-review_GmkChHgV.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/roadmap-to-finding-first-customers-as-tech-person.mdx":"chunks/roadmap-to-finding-first-customers-as-tech-person_BMNOkfee.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/september-2023-review.mdx":"chunks/september-2023-review_CUe7pelx.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/slowing-down-my-life.mdx":"chunks/slowing-down-my-life_BXTwhjUK.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/what-is-driving-you.mdx":"chunks/what-is-driving-you_CfN7wbx0.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/what-my-future-self-will-regret.mdx":"chunks/what-my-future-self-will-regret_-ffWKLmd.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/why-I-travel.mdx":"chunks/why-I-travel_DBOKbhiX.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2024/blog-refresh.mdx":"chunks/blog-refresh_BcYLxRSi.mjs","/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2024/moving-out.mdx":"chunks/moving-out_DqxkwYEE.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DZL4CV8D.js","@astrojs/react/client.js":"_astro/client.Df8ih4qs.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/Shanghai-trip-2024-lbqa-139.CiwW8dbW.jpg","/_astro/Shanghai-trip-2024-lbqa-029.ClpxZSni.jpg","/_astro/Shanghai-trip-2024-lbqa-260.FPeauCtK.jpg","/_astro/Shanghai-trip-2024-lbqa-144.BrClyoEi.jpg","/_astro/Shanghai-trip-2024-lbqa-141.VJJYmpnI.jpg","/_astro/Shanghai-trip-2024-lbqa-261.gnompB7q.jpg","/_astro/Shanghai-trip-2024-lbqa-265.MB3GJseH.jpg","/_astro/qingdao-trip-2024-lbqa-128.kngobR72.jpg","/_astro/qingdao-trip-2024-lbqa-134.B3-1lbCv.jpg","/_astro/gallery-1.DQuP2FVk.png","/_astro/gallery-5.C6R4DF3l.jpg","/_astro/gallery-4.Bfa9LDsT.png","/_astro/Shanghai-trip-2024-lbqa-1.B1bKqTzU.png","/_astro/qingdao-trip-2024-lbqa-138.DVkSHJwh.jpg","/_astro/gallery-3.D__WaBYM.png","/_astro/gallery-6.DePoIXas.jpg","/_astro/Shanghai-trip-2024-2.IkUV1KDc.png","/_astro/dm-sans-latin-ext-wght-normal.D1bw2c55.woff2","/_astro/dm-sans-latin-wght-normal.DeBecvsH.woff2","/_astro/gallery-2.BhY_RVKT.png","/_astro/weibo-v2-website.BKTyrkTD.png","/_astro/japan-trip.C71OZNsi.jpg","/_astro/weibo-v1-website.k0unXflE.png","/_astro/about.DexTYpRO.css","/favicon.svg","/og-image.png","/_astro/client.Df8ih4qs.js","/_astro/hoisted.DZL4CV8D.js","/fonts/CalSans-SemiBold.ttf"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
