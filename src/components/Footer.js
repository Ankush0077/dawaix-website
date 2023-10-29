import React from 'react';

// // import footer data
// import { footerData } from '../data';

// // import components
// import Copyright from './Copyright';
// import NewsLetter from './NewsLetter';

// const Footer = () => {
//   // destructure footer data
//   const { logo, address, email, phone, list1, list2, socialList } = footerData;
//   return (
//     <footer data-aos='fade-up'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col xl:flex-row text-center xl:text-left gap-y-12'>
//           {/* info */}
//           <div className='w-[45%] mx-auto flex flex-col items-center xl:items-start'>
//             {/* logo */}
//             <a href='#'>
//               <img style={{width: "40vh"}} className='mb-[65px]' src={logo} alt='' />
//             </a>
//             {/* address */}
//             <div className='max-w-[260px] mb-5 text-primary font-bold'>
//               {address}
//             </div>
//             {/* email */}
//             <div className='font-light italic'>{email}</div>
//             {/* phone */}
//             <div className='font-light italic'>{phone}</div>
//           </div>
//           {/* lists */}
//           <div className='flex flex-1 flex-col gap-y-14 xl:flex-row justify-between'>
//             {/* list 1 */}
//             <div>
//               <div className='font-extrabold text-primary mb-8'>About</div>
//               <ul className='flex flex-col gap-y-4'>
//                 {list1.map((item, index) => {
//                   return (
//                     <li key={index}>
//                       <a className='text-primary' href={item.href}>
//                         {item.name}
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//             {/* list 2 */}
//             <div>
//               <div className='font-extrabold text-primary mb-8'>Help</div>
//               <ul className='flex flex-col gap-y-4'>
//                 {list2.map((item, index) => {
//                   return (
//                     <li key={index}>
//                       <a className='text-primary' href={item.href}>
//                         {item.name}
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//             {/* social list */}
//             <div>
//               <div className='font-extrabold text-primary mb-8'>
//                 Social Media
//               </div>
//               <ul className='flex gap-y-4 gap-x-4 justify-center'>
//                 {socialList.map((item, index) => {
//                   return (
//                     <li
//                       className='w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-accent-secondary transition-all'
//                       key={index}
//                     >
//                       <a
//                         className='text-white text-xl hover:text-white'
//                         href={item.href}
//                       >
//                         {item.icon}
//                       </a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <NewsLetter />
//       <Copyright />
//     </footer>
//   );
// };

const Footer = () => {
  return (
    <footer class="bg-white shadow m-0 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://dawaix.com/" class="hover:underline">DawaiX™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="https://www.instagram.com/invites/contact/?i=khfb2f3d54gn&utm_content=s4vy28h" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
                  <span class="sr-only">Instagram page</span>
              </a>
              <a href="https://twitter.com/dawai_x" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="https://www.youtube.com/channel/UC_Oioq-Pkql-xVSqmkkECoA" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>
                  <span class="sr-only">Youtube account</span>
              </a>
              <a href="https://www.linkedin.com/company/dawaix_/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
                  <span class="sr-only">LinkedIn page</span>
              </a>
          </div>
        </div>
    </footer>
  )
};

export default Footer;