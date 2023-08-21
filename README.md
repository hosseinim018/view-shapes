# view-shapes
handle shapes and tools for views plot

## Usage

To create a draggable point and add it to a canvas, you can use the following code:
first clone view-technical to this repo:
```git
git clone https://github.com/hosseinim018/view-technical.git
```
Based on the provided code, it seems like you have a module that exports various shape objects for charting purposes. Below is the documentation for each shape:
Certainly! Here's the documentation for the updated JavaScript module:

## `shape` Module

The `shape` module exports various shape objects that can be used for charting purposes.

### Usage

```javascript
import { shape } from 'path/to/shape';

// Access the available shape objects
const { Circle, verticalLine, horizontalLine, crossLine, trendline, reyLine, xreyLine, fibonacciRetracement, Range, Rect, Point, Brush, Channel, Triangle, Rectangle } = shape;

// Create instances of the shape objects and use them for charting
const circle = new Circle();
const line = verticalLine();
const range = new Range();
// ...
```

### Exported Shape Objects

The `shape` module exports the following shape objects:

#### `Circle`

A circle shape for charting.

```javascript
const circle = new Circle(radius);
```

- `radius` (number): The radius of the circle.

#### `verticalLine`

A vertical line shape for charting.

```javascript
const line = verticalLine();
```

#### `horizontalLine`

A horizontal line shape for charting.

```javascript
const line = horizontalLine();
```

#### `crossLine`

A cross line shape for charting.

```javascript
const line = crossLine();
```

#### `trendline`

A trendline shape for charting.

```javascript
const line = trendline();
```

#### `reyLine`

A rey line shape for charting.

```javascript
const line = reyLine();
```

#### `xreyLine`

An xrey line shape for charting.

```javascript
const line = xreyLine();
```

#### `fibonacciRetracement`

A Fibonacci retracement shape for charting.

```javascript
const fib = new fibonacciRetracement(start, end);
```

- `start` (number): The starting value of the Fibonacci retracement.
- `end` (number): The ending value of the Fibonacci retracement.

#### `Range`

A range shape for charting.

```javascript
const range = new Range(start, end);
```

- `start` (number): The starting value of the range.
- `end` (number): The ending value of the range.

#### `Rect`

A rectangle shape for charting.

```javascript
const rect = new Rect(width, height);
```

- `width` (number): The width of the rectangle.
- `height` (number): The height of the rectangle.

#### `Point`

A point shape for charting.

```javascript
const point = new Point(x, y);
```

- `x` (number): The x-coordinate of the point.
- `y` (number): The y-coordinate of the point.

#### `Brush`

A brush shape for charting.

```javascript
const brush = new Brush(size, color);
```

- `size` (number): The size of the brush.
- `color` (string): The color of the brush.

#### `Channel`

A channel shape for charting.

```javascript
const channel = new Channel(startPoint, endPoint);
```

- `startPoint` (Point): The starting point of the channel.
- `endPoint` (Point): The ending point of the channel.

#### `Triangle`

A triangle shape for charting.

```javascript
const triangle = new Triangle(point1, point2, point3);
```

- `point1` (Point): The first point of the triangle.
- `point2` (Point): The second point of the triangle.
- `point3` (Point): The third point of the triangle.

#### `Rectangle`

A rectangle shape for charting.

```javascript
const rectangle = new Rectangle(x, y, width, height);
```

- `x` (number): The x-coordinate of the top-left corner of the rectangle.
- `y` (number): The y-coordinate of the top-left corner of the rectangle.
- `width` (number): The width of the rectangle.
- `height` (number): The height of the rectangle.

Please note that the specific properties and methods of each shape object may vary. Refer to the documentation and implementation of each shape object for more details on how to use them effectively in your charting application.
---
### `Circle`

A circle shape for charting.

### `verticalLine`

A vertical line shape for charting.

### `horizontalLine`

A horizontal line shape for charting.

### `crossLine`

A cross line shape for charting.

### `trendline`

A trendline shape for charting.

### `reyLine`

A rey line shape for charting.

### `xreyLine`

An xrey line shape for charting.

### `fibonacciRetracement`

A Fibonacci retracement shape for charting.

### `Range`

A range shape for charting.

### `Rect`

A rectangle shape for charting.

### `Point`

A point shape for charting.

### `Brush`

A brush shape for charting.

### `Channel` A channel shape for charting.

### `Triangle` A triangle shape for charting.

