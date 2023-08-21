import * as d3 from "d3";

/**
 * Draws crosshairs on a canvas at the specified coordinates using the provided rendering contexts and scales.
 *
 * @param {number} x - The x-coordinate of the crosshair.
 * @param {number} y - The y-coordinate of the crosshair.
 * @param {CanvasRenderingContext2D} cnxYaxis - The canvas rendering context for the y-axis.
 * @param {CanvasRenderingContext2D} cnxXaxis - The canvas rendering context for the x-axis.
 * @param {Function} xscale - The x-scale function for mapping data values to pixel coordinates.
 * @param {Function} yscale - The y-scale function for mapping data values to pixel coordinates.
 * @param {Object} margin - The margin object containing top, right, bottom, and left values.
 *
 * @example
 *
 * // Create canvas rendering contexts and configure the canvas
 * const cnxYaxis = canvas.getContext('2d');
 * const cnxXaxis = canvas.getContext('2d');
 * const xscale = d3.scaleLinear().range([0, width]).domain([0, maxXValue]);
 * const yscale = d3.scaleLinear().range([height, 0]).domain([0, maxYValue]);
 * const margin = { top: 10, right: 20, bottom: 30, left: 40 };
 *
 * // Define the coordinates of the crosshair
 * const x = 100;
 * const y = 200;
 *
 * // Draw the crosshair on the canvas
 * crosshair(x, y, cnxYaxis, cnxXaxis, xscale, yscale, margin);
 */
export function crosshair(x, y, cnxYaxis, cnxXaxis, xscale, yscale, margin) {
  cnxXaxis.save();
  cnxYaxis.save();

  // Draw a rectangle on the y-axis
  cnxYaxis.beginPath();
  cnxYaxis.fillStyle = 'black';
  cnxYaxis.fillRect(0, y - 10, margin.right, 20);
  cnxYaxis.fillStyle = 'white';
  cnxYaxis.font = "12px serif";
  const yValue = yscale.invert(y);
  cnxYaxis.fillText(d3.format(".10f")(yValue), 4, y + 5);

  // Draw a rectangle on the x-axis
  cnxXaxis.beginPath();
  cnxXaxis.fillStyle = 'black';
  cnxXaxis.fillRect(x - 50, 0, 100, 20);
  cnxXaxis.fillStyle = 'white';
  cnxXaxis.font = "12px serif";
  const xValue = xscale.invert(x);
  cnxXaxis.fillText(d3.timeFormat("%d  %b'%y %I:%M")(xValue), x - 40, 15);

  cnxXaxis.restore();
  cnxYaxis.restore();
}