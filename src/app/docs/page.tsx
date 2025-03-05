import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-purple-700/30 rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-purple-800/30 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="mx-auto px-4">
          <div className="flex items-center justify-between h-16 my-2">
            <div className="flex items-center gap-16">
              <Link href="/" className="flex items-center group">
                <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <span className="ml-2 text-white font-bold text-lg">AlgoQuest</span>
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/features">
                  <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-purple-900/30">
                    Features
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button variant="ghost" className="text-white hover:text-white hover:bg-purple-900/30">
                    Docs
                  </Button>
                </Link>
                <Link href="/marketplace">
                  <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-purple-900/30">
                    Marketplace
                  </Button>
                </Link>
                <Link href="/changelog">
                  <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-purple-900/30">
                    Changelog
                  </Button>
                </Link>
              </div>
            </div>
            <Link href="/download">
              <Button className="bg-purple-600 hover:bg-purple-500 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                Download
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative pt-32 pb-0 sm:pt-40">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Documentation Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
              AlgoQuest <span className="text-purple-400">Documentation</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
              Everything you need to know about using AlgoQuest, from getting started to advanced features.
            </p>
          </div>

          {/* Documentation Layout */}
          <div className="flex flex-col lg:flex-row gap-8 mb-20">
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Contents</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#getting-started" className="text-purple-400 hover:text-purple-300 transition-colors">
                      Getting Started
                    </a>
                  </li>
                  <li>
                    <a href="#quests" className="text-gray-300 hover:text-white transition-colors">
                      Daily Quests
                    </a>
                  </li>
                  <li>
                    <a href="#tokens" className="text-gray-300 hover:text-white transition-colors">
                      Quest Tokens
                    </a>
                  </li>
                  <li>
                    <a href="#nft-beasts" className="text-gray-300 hover:text-white transition-colors">
                      NFT Beasts
                    </a>
                  </li>
                  <li>
                    <a href="#marketplace" className="text-gray-300 hover:text-white transition-colors">
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a href="#wallet" className="text-gray-300 hover:text-white transition-colors">
                      Wallet Setup
                    </a>
                  </li>
                  <li>
                    <a href="#algorand" className="text-gray-300 hover:text-white transition-colors">
                      Algorand Integration
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Documentation Content */}
            <div className="lg:w-3/4">
              {/* Getting Started Section */}
              <section id="getting-started" className="mb-16">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Getting Started</h2>
                  <p className="text-gray-300 mb-6">
                    Welcome to AlgoQuest! This guide will help you get started with our app and begin your journey of
                    learning algorithms through gamification.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-4">Installation</h3>
                  <p className="text-gray-300 mb-4">
                    AlgoQuest is available for both iOS and Android devices. You can download it from the respective app
                    stores:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Button className="bg-purple-600 hover:bg-purple-500">Download for iOS</Button>
                    <Button className="bg-purple-600 hover:bg-purple-500">Download for Android</Button>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Creating an Account</h3>
                  <p className="text-gray-300 mb-4">
                    After installing the app, you'll need to create an account. You can sign up using:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Your university email address</li>
                    <li>Google account</li>
                    <li>Apple ID (for iOS users)</li>
                  </ul>

                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                    <h4 className="text-lg font-bold text-white mb-2">Note for Students</h4>
                    <p className="text-gray-300">
                      Using your university email provides additional benefits, including access to university-specific
                      leaderboards and study groups.
                    </p>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">App Overview</h3>
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Main Dashboard</h4>
                      <p className="text-gray-300 mb-4">The dashboard is your central hub where you can see:</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Daily quests</li>
                        <li>Your token balance</li>
                        <li>NFT beast collection</li>
                        <li>Leaderboard position</li>
                      </ul>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-600/10 blur-lg"></div>
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="AlgoQuest Dashboard"
                        width={300}
                        height={200}
                        className="relative rounded-lg border border-white/10"
                      />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">Navigation</h4>
                  <p className="text-gray-300 mb-4">
                    The app has five main sections accessible from the bottom navigation bar:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    <div className="bg-black/60 p-4 rounded-lg text-center">
                      <div className="w-10 h-10 rounded-full bg-purple-600/40 flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </div>
                      <p className="text-white text-sm">Home</p>
                    </div>
                    <div className="bg-black/60 p-4 rounded-lg text-center">
                      <div className="w-10 h-10 rounded-full bg-purple-600/40 flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                          />
                        </svg>
                      </div>
                      <p className="text-white text-sm">Quests</p>
                    </div>
                    <div className="bg-black/60 p-4 rounded-lg text-center">
                      <div className="w-10 h-10 rounded-full bg-purple-600/40 flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-white text-sm">Tokens</p>
                    </div>
                    <div className="bg-black/60 p-4 rounded-lg text-center">
                      <div className="w-10 h-10 rounded-full bg-purple-600/40 flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                      <p className="text-white text-sm">Marketplace</p>
                    </div>
                    <div className="bg-black/60 p-4 rounded-lg text-center">
                      <div className="w-10 h-10 rounded-full bg-purple-600/40 flex items-center justify-center mx-auto mb-2">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-white text-sm">Profile</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Quests Section */}
              <section id="quests" className="mb-16">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6">Daily Quests</h2>
                  <p className="text-gray-300 mb-6">
                    Quests are the core of the AlgoQuest experience. Each day, you'll receive new algorithm challenges
                    to solve, helping you build your skills while earning tokens.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Quest Types</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-green-500/30 flex items-center justify-center mt-1 mr-3">
                            <span className="text-green-400 text-xs">E</span>
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Easy Quests</h4>
                            <p className="text-gray-400 text-sm">
                              Basic algorithm challenges suitable for beginners. Rewards: 50-100 QT.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-yellow-500/30 flex items-center justify-center mt-1 mr-3">
                            <span className="text-yellow-400 text-xs">M</span>
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Medium Quests</h4>
                            <p className="text-gray-400 text-sm">
                              Intermediate challenges requiring deeper understanding. Rewards: 100-200 QT.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-red-500/30 flex items-center justify-center mt-1 mr-3">
                            <span className="text-red-400 text-xs">H</span>
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Hard Quests</h4>
                            <p className="text-gray-400 text-sm">
                              Advanced problems testing complex algorithm knowledge. Rewards: 200-300 QT.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center mt-1 mr-3">
                            <span className="text-purple-400 text-xs">S</span>
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Special Quests</h4>
                            <p className="text-gray-400 text-sm">
                              Weekly challenges with unique mechanics and higher rewards. Rewards: 300-500 QT.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Quest Topics</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-purple-900/20 rounded-lg p-3 border border-purple-500/30">
                          <h4 className="text-white font-medium">Sorting Algorithms</h4>
                          <p className="text-gray-400 text-sm">Bubble, Quick, Merge, etc.</p>
                        </div>
                        <div className="bg-purple-900/20 rounded-lg p-3 border border-purple-500/30">
                          <h4 className="text-white font-medium">Search Algorithms</h4>
                          <p className="text-gray-400 text-sm">Binary, Linear, Hashing</p>
                        </div>
                        <div className="bg-purple-900/20 rounded-lg p-3 border border-purple-500/30">
                          <h4 className="text-white font-medium">Graph Algorithms</h4>
                          <p className="text-gray-400 text-sm">DFS, BFS, Dijkstra's</p>
                        </div>
                        <div className="bg-purple-900/20 rounded-lg p-3 border border-purple-500/30">
                          <h4 className="text-white font-medium">Dynamic Programming</h4>
                          <p className="text-gray-400 text-sm">Memoization, Tabulation</p>
                        </div>
                        <div className="bg-purple-900/20 rounded-lg p-3 border border-purple-500/30">
                          <h4 className="text-white font-medium">Data Structures</h4>
                          <p className="text-gray-400 text-sm">Trees, Heaps, Linked Lists</p>
                        </div>
                        <div className="bg-purple-900/20 rounded-lg p-3 border border-purple-500/30">
                          <h4 className="text-white font-medium">Greedy Algorithms</h4>
                          <p className="text-gray-400 text-sm">Scheduling, Huffman</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Completing Quests</h3>
                  <p className="text-gray-300 mb-4">
                    When you select a quest, you'll be presented with a problem statement and requirements. You can
                    solve the problem in any programming language you prefer.
                  </p>

                  <div className="bg-black/60 rounded-lg p-6 border border-white/10 mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Quest Workflow</h4>
                    <ol className="list-decimal list-inside text-gray-300 space-y-2">
                      <li>Read the problem statement carefully</li>
                      <li>Write your solution in the code editor</li>
                      <li>Test your solution against example cases</li>
                      <li>Submit your solution for verification</li>
                      <li>Receive feedback and tokens upon successful completion</li>
                    </ol>
                  </div>

                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                    <h4 className="text-lg font-bold text-white mb-2">Pro Tip</h4>
                    <p className="text-gray-300">
                      You can earn bonus tokens by completing quests faster or by finding more efficient solutions than
                      the baseline.
                    </p>
                  </div>
                </div>
              </section>

              {/* Tokens Section */}
              <section id="tokens" className="mb-16">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6">Quest Tokens (QT)</h2>
                  <p className="text-gray-300 mb-6">
                    Quest Tokens (QT) are the in-app currency that powers the AlgoQuest ecosystem. These tokens are
                    built on the Algorand blockchain, providing real ownership and value.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Earning Tokens</h3>
                      <p className="text-gray-300 mb-4">There are multiple ways to earn Quest Tokens:</p>
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
                          <span className="text-gray-300">Completing daily quests</span>
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
                          <span className="text-gray-300">Participating in weekly challenges</span>
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
                          <span className="text-gray-300">Ranking high on leaderboards</span>
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
                            Contributing to the community (answering questions, creating study guides)
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
                          <span className="text-gray-300">Completing achievement milestones</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">Using Tokens</h3>
                      <p className="text-gray-300 mb-4">
                        Quest Tokens can be used for various purposes within the app:
                      </p>
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
                          <span className="text-gray-300">Purchasing NFT beasts in the marketplace</span>
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
                          <span className="text-gray-300">Minting new NFT beasts</span>
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
                          <span className="text-gray-300">Unlocking premium learning resources</span>
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
                          <span className="text-gray-300">Customizing your profile and beasts</span>
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
                          <span className="text-gray-300">Trading with other users</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30 mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Blockchain Integration</h4>
                    <p className="text-gray-300">
                      Quest Tokens are currently running on Algorand's testnet. This means they have real blockchain
                      properties but no monetary value yet. In the future, we plan to migrate to Algorand's mainnet,
                      which would give the tokens potential real-world value.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Token Management</h3>
                  <p className="text-gray-300 mb-4">
                    You can view your token balance and transaction history in the Tokens section of the app. This
                    includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                    <li>Current balance</li>
                    <li>Tokens earned (with source)</li>
                    <li>Tokens spent (with purpose)</li>
                    <li>Transaction history</li>
                  </ul>
                </div>
              </section>

              {/* Additional sections would continue here */}
              <section id="nft-beasts" className="mb-16">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6">NFT Beasts</h2>
                  <p className="text-gray-300 mb-6">
                    NFT Beasts are unique digital collectibles that represent your mastery of different algorithm types.
                    Each beast has its own attributes, abilities, and rarity level.
                  </p>

                  {/* Content continues... */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="relative group transition-transform duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                      <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                        <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Algo Dragon"
                            width={200}
                            height={200}
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                            Legendary
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-white">Algo Dragon</h3>
                        <p className="text-gray-400 text-sm">Master of complex algorithms</p>
                      </div>
                    </div>

                    <div className="relative group transition-transform duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                      <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                        <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Binary Wolf"
                            width={200}
                            height={200}
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-purple-600/90 text-white text-xs px-2 py-1 rounded-full">
                            Rare
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-white">Binary Wolf</h3>
                        <p className="text-gray-400 text-sm">Expert in search algorithms</p>
                      </div>
                    </div>

                    <div className="relative group transition-transform duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                      <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                        <div className="mb-3 relative aspect-square overflow-hidden rounded-xl">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Sort Squid"
                            width={200}
                            height={200}
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-purple-800/50 text-white text-xs px-2 py-1 rounded-full">
                            Common
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-white">Sort Squid</h3>
                        <p className="text-gray-400 text-sm">Specializes in sorting algorithms</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Beast Attributes</h3>
                  <p className="text-gray-300 mb-4">
                    Each NFT Beast comes with unique attributes that reflect different aspects of algorithm mastery:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-black/60 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-white mb-2">Rarity Levels</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-purple-800/50 mr-2"></div>
                          <span className="text-gray-300">Common (60% chance when minting)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-purple-700/70 mr-2"></div>
                          <span className="text-gray-300">Uncommon (25% chance when minting)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-purple-600/90 mr-2"></div>
                          <span className="text-gray-300">Rare (10% chance when minting)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                          <span className="text-gray-300">Legendary (5% chance when minting)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-black/60 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-white mb-2">Beast Types</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-red-500/50 mr-2"></div>
                          <span className="text-gray-300">Fire (Sorting Algorithms)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500/50 mr-2"></div>
                          <span className="text-gray-300">Water (Data Structures)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-green-500/50 mr-2"></div>
                          <span className="text-gray-300">Earth (Graph Algorithms)</span>
                        </li>
                        <li className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50 mr-2"></div>
                          <span className="text-gray-300">Air (Search Algorithms)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Collecting and Trading</h3>
                  <p className="text-gray-300 mb-6">There are two primary ways to acquire NFT Beasts:</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                      <h4 className="text-lg font-bold text-white mb-2">Minting</h4>
                      <p className="text-gray-300 mb-2">
                        Create a new, unique beast by spending Quest Tokens. The rarity is determined by chance, but
                        your algorithm mastery level can influence the odds.
                      </p>
                      <p className="text-gray-300">Cost: 500-1000 QT depending on your level</p>
                    </div>

                    <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                      <h4 className="text-lg font-bold text-white mb-2">Marketplace</h4>
                      <p className="text-gray-300 mb-2">
                        Purchase beasts that other users have listed for sale. Prices vary based on rarity, attributes,
                        and demand.
                      </p>
                      <p className="text-gray-300">Cost: Varies (typically 500-5000 QT)</p>
                    </div>
                  </div>

                  <div className="bg-black/60 p-6 rounded-lg border border-white/10">
                    <h4 className="text-lg font-bold text-white mb-2">NFT Ownership</h4>
                    <p className="text-gray-300 mb-4">Each beast is a true NFT on the Algorand blockchain, meaning:</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>You have verifiable ownership of your beasts</li>
                      <li>Each beast has a unique identifier on the blockchain</li>
                      <li>Ownership history is transparent and immutable</li>
                      <li>You can transfer beasts to other AlgoQuest users</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="marketplace" className="mb-16">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6">Marketplace</h2>
                  <p className="text-gray-300 mb-6">
                    The AlgoQuest Marketplace is where you can buy, sell, and trade NFT Beasts with other users. It's a
                    dynamic ecosystem powered by the Algorand blockchain.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-4">Browsing the Marketplace</h3>
                  <p className="text-gray-300 mb-6">
                    The marketplace offers several ways to find the perfect beast for your collection:
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-black/60 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-white mb-2">Search</h4>
                      <p className="text-gray-300">
                        Find specific beasts by name, type, or attribute using the search bar at the top of the
                        marketplace.
                      </p>
                    </div>

                    <div className="bg-black/60 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-white mb-2">Filters</h4>
                      <p className="text-gray-300">
                        Narrow down results by rarity, type, price range, and other attributes to find exactly what
                        you're looking for.
                      </p>
                    </div>

                    <div className="bg-black/60 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-white mb-2">Featured</h4>
                      <p className="text-gray-300">
                        Browse curated collections and featured beasts on the marketplace homepage.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Buying Beasts</h3>
                  <p className="text-gray-300 mb-4">When you find a beast you want to purchase:</p>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
                    <li>Click on the beast to view its details</li>
                    <li>Review its attributes, rarity, and price</li>
                    <li>Click "Buy Now" if you want to purchase at the listed price</li>
                    <li>Confirm the transaction</li>
                    <li>The beast will be transferred to your collection and the tokens to the seller</li>
                  </ol>

                  <h3 className="text-xl font-bold text-white mb-4">Selling Beasts</h3>
                  <p className="text-gray-300 mb-4">To sell a beast from your collection:</p>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
                    <li>Go to your profile and select the beast you want to sell</li>
                    <li>Click "Sell" and set your desired price in Quest Tokens</li>
                    <li>Choose the listing duration (1 day, 3 days, 7 days, or until canceled)</li>
                    <li>Confirm the listing</li>
                    <li>Your beast will appear in the marketplace for others to purchase</li>
                  </ol>

                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30 mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Marketplace Fees</h4>
                    <p className="text-gray-300">
                      There is a small fee of 5% on all marketplace transactions. These fees are used to maintain the
                      marketplace and fund future development.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Trading</h3>
                  <p className="text-gray-300 mb-4">
                    In addition to buying and selling, you can also trade directly with other users:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Find a user you want to trade with through the community or friends list</li>
                    <li>Send a trade request specifying which beasts you're offering and which you want in return</li>
                    <li>The other user can accept, reject, or counter your offer</li>
                    <li>Once both parties agree, the trade is executed on the blockchain</li>
                  </ul>
                </div>
              </section>

              <section id="wallet" className="mb-16">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6">Wallet Setup</h2>
                  <p className="text-gray-300 mb-6">
                    To fully participate in the AlgoQuest ecosystem, you'll need an Algorand wallet to store your tokens
                    and NFTs. Here's how to set it up.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-4">Integrated Wallet</h3>
                  <p className="text-gray-300 mb-4">
                    AlgoQuest comes with a built-in wallet that's automatically created when you sign up. This wallet:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                    <li>Stores your Quest Tokens (QT)</li>
                    <li>Holds your NFT Beasts</li>
                    <li>Manages transactions within the app</li>
                    <li>Provides a transaction history</li>
                  </ul>

                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30 mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Important</h4>
                    <p className="text-gray-300">
                      When you create an account, you'll receive a recovery phrase. Write this down and store it
                      securely. It's the only way to recover your wallet if you lose access to your account.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">External Wallet Connection</h3>
                  <p className="text-gray-300 mb-4">For advanced users, you can connect an external Algorand wallet:</p>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-6">
                    <li>Go to Settings Wallet</li>
                    <li>Select "Connect External Wallet"</li>
                    <li>Choose from supported wallets (Pera Wallet, MyAlgo, AlgoSigner)</li>
                    <li>Follow the prompts to connect your wallet</li>
                    <li>Once connected, you can transfer assets between your integrated and external wallets</li>
                  </ol>

                  <h3 className="text-xl font-bold text-white mb-4">Wallet Security</h3>
                  <p className="text-gray-300 mb-4">Protecting your wallet is crucial. Follow these best practices:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Never share your recovery phrase with anyone</li>
                    <li>Enable biometric authentication in the app settings</li>
                    <li>Set up a PIN code for transactions</li>
                    <li>Regularly check your transaction history for unauthorized activity</li>
                    <li>Be cautious of phishing attempts - AlgoQuest will never ask for your recovery phrase</li>
                  </ul>
                </div>
              </section>

              <section id="algorand" className="mb-16">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6">Algorand Integration</h2>
                  <p className="text-gray-300 mb-6">
                    AlgoQuest is built on the Algorand blockchain, providing a secure, fast, and environmentally
                    friendly foundation for our token economy and NFTs.
                  </p>

                  <h3 className="text-xl font-bold text-white mb-4">Why Algorand?</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-black/60 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-white mb-2">Speed</h4>
                      <p className="text-gray-300">
                        Algorand processes transactions in seconds, ensuring a smooth experience when buying, selling,
                        or trading NFTs.
                      </p>
                    </div>

                    <div className="bg-black/60 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-white mb-2">Low Fees</h4>
                      <p className="text-gray-300">
                        Transaction fees on Algorand are minimal, making microtransactions feasible within our
                        ecosystem.
                      </p>
                    </div>

                    <div className="bg-black/60 p-4 rounded-lg">
                      <h4 className="text-lg font-bold text-white mb-2">Sustainability</h4>
                      <p className="text-gray-300">
                        Algorand is carbon-negative, aligning with our commitment to environmental responsibility.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Current Status: Testnet</h3>
                  <p className="text-gray-300 mb-6">
                    AlgoQuest is currently running on Algorand's testnet, which means:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                    <li>All tokens and NFTs exist on a test blockchain, not the main Algorand network</li>
                    <li>Tokens have no real-world monetary value at this stage</li>
                    <li>
                      Transactions are real and recorded on the blockchain, but use test Algos instead of real ones
                    </li>
                    <li>This allows us to test and refine our systems before moving to mainnet</li>
                  </ul>

                  <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30 mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">Future Plans</h4>
                    <p className="text-gray-300">
                      We plan to migrate to Algorand's mainnet in the future, which would give Quest Tokens and NFT
                      Beasts potential real-world value. Users will be notified well in advance of this transition.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Technical Details</h3>
                  <p className="text-gray-300 mb-4">For those interested in the technical implementation:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Quest Tokens (QT) are implemented as Algorand Standard Assets (ASA)</li>
                    <li>NFT Beasts are ARC-69 compliant NFTs with metadata stored on-chain</li>
                    <li>Smart contracts govern marketplace transactions, ensuring security and transparency</li>
                    <li>All transactions can be verified on the Algorand TestNet Explorer</li>
                  </ul>
                </div>
              </section>

              <section id="faq" className="mb-16">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Is AlgoQuest free to use?</h3>
                      <p className="text-gray-300">
                        Yes, AlgoQuest is free to download and use. You can complete quests, earn tokens, and
                        participate in the community without any payment. Optional in-app purchases may be available in
                        the future.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Do I need to know about blockchain to use AlgoQuest?
                      </h3>
                      <p className="text-gray-300">
                        No, you don't need any blockchain knowledge to use AlgoQuest. We've designed the app to be
                        user-friendly regardless of your familiarity with blockchain technology.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">How many quests can I complete per day?</h3>
                      <p className="text-gray-300">
                        You can complete up to 5 standard quests per day. Special event quests may be available in
                        addition to this daily limit.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Can I transfer my NFT Beasts to other blockchain wallets?
                      </h3>
                      <p className="text-gray-300">
                        While on testnet, NFTs are confined to the AlgoQuest ecosystem. After our mainnet migration,
                        you'll be able to transfer your NFTs to any compatible Algorand wallet.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        What programming languages are supported for solving quests?
                      </h3>
                      <p className="text-gray-300">
                        AlgoQuest currently supports Python, JavaScript, Java, and C++ for solving algorithm challenges.
                        We plan to add more languages in future updates.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">What happens if I lose my recovery phrase?</h3>
                      <p className="text-gray-300">
                        If you lose your recovery phrase, you may lose access to your tokens and NFTs if you also lose
                        access to your account. This is why it's crucial to store your recovery phrase securely.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Can I use AlgoQuest if I'm not a university student?
                      </h3>
                      <p className="text-gray-300">
                        Yes, AlgoQuest is open to everyone interested in learning algorithms. However, some features
                        like university-specific leaderboards require a verified university email.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">How do I report a bug or suggest a feature?</h3>
                      <p className="text-gray-300">
                        You can report bugs or suggest features through the app (Settings Feedback) or by emailing
                        support@algoquest.io.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="text-center mb-20">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to start your quest?</h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
                  Download AlgoQuest today and join thousands of students improving their algorithm skills through
                  gamified learning.
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

