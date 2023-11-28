"use client";
import NavBar from "@/components/navBar/navBar";
import "./../globals.css";
import Footer from "@/components/footer/footer";
import { useRouter } from "next/navigation";

export default function HomeLayout({ children }) {
  const router = useRouter();

  if (!localStorage.getItem("token")) {
    router.push("/Login");
  }

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
