/**
 * @file controller.js
 * @fileOverview this file implements the controller.
 * <p><b> Copyright © George J. Grevera, 2017.  All rights reserved. </b></p>
 * @author george j. grevera, ph.d.
 */
"use strict";
//---------------------------------------------------------------------------
/**
 * this function is called (once) to init the controller.
 * @todo (v2) init mouse down and mouse move event listeners here.
 */
function initController ( ) {

    //todo (v2) insert your code here.

}
//---------------------------------------------------------------------------
/**
 * this function converts (event.x,event.y) coordinates to (x,y) coordinates
 * in the canvas.
 * @param {Object} event is the event object instance.
 * @returns {Array} and array of (x,y) in canvas coodinates.
 */
function world2canvas ( event ) {
    var x = event.x;
    var y = event.y;
    var canvas = document.getElementById( "can" );

    //adjust for offset to canvas
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    //adjust for scrollbar offsets (browsers differt - use jquery)
    //(tested on ie, chrome, and opera.)
    x += document.body.scrollLeft;  //ok on ie
    y += document.body.scrollTop;   //ok on ie
    x += document.documentElement.scrollLeft;  //ok on chrome
    y += document.documentElement.scrollTop;   //ok on chrome

    return [ x, y ];
}
//---------------------------------------------------------------------------
/**
 * this function is called in response to a mouseDown event.
 * @param {Object} event is the event object instance.
 * @todo (v2) ?
 */
function doMouseMove ( event ) {
    var xy = world2canvas ( event );
    var x = xy[0];
    var y = xy[1];
    //console.log( "move (x,y)=" + x + "," + y );

    //todo (v2) add code here.
}
//---------------------------------------------------------------------------
/**
 * this function is called in response to a mouseDown event.
 * see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent for more
 * details about event.
 * @param {Object} event is the event object instance.
 * @todo (v2) respond to the event by toggling (i.e., false becomes true, or
 *       true becomes false) the board position.
 */
function doMouseDown ( event ) {
    var xy = world2canvas ( event );
    var x = xy[0];
    var y = xy[1];
    //console.log( "move (x,y)=" + x + "," + y );

    //todo (v2) respond to the event by toggling the board position.

}
//---------------------------------------------------------------------------

