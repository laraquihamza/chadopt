import React, { Component, Fragment } from 'react';
import CatCard from './CatCard';

class Body extends Component {
    state={cats:[]}
    async componentDidMount() {
        fetch('http://localhost:5000/getcats')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({...this.state, cats:data})
            }
        )

    }
    render() {
        return (
            <div class="body">
                <h1>Découvrez les chats près de chez vous</h1>
                <div class="cats-container">
                    {
this.state.cats.length>0?
this.state.cats.map((item,index) => (
    <CatCard  index={index} name={item.name} birthdate={item.birthdate}
    race={item.race}
    gender={item.gender}
    city={item.city}
    description={item.description}
    image={item.image}
    adoptionStatus={item.adoptionStatus}
/>
)):<p>Il n'y a pas de chats, veuillez en rajouter dans la section Admin</p>

                    }
                </div>
            </div>
        );
    }
}

export default Body;