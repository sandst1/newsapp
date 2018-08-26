
const mapById = function(list) {
  return list.reduce((byId, item) => {
    byId[item.id] = item
    return byId
  }, {})
}

const sortByCreatedDesc = function(list) {
  list.sort((a, b) => {
    const aDate = new Date(a.created)
    const bDate = new Date(b.created)
    return aDate > bDate ? -1 : 1
  })
  return list
}

export {
  mapById,
  sortByCreatedDesc
}