import Modal from '@/Components/Modal'
import './globals.css'





export const metadata = {
  title: 'trello clone',
  description: 'Generated by k kaposi',
  
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#f5f6f8]'>
        
        
        
        {children}
        <Modal/>
        
        </body>
    </html>
  )
  
}
