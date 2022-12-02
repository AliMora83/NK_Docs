import React from 'react'
import BannerDoc from './bannerDoc'
import Started from './start'

type Props = {}

export default function Start({}: Props) {
  return (
    <div>
        <BannerDoc />
        <Started />
    </div>
  )
}