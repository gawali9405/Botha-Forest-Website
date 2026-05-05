const navData = [
  {
    type: "link",
    label: "Home",
    path: "/",
  },
  {
    type: "dropdown",
    title: "Explore",
    items: [
      { label: "Safari", path: "/safari" },
      { label: "Dam & Nature", path: "/dam-nature" },
      { label: "Forest Info", path: "/forest-info" },
      { label: "Boating", path: "/boating" },
    ],
  },
  {
    type: "dropdown",
    title: "Stay",
    items: [
      { label: "FarmHouse", path: "/farmhouse" },
      { label: "Camping", path: "/camping" },
    ],
  },
  {
    type: "dropdown",
    title: "Culture",
    items: [
      { label: "Temples", path: "/temples" },
      { label: "Festivals", path: "/festivals" },
      { label: "School", path: "/school" },
      { label: "Foods", path: "/foods" },
    ],
  },
  {
    type: "dropdown",
    title: "Media",
    items: [
      { label: "Gallery", path: "/gallery" },
      { label: "Videos", path: "/videos" },
    ],
  },
  {
    type: "link",
    label: "Contact",
    path: "/contact",
  },
];

export default navData;