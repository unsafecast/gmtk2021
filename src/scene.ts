import { Entity } from "./entity.ts";
import { State } from "./state.ts";
import { Player } from "./player.ts";
import { Enemy1 } from "./enemy1.ts";
import { Enemy2 } from "./enemy2.ts";
import { Enemy3 } from "./enemy3.ts";
import { CollidingEntity } from "./collidingEntity.ts";

export class Scene {
    private entities: Map<string, Entity>;
    private state: State;
    private background: Image;

    constructor(state: State, background: Image = null) {
	this.state = state;
	this.entities = new Map();
	this.background = background;
    }

    addEntity(name: string, entity: Entity) {
	this.entities.set(name, entity);
    }

    getEntity(name: string) {
	return this.entities.get(name);
    }

    loadTilemap(tilemap: Array<Array<string>>) {
	tilemap.forEach((row, y) => {
	    row.forEach((thing, x) => {
		let entity: Entity = null;
		let name = "";
		switch (thing) {
		    case 'p':
			entity = new Player(this.state);
			name = "player";
			break;
		    case 'g':
			entity = new CollidingEntity(this.state, this.state.images["grass"]);
			name = `grass_${Math.random()}`;
			break;
			case 'f':
			entity = new CollidingEntity(this.state, this.state.images["floor01"]);
			name = `floor01_${Math.random()}`;
			break;
			case '9':
			entity = new CollidingEntity(this.state, this.state.images["floor02"]);
			name = `floor02_${Math.random()}`;
			break;
			case '1':
			entity = new CollidingEntity(this.state, this.state.images["special01"]);
			name = `special01_${Math.random()}`;
			break;
			case '2':
			entity = new CollidingEntity(this.state, this.state.images["special02"]);
			name = `special02_${Math.random()}`;
			break;
			case '3':
			entity = new CollidingEntity(this.state, this.state.images["special03"]);
			name = `special03_${Math.random()}`;
			break;
			case 'o':
			entity = new CollidingEntity(this.state, this.state.images["prize"]);
			name = "prize";
			break;
			case 'b':
			entity = new Enemy1(this.state);
			name = "enemy01";
			break;
			case 'r':
			entity = new Enemy2(this.state);
			name = "enemy02";
			break;
			case 'v':
			entity = new Enemy3(this.state);
			name = "enemy03";
			break;
			case 's':
			entity = new CollidingEntity(this.state, this.state.images['spikes']);
			name = `spikes_${Math.random()}`;
			break;
		}

		if (entity != null) {
		    entity.x = x * 32;
		    entity.y = y * 32;
		    this.addEntity(name, entity);
		}
	    });
	});
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
			    entity[1].collided(entity2[0], entity2[1]);
			}
			
			if (entity2[1].canMove) {
			    entity2[1].collided(entity[0], entity[1]);
			}
		    }
		}
	    }
	}
    }

    draw(rend: Renderer) {
	if (this.background != null) {
	    rend.drawImg(this.background, 0, 0, rend.canvas.width, rend.canvas.height);
	}
	
	for (const entity of this.entities.entries()) {
	    entity[1].draw(rend);
	}
    }
}

