
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
	this.health = 100;
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
		this.y -= this.step * 10;
		this.isJump = true;
	}

	if (this.state.keysPressed['d']) {
	    this.x += this.step;
	}

	this.lastY = this.y;
	this.y += this.step;

	if (this.health <= 0) {
		alert("YOU DIED!");
	}
    }

    collided(name: string, entity: Entity) {
	super.collided(name, entity);

	if (name.startsWith("enemy") || name.startsWith("spikes")) {
		this.health -= 5;
	}

	if (name === "prize") {
		alert("YOU WON!!");
	}

	if (this.state.keysPressed['b']) {
	    if (name.startsWith("special01_")) {
		for (const entity of this.state.curScene.entities.entries()) {
		    if (entity[0].startsWith("special01_")) {
			this.state.curScene.entities.delete(entity[0]);
		    }
		}
	    }

	    if (name.startsWith("special02_")) {
		for (const entity of this.state.curScene.entities.entries()) {
		    if (entity[0].startsWith("special02_")) {
			this.state.curScene.entities.delete(entity[0]);
		    }
		}
	    }

	    if (name.startsWith("special03_")) {
		for (const entity of this.state.curScene.entities.entries()) {
		    if (entity[0].startsWith("special03_")) {
			this.state.curScene.entities.delete(entity[0]);
		    }
		}
	    }
	}
    }
    draw(rend: Renderer) {
	  super.draw(rend);
	  rend.drawText("HP: " + String(this.health), 20, 20, 100);
	}
}
