import { useState } from "react"
import styles from "../toggleSwitch/toggle.module.css"


const Toggle = () => {
  const [isToggle,setisToggle] = useState(false)
  const handleToggle=()=>{
   setisToggle ((prev)=>!prev)
  }
  return (
    <div className={styles.ToggleContainer}>
      <h1>Toggle</h1>
<button className={styles.Toggle} onClick={handleToggle}>
  {isToggle ? "ON" : "OFF"}
</button>
    </div>
  )
}

export default Toggle