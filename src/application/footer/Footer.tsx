import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <div>© 2023 송병준</div>
      <div>
        If a man does not keep pace with his companions, <br />
        perhaps it is because he hears a different drummer.
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 16px;
  margin-bottom: 24px;

  color: darkgray;
  font-size: 11px;
`;
