

function App() {
  return (
    <div className="App">
      <button onClick={() => console.log(import.meta.env.VITE_PROJECT_ID)}></button>
    </div>
  )
}

export default App
