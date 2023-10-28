import Image from "next/image";
import Container from "./ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-category";
import NavbarButtonGroup from "./navbar-button-group";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="relative border-b">
      <Container>
        <div className="relative mx-auto w-[45px] py-2">
          <Link href={"/"}>
            <Image
              alt="logo"
              className="rounded-full "
              src={"/logo.png"}
              width={45}
              height={45}
            />
          </Link>
        </div>
        <div className="absolute right-10 top-1/4 -translate-y-1/4">
          <NavbarButtonGroup />
        </div>
      </Container>
      <MainNav data={categories} />
    </div>
  );
};

export default Navbar;
