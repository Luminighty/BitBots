/*
  Author: Alias
  Date: 29/3/2021

  Base class for static map objects.
*/
import {Vector2} from "../data_structures/vector2";
import {MapObject} from "../map_object";

export class Entity extends MapObject {
  constructor(x: number, y: number) {
    this.setPositionV2(new Vector2(x, y));
  }
}
