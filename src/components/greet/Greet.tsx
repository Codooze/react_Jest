import React from "react";

type GreetProps = {
  name?: string;
};

export default function Greet({ name }: GreetProps) {
  return (
    <>
      <h1>Hello {name ? name : ""}</h1>
    </>
  );
}
