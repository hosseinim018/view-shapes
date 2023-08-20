/**
 * This module provides a Range class for drawing and manipulating range shapes on a canvas.
 * It extends the trendline class and includes methods for handling mouse events, updating
 * the range's position and dimensions, and rendering the range on the canvas.
 *
 * Usage:
 *  1. Import the module into your JavaScript file:
 *     import { Range } from 'path/to/range-module';
 *
 *  2. Create an instance of the Range class, providing the initial x and y coordinates of
 *     the two points that define the range:
 *     const range = new Range(x1, x2, y1, y2);
 *
 *  3. Optional: Enable dragging by setting the `dragEnabled` property to true:
 *     range.dragEnabled = true;
 *
 *  4. Add event listeners to handle user interactions, such as mouse clicks and movement:
 *     canvas.addEventListener('mousedown', range.mousedown.bind(range));
 *     canvas.addEventListener('mousemove', range.mousemove.bind(range));
 *     canvas.addEventListener('mouseup', range.mouseup.bind(range));
 *
 *  5. Call the `draw` method of the range instance to render the range on the canvas:
 *     range.draw(canvas);
 *
 *  6. Optional: Customize the appearance of the range by modifying properties like `fillColor`.
 *
 * Note: The `canvas` parameter should be an HTMLCanvasElement object.
 */
import { trendline } from "./lines";

/**
 * Represents a Range shape on a canvas, extending the trendline class.
 */
export class Range extends trendline {
  /**
   * Creates a new Range instance.
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
   * Draws the range on the canvas.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
   */
  draw(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();

    // Set fill color based on range direction
    const fillColor = (this.y1 === this.y2)
      ? "silver"
      : (this.y1 < this.y2)
        ? "rgba(239, 83, 80, 0.3)"
        : "rgba(38, 166, 154, 0.3)";

    // Draw range rectangle
    ctx.fillStyle = fillColor;
    const x = Math.min(this.x1, this.x2);
    const y = Math.min(this.y1, this.y2);
    const width = Math.abs(this.x2 - this.x1);
    const height = Math.abs(this.y2 - this.y1);
    ctx.fillRect(x, y, width, height);

    // Draw text
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.font = "12px serif";
    const text = `p1:${this.y1}-p2:${this.y2}-prcent:${Math.abs(this.y2 - this.y1) / 100}`;
    ctx.fillText(text, x, y);

    if (this.dragEnabled) {
      this.points.forEach(point => {
        point.draw(canvas);
      });
    }
  }
}