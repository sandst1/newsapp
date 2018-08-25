
const mapById = function(list) {
  return list.reduce((byId, item) => {
    byId[item.id] = item
    return byId
  }, {})
}

export {
  mapById
}