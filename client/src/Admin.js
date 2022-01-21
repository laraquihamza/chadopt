import React, { Component, Fragment } from 'react';
import AdminBody from './components/AdminBody';
import AdminSidebar from './components/AdminSidebar';
import Header from './components/Header';

class Admin extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className="admin-container">
                    <AdminSidebar></AdminSidebar>
                    <AdminBody></AdminBody>
                </div>
            </Fragment>
        );
    }
}

export default Admin;