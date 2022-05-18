import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: '4000',
      date: new Date(2021, 2, 20)
    },
    {
      id: 'e2',
      title: 'Shopping',
      amount: '2000',
      date: new Date(2021, 12, 9)
    },
    {
      id: 'e3',
      title: 'Laundry',
      amount: '500',
      date: new Date(2021, 7, 27)
    },
    {
      id: 'e4',
      title: 'Electricity Bill',
      amount: '4000',
      date: new Date(2022, 4, 23)
    }
  ];
  return (
    <div>
      <h1>Let's get started!</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
