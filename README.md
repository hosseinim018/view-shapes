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
## License

This module is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
