import React from 'react';
import {useHistory} from 'react-router-dom';


// function First () {
//     const history = useHistory()
//     return (
//         <div>
//             <h2>Home Page</h2>
//             <button onClick = {()=>history.push()}>Go to next page</button>
//         </div>
//     )

// }
// export default First
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();
  console.log(" history ==============>",history)

  function handleClick() {
    history.push("/home");
  }

  return (
    <Button type="button" onClick={handleClick}>
      Go home
    </Button>
  );
}
export default HomeButton
