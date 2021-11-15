if (window.addEventListener) { // Mozilla, Netscape, Firefox
  window.addEventListener('load', open_links_in_new_tab, false);
}

else if (window.attachEvent) { // IE
  window.attachEvent('onload', open_links_in_new_tab);
}

function open_links_in_new_tab(event) {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    if (b.getAttribute("href")) {
      b.target = "_blank";
      b.rel = "noopener";
    }
  }
}