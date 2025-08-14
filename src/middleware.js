import { NextResponse } from "next/server";

const locales = ['ar', 'en'];
const defaultLocale = 'en';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) return;
  
  // Redirect to default locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip internal paths and static files
    '/((?!_next|favicon.ico|robots.txt|sitemap.xml|api).*)',
  ],
};