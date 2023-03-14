import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../types/types';
import { useEffect, RefObject } from 'react';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useOutsideClick = (
  refs: Array<RefObject<HTMLElement> | undefined>,
  handler: () => void
) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (event: any) => {
      if (!handler) return;

      // Clicked browser's scrollbar
      if (
        event.target === document.getElementsByTagName('html')[0] &&
        event.clientX >= document.documentElement.offsetWidth
      )
        return;

      let containedToAnyRefs = false;
      for (const rf of refs) {
        if (rf && rf.current && rf.current.contains(event.target)) {
          containedToAnyRefs = true;
          break;
        }
      }

      // Not contained to any given refs
      if (!containedToAnyRefs) {
        handler();
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, handler]);
};
