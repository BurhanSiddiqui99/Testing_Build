import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButton = ({ data, title, defaultValue, name, value, size, color, sx, onChange, radioViewStyle, containerStyle, radioStyle }) => {
    return (
        <div style={containerStyle}>
            <FormControl component="fieldset">
                <FormLabel component="legend">{title}</FormLabel>
                <RadioGroup
                    aria-label={title}
                    defaultValue={defaultValue}
                    name={name || "radio-buttons-group"}
                    value={value} // row-radio-buttons-group | controlled-radio-buttons-group
                    onChange={onChange}
                    style={radioViewStyle}
                >
                    {data.map((btn, ind) => {

                        return (
                            <FormControlLabel
                                key={ind}
                                value={btn.value}
                                style={radioStyle}
                                control={
                                    <Radio
                                        sx={sx}
                                        color={color} // secondary | success | default
                                        size={size} //small | medium | large
                                    />
                                }
                                label={btn.label}
                                disabled={btn?.disabled}
                            />
                        )
                    })}
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default RadioButton