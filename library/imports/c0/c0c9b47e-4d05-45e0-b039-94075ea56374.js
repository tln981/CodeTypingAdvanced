"use strict";
cc._RF.push(module, 'c0c9bR+TQVF4LA5lAdepWN0', 'WPMScore');
// Script/WPMScore.js

'use strict';

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    correct: cc.Label,
    wrong: cc.Label,
    score: cc.Label
  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},

  start: function start() {},
  display: function display(correct, wrong, time) {
    this.correct.string = correct;
    this.wrong.string = wrong;
    this.score.string = this.formatTime(time);
  },
  formatTime: function formatTime(seconds) {
    cc.log(seconds);
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds - 60 * minutes;
    var formattedTime = ('0' + minutes).slice(-2) + ':' + ('0' + remainingSeconds).slice(-2);
    return formattedTime;
  }
});

cc._RF.pop();