import React from 'react'
import TLNlogo from './images/TLN_logo 1.svg'

import { BsFacebook ,BsLinkedin,BsInstagram } from "react-icons/bs";

function Footer() {
    return (
        <>
            <div className='w-full text-center'>

                <div className='item-center justify-around flex py-10'>
                    <img src={TLNlogo} alt="" />
                </div>
                <p className='mx-5'>For any support, please mail to info@thelanguagenetwork.co. Our support team will get back to you within 24 hours.</p>

                <div className='py-10 flex flex-row text-sm text-slate-500 justify-between'>

                    <div className='flex justify-center text-center'>Copyright © {new Date().getFullYear()} The Language Network - All Right Reserved</div>
                    <div className='hidden lg:visible list-none	lg:flex flex-row'>
                        <li>
                            Terms and Conditions
                        </li>
                        <li>Privacy</li>
                        <li>PolicySitemap</li>
                    </div>
                    <div className=' hidden lg:visible lg:flex flex-row gap-4'>
                        <BsFacebook size={25} />
                        <BsLinkedin size={25} />
                        <BsInstagram size={25} />
                        <BsFacebook size={25} />

                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer
