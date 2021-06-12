import { Renderer } from "./renderer.ts";
import { State } from "./state.ts";

export class Entity {
    private image: Image;
    private state: State;

    public x: number = 0;
    public y: number = 0;
    public w: number = 10;
    public h: number = 10;

    constructor(state: State, image: Image) {
	this.image = image;
	this.state = state;
    }

    tick() {
    }

    draw(rend: Renderer) {
	rend.drawImg(this.image, this.x, this.y, this.w, this.h);
    }
}
