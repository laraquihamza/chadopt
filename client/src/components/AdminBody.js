import React, { Component } from 'react';
class AdminBody extends Component {
    render() {
        return (
            <div className="admin-body">
                <h1> Bienvenue dans l'interface Administrateur !</h1>
                <p>Vous pouvez: 
                    <li>Ajouter un chat</li>
                    <li>Modifier un chat</li>
                    <li>Traiter les statuts d'adoption</li>
                    </p>
            </div>
        );
    }
}

export default AdminBody;