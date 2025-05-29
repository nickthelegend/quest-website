import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      {/* Navigation */}
      

      {/* Main Content */}
      <div className="relative pt-32 pb-0 sm:pt-40">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-purple-800/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-600/30 via-purple-900/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
              Download <span className="text-purple-400">AlgoQuest</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-12">
              Start your quest journey today and earn tokens while mastering algorithms. Available for iOS and Android
              devices.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
              {/* Google Play Button */}
              <a href="#" className="inline-block transform transition hover:scale-105">
                <Image
                  src="https://www.einpresswire.com/image/large/741945/google-play-logo.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="rounded-lg"
                />
              </a>

              {/* App Store Button */}
              <a href="#" className="inline-block transform transition hover:scale-105">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favpng_d16a26518ea837f0daaf0058b0d5fda7-cmxGhSHbbX4xHPlb1dvet8CRuytOI5.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="rounded-lg"
                />
              </a>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="relative mb-20">
            <div className="absolute inset-0 bg-purple-600/20 blur-[100px]" />

            <div className="relative flex justify-center items-end">
              {/* Left Phone */}
              <div className="hidden md:block transform -rotate-6 translate-x-10 -translate-y-5">
                <div className="w-64 h-128 rounded-3xl overflow-hidden border-8 border-black bg-black">
                  <Image
                    src="/mockups/1.jpg?height=550&width=260"
                    alt="AlgoQuest Mobile App - Quests Screen"
                    width={260}
                    height={550}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Center Phone */}
              <div className="z-10 transform translate-y-0 scale-110">
                <div className="w-72 h-144 rounded-3xl overflow-hidden border-8 border-black bg-black">
                  <Image
                    src="/mockups/2.jpg?height=600&width=300"
                    alt="AlgoQuest Mobile App - Home Screen"
                    width={300}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Phone */}
              <div className="hidden md:block transform rotate-6 -translate-x-10 -translate-y-5">
                <div className="w-64 h-128 rounded-3xl overflow-hidden border-8 border-black bg-black">
                  <Image
                    src="/mockups/3.jpg?height=550&width=260"
                    alt="AlgoQuest Mobile App - NFT Collection"
                    width={260}
                    height={550}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="relative mb-20">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                  <div className="bg-purple-700/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Daily Quests</h3>
                  <p className="text-gray-400">
                    Complete algorithm challenges every morning to earn quest tokens and improve your skills.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                  <div className="bg-purple-700/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Quest Tokens</h3>
                  <p className="text-gray-400">
                    Earn tokens on Algorand's blockchain that can be used to buy, trade, and mint NFT beasts.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                  <div className="bg-purple-700/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">NFT Beasts</h3>
                  <p className="text-gray-400">
                    Collect unique digital beasts with different abilities and attributes that represent your mastery of
                    algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="relative mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">System Requirements</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* iOS Requirements */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v18m0 0h6m-6 0H9" />
                    </svg>
                    iOS
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• iOS 14.0 or later</li>
                    <li>• iPhone, iPad, and iPod touch</li>
                    <li>• 150MB free storage space</li>
                    <li>• Internet connection required</li>
                  </ul>
                </div>
              </div>

              {/* Android Requirements */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    Android
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Android 7.0 or later</li>
                    <li>• 2GB RAM minimum</li>
                    <li>• 120MB free storage space</li>
                    <li>• Internet connection required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to start your quest?</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
              Join thousands of students improving their algorithm skills through gamified learning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="#" className="inline-block transform transition hover:scale-105">
                <Image
                  src="https://www.einpresswire.com/image/large/741945/google-play-logo.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="rounded-lg"
                />
              </a>
              <a href="#" className="inline-block transform transition hover:scale-105">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favpng_d16a26518ea837f0daaf0058b0d5fda7-cmxGhSHbbX4xHPlb1dvet8CRuytOI5.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative mt-0 border-t border-white/10 bg-gradient-to-b from-purple-900/10 to-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="py-8">
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-4">
                <li>
                  <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Marketplace
                  </Link>
                </li>
              </ul>
              <div className="text-center text-sm text-gray-400">
                © {new Date().getFullYear()} AlgoQuest. All rights reserved.
              </div>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}