import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import renderField from "./renderField";


const WizardFormSecondPage = props => {
    const {handleSubmit, previousPage} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Endereço</h3>
                <br/>
                <div>
                    <Field
                        name="Logradouro"
                        type="text"
                        component={renderField}
                        label="Logradouro"
                    />
                    <Field
                        name="CEP"
                        type="text"
                        component={renderField}
                        label="CEP"
                    />
                    <Field
                        name="city"
                        type="text"
                        component={renderField}
                        label="Cidade"
                    />
                    <Field
                        name="estado"
                        type="text"
                        component={renderField}
                        label="Estado"
                    />
                </div>
            </div>
            <div>
                <button type="button" className="previous" onClick={previousPage}>
                    Anterior
                </button>
                <button type="submit" className="next">Próximo</button>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(WizardFormSecondPage);