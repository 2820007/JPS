export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  tags: string[];
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Product Designer",
    company: "Nimbus Labs",
    location: "Remote",
    type: "Full time",
    tags: ["Figma", "Design systems"],
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "Fieldstone",
    location: "Kathmandu, Nepal",
    type: "Full time",
    tags: ["Node.js", "PostgreSQL"],
  },
  {
    id: "3",
    title: "Growth Marketer",
    company: "Loop & Co",
    location: "Hybrid",
    type: "Contract",
    tags: ["SEO", "Content"],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alina Sharma",
    role: "Product Designer at Nimbus Labs",
    quote:
      "I stopped rewriting my resume for every application. JPS matched me to roles I actually fit.",
  },
  {
    id: "2",
    name: "Rohan Bista",
    role: "Backend Engineer at Fieldstone",
    quote:
      "Found a role in two weeks that actually used the skills I care about, not just my job title.",
  },
  {
    id: "3",
    name: "Priya Gurung",
    role: "Growth Marketer at Loop & Co",
    quote:
      "The skills-first matching meant I finally got interviews for the work I'm good at.",
  },
  {
    id: "4",
    name: "Sujan Thapa",
    role: "Frontend Engineer at Vantage",
    quote:
      "No more keyword stuffing. I just listed what I can do and the matches were spot on.",
  },
  {
    id: "5",
    name: "Meera Rai",
    role: "Data Analyst at Northbeam",
    quote:
      "JPS felt like the first job board that actually understood what I was looking for.",
  },
];