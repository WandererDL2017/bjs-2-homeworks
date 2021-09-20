"use strict"

function parseCount(num) {
    if (isNaN(Number.parseInt(num))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(num);
}

function validateCount(num) {
    try {
        return parseCount(num);
    } catch (err) {
        return err;
    }
}

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
        if (this.firstSide > this.secondSide + this.thirdSide || this.secondSide > this.firstSide + this.thirdSide || this.thirdSide > this.firstSide + this.secondSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    getArea() {
        let halfPerimeter = (this.firstSide + this.secondSide + this.thirdSide)/2;
        return +Math.pow(halfPerimeter * (halfPerimeter - this.firstSide) * (halfPerimeter - this.secondSide) * (halfPerimeter - this.thirdSide), 0.5).toFixed(3);
    }
} 

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch (err) {
        return { 
            getArea() {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            }
        };
    }
}