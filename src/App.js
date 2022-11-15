import logo from './logo.svg';
import './App.css';
import Box from './Components/Box';

/* useDispatch Hook을 react-redux에서 들고 온다.
사용할 영역 안에서 dispatch 객체로 선언한다. */
import { useDispatch, useSelector } from "react-redux";

function App() {
  /* 함수를 인수로 가져간다.
  store에 있는 모든 state를 전달하고, 그 중 일부 속성을 사용해준다. */

  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const admin = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  /* dispatch 안에 인수를 둔다.
  type 인수는 반드시 있어야 한다.

  payload는 불러올 값을 뜻하는 것으로, 의무는 아니다. */
  const increase = () => {
    dispatch({type: "INCREMENT", payload: {num: 5}});
  };
  const decrease = () => {
    dispatch({type: "DECREMENT"})
  }
  const mult = () => {
    dispatch({type: "MULTIPLI", payload: {num: 2}})
  }
  const divi = () => {
    dispatch({type: "DIVISION", payload: {num: 2}})
  }
  const login = () => {
    dispatch({type: "LOGIN", payload: {id: "JUSTHIS", password: "123", admin: false}});
  };

  return (
    <div className="App">
      <h1>{id}, {password}</h1>
			<button onClick={login}>Login</button>
      {admin ? (
        <h1>관리자입니다</h1>
      ) : ""}
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={mult}>*2</button>
      <button onClick={divi}>/2</button>
      <Box></Box>
    </div>
  );
}

export default App;
