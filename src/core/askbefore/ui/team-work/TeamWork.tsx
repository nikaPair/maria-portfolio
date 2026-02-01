import Image from "next/image";
import Link from "next/link";
import styles from "./TeamWork.module.css";

const teamMembers = [
  {
    avatar: "/images/askbefore/ksenya.png",
    description:
      "Ксения имеет опыт фронтенд-разработки, у нее сильное системное мышление. В стартапе она занималась порталом для клиник, потому что сложные интерфейсы и длинные сценарии требовали детальной проработки UX.",
    link: "https://instagram.com/EsLichtne",
    linkText: "EsLichtne",
  },
  {
    avatar: "/images/askbefore/aynur.png",
    description:
      "Айнур имеет прекрасный эстетический вкус, способна долго концентрироваться без замыливания глаза. Она работала над визуализацией карты и сценариями поиска, где больше требовалась эмпатия и навыки UI.",
    link: "https://instagram.com/product_designer_BA",
    linkText: "product_designer_BA",
  },
];

export default function TeamWork() {
  return (
    <section id="Работа с командой" className={styles.section}>
      <h4 className={styles.title}>Работа с командой</h4>

      <p className={styles.description}>
        Я курировала двух девушек-дизайнеров и распределяла задачи с учётом
        сильных сторон каждой.
      </p>

      {/* Team Cards */}
      <div className={styles.cardsWrapper}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={member.avatar}
              alt=""
              width={56}
              height={56}
              className={styles.avatar}
            />
            <p className={styles.cardText}>{member.description}</p>
            <Link
              href={member.link}
              target="_blank"
              className={styles.cardLink}
            >
              {member.linkText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
