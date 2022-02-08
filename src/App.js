import { ContextProvider } from './context/State';
import Home from './pages/Home/Home';

function App() {
    return (
        <div className="App">
            <ContextProvider>
                <Home />
            </ContextProvider>
        </div>
    );
}

export default App;
