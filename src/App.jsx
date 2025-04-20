import Threads from "./components/backgrounAnimate/threads"
import Home from "./layout/home/home"

function App() {
  return (
    <>
      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <Threads
          amplitude={2}
        />
      </div>
      <Home />
    </>
  )
}

export default App
