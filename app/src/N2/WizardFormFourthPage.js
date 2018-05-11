import React from 'react'
import {reduxForm, formValueSelector} from 'redux-form'
import {connect} from "react-redux"
import validate from './validate'

const selector = formValueSelector('wizard');

const WizardFormFourthPage = props => {
    const {
        handleSubmit, pristine, previousPage, submitting,
        fistName,
        email,
        phone,
        log,
        cep,
        city,
        estado,
        members
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Revisar os Dados</h1>
                <div>
                    <h3>Dados Pessoais</h3>
                    <div>Nome: {fistName}</div>
                    <div>Email: {email}</div>
                    <div>Telefone: {phone}</div>
                </div>
                <div>
                    <h3>Endereço</h3>
                    <div>Logradouro : {log}</div>
                    <div>CEP: {cep}</div>
                    <div>Cidade: {city}</div>
                    <div>Estado: {estado}</div>
                </div>
                <div>
                    <h3>Empresas </h3>
                    {members.map((member, index) => (
                        <div key={index}>
                            <div>Nome da Empresa {member.name}</div>
                            <div>Contato: {member.contact}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <button type="button" className="previous" onClick={previousPage}>
                        Anterior
                    </button>
                    <button type="submit" disabled={pristine || submitting}>Salvar</button>
                </div>
            </div>
        </form>
    )
};

const mapStateToProps = state => {
    let fistName = selector(state, 'firstName');
    let email = selector(state, 'email');
    let phone = selector(state, 'phone');
    let log = selector(state, 'Logradouro');
    let cep = selector(state, 'CEP');
    let city = selector(state, 'city');
    let estado = selector(state, 'estado');
    let members = selector(state, 'members');
    return ({
        fistName,
        email,
        phone,
        log,
        cep,
        city,
        estado,
        members
    });
};

export default reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(connect(mapStateToProps)(WizardFormFourthPage));