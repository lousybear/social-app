import React from "react";
import { IExpenseDetail } from "../../types";
import Chart from "../Chart/Chart";

export default function ExpensesChart(props: any) {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  const expenses: IExpenseDetail[] = props.expenses;
  for (const expense of expenses) {
    const expenseMonth = new Date(expense.date).getMonth();
    chartData[expenseMonth].value += expense.amount;
  }
  return <Chart items={chartData} />;
}
