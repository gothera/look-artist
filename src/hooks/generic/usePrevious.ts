import { useRef, useEffect } from 'react';

/**
 * Hook for getting the previous value
 *
 * @param value is the state that is wanted to keep track of
 * @returns The previous value of a state.
 * Type is any because its intended to work with all types
 *
 */
export function usePrevious<T extends any>(value: T): T | undefined {
  const ref = useRef<T | undefined>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
