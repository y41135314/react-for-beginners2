import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"       element={<Home />} /> 
        <Route path="/movie/:id"  element={<Detail />} /> {/* :id 는 useParams 을 호출했을 때, key값으로 id가 들어오고 value 값이 들어올 것을 의미. */}
        <Route path="/hello"  element={<h1>Hello</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
