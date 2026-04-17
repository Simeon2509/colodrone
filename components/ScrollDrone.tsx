'use client'
import { useEffect, useRef } from 'react'

export default function ScrollDrone() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!video || !canvas || !wrap) return

    const ctx = canvas.getContext('2d', { willReadFrequently: true })!

    video.preload = 'auto'
    video.load()

    video.addEventListener('loadedmetadata', () => {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
    }, { once: true })

    const drawFrame = () => {
      if (!video.videoWidth) return
      canvas.width = canvas.width
      ctx.drawImage(video, 0, 0)
      const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const d = img.data
      for (let i = 0; i < d.length; i += 4) {
        if (d[i] > 230 && d[i + 1] > 230 && d[i + 2] > 230) d[i + 3] = 0
      }
      ctx.putImageData(img, 0, 0)
    }

    video.addEventListener('seeked', drawFrame)

    let raf: number
    const update = () => {
      const first = document.getElementById('services')
      const last  = document.getElementById('coverage')
      if (!first || !last) return

      const scrollY = window.scrollY
      const vh      = window.innerHeight
      const start   = first.getBoundingClientRect().top  + scrollY
      const end     = last.getBoundingClientRect().bottom + scrollY

      // Visibility: fade in when top of #services nears viewport, fade out when #coverage is past
      const visible = scrollY + vh > start + 80 && scrollY < end - 80
      wrap.style.opacity = visible ? '1' : '0'

      // Progress through the entire zone (viewport center vs zone)
      const progress = Math.max(0, Math.min(1, (scrollY + vh / 2 - start) / (end - start)))
      if (video.duration) video.currentTime = progress * video.duration
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
      video.removeEventListener('seeked', drawFrame)
    }
  }, [])

  return (
    <div ref={wrapRef} className="scroll-drone-fixed">
      <video ref={videoRef} src="/scroll_drone.mp4" muted playsInline style={{ display: 'none' }} />
      <canvas ref={canvasRef} className="scroll-drone-canvas" />
    </div>
  )
}
