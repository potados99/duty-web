import React, { useEffect } from "react";
import styled from "styled-components";

/**
 * 페이스북 댓글 박스입니다.
 * data-width에 100%를 넣어 주어야 index.css에서 적용한 오버라이드가 잘 작동합니다.
 * @constructor
 */
export default function Comments() {
  useEffect(() => {
    try {
      // @ts-ignore
      if (window.FB) {
        // @ts-ignore
        window.FB.XFBML.parse();
      }
    } catch (e) {
      console.log(`Facebook shit! ${e}`);
    }
  }, []);

  return (
    <Container>
      <div
        className="fb-comments"
        data-href="https://duty.potados.com"
        data-width="100%"
        data-numposts="5"
        data-order-by="reverse_time"
      ></div>
    </Container>
  );
}

const Container = styled.div`
  margin: 12px;
`;
