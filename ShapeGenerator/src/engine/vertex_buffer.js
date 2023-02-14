/*
 * File: vertex_buffer.js
 *  
 * defines the module that supports the loading and using of the buffer that 
 * contains vertex positions of a square onto the gl context
 * 
 */
"use strict";

import * as core from "./core.js";

// reference to the vertex positions for the square in the gl context
let mGLVertexBufferSquare = null;
function getSquare() { return mGLVertexBufferSquare; }

// reference to the vertex positions for the triangle in the gl context
let mGLVertexBufferTriangle = null;
function getTriangle() { return mGLVertexBufferTriangle; }

// reference to the vertex positions for the circle in the gl context
let mGLVertexBufferCircle = null;
function getCircle() { return mGLVertexBufferCircle; }


// Define the vertices for a square
let mVerticesOfSquare = [
    -0.2, 0.2, 0.0, 
    0.2, 0.2, 0.0,
    0.2, -0.2, 0.0,
    -0.2, -0.2, 0.0
];

// Define the vertices for a Triangle
let mVerticesOfTriangle = [
    -0.2, -0.2, 0.0,
    0.2, -0.2, 0.0,
    0.0, 0.2, 0.0
];

// Define the vertices for a circle
let mVerticesOfCircle = [];
var delta = (2.0 * Math.PI) / (100);
for (let i = 1; i <= 101; i++) {
    var angle = (i - 1) * delta;
    let x = 0.2 * Math.cos(angle);
    let y = 0.2 * Math.sin(angle);
    mVerticesOfCircle.push(x, y, 0.0);
}

// activate and load square vertices on vertexBuffer
function initSquare() {
    let gl = core.getGL();
    
    // Step A: Create a buffer on the gl context for our vertex positions
    mGLVertexBufferSquare = gl.createBuffer();
       
    // Step B: Activate vertexBuffer
    gl.bindBuffer(gl.ARRAY_BUFFER, mGLVertexBufferSquare);

    // Step C: Loads mVerticesOfSquare into the vertexBuffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mVerticesOfSquare), gl.STATIC_DRAW);


}

// activate and load triangle vertices on vertexBuffer
function initTriangle() {
    let gl = core.getGL();
    
    // Step A: Create a buffer on the gl context for our vertex positions
    mGLVertexBufferTriangle = gl.createBuffer();
       
    // Step B: Activate vertexBuffer
    gl.bindBuffer(gl.ARRAY_BUFFER, mGLVertexBufferTriangle);

    // Step C: Loads mVerticesOfTriangle into the vertexBuffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mVerticesOfTriangle), gl.STATIC_DRAW);


}

// activate and load circle vertices on vertexBuffer
function initCircle() {
    let gl = core.getGL();
    
    // Step A: Create a buffer on the gl context for our vertex positions
    mGLVertexBufferCircle = gl.createBuffer();
       
    // Step B: Activate vertexBuffer
    gl.bindBuffer(gl.ARRAY_BUFFER, mGLVertexBufferCircle);

    // Step C: Loads mVerticesOfCircle into the vertexBuffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mVerticesOfCircle), gl.STATIC_DRAW);


}


 // export these symbols
export {initSquare, initTriangle, initCircle, getSquare, getTriangle, getCircle}