import React from 'react'
import { Select,ConfigProvider } from 'antd';
import { Colors } from '../../config';



const SelectButton = ({ values, handleChange, defaultValue, style, className,value }) => {
    return (

        <ConfigProvider
            theme={{
                components: {
                    Select: {
                        optionSelectedBg:Colors.Green,
                        optionSelectedColor:'#ffff',
                        optionSelectedFontWeight:500,
                        selectorBg:Colors.LightWhite
                    },
                },
            }}
        >
            <Select
                className={className}
                defaultValue={defaultValue}
                style={style}
                value={value}
                onChange={handleChange}
                options={values}
                
            />
        </ConfigProvider>

    )
}

export default SelectButton
