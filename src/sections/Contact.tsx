import Image from 'next/image'
import Link from 'next/link'
import { ContactType } from '../types'

interface ContactSectionProps {
  contacts: ContactType[]
}

export default function ContactSection({ contacts }: ContactSectionProps) {

  return (
    <div>
      <h3>If you want to reach me...</h3>
      <div className='links-section'>
        {
          contacts.map((contact, i) => (
            <Link key={`contact ${i}`} href={contact.href}>
              <Image src={contact.icon} alt={`link to ${contact.href}`} height={24} width={24} />
            </Link>
          ))
        }
      </div>
    </div>
  )
}