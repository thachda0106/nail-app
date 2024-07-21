import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'
import { DEVICE_TYPES } from './shared/constants/breakpoints';
 
export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const { device } = userAgent(request)
  
  if (device.type === DEVICE_TYPES.Mobile && !url.searchParams.has('device')) {
    url.searchParams.set('device', device.type || DEVICE_TYPES.Mobile);
    return NextResponse.redirect(url)
  }

  if (device.type !== DEVICE_TYPES.Mobile && url.searchParams.has('device')) {
    url.searchParams.delete('device');
    return NextResponse.redirect(url)
  }

  return NextResponse.next();
}
