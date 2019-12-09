import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

function RoomsList({activeRoom,rooms, setActiveRoom}) {
    return (
        <div className='room-list'>
           <h4>Channels</h4> 
           <hr/>
           <ListGroup>
               {activeRoom ? rooms.map((room, i)=> <ListGroupItem 
                key={i}
                active = {activeRoom.id === room.id} 
                href='#' onClick={()=>{setActiveRoom(room.id)}}> #{room.name}</ListGroupItem>): <p>No Active rooms Yet</p>}
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
        setLoading: ()=> dispatch({type: 'loading'}),
        setActiveRoom: (id)=>dispatch({type: 'SET_ACTIVE_ROOM', payload: id})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);
