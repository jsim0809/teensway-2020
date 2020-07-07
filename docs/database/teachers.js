const WORK_IMAGES = 'database/work_images';
const AVATARS = 'database/avatars';

module.exports = [
  {
    id: 0,
    title: 'Teaching Artist',
    name: 'Jeremy Sim',
    avatar: `${AVATARS}/profilepic_Jeremy.PNG`,
    bio: `Jeremy Sim is a teacher, writer, software engineer, and pluviophile. He is a graduate of Clarion West Writers Workshop, and the author of numerous short stories and graphic novels. He served as Teensway's Teaching Artist in 2019 and 2020. Like Luke Skywalker, he is known for drinking green milk from a jar.`,
  },
  {
    id: 1,
    title: 'Teaching Artist',
    name: 'Ruby Wang',
    avatar: `${AVATARS}/profilepic_RubytheFrog.jpg`,
    bio: `Ruby Wang is a graphic designer, illustrator, and dancer based in Seattle, Washington. She mostly likes to draw stick figures, trees, rocks, and grass. This is her second year teaching Teensway. Sometimes she feels like a frog.`,
    comicPages: [
      `${WORK_IMAGES}/ruby-01.jpg`,
      `${WORK_IMAGES}/ruby-02.jpg`,
      `${WORK_IMAGES}/ruby-03.PNG`,
    ],
  },
  {
    id: 2,
    title: 'Program Coordinator',
    name: 'Maya Hayashi',
    avatar: `${AVATARS}/profilepic_Maya.jpg`,
    bio: `Maya works at the Wing Luke Museum and has learned so much throughout her years of being the Teensway Program Coordinator. She's learned how to sew, how to paint murals, how to make prints, and how to create graphic novels and webcomics — all thanks to our wonderful Teaching Artists and Teenway students. When she's not at the museum, she can be found cuddling her dog on the couch while playing Animal Crossing.`,
  },
]