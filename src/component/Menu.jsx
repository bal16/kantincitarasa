import { Card } from "./Card";

const Paginator = () => {
  return (
    <div className="px-5 text-center">
      <div className="shadow-md join bg-bas">
        <button className="join-item btn bg-base-100">«</button>
        <button className="join-item btn bg-base-100">Page 1</button>
        <button className="join-item btn bg-base-100">»</button>
      </div>
    </div>
  );
};

export const Menu = () => {
  const menu = []
  for (let i = 0; i < 6; i++) {
    menu.push(<Card key={i} />)
  }
  return (
    <main className="pb-20 bg-base-200">
      <div className="container grid max-w-screen-sm grid-cols-1 gap-4 p-5 mx-auto sm:max-w-screen-sm lg:max-w-screen-md pt-7 sm:grid-cols-2 xl:grid-cols-3 justify-items-center columns-1 lg:columns-3 xl:max-w-screen-lg md:max-w-screen-sm"> 
        {menu}
        
      </div>
      <Paginator />
    </main>
  );
};
