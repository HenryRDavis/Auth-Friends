import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class MoreFriends extends React.Component {

    state = {
        data: {
            id: '',
            name: '',
            age: '',
            email: '',
        }
    }

    changeHandler = evt => {
        this.setState({
            data: {
                ...this.state.data,
                [evt.target.name]: evt.target.value,
            }
        })
    }

    onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', this.state.data)
            .then(res => 
                console.log(res)
                )
            .catch(err => 
                console.log(err)
                )
    }

    render(){
        return (
            <div>
                <form onSubmit={null}>
                    <input 
                    type='text'
                    name='name'
                    placeholder='Insert Name'
                    value={this.state.data.name}
                    onChange={this.changeHandler}
                    />
                    <input 
                    type='number'
                    name='age'
                    placeholder='Insert Age'
                    value={this.state.data.age}
                    onChange={this.changeHandler}
                    />
                    <input 
                    type='text'
                    name='email'
                    placeholder='Insert Email'
                    value={this.state.data.email}
                    onChange={this.changeHandler}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

export default MoreFriends;