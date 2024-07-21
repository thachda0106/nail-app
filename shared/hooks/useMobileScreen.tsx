'use client';

import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';
import { BREAK_POINTS, DEVICE_TYPES } from '../constants/breakpoints';
import { useSearchParams } from 'next/navigation';

export default function useMobileScreen(
  breakPoint = BREAK_POINTS.Small,
) {
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(Boolean(searchParams.get('device') === DEVICE_TYPES.Mobile));
  const windowSize = useWindowSize();

  useEffect(() => {
    if (!windowSize) {
      return;
    }

    setIsMobile(windowSize <= breakPoint);
  }, [windowSize]);

  return isMobile;
}
