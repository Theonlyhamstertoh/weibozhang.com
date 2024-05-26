const gallery3 = new Proxy({"src":"/_astro/gallery-3.D__WaBYM.png","width":550,"height":822,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-3.png";
							}
							
							return target[name];
						}
					});

export { gallery3 as default };
