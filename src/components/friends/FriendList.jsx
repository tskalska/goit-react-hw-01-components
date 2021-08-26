import styles from './FriendList.module.css';

export default function FriendList(props) {
  return (
    <ul className={`${styles.friendList} container`}>
      {props.children}
    </ul>
  )
}