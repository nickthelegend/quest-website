"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Nav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16 my-2">
          <div className="flex items-center gap-16">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logoname.png"
                alt="AlgoQuest Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features">
                <Button
                  variant="ghost"
                  className={
                    isActive("/features")
                      ? "text-white hover:text-white hover:bg-purple-900/30"
                      : "text-gray-300 hover:text-white hover:bg-purple-900/30"
                  }
                >
                  Features
                </Button>
              </Link>
              <Link href="/docs">
                <Button
                  variant="ghost"
                  className={
                    isActive("/docs")
                      ? "text-white hover:text-white hover:bg-purple-900/30"
                      : "text-gray-300 hover:text-white hover:bg-purple-900/30"
                  }
                >
                  Docs
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button
                  variant="ghost"
                  className={
                    isActive("/marketplace")
                      ? "text-white hover:text-white hover:bg-purple-900/30"
                      : "text-gray-300 hover:text-white hover:bg-purple-900/30"
                  }
                >
                  Marketplace
                </Button>
              </Link>
              <Link href="/changelog">
                <Button
                  variant="ghost"
                  className={
                    isActive("/changelog")
                      ? "text-white hover:text-white hover:bg-purple-900/30"
                      : "text-gray-300 hover:text-white hover:bg-purple-900/30"
                  }
                >
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
  )
}
