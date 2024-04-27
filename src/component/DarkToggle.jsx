import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandSparkles} from "@fortawesome/free-solid-svg-icons"
import { faMoon, faSun} from "@fortawesome/free-regular-svg-icons"

const isChecked = () => {
  const a = localStorage.theme == "halloween" ? "dark" : "";

  return a == "dark";
};

export const DarkToggle = () => {
  const [dark, setDark] = useState(isChecked());
  const [auto, setAuto] = useState(true);
  // const  [dark, setDark ] = useState(isChecked());

  function handleChange(e) {
    // setLiked(e.target.checked);
    setDark(e.target.checked);
    setAuto(false);
  }

  return (
    <>
      <label
        htmlFor="tombolDark"
        className=" backdrop-blur-lg bg-opacity-50 swap swap-rotate fixed rounded-full btn right-5 z-[99] bottom-4 shadow-sm p-7 bg-base-300  duration-1000 border-none tooltip tooltip-left shadow-base-content"
        data-tip={!localStorage.theme&&auto ? "revelio!" : dark ? "lumos!" : "nox!"} 
      >
        {/* this hidden checkbox controls the state */}

        <input
          onChange={handleChange}
          defaultChecked={isChecked()}
          data-toggle-theme="halloween,bumblebee"
          data-act-class="ACTIVECLASS"
          type="checkbox"
          className="theme-controller"
          id="tombolDark"
        />

        {/* half icon */}
        {!localStorage.theme&&auto ? (
        <>
          <FontAwesomeIcon icon={faWandSparkles} className="absolute h-6 fill-current end-4 bottom-4 swap-on" />
          <FontAwesomeIcon icon={faWandSparkles} className="absolute h-6 fill-current end-4 bottom-4 swap-off" />
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faMoon} className="absolute h-6 fill-current swap-on end-5 bottom-4" />
            <FontAwesomeIcon icon={faSun}  className="absolute h-6 fill-current swap-off end-4 bottom-4"/>
          </>
        )}
      </label>
    </>
  );
};
