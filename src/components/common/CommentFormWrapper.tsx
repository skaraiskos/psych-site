"use client";

import Form from "./Form";
import type { FormProps } from "../../shared/types";

type SubmitData = {
  name: string;
  mail: string;
  textarea: string;
};

type CommentFormProps = FormProps & {
  onSubmit?: (data: SubmitData) => Promise<any>;
};

export default function CommentFormWrapper(props: CommentFormProps) {
  return (
    <Form
      {...props}
      onSubmit={async (data: SubmitData) => {
        const res = await fetch("/api/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        return res.json();
      }}
    />
  );
}