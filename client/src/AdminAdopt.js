import React, { Component, Fragment } from 'react';
import AdminBody from './components/AdminBody';
import AdminBodyAdd from './components/AdminBodyAdd';
import AdminBodyAdopt from './components/AdminBodyAdopt';
import AdminSidebar from './components/AdminSidebar';
import Header from './components/Header';

class AdminAdopt extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className="admin-container">
                    <AdminSidebar></AdminSidebar>
                    <AdminBodyAdopt></AdminBodyAdopt>
                </div>
            </Fragment>
        );
    }
}

export default AdminAdopt;