### `Rectangle` A rectangle shape for charting.



## API
Certainly! Here's the documentation for the provided module:

### `createVector`

The `createVector` function creates a vector with the specified x and y coordinates.

#### Parameters

- `x` (number): The x-coordinate of the vector.
- `y` (number): The y-coordinate of the vector.

#### Returns

- (Object): The created vector object with properties `x` and `y`.

#### Usage

```javascript
// Create a vector with coordinates (3, 4)
const vector = createVector(3, 4);
console.log(vector); // Output: { x: 3, y: 4 }
```

### `dist`

The `dist` function calculates the distance between two points using the distance formula.

#### Parameters

- `x1` (number): The x-coordinate of the first point.
- `y1` (number): The y-coordinate of the first point.
- `x2` (number): The x-coordinate of the second point.
- `y2` (number): The y-coordinate of the second point.

#### Returns

- (number): The distance between the two points.

#### Usage

```javascript
// Calculate the distance between points (1, 2) and (4, 6)
const distance = dist(1, 2, 4, 6);
console.log(distance); // Output: 5
```

### `calPoint`

The `calPoint` function calculates the coordinates of a point relative to a canvas based on a given event object.

#### Parameters

- `e` (Event): The event object representing the event.

#### Returns

- (Object): The coordinates of the point relative to the canvas with properties `x` and `y`.

#### Usage

Assuming a canvas element with id "myCanvas" exists in the HTML:

```javascript
const canvas = document.getElementById("myCanvas");
canvas.addEventListener("click", (e) => {
  // Calculate the coordinates of the clicked point relative to the canvas
  const point = calPoint(e);
  console.log(point); // Output: { x: 50, y: 70 }
});
```
---
### `Point`

#### Constructor

```javascript
const point = new Point(x, y);
```

Creates a new draggable point with the specified initial position `(x, y)`.

#### Methods

- `set(x, y)`: Updates the position of the point to the specified coordinates `(x, y)`.

- `mousedown(event)`: Handles the mousedown event to check if the point is being dragged.

- `mousemove(event)`: Handles the mousemove event to update the position of the point if it is being dragged.

- `mouseup(event)`: Handles the mouseup event to stop dragging the point.

- `draw(canvas)`: Draws the point on the canvas.
---
### `VerticalLine`

#### Constructor

```javascript
const vLine = new VerticalLine(x, canvas);
```
Represents a vertical line in a chart.

#### Methods

- `mousedown(event)`: Handles the mousedown event.

- `mousemove(event)`: Handles the mousemove event.

- `mouseup(event)`: Handles the mouseup event.

- `draw(canvas)`: Draws the vertical line on the canvas.
---
### `HorizontalLine`

#### Constructor

```javascript
const hLine = new HorizontalLine(y, canvas);
```
Represents a horizontal line in a chart.
#### Methods

- `mousedown(event)`: Handles the mousedown event.

- `mousemove(event)`: Handles the mousemove event.

- `mouseup(event)`: Handles the mouseup event.

- `draw(canvas)`: Draws the horizontal line on the canvas.
---
### `TrendLine`

#### Constructor

```javascript
const tLine = new TrendLine(startPoint, endPoint, canvas);
```
Represents a trend line in a chart.
#### Methods

- `mousedown(event)`: Handles the mousedown event.

- `mousemove(event)`: Handles the mousemove event.

- `mouseup(event)`: Handles the mouseup event.

- `draw(canvas)`: Draws the horizontal line on the canvas.
---
### `Circle`

#### Constructor

```javascript
const circle = new Circle(x, y, radius);
```
Represents a trend line in a chart.
#### Methods
- `initPoints()`: Initializes the center and radius points of the circle.
- `mousedown(event)`: Handles the mousedown event.
- `mousemove(event)`: Handles the mousemove event.
- `mouseup(event)`: Handles the mouseup event.
- `draw(canvas)`: Draws the circle on the canvas.
#### Optional
- Enable dragging by setting the `dragEnabled` property to true:
    ```javascript
    circle.dragEnabled = true;
    ```
- Customize the appearance of the circle by modifying properties like `fillColor`.
    ```javascript
    circle.fillColor = 'rgba(241, 18, 230, 0.36)';
    ```
---
### `FibonacciRetracement`
FibonacciRetracement class for drawing and displaying Fibonacci retracement levels on a canvas.
It extends the trendline class and includes methods for handling mouse events, updating the retracement's position
and dimensions, and rendering the retracement levels on the canvas.

