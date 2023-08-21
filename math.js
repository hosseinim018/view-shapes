/**
 * Creates a vector with the specified x and y coordinates.
 *
 * @param {number} x - The x-coordinate of the vector.
 * @param {number} y - The y-coordinate of the vector.
 * @returns {Object} - The created vector object.
 *
 * @example
 * // Create a vector with coordinates (3, 4)
 * const vector = createVector(3, 4);
 * console.log(vector); // Output: { x: 3, y: 4 }
 */
export function createVector(x, y) {
  return { x, y };
}

/**
 * Calculates the distance between two points using the distance formula.
 *
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * @returns {number} - The distance between the two points.
 *
 * @example
 * // Calculate the distance between points (1, 2) and (4, 6)
 * const distance = dist(1, 2, 4, 6);
 * console.log(distance); // Output: 5
 */
export function dist(x1, y1, x2, y2) {
  const absX = Math.abs(x2 - x1);
  const absY = Math.abs(y2 - y1);
  const distance = Math.sqrt(absX ** 2 + absY ** 2);
  return distance;
}

/**
 * Calculates the coordinates of a point relative to a canvas based on a given event object.
 *
 * @param {Event} e - The event object representing the event.
 * @returns {Object} - The coordinates of the point relative to the canvas.
 *
 * @example
 * // Assuming a canvas element with id "myCanvas" exists in the HTML
 * const canvas = document.getElementById("myCanvas");
 * canvas.addEventListener("click", (e) => {
 *   // Calculate the coordinates of the clicked point relative to the canvas
 *   const point = calPoint(e);
 *   console.log(point); // Output: { x: 50, y: 70 }
 * });
 */
export function calPoint(e) {
  const canvas = e.target;
  const rect = canvas.getBoundingClientRect();
  const x = e.x - rect.left;
  const y = e.y - rect.top;
  return { x, y };
}