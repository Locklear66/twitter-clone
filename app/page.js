import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'

export default function Home() {
  return (
    <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
      <Sidebar />
      <Feed />
      {/* Widget */}

      {/* Modal */}
    </main>
  )
}
