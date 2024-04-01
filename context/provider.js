"use client";
import { SessionProvider } from "next-auth/react";
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8234874125207307"
  crossorigin="anonymous"
></script>;

const Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
