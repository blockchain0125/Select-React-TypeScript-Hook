import styled from "styled-components";

export const Window = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const WorkingPlace = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Result = styled.div`
  padding: 12px 16px;
  width: 224px;
  background: #2e2c2c;
  border: 1px solid #f56090;
  border-radius: 16px;

  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;
export const NoResult = styled.div`
  display: flex;
  padding: 12px 16px;
  width: 224px;
  background: #2e2c2c;
  border: 1px solid #f56090;
  border-radius: 16px;

  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff30;
`;

export const SelectOptions = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 20px 16px;
  margin-top: 4px;
  width: 224px;
  height: 276px;
  background: #252525;
  border-radius: 16px;
`;

export const SelectOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Value = styled.div`
  display: flex;
  width: 104px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-sizing: border-box;
  border-radius: 8px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const NoValue = styled.div`
  display: flex;
  width: 104px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-sizing: border-box;
  border-radius: 8px;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  justify-content: center;
  align-items: center;
  color: #ffffff30;
`;

export const Options = styled.div`
  display: flex;
  width: 104px;
  flex-direction: column;
`;

export const OptionValue = styled.button`
  outline: none;
  border: none;
  display: flex;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  background: #252525;

  color: #ffffff;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  :hover {
    background: #f56090;
  }
`;
