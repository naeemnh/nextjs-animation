"use client";

import Image from 'next/image';
import { Abril_Fatface } from "next/font/google";
import { FaRocket, FaWallet } from 'react-icons/fa';

import logo from '/public/logo-dark.png';
import Button from '../Button';
import hover3d from "@/app/utils/hover";
import './header.scss';
import { useRef } from 'react';

const abril = Abril_Fatface({ subsets: ['latin'], weight: "400" });

export default function Header() {
  const hero = useRef<HTMLDivElement>(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  return (
    <header ref={hero}>
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
        <div className="text-content">
          <h1 className={abril.className}>
            Buy, collect & sell extraordinary NFTs
          </h1>
          <p>
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the highly sought-after NFTs, and
            comprehend the possible advantages and disadvantages of acquiring,
            amassing, and vending these exceptional digital assets.
          </p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
          <div className="image-content">
            <div
              className="image"
              style={{
                transform: hoverHero.transform,
              }}
            >
              <Image
                src="/images/monkey.png"
                width={600}
                height={600}
                alt="hero"
                style={{
                  transform: imageHover.transform,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
