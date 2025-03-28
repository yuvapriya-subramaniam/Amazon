import React, {useState} from 'react'

const useRegister = () => {
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    password: '',
    reenter_password: ''
  })
  const updateUserRegisterForm = (e) => {
    let propertyName = e.target.id
    let value = e.target.value
    setRegistrationForm((prevData) => ({...prevData, [propertyName]: value}))
    console.log(registrationForm)
  }

  const registerUser = (e) => {
    e.preventDefault()
    console.log(registrationForm)
  }

  const validateRegistration = () => {

  }

  return {updateUserRegisterForm, registerUser}
}

export default useRegister