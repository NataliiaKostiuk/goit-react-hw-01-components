import css from './statistics.module.css'
import color from './random.color'
export const Statistics = (props ) => {
    return <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

        <ul className={css.statlist}>
            {props.data.map(({ id, label, percentage }) => <li key={id}
                className={css.item}
                style={{ backgroundColor: color() }}>
               <span className={css.label}>{label}</span>
               <span className={css.percentage}>{percentage}%</span>
    </li>) } 
   </ul> 
</section>
}


  



