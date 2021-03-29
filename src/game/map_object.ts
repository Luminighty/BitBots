/*
  Author: Alias
  Date: 29/3/2021

  Base class for all map objects such as Entity or Unit.
*/
import {Vector2} from "./data_structures/vector2";

export class MapObject {
  private position: Vector2;
  private hp: number;
  private ownerId: number;

  public getPosition(): Vector2 {
    return this.position;
  }

  public setPosition(x: number, y: number) {
    this.position.x = x;
    this.position.y = y;
  }

  public getHp(): number {
    return this.hp;
  }

  public setHp(hp : number) {
    this.hp = hp;
  }

  public addHp(hp: number) {
    this.hp += hp;
  }

  public getOwnerId(): number {
    return this.ownerId;
  }

  public setOwnerId(oid: number) {
    this.ownerId = oid;
  }
}
