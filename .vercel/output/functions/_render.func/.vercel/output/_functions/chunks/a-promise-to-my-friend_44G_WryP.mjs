import { q as Fragment, _ as __astro_tag_component__, t as createVNode } from './astro_zuKL0lfp.mjs';
import { a as $$Image } from './pages/blog_Y4lcYjz5.mjs';
import 'clsx';

const frontmatter = {
  "title": "A Promise to My Friend",
  "date": "2023-09-08",
  "tags": ["startup", "journey", "friend"],
  "published": true,
  "description": "A inside look of my friends startup journey with Pear",
  "images": ["/static/images/blogs/pear-logo.png"],
  "authors": ["default"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "footnote-label",
    "text": "Footnotes"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    sup: "sup",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["I made a promise to my friend, Bobby. If he could get just one new user to sign up by the end of the week, I pledged to write a blog about his startup journey with Pear", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), ". Thirty minutes later, after a quick trip to Subway and back, two new emails had landed in his database (I’m not great with bets…). Now, as I sit here typing, I’m dedicating my very first blog to him."]
    }), "\n", createVNode(_components.p, {
      children: "The other day, as we were leaving our office, Bobby asked me whether he should continue pursuing Pear, his startup, or focus on applying for internships. Looking back, I wish I could have given him a little faith. Regardless of the path he chooses, from that day to next summer, he will excel. Even if everything doesn’t go as planned, we are only 18, and his experiences in building Pear’s MVP, cold emailing teachers, meeting with board members, and demonstrating the product will remain valuable in his knowledge toolbox."
    }), "\n", createVNode(_components.p, {
      children: "As a quick background, the first time he talked to me about Pear, he wanted to develop an AI tool to help teachers easily create quizzes, worksheets, or handouts so they could focus on teaching. As we exchanged thoughts and ideas, Pear evolved into what it is now—an insightful AI check-in tool to track individual students’ progress."
    }), "\n", createVNode(_components.p, {
      children: "Bobby has made impressive progress all on his own. Previously, we used to work together from morning till night on the same startups. Now, as we both pursue our own projects, I’m amazed at what he has managed to learn and accomplish in such a short time. He is highly motivated and more disciplined than 99% of the people I know."
    }), "\n", createVNode(_components.p, {
      children: "The challenge for him now, and for anyone interested in building a startup, is overcoming the user acquisition struggle. I believe that if he keeps persevering, he will find a way forward. The path may not be obvious right now, but with enough attempts, it will reveal itself."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/static/images/blogs/pear-logo.png",
        alt: "Pear Logo"
      })
    }), "\n", createVNode(_components.section, {
      "data-footnotes": "",
      class: "footnotes",
      children: [createVNode(_components.h2, {
        class: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", createVNode(_components.p, {
            children: ["Visit ", createVNode(_components.a, {
              href: "http://teachpear.com/",
              children: "Pear!"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n"]
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

const url = "src/content/blog/2023/a-promise-to-my-friend.mdx";
const file = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/a-promise-to-my-friend.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/weibozhang/Documents/code/js/weibozhang.com/src/content/blog/2023/a-promise-to-my-friend.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
