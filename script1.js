let elem = document.querySelector('#elem');
for (let node of elem.childNodes) {
  if (node.nodeType != 8) {
    console.log(node)
  }
}


