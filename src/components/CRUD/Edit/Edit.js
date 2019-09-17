import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import './Edit.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';

class Edit extends React.Component{
    constructor(){
        super()
        //get note being changed
        let appendingMessage = sessionStorage.getItem("ChangingMessage");
        appendingMessage = JSON.parse(appendingMessage);

        //get collection of notes
        let notesIn= localStorage.getItem("myObj");
        notesIn = JSON.parse(notesIn);

        this.state={
            id: appendingMessage.id,
            title: appendingMessage.title,
            text: appendingMessage.text,
            index: appendingMessage.index,
            notes:notesIn,
            editNote:appendingMessage,
            redirectToReferrer:false
         }   
         
         this.handleChange=this.handleChange.bind(this);
         this.handleChangeTitle=this.handleChangeTitle.bind(this);
    }


    
  handleChange(value) {
    this.setState({ text: value })
  }
  handleChangeTitle(event){
    const {name,value} = event.target
    this.setState({
        [name]:value
    })
 }
    onMove(){

        let notes = this.state.notes

        const {title, text} = this.state;
        let editNote =
        {
            id:this.state.id,
            title:title,
            text:text
        }
        notes[this.state.index] = editNote;

       // Update local-storage.
        var foo =JSON.stringify(notes);
        localStorage.setItem("myObj", foo);
        //distroy object in session
        sessionStorage.removeItem('ChangingMessage');
        
           //Toast Message for edit
           toast.success("Successfully Updated!!", {
            position: toast.POSITION.BOTTOM_RIGHT});


        //Redirect back to home
        let redirectToReferrer= this.state.redirectToReferrer
        this.setState({redirectToReferrer:true})      

    }
    render(){
              
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="./" />
        }

        return(

            <div>
                <h3>Edit</h3>
                <button onClick={this.onMove.bind(this)}>
                    Save
                </button> 
                <div className="edit-bod">
                <input type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChangeTitle}
                    />

                    <p>Note:</p>

                    <ReactQuill value={this.state.text}
                    onChange={this.handleChange}/>
                </div>
            </div>
        )
    }
}
export default withRouter(Edit);

