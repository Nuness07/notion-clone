'use client'

import { useEffect, useState } from 'react'
import { SettingsModal } from '../modals/settings-modal'

export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false)

  useEffect(() => {
    setIsmounted(true)
  }, [])

  if (!isMounted) return null
  return (
    <>
      <SettingsModal />
    </>
  )
}
