import React, { useState, useCallback } from 'react';
import { types } from '../../../constants/config';
import { RandomContainer, Form, Title, ButtonAction } from './Random.styles';
import RadioButton from '../../../components/RadioButton';
import Button from '../../../components/Button';

const Random: React.FC = () => {
  const [listType, setListType] = useState('');

  const handleRadioChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { target } = e;
      setListType(target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [listType]
  );

  return (
    <RandomContainer>
      <Title>
        Select a&nbsp;
        <span>list</span>
        &nbsp;type
      </Title>
      <Form>
        {types.map((el: string) => (
          <RadioButton
            key={el}
            handleChange={handleRadioChange}
            value={el}
            type={listType}
          />
        ))}
        <ButtonAction>
          <Button>generate</Button>
        </ButtonAction>
      </Form>
    </RandomContainer>
  );
};

export default Random;
