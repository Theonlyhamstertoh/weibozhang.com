const gallery4 = new Proxy({"src":"/_astro/gallery-4.Bfa9LDsT.png","width":683,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-4.png";
							}
							
							return target[name];
						}
					});

export { gallery4 as default };
