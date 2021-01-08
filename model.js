/**
 * @file model.js
 * @fileOverview Conway's Game of Life (this file implements the model).
 * @author evan pomponio
 */
"use strict";
/**
 * @class
 */
class ConwaysGameOfLife {
    /** 
     * this method clears the board (i.e., sets all entries to false).
     */
    clear ( ) {
        for (var r = 0; r < this.rows; r++) {
            for( var c = 0; c<this.cols; c++ ){
                this.board[r][c]=false;
            }
        }
    }
    //-----------------------------------------------------------------------
    /**
     * this method creates a new instance of Conway's Game of Life.
     * @param {number} rows is the number of rows in the board.
     * @param {number} cols is the number of cols in the board.
     */
    constructor ( rows, cols ) {
        console.log( "constructor called." );
        //class vars
        this.generation = 0;
        this.rows       = rows;
        this.cols       = cols;
        //allocate the board. (a 2d array is an array of arrays.)
        this.board      = new Array();
        for (var r = 0; r < this.rows; r++) {
            this.board[ r ] = new Array();
        }
        this.clear();
    }
    //-----------------------------------------------------------------------
    /**
     * this function sets the initial (starting) board configration.
     * @todo add your code here to initialize the board so _you_ can
     * test your nextGeneration method. example below.
     * @param {string} which indicates the desired initial pattern.
     */
    initializeBoard ( which ) {
        console.log( "initializeBoard called." );
        this.generation = 0;
        this.clear();
        switch (which) {
              case "random" :
                    for (var r = 0; r < this.rows; r++) {
                        for( var c = 0; c<this.cols; c++ ){
                            this.board[r][c] = Math.random() >= 0.5;
                        }
                    }
                break;
              case "reset" :
                this.board[ 11 ][ 10 ] = true;
                this.board[ 11 ][ 11 ] = true;
                this.board[ 11 ][ 12 ] = true;
                break;
              default:
                  // this is just an example
                  this.board[ 10 ][ 10 ] = true;
                  this.board[ 10 ][ 11 ] = true;
                  this.board[ 10 ][ 12 ] = true;
                  this.board[ 15 ][ 15 ] = true;
                  this.board[ 15 ][ 16 ] = true;
                  this.board[ 16 ][ 15 ] = true;
                  this.board[ 16 ][ 16 ] = true;
                  this.board[ 16 ][ 14 ] = true;
                  this.board[ 15 ][ 17 ] = true;
                break;
        }
    }
    //-----------------------------------------------------------------------
    /**
     * this function gets the board value at the specified position. if the 
     * specifed position is out of bounds, false is returned.
     * @param {number} r is the row.
     * @param {number} c is the col.
     * @returns {boolean} true if alive; false otherwise.
     */
    get ( r, c ) {
        if (r < 0)             return false;
        if (r >= this.rows)    return false;
        if (c < 0)             return false;
        if (c >= this.cols)    return false;
        return this.board[ r ][ c ];
    }
    //.......................................................................
    /**
     * this function replaces the current generation with the next.
     * see http://en.wikipedia.org/wiki/Conway's_Game_of_Life (especially
     * Rules) for a description of how to calculate the next generation.
     * <p><b> Copyright � Evan A. Pomponio, 2019.  All rights reserved. </b></p>
     */
    nextGeneration ( ) {
        ++this.generation;
        console.log( "creating next generation " + this.generation + "." );

        //create space for the next generation
        var next = new Array();
        for (var r = 0; r < this.rows; r++) {
            next[ r ] = new Array();
        }
        
        for(var r = 0; r < this.rows; r++){
            for(var c = 0; c < this.cols; c++){
                var count = 0;
                if(this.get(r,c)){
                    if(this.get(r-1,c-1))   count++;
                    if(this.get(r-1,c))     count++;
                    if(this.get(r-1,c+1))   count++;
                    if(this.get(r,c-1))     count++;
                    if(this.get(r,c+1))     count++;
                    if(this.get(r+1,c-1))   count++;
                    if(this.get(r+1,c))     count++;
                    if(this.get(r+1,c+1))   count++;
                    console.log("this.get( "+r+", "+c+" ) has "+ count + " neighbors");
                    if(count < 2)                   next[ r ][ c ] = false;
                    if(count == 2 || count == 3)    next[ r ][ c ] = true;
                    if(count > 3)                   next[ r ][ c ] = false;
                }
                if(!this.get(r,c)){
                    if(this.get(r-1,c-1))   count++;
                    if(this.get(r-1,c))     count++;
                    if(this.get(r-1,c+1))   count++;
                    if(this.get(r,c-1))     count++;
                    if(this.get(r,c+1))     count++;
                    if(this.get(r+1,c-1))   count++;
                    if(this.get(r+1,c))     count++;
                    if(this.get(r+1,c+1))   count++;
                    if(count == 3){
                        console.log("this.get( "+r+", "+c+" ) is back from the dead!");
                        next [ r ][ c ] = true;
                    }
                }
            }
        }
        this.board = next;  //replace old generation with new one
    }
    //-----------------------------------------------------------------------
    /**
     * this function returns a string that represents this object instance.
     * @return {string} a string that represents this object instance
     */
    toString ( ) {
        var s = "";
        s += "gen  = " + this.generation + ", ";
        s += "rows = " + this.rows + ", ";
        s += "cols = " + this.cols + "\n";
        for (var r = 0; r < this.rows; r++) {
            s+="\n";
            for( var c = 0; c<this.cols; c++ ){
                s+= " "+this.board[r][c];
            }
        }
        return s;
    }
}