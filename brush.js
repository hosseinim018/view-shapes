/**
 * Module representing a Brush object for drawing on a canvas.
 *
 * The Brush class provides functionality to draw freehand lines on a canvas.
 * It tracks the mouse movement to capture the points and renders the lines on the canvas.
 *
 * @module Brush
 * @example
 * // Create a new instance of the Brush class
 * const brush = new Brush();
 *
 * // Attach event listeners to the canvas
 * canvas.addEventListener('mousedown', brush.mousedown.bind(brush));
 * canvas.addEventListener('mousemove', brush.mousemove.bind(brush));
 * canvas.addEventListener('mouseup', brush.mouseup.bind(brush));
 *
 * // Draw the brush strokes on the canvas
 * brush.draw(canvas);
 */

import { calPoint } from "./math";
import { Point } from "./point";

/**
 * Represents a brush object for drawing on a canvas.
 *
 * The Brush class provides functionality to draw freehand lines on a canvas.
 * It tracks the mouse movement to capture the points and renders the lines on the canvas.
 *
 * @module Brush
 */
export class Brush {
  /**
   * Creates a new instance of the Brush class.
   */
  constructor() {
    this.dragEnabled = false;
    this.points = [];
    this.fillColor = 'rgba(241, 18, 96, 0.36)';
    this.size = 2;
    this.isDragged = false;
  }

  /**
   * Handles the mousedown event.
   *
   * @param {MouseEvent} e - The mousedown event object.
   */
  mousedown(e) {
    this.isDragged = true;
    const p = calPoint(e);
    const point = new Point(p.x, p.y);
    this.points = [point];
  }

  /**
   * Handles the mousemove event.
   *
   * @param {MouseEvent} e - The mousemove event object.
   */
  mousemove(e) {
    if (this.isDragged) {
      const p = calPoint(e);
      const point = new Point(p.x, p.y);
      this.points.push(point);
    }
  }

  /**
   * Handles the mouseup event.
   *
   * @param {MouseEvent} e - The mouseup event object.
   */
  mouseup(e) {
    this.dragEnabled = false;
    this.isDragged = false;
  }

  /**
   * Draws the brush strokes on the canvas.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
   */
  draw(canvas) {
    const context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = this.fillColor;
    context.lineWidth = this.size;
    context.setLineDash([]);

    this.points.forEach((point, index) => {
      if (index === 0) {
        context.moveTo(point.x, point.y);
      } else {
        context.lineTo(point.x, point.y);
      }
    });

    context.stroke();
  }
}