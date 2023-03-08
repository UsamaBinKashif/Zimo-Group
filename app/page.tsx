import Image from "next/image";
import ZimoIcon from "../assets/Logos/ZIMO Menu Icon W.png";
import ZimoLogo from "../assets/Logos/ZIMO W.png";
import ZimoMain from "../assets/Logos/ZIMO ZIG W.png";
import ZimoMainBlack from "../assets/Logos/ZIMO ZIG B.png";
import ZimoLogoTwoBlack from "../assets/Logos/ZIMO B.png";
import ZimoLogoThree from "../assets/Logos/ZIMO ZIG W.png";
import PropertyImg from "../assets/Property 1821.jpg";
import Flag from "../assets/Logos/Flag.png";
import UserIcon from "../assets/Logos/User.png";
import CartIcon from "../assets/Logos/Cart.png";
import heroBg from "../public/ZIMO Pro.png";
import ArrowIcon from "../assets/Logos/arrow.png";
import ArrowDown from "../assets/Logos/ArrowDown.png";
import ArrowDownBlack from "../assets/Logos/ArrowDownBlack.png";
import EstateImg from "../assets/REAL ESTATE 1.jpg";
import CarImg from "../assets/CARS.png";
import YachtImg from "../assets/YACHTS.png";
import WatchImg from "../assets/WATCHES.png";
import YacthBG from "../assets/Yacht 1821.jpg";
import MapImg from "../assets/Map.png";
const page = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="h-screen relative overflow-hidden ">
        <Image
          src={heroBg}
          alt="Hero-Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 bottom-0 left-0 ">
          {/* HEADER */}
          <header className=" p-4 flex items-center justify-center w-screen">
            {/* LEFT */}
            <div className="flex items-center text-center gap-4 flex-1">
              <div className="flex gap-6">
                <Image src={ZimoIcon} alt="zimo-icon" width={40} />
                <Image src={ZimoLogo} alt="zimo-logo" width={120} />
              </div>
              <p className="text-xs text-white uppercase ">About</p>
            </div>

            {/* CENTER */}
            <div className="flex-1 flex items-center justify-center">
              <Image src={ZimoMain} alt="zimo-logo-main" width={100} />
            </div>
            {/* RIGHT */}
            <div className="flex-1 flex items-center gap-4">
              <div className="flex flex-col text-[10px] text-white uppercase">
                <p className="tracking-widest">17:23 London United Kingdom</p>
                <p className="text-yellow-500 text-right">
                  sunday, 12 February 202
                </p>
              </div>
              <Image src={Flag} alt="country-flag" width={30} />
              <Image
                src={CartIcon}
                alt="cart-icon"
                width={15}
                className="mx-16"
              />
              <Image src={UserIcon} alt="user-icon" width={15} />
            </div>
          </header>
          <p className="text-white text-xs flex items-center gap-2 p-8 cursor-pointer">
            {" "}
            <span>
              <Image src={ArrowIcon} alt="arrow-left-icon" width={15} />
            </span>{" "}
            Back
          </p>
          {/* HEADER END*/}

          {/* MAIN SECTION */}
          <main className="text-white flex justify-center">
            <div className="text-white space-y-3 py-20 px-8 mr-auto">
              <h1 className="text-xl tracking-widest">Discover</h1>
              <h1 className="text-3xl tracking-widest uppercase">
                A New World
              </h1>
              <p className="text-gray-400 tracking-widest text-xs">
                FOR THOSE WHO WISH FOR MORE...
              </p>
            </div>
            <div className="absolute bottom-0 mx-auto space-y-8 flex items-center flex-col py-6">
              <p className="text-gray-400 tracking-widest text-xs ">
                Bringing the world closer together
              </p>
              <Image src={ArrowDown} alt="arrow-down-icon" width={40} />
            </div>
          </main>
          {/* MAIN SECTION END */}
        </div>
      </section>
      {/* HERO SECTION END*/}

      {/* SECTION DETAILS */}
      <section className=" py-10">
        <h3 className="text-sm tracking-widest text-center uppercase ">
          A Real estate and property platform that is changing the wolrd
        </h3>
        <section>
          <div className=" px-5 py-10 relative">
            <div className="  mb-10 ">
              <h3 className=" tracking-widest text-[29px] font-normal uppercase mb-1 ">
                A revloutionary platform
              </h3>
              <h3 className="tracking-widest uppercase font-medium text-5xl">
                Entries - Sellers
              </h3>
              <h3 className="tracking-wide uppercase font-medium text-7xl">
                World Wide
              </h3>
            </div>
            <div className="absolute right-0 pb-10 mb-10 p-4 w-[382px]">
              <div className="flex flex-col items-center space-y-4 ">
                <Image src={ZimoMainBlack} alt="zimo-logo-main" width={350} />
                <p className="text-base uppercase tracking-widest  text-center">
                  Connecting users from across the globe to facilitate life's
                  most important personal transactions.
                </p>
              </div>
            </div>
            <div className="mx-auto pt-60 mb-20">
              <div className="flex flex-col space-y-4">
                <h2 className="tracking-widest text-[29px]">
                  THE BEST OF THE BEST
                </h2>
                <p className="text-base uppercase tracking-widest w-9/12 ">
                  A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS
                  AND MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON
                  THE MARKET FROM ACROSS THE WORLD.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 left-0 flex items-center flex-col mx-auto">
              <Image src={ArrowDownBlack} alt="arrow-down-icon" width={40} />
            </div>
          </div>
        </section>
      </section>
      {/* SECTION DETAILS END */}

      {/* SECTION CATEGORIES  */}
      <section className="h-screen px-5 py-10">
        <h3 className="text-2xl tracking-widest uppercase ">OUR CATEGORIES</h3>

        {/* IMAGES SECTION */}
        <div className="flex pt-20 pb-2 space-x-4">
          <div className=" relative flex-1 h-[50vh]">
            <Image
              alt="property-img"
              className="object-cover rounded h-56 w-full"
              src={EstateImg}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <h3 className="text-white text-base tracking-widest mt-24">
                Real Estate
              </h3>
            </div>
          </div>
          <div className=" relative flex-1 h-[50vh] ">
            <Image
              alt="car-img"
              className="object-cover rounded h-56 w-full"
              src={CarImg}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <h3 className="text-white text-base tracking-widest mt-24">
                CARS
              </h3>
            </div>
          </div>
          <div className=" relative flex-1 h-[50vh]">
            <Image
              alt="yacht-img"
              className="object-cover rounded h-56 w-full"
              src={YachtImg}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <h3 className="text-white text-base tracking-widest mt-24">
                Yachts
              </h3>
            </div>
          </div>
          <div className=" relative flex-1 h-[50vh]">
            <Image
              alt="watch-img"
              className="object-cover rounded h-56 w-full"
              src={WatchImg}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <h3 className="text-white text-base tracking-widest mt-24">
                Watches
              </h3>
            </div>
          </div>
        </div>
        {/* IMAGES SECTION END */}
        <h3 className="text-2xl tracking-widest uppercase text-center mb-10 ">
          One platform for all premium listings
        </h3>
        <h3 className="text-xl tracking-widest uppercase text-center">
          UNLIMITED POTENTIAL
        </h3>
      </section>
      {/* SECTION CATEGORIES END */}

      {/* SECTION TICEKTS */}
      <section>
        <div className="py-24 ">
          <div className="w-full mx-auto flex items-center justify-center space-x-24">
            <div className="mb-6 ">
              <Image
                src={ZimoLogoTwoBlack}
                alt="zimo-logo-main"
                width={300}
                className="mb-2"
              />

              <h3 className=" tracking-widest text-lg font-normal uppercase mb-1 ">
                Open source
              </h3>
              <h3 className="tracking-widest uppercase font-medium text-4xl  mb-4">
                Entry tickets
              </h3>
              <h3 className="tracking-wide text-gray-400 uppercase font-medium text-xs">
                World FOR ALL PREMIUM LISTINGS
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <Image
                alt="property-img"
                className="max-w-2xl h-auto object-cover object-center rounded mb-10 "
                src={PropertyImg}
              />
              <h3 className=" tracking-widest text-base font-normal uppercase  ">
                LET YOUR DREAMS FIND YOU
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION TICEKTS END */}

      {/* YACHT SECTION */}
      <section className="h-screen relative overflow-hidden ">
        <Image
          src={YacthBG}
          alt="Hero-Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 bottom-0 left-0 ">
          <section className="text-white flex justify-center flex-col w-screen relative">
            <div className="text-white space-y-3 py-20  absolute -right-56 top-0 ">
              <h1 className="text-3xl tracking-widest uppercase">
                Personalised for You
              </h1>
              <p className="text-gray-400 tracking-widest text-xs w-1/2">
                Delivering thousands of personalised alerts everyday, our USERS
                can be first in line when that opportunity of a lifetime is
                here.
              </p>
            </div>
            <div className="w-full flex items-center justify-between mt-72 p-10 ">
              <Image src={ZimoLogoThree} alt="zimo-logo" width={300} />
              <p className="text-gray-400 tracking-widest text-xs flex gap-2 items-center">
                CREATE USER ID
                <span>
                  {" "}
                  <Image src={ArrowIcon} alt="arrow-left-icon" width={15} />
                </span>
              </p>
            </div>
          </section>
        </div>
      </section>
      {/*YACHT SECTION END*/}

      {/* Map SECTION */}
      <section className="h-screen relative overflow-hidden bg-gray-200">
        <Image
          src={MapImg}
          alt="Hero-Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 bottom-0 left-0 ">
          <section className="text-black flex justify-center flex-col w-screen relative">
            <div className="text-black space-y-3 py-20  ">
              <h1 className="text-3xl tracking-widest uppercase">
              GLOBAL vision
              </h1>
              <p className=" tracking-widest text-xs w-1/2">
                Delivering thousands of personalised alerts everyday, our USERS
                can be first in line when that opportunity of a lifetime is
                here.
              </p>
            </div>
           
          </section>
        </div>
      </section>
      {/*Map SECTION END*/}
    </>
  );
};

export default page;
