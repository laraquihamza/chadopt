import React, { Component, Fragment } from 'react';
import AdminBody from './components/AdminBody';
import AdminBodyAdd from './components/AdminBodyAdd';
import AdminSidebar from './components/AdminSidebar';
import Header from './components/Header';

class AdminAdd extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className="admin-container">
                    <AdminSidebar></AdminSidebar>
                    <AdminBodyAdd></AdminBodyAdd>
                </div>
            </Fragment>
        );
    }
}

export default AdminAdd;