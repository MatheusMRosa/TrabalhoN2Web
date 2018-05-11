import React from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import validate from './validate'
import renderField from "./renderField";

const renderMembers = ({fields, meta: {error, submitFailed}}) => (
    <div>
        <div>
            <button type="button" onClick={() => fields.push({})}>Adicionar Empregos</button>
            {submitFailed && error && <span>{error}</span>}
        </div>
        {fields.map((member, index) => (
            <div key={index}>
                <button
                    type="button"
                    title="Remove Member"
                    onClick={() => fields.remove(index)}>Remover
                </button>
                <h4>Emprego nº {index + 1}</h4>
                <Field
                    name={`${member}.name`}
                    type="text"
                    component={renderField}
                    label="Nome da Empresa"
                />
                <Field
                    name={`${member}.contact`}
                    type="text"
                    component={renderField}
                    label="contato"
                />
            </div>
        ))}
    </div>
);

const WizardFormThirdPage = props => {
    const {handleSubmit, previousPage} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>Empregos anteriores</div>
            <FieldArray name="members" component={renderMembers}/>
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
})(WizardFormThirdPage);