import React, { Component, Fragment } from 'react';
import AdminBody from './components/AdminBody';
import AdminBodyAdd from './components/AdminBodyAdd';
import AdminBodyList from './components/AdminBodyList';
import AdminSidebar from './components/AdminSidebar';
import Header from './components/Header';

class AdminList extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className="admin-container">
                    <AdminSidebar></AdminSidebar>
                    <AdminBodyList></AdminBodyList>
                </div>
            </Fragment>
        );
    }
}

export default AdminList;