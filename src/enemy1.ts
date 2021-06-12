import { Entity } from "./entity.ts";
import { CollidingEntity } from "./collidingEntity.ts";
import { State } from "./state.ts";
import { Player } from "./player.ts";

export class Enemy1 extends CollidingEntity {
    constructor(state: State) {
	super(state, state.images["enemy01"]);
	this.canMove = true;
	this.step = 3;
	this.lastY = 0;
    }
    
    tick() {
	super.tick();

	if (this.lastY == this.y) {
	    this.y -= this.step;
	}

	if (Player.x > this.x) {
		this.x += this.step;
	} else {
		this.x -= this.step;
	}


	this.lastY = this.y;
	this.y += this.step;
    }
}

