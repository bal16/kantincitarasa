export const Card = () => {

  return (
    <div className="w-full h-full max-w-xs shadow-xl md:w-full xl:w-full card card-compact lg:card-normal bg-base-100">
      <div className="relative rounded-t-sm">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="absolute inset-0 flex items-end justify-end gap-1 mb-2 me-1">
          <div className="badge badge-primary ">Fashion</div>
          <div className="badge badge-ghost ">Products</div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          Sepatu Super
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="flex justify-between pt-4">
          <div className="card-actions">
            <button className="btn btn-primary">Add to Chart</button>
            <div
              className="dropdown tooltip tooltip-right"
              data-tip="other option?"
            >
              <div tabIndex={0} role="button" className="btn" aria-label="otherOption"> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 512"
                  // stroke="currentColor"
                  width={5}
                >
                  <path
                    fill="currentColor"
                    d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a
                    onClick={() =>
                      document.getElementById("my_modal").showModal()
                    }
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a href="#">Remove</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
