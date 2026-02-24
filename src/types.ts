// Types for the Student Budget Tracker

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: Category;
  type: "income" | "expense";
  date: string;
}

export type Category =
  | "Food"
  | "Transport"
  | "Entertainment"
  | "Shopping"
  | "Bills"
  | "Income"
  | "Other";

export interface BudgetSummary {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
}
