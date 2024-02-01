import Home from './Home/home'
import { MantineProvider } from "@mantine/core";

function App() {

  return (
    <>
        <MantineProvider>
        <Home/>
        </MantineProvider>
    </>
  )
}

export default App
