import logo from './logo.svg';
import './App.css';

/* useDispatch Hook을 react-redux에서 들고 온다.
사용할 영역 안에서 dispatch 객체로 선언한다. */
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  /* dispatch 안에 인수를 둔다.
  type 인수는 반드시 있어야 한다.

  payload는 불러올 값을 뜻하는 것으로, 의무는 아니다. */
  const increase = () => {
    dispatch({type: "", payload: ""})
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
