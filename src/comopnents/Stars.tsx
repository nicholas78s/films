//import { useState, FC } from "react";
import { Star } from "./Star";

//export const Stars : React.FC = ({count} : {count}) => {
export type StarType = {
  count: any;
};

export const Stars : React.FC<StarType> = ({count}) => {
  //console.log(Number(count));
  //let arr = Array.apply(null, Array(count));
  
  // return (
  //   (count > 0 && count <= 5) ?
    
  //   <ul className="card-body-stars u-clearfix">
  //     <li>
  //         {
  //           Array.apply(null, Array(count)).map(() => {
  //             return (
  //               <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
  //               <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
  //               <path d="M0 0h18v18H0z" fill="none"/>
  //           </svg>)
  //           })
  //         }
  //     </li>
  //   </ul> :
  //   <></>
  // );

  return (
    (Number(count) > 0 && Number(count) <= 5) ?
    
    <ul className="card-body-stars u-clearfix">
      <li>
          {
            Array.apply(null, Array(count)).map(() => {
              return (<Star />);
            })
          }
      </li>
    </ul> :
    <><span>What is this?</span></>
  );
};

Stars.defaultProps = {
  count: 2,
};
