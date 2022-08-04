import { useEffect } from "react";

interface IThemeCustom {
  "--font-color": string;
  "--bg-color": string;
  "--bg-component": string;
  "--bg-icon": string;
  [key: string]: string;
}
const localStorageKey = "ThemeCustom";

export const useThemeCustomization = (key: string, color: string) => {
  const themeCustom: IThemeCustom = JSON.parse(
    localStorage.getItem(localStorageKey) as string
  ) || {
    "--font-color": "",
    "--bg-color": "",
    "--bg-component": "",
    "--bg-icon": "",
  };

  useEffect(() => {
    themeCustom[key] = color;
    localStorage.setItem(localStorageKey, JSON.stringify(themeCustom));
    Object.entries(themeCustom).map((item) =>
      document.documentElement.style.setProperty(item[0], item[1])
    );
  }, [key, color]);

  return;
};
