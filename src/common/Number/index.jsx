import { HomeConstantData } from "@/constant/Home";
import styles from "./styles.module.css";
import CountUp from "react-countup";

const Number = () => {
  return (
    <div className={styles.countWrapper}>
      <div className="container">
        <div className="row">
          {HomeConstantData?.Number?.map((data, i) => (
            <div key={i} className="col-lg-3 col-6 my-1 mb-lg-0 d-flex justify-content-center text-center">
              <div className={styles.countNums}>
                <h6>
                  {data?.id == "4" ? (
                    <CountUp
                      start={0.0}
                      end={data?.count}
                      duration={5}
                      decimal="."
                      decimals={1}
                    />
                  ) : (
                    <CountUp start={0} end={data?.count} duration={5} />
                  )}
                  <span>{data?.symbol}</span>
                </h6>
                <p>{data?.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Number;
