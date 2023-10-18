import React, { Component }  from 'react'
import { render } from 'react-dom';

// import components
import Header from '../../components/Header';

import ReferralImage from '../../assets/img/referral_image.jpeg';

import { getReferralCode } from '../../Functions/Referral'

class ReferYourFriends extends Component {
  constructor() {
    super(); 
    this.state = {
      phoneNumber: '',
      encryptedBase64Input: '',
    };
  }

  handlePhoneNumberChange = (event) => {
    this.setState({
      phoneNumber: event.target.value
    }, this.encryptPhoneNumber)
  }
  
  encryptPhoneNumber = () => {
    this.setState({
      encryptedBase64Input: getReferralCode(this.state.phoneNumber)
    })
  }

  render() {
    return (
      <div className='mt-4'>
        <Header />
        <section className=" min-h-screen flex items-center justify-center">

          <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

            <div className="md:w-1/2 px-8 md:px-16">
              <h2 className="font-bold text-2xl text-[#002D74]">Refer Your Friends!</h2>
              <p className="text-xs mt-4 text-[#002D74]">Generate a referral code and get discounts whenever someone uses your referral code as coupon code in thier purchase.</p>

              <form action="" className="flex flex-col gap-4">
                <input id="referral_phone_number" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} className="p-2 mt-8 rounded-xl border" type="text" name="text" placeholder="Your Phone Number" />
              </form>

              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">YOUR CODE</p>
                <hr className="border-gray-400" />
              </div>
              
              <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Your referral code is: {this.state.encryptedBase64Input}</p>
              </div>

            </div>

            <div className="md:block hidden w-1/2">
              <img style={{height: '35vh'}} alt='Referral Image' className="rounded-2xl" src={ReferralImage} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ReferYourFriends
