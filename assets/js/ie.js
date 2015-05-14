//= include_tree polyfills
;(function(undef){
  if( document.createElement('div').firstElementChild===undef ){
    Object.defineProperty(Element.prototype, 'firstElementChild', {
      get : function () { // faster then this.children[0]
        var el = this.firstChild;
        do {
          if(el.nodeType===1){
            return el;
          }
          el = el.nextSibling;
            } while(el);
            return null;
      }
    });
    Object.defineProperty(Element.prototype, 'lastElementChild', {
      get : function () {
        var el = this.lastChild;
        do {
          if(el.nodeType===1){
            return el;
          }
          el = el.previousSibling;
            } while(el);
            return null;
      }
    });
    Object.defineProperty(Element.prototype, 'nextElementSibling', {
      get : function () {
        var el = this.nextSibling;
        while(el) {
          if(el.nodeType===1){
            return el;
          }
          el = el.nextSibling;
            };
            return null;
      }
    });
    Object.defineProperty(Element.prototype, 'previousElementSibling', {
      get : function () {
        var el = this.previousSibling;
        while(el){
          if(el.nodeType===1){
            return el;
          }
          el = el.previousSibling;
            };
            return null;
      }
    });
  }
})();

if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}


