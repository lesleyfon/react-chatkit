import React from 'react'
import { connect } from 'react-redux';
import actions from './../store/actions'
import { ListGroup, ListGroupItem } from 'react-bootstrap'


function RoomsList({activeRoom,rooms, changeRoom, userId}) {
    console.log(userId)
    return (
        <div className='room-list'>
           <h4>Channels</h4> 
           <hr/>
           <ListGroup>
               {activeRoom ? rooms.map((room, i)=> {

               return <ListGroupItem 
                style={{
                    'cursor': 'pointer'
                }}
                key={i}
                className = {`${(activeRoom.id === room.id) ? 'active' : ''}`}
                href='#' 
                onClick={()=>{
                    changeRoom(room, userId)
                    }}> #{room.name}</ListGroupItem>})
                    :
                    <p>No Active rooms Yet</p>}
           </ListGroup>
        </div>
    )
}

const mapStateToProps = state => {
     
    return {
        rooms: state.rooms,
        activeRoom: state.activeRoom,
        userId: state.user.username
    }
}
const mapDispatchToProps = {    
    changeRoom: actions.changeRoom
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsList);
