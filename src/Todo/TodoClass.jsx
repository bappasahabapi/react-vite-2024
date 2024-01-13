import { Component } from 'react'

export default class TodoClass extends Component {

    //initial state
    state={
        todo:'',
        warning:null
    }

    
    handleChangeInput=(e)=>{

        
        const newTextValue =e.target.value;
        const warning =newTextValue.includes('.js')
            ? 'Your name is bappa da'
            : null;

        //update state handle here
        this.setState({
            todo:newTextValue,
            warning
        })
    }

    render() {
        const {todo,warning}=this.state;
        return (
            <div>
                <hr/>
                <p style={{backgroundColor:'yellow' }}>{todo}</p>
                <textarea
                 placeholder='.js includes in text' 
                 name='text' 
                 value={todo} 
                 onChange={this.handleChangeInput}/>
                <h3> {warning ||'Good Choice :)'} </h3>
                <hr/>
            </div>
        )
    }
}