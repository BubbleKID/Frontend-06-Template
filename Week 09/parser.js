const EOF= Symbol('EOF'); // EOF: End Of File

function data(c) {
  if(c == '<') {
    return tagOpen;
  } else if (c == EOF) {
    return;
  } else {
    return data;
  }
}

function tagOpen(c) {
  if(c == '/') {
    return endTageOpen
  } else if (c.match(/^[a-zA-Z]$/)) {
    return tagName(c);
  } else {
    return;
  }
}

function endTageOpen(c) {
  if(match(/^[a-zA-Z]$/)) {
    return tagName(c);
  } else if(c == '>') {

  } else if (c == EOF) {

  } else {

  }
}

function tagName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if (c == "/") {
    return selfClosingStartTag;
  } else if (c.match(/^[a-zA-Z]$/)) {
    return tagName;
  } else if (c == ">") {
    return data;
  } else {
    return tagName;
  }
}

function beforeAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if (c == ">") {
    return data;
  } else if (c == "=") {
    return beforeAttributeName;
  } else {
    return attributeName(c);
  }
}

function selfClosingStartTag(c) {
    if (c == ">") {
        currentToken.isSelfClosing = true;
        return data;
    } else if (c == "EOF") {

    } else {

    }
}

module.exports.parseHTML = function parseHTML(html) {
  let state = data;
  for(let c of html) {
    state = state(c);
  }
  state = state(EOF);
}