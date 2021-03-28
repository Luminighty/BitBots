import {Vector2} from "./data_structures/vector2";
import {Settings} from "./settings";

export class Unit {
  private id: number;
  private position: Vector2;
  private canMove: bool;

  constructor() {
    this.id = -1;
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

  public getPosition() : Vector2 {
    return this.position;
  }

  public setPositionV2(position: Vector2) {
    this.position = position;
  }

  public setPosition(x: number, y: number) {
    this.position.x = x;
    this.position.y  = y;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }
}
