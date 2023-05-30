"use client";



import React from 'react';
import Image from 'next/image';
import {MagnifyingGlassIcon,UserCircleIcon} from "@heroicons/react/24/solid";
import Avatar from 'react-avatar';

function Header () {
    return (

<header>
<div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10'>


<Image
src="/kklogov4.jpg"
width={300}
height={100}
alt=""
className='w-44 md:w-56 pb-1 object-contain'

/>
 
<div className='flex items-center space-x-5 flex-1 justify-end w-full'>
    <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
        <input className='flex-1 outline-none p-2' type='text' placeholder='search'/>
        <button type="submit" hidden>Search</button>
    </form>

    {/*avatarbaby*/}
    <Avatar name="Krisztian kaposi" round size="50" color ="#0055d1"/>
</div>

</div>
</header>


    );
}

export default Header