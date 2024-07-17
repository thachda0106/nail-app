import { useEffect, useState } from "react";

export const useViewPort = (
  targetRef: React.MutableRefObject<HTMLElement | null>,
  callback?: () => void
) => {
  const [isVisiable, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          callback && callback();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // 50% of target visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return { isVisiable };
};
