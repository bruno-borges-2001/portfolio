import Image from 'next/image'
import Link from 'next/link'
import { ContactType } from '../types'
import ContactLink from '../components/ContactLink'

interface ContactSectionProps {
  contacts?: ContactType[]
}

export default function ContactSection({ contacts }: ContactSectionProps) {

  return (
    <div>
      <h3>If you want to reach me or get to know me better</h3>
      {contacts && (
        <div className='links-section'>
          {contacts.map((contact) => <ContactLink key={contact.label} contact={contact} />)}
        </div>
      )}
    </div>
  )
}