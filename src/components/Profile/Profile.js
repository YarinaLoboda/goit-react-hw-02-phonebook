import PropTypes from 'prop-types';
import './Profile.css';

function Profile({ username, avatar, tag, location, stats }) {
  const { followers, views, likes } = stats;

  return (
    <div className="Profile">
      <div className="Description">
        <img src={avatar} alt="User avatar" className="Avatar" />
        <p className="Name">{username}</p>
        <p className="Tag">@{tag}</p>
        <p className="Location">{location}</p>
      </div>

      <ul className="Stats">
        <li>
          <span className="Label">Followers</span>
          <span className="Quantity"> {followers}</span>
        </li>
        <li>
          <span className="Label">Views</span>
          <span className="Quantity"> {views}</span>
        </li>
        <li>
          <span className="Label">Likes</span>
          <span className="Quantity"> {likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
