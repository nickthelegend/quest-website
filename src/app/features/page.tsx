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

          {/* App Mockups Showcase */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">See AlgoQuest in Action</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore the actual app interface and discover how students interact with quests, manage their digital
                assets, battle with NFT beasts, participate in DAO governance, and compete on leaderboards.
              </p>
            </div>

            {/* Mockup Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Splash Screen */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="aspect-[9/16] relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock1.jpg-Em0AkqiOV1jTB8hNo9ghz38fi3fNnr.jpeg"
                      alt="AlgoQuest Splash Screen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Welcome Screen</h3>
                  <p className="text-gray-400 text-sm">
                    Charming dragon mascots welcome users to the AlgoQuest universe, setting the tone for a fun,
                    gamified learning experience.
                  </p>
                </div>
              </div>

              {/* Dashboard */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="aspect-[9/16] relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock2.jpg-iadoz8o3cL4m34YVkr7poKvg3JwLmA.jpeg"
                      alt="AlgoQuest Dashboard"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Personal Dashboard</h3>
                  <p className="text-gray-400 text-sm">
                    Track your progress with SCAMP tokens earned (1,250), active streaks (5), upcoming events, and quest
                    completion status (8/10).
                  </p>
                </div>
              </div>

              {/* Battle Beasts */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="aspect-[9/16] relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock3.jpg-07vvlTlWxNiOZ0C0YWSLPkdBh6IpAk.jpeg"
                      alt="Battle Beasts Interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Battle Arena</h3>
                  <p className="text-gray-400 text-sm">
                    Compete with NFT beasts! View your rank (1,234), win streak (7), battle record (23/12), and access
                    marketplace features.
                  </p>
                </div>
              </div>

              {/* Wallet */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="aspect-[9/16] relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock4.jpg-zaWFxM1vG6GiYHF2l2EaxXtiwzFqUD.jpeg"
                      alt="Algorand Wallet Integration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Blockchain Wallet</h3>
                  <p className="text-gray-400 text-sm">
                    Manage your ALGO balance (6.624 ≈ $1.44), Quest Coins (250 Q), transaction history, and NFT
                    collection all in one place.
                  </p>
                </div>
              </div>

              {/* Location Quest */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="aspect-[9/16] relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock5.jpg-g7U0m0A9w1uRnA7oYzByQTxQ7yZUMS.jpeg"
                      alt="Location-based Quest"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Campus Quests</h3>
                  <p className="text-gray-400 text-sm">
                    Location-based Quest #411 at university campus. Complete epic quests to earn exclusive NFT rewards
                    worth 218 SCAMP tokens.
                  </p>
                </div>
              </div>

              {/* NFT Details */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="aspect-[9/16] relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock6.jpg-HPXK4hx8V9UCql5WdVp8c6ZJE3zODT.jpeg"
                      alt="NFT Reward Certificate"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">NFT Rewards</h3>
                  <p className="text-gray-400 text-sm">
                    Earn beautiful NFT certificates like this "Gold Tier" reward. Each NFT has unique metadata, creator
                    info, and blockchain verification.
                  </p>
                </div>
              </div>

              {/* Transaction History */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="aspect-[9/16] relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock7.jpg-UqeHH5bacMq84RdPXemEHLU2uwPFlS.jpeg"
                      alt="Blockchain Transaction History"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Transaction History</h3>
                  <p className="text-gray-400 text-sm">
                    Complete transparency with detailed blockchain transaction history. Track all Asset Config
                    transactions with timestamps and unique blockchain IDs.
                  </p>
                </div>
              </div>

              {/* DAO Governance */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="aspect-[9/16] relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock8.jpg-nsE6HUFT11tQeTzx0RMbTcDsukbTT7.jpeg"
                      alt="DAO Governance System"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">DAO Governance</h3>
                  <p className="text-gray-400 text-sm">
                    Participate in community governance through DAO proposals. Vote on important decisions and help
                    shape the future of AlgoQuest with proposals like App ID 737849124.
                  </p>
                </div>
              </div>

              {/* Leaderboards */}
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="aspect-[9/16] relative overflow-hidden rounded-xl mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock9.jpg-9XZsjxNQVrVWBjWSMUDfYxZoZsmUCT.jpeg"
                      alt="Competitive Leaderboards"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Competitive Rankings</h3>
                  <p className="text-gray-400 text-sm">
                    Climb the "Top Warriors" leaderboard! Track your ranking against other players with detailed win
                    rates and battle statistics. Current #1 has 100% win rate!
                  </p>
                </div>
              </div>
            </div>
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
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 text-purple-500 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Location-based campus quests for real-world engagement</span>
                  </li>
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700">Try a Sample Quest</Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-purple-600/20 blur-[100px]" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock2.jpg-iadoz8o3cL4m34YVkr7poKvg3JwLmA.jpeg"
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock4.jpg-zaWFxM1vG6GiYHF2l2EaxXtiwzFqUD.jpeg"
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
                  Earn Quest Tokens (QT) and SCAMP tokens when you complete daily challenges. These tokens are deployed
                  on Algorand's blockchain, providing real value and ownership for your learning efforts.
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
                    <span className="text-gray-300">
                      Integrated Algorand wallet showing real ALGO balance (6.624 ALGO ≈ $1.44)
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
                      Quest Coins (250 Q) earned through completing algorithm challenges
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
                    <span className="text-gray-300">Full transaction history and wallet management features</span>
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
                  <span className="text-sm text-purple-300">Collectibles & Battles</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Battle Beasts & NFT Rewards</h2>
                <p className="text-gray-300 mb-6">
                  Use your tokens to buy, trade, or mint unique algorithm-themed beasts. Battle other players and earn
                  exclusive NFT certificates like the "Gold Tier" rewards shown in our app.
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
                    <span className="text-gray-300">Battle arena with ranking system (current rank: 1,234)</span>
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
                    <span className="text-gray-300">Track win streaks (7) and battle records (23 wins/12 losses)</span>
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
                    <span className="text-gray-300">Beautiful NFT certificates with blockchain verification</span>
                  </li>
                </ul>
                <Button className="bg-purple-600 hover:bg-purple-700">Explore Beasts</Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute inset-0 bg-purple-600/20 blur-[100px]" />
                <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock6.jpg-HPXK4hx8V9UCql5WdVp8c6ZJE3zODT.jpeg"
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mock5.jpg-g7U0m0A9w1uRnA7oYzByQTxQ7yZUMS.jpeg"
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
                <h2 className="text-3xl font-bold text-white mb-4">Campus Integration & Events</h2>
                <p className="text-gray-300 mb-6">
                  Connect with fellow students through location-based quests on your university campus. Participate in
                  events like "Blockchain Workshops" and "DAO Proposals" to earn extra rewards.
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
                    <span className="text-gray-300">Location-based quests at university campuses</span>
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
                    <span className="text-gray-300">Special events like Blockchain Workshops (50 SCAMP rewards)</span>
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
                    <span className="text-gray-300">Community governance through DAO proposals (234 votes)</span>
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
