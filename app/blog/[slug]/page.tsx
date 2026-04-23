import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { posts, getPost } from '../posts'

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image }],
    },
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <>
      <article className="post-wrap">

        <div className="post-hero">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="post-hero-overlay" />
          <div className="post-hero-inner">
            <Link href="/blog" className="post-back">← Back to Blog</Link>
            <div className="blog-card-meta" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
              <span className="blog-category">{post.category}</span>
              <span className="blog-dot">·</span>
              <span className="blog-read">{post.readTime}</span>
              <span className="blog-dot">·</span>
              <span className="blog-read">{post.date}</span>
            </div>
            <h1 className="post-title">{post.title}</h1>
          </div>
        </div>

        <div className="post-body">
          <p className="post-lead">{post.description}</p>
          {post.sections.map((section, i) => (
            <div key={i} className="post-section">
              {section.heading && <h2 className="post-heading">{section.heading}</h2>}
              {section.body.map((para, j) => (
                <p key={j} className="post-para">{para}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="post-cta-bar">
          <div className="post-cta-inner">
            <div className="post-cta-title">Ready to Book a Drone Shoot?</div>
            <p className="post-cta-desc">We respond within 24 hours with availability and a free quote.</p>
            <Link href="/book" className="btn-primary">Get a Free Quote</Link>
          </div>
        </div>

      </article>

      <div className="post-more-wrap">
        <div className="section-inner">
          <div className="section-eyebrow"><div className="eyebrow-line" />More Articles</div>
          <div className="blog-grid blog-grid-sm">
            {posts.filter(p => p.slug !== post.slug).map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <div className="blog-card-img">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-category">{p.category}</span>
                    <span className="blog-dot">·</span>
                    <span className="blog-read">{p.readTime}</span>
                  </div>
                  <h2 className="blog-card-title">{p.title}</h2>
                  <div className="blog-card-cta">Read Article <span>→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
