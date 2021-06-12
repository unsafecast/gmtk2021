import { Entity } from "./entity.ts";
import { CollidingEntity } from "./collidingEntity.ts";
import { State } from "./state.ts";
import { tilemap } from "./testingScene.ts";
import { getEntity } from "./scene.ts";


export class Player extends CollidingEntity {
    constructor(state: State) {
	super(state, state.images["character0"]);
	this.canMove = true;
	this.step = 5;
	this.lastY = 0;
    }
    
    tick() {
	super.tick();

	if (this.lastY == this.y) {
	    this.y -= this.step;
	}

	if (this.state.keysPressed['a']) {
	    this.x -= this.step;
	}
	
	if (this.state.keysPressed[' ']) {
		this.y -= this.step * 2;
	}

	if (this.state.keysPressed['d']) {
	    this.x += this.step;
	}

	this.lastY = this.y;
	this.y += this.step;
    }
}

