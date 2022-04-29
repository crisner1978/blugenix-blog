import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string
  name: string
  active: boolean
  rest?: any
}

const MyLink = ({ href, name, active, ...rest }: Props) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} passHref>
      <a
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
};

export default MyLink;