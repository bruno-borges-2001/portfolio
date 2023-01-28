import Link from "next/link";
import { ContactType } from "../../types"
import Image from "next/image";

import styles from "./styles.module.scss"

interface ContactLinkProps {
  contact: ContactType;
}

export default function ContactLink({ contact }: ContactLinkProps) {
  return (
    <Link className={styles.contactIcon} href={contact.href}>
      <div className={styles.tooltip}>{contact.label}</div>
      <Image src={contact.icon} alt={`link to ${contact.href}`} height={24} width={24} />
    </Link>
  )
}