import css from './statistics.module.css'
import color from './random.color'
export const Statistics = ({ title, data }) => {
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2> }

        <ul className={css.statlist}>
            {data.map(({ id, label, percentage }) => <li key={id}
                className={css.item}
                style={{ backgroundColor: color() }}>
               <span className={css.label}>{label}</span>
               <span className={css.percentage}>{percentage}%</span>
    </li>) } 
   </ul> 
</section>
}


  



