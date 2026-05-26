import { useEffect } from "react";

function Test() {

  useEffect(() => {

    fetch("http://localhost:3000/test")
      .then(res => res.text())
      .then(data => console.log(data));

  }, []);

  return (
    <>
      <p>This Working On Test</p>
    </>
  );

}

export default Test;