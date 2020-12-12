/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/saveandrender */ \"./src/modules/saveandrender.js\");\n/* harmony import */ var _modules_Logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Logic */ \"./src/modules/Logic.js\");\n/* eslint-disable no-unused-vars */\n/* eslint-disable no-use-before-define */\n\n\n\nconst clearCompleteTasksButton = document.querySelector(\n  '[data-clear-complete-tasks-button]',\n);\n\n_modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.addEventListener('click', e => {\n  if (e.target.tagName.toLowerCase() === 'input') {\n    const selectedList = _modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__.lists.find(list => list.id === _modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__.selectedListId);\n    const selectedTask = selectedList.tasks.find(\n      task => task.id === e.target.id,\n    );\n    selectedTask.complete = e.target.checked;\n    (0,_modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__.saveAndRender)();\n  }\n});\n\nclearCompleteTasksButton.addEventListener('click', e => {\n  const selectedList = _modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__.lists.find(list => list.id === _modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__.selectedListId);\n  selectedList.tasks = selectedList.tasks.filter(task => !task.complete);\n  (0,_modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__.saveAndRender)();\n});\n\n_modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskForm.addEventListener('submit', e => {\n  e.preventDefault();\n  const taskName = _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value;\n  const taskDate = _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskDate.value;\n  const taskDescription = _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskDescription.value;\n  const taskPriority = _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskPriority.value;\n\n  if (!(taskName || taskDate || taskDescription || taskPriority)) return;\n  const task = createTask();\n  _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value = null;\n  _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskDate.value = null;\n  _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskDescription.value = null;\n  _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskPriority.value = null;\n\n  const selectedList = _modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__.lists.find(list => list.id === _modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__.selectedListId);\n  selectedList.tasks.push(task);\n  (0,_modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__.saveAndRender)();\n});\n\nfunction createTask() {\n  return {\n    id: Date.now().toString(),\n    name: _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value,\n    date: _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskDate.value,\n    priority: _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskPriority.value,\n    description: _modules_Logic__WEBPACK_IMPORTED_MODULE_1__.newTaskDescription.value,\n    complete: false,\n  };\n}\n\n(0,_modules_saveandrender__WEBPACK_IMPORTED_MODULE_0__.render)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Logic.js":
/*!******************************!*
  !*** ./src/modules/Logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTaskForm\": () => /* binding */ newTaskForm,\n/* harmony export */   \"newTaskInput\": () => /* binding */ newTaskInput,\n/* harmony export */   \"newTaskDate\": () => /* binding */ newTaskDate,\n/* harmony export */   \"newTaskDescription\": () => /* binding */ newTaskDescription,\n/* harmony export */   \"newTaskPriority\": () => /* binding */ newTaskPriority,\n/* harmony export */   \"editTask\": () => /* binding */ editTask\n/* harmony export */ });\n/* harmony import */ var _saveandrender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveandrender */ \"./src/modules/saveandrender.js\");\n/* eslint-disable import/no-cycle */\n\n\nconst newTaskForm = document.querySelector('[data-new-task-form]');\nconst newTaskInput = document.querySelector('[data-new-task-title]');\nconst newTaskDate = document.querySelector('[data-new-task-date]');\nconst newTaskDescription = document.querySelector('[data-new-task-description]');\nconst newTaskPriority = document.querySelector('[data-select-priority]');\n\nfunction editTask(task, label) {\n  newTaskInput.value = task.name;\n  newTaskDate.value = task.date;\n  newTaskPriority.value = task.priority;\n  newTaskDescription.value = task.description;\n  task.id = null;\n\n  newTaskForm.addEventListener('submit', () => {\n    task.name = newTaskInput.value;\n    task.date = newTaskDate.value;\n    task.priority = newTaskPriority.value;\n    task.description = newTaskDescription.value;\n    label.innerHTML = `${task.name}, ${task.date}, ${task.description}, ${task.priority}`;\n    (0,_saveandrender__WEBPACK_IMPORTED_MODULE_0__.saveAndRender)();\n  });\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/Logic.js?");

/***/ }),

