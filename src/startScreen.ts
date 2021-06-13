import { Scene } from "./scene.ts";
import { State } from "./state.ts";
import { Entity } from "./entity.ts";
import { Player } from "./player.ts";
import { CollidingEntity } from "./collidingEntity.ts";
import { Renderer } from "./renderer.ts";
import { TestingScene } from "./testingScene.ts";

export class StartScreen extends Scene {
    constructor(state: State) {
	super(state);
    }

    tick() {
	super.tick();
    }

    draw(rend: Renderer) {
	super.draw(rend);

	rend.drawText("Don't Break 'Em All!", 350, 100, "white");
    rend.drawText("Press 'S' to begin", 357, 120, "red");
    if (this.state.keysPressed['s']) {
        this.pressed = true;
    } 
    if (this.pressed) {
        this.state.setScene(new TestingScene(this.state));
    }
    }
}

