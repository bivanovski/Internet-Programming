"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("./calculator");
var user1 = {
    id: 1,
    name: 'Bojan',
    age: 20
};
var user2 = {
    id: 2,
    name: 'Ana',
    age: 25
};
console.log((0, calculator_1.add)(user1.age, user2.age));
