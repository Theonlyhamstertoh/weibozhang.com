import { q as Fragment, _ as __astro_tag_component__, t as createVNode } from './astro_zuKL0lfp.mjs';
import { a as $$Image } from './pages/blog_CTbzDhgD.mjs';
import 'clsx';

const __0__________static_images_blogs_japan_trip_jpg__ = new Proxy({"src":"/_astro/japan-trip.C71OZNsi.jpg","width":1080,"height":1616,"format":"jpg","orientation":8}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/blogs/japan-trip.jpg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "Why I Travel",
  "date": "2023-09-09",
  "tags": ["travel", "growth"],
  "published": true,
  "description": "My experiences and reflection from my trip to Japan",
  "authors": ["default"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    "astro-image": "astro-image",
    p: "p",
    strong: "strong",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Since my trip to Japan, many of my friends and family pointed out the fact that I have changed. I feel that way too myself but it felt more like a gradual slow change over my time traveling."
    }), "\n", createVNode(_components.p, {
      children: "Before, I used to be more socially anxious. Going out to places in public often give me anxious butterflies. I felt uncomfortable to be outside alone. I was shy and felt insecured about myself in public."
    }), "\n", createVNode(_components.p, {
      children: "Nowadays, I know that I can talk to people. If I am lost or need help, I am thrilled to strike up a conversation. I no longer care as much as what others think about me. I used to seek to impress new people I met in hopes that they like me more, but now I’m okay. I don’t need to impress anymore. It is not my “task” to worry if they like me or not. My task is to be myself."
    }), "\n", createVNode(_components.p, {
      children: ["I also came to understand that ", createVNode(_components.strong, {
        children: "what felt important before was no longer as important as I thought."
      }), " Priorities change. I no longer felt the need to be “competing” with others. I want to do the things that mattered to me."]
    }), "\n", createVNode(_components.p, {
      children: "I felt confident, curious, and happier in the process. I won’t always be happy but I felt I can be truly present when happy more often."
    }), "\n", createVNode(_components.p, {
      children: "I want to travel now because I want to keep growing and learning. I want to travel because it is exciting. I want to travel because I become a better me in the process."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "Photo of Tokyo City",
        src: __0__________static_images_blogs_japan_trip_jpg__
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

const url = "src/content/blog/2023/why-I-travel.mdx";
const file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/why-I-travel.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/why-I-travel.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
