import React from 'react'
import { connect } from 'react-redux'
import chatkit from './../chatkit.js'
import  actions from './../store/actions'

import { Form, Alert, FormGroup, FormControl, Button } from 'react-bootstrap'

function MessageForm({user, error, sending,  sendMessage}) {

    const [messageText, setMessageText] = React.useState('');
    const [hasError, setHasError] = React.useState(false)

    const handleChange = e => {
         setMessageText(e.target.value);

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
       sendMessage(messageText)
        setMessageText('')

    }
    return (
        <div className="message-form ld-over">
            {user.length > 1 && <small className="text-muted" >{ user.username }</small> }
            <Form onSubmit={handleSubmit} className= {`ld-over ${sending && 'running'}`}>
                {/* <div class="ld ld-ring ld-spin"></div> */}
                <Alert variant="danger" show={hasError}>{error}</Alert>
                <FormGroup>
                    <FormControl  
                        id="message-input"
                        type="text"
                        name='messageText'
                        value={messageText}
                        onChange={handleChange}
                        placeholder="Enter Message"
                        autoComplete="off"
                        required
                    />
                    <div className="clearfix">
                        <Button type="submit" variant="primary" className="float-right">
                        Send
                        </Button>
                    </div>
                </FormGroup>
            </Form>
      </div>
    )
}
const mapStateToProps = state =>{
    return {
        user: state.user,
        sending: state.sending,
        error: state.error,
        activeRoom: state.activeRoom.id
    }
}
const mapDispatchToProps = {
    sendMessage : actions.sendMessage
    }

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)
