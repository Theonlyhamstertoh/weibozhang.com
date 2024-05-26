import { q as Fragment, _ as __astro_tag_component__, t as createVNode } from './astro_zuKL0lfp.mjs';
import { a as $$Image } from './pages/blog_CTbzDhgD.mjs';
import 'clsx';

const frontmatter = {
  "title": "Focusing on lifestyles over goals",
  "date": "2023-10-23",
  "tags": ["reflection"],
  "published": true,
  "description": "",
  "authors": ["default"]
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "but-what-is-a-lifestyle",
    "text": "But what is a lifestyle?"
  }, {
    "depth": 3,
    "slug": "so-what-am-i-trying-to-say",
    "text": "So what am I trying to say?"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I turned 19 this month. And since my birthday, I have not done much at all. I feel like I have been in a constant state of fatigue. I’m feeling tired. Burnt out I suppose too and neglecting self care."
    }), "\n", createVNode(_components.p, {
      children: "I been honestly really distracted. I been staying up to 3-4 am lately scrolling through social media, afraid to put it down. I sleep late, I wake up late, I feel tired, I nap, and the cycle repeats. I think I have also been procrasinating on sitting in peace with myself. If I am constantly busy, either creating a project or scrolling through my phone, I can guilt-freely avoid thinking."
    }), "\n", createVNode(_components.p, {
      children: ["But thinking is a necessity to be doing. Sometimes, the thing that I desire most is time alone with myself. I want time to myself. Time in peace. Time in quietness. Time to write. ", createVNode(_components.strong, {
        children: "I always feel when I dedicate some time to myself, I regain back the real me"
      }), ", the sober tech-free, creative, childish, silly, funny, joyful me. The me with an idea of where he is moving towards in his life."]
    }), "\n", createVNode(_components.p, {
      children: "A regular at the place I take dance lessons mentioned how grateful he was to have dancing as his lifestyle. Those words ring really deep inside me. We often see habits and goals as our short term action. We might set a goal to run a marathon and the habit is to run 3 miles everyday. We might attach an personal identity to the goal by saying something like: I am a fit person who runs daily for my health. We might get rid of the goal and just focus on building the habit. But, I find, they generally don’t last a year or more. Either you achieve the goal, you become fit, or you move on."
    }), "\n", createVNode(_components.h3, {
      id: "but-what-is-a-lifestyle",
      children: "But what is a lifestyle?"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "But a lifestyle is so much more"
      }), ". It literally becomes an core embodiment of who I am. When I introduce myself to others, I will introduce myself with this core identity. When I feel tired, hopeless, depressed, I am pushed to start doing more of my lifestyle. I am not driven by motivation, habits, or goals. I am driven to keep this lifestyle because it is who I am."]
    }), "\n", createVNode(_components.p, {
      children: ["Dancing, for example, is my lifestyle. I find incredible bliss when I take a dance class. I feel like I am making amends and reconcilating myself with joy by dancing. It’s like a form of therapy to me. Dancing is where I find bliss, joy, closure, peace, growth, and support at. And when I feel this way about dancing, ", createVNode(_components.strong, {
        children: "I want to go full in."
      }), " I love it. It’s not a habit, it’s not a goal. I do it because I need it in my life."]
    }), "\n", createVNode(_components.p, {
      children: "With this new understanding, I thought of how journaling is a lifestyle to me too. I do it not out of habit. I do it because it brings me back to wholeness. It brings me back to life. It brings me clarity. It is what I do. Who I am. And a form of therapy too."
    }), "\n", createVNode(_components.p, {
      children: "Programming too. Helping others. Doing socially good things. Building tight knit friendships and relationships. I’m not trying to network. I’m here trying to form a genuinely, caring connection with you. I don’t have a habit. I just find myself happier talking to strangers and spreading some kindness."
    }), "\n", createVNode(_components.h3, {
      id: "so-what-am-i-trying-to-say",
      children: "So what am I trying to say?"
    }), "\n", createVNode(_components.p, {
      children: "What I’m trying to say is this: you don’t need habits or goals if you start with knowing your lifestyle. Habits and goals will naturally come if you focus on your lifestyle because you will only have a stronger desire to do more of it. I’m sure you have lifestyles that you haven’t really consider that much about. For example, I deeply care about my skin and skincare is something I dedicate dozens of hours in. I don’t need a habit of routines because I deeply need it in my skin health."
    }), "\n", createVNode(_components.p, {
      children: "Finding your lifestyle requires that you really care the full hell out of it. That lifestyle can also be toxic to your current life or greatly positive."
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

const url = "src/content/blog/2023/choosing-lifestyles.mdx";
const file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/choosing-lifestyles.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/choosing-lifestyles.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
