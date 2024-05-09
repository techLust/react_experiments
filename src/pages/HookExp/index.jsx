import React from "react";
import useSendData from "../../customHooks/useSendData";
import useApiCall from "../../customHooks/useApiCall";

const path = "https://jsonplaceholder.typicode.com/todos/1";
const method = "GET";

const HookExp = () => {
  // const [data] = useSendData()
  // console.log('Data from useSendData', data)

  const [data, error] = useApiCall(path, method);

  console.log("Data", data);

  const htmlContent = ` <h2> Rendered HTML from outside</h2>`;

  return (
    <div>
      <div>HookExp</div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
};

export default HookExp;
