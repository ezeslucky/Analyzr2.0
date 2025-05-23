/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';

export const config = {
  matcher: '/:path*',
};

function customCollectEndpoint(req: any) {
  const collectEndpoint = process.env.COLLECT_API_ENDPOINT;

  if (collectEndpoint) {
    const url = req.nextUrl.clone();
    const { pathname } = url;

    if (pathname.endsWith(collectEndpoint)) {
      url.pathname = '/api/send';
      return NextResponse.rewrite(url);
    }
  }
}

function customScriptName(req: any) {
  const scriptName = process.env.TRACKER_SCRIPT_NAME;

  if (scriptName) {
    const url = req.nextUrl.clone();
    const { pathname } = url;
    const names = scriptName.split(',').map(name => name.trim().replace(/^\/+/, ''));

    if (names.find(name => pathname.endsWith(name))) {
      url.pathname = '/script.js';
      return NextResponse.rewrite(url);
    }
  }
}

export default function middleware(req: any) {
  const fns = [customCollectEndpoint, customScriptName];

  for (const fn of fns) {
    const res = fn(req);
    if (res) {
      return res;
    }
  }

  return NextResponse.next();
}
