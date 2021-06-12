import { Renderer } from "./renderer.ts";
import { State } from "./state.ts";

export class Entity {
    private image: Image;
    private state: State;

    public x: number = 0;
    public y: number = 0;
    public w: number = 10;
    public h: number = 10;

    public canCollide = false;

    constructor(state: State, image: Image) {
	this.image = image;
	this.state = state;
    }

    tick() {
    }

    draw(rend: Renderer) {
	rend.drawImg(this.image, this.x, this.y, this.w, this.h);
    }

    collidesWith(entity: Entity): boolean {
	const left1 = this.x;
	const right1 = this.x + this.w;
	const top1 = this.y;
	const bottom1 = this.y + this.h;

	const left2 = entity.x;
	const right2 = entity.x + entity.w;
	const top2 = entity.y;
	const bottom2 = entity.y + entity.h;

	return left1 < right2 &&
	    right1 > left2 &&
	    top1 < bottom2 &&
	    bottom1 > top2;
    }

    collided(entity: Entity) {
    }
}
