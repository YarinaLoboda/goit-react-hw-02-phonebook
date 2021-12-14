import PropTypes from 'prop-types';
import './FriendList.css';

const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <li className="Item">
      {isOnline === true ? (
        <span className="Status-online"> </span>
      ) : (
        <span className="Status"> </span>
      )}

      <img className="Avatar" src={avatar} alt="User avatar" width="48" />
      <p className="Name">{name}</p>
    </li>
  );
};

function FriendList({ friends }) {
  return (
    <ul className="Friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
