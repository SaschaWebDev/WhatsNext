import Link from "next/link";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <Loader show />
      <Link
        prefetch={true}
        href={{
          pathname: "/",
          query: { username: "test" },
        }}
      >
        <a>Profile of Test</a>
      </Link>
    </div>
  );
}
