/*
  Author: Alias
  Date: 28/3/2021

  The Unit class is the base class for anything we wish to put on the BitBots map.
*/
import {Vector2} from "../data_structures/vector2";
import {Settings} from "../settings";
import {MapObject} from "../map_object";

export class Unit extends MapObject{
  private canMove: bool;

  constructor() {
    this.unitId = -1;
    this.position = new Vector2(-1, -1);
    this.canMove = false;
  }

  private move(dir: string) {
    if(!this.canMove || this.position.x == -1 || this.position.y == -1)
      return;

    if(dir == "up") {
      if(this.position.y != Settings.BOUNDS_Y) {
        this.position.y++;
      }
    }
    else if(dir == "down") {
      if(this.position.y != 0) {
        this.position.y--;
      }
    }
    else if(dir == "left") {
      if(this.position.x != 0) {
        this.position.x--;
      }
    }
    else if(dir == "right") {
      if(this.position.x != Settings.BOUNDS_X){
        this.position.x++;
      }
    }
  }

  public moveUp() {
    this.move("up");
  }

  public moveRight() {
    this.move("right");
  }

  public moveLeft() {
    this.move("left");
  }

  public moveDown() {
    this.move("down");
  }

  public setCanMove(canMove: bool) {
    this.canMove = canMove;
  }
}
