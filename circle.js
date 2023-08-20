/**
 * This module provides a Circle class for drawing and manipulating circles on a canvas.
 * It includes methods for handling mouse events, updating the circle's position and radius,
 * and rendering the circle on the canvas.
 *
 * Usage:
 *  1. Import the module into your JavaScript file:
 *     import { Circle } from 'path/to/circle-module';
 *
 *  2. Create an instance of the Circle class, providing the initial x, y, and radius values:
 *     const circle = new Circle(x, y, radius);
 *
 *  3. Optional: Enable dragging by setting the `dragEnabled` property to true:
 *     circle.dragEnabled = true;
 *
 *  4. Add event listeners to handle user interactions, such as mouse clicks and movement:
 *     canvas.addEventListener('mousedown', circle.mousedown.bind(circle));
 *     canvas.addEventListener('mousemove', circle.mousemove.bind(circle));
 *     canvas.addEventListener('mouseup', circle.mouseup.bind(circle));
 *
 *  5. Call the `draw` method of the circle instance to render the circle on the canvas:
 *     circle.draw(canvas);
 *
 *  6. Optional: Customize the appearance of the circle by modifying properties like `fillColor`.
 *
 * Note: The `canvas` parameter should be an HTMLCanvasElement object.
 */

import { Point } from "@/assets/chart/shapes/point";
import { calPoint } from "@/assets/chart/shapes/math";

/**
 * Represents a Circle shape on a canvas.
 */
export class Circle {
  /**
   * Creates a new Circle instance.
   * @param {number} x - The x-coordinate of the circle's center.
   * @param {number} y - The y-coordinate of the circle's center.
   * @param {number} radius - The radius of the circle.
   */
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dragEnabled = false;
    this.fillColor = 'rgba(241, 18, 230, 0.36)';
    this.initPoints();
  }

  /**
   * Initializes the center and radius points of the circle.
   */
  initPoints() {
    this.centerPoint = new Point(this.x, this.y);
    this.radiusPoint = new Point(this.x + this.radius, this.y);
    this.points = [this.centerPoint, this.radiusPoint];
  }

  /**
   * Handles the mousedown event.
   * @param {MouseEvent} e - The mousedown event object.
   */
  mousedown(e) {
    const p = calPoint(e);
    const pointPressed = this.points.find(point => point.inPoint(p.x, p.y));

    if (pointPressed) {
      pointPressed.isBeingDragged = true;
      this.isDragged = true;
    }
  }

  /**
   * Handles the mousemove event.
   * @param {MouseEvent} e - The mousemove event object.
   */
  mousemove(e) {
    const p = calPoint(e);
    const pointDragged = this.points.find(point => point.isBeingDragged);

    if (pointDragged) {
      if (this.radiusPoint === pointDragged) {
        const dx = Math.abs(p.x - this.x) ** 2;
        this.radius = Math.sqrt(dx);
        pointDragged.x = p.x;
      } else if (this.centerPoint === pointDragged) {
        pointDragged.set(p.x, p.y);
        this.x = p.x;
        this.y = p.y;
        this.radiusPoint.y = pointDragged.y;
        this.radiusPoint.x = pointDragged.x + this.radius;
      }
    }
  }

  /**
   * Handles the mouseup event.
   * @param {MouseEvent} e - The mouseup event object.
   */
  mouseup(e) {
    this.points.forEach(p => {
      p.isBeingDragged = false;
    });
    this.isDragged = false;
  }

  /**
   * Draws the circle on the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
   */
  draw(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = this.fillColor;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();

    if (this.dragEnabled) {
      this.points.forEach(point => {
        point.draw(canvas);
      });
    }
  }
}