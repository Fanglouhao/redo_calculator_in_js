let extend = (dest) => {
  let objs = [].slice.call(arguments, 1)

  for (var i = 0, len = objs.length; i < len; i++) {
    let obj = objs[i]
    for (var prop in obj) {
      dest[prop] = obj[prop]
    }
  }

  return dest
}

export default extend
