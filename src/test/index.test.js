import { createTask } from '../index'
import { createList } from '../modules/saveandrender'

test('Check data is added to localStorage', () => {
  expect(localStorage !== {}).toBe(true)
})

describe('Testing createTask function', () => {
  const project1 = createTask(
    1,
    'task 1',
    '2020-12-24',
    'medium',
    'Description project 1',
    false
  )
  const project2 = createTask(
    2,
    'task 2',
    '2020-12-26',
    'high',
    'Description project 2',
    false
  )
  test('Check correct id value', () => {
    expect(project1.id === 1).toBe(true)
  })
  test('Check incorrect id value', () => {
    expect(project2.id === 1).toBe(false)
  })
  test('Check correct name value', () => {
    expect(project1.name === 'task 1').toBe(true)
  })
  test('Check incorrect name value', () => {
    expect(project2.name === 'task 1').toBe(false)
  })
  test('Check correct description value', () => {
    expect(project1.description === 'Description project 1').toBe(true)
  })
  test('Check incorrect description value', () => {
    expect(project2.description === 'Description project 1').toBe(false)
  })

  test('Check correct priority value', () => {
    expect(project1.priority === 'medium').toBe(true)
  })
  test('Check incorrect priority value', () => {
    expect(project2.priority === 'low').toBe(false)
  })
  test('Check correct date value', () => {
    expect(project1.date === '2020-12-24').toBe(true)
  })
  test('Check incorrect date value', () => {
    expect(project2.date === '2020-12-24').toBe(false)
  })
  test('Check correct status value', () => {
    expect(project1.complete === false).toBe(true)
  })
  test('Check incorrect status value', () => {
    expect(project2.complete === true).toBe(false)
  })
})