#### Constructor

```javascript
const retracement = new FibonacciRetracement(x1, x2, y1, y2);
```
Represents a Fibonacci Retracement object on a canvas, extending the trendline class.
#### Methods
- `mousedown(event)`: Handles the mousedown event.
- `mousemove(event)`: Handles the mousemove event.
- `mouseup(event)`: Handles the mouseup event.
- `draw(canvas)`: Draws the range on the canvas.
#### Optional
- Enable dragging by setting the `dragEnabled` property to true:
    ```javascript
    retracement.dragEnabled = true;
    ```
- Customize the appearance of the retracement levels by modifying properties like `strokeStyle`
    and `lineWidth`.
    ```javascript
    retracement.strokeStyle = 'rgba(241, 18, 230, 0.36)';
    retracement.lineWidth = 1.5;
    ```
---
### `Channel`

The Channel class provides functionality to create and manipulate a rectangular channel
on a canvas. It allows for the dragging of individual corner points or the entire channel
within the canvas. The channel can be drawn with a specified fill color and can detect
whether given coordinates are inside the channel.

#### Constructor

```javascript
const channel = new Channel(x, y, x2, width, height);
```
Represents a Channel object on a canvas.

#### Methods
- `inPoint(x, y)`: Checks if the given coordinates are inside the Channel.
- `mousedown(event)`: Handles the mousedown event.
- `mousemove(event)`: Handles the mousemove event.
- `mouseup(event)`: Handles the mouseup event.
- `draw(canvas)`: Draws the Channel on the canvas.
#### Optional
- Enable dragging by setting the `dragEnabled` property to true:
    ```javascript
    channel.dragEnabled = true;
    ```
- Customize the appearance of the channel by modifying properties like `fillColor`.
    ```javascript
    channel.fillColor = 'rgba(241, 18, 230, 0.36)';
    ```
---
### `Brush`

The Brush class provides functionality to draw freehand lines on a canvas.
It tracks the mouse movement to capture the points and renders the lines on the canvas.

#### Constructor

```javascript
const brush = new Brush();
```
Represents a Brush object on a canvas.

#### Methods
- `mousedown(event)`: Handles the mousedown event.
- `mousemove(event)`: Handles the mousemove event.
- `mouseup(event)`: Handles the mouseup event.
- `draw(canvas)`: Draws the Brush on the canvas.
#### Optional
- Enable dragging by setting the `dragEnabled` property to true:
    ```javascript
    brush.dragEnabled = true;
    ```
- Customize the appearance of the Brush by modifying properties like `fillColor`.
    ```javascript
    brush.fillColor = 'rgba(241, 18, 230, 0.36)';
    ```
---
### `Triangle`

The Triangle class provides functionality to create and manipulate a triangle
on a canvas. It allows for dragging of individual points or the entire triangle
within the canvas. The triangle can be drawn with a specified fill color and can
detect whether given coordinates are inside the triangle.

#### Constructor

```javascript
const triangle = new Triangle(x1, y1, x2, y2, x3, y3);
```
Represents a Triangle object on a canvas.

#### Methods
- `mousedown(event)`: Handles the mousedown event.
- `mousemove(event)`: Handles the mousemove event.
- `mouseup(event)`: Handles the mouseup event.
- `draw(canvas)`: Draws the Brush on the canvas.
#### Optional
- Enable dragging by setting the `dragEnabled` property to true:
    ```javascript
    triangle.dragEnabled = true;
    ```
- Customize the appearance of the triangle by modifying properties like `fillColor`.
    ```javascript
    triangle.fillColor = 'rgba(241, 18, 230, 0.36)';
    ```
---
### `Rect`

The `Rect` class provides functionality to create and manipulate a rectangle
on a canvas. It allows for dragging of individual points or the entire rectangle
within the canvas. The rectangle can be drawn with a specified fill color and can
detect whether given coordinates are inside the rectangle.

#### Constructor

```javascript
const rectangle = new Rect(x, y, width, height);
```
Represents a Rect object on a canvas.
#### Methods
- `mousedown(event)`: Handles the mousedown event.
- `mousemove(event)`: Handles the mousemove event.
- `mouseup(event)`: Handles the mouseup event.
- `draw(canvas)`: Draws the Brush on the canvas.
#### Optional
- Enable dragging by setting the `dragEnabled` property to true:
    ```javascript
    rectangle.dragEnabled = true;
    ```
