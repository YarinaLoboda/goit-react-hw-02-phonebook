import './FriendItem.css';

function FriendItem({ isOnline, avatar, name }) {
  return (
    <li className="Items">
      {isOnline === true ? (
        <span className="Status-online"> </span>
      ) : (
        <span className="Status"> </span>
      )}

      <img className="Avatar" src={avatar} alt="User avatar" width="48" />
      <p className="Name">{name}</p>
    </li>
  );
}

export default FriendItem;
