import { useEffect } from "react";
import classes from "./Notification.module.css";
import { useState } from "react";

const Notification = (props) => {
  //let specialClasses = "";
  const [isNotify, setIsNotify] = useState(false);
  const [specialClasses, setSpecialClasses] = useState("");

  useEffect(() => {
    if (props.status === "error") {
      setSpecialClasses(classes.error);
      setIsNotify(true);
    } else if (props.status === "success") {
      setSpecialClasses(classes.success);
      setIsNotify(true);
    } else {
      setSpecialClasses();
      setIsNotify(true);
    }
   let timeout= setTimeout(() => {
      setIsNotify(false);
    }, 2000);
    return ()=>clearTimeout(timeout);
  }, [props.status]);
  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <>
      {isNotify && (
        <section className={cssClasses}>
          <h2>{props.title}</h2>
          <p>{props.message}</p>
        </section>
      )}
    </>
  );
};

export default Notification;
