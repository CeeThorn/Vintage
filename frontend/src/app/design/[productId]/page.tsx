import { notFound } from "next/navigation";

interface Props {
  params: {
    productId: string;
  };
}

export default async function DesignPage({ params }: Props) {
  const productId = params.productId;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
  );

  if (!res.ok) return notFound();

  const product = await res.json();

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} />
    </div>
  );
}