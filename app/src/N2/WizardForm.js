import React, {Component} from 'react'
import PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import WizardFormFourthPage from './WizardFormFourthPage';
import {previousPage, nextPage} from './actions';
import {connect} from "react-redux";


class WizardForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.nextPage = this.nextPage.bind(this);
    //     this.previousPage = this.previousPage.bind(this);
    //     this.state = {
    //         page: 1
    //     }
    // }
    // nextPage() {
    //     this.setState({page: this.state.page + 1})
    // }
    //
    // previousPage() {
    //     this.setState({page: this.state.page - 1})
    // }

    render() {
        const {onSubmit} = this.props;
        // const {page} = this.state;
        return (
            <div>
                {this.props.page === 1 &&
                <WizardFormFirstPage onSubmit={this.props.nextPage}/>
                }
                {this.props.page === 2 &&
                <WizardFormSecondPage
                    previousPage={this.props.previousPage}
                    onSubmit={this.props.nextPage}
                />
                }
                {this.props.page === 3 &&
                <WizardFormThirdPage
                    previousPage={this.props.previousPage}
                    onSubmit={this.props.nextPage}
                />
                }
                {this.props.page === 4 &&
                <WizardFormFourthPage
                    previousPage={this.props.previousPage}
                    onSubmit={onSubmit}
                />
                }
            </div>
        )
    }
}

WizardForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    page: state.red.page
});

const mapDispatchToProps = ({
    previousPage: previousPage,
    nextPage: nextPage
});

export default connect(mapStateToProps, mapDispatchToProps)(WizardForm);