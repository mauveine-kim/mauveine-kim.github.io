/*
 * Camera Department Projects
 * ==========================
 *
 * How to add a new project:
 *   Copy a block below, paste it at the end (before the ]),
 *   and fill in your details. Don't forget the comma after }.
 *
 *   Fields:
 *     link:       URL to the video (YouTube, Instagram, Behance, etc.)
 *     thumbnail:  (Optional) custom thumbnail filename in assets/thumbnails/
 *                 If omitted, YouTube thumbnails are auto-fetched.
 *                 Required for Instagram, Behance, or unreleased projects.
 *     category:   Genre (e.g. "Short Film", "Documentary")
 *     title:      Project title
 *     position:   Your role
 *     credits:    Producer/Director credit
 *     award:      (Optional) Award info — delete this line if none
 *     unreleased: (Optional) set to true for unreleased projects (no link, shows "Unreleased" badge)
 *     status:     (Optional, unreleased only) e.g. "In Post-Production" — shown on thumbnail hover
 *
 *   Example (released):
 *   {
 *     link:      "https://youtu.be/XXXXXXXXXXX",
 *     category:  "Short Film",
 *     title:     "My Film",
 *     position:  "Director of Photography",
 *     credits:   "Produced by Someone"
 *   },
 *
 *   Example (unreleased):
 *   {
 *     unreleased: true,
 *     status:     "In Post-Production",
 *     thumbnail:  "my-film-thumb.jpg",
 *     category:   "Feature Film",
 *     title:      "Upcoming Project",
 *     position:   "Director of Photography",
 *     credits:    "Produced by Someone"
 *   },
 */

var defined_dop_projects = [

  {
    unreleased:true,
    status:    "In Post-Production",
    thumbnail: "TOP.jpg",
    category:  "Short Documentary",
    title:     "For a Taste of Persia",
    position:  "Director of Photography",
    credits:   "Produced by Yzael Sharif, Directed by Ela Gorkay"
  },

  {
    link:      "https://youtu.be/qgGrbOM78Mg?si=q2Sys5EyB8931tLc",
    category:  "Short Film",
    title:     "Unseen Frames",
    position:  "Director of Photography",
    credits:   "Produced by Ian Fleming and Karen Ng, Directed by Eliza Salnikova",
    award:     "2025 UAL BAFTV Best Lighting Winner"
  },

  {
    link:      "https://www.instagram.com/p/DCjAwwPobUj/",
    thumbnail: "IC.jpg",
    category:  "Vertical Short-Form Series",
    title:     "I Cook",
    position:  "Director of Photography & Supervising Editor",
    credits:   "Produced by Sunyu Kim, Directed by Heather Jarek and Eliza Salnikova"
  },

  {
    link:      "https://youtu.be/BSrgDQrSE0s?si=onwEPyoDvhTue9fj",
    category:  "Short Film",
    title:     "The Void",
    position:  "Director of Photography",
    credits:   "Produced and Directed by Eliza Salnikova"
  },

  {
    link:      "https://www.behance.net/gallery/197468023/MarginaliaAlice",
    thumbnail: "MA.jpg",
    category:  "3D Animation",
    title:     "MarginAlice",
    position:  "Director of Photography (Live-Action)",
    credits:   "Produced and Directed by Yolanda Zhang, Tiffany Otoyo, and Vallerie Toumahu"
  },

  {
    link:      "https://youtu.be/CuuKFYdM7F8?si=e0v_fHnwZq9oV-lZ",
    thumbnail: "DIZ.jpg",
    category:  "Advertisement",
    title:     "Dizziak Advertisement",
    position:  "Director of Photography",
    credits:   "Produced by Marco Capelli, et al., Directed by Pratham Bhatia"
  },
  
  {
    link:      "https://youtu.be/-jH-Wox2sc8?si=W-ZkBdCRok4IvFK9",
    category:  "Short Film",
    title:     "A New World",
    position:  "Director of Photography",
    credits:   "Produced by Reuben Carroll-Reid, Directed by Eliza Salnikova"
  },
  
  {
    unreleased:true,
    status:    "In Production",
    thumbnail: "ER.jpg",
    category:  "Feature-Length Documentary",
    title:     "Elephant Remembers",
    position:  "Camera, Social Media, & Editor",
    credits:   "Produced by Fotis Begklis",
    award:     "2025 Arts Awards Student and Staff Collaboration of the Year"
  },
  
  {
    link:      "https://youtu.be/WddHcq3gxCM?si=jfFQOdGJZCSvwT4o",
    category:  "Live-Concert",
    title:     "Dog Saints at The George Tavern",
    position:  "Director of Photography",
    credits:   "Produced by Sunyu Kim"
  },

  {
    link:      "https://youtu.be/4MdxOwCse2o?si=O5n3rJzKMRvhElys",
    category:  "Short Documentary",
    title:     "The London I Saw",
    position:  "Extra Footage Camera Operator",
    credits:   "Produced by Eliza Salnikova",
    award:     "Royal Television Society Student TV Awards 2025 - Editing"
  },
  
  {
    link:      "https://youtu.be/19qQ3qHKrDU?si=0PH7bsf5kWeyUl-A",
    category:  "Review",
    title:     "영화같은 동영상을 위한 도구 - 모먼트(Moment) 애너모픽 렌즈 리뷰",
    position:  "Director of Photography & Editor",
    credits:   "Produced, Written, and Directed by Sunyu Kim",
  },
  
  {
    link:      "https://youtu.be/q6qsEIt9rYg?si=OWqCJeLcy5PpmqkC&t=5",
    category:  "Advertisement",
    title:     "BICC Promotional Film",
    position:  "Director of Photography & Editor",
    credits:   "Produced by Chris Berwick, Written and Directed by Sunyu Kim"
  }

];
