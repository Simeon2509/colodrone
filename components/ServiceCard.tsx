'use client'
import { useRef, useState } from 'react'
import Link from 'next/link'

interface Props {
  index: number
  num: string
  name: string
  desc: string
  tags: string[]
  href: string
  video: string
  poster: string
  from: string
}

export default function ServiceCard({ index, num, name, desc, tags, href, video, poster, from }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hovered, setHovered] = useState(false)

  const handleEnter = () => {
    setHovered(true)
    videoRef.current?.play().catch(() => {})
  }
  const handleLeave = () => {
    setHovered(false)
    const v = videoRef.current
    if (v) { v.pause(); v.currentTime = 0 }
  }

  return (
    <Link
      href={href}
      className={`svc-card${index % 2 === 1 ? ' svc-card-alt' : ''}${hovered ? ' svc-card-on' : ''}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="svc-card-inner">
        <div className="svc-card-meta">
          <div className="svc-num">{num}</div>
          <div className="svc-name">{name}</div>
          <div className="svc-desc">{desc}</div>
          <div className="service-tags">
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="svc-from">From {from}</div>
        </div>
        <div className="svc-vid-wrap">
          <img src={poster} alt={name} className="svc-vid svc-poster" />
          <video
            ref={videoRef}
            src={video}
            poster={poster}
            muted
            loop
            playsInline
            preload="none"
            className="svc-vid svc-video"
          />
        </div>
      </div>
    </Link>
  )
}
