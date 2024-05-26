import { q as Fragment, _ as __astro_tag_component__, t as createVNode } from './astro_zuKL0lfp.mjs';
import { a as $$Image } from './pages/blog_Y4lcYjz5.mjs';
import 'clsx';

const frontmatter = {
  "title": "October 2023 Review",
  "date": "2023-10-30",
  "tags": ["october", "review"],
  "published": true,
  "description": "A review of the month of October",
  "authors": ["default"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "october-goals",
    "text": "October Goals"
  }, {
    "depth": 3,
    "slug": "three-things-i-am-grateful-for",
    "text": "Three things I am grateful for:"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    del: "del",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "october-goals",
      children: "October Goals"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Put school first and give your 200% effort for each class"
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.del, {
          children: "Celebrate 19th birthday with friends @ the Beach"
        })
      }), "\n", createVNode(_components.li, {
        children: "Help 70 people in a impactful way this month"
      }), "\n", createVNode(_components.li, {
        children: "Keep spending below $150 per week, save the rest"
      }), "\n", createVNode(_components.li, {
        children: "Blog 8+ articles that is honest, vulnerable, and valuable"
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.del, {
          children: "Sustain your empowering habits & routines"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.del, {
          children: "Learn Svelte Framework"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "I don’t think that I did as well as I planned for this October. This october did not went as I initially planned but there are still some things I am proud of:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "I am very happy that I found a passion and lifestyle of dancing. I tried out contemporary dance for the first time this month. I am also happy that I made improvements in my dance"
      }), "\n", createVNode(_components.li, {
        children: "I am proud of myself that I reverse-engineered my school’s app, uncovering its API, the methods it calls, and implementing them in a web browser that I utilize myself often. I almost give up on every obstacle that I encountered and I learned that if I just have enough will to stay in the game for just a bit longer, I can find the way."
      }), "\n", createVNode(_components.li, {
        children: "I am proud that I put a lot more energy into self care. I feel happier. I feel more joyful in who I am. I have a better self-image and feel good."
      }), "\n", createVNode(_components.li, {
        children: "I started dressing better! I think! I come to learn that dressing well is more than the surface appearance. If dressing well makes you feel confident, makes you feel good to be in your own bones, then dressing well is an important part of self-care. As long as you aren’t trying to one up someone or dress all designer labels I guess."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "three-things-i-am-grateful-for",
      children: "Three things I am grateful for:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "I am grateful to dancing. I come to realize what passion is and how much of an gift it is to have something I love to do. I am grateful to the community that surrounds dancing and the energy of the teachers I take with. I am grateful to the friends that came dancing with me. They are awesome :3"
      }), "\n", createVNode(_components.li, {
        children: "I am grateful to having an remote job that gives me the income and flexibility to do the things that I deeply care for."
      }), "\n", createVNode(_components.li, {
        children: "I am grateful to have loving and caring friends."
      }), "\n"]
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

const url = "src/content/blog/2023/october-2023-review.mdx";
const file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/october-2023-review.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/october-2023-review.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
