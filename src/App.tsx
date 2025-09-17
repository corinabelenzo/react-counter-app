import Counter from './components/Counter'

function App() {
  return (
    <main className="app">
      <h1>React + Vite — Counter</h1>
      <Counter initialCount={0} step={1} />
    </main>
  );
}

export default App
