import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {};

export default function Section({ children, ...others }: Props) {
  return <div>{children}</div>;
}
