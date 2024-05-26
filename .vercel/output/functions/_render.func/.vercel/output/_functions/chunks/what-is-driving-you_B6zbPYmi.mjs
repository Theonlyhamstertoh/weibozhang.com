import { q as Fragment, _ as __astro_tag_component__, t as createVNode } from './astro_zuKL0lfp.mjs';
import { a as $$Image } from './pages/blog_Y4lcYjz5.mjs';
import 'clsx';

const frontmatter = {
  "title": "What is actually driving you to do things?",
  "date": "2023-09-11",
  "tags": ["reflection"],
  "published": true,
  "description": "What are your goals? What are you driven by? What beliefs or identities are tied to those goals?",
  "authors": ["default"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["I tend to have a lot of lofty, big aspiring goals. Goals that are a little too ambitious and hard to take action upon. Yet interestingly, the more crazy they sound to others, they more pushback they have, the more stubborn and deadlocked I become with the ideas. It is certainly counterintuitive (and a bad idea) to shut off the logical side of my brain and reject any sort of common sense. As an example, I desperatedly and strongly believed studying abroad in Japan for a whole year would be an invaluable experience. I was blinded by this vision that I ignored the financial struggles I would have to make ends meet. I would be living a brutally frugal lifestyle without much space to travel and explore. I\nwould drain away all of my savings and missed out on opportunities back at home. Plus, I didn’t really consider if I would actually enjoy ", createVNode(_components.strong, {
        children: "living in Japan for a whole year"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Falling in love with an idea is blinding. Now, I have gotten better at recognizing these moments of stubbornness in me but I still struggle."
    }), "\n", createVNode(_components.p, {
      children: ["What started to help me shift away from this way of thinking is asking myself: ", createVNode(_components.strong, {
        children: "what is driving me to be like this?"
      }), "? What beliefs or identities do I have that is being challenged? Can I be okay with another plan?"]
    }), "\n", createVNode(_components.p, {
      children: "I was driven by the wish to be independent and be free deep down. I was in loved with the future version of myself, confident and joyful, living in a foreign country, exploring, and having an interesting life. I had a belief that Japan would ‘save’ and magically transform me."
    }), "\n", createVNode(_components.p, {
      children: ["It really revealed a deeper issue with myself. At that time, a year ago, I could not take ", createVNode(_components.strong, {
        children: "no"
      }), " for an answer. I felt lack of confidence in myself and my social life. What I really needed was working on myself, working on my social life, working on learning a “no” is not an attack on my identity/character."]
    }), "\n", createVNode(_components.p, {
      children: "I think I did well since then and it is something I will continue keep in mind."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "What about you? What are your goals? What is driving you? What beliefs/identities are tied to your goals?"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/2023/what-is-driving-you.mdx";
const file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/what-is-driving-you.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/what-is-driving-you.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
