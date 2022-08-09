import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense , startAddExpense , startEditExpense,startRemoveExpense } from '../actions/expenses';
import { useParams, useNavigate   } from 'react-router-dom';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.navigation('/', {replace: true});
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
  navigation :  useNavigate()
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
