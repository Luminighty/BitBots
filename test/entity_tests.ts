/*
  Author: Alias
  Date: 29/3/2021

  Tests src/game/entity.ts
*/
import {Entity} from "../src/game/entities/entity";
import {Vector2} from "../data_structures/vector2";

var assert = require("assert");

describe("entity.ts", function() {
  describe("creation", function() {
    it("should require a position to be instantiated and remain static", function() {
      //Test chunk 1
      var e = new Entity(1, 1);
      var pos = e.getPosition();
      assert.equal(e.getPosition().x, 1, "chunk 1: x");
      assert.equal(e.getPosition().y, 1, "chunk 1: y");
    })
  }),
  describe("hp", function() {
    it("should have hp that increases/decreases", function() {
      //Test chunk 1
      var e = new Entity(1, 1);
      e.setHp(100);
      assert.equal(e.getHp(), 100, "chunk 1: hp start");
      e.addHp(-1);
      assert.equal(e.getHp(), 99, "chunk 1: hp decrement");
      e.addHp(2);
      assert.equal(e.getHp(), 101, "chunk1: hp += 2");
    })
  })
})
