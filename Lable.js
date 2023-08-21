/**
 * Creates a label object for drawing lines and rectangles with labels on a canvas.
 *
 * @param {CanvasRenderingContext2D} cnx - The canvas rendering context for drawing lines.
 * @param {CanvasRenderingContext2D} cnxYaxis - The canvas rendering context for drawing rectangles and labels.
 * @param {Function} yscale - The y-scale function for mapping data values to pixel coordinates.
 * @param {number} width - The width of the canvas.
 * @param {Object} margin - The margin object containing top, right, bottom, and left values.
 * @param {number[]} lastData - The array of data values representing the last data point.
 * @param {string} [color] - The color of the line and rectangle. If not provided, it is determined based on the data values.
 * @returns {Object} - The label object with line and lable methods.
 *
 * @example
 * // Create canvas contexts and configure the canvas
 * const cnx = canvas.getContext('2d');
 * const cnxYaxis = canvas.getContext('2d');
 * const yscale = d3.scaleLinear().range([height, 0]).domain([0, maxYValue]);
 * const width = canvas.width;
 * const margin = { top: 10, right: 20, bottom: 30, left: 40 };
 * const lastData = [0, 10, 5, 15, 7]; // Example data values
 * const color = "#FF0000"; // Optional color for the line and rectangle
 *
 * // Create a label object
 * const label = Lable(cnx, cnxYaxis, yscale, width, margin, lastData, color);
 *
 * // Draw a line on the canvas
 * label.line();
 *
 * // Draw a rectangle with a label on the y-axis
 * label.lable();
 */
import * as d3 from "d3";

/**
 * Creates a label object for drawing lines and rectangles with labels on a canvas.
 *
 * @param {CanvasRenderingContext2D} cnx - The canvas rendering context for drawing lines.
 * @param {CanvasRenderingContext2D} cnxYaxis - The canvas rendering context for drawing rectangles and labels.
 * @param {Function} yscale - The y-scale function for mapping data values to pixel coordinates.
 * @param {number} width - The width of the canvas.
 * @param {Object} margin - The margin object containing top, right, bottom, and left values.
 * @param {number[]} lastData - The array of data values representing the last data point.
 * @param {string} [color] - The color of the line and rectangle. If not provided, it is determined based on the data values.
 * @returns {Object} - The label object with line and lable methods.
 */
export function Lable(cnx, cnxYaxis, yscale, width, margin, lastData, color) {
  /**
   * Draws a line on the canvas.
   *
   * @param {number} [i=4] - The index of the data value to use for drawing the line.
   */
  Lable.line = (i = 4) => {
    cnx.beginPath();
    cnx.lineWidth = 1;
    cnx.setLineDash([2, 2]);
    cnx.strokeStyle = color
      ? color
      : lastData[1] === lastData[4]
      ? "silver"
      : lastData[1] > lastData[4]
      ? "#EF5350"
      : "#26A69A";
    cnx.moveTo(0, yscale(lastData[i]));
    cnx.lineTo(width, yscale(lastData[i]));
    cnx.stroke();
  };

  /**
   * Draws a rectangle with a label on the y-axis.
   *
   * @param {number} [i=4] - The index of the data value to use for drawing the rectangle and label.
   */
  Lable.lable = (i = 4) => {
    cnxYaxis.beginPath();
    cnxYaxis.fillStyle = color
      ? color
      : lastData[1] === lastData[4]
      ? "silver"
      : lastData[1] > lastData[4]
      ? "#EF5350"
      : "#26A69A";
    // Now width cnxYaxis set to 50 in the future should be changed
    cnxYaxis.fillRect(0, yscale(lastData[i]) - 10, margin.right, 20);
    cnxYaxis.fillStyle = "white";
    cnxYaxis.font = "12px serif";
    const f = d3.format(".1f");
    cnxYaxis.fillText(f(lastData[i]), 4, yscale(lastData[i]) + 5);
  };

  return Lable;
}