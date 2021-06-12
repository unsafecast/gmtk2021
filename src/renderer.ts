
export class Renderer {
    public clearColor: string = "black";
    
    constructor(elem: HTMLCanvasElement) {
	this.canvas = elem;
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;
	
	this.context = this.canvas.getContext("2d");
	this.context.scale(2, 2);
	this.context.imageSmoothingEnabled = false

	this.cameraX = 0;
	this.cameraY = 0;
    }

    drawRect(x: number, y: number, w: number, h: number, style: string = "white") {
	this.context.fillStyle = style;
	this.context.fillRect(x + this.cameraX + this.canvas.width / 4, y, w, h);
    }

    drawImg(img: Image, x: number, y: number, w: number, h: number) {
	this.context.drawImage(img, x + this.cameraX + this.canvas.width / 4, y, w, h);
    }

    clear() {
	this.context.fillStyle = this.clearColor;
	this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

