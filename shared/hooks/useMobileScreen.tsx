'use client';

import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';
import { BREAK_POINTS } from '../constants/breakpoints';

export default function useMobileScreen(
  breakPoint = BREAK_POINTS.Small,
  isMobileDevice = true,
) {
  const [isMobile, setIsMobile] = useState(Boolean(isMobileDevice));
  const windowSize = useWindowSize();

  useEffect(() => {
    if (!windowSize) {
      return;
    }

    setIsMobile(windowSize <= breakPoint);
  }, [windowSize]);

  return isMobile;
}