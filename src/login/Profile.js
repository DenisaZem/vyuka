import React from 'react';
import AuthService from './AuthService';

const Profile = () => {
  const user = AuthService.getCurrentUser();

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <p>Welcome, {user.username}!</p>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;