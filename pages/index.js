export default function Home() {
  return (
    <div>
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
