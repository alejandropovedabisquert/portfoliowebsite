import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  if (
    [
      // '/manifest.json',
      '/favicon.ico',
      // Your other files in `public`
    ].includes(pathname)
  )
    return
  
  // If URL has default locale prefix, redirect to URL without locale
  if (pathname.startsWith(`/${i18n.defaultLocale}/`) || pathname === `/${i18n.defaultLocale}`) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(`/${i18n.defaultLocale}`, '') || '/',
        request.url,
      ),
    );
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = i18n.defaultLocale;

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.rewrite(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and static files
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};