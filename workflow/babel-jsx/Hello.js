import React from 'react';

function Hello() {
  return (
    /*#__PURE__*/
    // JSX 是一个对象
    React.createElement("div", {
      className: "box",
      id: "ele"
    }, /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, "Hello"), /*#__PURE__*/React.createElement("button", null, "do click"))
  );
}
