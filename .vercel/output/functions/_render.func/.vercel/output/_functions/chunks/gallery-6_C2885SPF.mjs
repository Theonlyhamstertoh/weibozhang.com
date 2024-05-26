const gallery6 = new Proxy({"src":"/_astro/gallery-6.DePoIXas.jpg","width":1365,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/weibozhang/Documents/code/js/weibozhang.com/src/static/images/gallery/gallery-6.jpg";
							}
							
							return target[name];
						}
					});

export { gallery6 as default };
