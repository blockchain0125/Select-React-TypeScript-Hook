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
  SelectedOptionValue,
} from "./styledIndex";

const Select = () => {
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(0);

  let result;

  if (from !== 0 && to !== 0)
    result = (
      <Result>
        {from}
        {"K - "}
        {to}
        {"K"}
      </Result>
    );
  else if (from !== 0 && to === 0)
    result = (
      <Result>
        {">"}
        {from}
        {"K"}
      </Result>
    );
  else if (from === 0 && to !== 0)
    result = (
      <Result>
        {"<"}
        {to}
        {"K"}
      </Result>
    );
  else result = <NoResult>Choose the options</NoResult>;
  return (
    <Window>
      <WorkingPlace>
        {result}
        <SelectOptions>
          <SelectOption>
            {from === 0 ? (
              <NoValue>From</NoValue>
            ) : (
              <Value>
                {from}
                {"K"}
              </Value>
            )}
            <Options>
              {from < 1 && from !== 0 ? (
                <SelectedOptionValue onClick={() => setFrom(1)}>
                  1K
                </SelectedOptionValue>
              ) : (
                <OptionValue onClick={() => setFrom(1)}>1K</OptionValue>
              )}
              {from < 3 && from !== 0 ? (
                <SelectedOptionValue onClick={() => setFrom(3)}>
                  3K
                </SelectedOptionValue>
              ) : (
                <OptionValue onClick={() => setFrom(3)}>3K</OptionValue>
              )}
              {from < 5 && from !== 0 ? (
                <SelectedOptionValue onClick={() => setFrom(5)}>
                  5K
                </SelectedOptionValue>
              ) : (
                <OptionValue onClick={() => setFrom(5)}>5K</OptionValue>
              )}
              {from < 10 && from !== 0 ? (
                <SelectedOptionValue onClick={() => setFrom(10)}>
                  10K
                </SelectedOptionValue>
              ) : (
                <OptionValue onClick={() => setFrom(10)}>10K</OptionValue>
              )}
              {from < 15 && from !== 0 ? (
                <SelectedOptionValue onClick={() => setFrom(15)}>
                  15K
                </SelectedOptionValue>
              ) : (
                <OptionValue onClick={() => setFrom(15)}>15K</OptionValue>
              )}
            </Options>
          </SelectOption>
          <SelectOption>
            {to === 0 ? (
              <NoValue>To</NoValue>
            ) : (
              <Value>
                {to}
                {"K"}
              </Value>
            )}
            <Options>
              {to > 1 ? (
                <SelectedOptionValue onClick={() => setTo(1)}>
                  1K
                </SelectedOptionValue>
              ) : (
                <OptionValue onClick={() => setTo(1)}>1K</OptionValue>
              )}
              {to > 3 ? (
                <SelectedOptionValue onClick={() => setTo(3)}>
                  3K
                </SelectedOptionValue>
              ) : (
                <OptionValue onClick={() => setTo(3)}>3K</OptionValue>
              )}
              {to > 5 ? (
                <SelectedOptionValue onClick={() => setTo(5)}>
                  5K
                </SelectedOptionValue>
              ) : (
                <OptionValue onClick={() => setTo(5)}>5K</OptionValue>
              )}
              {to > 10 ? (
                <SelectedOptionValue onClick={() => setTo(10)}>
                  10K
                </SelectedOptionValue>
              ) : (
                <OptionValue onClick={() => setTo(10)}>10K</OptionValue>
              )}
              {to > 15 ? (
                <SelectedOptionValue onClick={() => setTo(15)}>
                  15K
                </SelectedOptionValue>
              ) : (
                <OptionValue onClick={() => setTo(15)}>15K</OptionValue>
              )}
            </Options>
          </SelectOption>
        </SelectOptions>
      </WorkingPlace>
    </Window>
  );
};

export default Select;
