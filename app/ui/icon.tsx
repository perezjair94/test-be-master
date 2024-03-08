import React from "react";
import * as Icons from "lucide-react";

export type IconProps = Icons.LucideProps & {
  name: keyof typeof Icons;
};

export const Icon = ({ name, ...props }: IconProps): JSX.Element | null => {
  const Icon = Icons[name] as React.FunctionComponent<Icons.LucideProps>;
  return <Icon {...props} />;
};
