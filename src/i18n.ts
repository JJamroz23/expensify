import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          expenses_one: "expense",
          expenses_other: "expenses",

          summary: {
            addExpense: "Add expense",
            text: '<strong>{{totalNumber}}</strong> $t(expenses, { "count": "{{totalNumber}}" }) with total value <strong>{{totalValue}}</strong>',
          },
          filter: {
            date: "Date",
            amount: "Amount",
            input: "search expense",
          },
          form: {
            add: "Add expense",
            delete: "Delete expense",
            edit: "Edit expense",
          },
          navbar: {
            in: "LOG IN",
            out: "LOG OUT",
          },
          list: {
            desc: "DESC",
            asc: "ASC",
            expense: "Expense",
            amount: "Amount",
          },
          auth: {
            text: "It's time to login to your expensify app",
            in: "Login",
          },
        },
      },
    },
  });

export default i18n;
