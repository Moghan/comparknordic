let nextGarageId = 0
export const addGarage = name => ({
  type: 'ADD_GARAGE',
  id: nextGarageId++,
  name
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}