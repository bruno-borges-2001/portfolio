import './section.scss'

import styles from './styles.module.scss'
import sections from "../../sections"
import { cloneElement } from 'react';

type SectionType = keyof typeof sections;

interface SectionProps {
  type: SectionType
  params?: any
}

export default function Section({ type, params }: SectionProps) {
  return (
    <section id={type} className={styles['section-container']}>
      {sections[type] ? cloneElement(sections[type], params) : <div />}
    </section>
  )
}