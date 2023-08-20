/**
 * This module provides classes for drawing lines on a canvas.
 * It includes the following line types:
 *  - VerticalLine: Represents a vertical line on a chart.
 *  - HorizontalLine: Represents a horizontal line on a chart.
 *  - TrendLine: Represents a trend line on a chart.
 *
 * Each line type supports dragging and updating its position on the canvas.
 * The lines can be customized with different styles and colors.
 *
 * Usage:
 *  1. Import the module into your JavaScript file:
 *     import { VerticalLine, HorizontalLine, TrendLine } from 'path/to/lines-module';
 *
 *  2. Create an instance of the desired line type, providing the necessary parameters:
 *     const vLine = new VerticalLine(x, canvas);
 *     const hLine = new HorizontalLine(y, canvas);
 *     const tLine = new TrendLine(startPoint, endPoint, canvas);
 *
 *  3. Add event listeners to handle user interactions, such as mouse clicks and movement:
 *     canvas.addEventListener('mousedown', vLine.mousedown.bind(vLine));
 *     canvas.addEventListener('mousemove', vLine.mousemove.bind(vLine));
 *     canvas.addEventListener('mouseup', vLine.mouseup.bind(vLine));
 *
 *  4. Call the `draw` method of each line instance to render the lines on the canvas:
 *     vLine.draw(canvas);
 *     hLine.draw(canvas);
 *     tLine.draw(canvas);
 *
 * Note: The `canvas` parameter should be an HTMLCanvasElement object.
 */

import { calPoint } from "./math";
import { Point } from "./point";
import { regression } from "./view-technical/view-technical";

/**
 * Represents a vertical line in a chart.
 */
export class VerticalLine {
  /**
   * Constructs a VerticalLine object.
   * @param {number} x - The x-coordinate of the line.
   * @param {HTMLCanvasElement} canvas - The canvas element on which the line will be drawn.
   */
  constructor(x, canvas) {
    this.x = x;
    this.dragEnabled = false;

    const cnx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    this.point = new Point(this.x, rect.height / 2);
    this.points = [this.point];
  }

  /**
   * Handles the mousedown event.
   * @param {MouseEvent} e - The mousedown event object.
   */
  mousedown(e) {
    const p = calPoint(e);
    const pointPressed = this.points.find((point) => point.inPoint(p.x, p.y));
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
    const pointDragged = this.points.find((point) => point.isBeingDragged);
    if (pointDragged) {
      if (this.point === pointDragged) {
        this.x = p.x;
        this.point.x = p.x;
      }
    }
  }

  /**
   * Handles the mouseup event.
   * @param {MouseEvent} e - The mouseup event object.
   */
  mouseup(e) {
    this.points.forEach((p) => {
      p.isBeingDragged = false;
    });
    this.isDragged = false;
  }

  /**
   * Draws the vertical line on the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas element on which to draw the line.
   */
  draw(canvas) {
    const cnx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    cnx.beginPath();
    cnx.strokeStyle = "rgba(241, 18, 96, 0.36)";
    cnx.lineWidth = 1.5;
    cnx.setLineDash([]);
    cnx.moveTo(this.x, 0);
    cnx.lineTo(this.x, rect.height);
    cnx.stroke();

    if (this.dragEnabled) {
      this.points.forEach((point) => {
        point.draw(canvas);
      });
    }
  }
}

/**
 * Represents a horizontal line in a chart.
 */
export class HorizontalLine {
  /**
   * Constructs a HorizontalLine object.
   * @param {number} y - The y-coordinate of the line.
   * @param {HTMLCanvasElement} canvas - The canvas element on which the line will be drawn.
   */
  constructor(y, canvas) {
    this.y = y;
    this.dragEnabled = false;

    const cnx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    this.point = new Point(rect.width / 2, this.y);
    this.points = [this.point];
  }

  /**
   * Handles the mousedown event.
   * @param {MouseEvent} e - The mousedown event object.
   */
  mousedown(e) {
    const p = calPoint(e);
    const pointPressed = this.points.find((point) => point.inPoint(p.x, p.y));
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
    const pointDragged = this.points.find((point) => point.isBeingDragged);
    if (pointDragged) {
      if (this.point === pointDragged) {
        this.y = p.y;
        this.point.y = p.y;
      }
    }
  }

  /**
   * Handles the mouseup event.
   * @param {MouseEvent} e - The mouseup event object.
   */
  mouseup(e) {
    this.points.forEach((p) => {
      p.isBeingDragged = false;
    });
    this.isDragged = false;
  }

  /**
   * Draws the horizontal line on the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas element on which to draw the line.
   */
  draw(canvas){
    const cnx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    cnx.beginPath();
    cnx.strokeStyle = "rgba(241, 18, 96, 0.36)";
    cnx.lineWidth = 1.5;
    cnx.setLineDash([]);
    cnx.moveTo(0, this.y);
    cnx.lineTo(rect.width, this.y);
    cnx.stroke();

    if (this.dragEnabled) {
      this.points.forEach((point) => {
        point.draw(canvas);
      });
    }
  }
}

/**
 * Represents a trend line in a chart.
 */
export class TrendLine {
  /**
   * Constructs a TrendLine object.
   * @param {Point} startPoint - The starting point of the line.
   * @param {Point} endPoint - The ending point of the line.
   * @param {HTMLCanvasElement} canvas - The canvas element on which the line will be drawn.
   */
  constructor(startPoint, endPoint, canvas) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.dragEnabled = false;

    const cnx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    this.points = [this.startPoint, this.endPoint];
  }

  /**
   * Handles the mousedown event.
   * @param {MouseEvent} e - The mousedown event object.
   */
  mousedown(e) {
    const p = calPoint(e);
    const pointPressed = this.points.find((point) => point.inPoint(p.x, p.y));
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
    const pointDragged = this.points.find((point) => point.isBeingDragged);
    if (pointDragged) {
      if (this.startPoint === pointDragged) {
        this.startPoint.x = p.x;
        this.startPoint.y = regression(this.startPoint.x);
      } else if (this.endPoint === pointDragged) {
        this.endPoint.x = p.x;
        this.endPoint.y = regression(this.endPoint.x);
      }
    }
  }

  /**
   * Handles the mouseup event.
   * @param {MouseEvent} e - The mouseup event object.
   */
  mouseup(e) {
    this.points.forEach((p) => {
      p.isBeingDragged = false;
    });
    this.isDragged = false;
  }

  /**
   * Draws the trend line on the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas element on which to draw the line.
   */
  draw(canvas) {
    const cnx = canvas.getContext("2d");

    cnx.beginPath();
    cnx.strokeStyle = "rgba(241, 18, 96, 0.36)";
    cnx.lineWidth = 1.5;
    cnx.setLineDash([]);
    cnx.moveTo(this.startPoint.x, this.startPoint.y);
    cnx.lineTo(this.endPoint.x, this.endPoint.y);
    cnx.stroke();

    if (this.dragEnabled) {
      this.points.forEach((point) => {
        point.draw(canvas);
      });
    }
  }
}