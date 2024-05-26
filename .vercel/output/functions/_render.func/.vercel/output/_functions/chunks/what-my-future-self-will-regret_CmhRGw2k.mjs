import { q as Fragment, _ as __astro_tag_component__, t as createVNode } from './astro_zuKL0lfp.mjs';
import { a as $$Image } from './pages/blog_Y4lcYjz5.mjs';
import 'clsx';

const frontmatter = {
  "title": "A letter of regrets from my future self",
  "date": "2023-11-13",
  "tags": ["letter", "reflection"],
  "published": true,
  "authors": ["default"]
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    hr: "hr",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "My future self will regret that I didn’t allow myself to be present in the moment. He regrets that I am always waiting for the future and not realizing that these precious hours will not come back."
    }), "\n", createVNode(_components.p, {
      children: "My future self will regret that I didn’t allow myself to be happy more. He would tell me that I don’t have to achieve this goal, this dream, this plan to be happy. I can be happy right now."
    }), "\n", createVNode(_components.p, {
      children: "My future self will regret that I missed out on enjoying college. He regrets that I didn’t take things slower, that I didn’t have to grind everyday on a project/business, that I didn’t have to say no to hangouts with friends."
    }), "\n", createVNode(_components.p, {
      children: "My future self will regret that I am not honest with myself. Follow your gut, he would tell me."
    }), "\n", createVNode(_components.p, {
      children: "My future self will regret that I didn’t have the courage for change nor the courage to fail bad. He would regret that I didn’t step out of my comfort spot. I don’t have to be ready to take a leap of faith. I cannot be ready for change. I have to make change to be ready."
    }), "\n", createVNode(_components.p, {
      children: "My future self will regret not spending more time with family. Move out later, he would tell me. Cherish these few more years with them. What is the hurry? Love them deeply. They are getting older"
    }), "\n", createVNode(_components.p, {
      children: "My future self will regret that I didn’t take care of my health, my body, and my mental care. Always maintain these, even at rock bottom. Because with them, you will bounce back. Without them, you will lose who you are."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "I don’t want to be living those regrets. But I know, five years from now, if I keep doing what I’m doing, I will have these exact regrets. This letter is a reminder to myself to be aware of what is important to me."
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

const url = "src/content/blog/2023/what-my-future-self-will-regret.mdx";
const file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/what-my-future-self-will-regret.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/what-my-future-self-will-regret.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
