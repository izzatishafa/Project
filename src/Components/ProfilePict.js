import profile from "../Assets/pict2.jpg";

export default function ProfilePicture() {
  return (
    <div className="mt-6 relative flex">
      <img
        src={profile}
        className="ml-[50px] rounded-full w-[175px] h-[175px] shadow-md object-cover"
      />
      {/* <div className="absolute flex">
        <div
          className="text-dark-blue w-[600px] h[900px] text-center text-[11px] font-poppins font-bold
                bg-white bg-opacity-50 opacity-0 trasition hover:opacity-100 p-11 cursor-pointer"
        >
          <p>
            Tambah Foto <br />
            Profil
          </p>
        </div>
      </div> */}
    </div>
  );
}
