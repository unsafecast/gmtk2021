import { Entity } from "./entity.ts";
import { State } from "./state.ts";

export class Scene {
    private entities: Map<string, Entity>;
    private state: State;

    constructor(state: State) {
	this.state = state;
	this.entities = new Map();
    }

    addEntity(name: string, entity: Entity) {
	this.entities.set(name, entity);
    }

    getEntity(name: string) {
	return this.entities.get(name);
    }

    tick() {
	for (const entity of this.entities.entries()) {
	    entity[1].tick();

	    // Hehe this looks horrible
	    // But do I care? Nah...

	    // Also inneficient as fuck
	    for (const entity2 of this.entities.entries()) {
		if (entity2[0] != entity[0] &&
		    entity[1].canCollide && entity2[1].canCollide) {
		    if (entity[1].collidesWith(entity2[1])) {
			if (entity[1].canMove) {
			    entity[1].collided(entity2[1]);
			}
			
			if (entity2[1].canMove) {
			    entity2[1].collided(entity[1]);
			}
		    }
		}
	    }
	}
    }

    draw(rend: Renderer) {
	for (const entity of this.entities.entries()) {
	    entity[1].draw(rend);
	}
    }
}

