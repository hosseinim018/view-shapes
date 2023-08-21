/**
 * Represents a Rectangle object on a canvas.
 *
 * The Rect class provides functionality to create and manipulate a rectangle
 * on a canvas. It allows for dragging of individual points or the entire rectangle
 * within the canvas. The rectangle can be drawn with a specified fill color and can
 * detect whether given coordinates are inside the rectangle.
 *
 * @module Rect
 * @example
 * // Create a new instance of the Rect class
 * const rectangle = new Rect(100, 100, 200, 100);
 *
 * // Attach event listeners to the canvas
 * canvas.addEventListener('mousedown', rectangle.mousedown.bind(rectangle));
 * canvas.addEventListener('mousemove', rectangle.mousemove.bind(rectangle));
 * canvas.addEventListener('mouseup', rectangle.mouseup.bind(rectangle));
 *
 * // Enable dragging of the rectangle
 * rectangle.dragEnabled = true;
 *
 * // Draw the rectangle on the canvas
 * rectangle.draw(canvas);
 */
import { Point } from "./point";

/**
 * Represents a Rectangle object on a canvas.
 *
 * The Rect class provides functionality to create and manipulate a rectangle
 * on a canvas. It allows for dragging of individual points or the entire rectangle
 * within the canvas. The rectangle can be drawn with a specified fill color and can
 * detect whether given coordinates are inside the rectangle.
 *
 * @module Rect
 */
export class Rect {
  /**
   * Creates a new instance of the Rect class.
   *
   * @param {number} x - The x-coordinate of the top-left corner of the rectangle.
   * @param {number} y - The y-coordinate of the top-left corner of the rectangle.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   */
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.fillColor = 'rgba(241, 18, 230, 0.36)';
    this.dragEnabled = false;

    // Initialize points
    this.topLeft = new Point(0, 0);
    this.topRight = new Point(0, 0);
    this.bottomRight = new Point(0, 0);
    this.bottomLeft = new Point(0, 0);

    this.points = [this.topLeft, this.topRight, this.bottomRight, this.bottomLeft];

    // Calculate min and max coordinates
    const allX = this.points.map(p => p.x);
    const allY = this.points.map(p => p.y);

    this.minX = Math.min(...allX);
    this.minY = Math.min(...allY);
    this.maxX = Math.max(...allX);
    this.maxY = Math.max(...allY);

    // Initialize position and size
    this._x = this.minX;
    this._y = this.minY;
    this._width = this.maxX - this.minX;
    this._height = this.maxY - this.minY;

    // Set points' positions
    this.topLeft.set(this.minX, this.minY);
    this.topRight.set(this.maxX, this.minY);
    this.bottomRight.set(this.maxX, this.maxY);
    this.bottomLeft.set(this.minX, this.maxY);
  }

  /**
   * Handles the mousedown event.
   *
   * @param {MouseEvent} e - The mousedown event object.
   * @returns {boolean} - Indicates if a point or the drag area was pressed.
   */
  mousedown(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const pointPressed = this.points.find(point => point.containsXY(mouseX, mouseY));

    if (pointPressed) {
      pointPressed.isBeingDragged = true;
      this.isDragged = true;
      return true;
    } else {
      const dragAreaPressed = this.dragArea.containsXY(mouseX, mouseY);
      if (dragAreaPressed) {
        this.isDragged = true;
        this.dragOffset = new Point(mouseX - this.x, mouseY - this.y);
        return true;
      }
    }

    return false;
  }

  /**
   * Handles the mousemove event.
   *
   * @param {MouseEvent} e - The mousemove event object.
   */
  mousemove(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const pointDragged = this.points.find(point => point.isBeingDragged);

    if (pointDragged) {
      pointDragged.set(mouseX, mouseY);

      if (this.topLeft === pointDragged) {
        this.bottomLeft.x = pointDragged.x;
        this.topRight.y = pointDragged.y;
      } else if (this.topRight === pointDragged) {
        this.bottomRight.x = pointDragged.x;
        this.topLeft.y = pointDragged.y;
      } else if (this.bottomRight === pointDragged) {
        this.topRight.x = pointDragged.x;
        this.bottomLeft.y = pointDragged.y;
      } else if (this.bottomLeft === pointDragged) {
        this.topLeft.x = pointDragged.x;
        this.bottomRight.y = pointDragged.y;
      }

      this.computePosAndSize();
    } else {
      this._x = mouseX - this.dragOffset.x;
      this._y = mouseY - this.dragOffset.y;
      this.computePoints();
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
   * Draws the rectangle on the canvas.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
   */
  draw(canvas) {
    const cnx = canvas.getContext('2d');
    cnx.beginPath();
    cnx.fillStyle = this.fillColor;
    cnx.fillRect(this.x, this.y, this.width, this.height);

    if (this.dragEnabled) {
      this.points.forEach(point => {
        point.draw(canvas);
      });
    }
  }
}