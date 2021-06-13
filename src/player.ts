
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
	this.isJump = false;
	this.lastY = 0;
    }
    
    tick() {
	super.tick();

	if (this.lastY == this.y) {
	    this.y -= this.step;
	    this.isJump = false;
	}

	if (this.state.keysPressed['a']) {
	    this.x -= this.step;
	}
	
	if (this.state.keysPressed[' '] && !this.isJump) {
		this.y -= this.step * 20;
		this.isJump = true;
	}

	if (this.state.keysPressed['d']) {
	    this.x += this.step;
	}

	if (this.state.keysPressed['b']) {
	    for (const entity of this.state.curScene.entities.entries()) {
		if (entity[0].startsWith("special02_")) {
		    this.state.curScene.entities.delete(entity[0]);
		}
	    }
	}

	if (this.state.keysPressed['g']) {
	    for (const entity of this.state.curScene.entities.entries()) {
		if (entity[0].startsWith("special01_")) {
		    this.state.curScene.entities.delete(entity[0]);
		}
	    }
	}

	if (this.state.keysPressed['r']) {
	    for (const entity of this.state.curScene.entities.entries()) {
		if (entity[0].startsWith("special03_")) {
		    this.state.curScene.entities.delete(entity[0]);
		}
	    }
	}

	this.lastY = this.y;
	this.y += this.step;
    }
}