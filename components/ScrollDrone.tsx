'use client'
import { useEffect, useRef } from 'react'

export default function ScrollDrone() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const wrap = wrapRef.current
    if (!video || !wrap) return

    // Preload all frames so seeking is instant
    video.preload = 'auto'
    video.load()

    let raf: number

    const update = () => {
      const rect = wrap.getBoundingClientRect()
      const scrollable = wrap.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / scrollable))

      if (video.duration) {
        video.currentTime = progress * video.duration
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update() // set initial frame on mount

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={wrapRef} className="scroll-drone-wrap">
      <div className="scroll-drone-sticky">
        <video
          ref={videoRef}
          src="/scroll_drone.mp4"
          muted
          playsInline
          className="scroll-drone-video"
        />
      </div>
    </div>
  )
}
