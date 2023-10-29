import React from 'react'

const HomeNew = () => {
  return (
    <div>
        <body style="font-family: 'Poppins', sans-serif; ">
	<section class="relative mb-8 md:mb-10">
		{/* <!-- header --> */}
		<div class="px-6 md:px-12 py-4 md:py-8">
			<div class="grid grid-cols-4 md:grid-cols-3 gap-4">
				<div class="col-start-1">
					{/* <!-- large device icon --> */}
					<div class="hidden md:block">
						<img src="assets/icons/medobed.png" class="w-36" />
					</div>
					{/* <!-- mobile device icon --> */}
					<div class="block md:hidden">
						<img src="assets/icons/medobed.png" />
					</div>
				</div>
				{/* <!-- Right nav --> */}
				{/* <!-- <div class="hidden md:block col-end-4">
					<div class="flex justify-end">
						<a class="pr-4" href="#">About Us</a>
						<a href="#">Contact Us</a>
					</div>
				</div>
				<div class="md:hidden col-end-7">
					Dropdown for small screens 
					<div class="md:hidden relative">
						<button type="button" class="flex items-center justify-center" id="dropdown-button">
							<i class="fa-solid fa-bars" style="font-size: 24px; color: #4471D4"></i>
						</button>
							<div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button" tabindex="-1" id="dropdown-menu">
							<div class="py-1" role="none">
								<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1">About Us</a>
								<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1">Contact Us</a>
							</div>
						</div>
					</div>
				</div> --> */}
			</div>
		</div>

		{/* <!-- hero --> */}
		<div class="px-6 md:px-24 lg:px-32 py-6 md:py-8">
			<div class="grid md:grid-cols-2">
				{/* <!-- hero text --> */}
				<div class="flex justify-center items-center">
					<div class="grid grid-cols-1">
						<h1 class="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-light" style="line-height: 1.1">
							Medicine Delivery<br/>
							in<br class="sm:block md:hidden" />
							<span class="font-semibold" style="color:#678FE8">10 mins</span>
						</h1>
						<div class="hidden md:block">
							{/* <!-- get 15% off text --> */}
							<div class="flex items-left items-end">
								<p class="text-2xl lg:3xl font-regular py-6" style="color:#646464">Get <span class="font-bold" style="color:#FE5B00">15% off</span> on orders </p>
								{/* <!-- <img src="assets/icons/party_popper_with_confetti.png" style="width: 109px; height: 109px" class=""> --> */}
							</div>
							{/* <!-- check pin code --> */}
							<div class="flex items-center pt-4">
								<div class="flex py-1 mr-2" style="border-bottom: 2px solid #3E6CD1">
									<i class="fa-solid fa-location-dot text-2xl" style="color: #FF9F0F"></i>
									<input id="pincode" class="bg-transparent border-none w-36 text-gray-700 mr-3 py-1 px-2 focus:outline-none" type="text" placeholder="Enter PIN code" style="color:#7A7A7A" />
								</div>
								
								<button id="checkAvailabilityButton" class="border bg-white py-1 px-4 rounded-md ml-2" style="border-color: #3E6CD1; border-width: 2px; color: #3E6CD1" onclick="checkAvailability(false)">
								Check Availability
								</button>

								<img id="loadingIcon" src="assets/icons/loading_icon.png" style="width: 30px; display: none" />

								<div id="availabilityPositiveMessage" style="display:none">
									<img class="ml-4" src="assets/icons/available_icon.png" style="width: 30px; display: inline-block" />
									<p class="font-regular ml-2" style="color: #008525; display: inline-block">Available</p>
								</div>
							</div>
							<div>
								{/* <!-- <p id="availabilityPositiveMessage" class="font-regular" style="color: #008525; display: none">Great news! We deliver to your area!<br>Order now!</p> --> */}
								<p id="availabilityNegativeMessage" class="font-regular" style="color: #F60000; display: none; margin-top: 4px">Unfortunately, we are not delivering in your area, yet.</p>
							</div>
							<div class="mb-12"></div>
							{/* <!-- order now button --> */}
							<a id="orderNowButton" target="_blank" class="mt-8 py-2 px-5 rounded-md text-white text-2xl font-medium custom-disabled-link" style="background-color: #4471D5; box-shadow: 0px 3px 5px #888888;" href="https://wa.me/message/YCU76MLKOWMCK1">
							Order now
							</a>
						</div>
					</div>
				</div>
				{/* <!-- hero illustration --> */}
				<div class="flex justify-center items-center py-4">
					<img src="assets/illustrations/heroDesktop.png" class="sm:w-1/2 md:w-4/5" />
				</div>
				{/* <!-- left part for small devices --> */}
				<div class="block md:hidden flex justify-center">
					<div class="grid grid-cols-1">
						<div class="flex justify-center items-center">
							<p class="text-1xl font-regular py-2" style="color:#646464">Get <span class="font-bold" style="color:#FE5B00">15% off</span> on orders</p>
							{/* <!-- <img src="assets/icons/party_popper_with_confetti.png" style="width: 45px; height: 45px" class=""> --> */}
						</div>
						{/* <!-- check pin code --> */}
						<div class="flex py-1" style="border-bottom: 2px solid #3E6CD1">
							<i class="fa-solid fa-location-dot text-2xl" style="color: #FF9F0F"></i>
							<input id="pincodeMobile" class="bg-transparent border-none w-full text-center text-gray-700 py-1 px-2 focus:outline-none" type="text" placeholder="Enter PIN code" style="color:#7A7A7A" />
						</div>
						<button id="checkAvailabilityButtonMobile" class="border bg-white mt-2 py-1 px-4 rounded-md text-1xl" style="border-color: #3E6CD1; border-width: 2px; color: #3E6CD1" onclick="checkAvailability(true)">
						Check Availability
						</button>
						<img id="loadingIconMobile" src="assets/icons/loading_icon.png" class="mt-2 mx-auto" style="width: 30px; display: none" />

						<div>
							{/* <!-- <p id="availabilityPositiveMessageMobile" class="font-regular" style="color: #008525; display: none">Great news! We deliver to your area!<br>Order now!</p> --> */}
							<div id="availabilityPositiveMessageMobile" style="display:none; margin: 8px auto; width: 120px">
								<img src="assets/icons/available_icon.png" style="width: 30px; display: inline-block" />
								<p class="font-regular ml-1" style="color: #008525; display: inline-block">Available</p>
							</div>
							<p id="availabilityNegativeMessageMobile" class="font-regular" style="color: #F60000; display: none">Unfortunately, we are not delivering in your area, yet.</p>
						</div>
						{/* <!-- order now button --> */}
						<a id="orderNowButtonMobile" target="_blank" class="mt-8 py-2 px-5 rounded-md text-white text-center text-1xl font-regular custom-disabled-link" style="background-color: #4471D5; box-shadow: 0px 3px 5px #888888;" href="https://wa.me/message/YCU76MLKOWMCK1">
						Order now
						</a>
					</div>					
				</div>
			</div>
		</div>
	</section>

	{/* <!-- steps section --> */}
	<section style="background-color: #678FE8">
		<div class="px-6 md:px-24 lg:px-32 py-8 md:py-20">
			<h2 class="text-white text-3xl md:text-5xl font-light text-center mb-10">Get medicines in 3 simple steps</h2>
			{/* <!-- <p class="lg:px-40 text-white text-1xl font-light text-center mt-6">Just send your prescription and current location to WhatsApp, and your medicine will be on its way in no time.</p> --> */}
			<div class="grid md:grid-cols-3 gap-6 py-8 lg:px-8">
				<div class="flex justify-center bg-white p-4" style="border-radius: 24px">
					<div class="grid grid-cols-1">
						<p class="text-center font-semibold text-2xl">Prescription</p>
						<img src="assets/illustrations/page2_1.png" class="py-6 mx-auto max-w-auto max-h-48 md:max-h-60" />
						<p class="text-center font-regular text-1xl" style="color: #353535">Take a picture of the medicine or  share the prescription on whatsapp</p>
					</div>
				</div>
				<div class="flex justify-center bg-white p-4" style="border-radius: 24px">
					<div class="grid grid-cols-1">
						<p class="text-center font-semibold text-2xl">Location</p>
						<img src="assets/illustrations/page2_2.png" class="py-6 mx-auto max-w-auto max-h-48 md:max-h-60" />
						<p class="text-center font-regular text-1xl" style="color: #353535">Share your current/ live location on whatsapp</p>
					</div>
				</div>
				<div class="flex justify-center bg-white p-4" style="border-radius: 24px">
					<div class="grid grid-cols-1">
						<p class="text-center font-semibold text-2xl">Payment on delivery</p>
						<img src="assets/illustrations/page2_3.png" class="py-6 mx-auto max-w-auto max-h-48 md:max-h-60" />
						<p class="text-center font-regular text-1xl" style="color: #353535">After receiving medicines pay directly via preferred method</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* <!-- statistics section --> */}
	{/* <!-- <section>
		<div class="px-6 md:px-24 lg:px-40 py-8 md:py-20">

			<div class="grid grid-cols-1 md:grid-cols-2">
				<img src="assets/illustrations/page3_1Desktop.png" class="hidden md:block w-full mx-auto" style="max-width: 350px;">
				<div class="px-6 flex items-center">
					<div class="grid grid-cols-1">
						<p class="text-3xl font-light text-center md:text-left pb-4" style="color: #4471D5">1,86,000 deliveries to date</p>
						<img src="assets/illustrations/page3_1Mobile.png" class="block md:hidden mx-auto w-1/2" style="max-width: 250px;">
						<p class="font-regular text-1xl text-center md:text-left pt-2 pb-4" style="color: #171717">With over 1700 daily orders fulfilled and over 186,000 medicines delivered to date, we are dedicated to providing exceptional customer care. Let us take care of your medication needs while you focus on spending time with your loved ones.</p>
					</div>					
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 pt-12 md:pt-24">
				<div class="px-6 flex items-center">
					<div class="grid grid-cols-1">
						<p class="text-3xl font-light text-center md:text-right pb-4" style="color: #4471D5">Delivering in 9 Government hospitals in Bhopal and Indore</p>
						<img src="assets/illustrations/page3_2Mobile.png" class="block md:hidden mx-auto w-1/2" style="max-width: 250px;">
						<p class="font-regular text-1xl text-center md:text-right pt-2 pb-4" style="color: #171717">Providing comprehensive healthcare services across 9 government hospitals in Bhopal and Indore including AIIMS Bhopal and MY Hospital Indore.</p>
					</div>					
				</div>
				<img src="assets/illustrations/page3_2Desktop.png" class="hidden md:block w-full mx-auto" style="max-width: 350px;">
			</div>
		</div>
	</section> --> */}

	{/* <!-- footer section --> */}
	<section style="background-color: #282828">
		<div class="px-6 md:px-24 lg:px-32 py-8 md:py-12">
			<div class="flex flex-col sm:flex-row items-center justify-center ">
				<p class="font-light text-2xl text-center md:text-left text-white">Backed by </p>
				{/* <!-- YC icon --> */}
				<img src="assets/icons/yc_icon.png" style="width: 200px" />
			</div>
			{/* <!-- <div class="flex items-center"> -->
				<p class="font-light text-1xl text-center text-white">Email for queries: <a href="mailto:founders@medobed.com" style="color: #7EA6FF">founders@medobed.com</a></p>
				<p class="font-light text-1xl text-center text-white mt-2">L-2/605, Katara Hills, Bhopal 462043 (M. P.)</p>
			<!-- </div> -->
			<!-- <p class="text-1xl text-center md:text-left pt-3 text-white">Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat tellus faucibus diam mauris ipsum vitae. Justo adipiscing integer dictum tortor viverra vel .</p> --> */}
		</div>
	</section>


</body>
    </div>
  )
}


export default HomeNew
