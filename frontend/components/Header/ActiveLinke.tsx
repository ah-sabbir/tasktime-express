import { useRouter } from 'next/router'
import React from 'react'
interface Props {
   href: any;
}
const ActiveLink: React.FC<Props> =({ children, href }) =>{
  const router = useRouter()
  const style = {
    
    color: router.asPath === href ? 'block py-1 md:py-3 pl-1 align-middle text-blue-400 no-underline hover:text-gray-100 border-b-2 border-blue-400 hover:border-blue-400' : 'block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-green-400',
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={style.color}>
      {children}
    </a>
  )
}

export default ActiveLink;