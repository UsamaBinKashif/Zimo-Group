import Image from "next/image";
import ZimoIcon from "../assets/Logos/ZIMO Menu Icon W.png";
import ZimoLogo from "../assets/Logos/ZIMO W.png";
import ZimoMain from "../assets/Logos/ZIMO ZIG W.png";
import Flag from "../assets/Logos/Flag.png";
import UserIcon from "../assets/Logos/User.png";
import CartIcon from "../assets/Logos/Cart.png";
const page = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        {/* HEADER */}
        <header className="bg-black p-4 flex items-center justify-center">
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
        {/* HEADER END*/}
        <main>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, reprehenderit ab error ipsa explicabo autem labore? Atque laboriosam, iure soluta blanditiis, accusamus quos nobis ad quas cum ratione vitae iusto.
        </main>
      </section>
      {/* HERO SECTION END*/}
    </>
  );
};

export default page;
