import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

function RoomsList({activeRoom,rooms}) {
    return (
        <div className='room-list'>
           <h4>Channels</h4> 
           <hr/>
           <ListGroup>
               {activeRoom ? rooms.map((room, i)=> <ListGroupItem key={i} href='#'>{room.name}</ListGroupItem>): <p>No Active rooms Yet</p>}
           </ListGroup>
        </div>
    )
}

const mapStateToProps = state =>{

    return {
        rooms: state.rooms,
        activeRoom: state.activeRoom,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getters: () => dispatch({type:'hasError'}),
        setLoading: ()=> dispatch({type: 'loading'})
    }
}
export default connect()(RoomsList);
