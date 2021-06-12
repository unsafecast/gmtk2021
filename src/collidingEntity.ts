import { Entity } from "./entity.ts";
import { State } from "./state.ts";

export class CollidingEntity extends Entity {
    constructor(state: State, image: Image) {
	super(state, image);
	this.canCollide = true;
    }
    
    collided(entity: Entity) {
	this.x -= 5;
	if (this.collidesWith(entity)) {
	    this.x += 10;
	}
	if (this.collidesWith(entity)) {
	    this.x -= 5;
	    this.y -= 5;
	}
	if (this.collidesWith(entity)) {
	    this.y += 10;
	}
    }
}

