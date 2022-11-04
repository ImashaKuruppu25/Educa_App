export const classes = [
  {
    id: "001",
    title: "Primary Student",
    subjects: [
      {
        subjectId: "s001",
        subjectName: "English",
        courses: [
          {
            courseId: "c001",
            courseName: "Grammer",
            courseImg: "img001.png",
            courseCompletion: 4,
            courseDescription:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse dolor etiam sed ante donec quis sapien. Malesuada rhoncus nullam eleifend lorem egestas mauris massa massa",
            courseDuration: "12h 35m",
            courseChapters: [
              {
                chapterId: "chapter001",
                chapterName: "Chapter 1",
                chpterContent:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper et eu, commodo, lacus. Semper urna nunc dictum duis adipiscing aenean scelerisque in porta. Magna viverra auctor tortor elementum. Arcu cras egestas erat condimentum mattis quam justo.",
              },
              {
                chapterId: "chapter002",
                chapterName: "Chapter 2",
                chapterContent:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper et eu, commodo, lacus. Semper urna nunc dictum duis adipiscing aenean scelerisque in porta. Magna viverra auctor tortor elementum. Arcu cras egestas erat condimentum mattis quam justo.",
              },
            ],
          },
          {
            courseId: "c002",
            courseName: "Spoken",
            courseImg: "img001.png",
            courseCompletion: 4,
            courseDescription:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse dolor etiam sed ante donec quis sapien. Malesuada rhoncus nullam eleifend lorem egestas mauris massa massa",
            courseDuration: "12h 35m",
            courseChapters: [
              {
                chapterId: "chapter001",
                chapterName: "Chapter 1",
                chpterContent:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper et eu, commodo, lacus. Semper urna nunc dictum duis adipiscing aenean scelerisque in porta. Magna viverra auctor tortor elementum. Arcu cras egestas erat condimentum mattis quam justo.",
              },
              {
                chapterId: "chapter002",
                chapterName: "Chapter 2",
                chapterContent:
                  "Lorem ipsum dolor sit ame, consectetur adipiscing elit. Semper et eu, commodo, lacus. Semper urna nunc dictum duis adipiscing aenean scelerisque in porta. Magna viverra auctor tortor elementum. Arcu cras egestas erat condimentum mattis quam justo.",
              },
            ],
          },
        ],
      },

      //same as above subject
      { subjectId: "s002", subjectName: "Music" },
      { subjectId: "s003", subjectName: "Dancing" },
    ],
  },
  {
    //same as above class
    id: "002",
    title: "Secondary Student",
    subjects: [
      { subjectId: "s001", subjectName: "Maths" },
      { subjectId: "s002", subjectName: "Science" },
      { subjectId: "s003", subjectName: "History" },
    ],
  },
  {
    id: "003",
    title: "Odinary Level Student",
    subjects: [
      { subjectId: "s001", subjectName: "Science" },
      { subjectId: "s002", subjectName: "Art" },
      { subjectId: "s003", subjectName: "Sinhala" },
    ],
  },
  {
    id: "004",
    title: "Advance Level Student",
    subjects: [
      { subjectId: "s001", subjectName: "Accounting" },
      { subjectId: "s002", subjectName: "Business Studies" },
      { subjectId: "s003", subjectName: "Economics" },
    ],
  },
];
