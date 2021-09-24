import { useState } from "react";
import CheckBox from "../components/CheckBox";
import "./App.css";

function App() {
  const [check, setCheck] = useState(false);
  const onChnage = (e) => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      <CheckBox onChnage={onChnage} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        <b>check: </b>
        {check ? "true" : "false"}
      </p>
    </div>
  );
}

export default App;
