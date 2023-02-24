import { View } from "react-native";

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <ExpensesSummary/>
      <ExpensesList/>
    </View>
  );
}

export default ExpensesOutput;
