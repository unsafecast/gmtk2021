import { Entity } from "./entity.ts";
import { State } from "./state.ts";

export class Player extends Entity {
    constructor(state: State) {
	super(state, state.images["duck"]);
	this.w = 100;
	this.h = 100;
    }
    
    tick() {
	super.tick();

	// Temporary obviously

	if (this.state.keysPressed['a']) {
	    this.x -= 5;
	}
	
	if (this.state.keysPressed['d']) {
	    this.x += 5;
	}

	if (this.state.keysPressed['w']) {
	    this.y -= 5;
	}

	if (this.state.keysPressed['s']) {
	    this.y += 5;
	}
    }
}

