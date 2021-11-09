// https://www.sitepoint.com/react-tutorial-build-calculator-app/

import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from "./components/Button";

const btValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];


function App() {
  return (
    <div className="app">

      <Wrapper> 
        <Screen value="0" />
        <ButtonBox>
          {
            btValues.flat().map((btn, i) => {
              return (
                  <Button
                  className={btn === "=" ? "equals" : ""}
                  value={btn}
                  onClick={() => {
                    console.log(`Painoit : ${btn}`);
                  }}
                />
              );
            })
          }         
        </ButtonBox>

      </Wrapper>


    </div>
  );
}

export default App;
