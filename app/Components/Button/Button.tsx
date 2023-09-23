"use client";

import { ReactNode } from 'react';
import './button.scss';

interface ButtonProps {
  name: string;
  icon?: ReactNode;
  background?: string;
  color?: string;
  border?: string;
}

export default function Button({ name, icon, background, color, border }: ButtonProps) {
  return <button style={{ background, color, border }}>
    {icon && icon}
    {name}
  </button>
}
