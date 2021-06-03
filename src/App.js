import { Title, Subtitle, Box, Spinner } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box>
            <Spinner/>
            <Title>Welcome to NotUI!</Title>
            <Subtitle>So true</Subtitle>
            <a
              className="App-link"
              href="https://isntweb.github.io/notui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out the docs
            </a>
        </Box>
      </header>
    </div>
  );
}

export default App;
