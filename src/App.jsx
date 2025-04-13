import Threads from "./components/backgrounAnimate/threads"

function App() {

  return (
    <>
      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <Threads
          amplitude={2} 
        />
      </div>
    </>
  )
}

export default App
