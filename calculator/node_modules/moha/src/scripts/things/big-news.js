import lifeExp from './life-exp'

// Working only in browsers :(
let bigNews = ($root = document.querySelector('body'), isIncludeTitle = true) => {

  // Replace title
  if (isIncludeTitle) {
    document.title = lifeExp(document.title)
  }

  // Replace body or other DOM
  if ($root !== null) {
    DOMTraversal($root, (node) => {
      if(node.nodeType === 1) { // Element
        tranAttr(node, ['title', 'alt', 'placeholder'])
      } else if (node.nodeType === 3) { // Text
        // FIXME: Disable converting code to halang
        node.data = lifeExp(node.data, {isTrim: false})
      }
    })
  }

  return $root

}

/* ==== Private Functions ==== */
let DOMTraversal = (node, callback) => {
  callback(node)
  node = node.firstChild
  while (node) {
    DOMTraversal(node, callback)
    node = node.nextSibling
  }
}

let tranAttr = (node, attr) => {
  if (Array.isArray(attr)) {
    for(let i = 0; i < attr.length; i++) {
      tranAttr(node, attr[i])
    }
  } else {
    let attrValue = node.getAttribute(attr)
    if (attrValue !== "" && attrValue !== null) {
      node.setAttribute(attr, lifeExp(attrValue, {isTrim: false}))
    }
  }
}

export default bigNews
