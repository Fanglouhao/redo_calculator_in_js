import pangu from '../modules/pangu'
import extend from '../utils/extend'
import upperCaseFirst from '../utils/upper-case-first'
import expsDict from '../stores/exps-dict'

let lifeExp = (talks, options = {}) => {
  // Init exps
  let exps = talks

  // Init options
  let defaultOptions = {
    isTrim: true,
    isWearGlasses: false
  }
  options = extend({}, defaultOptions, options)

  /* ==== Teaching ==== */

  // Replace text according to expsDict
  for (let pattern in expsDict) {
    exps = exps.replace(new RegExp(pattern, 'ig'), expsDict[pattern])
  }

  // TODO: Wear glasses
  if (options.isWearGlasses) {

  }

  // Add space between Chinese and English characters
  exps = pangu(exps)

  // Remove leading and trailing excess spaces
  if (options.isTrim) {
    exps.trim()
  }

  // Upper case the first character of each sentence
  let endPunctuation = [
    '。', '！', '？', // Fullwidth
    '. ', '! ', '? ' // Halfwidth
  ]
  endPunctuation.forEach((mark) => {
    exps = exps.split(mark).map(upperCaseFirst).join(mark)
  })

  return exps
}

export default lifeExp
