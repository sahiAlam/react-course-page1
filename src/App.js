import Button from "./components/Button";
import Form from "./components/Form";
import Image from "./components/Image";
import Input from "./components/Input";
import Text from "./components/Text";
import "./styles.css";

export default function App() {
  return (
    <>
      <div>
        <Button>Button</Button>
      </div>
      <div>
        <Image />
      </div>
      <div>
        <Input placeholder="Enter Something.." />
      </div>
      <div>
        <Text />
      </div>
      <div>
        <Form />
      </div>
    </>
  );
}
