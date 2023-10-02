import css from './user.module.css'
export const Profile = ({
  user: {
    username,
    avatar,
    tag,
    location,
    stats: { followers, likes, views },
  },
}) => {
  return <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt={username}
        className={css.avatar}
      />
      <p className={css.username}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

<ul className={css.stats}>
      <li>
              <span className={css.uslabel}>Followers:</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li>
              <span className={css.uslabel}>Views:</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li>
        <span className={css.uslabel}>Likes:</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
}