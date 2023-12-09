import { useState, useEffect } from "react";

function Hello(){
  
  useEffect(() => {
    console.log('hi :)');
    return () => {console.log('bye :(');};
  }, []);
  return <h1>Hello</h1>
}

function App() {

  // state를 변경할 때, 모든 code 들은 항상 다시 실행된다.
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((prev) => prev+1);
  const onChange = (event) => {setKeyword(event.target.value);};
  const onClick2 = () => { setShowing(prev => !prev); };
  
  useEffect(() => {
    console.log('I run only once');
  }, []); // 시작 시 단 한번만 호출

  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);  // keyword 가 변할때마다 실행

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect(()=> {
    console.log('I run when keyword & counter changes')
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>

      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}

export default App;
