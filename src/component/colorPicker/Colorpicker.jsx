// import { useState } from "react";
// import styles from "../colorPicker/colorPicker.module.css";

// const Colorpicker = () => {
//   const [selectedColor, setSelectedColor] = useState("white");
//   const handleColorChange = (event) => {
//     setSelectedColor(event.target.value);
//   };
//   return (
//     <div>
//       <h1>color Picker</h1>
//       <div className={styles.appContainer}>
//         <select
//           name="selectedColor"
//           id=""
//           value={selectedColor}
//           onChange={handleColorChange}
//         ></select>
//         <option className={styles.white} value="white">
//           white
//         </option>
//         <option className={styles.red} value="red">
//           red
//         </option>
//         <option className={styles.blue} value="blue">
//           blue
//         </option>
//         <option className={styles.green} value="green">
//           green
//         </option>
//         <option className={styles.yellow} value="yellow">
//           yellow
//         </option>
//         <option className={styles.black} value="black">
//           black
//         </option>
//         <option className={styles.purple} value="purple">
//           purple
//         </option>
//         <option className={styles.orange} value="orange">
//           orange
//         </option>
//         <option className={styles.pink} value="pink">
//           pink
//         </option>
//         <option className={styles.gray} value="gray">
//           gray
//         </option>
//         <p>
//           {" "}
//           <strong>{selectedColor}</strong> {selectedColor}{" "}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Colorpicker;
import { useState } from "react";
import styles from "../colorPicker/colorPicker.module.css";

const Colorpicker = () => {
  const [selectedColor, setSelectedColor] = useState("white");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <h1>Color Picker</h1>

      <div className={`${styles.appContainer} ${styles[selectedColor]}`}>
        <select
          name="selectedColor"
          onChange={handleColorChange}
          value={selectedColor}
        >
          <option value="">Select a color</option>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="black">Black</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
          <option value="pink">Pink</option>
          <option value="gray">Gray</option>
        </select>

        <p>
          <strong>Selected Color:</strong> {selectedColor}
        </p>
      </div>
    </div>
  );
};

export default Colorpicker;

