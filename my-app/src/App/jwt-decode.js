//Decodes the access token to be able to use the information in the front end
function b64DecodeUnicode(str) {
    return decodeURIComponent(
      atob(str).replace(/(.)/g, function (m, p) {
        var code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
          code = "0" + code;
        }
        return "%" + code;
      })
    );
  }
  
  function base64UrlDecode(str) {
    var output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += "==";
        break;
      case 3:
        output += "=";
        break;
      default:
        throw "Illegal base64url string!";
    }
  
    try {
      return b64DecodeUnicode(output);
    } catch (err) {
      return atob(output);
    }
  }
  
  export function jwtDecode(token, options) {
    options = options || {};
    var pos = options.header === true ? 0 : 1;
    try {
      return JSON.parse(base64UrlDecode(token.split(".")[pos]));
    } catch (e) {
      console.log(e.message);
    }
  }