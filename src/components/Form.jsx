import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form>
        <Input type="text" placeholder="UserName" />
        <Input type="email" placeholder="Email" />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </>
  );
};

export default Form;
