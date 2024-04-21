export const Navbar = () => {
  // console.log("ukuran saat ini", window.innerWidth);
  return (
    <nav
      className="sticky top-0 z-[99] navbar bg-base-100 transition ease-in-out duration-1000 shadow-slate-600"
      id="nav"
    >
      <div className="flex-1">
        <a className="text-xl btn btn-ghost text-sem" href="#">
          Kantin <span className="-ms-[8px] text-yellow-600">Citarasa</span>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="hidden md:flex form-control">
          <input
            type="text"
            placeholder="Search"
            className="md:w-56 searchBar input input-bordered lg:w-auto"
            autoComplete="off"
          />
        </div>

        <div
          className="md:hidden dropdown dropdown-end dropdown-hover"
          id="searchButton"
        >
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="searchBar form-control mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-100">
            <input
              type="text"
              placeholder="Search"
              autoComplete="off"
              className="bg-opacity-50 searchBar input input-bordered w-50 md:w-auto"
            />
          </div>
        </div>

        <div className="dropdown dropdown-end dropdown-hover">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="dropdownNav mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="font-thin text-info-content">
                Subtotal: $999
              </span>
              <div className="card-actions">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() =>
                    document.getElementById("my_modal").showModal()
                  }
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-hover dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {/* <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div> */}
            <div className="avatar placeholder">
              <div className="w-10 rounded-full bg-base-content text-base-100">
                <span>HB</span>
              </div>
            </div>
          </div>
          <div tabIndex={0} className="">
            <ul className=" dropdownNav2 mt-3 z-[1] p-2 shadow dropdown-content bg-base-100  rounded-box w-52 menu menu-sm">
              <li>
                <a className="justify-between">
                  Profile
                  {/* <span className="badge">New</span> */}
                </a>
              </li>
              <li>
                <a className="justify-between">
                  History
                  <span className="badge badge-info">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
