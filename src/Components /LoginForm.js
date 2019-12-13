import React, {useState, useEffect} from 'react';
import {connect } from 'react-redux'
import {Form, Alert, Button} from 'react-bootstrap'
import actions  from './../store/actions'


function LoginForm({error, loading, login, loggedIn}) {
    const [hasError, setError] = useState(false);
    const [user, setUserName] = useState('hunt');

    //checking if the user has typed in a username grater than 3 of length
    useEffect(()=>{
        (!error) ? setError(false) : setError(true);
    },[error])
    

    let result = user.length < 3;
    const isValid= ()=> {
        return result ? result: loading
    }
    const handleChange =(e)=>{
        isValid()
        setUserName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        login(user);
    }

    return (
        <div className='login-form'>
            <h5 className='text-center'>Chat Login</h5>
            <hr/>
            <Form onSubmit ={handleSubmit}>
                <Alert variant='danger' show={hasError}>{error}</Alert>
                <Form.Group id="userInputGroup"
                    label="User Name"
                    label-for="userInput">
                <Form.Label>User Name</Form.Label>
                <Form.Control 
                    id="userInput"
                    type="text"
                    value={user}
                    placeholder="Enter user name"
                    autoComplete='off'
                    disabled= {loading}
                    onChange={handleChange}
                    required />

                </Form.Group>
                <Button 
                    type="submit"
                    variant="primary"
                    className={`ld-ext-right ${loading && 'running'}`}
                    disabled={isValid()}
                    >
                    Login {loading && <div className="ld ld-ring ld-spin"></div> }
                </Button>
            </Form>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        loading: state.loading,
        error: state.error,
        loggedIn : state.loggedIn,
    }
}
const mapDispatchToProps = {
        login: actions.login,
    
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
