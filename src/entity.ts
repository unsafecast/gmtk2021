import { Renderer } from "./renderer.ts";

export class Entity {
    private image: Image;

    private x: number = 0;
    private y: number = 0;
    private w: number = 10;
    private h: number = 10;

    constructor(image: Image) {
	this.image = image;
    }

    tick() {
    }

    draw(rend: Renderer) {
	rend.drawImg(this.image, this.x, this.y, this.w, this.h);
    }
}
