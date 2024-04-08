
import Link from "next/link";
import games from "@/data/games";
import GameItem from "../components/GameItem";

export default function Games() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Game List page</h1>
      <div className="mt-6 p-4">
        {games.map((game) => (
          <Link  key={game.id} href={`/games/${game.id}`} className="hover:text-blue-500">
            <GameItem title={game.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
