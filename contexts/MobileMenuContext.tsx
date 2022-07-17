import {
  createContext,
  FC,
  useState,
  PropsWithChildren,
  useCallback,
} from "react";

interface MobileMenuContextProps {
  mobileMenuVisible: boolean;
  openMenuMobile: () => void;
  closeMenuMobile: () => void;
}

export const MobileMenuContext = createContext({} as MobileMenuContextProps);

export const MobileMenuContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const removeScrollBody = useCallback((value: boolean) => {
    const body = document.querySelector("body");
    if (value && body) body.style.overflow = "hidden";

    if (!value && body) body.style.overflow = "auto";
  }, []);

  function openMenuMobile() {
    setMobileMenuVisible(true);
    removeScrollBody(true);
  }

  function closeMenuMobile() {
    setMobileMenuVisible(false);
    removeScrollBody(false);
  }

  return (
    <MobileMenuContext.Provider
      value={{ mobileMenuVisible, openMenuMobile, closeMenuMobile }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};
