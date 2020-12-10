const modalBtn = document.createElement('button');
const modal = document.createElement('div');
const modalDialog = document.createElement('div');
const modalContent = document.createElement('div');
const modalHeader = document.createElement('div');
const modalTitle = document.createElement('h5');

const setAttributes = (el, attrs) => {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key])
  }
};

let attributesForModalBtn = {
  type: 'button',
  'data-bs-toggle': 'modal',
  'data-bs-target': '#staticBackdrop'
};

let attributesForModal = {
  id: 'staticBackdrop',
  'data-bs-backdrop': 'static',
  'data-bs-keyboard': 'false',
  tabindex: '-1',
  'aria-labelledby': 'staticBackdropLabel',
  'aria-hidden': 'true'
};

let attributesForModalTitle = {
    id: 'staticBackdropLabel'
}

modalBtn.textContent = 'Create Task';
modalBtn.classList = 'btn btn-primary';
setAttributes(modalBtn, attributesForModalBtn);

modal.classList = 'modal fade';
setAttributes(modal, attributesForModal);

modalDialog.classList = 'modal-dialog';
modalContent.classList = 'modal-content';
modalHeader.classList = 'modal-header';
