import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({avatar, name, isOnline})=>{
  return (
      <li className={styles.item}>
        <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
        <img 
          className={styles.avatar} 
          src={avatar} 
          alt="" 
          width="48" /> 
        <p className="name">{name}</p>
      </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}

export default FriendListItem;