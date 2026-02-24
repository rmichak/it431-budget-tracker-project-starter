import { useState } from "react";
import type { Transaction, Category, BudgetSummary } from "./types";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  // TODO 1: Create a state variable called "transactions" to hold an array of Transaction objects.
  //         Initialize it with an empty array.
  //         Also create a state variable called "nextId" starting at 1 (for generating unique IDs).

  // TODO 2: Write a function called "calculateSummary" that takes the transactions array
  //         and returns a BudgetSummary object with:
  //         - totalIncome: sum of all transactions where type === "income"
  //         - totalExpenses: sum of all transactions where type === "expense"
  //         - balance: totalIncome - totalExpenses
  //         Hint: Use .filter() and .reduce()

  // TODO 3: Write a function called "handleAddTransaction" that:
  //         - Takes description (string), amount (number), category (Category), type ("income" | "expense")
  //         - Creates a new Transaction object with a unique id, today's date, and the given values
  //         - Adds it to the beginning of the transactions array using setTransactions
  //         - Increments nextId
  //         Hint: For today's date use: new Date().toISOString().split("T")[0]

  // TODO 4: Write a function called "handleDeleteTransaction" that:
  //         - Takes an id (number)
  //         - Removes the transaction with that id from the array
  //         Hint: Use .filter()

  // TODO 5: Call calculateSummary to get the current summary

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          💰 Student <span>Budget Tracker</span>
        </h1>
        <p>Track your income and expenses in one place</p>
      </header>

      {/* TODO 6: Render the SummaryCards component and pass the summary as a prop */}

      <div className="main-content">
        {/* TODO 7: Render the TransactionForm component and pass handleAddTransaction as a prop */}

        {/* TODO 8: Render the TransactionList component and pass transactions and handleDeleteTransaction as props */}
      </div>

      <footer className="app-footer">
        Built with React + TypeScript — IT 431 Advanced Web Development
      </footer>
    </div>
  );
}

export default App;
