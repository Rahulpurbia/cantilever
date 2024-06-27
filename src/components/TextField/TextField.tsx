import React from "react";
import "./TextField.css";

export type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

interface Props {
  placeholder?: string;
  type?: InputType;
}

const TextField = ({ placeholder, type }: Props) => {
  return (
    <div className="text-field">
      <input placeholder={placeholder || "Enter"} type={type || "text"} />
    </div>
  );
};

export default TextField;
