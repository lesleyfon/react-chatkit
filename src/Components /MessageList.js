import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import {connect} from 'react-redux';
import { css } from 'glamor'

function MessageList({messages, activeRoom}) {
    const ROOT_CSS = css({
        height: '600px',
        width: '100%',
    })
    
    return (
        <div className="message-list">
        <h4>Messages @ {activeRoom}</h4>
        <hr/>
        <ScrollToBottom  id="chat-messages" className={`message-group ${ROOT_CSS}`}   >
            {messages.length >= 1 ? messages.map((message, i)=><div className='message' key={i}>
                <div className="clearfix">
                    <h4 className="message-title">{ message.name }</h4>
                    <small className="text-muted float-right">@{message.username }</small>
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
        messages: state.messages,
        activeRoom : state.activeRoom.id.name
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getters: () => dispatch({type:'hasError'}),
        setLoading: ()=> dispatch({type: 'loading'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
