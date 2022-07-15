import {
  createContext,
  FC,
  useEffect,
  useState,
  PropsWithChildren,
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

  function openMenuMobile() {
    setMobileMenuVisible(true);
  }

  function closeMenuMobile() {
    setMobileMenuVisible(false);
  }

  useEffect(() => {
    const body = document.querySelector("body");
    if (mobileMenuVisible && body) body.style.overflow = "hidden";

    if (!mobileMenuVisible && body) body.style.overflow = "auto";
  }, [mobileMenuVisible]);

  return (
    <MobileMenuContext.Provider
      value={{ mobileMenuVisible, openMenuMobile, closeMenuMobile }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};
