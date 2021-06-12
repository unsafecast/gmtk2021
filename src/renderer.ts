
export class Renderer {
    public clearColor: string = "black";
    
    constructor(elem: HTMLCanvasElement) {
	this.canvas = elem;
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;
	
	this.context = this.canvas.getContext("2d");
    }

    drawRect(x: number, y: number, w: number, h: number, style: string = "white") {
	this.context.fillStyle = style;
	this.context.fillRect(x, y, w, h);
    }

    drawImg(img: Image, x: number, y: number, w: number, h: number) {
	this.context.drawImage(img, x, y, w, h);
    }

    clear() {
	this.context.fillStyle = this.clearColor;
	this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

