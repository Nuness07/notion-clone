'use client'

import { Spinner } from '@/components/spinner'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Your Ideas, Documents & Plans. Unified. Welcome to{' '}
        <span className="underline">NotionC</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl ">
        NotionC is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter NotionC
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get NotionC Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </SignInButton>
      )}
      {isLoading && (
        <div className="flex w-full items-center justify-center">
          <Spinner size={'lg'} />
        </div>
      )}
    </div>
  )
}
