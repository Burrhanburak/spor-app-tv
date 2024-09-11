import { prisma } from "@/lib/db";
import SportDetail from "@/components/home/SportDetail";

async function getSportData(id: string) {
  const sport = await prisma.sport.findUnique({
    where: { id: parseInt(id) },
  });
  return sport;
}

export default async function SportPage({
  params,
}: {
  params: { id: string };
}) {
  const sport = await getSportData(params.id);

  if (!sport) {
    return <div>Spor etkinliği bulunamadı</div>;
  }

  return <SportDetail sport={sport} />;
}
