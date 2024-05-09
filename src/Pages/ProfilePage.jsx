import React from 'react';
import Layout from '../components/Layout/Layout.jsx'
import ProfileForm from '../components/User/ProfileForm.jsx';

function ProfilePage(props) {
    return (
       <Layout>
            <ProfileForm/>
       </Layout>
    );
}

export default ProfilePage;