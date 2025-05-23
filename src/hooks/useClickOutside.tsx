import { useEffect } from "react";

interface UseClickOutsideProps {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
}

const useClickOutside = ({ ref, callback }: UseClickOutsideProps): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;
