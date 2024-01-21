import { Star } from "./Star";

export type StarType = {
  count: any;
};

export const Stars : React.FC<StarType> = ({count}) => {
  return (
    (Number(count) > 0 && Number(count) <= 5) ?
    <ul className="card-body-stars u-clearfix">
      <li>
          {
            Array.apply(null, Array(Number(count))).map((item, idx) => {
              return (<Star key={idx}/>);
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
