/**
 * Represents a Triangle object on a canvas.
 *
 * The Triangle class provides functionality to create and manipulate a triangle
 * on a canvas. It allows for dragging of individual points or the entire triangle
 * within the canvas. The triangle can be drawn with a specified fill color and can
 * detect whether given coordinates are inside the triangle.
 *
 * @module Triangle
 * @example
 * // Create a new instance of the Triangle class
 * const triangle = new Triangle(100, 100, 200, 200, 300, 100);
 *
 * // Attach event listeners to the canvas
 * canvas.addEventListener('mousedown', triangle.mousedown.bind(triangle));
 * canvas.addEventListener('mousemove', triangle.mousemove.bind(triangle));
 * canvas.addEventListener('mouseup', triangle.mouseup.bind(triangle));
 *
 * // Enable dragging of the triangle
 * triangle.dragEnabled = true;
 *
 * // Draw the triangle on the canvas
 * triangle.draw(canvas);
 */

import { Point } from "./point";
import { calPoint } from "./math";

/**
 * Represents a Triangle object on a canvas.
 *
 * The Triangle class provides functionality to create and manipulate a triangle
 * on a canvas. It allows for dragging of individual points or the entire triangle
 * within the canvas. The triangle can be drawn with a specified fill color and can
 * detect whether given coordinates are inside the triangle.
 *
 * @module Triangle
 */
export class Triangle {
  /**
   * Creates a new instance of the Triangle class.
   *
   * @param {number} x1 - The x-coordinate of the first point.
   * @param {number} y1 - The y-coordinate of the first point.
   * @param {number} x2 - The x-coordinate of the second point.
   * @param {number} y2 - The y-coordinate of the second point.
   * @param {number} x3 - The x-coordinate of the third point.
   * @param {number} y3 - The y-coordinate of the third point.
   */
  constructor(x1, y1, x2, y2, x3, y3) {
    this.p1 = new Point(x1, y1);
    this.p2 = new Point(x2, y2);
    this.p3 = new Point(x3, y3);

    this.dragEnabled = false;
    this.isDragged = false;

    this.points = [this.p1, this.p2, this.p3];

    this.fillColor = 'rgba(241, 18, 230, 0.36)';
  }

  /**
   * Handles the mousedown event.
   *
   * @param {MouseEvent} e - The mousedown event object.
   * @returns {boolean} - Indicates if a point was pressed.
   */
  mousedown(e) {
    const p = calPoint(e);
    const pointPressed = this.points.find(point => point.inPoint(p.x, p.y));

    if (pointPressed) {
      pointPressed.isBeingDragged = true;
      this.isDragged = true;
      return true;
    }

    return false;
  }

  /**
   * Handles the mousemove event.
   *
   * @param {MouseEvent} e - The mousemove event object.
   */
  mousemove(e) {
    const p = calPoint(e);
    const pointDragged = this.points.find(point => point.isBeingDragged);

    if (pointDragged) {
      pointDragged.set(p.x, p.y);
    }
  }

  /**
   * Handles the mouseup event.
   *
   * @param {MouseEvent} e - The mouseup event object.
   */
  mouseup(e) {
    this.points.forEach(point => {
      point.isBeingDragged = false;
    });
    this.isDragged = false;
  }

  /**
   * Draws the triangle on the canvas.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
   */
  draw(canvas) {
    const context = canvas.getContext('2d');
    context.beginPath();
    context.fillStyle = this.fillColor;
    context.moveTo(this.p1.x, this.p1.y);
    context.lineTo(this.p2.x, this.p2.y);
    context.lineTo(this.p3.x, this.p3.y);
    context.closePath();
    context.fill();

    if (this.dragEnabled) {
      this.points.forEach(point => {
        point.draw(canvas);
      });
    }
  }
}