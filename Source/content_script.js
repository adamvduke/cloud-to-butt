walk(document.body);

function walk(node) {
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;
    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode)
{
  var v = textNode.nodeValue;

  v = v.replace(/\balt-right\b/gi, "Neo Nazi");
  v = v.replace(/\balt right\b/gi, "Neo Nazi");
  v = v.replace(/\balternative-right\b/gi, "Neo Nazi");
  v = v.replace(/\balternative right\b/gi, "Neo Nazi");

  textNode.nodeValue = v;
}
