import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Switch>
            {/* Maybe add navbar for regulator-sub pages then users-mfg pages*/}
            <Route path="/">
                <div>Home Page/Login</div>
                <Login />
            </Route>
            <Route path="/loading">
                <div> Loading page</div>
                <Loading />
            </Route>
            <Route path="/results">
                <div>Results</div>
                <Results />
            </Route>
    </Switch>

  );
}

export default App;
