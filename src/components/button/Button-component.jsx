import { Button } from "./styles";

export default function ButtonLink({ text, link }) {
  return (
    <>
      <a href={link}>
        <Button>{text}</Button>
      </a>
    </>
  );
}
