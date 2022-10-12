import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Content from "./components/Content";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Project from "./components/Project";

const StyelHeaderWrapper = styled.div`
  position: relative;
`;

function App() {
  const circleRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    circleRef.current.moveTo(window.innerWidth / 2, window.innerHeight / 2);
    const onMove = ({ clientX, clientY }) =>
      circleRef.current.moveTo(clientX, clientY);
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <StyelHeaderWrapper>
      <Cursor ref={circleRef} />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} />
      <Content />
      <Project />
    </StyelHeaderWrapper>
  );
}

export default App;
