import React from 'react';
import { Button } from '../../Button';
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
          <h1 className='pricing__heading'>Affordable and scalable prices</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>INDIVIDUAL</h3>
                <h4>$9.99</h4><p>per month</p>
                <ul className='pricing__container-features'>
                  <li>All features included with student plan</li>
                  <li>5 API Calls </li>
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

          {/* <div class="container px-lg-6">
            <div class="row mx-lg-n5">
              <div class="col py-3 px-lg-6 border bg-light">Custom column padding</div>
                
              <div class="col py-3 px-lg-5 border bg-light">Custom column padding</div>
            </div>
          </div> */}

          {/* <div class="student__container px-lg-6 mt2 cloud-padding rounded card-shadow border-pale-blue ">
            <div class="md-flex row">
              <div class="col flex-1 border-box">
                <div class="price-tier-text">STUDENT</div>
                <p class="h3 bold mb0 mt6">FREE for active students</p>
                <p class="h5 navy-2">Individual account for students</p>
                <p class="h5 navy-2">with a.edu email address</p>
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                  </Button>
              </div>
      
              <div class="w-100"></div>
              <div class="col border-box border-left border-color-pale-blue">
                <div class="md padding-left">
                  <div class="flex-center" mt1></div>
                  <div class="flex-center" mt1>Limited Core Data Access</div>
                  <div class="flex-center" mt1>For Personal Project</div>
                  <div class="flex-center" mt1>Unlimited Data Exchange</div>

                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;