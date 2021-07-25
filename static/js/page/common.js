import executableCode from 'kotlin-runcode';
import $ from 'jquery';
import 'whatwg-fetch';

import '../com/search/search';
import '../com/cookie-banner';
import CodeMirror from '../com/codemirror/CodeMirror';

import NavTree from '../com/nav-tree';

$(document).ready(function () {
  executableCode('.sample');

  CodeMirror.colorize($('.code._highlighted'));

  var html = document.getElementsByTagName('html')[0];

  html.className = html.className.replace('no-js', '');

  // OS detection
  if (navigator.userAgent.indexOf('Linux') > -1)
    html.className += ' os_linux';

  // Browser detection
  if ('chrome' in window)
    html.className += ' ua_chrome';
  else if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
    html.className += ' ua_firefox';

  // hack to force :active support in mobile Safari
  document.addEventListener("touchstart", function () {
  }, false);

  $('h1,h2,h3').each(function (element) {
    var id = this.getAttribute("id");
    if (id == null) return;
    var referenceElement = document.createElement("a");
    referenceElement.className = "anchor";
    referenceElement.href = "#" + id;
    this.appendChild(referenceElement);
  });

  var sideTreeElement = document.querySelector('.js-side-tree-nav');
  if (sideTreeElement) {
    new NavTree(sideTreeElement);
  }
});