import PropTypes from 'prop-types';
import './FriendList.css';
import FriendItem from '../FriendItem/FriendItem.js';

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
