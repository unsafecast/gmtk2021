import { State } from "./state.ts";
import { TestingScene } from "./testingScene.ts";

const loadImagesAndStart = (images: Dictionary<string, string>, startFun: any) => {
    let len = Object.keys(images).length;
    let loaded = 0;
    let dict = {};

    for (const key in images) {
	let img = new Image();
	img.onload = () => {
	    loaded += 1;
	    if (len == loaded) {
		startFun(dict);
	    }
	}
	img.src = images[key];
	dict[key] = img;
    }
}

const main = () => {
    let images = {
	"localDuck": "duck.png",
    };

    loadImagesAndStart(images, (loaded) => {
	let state = new State(loaded);
	state.setScene(new TestingScene(state));
	state.start();
    });
}

main();

