"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/features", label: "المزايا" },
  { href: "/status", label: "حالة المنتج" },
  { href: "/manual", label: "الدليل" },
  { href: "/contact", label: "تواصل" },
];

const APP_URL = "https://app.roz-hr.com";

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="ROZ" width={32} height={32} className="rounded" />
          <span className="text-lg font-bold text-roz-dark">ROZ</span>
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium ${
                pathname === l.href ? "text-roz-teal" : "text-gray-600 hover:text-roz-dark"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={`${APP_URL}/register`}
          className="rounded-md bg-roz-teal px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          جرّب النظام
        </a>
      </div>
    </header>
  );
}
