import PropTypes from "prop-types";

export default {
  basics: {
    name: "Sai Chatla",
    label: "Quant Research Intern",
    picture: "https://gdurl.com/GF9U",
    email: "erlich@piedpiper.com",
    phone: "1 (912) 555-4321",
    location: {
      address: "2712 Broadway St",
      postalCode: "94115",
      city: "San Francisco",
      countryCode: "USA",
      region: "California",
    },
    profiles: [],
  },
  work: [
    {
      company: "Pied Piper",
      position: "CEO",
      website: "http://piedpiper.com",
      startDate: "2013-01-01",
      endDate: "2014-01-01",
      summary:
        "Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.",
      highlights: [],
    },
    {
      company: "Pied Piper",
      position: "CEO",
      website: "http://piedpiper.com",
      startDate: "2013-01-01",
      endDate: "2014-01-01",
      summary:
        "Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.",
      highlights: [],
    },
    {
      company: "Pied Piper",
      position: "CEO",
      website: "http://piedpiper.com",
      startDate: "2013-01-01",
      endDate: "2014-01-01",
      summary:
        "Lorem ipsum dolor sit amet, meliore minimum percipitur ne per, eos lobortorquatos contentiones cu. Vero assum viris ne ius, ne mollis disputando mel. Ex senserit iracundia nec. Tale oblique mea id, exerci delenit no usu. Id vix cetero verear. Cu eum paulo platonem.Eum quem prodesset no, sit id tollit tamquam veritus. At vis novum dolorum. An usudolor habemus conclusionemque, mei ei mazim sententiae, diam commodo assentior melid. Et commune efficiendi ullamcorper eos, ad his atqui commodo.",
      highlights: [],
    },
  ],
  education: [
    {
      institution: "Berkeley College",
      area: "Software Development",
      studyType: "B.S. in Computer Science (incompleted)",
      startDate: "2005-08",
      endDate: "2006-01",
      gpa: "4.0 (presumed)",
      courses: [],
    },
    {
      institution: "Reed College",
      area: "Software Development",
      studyType: "Bachelor (incomplete)",
      startDate: "2003-08",
      endDate: "2004-05",
      gpa: "2.7",
      courses: [],
    },
    {
      institution: "Hampshire College",
      area: "Anthropology",
      studyType: "Bachelor (incomplete)",
      startDate: "2003-05",
      endDate: "2002-08",
      gpa: "2.5",
      courses: [],
    },
  ],
  awards: [],
  publications: [
    {
      name: "Is Erlich Bachman the Dumbest Man in Tech",
      publisher: "Coderag",
      releaseDate: "2016-06-22",
      website:
        "http://www.coderag.com/is-erlich-bachman-the-dumbest-man-in-tech/",
      summary: "CJ Cantwells feature of Erlich Bachman",
    },
    {
      name: "How Will Silicon Valley Kill Off Erlich Bachman",
      publisher: "Vulture",
      releaseDate: "2017-05-31",
      website:
        "http://www.vulture.com/2017/05/silicon-valley-erlich-bachman-tj-miller.html",
      summary: "",
    },
  ],
  skills: [
    {
      name: "Incubating",
      level: "95",
      keywords: [
        "Managing Subordinates: At [pied](./) piper we strived to meet all of our incubator needs",
        "Evicting Jian Yang",
      ],
    },
    {
      name: "Hex Arithmetic",
      level: "90",
      keywords: ["9 * F = fleventy-five"],
    },
    {
      name: "Web Development",
      level: "37",
      keywords: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "Hydroponic Horticulture",
      level: "75",
      keywords: [
        "Garage Gardening: experienced at producing top quality 'produce'",
      ],
    },
    {
      name: "Style",
      level: "60",
      keywords: [
        "Clothes: black turtlenecks to maximize 'jobbiness'",
        "Kimonos: To assert power and relay awesomeness",
      ],
    },
    {
      name: "Negotiation",
      level: "45",
      keywords: [
        "Aggressive: Aggressive negotiation is they key to getting what you want",
      ],
    },
    {
      name: "Making Mistakes",
      level: "30",
      keywords: ["1993: I made a mistake by thinking that I made a mistake"],
    },
    {
      name: "Being Lame",
      level: "15",
      keywords: [
        "Jian Yang: This only happens when listening to his recipe for octupu",
      ],
    },
    {
      name: "Losing",
      level: "5",
      keywords: ["Kickball: I lost a kickball game once in elementary school"],
    },
  ],
  languages: [],
  interests: [],
};

export const locationType = PropTypes.shape({
  address: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  countryCode: PropTypes.string,
  region: PropTypes.string,
}).isRequired;

export const profileType = PropTypes.shape({
  network: PropTypes.string,
  username: PropTypes.string,
  url: PropTypes.string,
}).isRequired;

export const basicsType = PropTypes.shape({
  name: PropTypes.string,
  label: PropTypes.string,
  picture: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  summary: PropTypes.string,
  location: PropTypes.shape(locationType),
  profiles: PropTypes.arrayOf(profileType),
}).isRequired;

export const workType = PropTypes.arrayOf(
  PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    website: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const educationType = PropTypes.arrayOf(
  PropTypes.shape({
    institution: PropTypes.string,
    area: PropTypes.string,
    studyType: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    gpa: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const awardsType = PropTypes.arrayOf(
  PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    awarder: PropTypes.string,
    summary: PropTypes.string,
  })
).isRequired;

export const publicationsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    publisher: PropTypes.string,
    releaseDate: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string,
  })
).isRequired;

export const skillsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const languagesType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
  })
).isRequired;

export const interestsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export const resumeType = PropTypes.shape({
  basics: basicsType,
  work: workType,
  education: educationType,
  awards: awardsType,
  publications: publicationsType,
  skills: skillsType,
  languages: languagesType,
  interests: interestsType,
});
