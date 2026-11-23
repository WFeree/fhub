export type Lang = "en" | "hu"

const skills = [
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", title: "Figma" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", title: "Git" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", title: "React" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", title: "TypeScript" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg", title: "NextJS" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", title: "Python" },
  { logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", title: "Django" },
]

const en = {
  ui: {
    nav: { skills: "Skills", experience: "Experience", about: "About", contact: "Contact" },
    openMenu: "Open menu",
    logoAlt: "logo",
    heroTagline: "building useful things.",
    learnMore: "Learn more about me",
    skillsTitle: "Skillset",
    experienceTitle: "Experience and education",
    accoladesTitle: "My Accolades",
    aboutTitle: "How I work",
    contactTitle: "Have a project or role in mind? Let's talk.",
  },
  profile: {
    name: "Ferenc Wágner",
    role: "Full-stack developer",
    intro: "I build fast, accessible web apps for small teams and turn messy workflows into tools people enjoy using.",
    location: "Debrecen, Hungary",
    github: "https://github.com/WFeree",
    linkedin: "https://www.linkedin.com/in/example",
  },
  skills,
  jobs: [
    { period: "Future", title: "Computer Science Engineering BSc, University of Debrecen",
      text: "Built booking and invoicing sites for local businesses, and mentored two interns.",
      image: "unideb.png" },
    { period: "2026 - 2027", title: "ITalent Mentor Programme",
      text: "Own the customer dashboard end to end. Moved the codebase to TypeScript and halved page load times." },
    { period: "2022 - 2027", title: "DSZC Mechwart András Technical School of Engineering and Information Technology",
      text: "Software developer and tester technician student",
      image: "gepipari.png" },
  ],
  about: [
    "I like products where a small improvement saves someone real time. Most of my work sits between design and engineering: sketching the idea, then building it properly.",
    "Outside of work I hike the Hortobágy, repair old bikes and run a monthly board game night.",
  ],
  strengths: [
    "Clear written communication",
    "Accessibility from the first sketch",
    "Shipping small, then iterating",
    "Fluent in Hungarian and English",
  ],
  accolades: [
    { image: "mkosz.png", title: "Basketball Referee",
      subtext: "Youngest NB2 basketball referee in the 2026/2027 season" },
    { image: "fiba.svg", title: "FIBA Volunteer",
      subtext: "Signed letter of appreciation from both LOC and FIBA Basketball Champions League CEO" },
  ],
}

const hu: typeof en = {
  ui: {
    nav: { skills: "Készségek", experience: "Tapasztalat", about: "Rólam", contact: "Kapcsolat" },
    openMenu: "Menü megnyitása",
    logoAlt: "logó",
    heroTagline: "aki hasznos dolgokat épít.",
    learnMore: "Tudj meg többet rólam",
    skillsTitle: "Készségek",
    experienceTitle: "Tapasztalat és tanulmányok",
    accoladesTitle: "Elismeréseim",
    aboutTitle: "Hogyan dolgozom",
    contactTitle: "Van egy projektötleted vagy állásajánlatod? Beszéljünk!",
  },
  profile: {
    name: "Wágner Ferenc",
    role: "Full-stack fejlesztő",
    intro: "Gyors, akadálymentes webalkalmazásokat építek kis csapatoknak, és a kusza munkafolyamatokból olyan eszközöket készítek, amelyeket az emberek szívesen használnak.",
    location: "Debrecen, Magyarország",
    github: "https://github.com/WFeree",
    linkedin: "https://www.linkedin.com/in/example",
  },
  skills,
  jobs: [
    { period: "Jövő", title: "Mérnökinformatikus BSc, Debreceni Egyetem",
      text: "Helyi vállalkozásoknak foglalási és számlázó oldalakat építettem, és két gyakornokot mentoráltam.",
      image: "unideb.png" },
    { period: "2026 - 2027", title: "ITalent Mentorprogram",
      text: "A vásárlói irányítópultot az elejétől a végéig én viszem. A kódbázist TypeScriptre állítottam át, és felére csökkentettem az oldalbetöltési időt." },
    { period: "2022 - 2027", title: "DSZC Mechwart András Gépipari és Informatikai Technikum",
      text: "Szoftverfejlesztő és -tesztelő technikus tanuló",
      image: "gepipari.png" },
  ],
  about: [
    "Olyan termékeket szeretek, ahol egy apró fejlesztés valódi időt spórol meg valakinek. A munkám nagy része a dizájn és a fejlesztés határán van: először megvázolom az ötletet, aztán rendesen megépítem.",
    "Munka mellett a Hortobágyon túrázom, régi biciklit javítok, és havonta társasjáték-estet szervezek.",
  ],
  strengths: [
    "Világos írásbeli kommunikáció",
    "Akadálymentesség az első vázlattól",
    "Kis lépésekben szállítani, aztán finomítani",
    "Magyarul és angolul is folyékonyan beszélek",
  ],
  accolades: [
    { image: "mkosz.png", title: "Kosárlabda-játékvezető",
      subtext: "A legfiatalabb NB2-es kosárlabda-játékvezető a 2026/2027-es szezonban" },
    { image: "fiba.svg", title: "FIBA önkéntes",
      subtext: "Aláírt köszönőlevél a helyi szervezőbizottságtól és a FIBA Basketball Champions League vezérigazgatójától" },
  ],
}

export const content = { en, hu }