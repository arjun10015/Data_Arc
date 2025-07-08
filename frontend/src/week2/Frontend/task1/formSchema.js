const formSchema = {
  title: "User Registration",
  fields: [
    { label: "Name", name: "name", type: "text", required: true },
    //{ label: "Id No", name: "id", type: "number" },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "Age", name: "age", type: "number" },
    { label: "Gender", name: "gender", type: "select", options: ["Male", "Female", "Other"] },
    { label: "Subscribe", name: "subscribe", type: "checkbox" }
  ]
};

export default formSchema;