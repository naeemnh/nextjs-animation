"use client";

import Image from 'next/image';
import { Abril_Fatface } from "next/font/google";
import { FaRocket, FaWallet } from 'react-icons/fa';

import logo from '../../../public/logo-dark.png';
import Button from '../Button/Button';
import hover3d from "../../utils/hover";
import './header.scss';

const abril = Abril_Fatface({ subsets: ['latin'], weight: "400" });

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Image src={logo} alt="logo" width={100} />
        </div>
        <div className="input"><input type="text" placeholder='Search' /></div>
        <ul className="nav-items">
          <li><a href="#">Home</a></li>
          <li><a href="#">Auctions</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">About</a></li>
          <Button name='Connect Wallet' icon={<FaWallet />} />
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content"></div>
      </div>
    </header>
  )
}
