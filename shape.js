import { Circle } from "@/assets/chart/shapes/circle";
import { verticalLine, horizontalLine, crossLine, trendline, reyLine, xreyLine } from "@/assets/chart/shapes/lines";
import { fibonacciRetracement } from "@/assets/chart/shapes/fibonacci";
import { Range } from "@/assets/chart/shapes/range";
import { Rect } from "@/assets/chart/shapes/rect";
import { Point } from "@/assets/chart/shapes/point";
import { Brush } from "@/assets/chart/shapes/brush";
import { Channel } from "@/assets/chart/shapes/channels";
import { Triangle } from "@/assets/chart/shapes/traingle";

/**
 * Module that exports various shape objects for charting purposes.
 *
 * Each shape object provides functionality for creating and manipulating specific chart shapes.
 *
 * @module shape
 */

export const shape = {
  /**
   * Circle shape for charting.
   *
   * @type {Circle}
   */
  Circle: Circle,

  /**
   * Vertical line shape for charting.
   *
   * @type {Function}
   */
  verticalLine: verticalLine,

  /**
   * Horizontal line shape for charting.
   *
   * @type {Function}
   */
  horizontalLine: horizontalLine,

  /**
   * Cross line shape for charting.
   *
   * @type {Function}
   */
  crossLine: crossLine,

  /**
   * Trendline shape for charting.
   *
   * @type {Function}
   */
  trendline: trendline,

  /**
   * Rey line shape for charting.
   *
   * @type {Function}
   */
  reyLine: reyLine,

  /**
   * Xrey line shape for charting.
   *
   * @type {Function}
   */
  xreyLine: xreyLine,

  /**
   * Fibonacci retracement shape for charting.
   *
   * @type {Function}
   */
  fibonacciRetracement: fibonacciRetracement,

  /**
   * Range shape for charting.
   *
   * @type {Range}
   */
  Range: Range,

  /**
   * Rectangle shape for charting.
   *
   * @type {Rect}
   */
  Rect: Rect,

  /**
   * Point shape for charting.
   *
   * @type {Point}
   */
  Point: Point,

  /**
   * Brush shape for charting.
   *
   * @type {Brush}
   */
  Brush: Brush,

  /**
   * Channel shape for charting.
   *
   * @type {Channel}
   */
  Channel: Channel,

  /**
   * Triangle shape for charting.
   *
   * @type {Triangle}
   */
  Triangle: Triangle,
};