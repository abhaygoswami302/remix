import {
  useLoaderData,
  Form,
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
} from "react-router";
import axios from "axios";
import { useState, type ChangeEvent, type FormEvent } from "react";

interface InputDataProps {
  name: string | null;
  email: string | null;
  age: number | "";
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    const data = res.json();
    console.log("response data:" + data);
    return data;
  } catch (error) {
    console.log("Error in loader:" + error);
    return null;
  }
};

export default function Welcome() {
  const data = useLoaderData();

  return (
    <>
      <Form method="post">
        <div className="flex flex-col justify-start"></div>
        <div className="mb-2">
          <label htmlFor="name">Name</label>
          <input type="text" className="border" id="name" name="name" />
        </div>
        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input type="email" className="border" id="email" name="email" />
        </div>
        <div className="mb-2">
          <label htmlFor="Age">Age</label>
          <input type="number" className="border" id="Age" name="age" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.json();
  console.log(body);
};
