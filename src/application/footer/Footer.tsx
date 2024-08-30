import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <div>© 2023-2024 송병준</div>
      <div style={{ textAlign: "center" }}>
        Do not go gentle into that good night,
        <br />
        Rage, rage against the dying of the light.
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
