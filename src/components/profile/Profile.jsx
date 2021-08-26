import styles from './Profile.module.css';

function Profile(props) {
  const {avatar, name, tag, location, stats} = props;
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
    <ul className={styles.statsValue}>
      {Object.keys(stats).map(label => (
        <li key={label}>
          <span className="label">{label}</span>
          <span className="quantity">{stats[label]}</span>
        </li>
        ))
      }
    </ul>
  </div>
)}



export default Profile;