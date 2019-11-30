import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import {connect} from 'react-redux';
import { css } from 'glamor'

function MessageList({messages}) {
    const defaultStyles = css({
        height: '100px',
        width: '100%',
        background:'red'
    })
    
    return (
        <div class="message-list">
        <h4>Messages</h4>
        <hr/>
        <ScrollToBottom  id="chat-messages" className={`message-group`}  style={defaultStyles} >
            {messages.length > 1 ? messages.map((message, i)=><div className='message' key={i}>
                <div className="clearfix">
                    <h4 className="message-title">{ message.name }</h4>
                    <small className="text-muted float-right">{ message.username }</small>
                </div>
                <p className="message-text">
                    { message.text }
                </p>
                <div className="clearfix">
                    <small className="text-muted float-right">{ message.date }</small>
                </div>  
            </div>) : <p>No Messages Yet</p>}
        </ScrollToBottom>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        messages: state.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getters: () => dispatch({type:'hasError'}),
        setLoading: ()=> dispatch({type: 'loading'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
