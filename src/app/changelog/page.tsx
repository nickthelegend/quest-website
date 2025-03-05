import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ChangelogPage() {
  return (
    <div className="relative pt-32 pb-0 sm:pt-40">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center rounded-full px-4 py-1 mb-6 
            bg-purple-900/50 border border-purple-700/50 
            shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)]"
          >
            <div className="w-2 h-2 rounded-full bg-purple-400 mr-2" />
            <span className="text-sm text-purple-300">Always Improving</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            AlgoQuest <span className="text-purple-400">Changelog</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            Stay up to date with the latest features, improvements, and fixes in AlgoQuest.
          </p>
        </div>

        {/* Current Version */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute left-8 inset-y-0 w-0.5 bg-purple-600/30" />

            <div className="relative mb-16">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center z-10">
                  <span className="text-white font-bold text-lg">2.0</span>
                </div>
                <div className="ml-6">
                  <h2 className="text-3xl font-bold text-white">Version 2.0</h2>
                  <p className="text-gray-400">Released on March 1, 2025</p>
                </div>
              </div>

              <div className="ml-20 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">🚀 New Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-purple-500 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-white font-medium">Algorand Mainnet Integration</span>
                        <p className="text-gray-400 text-sm">
                          AlgoQuest now runs on Algorand's mainnet, giving real value to your tokens and NFTs.
                        </p>
                      </div>
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
                      <div>
                        <span className="text-white font-medium">NFT Marketplace</span>
                        <p className="text-gray-400 text-sm">
                          Buy, sell, and trade your algorithm beasts with other users.
                        </p>
                      </div>
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
                      <div>
                        <span className="text-white font-medium">Beast Evolution</span>
                        <p className="text-gray-400 text-sm">
                          Evolve your beasts by completing specific algorithm challenges.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">🔧 Improvements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-500 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-white font-medium">Enhanced UI</span>
                        <p className="text-gray-400 text-sm">
                          Completely redesigned user interface for better navigation and experience.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-500 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-white font-medium">Performance Optimization</span>
                        <p className="text-gray-400 text-sm">Faster loading times and reduced battery consumption.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🐛 Bug Fixes</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-white font-medium">Wallet Connection Issues</span>
                        <p className="text-gray-400 text-sm">Fixed issues with wallet disconnections on iOS devices.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-white font-medium">Quest Completion Tracking</span>
                        <p className="text-gray-400 text-sm">
                          Fixed a bug where some completed quests weren't being properly recorded.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Previous Version */}
            <div className="relative mb-16">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-800/80 flex items-center justify-center z-10">
                  <span className="text-white font-bold text-lg">1.5</span>
                </div>
                <div className="ml-6">
                  <h2 className="text-3xl font-bold text-white">Version 1.5</h2>
                  <p className="text-gray-400">Released on December 15, 2024</p>
                </div>
              </div>

              <div className="ml-20 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">🚀 New Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-purple-500 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-white font-medium">Study Groups</span>
                        <p className="text-gray-400 text-sm">Create and join study groups with fellow students.</p>
                      </div>
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
                      <div>
                        <span className="text-white font-medium">Weekly Tournaments</span>
                        <p className="text-gray-400 text-sm">
                          Compete in weekly algorithm tournaments for special rewards.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🔧 Improvements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-500 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-white font-medium">Code Editor</span>
                        <p className="text-gray-400 text-sm">
                          Enhanced code editor with syntax highlighting for more languages.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* First Version */}
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-900/80 flex items-center justify-center z-10">
                  <span className="text-white font-bold text-lg">1.0</span>
                </div>
                <div className="ml-6">
                  <h2 className="text-3xl font-bold text-white">Version 1.0</h2>
                  <p className="text-gray-400">Released on September 1, 2024</p>
                </div>
              </div>

              <div className="ml-20 bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">🚀 Initial Release</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 text-purple-500 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-white font-medium">Daily Algorithm Quests</span>
                        <p className="text-gray-400 text-sm">
                          Complete daily challenges to earn tokens and improve your skills.
                        </p>
                      </div>
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
                      <div>
                        <span className="text-white font-medium">Algorand Testnet Integration</span>
                        <p className="text-gray-400 text-sm">Quest tokens and NFT beasts on Algorand's testnet.</p>
                      </div>
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
                      <div>
                        <span className="text-white font-medium">Basic NFT Collection</span>
                        <p className="text-gray-400 text-sm">
                          Collect algorithm-themed beasts as you master different concepts.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Coming Soon</h2>

          <div className="bg-gradient-to-br from-purple-900/30 to-black/60 rounded-xl p-8 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-purple-600/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Beast Battles</h3>
                <p className="text-gray-300">
                  Challenge other users to algorithm battles using your NFT beasts. Coming in Version 2.5.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-purple-600/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Leaderboards</h3>
                <p className="text-gray-300">
                  Compete with students worldwide on global and university-specific leaderboards. Coming in Version 2.5.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-purple-600/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Challenge Generator</h3>
                <p className="text-gray-300">
                  Custom algorithm challenges generated based on your skill level and learning goals. Coming in Version
                  3.0.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-full bg-purple-600/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Beast Fusion</h3>
                <p className="text-gray-300">
                  Combine two beasts to create a more powerful hybrid with unique abilities. Coming in Version 3.0.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Have a feature request?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking to improve AlgoQuest. Let us know what features you'd like to see in future updates.
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-500 px-8 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          >
            Submit Feedback
          </Button>
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

