import React from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


export class Alerts extends React.Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props
        if (error != prevProps.error) {
            if (error.msg.name) {
                alert.error(`Name: ${error.msg.name.join()}`)
            }
            if (error.msg.email) {
                alert.error(`Email: ${error.msg.email.join()}`) // join converts array into string
            }
            if (error.msg.message) {
                alert.error(`Message: ${error.msg.message.join()}`)
            }
            if (error.msg.non_field_errors) {
                alert.error(error.msg.non_field_errors.join()) // join converts array into string
            }
            if (error.msg.username) {
                alert.error(error.msg.username.join()) // join converts array into string
            }
        }

        if (message != prevProps.message) {
            if (message.leadDeleted) {
                alert.success(message.leadDeleted)
            }
            if (message.leadAdded) {
                alert.success(message.leadAdded)
            }
            if (message.passwordNotMatch) {
                alert.error(message.passwordNotMatch)
            }
        }
    }
    render() {
        return (
            <React.Fragment />

        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));