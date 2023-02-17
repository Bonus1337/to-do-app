import shortid from "shortid";

// selectors
export const getColumnByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);
export const getAllColumns = ({ columns }) => columns;

// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_COLUMN = createActionName("ADD_COLUMN");

// action creators
export const addColumn = (payload) => ({ type: ADD_COLUMN, payload });
const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { id: shortid(), ...action.payload }];
    default:
      return statePart;
  }
};

export default columnsReducer;
