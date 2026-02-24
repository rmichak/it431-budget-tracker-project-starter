import { useState } from "react";
import type { Category } from "../types";

// TODO 1: Define a TypeScript interface called "TransactionFormProps" with one property:
//         - onAddTransaction: a function that takes (description: string, amount: number, 
//           category: Category, type: "income" | "expense") and returns void

const expenseCategories: Category[] = [
  "Food",
  "Transport",
  "Entertainment",
  "Shopping",
  "Bills",
  "Other",
];

// TODO 2: Update the function signature to accept props using your interface.

function TransactionForm() {
  // TODO 3: Create state variables for the form fields:
  //         - description (string, initially "")
  //         - amount (string, initially "") — we use string because input values are strings
  //         - category (Category, initially "Food")
  //         - type ("income" | "expense", initially "expense")

  // TODO 4: Write a handleSubmit function that:
  //         - Prevents the default form submission (e.preventDefault())
  //         - Parses the amount string to a number using parseFloat()
  //         - Validates: description must not be empty, amount must be a positive number
  //         - Calls onAddTransaction with the form values
  //         - Resets the form fields back to their initial values

  return (
    <div className="form-card">
      <h2>➕ Add Transaction</h2>
      <form /* TODO 5: Add onSubmit handler */>
        {/* Income / Expense Toggle */}
        <div className="type-toggle">
          <button
            type="button"
            className="type-btn"
            // TODO 6: Add the class "active-expense" when type === "expense"
            //         Hint: className={`type-btn ${type === "expense" ? "active-expense" : ""}`}
            // TODO 7: Add onClick to set type to "expense" and category to "Food"
          >
            Expense
          </button>
          <button
            type="button"
            className="type-btn"
            // TODO 8: Add the class "active-income" when type === "income"
            // TODO 9: Add onClick to set type to "income" and category to "Income"
          >
            Income
          </button>
        </div>

        {/* Description Input */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="e.g., Grocery shopping"
            // TODO 10: Set value to description state and add onChange to update it
          />
        </div>

        {/* Amount Input */}
        <div className="form-group">
          <label htmlFor="amount">Amount ($)</label>
          <input
            id="amount"
            type="number"
            placeholder="0.00"
            min="0.01"
            step="0.01"
            // TODO 11: Set value to amount state and add onChange to update it
          />
        </div>

        {/* Category Dropdown (only shown for expenses) */}
        {/* TODO 12: Only render this div when type === "expense"
            Hint: {type === "expense" && ( ... )} */}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            // TODO 13: Set value to category state and add onChange to update it
            //          Hint: onChange={(e) => setCategory(e.target.value as Category)}
          >
            {/* TODO 14: Map over expenseCategories to render <option> elements
                Hint: {expenseCategories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))} */}
          </select>
        </div>

        <button type="submit" className="submit-btn">
          {/* TODO 15: Show "Add Income" or "Add Expense" based on the type state */}
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
