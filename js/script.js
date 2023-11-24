"use strict";

const DomElement = function (selector) {
  this.selector = selector;
  this.height = 40;
  this.width = 400;
  this.bg = "";
  this.fontSize = 14;
  this.create = (text) => {
    let elem = {};
    if (this.selector) {
      if (this.selector[0] === ".") {
        elem = document.createElement("div");
        elem.classList.add(this.selector.slice(1));
      } else if (this.selector[0] === "#") {
        elem = document.createElement("p");
        elem.setAttribute("id", this.selector.slice(1));
      }
    }
    elem.style.cssText = `
    height: ${this.height}px;
    width: ${this.width}px;
    background: ${this.bg};
    font-size: ${this.fontSize}px;
    `;
    elem.textContent = text;
    // console.log('elem: ', elem);
    document.body.prepend(elem);
  };
};
const block = new DomElement(".block");
const paragraph = new DomElement("#best");

block.height = 100;
block.width = 100;
block.bg = "yellow";
block.create("Это блок");

paragraph.fontSize = 20;
paragraph.create("Это параграф");
