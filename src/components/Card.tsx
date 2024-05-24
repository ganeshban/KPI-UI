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
      <div className={"card p-0 m-1 " + className}>
        <div
          className="card-header fw-semibold"
          onClick={() => {
            collapsible && setHideBody(!hideBody);
          }}
        >
          <span className="align-top">
            <i className="material-icons px-2">{icon}</i>
          </span>
          {title}
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
