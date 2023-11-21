import Age from './Age';

const App = () => {
  const ageValue = 25;

  return (
    <div>
      <h1>User Information</h1>
      <Age age={ageValue} />
    </div>
  );
};

export default App;
