import React from "react";
import ReactDOM from "react-dom";
import ComponentDetail from "./ComponentDetail";
import ApprovalCard from "./ApprovalCard";

const divstyle={
    marginTop:'5em'

};

const App = () => {
  return (
    <div className="ui container comments" style={divstyle}>
      <ApprovalCard>
        <ComponentDetail
          author="Jo"
          timeAgo="Today at 6.00PM"
          Comments="Nice blog post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author="Yas"
          timeAgo="Today at 9.45PM"
          Comments="Yeah !! "
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author="Jane"
          timeAgo="Yesterday at 5.20PM"
          Comments="Here is an another article"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
