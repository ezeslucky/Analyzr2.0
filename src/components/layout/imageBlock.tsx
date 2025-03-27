import classNames from "classnames";

export default function ImageBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "flex items-center justify-center relative rounded-2xl bg-base-100 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
