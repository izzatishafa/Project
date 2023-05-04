import profile from "../Assets/pict2.jpg";

export default function ProfilePicture() {
  return (
    <div className="mt-6 relative flex">
      <img
        src={profile}
        className="ml-[50px] rounded-full w-[175px] h-[175px] shadow-md object-cover"
      />
      <div className="absolute flex items-center justify-center ml-3.5">
        <div
          className="text-dark-blue w-[250px] h-[200px] text-[14px] font-poppins font-bold
                bg-white bg-opacity-50 opacity-0 transition hover:opacity-100 cursor-pointer rounded-full"
        >
          <p className="flex items-center justify-center text-center pt-[70px]">
            Tambah Foto <br />
            Profil
          </p>
        </div>
      </div>
    </div>
  );
}

