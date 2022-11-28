import Link from "next/link";
import { companies } from "../../assets";

import styles from './styles.module.scss'

interface CompanyButtonProps {
  role: string;
  company: string;
  link: string;
  backgroundImage: string;

  start: string;
  end: string;
}

export default function CompanyButton({ role, company, link, backgroundImage, start, end }: CompanyButtonProps) {

  return (
    <Link className={styles.buttonContainer} style={{ backgroundImage: `url(${backgroundImage})` }} href={link}>
      <div className={styles.hoverContainer}>
        <p>
          {role}
          <br />
          <span>{company}</span>
        </p>
        <p>
          {start}
          -
          {end}
        </p>
      </div>
    </Link>
  )

}