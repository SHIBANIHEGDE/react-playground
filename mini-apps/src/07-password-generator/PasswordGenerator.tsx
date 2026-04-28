import { useCallback, useEffect, useState } from "react";
import styles from "./PasswordGenerator.module.css";
console.log("styles", styles);
interface Props {
  className: string;
}
const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 100;

const PasswordGenerator = ({ className }: Props) => {
  const [password, setPassword] = useState("");
  const [includeChars, setIncludeChars] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [length, setLength] = useState(MIN_PASSWORD_LENGTH);

  const copyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
  }, [password]);

  // const generatePasswords = useCallback(() => {
  //   const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   const numbers = "0123456789";
  //   const chars = "!@#$%^&*()_+[]{}|;:,.<>?";
  //   let allowedCharacters = letters;
  //   if (includeChars) {
  //     allowedCharacters += chars;
  //   }
  //   if (includeNumbers) {
  //     allowedCharacters += numbers;
  //   }
  //   let generatedPassword = "";
  //   for (let i = 0; i < length; i++) {
  //     const index = Math.floor(Math.random() * allowedCharacters.length);
  //     generatedPassword += allowedCharacters[index];
  //   }
  //   setPassword(generatedPassword);
  //   console.log("calling generate passwords");
  // }, [includeChars, includeNumbers, length]);

  // useEffect(() => {
  //   generatePasswords();
  // }, [generatePasswords]);

  useEffect(() => {
    const generatePasswords = () => {
      const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = "0123456789";
      const chars = "!@#$%^&*()_+[]{}|;:,.<>?";
      let allowedCharacters = letters;
      if (includeChars) {
        allowedCharacters += chars;
      }
      if (includeNumbers) {
        allowedCharacters += numbers;
      }
      let generatedPassword = "";
      for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * allowedCharacters.length);
        generatedPassword += allowedCharacters[index];
      }
      setPassword(generatedPassword);
      console.log("calling generate passwords");
    };
    generatePasswords();
  }, [includeChars, includeNumbers, length]);
  return (
    <div className={`${styles.container} ${className || ""}`}>
      <div className={styles["password-container"]}>
        <h1>Password generator</h1>
        <div
          style={{
            display: "flex",
            padding: "20px",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            value={password}
            readOnly
            autoFocus
            className={`${styles["password-input"]}`}
          />
          <button onClick={copyPassword}>Copy</button>
        </div>
        <div className={styles["filter-controls"]}>
          <div>
            <input
              type="checkbox"
              checked={includeChars}
              onChange={() => setIncludeChars((prev) => !prev)}
            ></input>
            <label>Include Chars</label>
          </div>

          <div>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((prev) => !prev)}
            ></input>
            <label>Include Numbers</label>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label>Length</label>
            <input
              type="range"
              value={length}
              onChange={(e) => setLength(+e.target.value)}
              max={MAX_PASSWORD_LENGTH}
              min={MIN_PASSWORD_LENGTH}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
