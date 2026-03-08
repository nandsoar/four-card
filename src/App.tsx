import Card from "@/components/Card"
import styles from "./App.module.scss"
import { cards } from "./data/cards"

function App() {
  return (
    <main className={styles.root}>
      <div className={styles.center}>
        <div className={styles.headings}>
          <h2>Reliable, efficient delivery</h2>
          <h2>Powered by Technology</h2>
          <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your
            project is successful
          </p>
        </div>
        <div className={styles.cards}>
          {cards.map(card => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
