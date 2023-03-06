import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensesPeriod }) {
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

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1
  }
})