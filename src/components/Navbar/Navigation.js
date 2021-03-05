import React from "react";
import styled from "styled-components";
import "../../index.css";

const Navigation = () => {
  return (
    <NavigationBar>
      <NavigationContainer>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand logo" href="/">
            News
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-light">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Wall Streen <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/techcrunch">
                  TechCrunch
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </NavigationContainer>
    </NavigationBar>
  );
};

export default Navigation;

const NavigationContainer = styled.div`
  width: 80%;
  margin: auto;

  > .logo {
    /* font-family: var(--font-logo) !important; */
    font-family: "Fredericka the Great", cursive;
    font-size: 30px;
  }
  > .nav-item .nav-link {
    color: white !important;
  }
`;

const NavigationBar = styled.div`
  border-bottom: 1px solid gray;
`;
