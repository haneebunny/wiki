import { useRouter } from "next/router";
import React from "react";

export default function Header() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };
  return (
    <header
      onClick={onClickLogo}
      className="flex flex-row justify-between items-center text-4xl p-3 cursor-pointer"
    >
      Wiki
    </header>
  );
}
