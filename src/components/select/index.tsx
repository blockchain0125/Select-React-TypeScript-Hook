import React, { useState } from "react";
import {
  Window,
  WorkingPlace,
  NoResult,
  Result,
  SelectOptions,
  SelectOption,
  NoValue,
  Value,
  Options,
  OptionValue,
} from "./styledIndex";

const Select = () => {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  let result;

  if (from !== "" && to !== "")
    result = (
      <Result>
        {from}
        {" - "}
        {to}
      </Result>
    );
  else if (from !== "" && to === "")
    result = (
      <Result>
        {">"}
        {from}
      </Result>
    );
  else if (from === "" && to !== "")
    result = (
      <Result>
        {"<"}
        {to}
      </Result>
    );
  else result = <NoResult>Choose the options</NoResult>;
  return (
    <Window>
      <WorkingPlace>
        {result}
        <SelectOptions>
          <SelectOption>
            {from === "" ? <NoValue>From</NoValue> : <Value>{from}</Value>}
            <Options>
              <OptionValue onClick={() => setFrom("1K")}>1K</OptionValue>
              <OptionValue onClick={() => setFrom("3K")}>3K</OptionValue>
              <OptionValue onClick={() => setFrom("5K")}>5K</OptionValue>
              <OptionValue onClick={() => setFrom("10K")}>10K</OptionValue>
              <OptionValue onClick={() => setFrom("15K")}>15K</OptionValue>
            </Options>
          </SelectOption>
          <SelectOption>
            {to === "" ? <NoValue>To</NoValue> : <Value>{to}</Value>}
            <Options>
              <OptionValue onClick={() => setTo("1K")}>1K</OptionValue>
              <OptionValue onClick={() => setTo("3K")}>3K</OptionValue>
              <OptionValue onClick={() => setTo("5K")}>5K</OptionValue>
              <OptionValue onClick={() => setTo("10K")}>10K</OptionValue>
              <OptionValue onClick={() => setTo("15K")}>15K</OptionValue>
            </Options>
          </SelectOption>
        </SelectOptions>
      </WorkingPlace>
    </Window>
  );
};

export default Select;
