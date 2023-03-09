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
import EstateImg from "../assets/REAL ESTATE.png";
import CarImg from "../assets/CARS.png";
import YachtImg from "../assets/YACHTS.png";
import WatchImg from "../assets/WATCHES.png";
import YacthBG from "../assets/Yacht 1821.jpg";
import MapImg from "../assets/Map.png";
import ZimoPartnerlogo from "../assets/Logos/ZIMO Partners.png";
import CivicaLogo from "../assets/Logos/CIVICA CES B.png";
import Barclayslogo from "../assets/Logos/Barclays.png";
import IslandBG from "../assets/Yacht 1822.jpg";
import CarTwo from "../assets/Car 1821.jpg";
import SliderArrow from "../assets/Logos/SliderArrow.png";
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
          <header className=" p-6 flex items-center justify-center w-screen">
            {/* LEFT */}
            <div className="flex items-center text-center gap-4 flex-1 ">
              <div className="flex gap-6">
                <Image
                  src={ZimoIcon}
                  alt="zimo-icon"
                  className="md:w-16 w-12 h-10"
                />
                <Image
                  src={ZimoLogo}
                  alt="zimo-logo"
                  className="md:w-20 w-12 h-10"
                />
                <p className="hidden md:block text-xs text-white uppercase mt-6  ">
                  About
                </p>
              </div>
            </div>

            {/* CENTER */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={ZimoMain}
                alt="zimo-logo-main"
                className="md:w-36 w-20 "
              />
            </div>
            {/* RIGHT */}
            <div className="flex-1 flex items-center gap-4 justify-center md:justify-start">
              <div className="hidden md:flex flex-col  text-[10px] text-white uppercase">
                <p className="md:tracking-widest">
                  17:23 London United Kingdom
                </p>
                <p className="text-yellow-500 md:text-right ">
                  sunday, 12 February 202
                </p>
              </div>
              <Image src={Flag} alt="country-flag" className="md:w-6 w-5" />
              <Image
                src={CartIcon}
                alt="cart-icon"
                width={15}
                className="md:mx-16"
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
        <h3 className="text-xs md:text-sm tracking-widest text-center uppercase ">
          A Real estate and property platform that is changing the wolrd
        </h3>
        <section>
          <div className=" px-5 py-10 relative text-center md:text-left">
            <div className="  mb-10 ">
              <h3 className=" tracking-widest text-sm  md:text-[29px] font-normal uppercase mb-1 ">
                A revloutionary platform
              </h3>
              <h3 className="tracking-widest uppercase font-medium  text-2xl md:text-5xl">
                Entries - Sellers
              </h3>
              <h3 className="tracking-wide uppercase font-medium text-4xl md:text-7xl">
                World Wide
              </h3>
            </div>
            <div className="absolute right-0 pb-10 mb-10 p-4 md:w-[382px]">
              <div className="flex flex-col items-center space-y-4 ">
                <Image
                  src={ZimoMainBlack}
                  alt="zimo-logo-main"
                  className="w-56 md:w-full"
                />
                <p className=" text-sm md:text-base uppercase tracking-widest text-center">
                  Connecting users from across the globe to facilitate life's
                  most important personal transactions.
                </p>
              </div>
            </div>
            <div className="md:mx-auto pt-60 mb-20">
              <div className="flex flex-col space-y-4">
                <h2 className="tracking-widest text-xl md:text-[29px]">
                  THE BEST OF THE BEST
                </h2>
                <p className=" text-xs md:text-base uppercase tracking-widest md:w-9/12 ">
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
        <div className="flex  justify-between items-center">
          <h3 className="text-lg md:text-2xl tracking-widest uppercase ">
            OUR CATEGORIES
          </h3>
          <div className="flex gap-8 items-center">
            <Image
              src={SliderArrow}
              alt="arrow"
              width={10}
              className="rotate-180	"
            />
            <Image src={SliderArrow} alt="arrow" width={10} />
          </div>
        </div>

        {/* IMAGES SECTION */}
        <div className="flex flex-col md:flex-row pt-20 pb-2 space-y-4 md:space-y-0 md:space-x-4">
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
        <h3 className="text-lg md:text-2xl tracking-widest uppercase text-center my-5 md:mb-10 ">
          One platform for all premium listings
        </h3>
        <h3 className="text-base md:text-xl tracking-widest uppercase text-center">
          UNLIMITED POTENTIAL
        </h3>
      </section>
      {/* SECTION CATEGORIES END */}

      {/* SECTION TICEKTS */}
      <section className="mt-96 md:mt-0 py-24">
        <div className="w-full mx-auto  md:pt-0 flex items-center  flex-col md:flex-row  justify-center md:space-x-24">
          <div className="mb-6 ">
            <Image
              src={ZimoLogoTwoBlack}
              alt="zimo-logo-main"
              className="w-32 md:w-56 mb-2"
            />

            <h3 className=" tracking-widest text-base md:text-lg font-normal uppercase mb-1 ">
              Open source
            </h3>
            <h3 className="tracking-widest uppercase font-medium text-2xl md:text-4xl  mb-1 md:mb-4">
              Entry tickets
            </h3>
            <h3 className="tracking-wide text-gray-400 uppercase font-medium text-sm md:text-xs">
              World FOR ALL PREMIUM LISTINGS
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <Image
              alt="property-img"
              className="w-80 md:w-[642px] h-auto object-cover object-center rounded mb-10 "
              src={PropertyImg}
            />
            <h3 className=" tracking-widest text-base font-normal uppercase  ">
              LET YOUR DREAMS FIND YOU
            </h3>
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
            <div className="text-white md:space-y-3 px-10 md:px-0 py-20  absolute md:-right-56 top-0 ">
              <h1 className="text-lg md:text-3xl tracking-widest uppercase">
                Personalised for You
              </h1>
              <p className="text-gray-400 tracking-widest text-xs w-full  md:w-1/2">
                Delivering thousands of personalised alerts everyday, our USERS
                can be first in line when that opportunity of a lifetime is
                here.
              </p>
            </div>
            <div className="w-full flex items-center justify-between mt-56 md:mt-72 p-10 gap-10 md:gap-0 ">
              <Image
                src={ZimoLogoThree}
                alt="zimo-logo"
                className="w-40 md:w-96"
              />
              <p className="text-gray-400 tracking-widest text-[10px] md:text-xs flex gap-2 items-center">
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
      <section className="h-screen relative overflow-hidden bg-gray-200 flex items-center justify-center ">
        <Image
          src={MapImg}
          alt="Hero-Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 bottom-0  flex flex-col justify-center items-center text-black ">
          <h1 className="text-3xl tracking-widest  text-center mb-6">
            GLOBAL vision
          </h1>
          <p className="tracking-widest text-[10px]  md:text-xs w-[450px]">
            Delivering thousands of personalised alerts everyday, our USERS can
            be first in line when that opportunity of a lifetime is here.
          </p>
        </div>
      </section>
      {/*Map SECTION END*/}
      {/* PARTNERS SECTION */}
      <section className="h-screen flex flex-col md:flex-row mt-72 items-center md:px-56 gap-52">
        <div>
          <Image src={ZimoPartnerlogo} alt="zimo-logo" className="w-56 md:w-full" />
        </div>
        <div className="flex flex-col space-y-5 md:space-y-10">
          <Image src={CivicaLogo} alt="logo" className="w-56 md:w-full"/>
          <Image src={Barclayslogo} alt="logo" className="w-56 md:w-full" />
        </div>
      </section>
      {/* PARTNERS SECTION END */}

      {/* ISLAND SECTION */}
      <section className="h-screen relative overflow-hidden bg-gray-200 flex  md:flex-row items-center justify-center pb-56">
        <Image
          src={IslandBG}
          alt="Hero-Background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-[580px] md:top-[340px] gap-5 md:gap-0 flex  lg:top-[500px] md:justify-between items-center text-black md:space-x-72">
          <Image
            src={CarTwo}
            alt="Hero-Background"
            className="w-40 md:w-60 h-full object-cover rounded-lg"
          />
          <Image
            src={ZimoLogoThree}
            alt="Hero-Background"
            className="w-40 md:w-96 h-full opacity-30"
          />
        </div>
      </section>
      {/* ISLAND SECTION END */}
    </>
  );
};

export default page;
