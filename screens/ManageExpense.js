import { View, StyleSheet } from "react-native";
import { useContext, useLayoutEffect } from "react";

import { GlobalStyles } from "../constants/styles";

import { ExpensesContext } from "../store/expenses-context";

import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";

function ManageExpense({ route, navigation }) {

  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  // we are using the expenseId param that is available here through route.params from ExpenseItem
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense",
    });
    // navigation should be wrapped in useEffect or useLayout
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    navigation.goBack();
    expensesCtx.deleteExpense(editedExpenseId);
  }
  function cancelHandler() {
    navigation.goBack();
  };
  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(
        editedExpenseId,
        {
          description: "Test - update",
          amount: 0.00,
          date: new Date('2022-02-22'),
        }
      );
    } else {
      expensesCtx.addExpense(
        {
          description: "Test - update",
          amount: 0.00,
          date: new Date('2022-02-22'),
        }
      );
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120 ,
    marginHorizontal: 8
  }
});
