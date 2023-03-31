import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header({ preview }: { preview: boolean }) {
  const [scrollPosition, setScrollPosition] = useState(0)
  // if user scrolls down, add class to header
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={clsx('sticky top-0 z-10', {
        'shadow-md': scrollPosition > 0,
      })}
    >
      {preview && (
        <div className="bg-gray-800 px-2 py-3 text-center text-gray-300">
          <span>
            Now you are in preview mode.{' '}
            <Link href="/api/exit-preview" className="text-[#FF0080] underline">
              click here to exit preview mode
            </Link>
          </span>
        </div>
      )}
      <section className="bg-base-100 bg-opacity-40 backdrop-blur-md">
        <div className="container navbar">
          <div className="flex-1">
            <Link href="/" className="btn-ghost btn text-xl normal-case">
              {'<'}daisyUI {'/>'}
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/posts">Blog</Link>
              </li>
              <li tabIndex={0}>
                <a>
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="bg-base-100 p-2">
                  <li>
                    <p>Submenu 1</p>
                  </li>
                  <li>
                    <p>Submenu 2</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  )
}
