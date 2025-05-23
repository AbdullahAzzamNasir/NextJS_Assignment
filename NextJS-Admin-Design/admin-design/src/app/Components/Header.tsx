import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell, faGear } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <div className="mainHeader bg-white px-[20px] py-[10px] shadow-sm">
        <div className="flex items-center">
          <div className="grow">
            <div className="flex w-[100%] items-center">
              <div className="w-10 grow-0">
                <div className="bg-[#4FA3FE] rounded-[50px] w-[30px] h-[30px] flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser} className="fa-fw text-white" />
                </div>
              </div>
              <div className="grow">
                <div className="userEmail font-semibold">abdullahazzamnasir@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="grow-0">
            <div className="flex items-center bg-[#F4E7FF] rounded-[8px] py-[5px] px-[15px]">
                <div className="size-[30px] rounded-[8px] bg-[#CF5BE3] colorArea">
                </div>
                 <div className="rinkebyConnect ml-[10px]">
                        <p className="m-0 font-bold text-black">Abdullah Butt</p>
                        <p className="m-0 font-bold text-[#B0B2B6] text-[14px]">Connected to Rinkeby</p>
                </div>
            </div>
          </div>
          <div className="grow-0 w-10 ml-[10px]">
            <div className=" rounded-[50px] w-10 h-10 flex items-center justify-center hover:bg-[#f9fafc] cursor-pointer">
              <FontAwesomeIcon icon={faGear} className="fa-fw text-[#B0B2B6] text-[24px]" />
            </div>
          </div>
          <div className="grow-0">
            <div className="rounded-[50px] w-10 h-10 flex items-center justify-center hover:bg-[#f9fafc] cursor-pointer">
              <FontAwesomeIcon icon={faBell} className="fa-fw text-[#B0B2B6] text-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
