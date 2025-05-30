import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MarketplacePage() {
  return (
    <div className="relative pt-32 pb-0 sm:pt-40">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Marketplace Title */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            <span className="text-purple-400">NFT</span> Marketplace
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Discover, trade, and collect unique algorithm-themed beasts on the Algorand blockchain.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-black/60 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-16 shadow-[0_0_30px_-5px_rgba(147,51,234,0.3)]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search beasts by name, type, or rarity..."
                className="w-full bg-black/50 border border-purple-500/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all hover:border-purple-500/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <select
                className="bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white
                focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all hover:border-purple-500/50"
              >
                <option value="">Rarity</option>
                <option value="common">Common</option>
                <option value="uncommon">Uncommon</option>
                <option value="rare">Rare</option>
                <option value="legendary">Legendary</option>
              </select>

              <select
                className="bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white
                focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all hover:border-purple-500/50"
              >
                <option value="">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="recent">Recently Added</option>
              </select>

              <select
                className="bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white
                focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all hover:border-purple-500/50"
              >
                <option value="">Type</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="earth">Earth</option>
                <option value="air">Air</option>
              </select>
            </div>
          </div>
        </div>

        {/* NFT Beast Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">All Beasts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Beast 1 - Fiery Golden */}
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://gateway.pinata.cloud/ipfs/QmQByZt2PvtfffBq3PBM8kZE5ZuMnHBMp4jeBs3G4o4BLb"
                    alt="Fiery Golden"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    Legendary
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">Fiery Golden</h3>
                <p className="text-gray-400 text-sm mb-3">Fire Master • Legendary Type</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">1800 QT</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-xs">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Beast 2 - Nivesh */}
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://gateway.pinata.cloud/ipfs/QmePPStZjEaKfAuT9J1XaPULie78WzVPbMUXKtRZ93JVdu"
                    alt="Nivesh"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600/90 text-white text-xs px-2 py-1 rounded-full">
                    Rare
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">Nivesh</h3>
                <p className="text-gray-400 text-sm mb-3">Investment Beast • Earth Type</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">1200 QT</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-xs">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Beast 3 - Water Huriken */}
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://gateway.pinata.cloud/ipfs/QmPELcPFozaECUiowGGDPBH4BUtott71yzua9PturwvcTq"
                    alt="Water Huriken"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600/90 text-white text-xs px-2 py-1 rounded-full">
                    Rare
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">Water Huriken</h3>
                <p className="text-gray-400 text-sm mb-3">Ninja Warrior • Water Type</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">1100 QT</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-xs">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Beast 4 - Red Dragon */}
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://gateway.pinata.cloud/ipfs/QmRTrTisZNprf38nSDEPbH1xq99SBhZEFAqiNSLLFqTpBr"
                    alt="Red Dragon"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-600/90 text-white text-xs px-2 py-1 rounded-full">
                    Epic
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">Red Dragon</h3>
                <p className="text-gray-400 text-sm mb-3">Flame Guardian • Fire Type</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">1500 QT</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-xs">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Beast 5 - RED DRAGON (Variant) */}
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://gateway.pinata.cloud/ipfs/Qma3rMQe63whdRjddNEgqZ94dkzSeXeukC6xpM8jgUamig"
                    alt="RED DRAGON"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    Legendary
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">RED DRAGON</h3>
                <p className="text-gray-400 text-sm mb-3">Ancient Flame • Fire Type</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">2000 QT</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-xs">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Beast 6 - Godzilla Beast */}
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://gateway.pinata.cloud/ipfs/QmX8iDMdugvyZ6x87KWLqhHfM7DcPJmew11qZYU7yjg3kB"
                    alt="Godzilla Beast"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-600/90 text-white text-xs px-2 py-1 rounded-full">
                    Mythic
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">Godzilla Beast</h3>
                <p className="text-gray-400 text-sm mb-3">Kaiju King • Earth Type</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">2500 QT</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-xs">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Beast 7 - Dragon Zilla */}
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://gateway.pinata.cloud/ipfs/QmcFDyKNpY4GJ1dytTHcXvUkMh7N4E4E5sNRExc6XeypCC"
                    alt="Dragon Zilla"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    Legendary
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">Dragon Zilla</h3>
                <p className="text-gray-400 text-sm mb-3">Hybrid Monster • Fire Type</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">1900 QT</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-xs">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Beast 8 - Fire Dragon */}
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://gateway.pinata.cloud/ipfs/Qmbf4mnHns6cyx9etbazHiSHZjEQywgzLNaVmZALArucEL"
                    alt="Fire Dragon"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-600/90 text-white text-xs px-2 py-1 rounded-full">
                    Epic
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">Fire Dragon</h3>
                <p className="text-gray-400 text-sm mb-3">Inferno Lord • Fire Type</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">1400 QT</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-xs">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Beast 9 - Sad */}
            <div className="relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                  <img
                    src="https://gateway.pinata.cloud/ipfs/QmQdb3rYBj3NPZ3aNhmYgccoX42Doji5KESZ9hwRADHL6A"
                    alt="Sad"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-gray-600/90 text-white text-xs px-2 py-1 rounded-full">
                    Common
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">Sad</h3>
                <p className="text-gray-400 text-sm mb-3">Melancholy Spirit • Dark Type</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">400 QT</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-xs">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-10">
            <Button variant="outline" size="sm" className="text-gray-400 border-white/10">
              Previous
            </Button>
            <Button size="sm" className="bg-purple-600">
              1
            </Button>
            <Button variant="outline" size="sm" className="text-gray-400 border-white/10">
              2
            </Button>
            <Button variant="outline" size="sm" className="text-gray-400 border-white/10">
              3
            </Button>
            <Button variant="outline" size="sm" className="text-gray-400 border-white/10">
              Next
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="bg-black/60 backdrop-blur-md rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Marketplace Statistics</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-900/30 to-black/60 rounded-lg p-4 text-center">
                <p className="text-gray-400 mb-1">Total Beasts</p>
                <p className="text-3xl font-bold text-white">1,248</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-black/60 rounded-lg p-4 text-center">
                <p className="text-gray-400 mb-1">Beasts Traded</p>
                <p className="text-3xl font-bold text-white">856</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-black/60 rounded-lg p-4 text-center">
                <p className="text-gray-400 mb-1">Active Users</p>
                <p className="text-3xl font-bold text-white">423</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-black/60 rounded-lg p-4 text-center">
                <p className="text-gray-400 mb-1">Total Volume</p>
                <p className="text-3xl font-bold text-white">542K QT</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Complete Quests</h3>
                <p className="text-gray-400">Solve daily algorithm challenges to earn quest tokens on Algorand.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Collect Tokens</h3>
                <p className="text-gray-400">Accumulate quest tokens in your wallet to use in the marketplace.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600/40 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Buy or Mint NFTs</h3>
                <p className="text-gray-400">Use your tokens to purchase existing beasts or mint new ones.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start collecting?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Download AlgoQuest today, complete quests, and start building your collection of algorithm beasts.
          </p>
          <Link href="/download">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-500 px-8 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            >
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
  )
}
