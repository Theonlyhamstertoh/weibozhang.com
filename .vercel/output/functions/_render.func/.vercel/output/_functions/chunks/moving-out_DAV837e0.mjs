import { q as Fragment, _ as __astro_tag_component__, t as createVNode } from './astro_zuKL0lfp.mjs';
import { a as $$Image } from './pages/blog_Y4lcYjz5.mjs';
import 'clsx';

const frontmatter = {
  "title": "To Any Students Moving Out Soon",
  "date": "May 26 2024",
  "published": true,
  "description": "Several tips and thoughts I have for those moving out"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "in-all-seriousness",
    "text": "In All Seriousness"
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
      children: "Make time to untangle your thoughts. Make time to recognize unhealthy thought patterns you have."
    }), "\n", createVNode(_components.p, {
      children: "It is human to feel many emotions throughout your day. Happy, sad, cringe, joy, excited, and so on. Don’t deny feeling sad. Don’t hide you are feeling lonely. To think you need to always be happy and good is a lie."
    }), "\n", createVNode(_components.p, {
      children: "Live a life true to yourself. Know what makes you happy and what is not fun for you. You can decide everything for yourself now."
    }), "\n", createVNode(_components.p, {
      children: "When you are feeling sad or depressed, and its just you alone, I want you to know I feel them too. It’s rough, yep. Your friends are probably feeling them too. Instagram makes us all think everyone else is living perfect lives."
    }), "\n", createVNode(_components.p, {
      children: "Thoughts are thoughts. If you find yourself being negative again, it’s time to kick yourself out of that thought train."
    }), "\n", createVNode(_components.p, {
      children: "Always budget monthly. Put money into high yield savings account. Start your retirement account and invest. Dedicate money for fun and your happiness."
    }), "\n", createVNode(_components.p, {
      children: "Cherish what you have. You are about to move out soon. If you live with your parents, it will become rarer that you see them as often as you once did. You are beginning your own life."
    }), "\n", createVNode(_components.p, {
      children: "Take care of yourself, really really well. Because your mental wellbeing is everything. You might not cook any meal and rather go hungry because you can’t get out of bed. (Buy some instant frozen food to have for these occasions)"
    }), "\n", createVNode(_components.p, {
      children: "You can ignore the fear of missing out!"
    }), "\n", createVNode(_components.h2, {
      id: "in-all-seriousness",
      children: "In All Seriousness"
    }), "\n", createVNode(_components.p, {
      children: "Maybe I was a little too serious above, haha. I had a fantastic time living on my own since January 2024. I think I grown more appreciative of my friends and others. I’m more attentive to the way I make others feel. I’m more at peace with my current state in life. No one to compare to. No one to compete."
    }), "\n", createVNode(_components.p, {
      children: "If you are moving out, I congratulate you! And if it’s not time yet, that’s okay too."
    }), "\n", createVNode(_components.p, {
      children: "It has been roughly five months since I moved out. I am very fortunate to have the financial means to support myself and a car passed down from my parents. Without either of them, I don’t think I would be in the position I am today."
    }), "\n", createVNode(_components.p, {
      children: "My overall experience living on my own have been fantastic so far. Moving out has given me the freedom that I once craved for. Moving out has help heal the conflicts I had with my parents. Alongside, it made me become a more mature person too."
    }), "\n", createVNode(_components.p, {
      children: "I think everyone in their 18s, 19s, and early adulthood should have an experience living on their own. Living on my own had force me to take responsibility of my own life. I have to make breakfast, lunch, and dinner. I go to be active and work out. I had to dedicate time to groceries, to working, to time to go out with friends too."
    }), "\n", createVNode(_components.p, {
      children: "Living alone is great for personal development but it can be really rough too. If you don’t take care of yourself, you will eventually spiral downwards. If you don’t have roommates, you might end up not seeing anyone for several days. You might be too sad and depressed to get out of bed. Three meals eventually turns into one meal in the afternoon. Your clean room ends up becoming a mess of clothes and stuff everywhere. If you expect living alone and moving out to fix you, it wouldn’t change you without you doing something about it. And that “it” is untangling the problems that you have."
    }), "\n", createVNode(_components.p, {
      children: "It’s kinda like wishing to travel for long periods of time in the hope that you will figure who you are and change your life. Just like traveling, living on your own"
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

const url = "src/content/blog/2024/moving-out.mdx";
const file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2024/moving-out.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2024/moving-out.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
