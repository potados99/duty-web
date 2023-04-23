import React, { useEffect, useState } from "react";
import styled from "styled-components";

export type Message = {
  id: string;
  channel: string;
  timestamp: number;
  date: string;
  userAgent: string;
  sourceIp: string;
  body: string;
};

export default function SpeechBubble() {
  const [message, setMessage] = useState<Message>();

  useEffect(() => {
    fetch("https://collect.potados.com/duty-feed/last?response=api")
      .then((r) => r.json())
      .then(setMessage)
      .catch(console.log);
  }, []);

  const withMessage = (
    <Container
      onClick={(e) => {
        alert(JSON.stringify(message, null, 4));
        e.stopPropagation();
      }}
    >
      <Avatar src="/touch-icon.png" />
      <Texts>
        <TitleLine>
          <BubbleTitle>감자도스</BubbleTitle>
          <BubbleDate>
            {new Date(message?.timestamp ?? 0).toLocaleDateString("ko-KR", {
              timeZone: "Asia/Seoul",
            })}
          </BubbleDate>
        </TitleLine>
        <BubbleBody>{message?.body}</BubbleBody>
      </Texts>
    </Container>
  );

  return message ? withMessage : null;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  width: 250px;
  height: 70px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 16px lightgray;

  padding: 4px 10px;
`;

const Avatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 10px;
`;

const Texts = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-left: 12px;
  margin-top: 4px;
`;

const TitleLine = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BubbleTitle = styled.div`
  color: #234;
  font-size: 14px;
  font-weight: bold;
`;

const BubbleBody = styled.div`
  color: #234;
  font-size: 14px;
  line-height: 1.3em;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const BubbleDate = styled.div`
  color: #546473;
  font-size: 12px;
`;
