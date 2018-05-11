import React from 'react'
import {reduxForm, formValueSelector} from 'redux-form'
import {connect} from "react-redux"
import validate from './validate'

const selector = formValueSelector('wizard');

const WizardFormFourthPage = props => {
    const {handleSubmit, pristine, previousPage, submitting, lastName} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button type="button" className="previous" onClick={previousPage}>
                    Previous
                </button>
                <button type="submit" disabled={pristine || submitting}>Salvar</button>
            </div>
        </form>
    )
};

const mapStateToProps = state => {
    const lastName = selector(state, 'firstName');
    return ({
        lastName
    });
};

export default reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(connect(mapStateToProps)(WizardFormFourthPage));