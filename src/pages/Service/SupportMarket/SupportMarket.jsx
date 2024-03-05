import React from 'react'
import cl from './SupportMarket.module.scss'

function SupportMarket() {
  return (
    <div className={cl.wrap}>
        <div className={cl.start}>
            <img className={cl.startIMG} src="https://static.tildacdn.com/tild3465-6337-4762-a431-343532333136/SERVICE_w_1.svg" alt="" />
            <p className={cl.startP}>СОПРОВОЖДЕНИЕ <br /> НА МАРКЕТПЛЕЙСАХ</p>
            <img className={cl.startLineImg} src="https://static.tildacdn.com/tild3934-3730-4563-b639-303666343135/line1.svg" alt="line" />
        </div>
    </div>
  )
}

export default SupportMarket