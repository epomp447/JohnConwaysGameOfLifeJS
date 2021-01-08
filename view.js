/**
 * @file view.js
 * @fileOverview this file implements the view.
 * <p><b> Copyright � George J. Grevera, 2017.  All rights reserved. </b></p>
 * @author george j. grevera, ph.d.
 */
"use strict";
//---------------------------------------------------------------------------
/**
 * this functions returns the scale factor for the canvas (to allow it to be
 * resized). it maintains square cells (rather than rectangular).
 * @returns {number} scale factor.
 */
function getScale ( ) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    //we don't want to be more than 95% of max possible size.
    var maxWidth  = 0.95 * w;
    var maxHeight = 0.95 * h - 50;  //leave room at the bottom for buttons
    //calc scale factors (independently in both directions)
    var sc1 = maxWidth  / g.cols;
    var sc2 = maxHeight / g.rows;
    //maintain square cells
    var scale = sc1;
    if (sc2 < scale)    scale = sc2;
    //maintain minimum cell size
    if (scale < 4)      scale = 4;
    return scale;
}
//---------------------------------------------------------------------------
/**
 * paint draws the game of life grid on the canvas, and it is called each
 * time the board is initialized or progressed to the next genration
*/
function paint ( ) {
    //console.log( "paint called." );  //useful for debugging
    var scale = getScale();
    //set the canvas size to exactly fit the board
    var canvas = document.getElementById( "can" );
    canvas.width  = g.cols * scale + 1;
    canvas.height = g.rows * scale + 1;

    var ctx = canvas.getContext( "2d" );
    ctx.fillStyle = "gray";
    ctx.fillRect( 0, 0, canvas.width, canvas.height );
    ctx.fillStyle = "yellow";
    console.log( g );
    for (var r = 0; r < g.rows; r++) {
        for (var c = 0; c < g.cols; c++) {
            if (g.board[r][c]) {
                ctx.fillRect( c*scale, r*scale, scale, scale );
            }
        }
    }
    ctx.fillStyle = "black";
    ctx.font="30px Arial";
    ctx.fillText("Generation: "+g.generation, 10, 50); //shows the generation number in the canvas.
    ctx.fillStyle = "purple";
    ctx.lineWidth = 5;
    ctx.moveTo(0,0);
    ctx.lineTo(0,canvas.width);
    ctx.lineTo(canvas.width,canvas.height);
    ctx.lineTo(canvas.height,0);
    ctx.lineTo(0,0);
    ctx.stroke();//draws border (line) around board.
}
//---------------------------------------------------------------------------

