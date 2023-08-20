/**
 * Module representing a Channel object on a canvas.
 *
 * The Channel class provides functionality to create and manipulate a rectangular channel
 * on a canvas. It allows for the dragging of individual corner points or the entire channel
 * within the canvas. The channel can be drawn with a specified fill color and can detect
 * whether given coordinates are inside the channel.
 *
 * @module Channel
 */

import { Point } from "./point";
import { calPoint } from "./math";

/**
 * Represents a Channel object on a canvas.
 */
export class Channel {
  /**
   * Creates a new Channel instance.
   *
   * @constructor
   * @param {number} x - The x-coordinate of the top left corner.
   * @param {number} y - The y-coordinate of the top left corner.
   * @param {number} x2 - The x-coordinate of the bottom right corner.
   * @param {number} width - The width of the channel.
   * @param {number} height - The height of the channel.
   */
  constructor(x, y, x2, width, height) {
    this.dx = Math.abs(x - x2);
    this.topLeft = new Point(x, y);
    this.topRight = new Point(width, y);
    this.bottomRight = new Point(width - this.dx, height);
    this.bottomLeft = new Point(x2, height);
    this.points = [this.topLeft, this.topRight, this.bottomRight, this.bottomLeft];
    this.dragEnabled = false;
    this.fillColor = 'rgba(241, 18, 230, 0.36)';
  }

  /**
   * Checks if the given coordinates are inside the Channel.
   *
   * @param {number} x - The x-coordinate to check.
   * @param {number} y - The y-coordinate to check.
   * @returns {boolean} - True if the coordinates are inside the Channel, false otherwise.
   */
  inPoint(x, y) {
    const allX = this.points.map(p => p.x);
    const allY = this.points.map(p => p.y);
    const minX = Math.min(...allX);
    const minY = Math.min(...allY);
    const maxX = Math.max(...allX);
    const maxY = Math.max(...allY);

    return minX <= x && x < maxX && minY <= y && y < maxY;
  }

  /**
   * Handles the mousedown event.
   *
   * @param {MouseEvent} e - The mousedown event object.
   * @returns {boolean} - True if the event was handled, false otherwise.
   */
  mousedown(e) {
    let p = calPoint(e);
    const pointPressed = this.points.find(point => point.inPoint(p.x, p.y));

    if (pointPressed) {
      pointPressed.isBeingDragged = true;
      this.isDragged = true;
      return true;
    } else {
      const dragAreaPressed = this.inPoint(p.x, p.y);
      if (dragAreaPressed) {
        this.isDragged = true;
        return true;
      }
      return false;
    }
  }

  /**
   * Handles the mousemove event.
   *
   * @param {MouseEvent} e - The mousemove event object.
   */
  mousemove(e) {
    let p = calPoint(e);
    const pointDragged = this.points.find(point => point.isBeingDragged);
    const dragAreaPressed = this.inPoint(p.x, p.y);

    if (pointDragged) {
      pointDragged.set(p.x, p.y);

      if (this.topLeft === pointDragged) {
        this.bottomLeft.x = pointDragged.x - this.dx;
        this.topRight.y = pointDragged.y;
      } else if (this.topRight === pointDragged) {
        this.bottomRight.x = pointDragged.x - this.dx;
        this.topLeft.y = pointDragged.y;
      } else if (this.bottomRight === pointDragged) {
        this.topRight.x = pointDragged.x + this.dx;
        this.bottomLeft.y = pointDragged.y;
      } else if (this.bottomLeft === pointDragged) {
        this.topLeft.x = pointDragged.x + this.dx;
        this.bottomRight.y = pointDragged.y;
      }
    }

    if (dragAreaPressed) {
      // Additional code for handling drag area interaction can be added here
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
   * Draws the Channel on the canvas.
   *
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
   */
  draw(canvas) {
    let cnx = canvas.getContext('2d');
    cnx.beginPath();
    cnx.fillStyle = this.fillColor;

    this.points.forEach((point, index) => {
      if (index === 0) {
        cnx.moveTo(point.x, point.y);
      } else {
        cnx.lineTo(point.x, point.y);
      }
    });

    cnx.closePath();
    cnx.fill();

    if (this.dragEnabled) {
      this.points.forEach(point => {
        point.draw(canvas);
      });
    }
  }
}