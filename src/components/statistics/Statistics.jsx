import styles from './Statistics.module.css';

function Statistics(props) {
  const {title, stats} = props;
  return (
    <div className="container">
      <section className={styles.statistics}>
        {title.length > 0 &&
          <h2 className="title">{title}</h2>
        }
        <ul className={styles.statlist}>
          {stats.map(stat => ( 
            <li key={stat.id} className="item">
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </li>))
          }
        </ul>
      </section>
    </div>
  )
}

Statistics.defaultProps ={
  title:''
}



export default  Statistics;