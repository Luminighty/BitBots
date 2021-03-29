/*
  Author: Alias
  Date: 28/3/2021

  Tests src/game/unit.ts
*/
import {Unit} from "../src/game/units/unit";
import {Settings} from "../src/game/settings";

var assert = require("assert");

describe("unit.ts", function() {
  describe("moving", function() {
    it("should move the bot on the map within its bounds if it is able to move.", function() {
        var u = new Unit();

        //Test chunk 1
        u.setPosition(0, 1);
        u.setCanMove(true);
        u.moveUp();
        assert.equal(u.getPosition().y, 2, "chunk 1: up");
        u.moveRight();
        assert.equal(u.getPosition().x, 1, "chunk 1: right");
        u.moveLeft();
        assert.equal(u.getPosition().x, 0, "chunk 1: left");
        u.moveDown();
        assert.equal(u.getPosition().y, 1, "chunk 1: down");

        //Test chunk 2
        u.setPosition(0, 0);
        u.moveUp();
        u.moveUp();
        u.moveUp();
        u.moveRight();
        u.moveRight();
        assert.equal(u.getPosition().x, 2, "chunk 2: right");
        assert.equal(u.getPosition().y, 3, "chunk 2: up");

        //Test chunk 3
        for(var i = 0; i < Settings.BOUNDS_X + 10; i++)
          u.moveLeft();
        assert.equal(u.getPosition().x, 0, "chunk 3: left");
        for(var i = 0; i < Settings.BOUNDS_X + 10; i++)
          u.moveRight();
        assert.equal(u.getPosition().x, Settings.BOUNDS_X, "chunk 3: right");
        for(var i = 0; i < Settings.BOUNDS_Y + 10; i++)
          u.moveDown();
        assert.equal(u.getPosition().y, 0, "chunk 3: down");
        for(var i = 0; i < Settings.BOUNDS_Y + 10; i++)
          u.moveUp();
        assert.equal(u.getPosition().x, Settings.BOUNDS_Y, "chunk 3: up");

        //Test chunk 4
        u.setPosition(1, 1);
        u.setCanMove(false);
        u.moveUp();
        assert.equal(u.getPosition().y, 1, "chunk 4: up");
        u.moveRight();
        assert.equal(u.getPosition().x, 1, "chunk 4: right");
        u.moveLeft();
        assert.equal(u.getPosition().x, 1, "chunk 4: left");
        u.moveDown();
        assert.equal(u.getPosition().y, 1, "chunk 4: down");

        //Test chunk 5
        u.setPosition(-1, -1);
        u.setCanMove(true);
        u.moveUp();
        u.moveRight();
        assert.equal(u.getPosition().x, -1, "chunk 5: right");
        assert.equal(u.getPosition().y, -1, "chunk 5: up");
        u.moveDown();
        u.moveLeft();
        assert.equal(u.getPosition().x, -1, "chunk 5: left");
        assert.equal(u.getPosition().y, -1, "chunk 5: down");
    })
  }), //end moving tests
  describe("hp", function() {
    it("should have hp that increases/decreases", function() {
      //Test chunk 1
      var u = new Unit();
      u.setHp(100);
      assert.equal(u.getHp(), 100, "chunk 1: hp start");
      u.addHp(-1);
      assert.equal(u.getHp(), 99, "chunk 1: hp decrement");
      u.addHp(2);
      assert.equal(u.getHp(), 101, "chunk1: hp += 2");
    })
  })
}) //end unit_tests
