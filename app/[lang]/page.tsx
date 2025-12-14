import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '@/getDictionaries'
import Image from 'next/image'
 
export default async function Home({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
 
  if (!hasLocale(lang)) notFound()
 
  const dict = await getDictionary(lang)
  return (
    <>
      <Image src="/vercel.svg" alt="Logo" width={200} height={200} />
      <button>{dict.products.cart}</button>
    </>
  )
}