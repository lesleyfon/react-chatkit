import React from 'react'
import { connect } from 'react-redux'
import { Form, Alert, FormGroup, FormControl, Button } from 'react-bootstrap'

function MessageForm({user, error, sending, hasError}) {
    const [messageText, setMessageText] = React.useState('')

    const handleChange = e => {
        setMessageText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return (
        <div class="message-form ld-over">
            {user.length > 1 && <small class="text-muted" >{ user.username }</small> }
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
                    <div class="clearfix">
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
        activeRoom: state.activeRoom
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getters: () => dispatch({type:'hasError'}),
        setLoading: ()=> dispatch({type: 'loading'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)
