import React, { useEffect, useRef } from "react";

import Pdf from "react-to-pdf";
import Data from "./component/Data";

function App() {
  const ref = useRef(null);

  useEffect(() => {
    console.log("ref", ref);
  }, []);

  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }: any) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>

      {/* <div ref={ref}>teste</div> */}

      <Data ref={ref} />
    </div>
  );
}

export default App;
