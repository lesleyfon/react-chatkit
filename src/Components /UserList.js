import React from 'react'
import { connect } from 'react-redux'
import { ListGroup ,ListGroupItem, Badge } from 'react-bootstrap'

function UserList({users, loading}) {
    
    const statusColor = (status) =>{
         return status === 'online' ? 'success' : 'warning'
    }
    return (
        <div className="user-list">
        <h4>Members</h4>
        <hr />
        <ListGroup>
            {(users.length > 0) ? 
                users.map((user, i)=> <ListGroupItem key={i}>{user.name}
                {user.presence && <Badge variant={statusColor(user.presence)}>{user.presence}</Badge>}
                </ListGroupItem>) :
                <p>No Users Yet</p>
            }
        </ListGroup>
      </div>
    )
}

const mapStateToProps = state =>{
    console.log(state)
    return {
        loading: state.loading,
        users: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getters: () => dispatch({type:'hasError'}),
        setLoading: ()=> dispatch({type: 'loading'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
