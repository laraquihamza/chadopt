import React, { Component, Fragment } from 'react';

class AdminBodyAdopt extends Component {
    state={cats:[],catsfiltered:[],currentcat:{},index:0,displayModal:"none"}


    handleChange=(event)=>{
        var {name,value}=event.target
        var currentcat=this.state.currentcat
        currentcat[name]=value
        this.setState({...this.state, currentcat:currentcat})

    

    }
    adoptcat=(index)=>{
        const response =  fetch(`http://localhost:5000/adoptcat?index=${index}`,{method:"POST"}).
        then(res=>res.text())
        .then(text=>console.log(text));
        fetch('http://localhost:5000/getcats')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({...this.state, cats:data})
            })
            this.numbercatswaiting()

    

    }

    handleSubmit=(index)=>{
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
            const response =  fetch(`http://localhost:5000/editcat?index=${index}&name=${this.state.currentcat.name}&birthdate=${this.state.currentcat.birthdate}&race=${this.state.currentcat.race}&gender=${this.state.currentcat.gender}&city=${this.state.currentcat.city}&description=${this.state.currentcat.description}&image=${this.state.currentcat.image}`,{method:"POST"}).
            then(res=>res.text())
            .then(text=>console.log(text));
            this.setState({displayModal:"none"})
        }
        else{
            alert(errormessage)
        }
    }

    numbercatswaiting=()=>{
        var i=0;
        var cat={}
        for(cat in this.state.cats){
            console.log(cat)
            if(cat.adoptionStatus==="en attente"){
                var catsfiltered=[]
                catsfiltered.push(cat)
                this.setState({...this.state, catsfiltered:catsfiltered})
            }
        }
    }


    generateimage=()=>{
        fetch('http://aws.random.cat/meow')
        .then(response => response.json())
        .then(data => {
            var currentcat=this.state.currentcat
            currentcat.image=data.file
            console.log(data)
            this.setState({...this.state, currentcat:currentcat})
        }
        )
    }



    canceldemandcat=(index)=>{
        fetch(`http://localhost:5000/canceldemandcat?index=${index}`,{method:"POST"})
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({...this.state, cats:data})
            }
        )
        
    }
    showModal=(index)=>{
        var currentcat=this.state.cats[index]
        this.setState({...this.state, currentcat:currentcat,displayModal:"block",index:index});
    }
    async componentDidMount() {
        fetch('http://localhost:5000/getcats')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            this.setState({...this.state, cats:data})
            }
        )
        this.numbercatswaiting()

    }


    render() {
        return (
            <div className="admin-body">
                <table>
                    <tbody>
                        <tr className="table-header">
                        <th>IMAGE</th>
                <th>NOM</th>
        <th>DATE DE NAISSANCE</th>
        <th>RACE</th>
        <th>SEXE</th>
        <th>VILLE</th>
        <th></th>
        <th></th>
                        </tr>
                        {
( this.state.cats.length>0 && this.state.cats.filter(cat => cat.adoptionStatus==="en attente").length>0)?
this.state.cats.map((item,index) => (
    item.adoptionStatus==="en attente"?
    <tr>
    <td><img src={item.image} style={{height:'50px'}}/></td>
<td>{item.name}</td>
<td>{item.birthdate}</td>
<td>{item.race}</td>
<td>{item.gender}</td>
<td>{item.city}</td>
<td><i onClick={()=>this.adoptcat(index)} style={{color:"green"}} class="material-icons">check</i>
</td>
<td><i onClick={()=>this.canceldemandcat(index)} style={{color:"red"}} class="material-icons">close</i>
</td>
    </tr>:<Fragment></Fragment>

)):<p>Il n'y a pas de chats en attente d'adoption</p>

                    }


                    </tbody>
        </table>


        </div>
        );
    }
}

export default AdminBodyAdopt;