import React from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate   } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { addExpense , startAddExpense , startEditExpense,startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
   
    onSubmit = (expense) => {
      console.log(expense);
      this.props.startEditExpense(this.props.expense.id, expense);
      this.props.navigation('/', {replace: true});
    };
    onRemove = () => {
      console.log(this.props.expense.id);
      this.props.startRemoveExpense(this.props.expense.id);
     
      this.props.navigation('/', {replace: true});
    };
    render() {
      return (
        <div>
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Edit Expense</h1>
            </div>
          </div>
          <div className="content-container">
            <ExpenseForm
              expense={this.props.expense}
              onSubmit={this.onSubmit}
            />
            <button className="button button--secondary" 
                onClick={this.onRemove}>Remove Expense</button>
          </div>
        </div>
      );
    }
  };



const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id ===useParams().id),
  navigation :  useNavigate()
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
