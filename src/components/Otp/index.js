import OtpInput from 'react-otp-input';

const InputOtp = ({ value, onChange, inputStyle, containerStyle, numInputs, inputType, skipDefaultStyles }) => {

    return (
        <OtpInput
            value={value}
            onChange={onChange}
            inputStyle={inputStyle}
            containerStyle={containerStyle}
            numInputs={numInputs}
            renderSeparator={<span> </span>}
            inputType={inputType}
            renderInput={(props) => <input {...props} />}
            skipDefaultStyles={skipDefaultStyles}
        />

    )
}

export default InputOtp