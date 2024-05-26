const gallery5 = new Proxy({"src":"/_astro/gallery-5.C6R4DF3l.jpg","width":2048,"height":1365,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-5.jpg";
							}
							
							return target[name];
						}
					});

export { gallery5 as default };
