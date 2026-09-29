import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayer({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/blogs">Blogs</Link>
          {" | "}
          <Link href="/blogs/new">Create New Blogs</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
