"use client";



import React, { useEffect,useState } from 'react';
import Image from 'next/image';
import {MagnifyingGlassIcon,UserCircleIcon} from "@heroicons/react/24/solid";
import Avatar from 'react-avatar';
import { useBoardStore } from '@/store/BoardStore';
import fetchSuggestion from '@/lib/fetchSuggestion';
import styles from './header.module.css';



function Header () {

        const [board,searchString,setSearchString]= useBoardStore((state)=>[
            
            state.board,
            state.searchString,
            state.setSearchString,
        ]);
        const [loading,setLoading]=useState<boolean>(false);
        const [suggestion, setSuggestion]=useState<string>("");

        useEffect(()=> {
            if (board.columns.size===0) return;
            setLoading(true);

            const fetchSuggestionFunc = async ()=> {
                const suggestion = await fetchSuggestion(board);
                setSuggestion(suggestion);
                setLoading(false);
            };
            fetchSuggestionFunc();
        },[board]);

    
    
        return (
            <header>
              <div className="">
                <video autoPlay loop muted className={`w-full h-full object-cover ${styles.headerVideo}`}>
                  <source src="./videoBg.mp4" type="video/mp4" />
                </video>
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md filter blur-3xl opacity-50 -z-50 ${styles.videoOverlay}`} />
        
                <div className='relative z-10'>
                  <Image
                    src="/kklogov4.jpg"
                    width={300}
                    height={100}
                    alt=""
                    className='w-44 md:w-56 pb-1 object-contain rounded-full'
                  />
        
                  <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
                    <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                      <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
                      <input
                        type='text'
                        placeholder='search'
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                        className='flex-1 outline-none p-2'
                      />
                      <button type="submit" hidden>Search</button>
                    </form>
        
                    {/*avatarbaby*/}
                    <Avatar name="Krisztian kaposi" round size="50" color="#0055d1" />
                  </div>
                </div>
        
              </div>
              <div className='flex items-center justify-center px-5 py-2 md:py-5'>
                <p className='flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]'>
                  <UserCircleIcon
                    className={`inline-block h-10 w-10 text-[#0055d1] mr-1 ${
                      loading && "animate-spin"
                      }`}
                  />
                  {suggestion && !loading
                    ? suggestion
                    : "gpt is summarizing your day"}
                </p>
              </div>
            </header>
          );
        }
        
        export default Header;