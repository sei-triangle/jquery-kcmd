;(function($) {

  $.fn.knmcmd = function(cmd, func) {
    var elements = this;
    var args = Array.prototype.slice.call(arguments, 2);
    elements.each(function() {
      $(this).data('knmcmd', new KnmCmd($(this), cmd, func, args));
    });
    return this;
  };

  function KnmCmd($elm, cmd, func, args) {
    var self = this,
        charMap = {
          '←': 37, '↑': 38, '→': 39, '↓': 40
        },
        chars = [],
        pos = 0
      ;

    var makeChars = function(cmd) {
      cmd = cmd.toUpperCase();
      var cs = [];
      for (var i = 0; i < cmd.length; i++) {
        var c = cmd[i];
        if (charMap.hasOwnProperty(c)) {
          cs.push(charMap[c]);
        } else {
          cs.push(c.charCodeAt(0));
        }
      }
      return cs;
    };

    var setEvents = function() {
      $elm.keyup(function(e) {
        if (chars[pos] === e.keyCode) {
            pos++;
            if (pos == chars.length) {
              func.apply($elm, args);
              pos = 0;
            }
        } else {
            pos = 0;
        }
      });
    };

    var initialize = function() {
      chars = makeChars(cmd);
      setEvents();
      return self;
    };

    return initialize();
  }
})(jQuery);
