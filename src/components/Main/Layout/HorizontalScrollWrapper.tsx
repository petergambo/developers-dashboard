import { ReactNode } from "react";

interface Props {
    children: ReactNode;
  }


const HorizontalScrollWrapper: React.FC<Props> = ({children})=> {
    return(
        <div className="container ">
        <div className="flex overflow-x-auto space-x-1 hide-scrollbar">
            {children}
            </div>
            </div>
    )
}

export default HorizontalScrollWrapper