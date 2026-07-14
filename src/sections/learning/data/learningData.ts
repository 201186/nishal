export type LearningActivity = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type LearningSubject = {
  id: string;
  name: string;
  icon: string;
  activities: LearningActivity[];
};

export type LearningStandard = {
  id: string;
  name: string;
  subjects: LearningSubject[];
};

export const learningData: LearningStandard[] = [
  {
    id: "standard-1",
    name: "ધોરણ 1",
    subjects: [
      {
  id: "gujarati",
  name: "ગુજરાતી",
  icon: "📖",
  activities: [
    {
      id: "kakko",
      title: "ગુજરાતી કક્કો",
      description: "ગુજરાતી મૂળાક્ષરો ઓળખો, વાંચો અને શીખો",
      icon: "અ",
    },
  ],
},
      
      {
        id: "maths",
        name: "ગણિત",
        icon: "🔢",
       activities: [
  {
    id: "numbers-1-to-10",
    title: "ગુજરાતી અંક ૧ થી ૧૦",
    description: "ગુજરાતી અંક ઓળખો અને શબ્દોમાં વાંચતા શીખો",
    icon: "૧૨૩",
  },
  {
  id: "numbers-1-to-100",
  title: "ગુજરાતી અંક ૧ થી ૧૦૦",
  description: "૧ થી ૧૦૦ સુધીના ગુજરાતી અંક અને શબ્દો શીખો",
  icon: "૧૦૦",
},
],
      },
      {
        id: "english",
        name: "English",
        icon: "🔤",
        activities: [],
      },
    ],
  },

  {
    id: "standard-2",
    name: "ધોરણ 2",
    subjects: [
      {
        id: "gujarati",
        name: "ગુજરાતી",
        icon: "📖",
        activities: [],
      },
      {
        id: "maths",
        name: "ગણિત",
        icon: "🔢",
        activities: [
  {
  id: "numbers-101-to-200",
  title: "૧૦૧ થી ૨૦૦ સુધીના અંક",
  description: "ત્રણ અંકની સંખ્યાઓ વાંચતા અને લખતા શીખો",
  icon: "૧૦૨",
},
],
      },
      {
        id: "english",
        name: "English",
        icon: "🔤",
        activities: [],
      },
    ],
  },

  {
    id: "standard-3",
    name: "ધોરણ 3",
    subjects: [
      {
        id: "gujarati",
        name: "ગુજરાતી",
        icon: "📖",
        activities: [],
      },
      {
        id: "maths",
        name: "ગણિત",
        icon: "🔢",
        activities: [],
      },
      {
        id: "english",
        name: "English",
        icon: "🔤",
        activities: [],
      },
      {
        id: "environment",
        name: "પર્યાવરણ",
        icon: "🌿",
        activities: [],
      },
    ],
  },

  {
    id: "standard-4",
    name: "ધોરણ 4",
    subjects: [
      {
        id: "gujarati",
        name: "ગુજરાતી",
        icon: "📖",
        activities: [],
      },
      {
        id: "maths",
        name: "ગણિત",
        icon: "🔢",
        activities: [],
      },
      {
        id: "english",
        name: "English",
        icon: "🔤",
        activities: [],
      },
      {
        id: "environment",
        name: "પર્યાવરણ",
        icon: "🌿",
        activities: [],
      },
    ],
  },

  {
    id: "standard-5",
    name: "ધોરણ 5",
    subjects: [
      {
        id: "gujarati",
        name: "ગુજરાતી",
        icon: "📖",
        activities: [],
      },
      {
        id: "maths",
        name: "ગણિત",
        icon: "🔢",
        activities: [],
      },
      {
        id: "english",
        name: "English",
        icon: "🔤",
        activities: [],
      },
      {
        id: "environment",
        name: "પર્યાવરણ",
        icon: "🌿",
        activities: [],
      },
    ],
  },

  {
    id: "standard-6",
    name: "ધોરણ 6",
    subjects: [
      {
        id: "gujarati",
        name: "ગુજરાતી",
        icon: "📖",
        activities: [],
      },
      {
  id: "maths",
  name: "ગણિત",
  icon: "🔢",
  activities: [
    
  ],
},
      {
        id: "english",
        name: "English",
        icon: "🔤",
        activities: [],
      },
      {
        id: "hindi",
        name: "હિન્દી",
        icon: "📝",
        activities: [],
      },
      {
        id: "science",
        name: "વિજ્ઞાન",
        icon: "🔬",
        activities: [],
      },
      {
        id: "social-science",
        name: "સામાજિક વિજ્ઞાન",
        icon: "🌍",
        activities: [],
      },
      {
        id: "sanskrit",
        name: "સંસ્કૃત",
        icon: "🕉️",
        activities: [
          {
            id: "animals",
            title: "પ્રાણીઓનાં નામ",
            description: "સંસ્કૃત અને ગુજરાતીમાં પ્રાણીઓનાં નામ શીખો",
            icon: "🐾",
          },
        ],
      },
    ],
  },

  {
    id: "standard-7",
    name: "ધોરણ 7",
    subjects: [],
  },

  {
    id: "standard-8",
    name: "ધોરણ 8",
    subjects: [],
  },
];