/**
 * A module that represents a draggable point on a canvas.
 *
 * The Point class provides functionality to create and manipulate a draggable point
 * represented as a circle on a canvas. It allows the user to interact with the point
 * by dragging it, updating its position, and drawing it on the canvas.
 *
 * @module point
 *
 * @example
 * const canvas = document.getElementById('myCanvas');
 * const point = new Point(50, 50);
 */
import { calPoint, dist } from "./math";

export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.dragEnabled = false;
    this.isBeingDragged = false;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Checks if the given coordinates are inside the circle (point).
   * Returns true if inside, false otherwise.
   */
  isInPoint(mouseX, mouseY) {
    return dist(mouseX, mouseY, this.x, this.y) <= this.radius;
  }

  /**
   * Handles the mousedown event.
   * Checks if the event occurred inside the point circle.
   * Returns true if the point is being dragged, false otherwise.
   */
  mousedown(e) {
    let p = calPoint(e);
    this.isBeingDragged = this.isInPoint(p.x, p.y);
    return this.isBeingDragged;
  }

  /**
   * Handles the mousemove event.
   * If the point is being dragged, updates its position based on the event.
   */
  mousemove(e) {
    if (this.isBeingDragged) {
      let p = calPoint(e);
      this.x = p.x;
      this.y = p.y;
    }
  }

  /**
   * Handles the mouseup event.
   * Resets the isBeingDragged flag to false.
   */
  mouseup(e) {
    this.isBeingDragged = false;
  }

  /**
   * Draws the point on the canvas.
   */
  draw(canvas) {
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#ff5c00";
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}