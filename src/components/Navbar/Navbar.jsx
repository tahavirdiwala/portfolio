import {  useContext, useState } from 'react'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'
import { ThemeContext } from '../../contexts/theme'
import CloseSharp from '@mui/icons-material/CloseSharp';
import MenuSharp from '@mui/icons-material/MenuSharp';

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? "☀️" : '🌜'}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseSharp /> : <MenuSharp />}
      </button>
    </nav>
  )
}

export default Navbar
