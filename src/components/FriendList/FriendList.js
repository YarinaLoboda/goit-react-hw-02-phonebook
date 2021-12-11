import PropTypes from 'prop-types';
import './FriendList.css';

function FriendList({ friends }) {
  return (
    <ul className="Friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className="Item">
          {isOnline === true ? (
            <span className="Status-online"> </span>
          ) : (
            <span className="Status"> </span>
          )}

          <img className="Avatar" src={avatar} alt="User avatar" width="48" />
          <p className="Name">{name}</p>
        </li>
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
