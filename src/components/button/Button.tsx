import { ReactElement } from "react";

interface Props {
  title: string;
  Icon?: () => ReactElement;
  onPress: () => void;
}

export default function Button({ title, Icon, onPress }: Props) {
  return (
    <button
      className={
        Icon
          ? "bg-transparent w-full h-10 flex items-center justify-center rounded border-2 border-back1"
          : "bg-back1 w-full h-10 flex items-center justify-center rounded"
      }
      onClick={() => onPress()}
    >
      {Icon && (
        <span className="mr-2">
          <Icon />
        </span>
      )}
      <span className={Icon ? "text-sm text-font" : "text-sm text-white"}>
        {title}
      </span>
    </button>
  );
}
