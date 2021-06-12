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
	}
    }

    draw(rend: Renderer) {
	for (const entity of this.entities.entries()) {
	    entity[1].draw(rend);
	}
    }
}

