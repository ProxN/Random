import React, { memo } from 'react';
import {
  Label,
  RadioCircle,
  RadioText,
  RadioInput,
  RadioWrapper,
} from './styles';

interface Props {
  value: string;
  type: string;
  handleChange(e: React.ChangeEvent): unknown;
}

const RadioButton: React.FC<Props> = ({ handleChange, value, type }) => {
  return (
    <Label htmlFor={value} checked={type === value}>
      <RadioWrapper>
        <RadioCircle />
        <RadioText>{value}</RadioText>
        <RadioInput
          name='radio'
          type='radio'
          value={value}
          id={value}
          onChange={handleChange}
        />
      </RadioWrapper>
    </Label>
  );
};

export default memo(RadioButton);
