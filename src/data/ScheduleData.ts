import type { Schedule } from '../index';

export const allData: Schedule = [
  {
    daynum: '1',
    title: '',
    activities: [
      {
        name: 'Welcome',
        time: '10:00AM - 10:15AM',
        duration: '15',
        actType: 'coreskill',
        links: [],
      },
      {
        name: 'AI Conversation Starter',
        time: '10:15AM - 10:30AM',
        duration: '15',
        actType: 'coreskill',
        links: [
          {
            displayText: 'Presentation',
            linkURL:
              'https://docs.google.com/presentation/d/1O3ne2BzsXxbRvUMS74WEJ5CVJ8mDG3O6UraCXKACeXg/edit?usp=drive_link',
          },
        ],
      },
      {
        name: 'Exploring AI',
        time: '10:30AM - 10:45AM',
        duration: '15',
        actType: 'lecture',
        links: [
          {
            displayText: 'Presentation',
            linkURL:
              'https://docs.google.com/presentation/d/1eB4ilBVQZYEQPZdD63EH3x36faX3ffMuuuX7_5TbEkc/edit?usp=drive_link',
          },
        ],
      },
      {
        name: 'What Can ChatGPT Do?',
        time: '10:45AM - 11:15AM',
        duration: '30',
        actType: 'lecture',
        links: [
          {
            displayText: 'Exploration Guide',
            linkURL:
              'https://docs.google.com/document/d/1C6ZczoQN8QtGNyutH4nLnS6PFNVA5prloPM6LioFCq8/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'What Can ChatGPT Do? ',
        time: '11:15AM - 11:30AM',
        duration: '15',
        actType: 'codealong',
        links: [
          {
            displayText: 'Project',
            linkURL:
              'https://docs.google.com/document/d/1y7rqDPwvt74TBu3aMUC5ZmSzVwzB5A0l_dHzJPSvUr4/copy?title=Project:%20What%20Can%20ChatGPT%20Do??',
          },
        ],
      },
      { name: 'BREAK', time: '11:30AM - 11:45AM', duration: '15', actType: 'misc', links: [] },
      {
        name: "What Can't ChatGPT Do?",
        time: '11:45AM - 12:15PM',
        duration: '30',
        actType: 'lecture',
        links: [
          {
            displayText: 'Exploration Guide',
            linkURL:
              'https://docs.google.com/document/d/1DZM_xYAi87c-xFZQD_x-sQH63mYjZk70Qwu5cAZDu0M/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'Enhancing Learning with ChatGPT',
        time: '12:15PM - 12:45PM',
        duration: '30',
        actType: 'lecture',
        links: [
          {
            displayText: 'Exploration Guide',
            linkURL:
              'https://docs.google.com/document/d/15_xCgB0vXmHvo_UfxCeib6hZbK_Tofs1lauzpikOXyQ/edit?usp=sharing',
          },
        ],
      },
      {
        name: "ChatGPT Dos and Don't's",
        time: '12:45PM - 01:00PM',
        duration: '15',
        actType: 'lecture',
        links: [
          {
            displayText: 'Handout',
            linkURL:
              'https://drive.google.com/file/d/1YuwlFfrF8Hm2gEQU3RROnPt8c1A6uHCB/view?usp=sharing',
          },
        ],
      },
    ],
  },
  {
    daynum: '2',
    title: '',
    activities: [
      {
        name: 'AI Team Building',
        time: '10:00AM - 10:30AM',
        duration: '30',
        actType: 'coreskill',
        links: [],
      },
      {
        name: 'AI Classifiers',
        time: '10:30AM - 10:45AM',
        duration: '15',
        actType: 'lecture',
        links: [
          {
            displayText: 'Presentation',
            linkURL:
              'https://docs.google.com/presentation/d/1XrvFGI1U_bEmNP_L0QmTL0fBFKqtHkTpONXNHTvy7eY/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'Train Your Own AI',
        time: '10:45AM - 11:45AM',
        duration: '60',
        actType: 'codealong',
        links: [
          {
            displayText: 'Project',
            linkURL:
              'https://docs.google.com/presentation/d/1xzWLQsRJ7RSEC60Yc3HEoo29rOjPxXr-b3284WCIoYs/edit?usp=sharing',
          },
        ],
      },
      { name: 'BREAK', time: '11:45AM - 12:00PM', duration: '15', actType: 'misc', links: [] },
      {
        name: 'AI Independent Research',
        time: '12:00PM - 12:30PM',
        duration: '30',
        actType: 'codealong',
        links: [
          {
            displayText: 'Activity',
            linkURL:
              'https://docs.google.com/presentation/d/1z4XBV1jQq00XLkhOmWMPLPr_7OcqdnsZalfWMeypLto/edit?usp=sharing',
          },
          {
            displayText: 'Padlet Board',
            linkURL:
              'https://padlet.com/alexandersmith49/ai-independent-research-padlet-board-cwgo9nb8fyltt42x',
          },
        ],
      },
      {
        name: 'Responsible Use of AI',
        time: '12:30PM - 12:45PM',
        duration: '15',
        actType: 'lecture',
        links: [
          { displayText: 'Presentation', linkURL: 'https://docs.google.com/presentation/d/1GRict0qcuUj5hfXS1AYmwPgLHIZNr2t29GJOC6CmJqQ/' },
          {
            displayText: 'Handout',
            linkURL:
              'https://drive.google.com/file/d/1q9Yx6U4HZlON9yz7JcBaYn02L_5kQvko/',
          },
        ],
      },
      {
        name: 'Wrap Up',
        time: '12:45PM - 01:00PM',
        duration: '15',
        actType: 'coreskill',
        links: [{ displayText: 'Survey', linkURL: 'https://form.typeform.com/to/RvZGbmKw' }],
      },
    ],
  },
];
