/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { type ElementType } from "react";
import styles from "./CTA.module.scss";
import classNames from "classnames";
import { DynamicTag } from "../../DynamicTag";

type IButtonProps = Partial<
  {
    url: string;
    onClick: (event: any) => void;
    style: object;
    type: "button" | "submit" | "reset";
    tagName: ElementType<any>;
    variation: "primary" | "cancel" | "back" | "save";
    disabled?: boolean;
  } & { text: string }
>;

export const CTA: React.FC<IButtonProps> = ({
  text,
  url,
  onClick,
  style,
  type = undefined,
  tagName = "a",
  variation = "primary",
  disabled,
}) => {

  const props = {
    href: url,
    type,
  };
  
  return (
    <DynamicTag
      as={tagName}
      {...props}
      onClick={onClick}
      style={{ ...style }}
      className={classNames(styles.button, styles[variation], {
        [styles.disabledButton]: disabled
      })}
    >
      {text}
    </DynamicTag>
  );
};
