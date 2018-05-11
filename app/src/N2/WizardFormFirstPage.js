import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import renderField from './renderField';

const WizardFormFirstPage = props => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="firstName"
                type="text"
                component={renderField}
                label="Nome"
            />
            <Field name="email" type="email" component={renderField} label="Email" />
            <Field
                name="phone"
                type="text"
                component={renderField}
                label="Telefone"
            />
            <div>
                <button type="submit" className="next">Next</button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(WizardFormFirstPage);