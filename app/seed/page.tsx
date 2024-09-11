import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

export default function SeedDatabase() {
  async function postData() {
    "use server";
    await prisma.sport.createMany({
      data: [
        {
          id: 0,
          title: "Galatasaray 2-1 Fenerbahçe | Süper Lig ",
          age: 0,
          duration: 1.5,
          overview:
            "Süper Lig'in en büyük derbilerinden biri olan Galatasaray ile Fenerbahçe arasındaki mücadele. Türk futbolunun en eski ve en çekişmeli derbilerinden biri olan bu maçta Galatasaray, Fenerbahçe'yi 2-1 mağlup etti.",
          videoSource: "",
          imageString:
            "https://images2.minutemediacdn.com/image/upload/c_crop,w_6546,h_3682,x_0,y_0/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_tr_international_web%2F01h5nebkngj05cdfwxfq.jpg",
          release: 2023,
          category: "Süper Lig",
          youtubeString:
            "https://www.youtube.com/embed/aDPw0yU4tmA?si=cfvCkY3QfhT1bNF_",
        },
        {
          id: 1,
          title: "Beşiktaş - Trabzonspor | Süper Lig ",
          age: 0,
          duration: 1.4,
          overview:
            "Beşiktaş ve Trabzonspor'un Süper Lig'deki kritik karşılaşması. İki Karadeniz ekibi arasındaki bu mücadele 1-1 beraberlikle sonuçlandı.",
          videoSource: "",
          imageString:
            "https://images2.minutemediacdn.com/image/upload/c_crop,w_5352,h_3010,x_0,y_456/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_tr_international_web%2F01j3mc4zndh513pzqj5g.jpg",
          release: 2023,
          category: "Süper Lig",
          youtubeString:
            "https://www.youtube.com/embed/stXku2pWf9s?si=fntbFqgZPQLjixC2",
        },

        {
          id: 2,
          title: "Fenerbahçe 3-2 Antalya Demirspor | Süper Lig Maç",
          age: 0,
          duration: 1.45,
          imageString:
            "https://iaahbr.tmgrup.com.tr/95effc/0/0/0/0/0/0?u=https://iahbr.tmgrup.com.tr/2023/09/17/fenerbahce-antalyaspor-maci-canli-super-lig-fb-antalyaspor-maci-kesintisiz-full-hd-4k-ucretsiz-izleme-ekrani-s-1694956418454.jpg&mw=616",
          overview:
            "Fenerbahçe'nin Antalya Demirspor ile Süper Lig'de oynadığı önemli maç. Fenerbahçe, zorlu mücadeleyi 3-2 kazanmayı başardı.",
          release: 2023,
          videoSource: "",
          category: "Süper Lig",
          youtubeString:
            "https://www.youtube.com/watch?v=VcXVXpJ9sm0&ab_channel=beINSPORTSAr%C5%9Fiv",
        },
        {
          id: 3,
          title: "Trabzonspor 2-2 Galatasaray | Süper Lig Maç Özeti",
          age: 0,
          duration: 1.4,
          imageString:
            "https://image.hurimg.com/i/hurriyet/75/750x422/613e4b704e3fe1116c7265f7.jpg",
          overview:
            "Trabzonspor ve Galatasaray'ın Süper Lig'deki karşılaşması. Bu iki köklü kulüp arasındaki rekabet, 2-2'lik beraberlikle sonuçlandı.",
          release: 2023,
          videoSource: "",
          category: "Süper Lig",
          youtubeString:
            "https://www.youtube.com/embed/cYvYdPxoUCQ?si=2SwGQksb1BzwLI12",
        },
      ],
    });
  }

  return (
    <div className="m-5">
      <form action={postData}>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
