import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { supabase } from "../supabaseClient";
import profile from "../Assets/pict2.jpg";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // const handleLogOut = async () => {
  //   const { error } = await supabase.auth.signOut();
  //   console.log('success');
  // };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error signing out:', error.message)
    else console.log('Signed out successfully')
  }

  return (
    <div className="w-full h-24 px-8 flex justify-between items-center">
      <div className="font-bold font-poppins text-dark-blue lg:text-3xl sm:text-lg">
        Hello, Maccaroni El Matadore
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col font-bold font-poppins text-right lg:text-base sm:text-xs lg:mt-0 sm:mt-[10px]">
          <p>Magang</p>
          <p>Bootcamp</p>
        </div>

        <button
          className="relative rounded-full w-20 h-14 mx-2 cursor-pointer"
          onClick={togglePopup}
        >
          <img
            src={profile}
            alt="profile"
            className="rounded-full lg:w-14 lg:h-14 sm:w-8 sm:h-8 mx-2 cursor-pointer"
            onClick={togglePopup}
          />
          {isPopupOpen && (
            <div className="absolute right-14 top-20 z-50 bg-white shadow-lg rounded-md w-36 text-gray-800 ">
              <div className="py-2 px-4 hover:bg-dark-blue hover:text-white hover:rounded-md">
                <button className="flex flex-row font-bold text-sm">
                  <FontAwesomeIcon icon={faGear} className="mr-2" />
                  Settings
                </button>
              </div>
              <div className="py-2 px-4 hover:bg-dark-blue hover:text-white hover:rounded-md">
                <button
                  onClick={handleSignOut}
                  className="flex flex-row font-bold text-sm"
                >
                  <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                  Log out
                </button>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
