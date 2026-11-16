// Reading — 2 paket @ 12 soal (3 per level). Semua teks orisinal.
const P1 = `My name is Tom. I am nine years old. I have a small dog. Its name is Max. Max is brown and white. Every morning, Max and I walk in the park.`;
const P2 = `Hi Anna,
I am at the zoo with my class today. We saw two big elephants and a baby giraffe. The giraffe was very tall! At 12 o'clock we had lunch near the lake. Tomorrow I will show you my photos.
Love, Lisa`;
const P3 = `Penguins are birds, but they cannot fly. They live in cold places in the south of the world, like Antarctica. Penguins are very good swimmers. They use their wings like flippers to move fast in the water. They eat fish and small sea animals. Emperor penguins are the biggest penguins. The father keeps the egg warm on his feet for about two months, while the mother goes to the sea to find food.`;
const P4 = `The Komodo dragon is the largest lizard on Earth. It lives only on a few islands in Indonesia, such as Komodo and Rinca. An adult can grow up to three metres long. Komodo dragons are not fast runners for long distances, but they can run quickly for a short time. They have a very good sense of smell and can find food from several kilometres away. Today, the number of Komodo dragons is small, so the government protects them in Komodo National Park. Visitors must walk with a ranger because the animals can be dangerous.`;

const P5 = `This is my classroom. It is big and clean. There are twenty desks and one whiteboard. My teacher is Mrs. Rina. She is kind.`;
const P6 = `SCHOOL NOTICE
Sports Day is on Saturday, 14 June. Students must come at 7.00 a.m. and wear their sports uniform. Please bring a water bottle and a hat. Parents are welcome to watch. There is no school on Monday, 16 June.`;
const P7 = `Last holiday, Budi visited his grandmother in a village near Mount Merapi. Every morning he helped her feed the chickens and pick vegetables in the garden. In the afternoon, he played football with the village children in a big field. One evening, the electricity went off, so the family sat outside and looked at the stars. Budi said it was the best holiday because he learned many new things and did not use his phone at all.`;
const P8 = `Coral reefs are sometimes called "the rainforests of the sea" because thousands of different animals live there. Although reefs cover less than one percent of the ocean floor, they are home to about a quarter of all sea life. Unfortunately, many reefs are in danger. When the sea becomes too warm, corals lose the tiny plants that live inside them and give them colour. This is called coral bleaching. If the water does not cool down, the corals may die. Scientists say that reducing pollution and protecting fish that clean the reef can help corals recover.`;

