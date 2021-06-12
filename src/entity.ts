import { Renderer } from "./renderer.ts";

export class Entity {
    private image: Image;

    public x: number = 0;
    public y: number = 0;
    public w: number = 10;
    public h: number = 10;

    constructor(image: Image) {
	this.image = image;
    }

    tick() {
    }

    draw(rend: Renderer) {
	rend.drawImg(this.image, this.x, this.y, this.w, this.h);
    }
}
