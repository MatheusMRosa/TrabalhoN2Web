const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    } else if (!/^\d{9}$/i.test(values.phone)){
        errors.phone = 'Invalid phone Number only 9 numbers'
    }
    return errors
};

export default validate;