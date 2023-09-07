function Header(params) {
  return(
    <div className="bg-sky-300 flex justify-around h-20 text-center p-6">
      <div className=""><a href="">Toko Ku</a></div>
      <div className=""> <input type="search" name="" id="" className="w-[30rem] h-[1.9rem] rounded-lg"/></div>
      <div className=" flex flex-nowrap justify-around gap-3" >
        <div className="">about</div>
        <div className="">acount</div>
        <div className="">help</div>
      </div>
      <div className="profil"><img src="" alt="Profil" className="bg-white w-[4rem] h-[4rem] pb-[1rem] rounded-full"/></div>
    </div>
  ) 
}

export default Header;
