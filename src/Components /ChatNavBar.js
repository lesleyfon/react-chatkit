import React from 'react'
import { Navbar, Nav, NavbarBrand} from 'react-bootstrap'
import { connect } from 'react-redux'

function ChatNavBar({user}) {
    return (
        <div>
            <Navbar id="chat-navbar" toggleable="md" bg="light" variant="info">
            <NavbarBrand href="#">
                ReactChatKit
            </NavbarBrand>
            
            <Nav className="ml-auto">
                <Navbar.Text>{(user.length > 1) && user[0]} |</Navbar.Text>
                <Navbar.Text href="#" active='false'>Logout</Navbar.Text>
            </Nav>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state =>{

    return {
        user: state.user,
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
export default connect(mapStateToProps, mapDispatchToProps)(ChatNavBar)
