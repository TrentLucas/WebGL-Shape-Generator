/*
 * File: MyGame.js 
 * This is the logic of our game. For now, this is very simple.
 */
"use strict";  // Operate in Strict mode such that variables must be declared before used!

import * as engine from "../engine/core.js";

class MyGame {
    constructor(htmlCanvasID) {
        // Step A: Initialize the game engine
        engine.init(htmlCanvasID);

        // Step B: Clear the canvas
        engine.clearCanvas([0.6, 0.6, 0.6, 1]);

        // Step C: Draw shapes
                // Width > Height
        engine.drawSquare([0.2 * 1, 0, 0, 1], [-1.2 + (1 * 0.4), 0.5] , [0.1 * 6, 0.2 * 2]); 
        engine.drawTriangle([0.2 * 1, 0, 0, 1], [-1.2 + (1 * 0.4), 0.0] , [0.1 * 6, 0.2 * 2]); 
        engine.drawCircle([0.2 * 1, 0, 0, 1], [-1.2 + (1 * 0.4), -0.5] , [0.1 * 6, 0.2 * 2]); 

                // Height > Width
        engine.drawSquare([0.2 * 2, 0, 0, 1], [-1.2 + (2 * 0.4), 0.5] , [0.1 * 3, 0.2 * 5]); 
        engine.drawTriangle([0.2 * 2, 0, 0, 1], [-1.2 + (2 * 0.4), 0.0] , [0.1 * 3, 0.2 * 5]); 
        engine.drawCircle([0.2 * 2, 0, 0, 1], [-1.2 + (2 * 0.4), -0.5] , [0.1 * 3, 0.2 * 5]); 

                // Extra Shapes loop
        for (let i = 3; i < 6; i++) {
            engine.drawSquare([0.2 * i, 0, 0, 1], [-1.2 + (i * 0.4), 0.5] , [0.1 * i, 0.2 * i]);
            engine.drawTriangle([0.2 * i, 0, 0, 1], [-1.2 + (i * 0.4), 0.0] , [0.1 * i, 0.2 * i]);
            engine.drawCircle([0.2 * i, 0, 0, 1], [-1.2 + (i * 0.4), -0.5] , [0.1 * i, 0.2 * i]); 
        }
    }
}

window.onload = function() {
    new MyGame('GLCanvas');
}