import React from 'react'
import {
  IoLogoGithub as Github,
  IoLogoInstagram as Instagram,
  IoLogoTwitter as Twitter,
  IoMailOutline as Mail
} from 'react-icons/io5'

const LINKS = [
  {
    icon: Github,
    link: 'https://github.com/stephensauceda'
  },
  {
    icon: Twitter,
    link: 'https://twitter.com/stephensauceda'
  },
  {
    icon: Instagram,
    link: 'https://www.instagram.com/stephensauceda/'
  }
]

function ContactIcons({ toggleForm }) {
  return (
    <ul className="text-2xl md:text-3xl">
      {LINKS.map(({ icon: Icon, link }) => (
        <li key={link} className="inline-block mr-4">
          <a href={link} rel="me" className="u-url text-black">
            <Icon />
          </a>
        </li>
      ))}
      <li className="inline-block mr-4">
        <a href="#" onClick={toggleForm}>
          <Mail />
        </a>
      </li>
    </ul>
  )
}

export default ContactIcons
