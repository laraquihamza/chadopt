import React, { Component, Fragment } from 'react';

class CatCard extends Component {
    send_adoption=()=>{
        console.log(this.props.index)
        if (this.state.adoptionStatus==="disponible"){
            const response =  fetch(`http://localhost:5000/demandcat?index=${this.props.index}`,{method:"POST"}).
            then(res=>res.text())
            .then(text=>console.log(text));
            this.setState({...this.state, adoptionStatus:"en attente"})

        }
        if (this.state.adoptionStatus==="en attente"){
            const response =  fetch(`http://localhost:5000/canceldemandcat?index=${this.props.index}`,{method:"POST"}).
            then(res=>res.text())
            .then(text=>console.log(text));
            this.setState({...this.state, adoptionStatus:"disponible"})

        }

        console.log("hoho")
    }
    openModal=()=>{
        this.setState({...this.state, displayModal:"block"})
    }
    closeModal=()=>{
        this.setState({...this.state, displayModal:"none"})
    }
    state={
        name:this.props.name,
        birthdate:this.props.birthdate,
        race:this.props.race,
        gender:this.props.gender,
        city:this.props.city,
        description:this.props.description,
        image:this.props.image,
        adoptionStatus:this.props.adoptionStatus, backgroundColor:"red",displayModal:"none"}
    componentDidMount(){
    }
    render() {
        return (
            <Fragment>
                        <div className="card" >
                        <div className="top-card">
                                        <img src={this.state.image}></img>
                <p>{this.state.name}</p>
                        </div>
                        <div className="top-card">
                                        <div className="adopt-button" style={{backgroundColor:this.state.backgroundColor}} onClick={this.send_adoption}>{this.state.adoptionStatus}
                </div>
                <span onClick={this.openModal}> Plus de détails</span>

                        </div>
            </div>
            <div className="modal-cat"  style={{display:this.state.displayModal}}>
                                <div className="close-button" style={{backgroundColor:"black"}} onClick={this.closeModal}
                                ><i class="material-icons">close</i>
            </div>
            <div style={{width:"", margin:"auto"}}>
            <img style={{height:"200px"}} src={this.state.image}></img>
                <p><b>Nom: </b>{this.state.name}</p>
                <p><b>Date de naissance: </b>{this.state.birthdate}</p>
                <p><b>Race: </b>{this.state.race}</p>
                <p><b>Sexe: </b>{this.state.gender}</p>
                <p><b>Ville: </b>{this.state.city}</p>
                <p><b>Description: </b>{this.state.description}</p>


            </div>

            </div>

            </Fragment>
        );
    }
}

export default CatCard;