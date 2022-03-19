/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

function Profile(){
    return (
        <div className="profile">
            <h1 className="name">Je suis <br />neas.</h1>
            <img className="profile-img" src="./images/neas-pic.png" alt="Soundcloud-profile-picture" />
            <h3>
            Je débute. je suis étudiant français au québec et entre deux cours j'écris.
            </h3>
        </div>
    );
}

export default Profile;