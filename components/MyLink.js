import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import React from "react";

const MyLink = React.forwardRef(({ href, name, active, ...rest }, ref) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} passHref={true} >
      <a ref={ref}
        {...rest}
        className={` ${
          asPath === href || active
            ? "ml-[5px] text-blue-600 font-semibold"
            : "hover:translate-x-[5px] transition-all transform ease-out duration-300"
        }`}
      >
        {name}
      </a>
    </Link>
  );
});

export default MyLink;