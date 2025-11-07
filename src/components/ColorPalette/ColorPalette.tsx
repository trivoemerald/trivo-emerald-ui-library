import React from "react";
import styles from "./ColorPalette.module.css";

export interface ColorItemProps {
  name: string;
  variable: string;
  value: string;
  category?: string;
}

export interface ColorPaletteProps {
  colors: ColorItemProps[];
  title?: string;
}

export const ColorItem: React.FC<ColorItemProps> = ({
  name,
  variable,
  value,
}) => {
  return (
    <div className={styles.colorItem}>
      <div className={styles.colorSwatch} style={{ backgroundColor: value }} />
      <div className={styles.colorInfo}>
        <div className={styles.colorName}>{name}</div>
        <div className={styles.colorVariable}>{variable}</div>
        <div className={styles.colorValue}>{value}</div>
      </div>
    </div>
  );
};

export const ColorPalette: React.FC<ColorPaletteProps> = ({
  colors,
  title = "Color Palette",
}) => {
  const categorized = colors.reduce((acc, color) => {
    const category = color.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(color);
    return acc;
  }, {} as Record<string, ColorItemProps[]>);

  return (
    <div className={styles.palette}>
      <h1 className={styles.title}>{title}</h1>
      {Object.entries(categorized).map(([category, categoryColors]) => (
        <div key={category} className={styles.category}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.colorGrid}>
            {categoryColors.map((color) => (
              <ColorItem key={color.variable} {...color} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
