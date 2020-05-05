import React from "react";

import styled from "styled-components";

import "./Spinner.css";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  position: absolute !important;
  margin-top: -100px !important;
  height: 100%;
  width: 100%;
  background: var(-main--white);
  z-index: 100;
`;

export default Spinner;
