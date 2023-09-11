import * as Yup from 'yup';

const SignUpValidation = Yup.object({
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less').min(3, 'Atleast hve 3 Characters')
        .required('firstName is required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less').min(3, 'Atleast hve 3 Characters')
        .required('lasttName is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required("password is required").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ).max(16, "don't allow more than 16"),
    Confirm_Password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords miss match').required("password is required").max(16, "don't allow more than 16"),


})

const contactValidation = Yup.object({
    Name: Yup.string()
        .max(15, 'Must be 15 characters or less').min(3, 'Atleast hve 3 Characters')
        .required('Name is required'),

    email: Yup.string().email('Invalid email address').required('Email is required'),

    message: Yup.string()
        .max(15, 'Must be 15 characters or less').min(3, 'Atleast hve 3 Characters')
        .required('message is required')

})

export { SignUpValidation, contactValidation }