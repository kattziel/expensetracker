import { Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  // we are using the expenseId param that is available here through route.params from ExpenseItem
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense",
    });
    // navigation should be wrapped in useEffect or useLayout
  }, [navigation, isEditing]);

  return <Text>ManageExpense Screen</Text>;
}

export default ManageExpense;

const style = StyleSheet.create({});
