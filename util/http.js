import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-67ad0-default-rtdb.europe-west1.firebasedatabase.app";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

export async function fetchExpenses() {
  const response = axios.get(BACKEND_URL + "/expenses.json");
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: response.data[key].date,
        description: response.data[key].description
    }
    expenses.push(expenseObj);
    // we dynamically access a property which name is stored in a key
  }
  return expenses;
}
