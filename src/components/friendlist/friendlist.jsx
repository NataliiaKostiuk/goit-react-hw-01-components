import css from './friendlist.module.css'
export const Friends = (props) => {
    return <ul className={css.friendslist}>
       { props.friends.map(({ id, avatar, name,isOnline}) => {
       return <li className={css.frienditem} key ={id}>
            <img className={css.friendimg} src={avatar} alt={name} />
            <p className={css.friendname}>{name}</p>
            <div className={css.friendstatus} style={{
          backgroundColor:isOnline ? 'green' : 'red'
        }}></div>
   </li> 
 }) }
    </ul>
}



