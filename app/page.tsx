import { Hello } from "./hello";

function page() {
  console.log("Hello from server component");

  return (
    <div>
      <h1>Hello</h1>

      <Hello />
    </div>
  );
}

export default page;
