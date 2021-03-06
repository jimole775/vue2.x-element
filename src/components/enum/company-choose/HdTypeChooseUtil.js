
function toTitle(val) {
  switch (val) {
    case 1:
      return '协议货代'
    case 2:
      return '指定货代'
    default:
      return val
  }
}

function toValue(val) {
  switch (val) {
    case '协议货代':
      return 1
    case '指定货代':
      return 2
    default:
      return val
  }
}

function toTitleFilter(val) {
  return toTitle(val)
}

function toValueFilter(val) {
  return toValue(val)
}

export default {
  toTitle,
  toValue,
  toTitleFilter,
  toValueFilter
}
