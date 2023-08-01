import React from 'react';
import styles from '../../app/style/ProfileCard.module.css'; // Import the CSS module

const ProfileCard = ({ user, update }) => {
  return (
    <div className={styles.container}> {/* Apply the CSS module class */}
      <h2>Name: {user?.name}</h2>
      <h2>Email: {user?.email}</h2>
      <h2>Role: {user?.role}</h2>
      <h2>cash: {user?.cash}</h2>
      <h2>phone: 0{user?.phone}</h2>
    </div>
  );
};

export default ProfileCard;
