import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>404</h2>
        <h2>Looks like you are on a wrong page!</h2>
        <p>Click the button below to reach Home page.</p>
        <NavLink to="/">
          <Button>Home Page</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 5rem;
    }
    p {
      margin: 2rem;
      font-size: 2rem;
      font-weight: bold;
    }
  }
`;
export default ErrorPage;
