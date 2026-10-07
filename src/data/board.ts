export interface BoardMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
  order: number;
}

export const boardOfDirectors: BoardMember[] = [
  {
    id: "sanka-sammana",
    name: "Sanka Sammana",
    role: "President / FIAP Country Liaison Officer",
    email: "sankasammana@gmail.com",
    phone: "+94 77 776 8015",
    image: "/assets/images/bod/Sanka-Sammana.jpg",
    order: 1
  },
  {
    id: "shantha-gunaratne",
    name: "Shantha Gunaratne",
    role: "Executive Director",
    email: "gunaratneshantha@gmail.com",
    phone: "+94 777 519 679",
    image: "/assets/images/bod/02-Shantha.jpg",
    order: 2
  },
  {
    id: "thushara-samarakoon",
    name: "Thushara Samarakoon",
    role: "Director Finance",
    email: "td.samarakoone@yahoo.com",
    phone: "+94 71 489 4848",
    image: "/assets/images/bod/03-Thushara.jpg",
    order: 3
  },
  {
    id: "saliya-liyanage",
    name: "Saliya Liyanage",
    role: "Director Registrar",
    email: "Saliyaliyanage79@gmail.com",
    phone: "+94 713 963 030",
    image: "/assets/images/bod/04-Saliya.jpg",
    order: 4
  },
  {
    id: "sisira-kumara",
    name: "Sisira Kumara",
    role: "Director Education",
    email: "sisira.ts@gmail.com",
    phone: "+94 717 189 038",
    image: "/assets/images/bod/Sisira-Kumara.jpg",
    order: 5
  },
  {
    id: "maduranga-abhayawardena",
    name: "Maduranga Abhayawardena",
    role: "Director Publications & Publicity",
    email: "maduranga.ab@gmail.com",
    phone: "+94 77 799 2429",
    image: "/assets/images/bod/06-Madhyranga.jpg",
    order: 6
  },
  {
    id: "chamara-ranathunga",
    name: "Chamara Ranathunga",
    role: "Director Exhibitions",
    email: "chamara.sa@gmail.com",
    phone: "+94 771 739 354",
    image: "/assets/images/bod/Chamara-Ranathunga.jpg",
    order: 7
  },
  {
    id: "upananda-senevirathna",
    name: "Upananda Senevirathna",
    role: "Director Social Services & Welfare",
    email: "upanandasenevirathna@gmail.com",
    phone: "+94 71 490 1200",
    image: "/assets/images/bod/08-Upananda.jpg",
    order: 8
  },
  {
    id: "rajitha-thilanka",
    name: "Rajitha Thilanka",
    role: "Director Development & Promotions",
    email: "rajithat1998@gmail.com",
    phone: "+94 71 470 4820",
    image: "/assets/images/bod/09-Rajitha.jpg",
    order: 9
  }
];

export const pastPresidents = [
  "Mr. Hilton Samarasinghe",
  "Prof. G L R De Silva",
  "Mr. L Dayananda",
  "Mr. J A C Jayasuriya",
  "Mr. A A N Amarasinghe",
  "Mr. Lal Hegoda",
  "Mr. H M R Perera",
  "Mr. Mervyn de S. Jayasinghe",
  "Mr. Wijaya Basnayake",
  "Mr. Kanchane Marasinghe",
  "Dr. Uditha G. Gunasekara",
  "Mr. Sunil Wickrama",
  "Mr. Mangala Edirisinghe",
  "Shantha Gunaratne"
];

export const honyExecutiveDirectors = [
  "Mr. Wilson Hegoda",
  "Mr. Dinton Jayasuriya",
  "Mr. T.R.W. Weralupitiya",
  "Mr. N.R. Abeysinghe",
  "Mr. T.S.T. de Silva",
  "Mr. Shantha Gunaratne",
  "Mr. Harsha Maduranga Jayasekara",
  "Mr. Wijaya Basnayake",
  "Mr. Saman Kulasooriya"
];
