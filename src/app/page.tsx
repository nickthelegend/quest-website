import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
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
                  <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-purple-900/30">
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

      {/* Hero Section */}
      <div className="relative pt-32 pb-0 sm:pt-40">
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-purple-800/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-600/30 via-purple-900/20 to-transparent" />
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_0%,_#3b0764,_#0c0a09_25%,_#0c0a09_75%,_#3b0764_100%)] opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center rounded-full px-4 py-1 mb-8 
          bg-purple-900/50 border border-purple-700/50 
          shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)]"
          >
            <div className="w-2 h-2 rounded-full bg-purple-400 mr-2" />
            <span className="text-sm text-purple-300">Currently Running on Algorand's testnet</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Complete quests,
            <br />
            earn <span className="text-purple-400">rewards.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-8">
            AlgoQuest gamifies the learning experience for university students with daily quests, NFT beasts, and
            blockchain rewards on Algorand.
          </p>

          <Link href="/download">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 mb-16 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all"
            >
              Download Now
            </Button>
          </Link>

          {/* App Preview */}
          <div className="relative max-w-5xl mx-auto mt-20 mb-0">
            <div className="relative rounded-lg overflow-hidden">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-purple-600/40 blur-[50px]" />
              <div className="absolute inset-0 bg-purple-500/20 blur-[100px]" />
              <Image
                src="/placeholder.svg?height=675&width=1200"
                alt="AlgoQuest Mobile App"
                width={1200}
                height={675}
                className="relative rounded-lg border border-white/10 shadow-2xl"
              />
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="relative mt-0 py-32">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/30 via-purple-900/20 to-transparent rounded-3xl" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 md:grid-cols-3">
                {/* Testimonial 1 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="James Wilson"
                          width={96}
                          height={96}
                          className="rounded-2xl"
                        />
                      </div>
                      <blockquote className="flex-1 mb-6">
                        <p className="text-lg font-medium text-white">
                          "AlgoQuest made studying for my CS courses fun again. I complete quests every morning and my
                          collection of NFT beasts is growing!"
                        </p>
                      </blockquote>
                      <footer>
                        <div className="font-medium text-white">James Wilson</div>
                        <div className="text-sm text-gray-400">Computer Science Student @ MIT</div>
                      </footer>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="Maya Patel"
                          width={96}
                          height={96}
                          className="rounded-2xl"
                        />
                      </div>
                      <blockquote className="flex-1 mb-6">
                        <p className="text-lg font-medium text-white">
                          "The quest tokens are a great incentive. I've learned more about algorithms in a month with
                          AlgoQuest than in a whole semester."
                        </p>
                      </blockquote>
                      <footer>
                        <div className="font-medium text-white">Maya Patel</div>
                        <div className="text-sm text-gray-400">Engineering Student @ Stanford</div>
                      </footer>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="Lucas Chen"
                          width={96}
                          height={96}
                          className="rounded-2xl"
                        />
                      </div>
                      <blockquote className="flex-1 mb-6">
                        <p className="text-lg font-medium text-white">
                          "The marketplace is awesome! Trading beasts with other students has created a whole community
                          around learning algorithms."
                        </p>
                      </blockquote>
                      <footer>
                        <div className="font-medium text-white">Lucas Chen</div>
                        <div className="text-sm text-gray-400">Data Science Major @ Berkeley</div>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketplace Preview */}
          <div className="relative mt-0 bg-gradient-to-b from-purple-900/20 via-purple-950/30 to-transparent py-32">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">Marketplace</h2>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                Collect, trade, and mint unique NFT beasts with your quest tokens. Each beast comes with special
                attributes and powers.
              </p>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
                {/* Beast Card 1 */}
                <div className="relative group transition-transform duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                    <div className="mb-4 relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Algo Dragon"
                        width={300}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">Algo Dragon</h3>
                    <p className="text-gray-400 mb-4">Legendary Beast</p>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400 font-bold">1500 QT</span>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-500">
                        View
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Beast Card 2 */}
                <div className="relative group transition-transform duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                    <div className="mb-4 relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Recursion Fox"
                        width={300}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">Recursion Fox</h3>
                    <p className="text-gray-400 mb-4">Uncommon Beast</p>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400 font-bold">800 QT</span>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-500">
                        View
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Beast Card 3 */}
                <div className="relative group transition-transform duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-purple-600/20 blur-xl group-hover:bg-purple-600/30 transition-colors duration-300" />
                  <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                    <div className="mb-4 relative aspect-square overflow-hidden rounded-xl">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Binary Wolf"
                        width={300}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">Binary Wolf</h3>
                    <p className="text-gray-400 mb-4">Rare Beast</p>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400 font-bold">1200 QT</span>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-500">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/marketplace">
                <Button className="bg-purple-600 hover:bg-purple-500 px-8 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative mt-0 py-32 pb-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-600/30 via-purple-900/20 to-transparent rounded-3xl" />
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">Join the quest.</h2>
              <p className="text-lg text-gray-400 mb-12">
                Start earning tokens, collecting beasts, and making learning a daily adventure.
              </p>

              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 shadow-[0_0_50px_-12px_rgba(147,51,234,0.2)]">
                <form className="grid gap-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="grid gap-2">
                      <label className="text-sm text-gray-400">First name</label>
                      <input
                        type="text"
                        placeholder="Jane"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
            focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm text-gray-400">Last name</label>
                      <input
                        type="text"
                        placeholder="Smith"
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
            focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label className="text-sm text-gray-400">Email</label>
                    <input
                      type="email"
                      placeholder="jane@university.edu"
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
            focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label className="text-sm text-gray-400">University</label>
                    <input
                      type="text"
                      placeholder="Stanford University"
                      className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
            focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <Button className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto sm:justify-self-center px-8 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    Get Early Access
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="relative mt-0 border-t border-white/10 bg-gradient-to-b from-purple-900/10 to-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <nav className="py-8">
                {/* Primary Navigation */}
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
                  <li>
                    <Link href="/download" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Download
                    </Link>
                  </li>
                </ul>

                {/* Secondary Navigation */}
                <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <div className="text-sm text-gray-400">© {new Date().getFullYear()} AlgoQuest</div>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

