/**
[auth0/jwt-decode](https://github.com/auth0/jwt-decode) wrapper element.

Example:

    <f-jwt-decode token="..." value="{{decoded}}"></f-jwt-decode>
    <p>[[decoded]]</p>

@element jwt-decode
@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'jwt-decode/build/jwt-decode.js';
import './finterface-jwt-decoder.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
Polymer({

  is: 'f-jwt-decode',
  behaviors: [FInterface.JwtDecoder],
  observers: ['_tokenChanged(token)'],

  /**
   * Decode JWT
   *
   * @param {string} a full JWT
   * @return {Object} claims
   */
   decode: function(token) {
     if (!token) return null;
     const decode = typeof global !== 'undefined'
       ? global.window.jwt_decode
       : window.jwt_decode;
     return decode(token);
   },

   _tokenChanged: function(newValue) {
     this.value = this.decode(newValue);
   }
});
