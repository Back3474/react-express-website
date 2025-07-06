import React from "react";

interface Props {
  children: React.ReactNode;
}

const EndPageListItem = ({ children }: Props) => {
  return (
    <li className="flex-grow w-full border-1 rounded-md my-2 flex items-center justify-center">
      {children}
    </li>
  );
};

export default EndPageListItem;
