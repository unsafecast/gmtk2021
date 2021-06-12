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
	"duck": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freepngimg.com%2Fdownload%2Fduck%2F40-little-yellow-duck-png-image.png&f=1&nofb=1",
	"duck2": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPNGPIX-COM-Duck-PNG-Transparent-Image-1.png&f=1&nofb=1"
    };

    loadImagesAndStart(images, (loaded) => {
	let state = new State(loaded);
	state.setScene(new TestingScene(state));
	state.start();
    });
}

main();

