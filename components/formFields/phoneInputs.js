import { isPossiblePhoneNumber } from 'libphonenumber-js/min'
import PhoneInput from 'react-phone-number-input/react-hook-form-input'
import 'react-phone-number-input/style.css'


export const PhoneNumber = ({ label, name, placeholder, control }) => (
  <div className="inputWrapper">
    <label className="formLabel" htmlFor={label}>
      {label}
    </label>
    <PhoneInput
      className="singleLineInput"
      name={name}
      placeholder={placeholder}
      control={control}
      country="US"
    />
  </div>
)

export const RequiredPhoneNumber = ({ label, name, placeholder, control, errors }) => (
  <div className="inputWrapper">
    <label className="formLabel" htmlFor={label}>
      {label}
    </label>
    <PhoneInput
      className="singleLineInput uppercase"
      name={name}
      placeholder={placeholder}
      control={control}
      rules={{
        required: 'REQUIRED',
        validate: (value) =>
          isPossiblePhoneNumber(value) || `${label} IS INVALID`,
      }}
      country="US"
    />
    {errors && <span className="formErrorMsg">{errors[name]?.message}</span>}
  </div>
)