
export class Renderer {
    constructor(elem: HTMLCanvasElement) {
	this.canvas = elem;
	this.canvas.width = document.body.clientWidth;
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
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

