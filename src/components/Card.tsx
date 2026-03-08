import styles from "./Card.module.scss"
import type { cards } from "@/data/cards"

type CardProps = (typeof cards)[number]

export default function Card({ title, description, icon, color }: CardProps) {
  return (
    <div className={styles.root} style={{ "--card-color": color } as React.CSSProperties} >
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={icon} alt={title} />
    </div>
  )
}
