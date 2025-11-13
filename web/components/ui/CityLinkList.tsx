import Link from "next/link";
import { cities } from "@/lib/routes";

const formatCity = (slug: string) =>
  slug
    .split("-")
    .map((piece) => piece[0].toUpperCase() + piece.slice(1))
    .join(" ");

export default function CityLinkList({
  limit = 5,
}: {
  limit?: number;
}) {
  const list = cities.slice(0, limit);
  return (
    <>
      {list.map((city, index) => (
        <span key={city}>
          <Link className="text-aqua" href={`/service-areas/${city}`}>
            {formatCity(city)}
          </Link>
          {index < list.length - 1 ? ", " : ""}
        </span>
      ))}
    </>
  );
}
