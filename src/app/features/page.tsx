import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
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
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
              <span className="text-purple-400">Features</span> of AlgoQuest
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
              Discover how AlgoQuest transforms algorithm learning into an engaging gaming experience with quests,
              tokens, and collectible NFT beasts.
            </p>
          </div>

          {/* Feature 1: Daily Quests */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div
                  className="inline-flex items-center rounded-full px-4 py-1 mb-4 
                bg-purple-900/50 border border-purple-700/50"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-2" />
                  <span className="text-sm text-purple-300">Core Feature</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Daily Algorithm Quests</h2>
                <p className="text-gray-300 mb-6">
                  Start your morning with engaging algorithm challenges designed to improve your coding skills. Each
                  quest is carefully crafted to teach fundamental concepts while being fun to solve.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Progressive difficulty levels from beginner to advanced</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">
                      Topics covering sorting, searching, graph algorithms, dynamic programming, and more
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Instant feedback and complete solutions to improve learning</span>
                  </li>
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700">Try a Sample Quest</Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-purple-600/20 blur-[100px]" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Daily Quests Interface"
                    width={500}
                    height={500}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Quest Tokens */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600/20 blur-[100px]" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Quest Tokens and Blockchain"
                    width={500}
                    height={500}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
              <div>
                <div
                  className="inline-flex items-center rounded-full px-4 py-1 mb-4 
                bg-purple-900/50 border border-purple-700/50"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-2" />
                  <span className="text-sm text-purple-300">Blockchain Integration</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Quest Tokens on Algorand</h2>
                <p className="text-gray-300 mb-6">
                  Earn Quest Tokens (QT) when you complete daily challenges. These tokens are deployed on Algorand's
                  blockchain, providing real value and ownership for your learning efforts.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Tokens securely stored in your personal Algorand wallet</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">
                      Variable rewards based on quest difficulty and completion time
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">
                      Currently running on Algorand's testnet with plans for mainnet
                    </span>
                  </li>
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700">Learn About Tokenomics</Button>
              </div>
            </div>
          </div>

          {/* Feature 3: NFT Beasts */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div
                  className="inline-flex items-center rounded-full px-4 py-1 mb-4 
                bg-purple-900/50 border border-purple-700/50"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-2" />
                  <span className="text-sm text-purple-300">Collectibles</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Collectible NFT Beasts</h2>
                <p className="text-gray-300 mb-6">
                  Use your tokens to buy, trade, or mint unique algorithm-themed beasts. Each beast represents mastery
                  of a specific algorithm type and comes with unique attributes and powers.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Four rarity levels: Common, Uncommon, Rare, and Legendary</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">
                      Distinctive types tied to algorithm categories (sorting, graphs, etc.)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Trade with fellow students to complete your collection</span>
                  </li>
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700">Explore Beasts</Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-purple-600/20 blur-[100px]" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="NFT Beasts Collection"
                    width={500}
                    height={500}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Leaderboards & Community */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600/20 blur-[100px]" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Leaderboards and Community"
                    width={500}
                    height={500}
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
              <div>
                <div
                  className="inline-flex items-center rounded-full px-4 py-1 mb-4 
                bg-purple-900/50 border border-purple-700/50"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400 mr-2" />
                  <span className="text-sm text-purple-300">Social Learning</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Leaderboards & Community</h2>
                <p className="text-gray-300 mb-6">
                  Connect with fellow students, compete on global leaderboards, and form study groups. AlgoQuest makes
                  learning a social experience.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Global, university, and friend leaderboards</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Create and join study groups for collaborative learning</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Weekly challenges and tournaments with special rewards</span>
                  </li>
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700">Join the Community</Button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to begin your quest?</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
              Download AlgoQuest today and join thousands of students improving their algorithm skills through gamified
              learning.
            </p>
            <Link href="/download">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8">
                Download Now
              </Button>
            </Link>
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

