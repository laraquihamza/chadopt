import React, { Component } from 'react';

class AdminBodyAdd extends Component {
    state={
        name:"",
        birthdate:"",
        race:"",
        gender:"",
        city:"",
        description:"",
        image:""
    }
    handleChange=(event)=>{
        var {name,value}=event.target
        this.setState({...this.state, [name]:value})

    

    }
    handleSubmit=()=>{
        var errormessage=""
        if(this.state.name==""){
            errormessage=errormessage+"Veuillez entrer un nom \n"
        }
        if(this.state.birthdate==""){
            errormessage=errormessage+"Veuillez entrer une date de naissance \n"
        }
        if(this.state.race==""){
            errormessage=errormessage+"Veuillez entrer une race \n"
        }
        if(this.state.gender==""){
            errormessage=errormessage+"Veuillez entrer un sexe \n"
        }
        if(this.state.city==""){
            errormessage=errormessage+"Veuillez entrer une ville \n"
        }
        if(this.state.image==""){
            errormessage=errormessage+"Veuillez sélectionner une image \n"
        }
        if (errormessage===""){
            alert("success")
            const response =  fetch(`http://localhost:5000/addcat?name=${this.state.name}&birthdate=${this.state.birthdate}&race=${this.state.race}&gender=${this.state.gender}&city=${this.state.city}&description=${this.state.description}&image=${this.state.image}`,{method:"POST"}).
            then(res=>res.text())
            .then(text=>console.log(text));

    

        }
        else{
            alert(errormessage)
        }
    }
    generateimage=()=>{
        fetch('http://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({...this.state, image:data.file})
        }
        )
    }
    render() {

        return (
            <div className="admin-body">
                <div className="admin-form">
                <h1>Ajouter un chat</h1>

                <div className="generate-image-div">
                {
                    this.state.image===""?<i class="material-icons" style={{fontSize:"200px"}}>account_circle</i>:<img style={{height:"200px"}} src={this.state.image}/>
                }
                <button onClick={this.generateimage}>Générer image</button>
                </div>
                <div>
                <input name="name" onChange={this.handleChange} placeholder='Nom du chat'></input>
                </div>
                <div>
                <input type="date" onChange={this.handleChange} name="birthdate" placeholder='Date de Naissance'></input>
                </div>
                <div>
                <input onChange={this.handleChange} name="race" placeholder='Race'></input>
                </div>
                <div>
                <select onChange={this.handleChange} name="gender" placeholder='Sexe'>
                <option value="">Veuillez sélectionner un sexe</option>
                    <option value="Mâle">Mâle</option>
                    <option value="Femelle">Femelle</option>
                </select>
                </div>
                <div>
                <input onChange={this.handleChange} name="city" placeholder='Ville'></input>
                </div>
                <div>
                <input onChange={this.handleChange} name="description" placeholder='Description'></input>
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Ajouter</button>
                </div>
            </div>
                </div>
        );
    }
}

export default AdminBodyAdd;