/***/ "./src/modules/rendertasks.js":
/*!************************************!*
  !*** ./src/modules/rendertasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTasks\": () => /* binding */ renderTasks,\n/* harmony export */   \"clearElement\": () => /* binding */ clearElement\n/* harmony export */ });\n/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic */ \"./src/modules/Logic.js\");\n/* harmony import */ var _saveandrender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveandrender */ \"./src/modules/saveandrender.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nconst taskTemplate = document.getElementById('task-template');\n\nfunction renderTasks(selectedList) {\n  selectedList.tasks.forEach(task => {\n    if (task.id != null) {\n      const taskElement = document.importNode(taskTemplate.content, true);\n      const checkbox = taskElement.querySelector('input');\n      checkbox.id = task.id;\n      checkbox.checked = task.complete;\n      const label = taskElement.querySelector('label');\n      label.htmlFor = task.id;\n\n      label.append(task.name, ', ');\n      label.append(task.date, ', ');\n      label.append(task.description, ', ');\n      label.append(task.priority);\n\n      const editButton = document.createElement('p');\n      editButton.innerHTML = 'Edit';\n      editButton.classList.add('edit');\n      editButton.addEventListener('click', () => (0,_Logic__WEBPACK_IMPORTED_MODULE_0__.editTask)(task, label));\n      const todoTask = taskElement.querySelector('.task');\n      todoTask.append(editButton);\n      _saveandrender__WEBPACK_IMPORTED_MODULE_1__.tasksContainer.appendChild(taskElement);\n    }\n  });\n}\n\nfunction clearElement(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/rendertasks.js?");

/***/ }),

/***/ "./src/modules/saveandrender.js":
/*!**************************************!*
  !*** ./src/modules/saveandrender.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listsContainer\": () => /* binding */ listsContainer,\n/* harmony export */   \"tasksContainer\": () => /* binding */ tasksContainer,\n/* harmony export */   \"lists\": () => /* binding */ lists,\n/* harmony export */   \"selectedListId\": () => /* binding */ selectedListId,\n/* harmony export */   \"save\": () => /* binding */ save,\n/* harmony export */   \"renderLists\": () => /* binding */ renderLists,\n/* harmony export */   \"render\": () => /* binding */ render,\n/* harmony export */   \"saveAndRender\": () => /* binding */ saveAndRender\n/* harmony export */ });\n/* harmony import */ var _rendertasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rendertasks */ \"./src/modules/rendertasks.js\");\n/* eslint-disable import/no-cycle */\n/* eslint-disable no-unused-vars */\n/* eslint-disable import/no-mutable-exports */\n\n\n\n\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists';\nconst LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';\nconst deleteListButton = document.querySelector('[data-delete-list-button]');\nconst newListForm = document.querySelector('[data-new-list-form]');\nconst newListInput = document.querySelector('[data-new-list-input]');\n\nconst listDisplayContainer = document.querySelector('[data-list-display-container]');\nconst listTitleElement = document.querySelector('[data-list-title]');\nconst listsContainer = document.querySelector('[data-lists]');\nconst tasksContainer = document.querySelector('[data-tasks]');\n\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [{ id: '1607751397905', name: 'Default', tasks: [] }];\nlet selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);\n\nfunction save() {\n  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));\n  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);\n}\n\nfunction createList() {\n  return { id: Date.now().toString(), name: newListInput.value, tasks: [] };\n}\n\n\nfunction renderLists() {\n  lists.forEach(list => {\n    const listElement = document.createElement('li');\n    listElement.dataset.listId = list.id;\n    listElement.classList.add('list-name');\n    listElement.innerText = list.name;\n    if (list.id === selectedListId) {\n      listElement.classList.add('active-list');\n    }\n    listsContainer.appendChild(listElement);\n  });\n}\n\nfunction render() {\n  (0,_rendertasks__WEBPACK_IMPORTED_MODULE_0__.clearElement)(listsContainer);\n  renderLists();\n\n  const selectedList = lists.find(list => list.id === selectedListId);\n  if (selectedListId == null) {\n    listDisplayContainer.style.display = 'none';\n  } else {\n    listDisplayContainer.style.display = '';\n    listTitleElement.innerText = selectedList.name;\n    (0,_rendertasks__WEBPACK_IMPORTED_MODULE_0__.clearElement)(tasksContainer);\n    (0,_rendertasks__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(selectedList);\n  }\n}\n\nfunction saveAndRender() {\n  save();\n  render();\n}\n\n\nlistsContainer.addEventListener('click', e => {\n  if (e.target.tagName.toLowerCase() === 'li') {\n    selectedListId = e.target.dataset.listId;\n    saveAndRender();\n  }\n});\n\nnewListForm.addEventListener('submit', e => {\n  e.preventDefault();\n  const listName = newListInput.value;\n  if (listName == null || listName === '') return;\n  const list = createList();\n  newListInput.value = null;\n  lists.push(list);\n  saveAndRender();\n});\n\n\ndeleteListButton.addEventListener('click', e => {\n  lists = lists.filter(list => list.id !== selectedListId);\n  selectedListId = null;\n  saveAndRender();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/modules/saveandrender.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;