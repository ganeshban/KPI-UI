import { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  title?: string;
  icon?: string;
  collapsible?: boolean;
  className?: string;
}
function Card({
  title,
  icon,
  collapsible = false,
  className,
  children,
}: Props) {
  const [hideBody, setHideBody] = useState(false);
  return (
    <>
      <div className={`card p-0 m-1 ${className}`}>
        <div
          className={`card-header`}
          onClick={() => {
            collapsible && setHideBody(!hideBody);
          }}
        >
          <h6>
            <i className={`material-icons icons px-2`}>{icon}</i>
            <span>{title}</span>
          </h6>
        </div>
        {children && (
          <div className={"card-body"} hidden={hideBody}>
            {children}
          </div>
        )}
      </div>
    </>
  );
}
export default Card;
