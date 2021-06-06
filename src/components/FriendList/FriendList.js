import React from "react";
import s from "./FriendsList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.FriendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={s.FriendsListItem} key={id}>
            <span className={isOnline ? s.Online : s.Offline}></span>
            <img className={s.Avatar} src={avatar} alt={name} width="48" />
            <p className={s.Name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
