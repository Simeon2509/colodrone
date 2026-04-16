'use client'
import { useEffect, useRef } from 'react'

export default function ScrollDrone() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    const hint = hintRef.current
    if (!video || !canvas || !wrap || !hint) return

    const ctx = canvas.getContext('2d', { willReadFrequently: true })!

    video.preload = 'auto'
    video.load()

    // Set canvas resolution to match video once loaded
    video.addEventListener('loadedmetadata', () => {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
    }, { once: true })

    // After each seek, draw the frame and strip white pixels → true transparency
    const drawFrame = () => {
      if (!video.videoWidth) return
      canvas.width = canvas.width // fast clear
      ctx.drawImage(video, 0, 0)
      const img = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const d = img.data
      for (let i = 0; i < d.length; i += 4) {
        // Any pixel close to white becomes fully transparent
        if (d[i] > 230 && d[i + 1] > 230 && d[i + 2] > 230) {
          d[i + 3] = 0
        }
      }
      ctx.putImageData(img, 0, 0)
    }

    video.addEventListener('seeked', drawFrame)

    let raf: number
    const update = () => {
      const rect = wrap.getBoundingClientRect()
      const scrollable = wrap.offsetHeight - window.innerHeight
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable))
      if (video.duration) video.currentTime = progress * video.duration
      // Hide hint once user has scrolled meaningfully through the animation
      hint.classList.toggle('hidden', progress > 0.75)
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
    <div ref={wrapRef} className="scroll-drone-wrap">
      <div className="scroll-drone-sticky">
        {/* Hidden video — only used as a pixel source */}
        <video
          ref={videoRef}
          src="/scroll_drone.mp4"
          muted
          playsInline
          style={{ display: 'none' }}
        />
        {/* Canvas has transparent bg — drone floats on whatever is behind it */}
        <canvas ref={canvasRef} className="scroll-drone-canvas" />
        {/* Scroll nudge — fades out once the user is deep into the animation */}
        <div ref={hintRef} className="scroll-drone-hint">
          <span className="scroll-drone-hint-label">Scroll</span>
          <div className="scroll-drone-hint-chevron" />
        </div>
      </div>
    </div>
  )
}
