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
        <div className="flex flex-col justify-center items-center relative mx-auto py-2">
          <Link
            href={"/"}
            className="p-1 w-[40] h-[40] rounded-full border-2 border-main px-2 py-1 -space-y-1"
          >
            <div className="flex items-center text-sm">
              <h1>M P</h1>
            </div>
            <div className="flex items-center text-sm">
              <h1>O M</h1>
            </div>
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
