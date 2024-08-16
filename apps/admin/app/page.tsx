import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

export default async  function Home() {
 const session=await getServerSession(authOptions)
 if(!session)
 {
  redirect("/api/auth/signin")
 }
 else{
  redirect("/home")
 }
}
