import Image from "next/image"
import { HistoryType } from "../types"

interface HistorySectionProps {
  history?: HistoryType[]
}

export default function HistorySection({ history }: HistorySectionProps) {
  return (
    <div>
      {history?.map((el, i) => (
        <div key={i} className="section">
          <p>{el.text}</p>
          <div className="image-wrapper">
            <Image src={el.image} alt={`image ${i}`} fill style={{ objectFit: i === 0 ? 'contain' : 'cover' }} className="" />
          </div>
        </div>
      ))}
    </div>
  )
}