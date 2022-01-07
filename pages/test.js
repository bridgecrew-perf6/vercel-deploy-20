import Fade from "react-reveal/Fade";

function test() {
  return (
    <div>
      <Fade top>
        <div>First Item</div>
      </Fade>{" "}
      <Fade top>
        <div>First Item</div>
      </Fade>
      <Fade top>
        <div>First Item</div>
      </Fade>
    </div>
  );
}

export default test;
