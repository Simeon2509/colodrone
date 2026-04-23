import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { posts } from './posts'

export const metadata: Metadata = {
  title: 'Blog — ColoDrone | Drone Photography Tips & Resources',
  description: 'Drone photography tips, real estate aerial guides, and Colorado flying resources from the ColoDrone team.',
}

export default function BlogPage() {
  return (
    <>
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <div className="eyebrow-line" />Resources
          </div>
          <h1 className="blog-hero-title">The ColoDrone Blog</h1>
          <p className="blog-hero-desc">
            Drone photography tips, aerial real estate guides, and Colorado flying resources.
          </p>
        </div>
      </section>

      <section className="blog-list">
        <div className="section-inner">
          <div className="blog-grid">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-img">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-dot">·</span>
                    <span className="blog-read">{post.readTime}</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-desc">{post.description}</p>
                  <div className="blog-card-cta">Read Article <span>→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
