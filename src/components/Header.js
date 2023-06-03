import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header-container">
        
        <Link
          className="logo-container"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={process.env.PUBLIC_URL+'/logo.png'} className="logo-img" alt="logo" />
        </Link>
       <div className='menu-container'>
        <ul className='menu-links'>
          <li> <a href='/' target='_blank'>My Assignment </a></li>
          <li> <a href='/' target='_blank'>Chat With Mentor </a></li>
          <li className='profile-icon'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="#800080"/> </svg>ProfileName <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z" fill="#800080"/>
</svg>
</li>
        </ul>
        <div className="mobile-btn-container">
        <p className="mobile-btn">Vishal <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z" fill="white"/>
</svg>
</p>
        </div>
        </div>
      </header>
  </> )
}

export default Header;
