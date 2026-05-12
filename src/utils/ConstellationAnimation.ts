interface Point {
    s: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
}

export class ConstellationAnimation {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private container: HTMLElement;
    private wordRefs: HTMLElement[];
    private items: Point[] = [];
    private animationFrameId: number | null = null;
    private resizeObserver: ResizeObserver;
    private offset: number;
    private lastTime: number = 0;
    private fpsLimit: number = 30;

    constructor(canvas: HTMLCanvasElement, container: HTMLElement, wordRefs: HTMLElement[], offset: number) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.container = container;
        this.wordRefs = wordRefs;
        this.offset = offset;

        this.resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                this.canvas.width = width;
                this.canvas.height = height;
                if (this.items.length === 0) {
                    this.initItems(width, height);
                }
            }
        });

        this.resizeObserver.observe(this.container);
    }

    private initItems(width: number, height: number) {
        this.items = this.wordRefs.map((el) => {
            const size = el ? el.offsetWidth : 0;
            return {
                s: size,
                x: Math.random() * (width - size / 2),
                y: Math.random() * (height - size / 2),
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
            };
        });
    }

    public start() {
        this.animate();
    }

    public stop() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        this.resizeObserver.disconnect();
    }

    private animate = (currentTime: number = 0) => {
        this.animationFrameId = requestAnimationFrame(this.animate);

        // Вычисляем разницу во времени
        const deltaTime = currentTime - this.lastTime;
        const interval = 1000 / this.fpsLimit;

        // Если прошло недостаточно времени — пропускаем отрисовку
        if (deltaTime < interval) {
            return;
        }

        // Корректируем lastTime (с учетом возможного дрейфа)
        this.lastTime = currentTime - (deltaTime % interval);

        const { clientWidth: w, clientHeight: h } = this.container;
        this.ctx.clearRect(0, 0, w, h);

        this.items.forEach((item, i) => {
            // Движение
            item.x += item.vx;
            item.y += item.vy;

            // Отскоки
            if (item.x <= 0) {
                item.x = 0;
                item.vx *= -1;
            } else if (item.x >= w - item.s) {
                item.x = w - item.s - this.offset;
                item.vx *= -1;
            }

            if (item.y <= 0) {
                item.y = 0;
                item.vy *= -1;
            } else if (item.y >= h - item.s) {
                item.y = h - item.s - this.offset;
                item.vy *= -1;
            }

            // Обновление DOM
            const el = this.wordRefs[i];
            if (el) {
                el.style.transform = `translate(${item.x}px, ${item.y}px)`;
            }

            this.drawLines(item, i);
        });
    };

    private drawLines(item: Point, index: number) {
        const centerX1 = item.x + item.s / 2;
        const centerY1 = item.y + item.s / 2;

        for (let j = index + 1; j < this.items.length; j++) {
            const item2 = this.items[j];
            const centerX2 = item2.x + item2.s / 2;
            const centerY2 = item2.y + item2.s / 2;

            const dist = Math.hypot(centerX1 - centerX2, centerY1 - centerY2);

            if (dist < 250) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 250})`;
                this.ctx.lineWidth = 0.8;
                this.ctx.moveTo(centerX1, centerY1);
                this.ctx.lineTo(centerX2, centerY2);
                this.ctx.stroke();
            }
        }
    };
}
