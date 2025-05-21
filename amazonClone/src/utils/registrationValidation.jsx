const error = {
    nameError: '',
    mobileError: '',
    emailError: '',
    pwdError: '',
    reEnterPwdError: ''
}

const validatePassword = (registrationFormData) => {
    error.reEnterPwdError = registrationFormData.password !== registrationFormData.reenter_password && registrationFormData.password ? 'Type your password again' : ''
  }

const validateRequiredFields = (registrationFormData) =>{
    error.nameError = !registrationFormData.name ? "Name is required" : ""
    error.mobileError = !registrationFormData.mobile ? "Mobile number is required" : ""
    error.emailError = !registrationFormData.email ? "Email is required" : ""
    error.pwdError = !registrationFormData.password || registrationFormData.password.length < 6 ? "Password should be atleast six characters" : ""
}
const registerUser = (registrationFormData) => {
    validateRequiredFields(registrationFormData)
    validatePassword(registrationFormData)
    return error
}

export const hasValidationErrors = (error) => {
    return Object.values(error).some(value => value.trim() !== '')
}

export default registerUser