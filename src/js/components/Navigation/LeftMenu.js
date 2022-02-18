import React, {useEffect, useState} from 'react';
import LeftMenuBlock from "./LeftMenuBlock";
import LeftMenuBtn from "./LeftMenuBtn";

const LeftMenu = () => {

    const [isChecked, setIsChecked] = useState(false)
    const [menuAppear, setMenuAppear] = useState({animationName: ''})
    const [liAppear, setLiAppear] = useState('')

    useEffect(() => {
        if (isChecked) {
            setMenuAppear({animationName: 'submenu-cover-appear'})
            setLiAppear('sub-menu-appear')
        } else {
            setMenuAppear({animationName: 'submenu-cover-hide'})
            setLiAppear('sub-menu-hide')
        }
    }, [isChecked])

    const animationBtn = (deg) => {
        if (isChecked) {
            return {
                transform: `rotate(${deg}deg)`,
                position: 'absolute'
            }
        }
        return {
            transform: `rotate(0deg)`,
            position: 'relative'
        }
    }


    const showHideLeftMenu = () => {
        (isChecked) ? setIsChecked(false) : setIsChecked(true)
    }

    return (
        <div className='menu-block-wrapper'>
            <LeftMenuBtn animationBtn={animationBtn} operatorMenu={showHideLeftMenu}/>
            <LeftMenuBlock menuAppear={menuAppear} liAppear={liAppear}/>
        </div>
    )

}

export default LeftMenu

