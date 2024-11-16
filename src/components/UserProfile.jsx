import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserProfile = () => {
  const { user, loading, error } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    user && (
      <div>
        <img src={user.avatar_url} alt={user.login} />
        <h2>{user.name}</h2>
        <p>Username: {user.login}</p>
        <p>Followers: {user.followers}</p>
        <p>Public Repos: {user.public_repos}</p>
      </div>
    )
  );
};

export default UserProfile;
