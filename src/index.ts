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
	"grass": "grass.png",
	"character0": "character/frame01.png",
	"floor01": "terrain/floor01.png",
	"floor02": "terrain/floor02.png",
	"special01": "terrain/special01.png",
	"special02": "terrain/special02.png",
	"special03": "terrain/special03.png",
	"prize": "prize.png",
	"enemy01": "enemy/enemy1frame01.png",
	"enemy02": "enemy/enemy2frame01.png",
	"enemy03": "enemy/enemy3frame01.png",
	"spikes": "enemy/spikes.png",
    };

    loadImagesAndStart(images, (loaded) => {
	let state = new State(loaded);
	state.setScene(new TestingScene(state));
	state.start();
    });
}

main();

