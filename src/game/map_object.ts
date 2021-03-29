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
  private objName: string;
  private objDescription: string;

  public getName(): string {
    return this.objName;
  }

  public setName(name: string) {
    this.objName = name;
  }

  public getDescription(): string {
    return this.objDescription;
  }

  public setDescription(desc: name) {
    this.objDescription = desc;
  }

  public getPosition(): Vector2 {
    return this.position;
  }

  public setPositionV2(pos: Vector2) {
    this.position = pos;
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
