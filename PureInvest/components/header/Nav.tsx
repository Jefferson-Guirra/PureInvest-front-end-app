import Link from 'next/link'
export const Nav = () => {
  return (
    <nav className="flex items-center bg-blue-500 justify-between p-4">
      <div>
        <p>logo</p>
      </div>
  
      <div className='flex gap-5'> 
        <Link href="*" className='group relative bg-blue-700 overflow-hidden'> 
          Nossos Produtos
          <span className='absolute h-px -translate-x-full duration-300 w-full block bg-red-300 bottom-0 group-hover:translate-x-0'></span>
        </Link>
        <Link href="*"> Custos</Link>
        <Link href="*"> Tire suas dúvidas</Link>
      </div>
</nav>
  )
}
