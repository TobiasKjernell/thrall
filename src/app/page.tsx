import Navbar from '@/components/navbar'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '100px', textAlign: 'center' }}>
        <h2>Welcome to Thrall</h2>
        <p>This is the dark gothic game world...</p>
      </main>
    </>
  )
}
