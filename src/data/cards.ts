// src/data/cards.ts
import teamBuilder from "@/assets/icon-team-builder.svg"
import supervisor from "@/assets/icon-supervisor.svg"
import karma from "@/assets/icon-karma.svg"
import calculator from "@/assets/icon-calculator.svg"

type Card = {
  title: string
  description: string
  icon: string
  color: string
}

export const cards = [
  {
    title: "Team Builder",
    description: "Scans our talent network to create the optimal team for your project",
    icon: teamBuilder,
    color: "var(--red)",
  },
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: supervisor,
    color: "var(--cyan)",
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: karma,
    color: "var(--orange)",
  },
  {
    title: "Calculator",
    description: "Uses data from past projects to provide better delivery estimates",
    icon: calculator,
    color: "var(--blue)",
  },
] as const satisfies readonly Card[]