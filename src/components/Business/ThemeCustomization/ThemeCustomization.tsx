import cn from "classnames";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { IThemeCustomizationProps } from "./ThemeCustomization.props";
import { HexColorPicker } from "react-colorful";
import { useThemeCustomization } from "./themeCustomization/themeCustomization";

const themeSettings = [
  {
    text: "текста",
    name: "--font-color",
  },
  {
    text: "фона компонентов",
    name: "--bg-component",
  },
  {
    text: "заднего фона",
    name: "--bg-color",
  },
  {
    text: "иконок",
    name: "--bg-icon",
  },
];

const ThemeCustomization = ({
  className,
  ...props
}: IThemeCustomizationProps) => {
  const [openColorful, setOpenColorful] = useState<boolean>(false);
  const [color, setColor] = useState<string>();
  const [selectedField, setSelectedField] = useState<string>("");

  const handleThemeCustom = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setOpenColorful(!openColorful);
    setSelectedField(e.currentTarget.attributes[0].nodeValue as string);
  };

  useThemeCustomization(selectedField, color as string);

  return (
    <section className={cn(className, "")} {...props}>
      {themeSettings.map((item) => (
        <button
          key={item.name}
          name={item.name}
          onClick={(e) => handleThemeCustom(e)}
        >
          Выбрать цвет {item.text}
        </button>
      ))}
      <HexColorPicker
        color={color}
        onChange={setColor}
        style={{ visibility: openColorful ? "visible" : "hidden" }}
      />
      <h1>TITLE</h1>
    </section>
  );
};

export default ThemeCustomization;
