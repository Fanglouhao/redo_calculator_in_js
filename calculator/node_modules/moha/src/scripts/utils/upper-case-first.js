export default (str) => {
  if (str == null) {
    return ''
  }
  return str.charAt(0).toUpperCase() + str.substr(1)
}
