# view-shapes
handle shapes and tools for views plot

## Usage

To create a draggable point and add it to a canvas, you can use the following code:
first clone view-technical to this repo:
```git
git clone https://github.com/hosseinim018/view-technical.git
```
## API

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
