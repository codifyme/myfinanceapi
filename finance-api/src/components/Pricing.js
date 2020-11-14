import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>INDIVIDUAL</h3>
                <h4>$9.99</h4><p>per month</p>
                <ul className='pricing__container-features'>
                  <li>For Personal Project</li>
                  <li>5 API Calls </li>
                  <li>Personal use</li>
                  <li>Full Access to Core Data</li>
                  <li>Email & Chat support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>TEAMS</h3>
                <h4>$39.99</h4><p>per month</p>
                <ul className='pricing__container-features'>
                  <li>All features included with Individual plan</li>
                  <li>22 API Calls</li>
                  <li>Up to 8 Team Members</li>
                  <li>Personal & Commercial use</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>ENTERPRISE</h3>
                <h4>$480</h4><p>per month</p>
                <ul className='pricing__container-features'>
                  <li>All features included with Teams plan</li>
                  <li>Up to 8000 API Calls</li>
                  <li>Unlimited Team Members</li>
                  <li>Priority Customer Support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;