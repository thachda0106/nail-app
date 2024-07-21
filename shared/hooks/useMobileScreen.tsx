'use client';

import { useEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';
import { BREAK_POINTS, DEVICE_TYPES } from '../constants/breakpoints';

export default function useMobileScreen(
  breakPoint = BREAK_POINTS.Small,
  device?: DEVICE_TYPES, 
) {
  const [isMobile, setIsMobile] = useState(Boolean(device === DEVICE_TYPES.Mobile));
  const windowSize = useWindowSize();

  useEffect(() => {
    if (!windowSize) {
      return;
    }

    setIsMobile(windowSize <= breakPoint);
  }, [windowSize]);

  return isMobile;
}
