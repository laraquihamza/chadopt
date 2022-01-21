import React, { Component } from 'react';

class AdminSidebar extends Component {
    render() {
        return (
            <div class="admin-sidebar">
                <h3>Interface Administrateur</h3>
                <a href="AdminAdd">Ajouter un chat</a>
                <a href="AdminList">Liste des chats</a>
                <a href="AdminAdopt">Statut des adoptions</a>
            </div>
        );
    }
}

export default AdminSidebar;