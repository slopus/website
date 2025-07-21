'use client'

import AppStoreButton from '@/components/AppStoreButton'
import GooglePlayButton from '@/components/GooglePlayButton'
import NpmButton from '@/components/NpmButton'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Bricolage_Grotesque } from 'next/font/google'

const bricolageGrotesque = Bricolage_Grotesque({
  weight: '700',
  subsets: ['latin'],
})

export default function Home() {
  // Background video source
  const videoSrc = '/water1-small.mp4'
  
  // Device detection state
  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'desktop'>('desktop')

  useEffect(() => {
    // Client-side device detection
    const userAgent = navigator.userAgent.toLowerCase()
    
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDeviceType('ios')
    } else if (/android/.test(userAgent)) {
      setDeviceType('android')
    } else {
      setDeviceType('desktop')
    }
  }, [])

  // Render store buttons based on device type
  const renderStoreButtons = () => {
    switch (deviceType) {
      case 'ios':
        return (
          <>
            <NpmButton href="https://www.npmjs.com/package/happy-coder" />
            <AppStoreButton href="https://google.com" />
          </>
        )
      case 'android':
        return (
          <>
            <NpmButton href="https://www.npmjs.com/package/happy-coder" />
            <GooglePlayButton href="https://google.com" />
          </>
        )
      case 'desktop':
      default:
        return (
          <>
            <NpmButton href="https://www.npmjs.com/package/happy-coder" />
            <GooglePlayButton href="https://google.com" />
            <AppStoreButton href="https://google.com" />
          </>
        )
    }
  }
  
  return (
    <main className="min-h-screen relative text-white flex flex-col items-center justify-center p-8">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> */}
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 mt-6">
          <h1 className={`${bricolageGrotesque.className} text-4xl md:text-5xl font-bold text-white`}>
            Happy Coder
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="text-3xl md:text-4xl leading-[100%] mb-8 text-white">
          <p className="mb-2">Claude Code</p>
          <p>in your pocket.</p>
        </div>
        
        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row justify-center items-center max-w-lg mx-auto mb-8">
          {renderStoreButtons()}
        </div>
        
        {/* App Screenshot */}
        <div className="mb-16">
          <Image
            src="/app-1.png"
            alt="Rafty App Screenshot"
            width={400}
            height={866}
            className="mx-auto w-[400px] max-w-[80%] h-auto"
          />
        </div>
        
        {/* Features List */}
        <div className="text-xl leading-normal mb-20 text-white">
          <ul className="space-y-2 max-w-md mx-auto text-center">
            <li className="flex items-center justify-center">
              <span className="text-white mr-3">•</span>
              End-to-End Encrypted
            </li>
            <li className="flex items-center justify-center">
              <span className="text-white text-shadow-sm/50 mr-3">•</span>
              Open Source
            </li>
            <li className="flex items-center justify-center">
              <span className="text-white text-shadow-2xs mr-3">•</span>
              Voice-to-code
            </li>
            <li className="flex items-center justify-center">
              <span className="text-white text-shadow-lg mr-3">•</span>
              Native mobile UX
            </li>
            <li className="flex items-center justify-center">
              <span className="text-white mr-3">•</span>
              Seamless Workflow
            </li>
          </ul>
        </div>
        
        {/* Installation Guide */}
        <div className="text-base leading-normal mb-20 text-white">
          <h3 className="text-xl font-semibold mb-4">How to get started:</h3>
          <ol className="space-y-2 max-w-md mx-auto text-left">
            <li className="flex items-start">
              <span className="text-white mr-3 mt-1">1.</span>
              Download the mobile app
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 mt-1">2.</span>
              Install the NPM package and run 'happy'
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 mt-1">3.</span>
              Scan the QR code
            </li>
          </ol>
        </div>
        
        {/* Footer */}
        <div className="text-sm leading-normal text-white">
          Made in San Francisco 🌉
        </div>
      </div>
    </main>
  )
} 