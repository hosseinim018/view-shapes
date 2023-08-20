/**
 * This module provides a FibonacciRetracement class for drawing and displaying Fibonacci retracement levels on a canvas.
 * It extends the trendline class and includes methods for handling mouse events, updating the retracement's position
 * and dimensions, and rendering the retracement levels on the canvas.
 *
 * Usage:
 *  1. Import the module into your JavaScript file:
 *     import { FibonacciRetracement } from 'path/to/fibonacci-retracement-module';
 *
 *  2. Create an instance of the FibonacciRetracement class, providing the initial x and y coordinates of the
 *     two points that define the retracement:
 *     const retracement = new FibonacciRetracement(x1, x2, y1, y2);
 *
 *  3. Optional: Enable dragging by setting the `dragEnabled` property to true:
 *     retracement.dragEnabled = true;
 *
 *  4. Add event listeners to handle user interactions, such as mouse clicks and movement:
 *     canvas.addEventListener('mousedown', retracement.mousedown.bind(retracement));
 *     canvas.addEventListener('mousemove', retracement.mousemove.bind(retracement));
 *     canvas.addEventListener('mouseup', retracement.mouseup.bind(retracement));
 *
 *  5. Call the `draw` method of the retracement instance to render the Fibonacci retracement levels on the canvas:
 *     retracement.draw(canvas);
 *
 *  6. Optional: Customize the appearance of the retracement levels by modifying properties like `strokeStyle`
 *     and `lineWidth`.
 *
 * Note: The `canvas` parameter should be an HTMLCanvasElement object.
 */

import { trendline } from "./lines";
import { FibonacciRetracement } from "./math";

/**
 * Represents a Fibonacci Retracement object on a canvas, extending the trendline class.
 */
export class FibonacciRetracement extends trendline {
  /**
   * Creates a new FibonacciRetracement instance.
   *
   * @constructor
   * @param {number} x1 - The x-coordinate of the first point.
   * @param {number} x2 - The x-coordinate of the second point.
   * @param {number} y1 - The y-coordinate of the first point.
   * @param {number} y2 - The y-coordinate of the second point.
   */
  constructor(x1, x2, y1, y2) {
    super(x1, x2, y1, y2);
  }

  /**
   * Draws the Fibonacci retracement levels on the canvas.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
   */
  draw(canvas) {
    const ctx = canvas.getContext('2d');
    const fib = FibonacciRetracement(this.y1, this.y2);

    for (const fibKey in fib) {
      ctx.beginPath();

      // Draw Fibonacci lines
      ctx.strokeStyle = '#ff00aa';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      ctx.moveTo(this.x1, fib[fibKey]);
      ctx.lineTo(this.x2, fib[fibKey]);
      ctx.stroke();

      // Draw Fibonacci labels
      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.font = "12px serif";
      ctx.fillText(`${fibKey} (${fib[fibKey]})`, this.x1, fib[fibKey]);
    }

    if (this.dragEnabled) {
      this.points.forEach(point => {
        point.draw(canvas);
      });
    }
  }
}