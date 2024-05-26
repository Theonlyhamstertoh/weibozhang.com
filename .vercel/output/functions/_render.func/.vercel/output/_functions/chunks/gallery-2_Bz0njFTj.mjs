const gallery2 = new Proxy({"src":"/_astro/gallery-2.BhY_RVKT.png","width":688,"height":1030,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-2.png";
							}
							
							return target[name];
						}
					});

export { gallery2 as default };
