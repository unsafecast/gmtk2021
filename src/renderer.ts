
export class Renderer {
    public clearColor: string = "#4a4a4a";
    
    constructor(elem: HTMLCanvasElement) {
	this.canvas = elem;
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;
	
	this.context = this.canvas.getContext("2d");
	this.context.scale(2, 2);
	this.context.imageSmoothingEnabled = false
    }

    drawRect(x: number, y: number, w: number, h: number, style: string = "white") {
	this.context.fillStyle = style;
	this.context.fillRect(x, y, w, h);
    }

    drawImg(img: Image, x: number, y: number, w: number, h: number) {
	this.context.drawImage(img, x, y, w, h);
    }

    drawText(text: string, x: number, y: number, size: string = '50px', color: string = "#fff") {
	this.context.fillStyle = color;
	this.context.font = `${size} sans serif`;
	this.context.fillText(text, x, y);
    }

    clear() {
	this.context.fillStyle = this.clearColor;
	this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

