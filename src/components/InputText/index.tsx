import React, { useState, useEffect, useRef } from "react";

import { thisComp } from "./types";
import { Container, Label, LabelError, Input } from "./styles";

export const InputText: React.FC<thisComp> = (props, { ...rest }) => {
  const {
    placeholder,
    label,
    name,
    error,
    disabled,
    maxLength,
    value: valueProp,
    onChange,
  } = props;

  const inputRef = useRef<any>(null);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  const handleOnblur = () => {
    if (value === "") {
      setFocus(false);
    } else {
      setFocus(true);
    }
  };

  useEffect(() => {
    if (value !== valueProp) {
      setValue(valueProp ? valueProp : "");
      setFocus(true);
    }
    // eslint-disable-next-line
  }, [valueProp]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Label
        {...rest}
        error={error}
        focus={focus}
        onClick={
          disabled
            ? () => {}
            : () => {
                setFocus(true);
                inputRef.current.focus();
              }
        }
      >
        {label}
      </Label>

      {error && (
        <LabelError {...rest} focus={focus}>
          {error}
        </LabelError>
      )}

      <Input
        {...rest}
        name={name}
        type="text"
        ref={inputRef}
        value={value}
        maxLength={maxLength}
        focus={focus}
        disabled={disabled}
        error={error}
        onInput={handleOnChange}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={handleOnblur}
      />
    </Container>
  );
};

InputText.defaultProps = {
  onChange: () => {},
};
