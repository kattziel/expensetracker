import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "pair of shoes",
    amount: 59.99,
    date: new Date("2023-02-24"),
  },
  {
    id: "e2",
    description: "food for dogs",
    amount: 99.99,
    date: new Date("2023-01-15"),
  },
  {
    id: "e3",
    description: "books",
    amount: 29.99,
    date: new Date("2023-02-14"),
  },
  {
    id: "e4",
    description: "phone",
    amount: 599.99,
    date: new Date("2023-02-18"),
  },
  {
    id: "e5",
    description: "pair of shoes",
    amount: 59.99,
    date: new Date("2023-02-24"),
  },
  {
    id: "e6",
    description: "food for dogs",
    amount: 99.99,
    date: new Date("2023-01-15"),
  },
  {
    id: "e7",
    description: "books",
    amount: 29.99,
    date: new Date("2023-02-14"),
  },
  {
    id: "e8",
    description: "phone",
    amount: 599.99,
    date: new Date("2023-02-18"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpenses: (id) => {},
  updateExpenses: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = newDate().toString() + Math.random().toString();
      return [{ ...action.payload }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}
// this is reducer function used for the useReducer hook stated below

function ExpensesContextProvider({ children }) {

  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense({ expenseData }) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value =  {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };
  // this value will be passed to other components where this data will be available

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
