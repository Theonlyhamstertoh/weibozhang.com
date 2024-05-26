/* empty css                          */
import { q as Fragment, _ as __astro_tag_component__, t as createVNode } from '../astro_zuKL0lfp.mjs';
import { a as $$Image } from './blog_CTbzDhgD.mjs';
import 'clsx';

const MDXLayout = async function ({children}) {
  const Layout = (await import('../prerender_Cjg364kl.mjs').then(n => n.b)).default;
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../layouts/blog-layout.astro",
  "title": "What Am I Doing Now",
  "date": "May 25 2024",
  "published": true,
  "description": "This is what I am doing right now in my life"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "learning",
    "text": "Learning"
  }, {
    "depth": 2,
    "slug": "coding",
    "text": "Coding"
  }, {
    "depth": 2,
    "slug": "things-i-am-caring-more-about",
    "text": "Things I am caring more about"
  }, {
    "depth": 2,
    "slug": "music-i-been-listening-to-on-repeat-this-month",
    "text": "Music I been listening to on repeat this month"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I just finished my spring semester at my university. I’m now done with two years of college and turning 20 in October. Plan is to extend my apartment lease till the end of December and work fulltime at Bluon for the summer to save up as much money as I can. I’m pretty happy with where I am now. I joined a dance team at my university and performed on stage. I made many new friends. I traveled to China in January. I moved out to my own apartment. I learned to live on a tight budget, learned to cook, learned to take care of myself, and started investing and saving towards my retirement. I also started a second job working as an intern for a nonprofit organization in Long Beach (quitting end of May)."
    }), "\n", createVNode(_components.h2, {
      id: "learning",
      children: "Learning"
    }), "\n", createVNode(_components.p, {
      children: "Practicing Japanese to a conversational level. Reading one book a month at least. Become a better cook and try to make different cuisines. Learning to be more grateful."
    }), "\n", createVNode(_components.h2, {
      id: "coding",
      children: "Coding"
    }), "\n", createVNode(_components.p, {
      children: "Creating a sharable travel map app of where you been and where you been traveling in a asthetic way like LinkTree."
    }), "\n", createVNode(_components.h2, {
      id: "things-i-am-caring-more-about",
      children: "Things I am caring more about"
    }), "\n", createVNode(_components.p, {
      children: "It’s human to experience a range of emotions. Happy to sad. Clarity to confusion. Loved to lonely. And it goes the other way around. Thoughts are just thoughts. When I find myself feeling low, I am learning now that I am not taking care of myself well. If I take care of my lifestyle: sleeptime, sunshine, journaling, eating right, etc, I will eventually be good."
    }), "\n", createVNode(_components.p, {
      children: "Another is just to kick myself out of my negative thought patterns."
    }), "\n", createVNode(_components.h2, {
      id: "music-i-been-listening-to-on-repeat-this-month",
      children: "Music I been listening to on repeat this month"
    }), "\n", createVNode("iframe", {
      style: "border-radius:12px",
      src: "https://open.spotify.com/embed/track/4s5LsmjqGgpwftaPqgONLC?utm_source=generator",
      width: "100%",
      height: "152",
      frameBorder: "0",
      allowfullscreen: "",
      allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
      loading: "lazy"
    }), "\n", createVNode("iframe", {
      style: "border-radius:12px",
      src: "https://open.spotify.com/embed/track/5ydjxBSUIDn26MFzU3asP4?utm_source=generator",
      width: "100%",
      height: "152",
      frameBorder: "0",
      class: "mt-6",
      allowfullscreen: "",
      allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
      loading: "lazy"
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/now";
const file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/now.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/pages/now.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
