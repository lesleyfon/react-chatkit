import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ChatNavBar from '../Components /ChatNavBar';
import {connect} from 'react-redux';
import RoomsList from '../Components /RoomsList';
import MessageList from '../Components /MessageList';
import MessageForm from '../Components /MessageForm';
import UserList from '../Components /UserList';
function ChatDashBoard({loading}) {
    return (
        <div className='chat-dashboard'>
            <ChatNavBar/>
            <Container fluid className={`ld-over ${loading && 'running'}`}>
                <div className='ld ld-ring ld-spin'></div>
                <Row>
                    <Col cols='2'>
                        <RoomsList />
                    </Col>
                    <Col cols='8'>
                        <Row>
                            <Col id="chat-content">
                                <MessageList /> 
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <MessageForm />
                            </Col>
                        </Row>
                    </Col>
                    <Col cols='2'>
                        <UserList />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state =>{
    console.log(state)
    return {
        loading: state.loading,
        error: state.error,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getters: () => dispatch({type:'hasError'}),
        setLoading: ()=> dispatch({type: 'loading'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatDashBoard)
