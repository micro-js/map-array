/**
 * Expose map
 */

module.exports = map['default'] = map

/**
 * Map array
 * @param  {Function} fn
 * @param  {Array} arr
 * @param  {Mixed} ctx
 * @return {Array}
 */

function map (fn, arr, ctx) {
  var len = arr.length
  var result = new Array(len)

  for (var i = 0; i < len; ++i) {
    result[i] = fn.call(ctx, arr[i], i)
  }

  return result
}
