import React, { ElementType, useState } from "react";
import "../app/globals.css";
import { ArrowRight02Icon } from "hugeicons-react";

interface GeneralButtonProps {
  buttonText: string;
  className?: string;
  size: "small" | "medium" | "large";
  state: "active" | "inactive" | "disabled" | "clicked" | "hover" | "previous";
  icon?: ElementType;
  iconPosition?: "left" | "right";
  onClick?: () => void;
}

/**
 * GeneralButton Component
 *
 * This is a reusable button component designed for flexibility and customization.
 * Features include:
 * - Dynamic styles based on button state (`active`, `inactive`, `disabled`, etc.)
 * - Customizable size (`small`, `medium`, `large`)
 * - Optional icon support with configurable position (`left` or `right`)
 * - Allows additional custom styles via the `className` prop
 *
 * Props:
 * - `buttonText`: The text displayed inside the button.
 * - `className`: Optional additional classes for the button's styling.
 * - `size`: Determines the button's size (`small`, `medium`, or `large`).
 * - `state`: Indicates the visual state of the button, such as `active` or `disabled`.
 * - `icon`: An optional icon component to render alongside the button text.
 * - `iconPosition`: Specifies whether the icon appears to the left or right of the text.
 *
 */

const GeneralButton: React.FC<GeneralButtonProps> = ({
  buttonText,
  className,
  size,
  state: initialState,
  icon: Icon = ArrowRight02Icon,
  iconPosition,
  onClick,
}) => {
  const [state, setState] = useState(initialState);
  // -------- button border --------
  let buttonBorder;
  if (state === "previous") {
    buttonBorder = "border-[var(--primary)]";
  }

  // -------- button border color --------
  let buttonBGColor;
  if (state === "active") {
    buttonBGColor = "bg-[var(--primary)]";
  } else if (state === "inactive") {
    buttonBGColor = "bg-[var(--secondary]";
  } else if (state === "disabled") {
    buttonBGColor = "bg-[var(--grey)]";
  } else if (state === "previous") {
    buttonBGColor = "bg-[transparent]";
  } else if (state === "clicked") {
    buttonBGColor = "bg-[#01131D]";
  } else if (state === "hover") {
    buttonBGColor = "bg-[#022335]";
  }

  // -------- button text and icon color --------
  let buttonTextColor;
  if (
    state === "active" ||
    state === "disabled" ||
    state === "clicked" ||
    state === "hover"
  ) {
    buttonTextColor = "text-[var(--secondary-text-color)]";
  } else if (state === "inactive" || state === "previous") {
    buttonTextColor = "text-[var(--primary]";
  }

  // button border raduis
  let borderRadius;
  if (size === "large") {
    borderRadius = "rounded-[2.0625rem]";
  } else if (size === "medium" || size === "small") {
    borderRadius = "rounded-[1.375rem]";
  }

  let buttonTextSize;
  if (size === "large") {
    buttonTextSize = "text-normal";
  } else if (size === "medium" || size === "small") {
    buttonTextSize = "text-sm";
  }

  let paddingY;
  if (size === "large") {
    paddingY = "py-[0.9375rem]";
  } else if (size === "medium" || size === "small") {
    paddingY = "py-[0.8125rem]";
  }

  let flexDirection;
  if (iconPosition === "left") {
    flexDirection = "flex-row";
  } else if (iconPosition === "right") {
    flexDirection = "flex-row-reverse";
  }

  // -------- Handle Mouse Events --------
  const handleMouseEnter = () => {
    if (state !== "disabled") {
      setState("hover");
    }
  };

  const handleMouseLeave = () => {
    if (state !== "disabled") {
      setState(initialState);
    }
  };

  const handleClick = () => {
    if (state !== "disabled") {
      setState("clicked");
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <button
      className={`${className} ${buttonBorder} ${borderRadius} ${buttonBGColor} ${buttonTextColor} ${paddingY} ${flexDirection} border border-solid font-bold flex items-center justify-center px-2.5 gap-2.5`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={state === "disabled"}
      onClick={handleClick}
    >
      {Icon && <Icon size={24} />}
      {buttonText}
    </button>
  );
};

export default GeneralButton;