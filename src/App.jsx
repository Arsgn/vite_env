const VITE_ID = import.meta.env.VITE_ID;

console.log(VITE_ID);

const App = () => {
  return <div>{VITE_ID} Appq</div>;
};

export default App;
