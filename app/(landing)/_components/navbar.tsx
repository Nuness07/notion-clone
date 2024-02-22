'use client'

import { useScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import { Logo } from './logo'
import { ModeToggle } from '@/components/mode-toggle'
import { useConvexAuth } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/spinner'
import Link from 'next/link'

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const scrolled = useScrollTop()
  return (
    <div
      className={cn(
        'fixed top-0 z-50 flex w-full items-center bg-background p-6 dark:bg-[#1f1f1f]',
        scrolled && 'border-b shadow-sm',
      )}
    >
      <Logo />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get NotionC Free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm">
              <Link href="/documents">Enter NotionC</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}
