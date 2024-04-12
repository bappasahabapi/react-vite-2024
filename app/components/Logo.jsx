import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        className="max-w-[100px] md:max-w-[165px] "
        src="/assets/logo.png"
        alt="Photo Gallery"
        height={100}
        width={165}
      />
    </Link>
  );
};

export default Logo;
