import { saveAndRender, createList } from '../modules/saveandrender'

describe('Create a new list', () => {
  let id = Date.now().toString()
  let listName = 'New List'
  let newList = createList(listName, id)

  test('Successfully create a new list', () => {
    expect(typeof newList).toBe('object')
  })

  test('The id of a list should be truthy', () => {
    expect(newList.id).not.toBeNull()
  })

  test('Should return the value of the list name', () => {
    expect(newList.name).toEqual('New List')
  })
})

test('Check the presence of task list', () => {
  expect(saveAndRender()).not.toBeNull()
})
