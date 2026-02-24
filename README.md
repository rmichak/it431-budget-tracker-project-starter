# 💰 Student Budget Tracker — Starter Files

**IT 431 — Advanced Web Development | Midterm Project**

## Overview

Build a React + TypeScript budget tracker application. The app lets users add income and expenses, view a running balance, filter transactions by category, and delete entries.

## What's Provided

- ✅ **`App.css`** — All styling is done for you. You should not need to modify this file.
- ✅ **`types.ts`** — TypeScript interfaces and types are defined.
- ✅ **`main.tsx`** — App entry point (no changes needed).
- ✅ **Component skeletons** — Each component has the structure and TODO comments guiding you.

## What You Need To Build

Work through the TODO comments in each file. Here's the order I recommend:

### 1. `components/TransactionItem.tsx` (Start here — smallest component)
- Define the props interface
- Display transaction data (description, category, date, amount)
- Wire up the delete button

### 2. `components/SummaryCards.tsx`
- Define the props interface
- Render three summary cards (Income, Expenses, Balance)

### 3. `components/TransactionForm.tsx`
- Define the props interface
- Create state for form fields (description, amount, category, type)
- Handle form submission with validation
- Wire up all inputs with value + onChange

### 4. `components/TransactionList.tsx`
- Define the props interface
- Add filter state and filtering logic
- Render filter buttons and transaction items

### 5. `App.tsx` (Bring it all together)
- Create transactions state
- Write calculateSummary, handleAddTransaction, handleDeleteTransaction
- Render all child components with correct props

## Getting Started

```bash
# 1. Create a new Vite project
npm create vite@latest student-budget-tracker -- --template react-ts

# 2. Install dependencies
cd student-budget-tracker
npm install

# 3. Replace the src/ folder contents with these starter files

# 4. Start the dev server
npm run dev
```

## Deployment

When your app is working locally:

1. Create a GitHub repository and push your code
2. Deploy to Vercel (connect your GitHub repo)
3. Submit both URLs (GitHub repo + Vercel live link)

## Grading Criteria

| Criteria | Points |
|----------|--------|
| TypeScript interfaces & type safety | 15 |
| Component structure & props | 20 |
| State management (useState) | 20 |
| Event handling (forms, clicks) | 15 |
| List rendering & conditional display | 15 |
| GitHub repo & Vercel deployment | 10 |
| Code quality & organization | 5 |
| **Total** | **100** |

## Reference

Here's what the finished app looks like:

![Reference Screenshot](screenshot-reference.png)

**Live demo:** https://student-budget-tracker-smoky.vercel.app

## Tips

- Start small — get one component rendering before moving to the next
- Use the browser console to debug (F12 → Console tab)
- The CSS classes in the TODO comments match the provided stylesheet exactly
- When in doubt, check the TypeScript types in `types.ts` — they tell you exactly what shape the data should be
- Test your form: try submitting with empty fields to make sure validation works

## Key Concepts Used

- React functional components
- Props with TypeScript interfaces
- State management with `useState`
- Controlled form inputs
- Event handling (`onClick`, `onChange`, `onSubmit`)
- List rendering with `.map()` and keys
- Conditional rendering
- Array methods: `.filter()`, `.reduce()`, `.map()`

Good luck! 🚀
