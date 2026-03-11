import Card from "@/components/Card"
import styles from "./App.module.scss"
import { cards } from "./data/cards"

function App() {
  return (
    <main className={styles.root}>
      <div className={styles.center}>
        <section className={styles.headings}>
          <h1>
            <span>Reliable, efficient delivery</span>
            <br />
            <span>Powered by Technology</span>
          </h1>
          <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful </p>
        </section>
        <section className={styles.cards}>
          {cards.map(card => (
            <Card key={card.title} {...card} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
