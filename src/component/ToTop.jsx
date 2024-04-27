// window.onscroll.transparentNav()

export const ToTop = () => {
  return (
    <a aria-label="toTop-toggle"
      href="#"
      id="ToTopButton"
      className="hover:animate-none animate-[bounce_2s_ease-in-out_infinite] border-none backdrop-blur-lg bg-opacity-50 transition ease-in-out duration-500 opacity-0 fixed rounded-full btn btn-primary right-5 z-[99] bottom-20 shadow-lg py-7 tooltip tooltip-left"
      data-tip="apparation!"
    >
      <svg
        className="-mt-3 transition-all duration-700 ease-in-out fill-current delay-0"
        id="toTopSVG"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 448 512"
        aria-label="toTop"
      >
        <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
      </svg>
    </a>
  );
};
