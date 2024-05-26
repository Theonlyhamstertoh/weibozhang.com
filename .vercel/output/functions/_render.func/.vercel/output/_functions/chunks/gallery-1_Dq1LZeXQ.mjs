const gallery1 = new Proxy({"src":"/_astro/gallery-1.DQuP2FVk.png","width":732,"height":488,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-1.png";
							}
							
							return target[name];
						}
					});

export { gallery1 as default };
