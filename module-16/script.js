/*Описание задачи в index.html*/
/*Создаем класс Shape с методами getColor(), setColor(val), getCoords(), moveTo(newX, newY)*/
class Shape {
    constructor(color, initX, initY) {
        this.color = color;
        this.initX = initX;
        this.initY = initY;
    };
    getColor() {
        return this.color;
    };
    setColor(val) {
        this.color = val;
    };
    getCoords() {
        return [this.initX, this.initY];
    };
    moveTo(newX, newY) {
        this.initX = newX;
        this.initY = newY;
    };
}

/*Создаем класс Rectangle который расширяет класс Shape,*/
class Rectangle extends Shape {
    constructor(color, initX, initY, initWidth, initHeight) {
        super(color, initX, initY);
        this.initWidth = initWidth;
        this.initHeight = initHeight;
    };
    setWidth(newWidth) {
        this.initWidth = newWidth;
    };
    setHeight(newHeight) {
        this.initHeight = newHeight;
    };
    getDims() {
        return [this.initWidth, this.initHeight];
    };
    draw() {
        console.log(`Drawing a Rectangle at:\n
        (x: ${this.initX}, y: ${this.initY})\n
        With dimentions:\n
        height: ${this.initHeight}\n
        width: ${this.initWidth}\n
        Filled with color: ${this.color}`);
    };
}

/*Создаем класс Circle который расширяет класс Shape*/
class Circle extends Shape {
    constructor(color, initX, initY, initRadius) {
        super(color, initX, initY);
        this.initRadius = initRadius;
    }
    getRadius() {
        return this.initRadius;
    };
    setRadius(val) {
        this.initRadius = val;
    };
    draw() {
        console.log(`Draw a Circle at:\n
        (x: ${this.initX}, y: ${this.initY})\n
        With dimentions:\n
        radius: ${this.initRadius}\n
        Filled with color: ${this.color}`);
    };
}

/*создаем экземпляр класса Rectangle*/
const rectangle = new Rectangle();
rectangle.setColor('#009688');
rectangle.moveTo(10, 10);
rectangle.setWidth(100);
rectangle.setHeight(100);
console.log(`getDims for Rectangle: ${rectangle.getDims()}`);
rectangle.draw();

/*создаем экземпляр класса Circle*/
circle = new Circle();
circle.setColor('#FF5722');
circle.moveTo(50, 50);
circle.setRadius(250);
console.log(`Radius for Circle ${circle.getRadius()}`);
circle.draw();