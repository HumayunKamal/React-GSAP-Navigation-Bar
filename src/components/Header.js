import gsap from "gsap";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import Logo from "../images/Logo.js";

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  z-index: 10;
  padding: 0 4vw;
  .header__outer {
    max-width: 1417px;
    margin: 0 auto;
    .header__inner {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        width: 30px;
        fill: #fff;
      }
    }
  }
  .header__hamburger {
    z-index: 10;
    cursor: pointer;
    display: block;
    span {
      height: 3px;
      width: 30px;
      margin: 6px;
      display: block;
      background: #fff;
    }
  }
`;
const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const topRef = useRef();
  const bottemRef = useRef();

  // store the timeline in a Ref
  const hamburgerTl = useRef();

  useEffect(() => {
    hamburgerTl.current = gsap
      .timeline({
        defaults: { duration: 0.2, ease: "power2.out" },
      })
      .fromTo(topRef.current, { y: 0 }, { y: 4.5 })
      .fromTo(bottemRef.current, { y: 0 }, { y: -4.5 })
      .fromTo(topRef.current, { rotation: 0 }, { rotation: 135 }, 0)
      .fromTo(bottemRef.current, { rotation: 0 }, { rotation: 45 }, 0);
  }, []);

  useEffect(() => {
    // toggle the direction of our timeline
    hamburgerTl.current.reversed(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <StyledHeader>
      <div className="header__outer">
        <div className="header__inner">
          <Logo />
          <div
            ref={hamburgerTl}
            className="header__hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span ref={topRef}></span>
            <span ref={bottemRef}></span>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
