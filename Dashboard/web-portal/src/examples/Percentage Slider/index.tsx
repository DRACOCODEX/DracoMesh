import { Slider, colors } from '@mui/material';
import { makeStyles } from '@mui/material/styles';
import React, { useState } from 'react';

interface Props {
  value: number;
  onChangeCommited: (name: string, value: number | number[]) => void;
  onChange: (event: any, value: number | number[]) => void;
  name: string;
  label?: string
}

function valueText(value: number) {
    return `${value} %`;
  }

const PercentageSlider: React.FC<Props> = ({ value, onChangeCommited, onChange, name, label}) => {

  const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

  return (
    <div>
    <p style={{color:'#ffffff', marginLeft:-30}}>{label}</p>
      <Slider
        value={value}
        step={1}
        min={0}
        max={100}
        marks={marks}
        name={name}
        valueLabelDisplay="auto"
        valueLabelFormat={valueText}
        onChange={onChange}
        onChangeCommitted={(event, value) => onChangeCommited(name, value)}
        sx={{width: 300}}
      />
    </div>
  );
};

export default PercentageSlider;