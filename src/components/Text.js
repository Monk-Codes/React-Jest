import { useState } from "react";
import Output from "./Output";

const Text = () => {
 const [changeText, setChangeText] = useState();
 const changeTextHandler = () => {
  setChangeText(true);
 };
 return (
  <div>
   <h2>This is text</h2>
   {!changeText && <Output>Before</Output>}
   {changeText && <Output>After</Output>}
   <button onClick={changeTextHandler}>Text Change</button>
  </div>
 );
};
export default Text;
