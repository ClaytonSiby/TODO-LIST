import {
  saveAndRender,
  render,
  lists,
  selectedListId,
  createList,
} from '../modules/saveandrender';

jest.mock('../modules/saveandrender');


test('Check the presence of task list', () => {
  expect(saveAndRender()).not.toBeNull();
});

