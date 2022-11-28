import { HistoryType } from "../types"

interface HistorySectionProps {
  history?: HistoryType[]
}

export default function HistorySection({ history }: HistorySectionProps) {
  return (
    <div>
      {history?.map((el, i) => <p key={i}>{el}</p>)}
    </div>
  )
}