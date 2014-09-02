var Colorizer = {};

(function (Colorizer) {

  var templates = {
    spanTemplate: _.template('<span style="color: #<%-color%>"><%-text%></span>')
  };

  /**
   * Converts a character to the matching color code
   * @param character
   * @returns {*}
   */
  function characterToColor(character) {
    colors = {
      '0': "000000",
      '1': "ff0000",
      '2': "00ff00",
      '3': "ffff00",
      '4': "0000ff",
      '5': "00ffff",
      '6': "ff00ff",
      '7': "ffffff",
      '8': "ff7f00",
      '9': "7f7f7f",
      ':': "bfbfbf",
      ';': "bfbfbf",
      '<': "007f00",
      '=': "7f7f00",
      '>': "00007f",
      '?': "7f0000",
      '@': "7f3f00",
      'a': "ff9919",
      'b': "007f7f",
      'c': "7f007f",
      'd': "007fff",
      'e': "7f00ff",
      'f': "3399cc",
      'g': "ccffcc",
      'h': "006633",
      'i': "ff0033",
      'j': "b21919",
      'k': "993300",
      'l': "cc9933",
      'm': "999933",
      'n': "ffffbf",
      'o': "ffff7f",
      'p': "000000",
      'q': "ff0000",
      'r': "00ff00",
      's': "ffff00",
      't': "0000ff",
      'u': "00ffff",
      'v': "ff00ff",
      'w': "ffffff",
      'x': "ff7f00",
      'y': "7f7f7f",
      'z': "bfbfbf"
    };

    return colors[character];
  };

  /**
   * Parses a string and returns a string with
   * colors
   * @returns {*}
   */
  Colorizer.parseEscapedText = function (text) {
    var unescaped = _.unescape(text), currentColor = null,
      nextColor = '7', parsed = "";

    for (i = 0, len = unescaped.length; i < len; i++) {
      if (unescaped[i] === '^' && unescaped[i + 1] !== '^') {
        console.log("next color: " + unescaped[i + 1]);
        nextColor = unescaped[i + 1];
        i++;
        continue;
      }

      if (currentColor !== nextColor) {
        if (currentColor !== null) {
          parsed += "</span>";
        }
        currentColor = nextColor;
        parsed += '<span style="color: #' + characterToColor(nextColor) + '">';
      }
      parsed += _.escape(unescaped[i]);
    }

    if (currentColor !== null) {
      parsed += "</span>";
    }

    return parsed;
  };
}(Colorizer));