- Customize the appearance of the Rect by modifying properties like `fillColor`.
    ```javascript
    rectangle.fillColor = 'rgba(241, 18, 230, 0.36)';
    ```
---
### `Lable`

The `Lable` function creates a label object that provides functionality to draw lines and rectangles with labels on a canvas.

#### Function Signature

```javascript
function Lable(cnx, cnxYaxis, yscale, width, margin, lastData, color)
```

#### Parameters

- `cnx` (CanvasRenderingContext2D): The canvas rendering context for drawing lines.
- `cnxYaxis` (CanvasRenderingContext2D): The canvas rendering context for drawing rectangles and labels.
- `yscale` (Function): The y-scale function for mapping data values to pixel coordinates.
- `width` (number): The width of the canvas.
- `margin` (Object): The margin object containing top, right, bottom, and left values.
- `lastData` (number\[\]): The array of data values representing the last data point.
- `color` (string, optional): The color of the line and rectangle. If not provided, it is determined based on the data values.

#### Returns

- An object containing the following methods:

  - `line(i)`: Draws a line on the canvas using the specified index of the data value.
  - `lable(i)`: Draws a rectangle with a label on the y-axis using the specified index of the data value.

#### Usage

```javascript
// Create canvas contexts and configure the canvas
const cnx = canvas.getContext('2d');
const cnxYaxis = canvas.getContext('2d');
const yscale = d3.scaleLinear().range([height, 0]).domain([0, maxYValue]);
const width = canvas.width;
const margin = { top: 10, right: 20, bottom: 30, left: 40 };
const lastData = [0, 10, 5, 15, 7]; // Example data values
const color = "#FF0000"; // Optional color for the line and rectangle

// Create a label object
const label = Lable(cnx, cnxYaxis, yscale, width, margin, lastData, color);

// Draw a line on the canvas
label.line();

// Draw a rectangle with a label on the y-axis
label.lable();
```

#### Optional

- Enable dragging by setting the `dragEnabled` property to true:

  ```javascript
  rectangle.dragEnabled = true;
  ```

- Customize the appearance of the Rect by modifying properties like `fillColor`:

  ```javascript
  rectangle.fillColor = 'rgba(241, 18, 230, 0.36)';
  ```
---
### `crosshair`

The `crosshair` function draws crosshairs on a canvas at the specified coordinates using the provided rendering contexts and scales.

#### Parameters

- `x` (number): The x-coordinate of the crosshair.
- `y` (number): The y-coordinate of the crosshair.
- `cnxYaxis` (CanvasRenderingContext2D): The canvas rendering context for the y-axis.
- `cnxXaxis` (CanvasRenderingContext2D): The canvas rendering context for the x-axis.
- `xscale` (Function): The x-scale function for mapping data values to pixel coordinates.
- `yscale` (Function): The y-scale function for mapping data values to pixel coordinates.
- `margin` (Object): The margin object containing top, right, bottom, and left values.

#### Usage

```javascript
// Create canvas rendering contexts and configure the canvas
const cnxYaxis = canvas.getContext('2d');
const cnxXaxis = canvas.getContext('2d');
const xscale = d3.scaleLinear().range([0, width]).domain([0, maxXValue]);
const yscale = d3.scaleLinear().range([height, 0]).domain([0, maxYValue]);
const margin = { top: 10, right: 20, bottom: 30, left: 40 };

// Define the coordinates of the crosshair
const x = 100;
const y = 200;

// Draw the crosshair on the canvas
crosshair(x, y, cnxYaxis, cnxXaxis, xscale, yscale, margin);
```

#### Example

The following example demonstrates how to use the `crosshair` function to draw crosshairs on a canvas.

```javascript
// Create canvas rendering contexts and configure the canvas
const canvas = document.getElementById("myCanvas");
const cnxYaxis = canvas.getContext("2d");
const cnxXaxis = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const xscale = d3.scaleLinear().range([0, width]).domain([0, 100]);
const yscale = d3.scaleLinear().range([height, 0]).domain([0, 100]);
const margin = { top: 10, right: 20, bottom: 30, left: 40 };

// Define the coordinates of the crosshair
const x = 50;
const y = 70;

// Draw the crosshair on the canvas
crosshair(x, y, cnxYaxis, cnxXaxis, xscale, yscale, margin);
```
---
## License

This module is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
