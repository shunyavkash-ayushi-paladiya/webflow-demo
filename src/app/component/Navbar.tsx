import React from 'react'
import config from "../../../next.config";
import Link from 'next/link';

const assetPrefix = config.assetPrefix || config.basePath || '';

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="header-img-content">
            <img 
              src={`${assetPrefix}/images/furniro-logo.svg`} 
              alt="logo" 
            />
          </div>
          <div className="header-option-content">
             <Link href="/" className='header-option'>Home</Link>
             <Link href="/" className='header-option'>Shop</Link>
             <Link href="/" className='header-option'>About</Link>
             <Link href="/" className='header-option'>Contact</Link>
          </div>
          <div className="header-online-opetions">
             <Link href="" className='header-online-icon'>
               <img src={`${assetPrefix}/images/account-alert.svg`} alt="online-icon" />
             </Link>
             <Link href="" className='header-online-icon'>
               <img src={`${assetPrefix}/images/search.svg`} alt="online-icon" />
             </Link>
             <Link href="" className='header-online-icon'>
               <img src={`${assetPrefix}/images/heart.svg`} alt="online-icon" />
             </Link>
             <Link href="" className='header-online-icon'>
               <img src={`${assetPrefix}/images/shopping-carts.svg`} alt="online-icon" />
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
