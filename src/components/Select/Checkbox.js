import React from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckBox = ({ data, size, color, sx, onChange, containerStyle, boxViewStyle, boxStyle }) => {
    return (
        <div style={containerStyle}>
            <FormGroup style={boxViewStyle}>
                {data.map((box, ind) => {
                    return (
                        <FormControlLabel
                            onChange={onChange}
                            key={ind}
                            value={box.value}
                            disabled={box?.disabled}
                            checked={box?.checked}
                            style={boxStyle}
                            control={
                                <Checkbox
                                    sx={sx}
                                    defaultChecked={box?.defaultChecked}
                                    color={color} // secondary | success | default
                                    size={size} //small | medium | large
                                />
                            }
                            label={box.label}
                        />

                    )
                })

                }
            </FormGroup>
        </div>
    );
}

export default CheckBox