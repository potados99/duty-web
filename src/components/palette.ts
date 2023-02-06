import styled from "styled-components";

export const HorizontalCenter = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Horizontal = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const BigText = styled.div`
  color: #222;
  font-size: 52px;
  font-weight: bold;
`;

export const TitleText = styled.div`
  color: #222;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const TitleTextInverse = styled.div`
  color: #eee;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const PrimaryText = styled.div`
  color: #222;
  font-size: 16px;
`;

export const PrimaryTextInverse = styled.div`
  color: #eee;
  font-size: 16px;
`;

export const LinkedButton = styled.a`
  color: #28e;
  font-size: 16px;
  margin-top: 8px;
  text-decoration: none;
`;

export const Space = styled.div`
  height: 12px;
  background-color: #fff;
`;
