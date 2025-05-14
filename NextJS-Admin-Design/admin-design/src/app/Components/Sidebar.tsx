function Sidebar() {
  return (
    <>
      <div className="bg-white min-h-screen py-8 shadow-sm">
        <div className="itemsArea">
          <div className="flex  items-center  py-[10px] px-[15px]">
            <div className="w-10 grow-0">
              <div className="bg-[#4FA3FE] rounded-[50px] w-[30px] h-[30px]"></div>
            </div>
            <div className="grow">
              <div className="menuItem">Home</div>
            </div>
          </div>

          <div className="flex items-center bg-[#DBEAFF] py-[10px] px-[15px]">
            <div className="w-10 grow-0">
              <div className="bg-[#4FA3FE] rounded-[50px] w-[30px] h-[30px]"></div>
            </div>
            <div className="grow">
              <div className="menuItem font-bold">Tokens</div>
            </div>
          </div>

          <div className="flex  items-center  py-[10px] px-[15px]">
            <div className="w-10 grow-0">
              <div className="bg-[#4FA3FE] rounded-[50px] w-[30px] h-[30px]"></div>
            </div>
            <div className="grow">
              <div className="menuItem">Voting</div>
            </div>
          </div>

          <div className="flex  items-center  py-[10px] px-[15px]">
            <div className="w-10 grow-0">
              <div className="bg-[#4FA3FE] rounded-[50px] w-[30px] h-[30px]"></div>
            </div>
            <div className="grow">
              <div className="menuItem">Finance</div>
            </div>
          </div>

          <div className="flex  items-center  py-[10px] px-[15px]">
            <div className="w-10 grow-0">
              <div className="bg-[#4FA3FE] rounded-[50px] w-[30px] h-[30px]"></div>
            </div>
            <div className="grow">
              <div className="menuItem">Agent</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Sidebar;