export const readingSets = [
  {
    id: 'reading-1',
    group: 'reading',
    title: 'Reading Paket 1',
    subtitle: 'Animals & Daily Life',
    minutes: 15,
    questions: [
      { id: 'r1-1', level: 'preA1', type: 'mcq', passage: P1, prompt: 'How old is Tom?', options: ['Seven', 'Eight', 'Nine', 'Ten'], answer: 2, explanation: 'Kalimat kedua: "I am nine years old." Jadi Tom berumur sembilan tahun.' },
      { id: 'r1-2', level: 'preA1', type: 'mcq', passage: P1, prompt: 'What colour is Max?', options: ['Black and white', 'Brown and white', 'All brown', 'Grey'], answer: 1, explanation: 'Teks menyebut "Max is brown and white" — cokelat dan putih.' },
      { id: 'r1-3', level: 'preA1', type: 'tf', passage: P1, prompt: 'Tom and Max walk in the park in the evening.', options: ['True', 'False'], answer: 1, explanation: 'Salah. Mereka berjalan "every morning" (setiap pagi), bukan sore/malam.' },
      { id: 'r1-4', level: 'A1', type: 'mcq', passage: P2, prompt: 'Where is Lisa today?', options: ['At school', 'At the zoo', 'At the lake', 'At home'], answer: 1, explanation: '"I am at the zoo with my class today." Lisa sedang di kebun binatang.' },
      { id: 'r1-5', level: 'A1', type: 'mcq', passage: P2, prompt: 'What did Lisa think about the giraffe?', options: ['It was very small', 'It was very tall', 'It was hungry', 'It was sleeping'], answer: 1, explanation: '"The giraffe was very tall!" — jerapahnya sangat tinggi.' },
      { id: 'r1-6', level: 'A1', type: 'tf', passage: P2, prompt: 'Lisa will show Anna her photos tomorrow.', options: ['True', 'False'], answer: 0, explanation: 'Benar. "Tomorrow I will show you my photos." Kata "will" menunjukkan rencana masa depan.' },
      { id: 'r1-7', level: 'A2', type: 'mcq', passage: P3, prompt: 'How do penguins use their wings?', options: ['To fly over the sea', 'To keep their eggs warm', 'To swim fast', 'To catch birds'], answer: 2, explanation: 'Teks: "They use their wings like flippers to move fast in the water." Sayap dipakai untuk berenang cepat.' },
      { id: 'r1-8', level: 'A2', type: 'mcq', passage: P3, prompt: 'Who keeps the emperor penguin egg warm?', options: ['The mother', 'The father', 'Both parents', 'Other penguins'], answer: 1, explanation: '"The father keeps the egg warm on his feet" — sang ayah yang menghangatkan telur.' },
      { id: 'r1-9', level: 'A2', type: 'tf', passage: P3, prompt: 'Penguins live in hot places near the equator.', options: ['True', 'False'], answer: 1, explanation: 'Salah. Penguin hidup di "cold places in the south of the world" (tempat dingin di selatan).' },
      { id: 'r1-10', level: 'B1', type: 'mcq', passage: P4, prompt: 'Why must visitors walk with a ranger?', options: ['Rangers know the best photo spots', 'The islands are very large', 'Komodo dragons can be dangerous', 'Visitors cannot smell the dragons'], answer: 2, explanation: 'Kalimat terakhir: "...because the animals can be dangerous." Kata "because" memberi alasannya.' },
      { id: 'r1-11', level: 'B1', type: 'mcq', passage: P4, prompt: 'What can we infer about Komodo dragons\' hunting?', options: ['They chase animals for many kilometres', 'Their sense of smell helps them find food', 'They only eat plants', 'They hunt only in the water'], answer: 1, explanation: 'Teks menyebut penciuman yang sangat baik, bisa menemukan makanan dari beberapa kilometer. Mereka tidak kuat berlari jauh, jadi opsi A salah.' },
      { id: 'r1-12', level: 'B1', type: 'mcq', passage: P4, prompt: 'The word "protects" in the text is closest in meaning to…', options: ['hunts', 'keeps safe', 'sells', 'moves'], answer: 1, explanation: '"Protect" = melindungi, menjaga agar aman (keep safe). Pemerintah melindungi komodo karena jumlahnya sedikit.' },
    ],
  },
  {
    id: 'reading-2',
    group: 'reading',
    title: 'Reading Paket 2',
    subtitle: 'School & Nature',
    minutes: 15,
    questions: [
      { id: 'r2-1', level: 'preA1', type: 'mcq', passage: P5, prompt: 'How many desks are there?', options: ['Ten', 'Twelve', 'Twenty', 'Thirty'], answer: 2, explanation: '"There are twenty desks" — ada dua puluh meja.' },
      { id: 'r2-2', level: 'preA1', type: 'mcq', passage: P5, prompt: 'Who is Mrs. Rina?', options: ['A student', 'The teacher', 'A doctor', 'The mother'], answer: 1, explanation: '"My teacher is Mrs. Rina." Bu Rina adalah guru.' },
      { id: 'r2-3', level: 'preA1', type: 'tf', passage: P5, prompt: 'The classroom is small and dirty.', options: ['True', 'False'], answer: 1, explanation: 'Salah. Kelasnya "big and clean" (besar dan bersih).' },
      { id: 'r2-4', level: 'A1', type: 'mcq', passage: P6, prompt: 'What time must students come on Sports Day?', options: ['6.00 a.m.', '7.00 a.m.', '8.00 a.m.', '12.00 p.m.'], answer: 1, explanation: '"Students must come at 7.00 a.m." — pukul 07.00 pagi.' },
      { id: 'r2-5', level: 'A1', type: 'mcq', passage: P6, prompt: 'What do students NOT need to bring?', options: ['A water bottle', 'A hat', 'Books', 'Their sports uniform'], answer: 2, explanation: 'Yang disebut: seragam olahraga, botol air, dan topi. Buku tidak disebut.' },
      { id: 'r2-6', level: 'A1', type: 'tf', passage: P6, prompt: 'There is school on Monday, 16 June.', options: ['True', 'False'], answer: 1, explanation: 'Salah. "There is no school on Monday, 16 June" — hari Senin libur.' },
      { id: 'r2-7', level: 'A2', type: 'mcq', passage: P7, prompt: 'What did Budi do every morning?', options: ['Played football', 'Looked at the stars', 'Helped his grandmother', 'Used his phone'], answer: 2, explanation: 'Setiap pagi Budi membantu nenek memberi makan ayam dan memetik sayur.' },
      { id: 'r2-8', level: 'A2', type: 'mcq', passage: P7, prompt: 'Why did the family sit outside one evening?', options: ['It was too hot inside', 'The electricity went off', 'They had a party', 'They wanted to play football'], answer: 1, explanation: '"The electricity went off, so the family sat outside" — kata "so" menunjukkan akibat dari listrik padam.' },
      { id: 'r2-9', level: 'A2', type: 'tf', passage: P7, prompt: 'Budi used his phone a lot during the holiday.', options: ['True', 'False'], answer: 1, explanation: 'Salah. "...did not use his phone at all" — sama sekali tidak memakai HP.' },
      { id: 'r2-10', level: 'B1', type: 'mcq', passage: P8, prompt: 'Why are coral reefs called "the rainforests of the sea"?', options: ['They have many trees', 'Many different animals live there', 'It rains a lot over them', 'They cover most of the ocean'], answer: 1, explanation: 'Karena "thousands of different animals live there" — keanekaragaman hayatinya tinggi seperti hutan hujan.' },
      { id: 'r2-11', level: 'B1', type: 'mcq', passage: P8, prompt: 'What causes coral bleaching?', options: ['Too many fish', 'Water that is too warm', 'Cold water', 'Too much sunlight at night'], answer: 1, explanation: '"When the sea becomes too warm, corals lose the tiny plants..." Air laut yang terlalu hangat menyebabkan pemutihan karang.' },
      { id: 'r2-12', level: 'B1', type: 'mcq', passage: P8, prompt: 'What is the main idea of the text?', options: ['Reefs are useless for the ocean', 'Reefs are important but in danger, and can be helped', 'Scientists want to remove reefs', 'Only fish live in reefs'], answer: 1, explanation: 'Teks menjelaskan pentingnya terumbu karang, ancamannya (bleaching), lalu cara membantunya pulih. Itulah ide pokoknya.' },
    ],
  },
];
