class Circle{
    constructor(radius) {
        this.radius=radius;
    }
    getRadius(){
        return this.radius;
    }
    getAria(){
        return 3.14* this.radius*this.radius
    }
}
let circler=new Circle(2);
document.write("bán kính hình tròn "+ circler.getRadius()+"diện tích: "+circler.getAria())