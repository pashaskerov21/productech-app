import React from 'react'

function Header({money, total}) {
  return (
    <header>
        <div className="container">
            <span className='logo-span'>producTech</span>
            <div className='balance'>Cari Balans: <span>{(money - total).toFixed(2)} ₼</span></div>
        </div>
    </header>
  )
}

export default Header
