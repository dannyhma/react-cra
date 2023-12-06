import { useParams } from "react-router";

export default function BlogDetail() {
  const urlParams = useParams();

  return (
    <>
      <h1>Blog Detail</h1>
      <p>Halo ini adalah detail {urlParams.slug}</p>
    </>
  );
}
