import { Entity } from "./entity.ts";
import { State } from "./state.ts";

export class CollidingEntity extends Entity {
    constructor(state: State, image: Image) {
	super(state, image);
	this.canCollide = true;
	this.step = 1;
    }
    
    collided(entity: Entity) {
	// WARNING: This assumes the entity moves 5px per frame. NEEDS TO CHANGE!!!
	
	this.x -= this.step;
	if (this.collidesWith(entity)) {
	    this.x += this.step * 2;
	}
	if (this.collidesWith(entity)) {
	    this.x -= this.step;
	    this.y -= this.step;
	}
	if (this.collidesWith(entity)) {
	    this.y += this.step * 2;
	}
    }
}

