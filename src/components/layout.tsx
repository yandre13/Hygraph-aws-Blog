import Header from '@/components/Header'

export default function Layout({
  preview,
  children,
}: {
  preview: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <Header preview={preview} />
      <main className="container">{children}</main>
      {/* <Footer /> */}
    </>
  )
}
