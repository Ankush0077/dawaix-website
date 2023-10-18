import React from 'react'
// import request from 'request';

// const https = require("https-browserify");

function MailChimpSignUp(email) {
  // const api_key = '9b594445e985fa29412989ecf84a66ad-us21';

  // console.log(email)

  // const data = {
  //   members: [ 
  //     {
  //       email_address: email,
  //       status: "subscribed",
  //     }
  //   ]
  // };
     
  // const jsonData = JSON.stringify(data)

  // console.log(jsonData);

  // const url = "https://us21.api.mailchimp.com/3.0/lists/cb654e6892"

  // const options = {
  //     method: "POST",
  //     auth: api_key,
  // }
  
  // const request = https.request(url, options, function(response){
  //   console.log("Ankush");
  //   if (response.statusCode === 200) {
  //     alert("Your response is submitted successfully!!!")
  //   }else{
  //     alert("Failed to submit!!!")
  //   }

  //   response.on("data", function(data){
  //     console.log(JSON.parse(data));
  //   });
  // })

  // request.write(jsonData);
  // request.end();
}

const NewsLetter = () => {
  return (
<div class="container my-24 px-6 mx-auto">

  <section class="mb-8 text-gray-800 text-center lg:text-left">
    <div class="flex flex-wrap justify-center">
      <div class="grow-0 shrink-0 basis-auto w-full px-3">
        <div class="grid lg:grid-cols-2 gap-x-6">
          <div class="mb-10 lg:mb-0">
            <h2 class="text-3xl text-primary font-bold">
              Do not miss any updates.
              <br />
              <span class="text-blue-600">Subscribe to the newsletter</span>
            </h2>
          </div>

          <div class="mb-0 lg:mb-6 md:mb-0">
            <div class="md:flex flex-row">
              <input
                type="text"
                id='newsletter-email'
                class="form-control block w-full px-4 py-2 mb-4 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className='btn btn-secondary flex items-center gap-x-[20px] group'
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                data-aos='fade-up'
                data-aos-delay='300'
                onClick={() => MailChimpSignUp(document.getElementById("newsletter-email").value)}

              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
  )
}

export default NewsLetter