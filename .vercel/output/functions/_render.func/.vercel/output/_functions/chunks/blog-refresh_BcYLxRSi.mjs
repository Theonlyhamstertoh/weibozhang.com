import { q as Fragment, _ as __astro_tag_component__, t as createVNode } from './astro_zuKL0lfp.mjs';
import { a as $$Image } from './pages/blog_CTbzDhgD.mjs';
import 'clsx';

const __0__________static_images_blogs_weibo_v1_website_png__ = new Proxy({"src":"/_astro/weibo-v1-website.k0unXflE.png","width":2744,"height":1320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/blogs/weibo-v1-website.png";
							}
							
							return target[name];
						}
					});

const __1__________static_images_blogs_weibo_v2_website_png__ = new Proxy({"src":"/_astro/weibo-v2-website.BKTyrkTD.png","width":2846,"height":1500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/blogs/weibo-v2-website.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "2024 Blog Refresh v3",
  "date": "May 22 2024",
  "published": true,
  "description": "I revamped my blog the last few days with the goal of simplicity."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "astro",
    "text": "Astro"
  }, {
    "depth": 2,
    "slug": "making-it-personal",
    "text": "Making It Personal"
  }, {
    "depth": 2,
    "slug": "its-nice-to-have-your-own-little-estate-on-the-internet",
    "text": "It’s nice to have your own little estate on the Internet"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    "astro-image": "astro-image",
    h2: "h2",
    p: "p",
    ...props.components
  }, _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I completedly revamped my blog the last few days with the main goal of simplicity. I want to share some things I learned along the process."
    }), "\n", createVNode(_components.h2, {
      id: "astro",
      children: "Astro"
    }), "\n", createVNode(_components.p, {
      children: "For the past few years, I been heavily leaning on NextJS for everything I build. I had only a hammer so I approached every project as a nail to be hammered. But after trying astro and building my blog on top of this framework, I see that I was really making it harder for myself by using NextJS for everything. Astro had built-in support for markdown files, meaning my markdown files automatically becomes a page route. I have only explored the basics of Astro but it is insane how little time it took me to redesign this site."
    }), "\n", createVNode(_components.p, {
      children: "As a comparison, here were the previous two versions of my website:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "Weibo Zhang Website Version 1",
        src: __0__________static_images_blogs_weibo_v1_website_png__
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        alt: "Weibo Zhang Website Version 2",
        src: __1__________static_images_blogs_weibo_v2_website_png__
      })
    }), "\n", createVNode(_components.h2, {
      id: "making-it-personal",
      children: "Making It Personal"
    }), "\n", createVNode(_components.p, {
      children: "The first version of my website was really personalized but I didn’t quite like it because I couldn’t share my learnings, thoughts as a blog would. The second version worked great as a blog but it felt heavily overcomplicated and complex that it deterred me from writing. With this third version, I want to be just be a space where I can share my hobbies, my writing, and what I’m doing now. Because that is what I genuinely care about."
    }), "\n", createVNode(_components.h2, {
      id: "its-nice-to-have-your-own-little-estate-on-the-internet",
      children: "It’s nice to have your own little estate on the Internet"
    }), "\n", createVNode(_components.p, {
      children: "I’m not the best writer at all and worse, reading my own blogs will make me cringe at it. But it’s like journaling to me, and one day 5-10 years from now, I’ll be able to look back at it and have a lil laugh."
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

const url = "src/content/blog/2024/blog-refresh.mdx";
const file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2024/blog-refresh.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2024/blog-refresh.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
