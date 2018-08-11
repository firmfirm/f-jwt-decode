window.FInterface = window.FInterface || {};

/**
 * `FInterface.JwtDecoder` exposes properties for any JWT decoder.
 *
 * To be used in JWT decoders, their wrappers, stubs or replacements.
 *
 * @polymerBehavior
 */
FInterface.JwtDecoder = {
  properties: {
   /**
    * Token to decode into `value` property
    */
    token: String,

   /**
    * Decoded token from `token` property.
    * `null`, if token has a falsy value.
    */
    value: {
      type: Object,
      notify: true
    }
  }
}
