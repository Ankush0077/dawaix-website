import React, { Component }  from 'react'
import { render } from 'react-dom';

// import components
import Header from '../../components/Header';

import ReferralImage from '../../assets/img/referral_image.jpeg';

const CryptoJS = require('crypto-js')

const REFERRAL_KEY = "INDIAN INSTITUTE OF TECHNOLOGY(IIT) KANPUR"

const cfg = {
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
};

class GetPhoneNumber extends Component {
  constructor() {
    super(); 
    this.state = {
        referralCode: '',
        phoneNumber: ''
    };
  }

  getPhoneNumber = (encryptedBase64) => {
    const decrypted = CryptoJS.AES.decrypt(encryptedBase64, REFERRAL_KEY);
    if (decrypted) {
      try {
        console.log(decrypted);
        const str = decrypted.toString(CryptoJS.enc.Utf8);
        if (str.length > 0) {
          return str;
        } else {
          return 'Please enter a valid code.';
        } 
      } catch (e) {
        return 'Some Error Occurred';
      }
    }
    return 'Some Error Occurred';
  };

  handleReferralCodeChange = (event) => {
    this.setState({
      referralCode: event.target.value
    }, this.decryptReferralCode)
  }

  decryptReferralCode = () => {
    this.setState({
      phoneNumber: this.getPhoneNumber(this.state.referralCode)
    })
  }

  render() {
    return (
      <div className='mt-4'>
        <Header />
        <section className=" min-h-screen flex items-center justify-center">

          <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

            <div className="md:w-1/2 px-8 md:px-16">
              <h2 className="font-bold text-2xl text-[#002D74]">Get Phone Number!</h2>
              <p className="text-xs mt-4 text-[#002D74]">Get phone number from the given referral code. (Only for DawaiX Admin)</p>

              <form action="" className="flex flex-col gap-4">
                <input id="referral_code" value={this.state.referralCode} onChange={this.handleReferralCodeChange} className="p-2 mt-8 rounded-xl border" type="text" name="text" placeholder="Referral Code" />
              </form>

              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">PHONE NUMBER</p>
                <hr className="border-gray-400" />
              </div>
              
              <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>The phone number is: {this.state.phoneNumber}</p>
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

export default GetPhoneNumber
