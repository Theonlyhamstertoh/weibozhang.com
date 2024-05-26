import { q as Fragment, _ as __astro_tag_component__, t as createVNode } from './astro_zuKL0lfp.mjs';
import { a as $$Image } from './pages/blog_Y4lcYjz5.mjs';
import 'clsx';

const frontmatter = {
  "title": "Slowing down my life this October",
  "date": "2023-10-03",
  "tags": ["journal", ""],
  "published": true,
  "description": "I think it is kinda funny and sad and dysfunctional that my mind is so stupidly stuck with dreams, goals, and tasks, that I am not spending time planning my own birthday.",
  "authors": ["default"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "my-plans",
    "text": "My Plans"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["I think it is kinda funny and sad and dysfunctional that my mind is so stupidly stuck with dreams, goals, and tasks, that I am not spending time planning my own birthday. I guess I finally opened my eyes and took a good look at myself to see that I must ", createVNode(_components.em, {
        children: "slow down"
      }), ". I got nothing done as a result. Trying to balance doing this, doing that, talking to users, finding problems, while going to classes was taking a toll on my stability. I got really judgmental too. I saw peoples’ progress as competitions. And I didn’t feel good about myself."]
    }), "\n", createVNode(_components.p, {
      children: "I was reflecting about this today while I had a nose bleed in the shower. Already 5 nose bleeds in the last 7 days. My health was taking a toll too. I thoroughly appreciate the startup world but all I thought about everyday was looking for a problem. If you talked to me about your life, I was zooming pass listening for an business idea."
    }), "\n", createVNode(_components.p, {
      children: "To just give you an idea of what was on mind, I wanted to:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Start a youtube channel and upload six videos"
      }), "\n", createVNode(_components.li, {
        children: "Talk and help 70 people (Such an vague goal I know)"
      }), "\n", createVNode(_components.li, {
        children: "Demo day pitch to investors of a startup idea November 3rd"
      }), "\n", createVNode(_components.li, {
        children: "Learning a new programming language (Ruby)"
      }), "\n", createVNode(_components.li, {
        children: "Learning a new web framework (Svelte)"
      }), "\n", createVNode(_components.li, {
        children: "Working for Bluon"
      }), "\n", createVNode(_components.li, {
        children: "Find coaching in startup"
      }), "\n", createVNode(_components.li, {
        children: "Do well on my university midterm exams"
      }), "\n", createVNode(_components.li, {
        children: "keep spendings below $150 a week and save the rest (not good)"
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Celebrate my birthday"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Yep. I had an issue. I overestimated my own abilities and got too ambitious. I obviously can’t do all of that. I think I pressured myself to do this because I wanted to hit “success” early in life. But who am I kidding? Who do I want to impress? I tell myself I will never be materialistic nor buy expensive things. But I overvalue money and want to hoard it. Take for example, to keep my spendings below $150, I would skip buying lunch. I would scrape enough gas to finish for the week. I only refilled to $25 every time. I limited the amount of times I can take dance classes too. As a result, my health decline while the savings increased."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "my-plans",
      children: "My Plans"
    }), "\n", createVNode(_components.p, {
      children: "I want to be living healthy. I want to have a good birthday celebration. I want to do well in school. I want to learn and create a business. But I will limit what I can pursue. Last week, as I was about to exit an parking structure, this beautiful and gracious porsche slammed into the coffee shop, 6-7 feet outside the exit. He pressed on the gas pedal so fast that he lost control. He tried to go too fast when going slow would of avoided it. Later, the security lady came over and told me to “go slow”. I took it deeply."
    }), "\n", createVNode(_components.p, {
      children: "When you go too fast, you end up not going far. When you go slow, you go smooth, and smooth if fast as the Navy Seals say."
    }), "\n", createVNode(_components.p, {
      children: "I want to take my life slower. I want to let go of requirements for this month. I want to do less. I want to get a healthy schedule right for me and focus on enjoying. Learn, of course, but startups is not my priority this month. It’s my last few days being 18 after all. I want to remember it."
    }), "\n", createVNode(_components.p, {
      children: "Goals that I will pursue"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Priority first in birthday celebration (this two upcoming week)"
      }), "\n", createVNode(_components.li, {
        children: "Working for Bluon"
      }), "\n", createVNode(_components.li, {
        children: "Doing well in my classes"
      }), "\n", createVNode(_components.li, {
        children: "Learning Svelte"
      }), "\n", createVNode(_components.li, {
        children: "Healthy & Good Lifestyle"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "You’ll see if I listened to my own advice in a month : )"
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

const url = "src/content/blog/2023/slowing-down-my-life.mdx";
const file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/slowing-down-my-life.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/slowing-down-my-life.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
