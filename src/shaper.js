const { kzMap } = require('./transitionLangs')

const hasKey = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

const getHyphenateIndex = (prevEnd, prev, current) => {
  if (!prev || !current) return -1
  if (prev === '\u0644' && current === '\u0627') {
    if (prevEnd) {
      return 0
    } else {
      return 1
    }
  }
  return -1
}

const getCharIndex = (prevEnd, prev, current) => {
  if (!prev || !hasKey(kzMap, prev)) {
    return 0
  }
  if (!current || !hasKey(kzMap, current)) {
    if (hasKey(kzMap[prev], '3') && !prevEnd) {
      return 3
    } else {
      return 4
    }
  }
  if (prevEnd) {
    if (hasKey(kzMap[prev], '1') && (hasKey(kzMap[current], '2') || hasKey(kzMap[current], '3'))) {
      return 1
    } else {
      return 4
    }
  } else {
    if (hasKey(kzMap[prev], '2') && ((hasKey(kzMap[current], '2') || hasKey(kzMap[current], '3')))) {
      return 2
    } else if (hasKey(kzMap[prev], '3')) {
      return 3
    }
  }
}

export default function shaper (string) {
  if (typeof string !== 'string') return string
  let index = 0
  const length = string.length
  let prev = string.charAt(index++)
  let prevEnd = true
  let result = ''
  let charIndex = null
  const jointCharArray = ['\uFEFB', '\uFEFC']
  for (; index <= length; index++) {
    const current = index !== length ? string.charAt(index) : undefined
    if (prev === '\u06BE') { result += '\uFBAC'; prev = current; prevEnd = false; continue }
    const jointCharIndex = getHyphenateIndex(prevEnd, prev, current)
    if (jointCharIndex !== -1) {
      result += jointCharArray[jointCharIndex]
      if (index === length - 1) {
        break
      } else {
        prevEnd = true
        prev = string.charAt(++index)
        continue
      }
    }
    charIndex = getCharIndex(prevEnd, prev, current)
    result += (charIndex === 0 ? prev : kzMap[prev][charIndex])
    prevEnd = (!((charIndex === 1 || charIndex === 2)))
    prev = current
  }
  const rowResult = result.split('\n').filter(z => z.trim())
  let encodeString = ''
  rowResult.forEach((ele, i) => {
    if (ele.trim()) {
      const enter = i < rowResult.length - 1 ? '\n' : ''
      encodeString += ele.split('').reverse().join('') + enter
    }
  })
  return encodeString
}
