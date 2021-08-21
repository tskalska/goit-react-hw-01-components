import styles from './Profile.module.css';

function Profile(props) {
  const {avatar, name, tag, location, followers, views, likes} = props;
  return (
  <div className="container">
    <div className={styles.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={styles.avatar}
      />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className="label">Followers:</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views:</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes:</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>

  </div>
)}



export default Profile;