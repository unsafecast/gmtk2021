import { Renderer } from "./renderer.ts";
import { Entity } from "./entity.ts";
import { Scene } from "./scene.ts";

export class State {
    private images: Dictionary<string, Image>;
    private rend: Renderer;
    private curScene: Scene;

    public keysPressed;
    
    constructor(images: Dictionary<string, Image>) {
	this.images = images;
	this.rend = new Renderer(
	    document.getElementById("main-canvas") as HTMLCanvasElement
	);

	this.curScene = null;
	this.keysPressed = {};

	window.addEventListener("keydown", (event) => {
	    this.keysPressed[event.key] = true;
	});

	window.addEventListener("keyup", (event) => {
	    this.keysPressed[event.key] = false;
	});
    }

    setScene(scene: Scene) {
	this.curScene = scene;
    }

    start() {
	window.requestAnimationFrame(this.tick.bind(this));
    }

    tick() {
	this.rend.clear();

	this.curScene?.tick();
	this.curScene?.draw(this.rend);

	setTimeout(() => {
	    window.requestAnimationFrame(this.tick.bind(this));
	}, 1000 / 60);	
    }
}

