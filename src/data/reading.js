// Reading — 6 paket @ 12 soal (3 per level). Paket 1–2 dasar, 3–4 menengah, 5–6 tantangan. Semua teks orisinal.
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

const P9 = `This is my house. It has a red door and two windows. My mother is in the kitchen. My father is in the garden with our cat.`;
const P10 = `FRESH MARKET
Open every day 6 a.m. – 11 a.m.
Today's prices:
• Eggs Rp2.000 each
• Tomatoes Rp10.000 per kilo
• Bananas Rp15.000 per bunch
Buy 2 bunches of bananas and get 1 free!`;
const P11 = `Dear Maya,
We moved to our new house last week. It is bigger than our old one, and I finally have my own bedroom! It is on the second floor, so I can see the rice fields from my window. The only problem is that it is far from my school. Now I have to wake up at five and take two buses. My dad says we will buy a motorbike next month. Come and visit us soon!
Rani`;
const P12 = `In many Indonesian towns, traditional markets are still busy every morning, even though modern supermarkets have opened nearby. Shoppers say that vegetables and fish in the market are fresher, because farmers and fishermen often sell their products directly. Prices can also be lower, especially if buyers are good at bargaining. On the other hand, supermarkets are cleaner, have fixed prices and stay open until late at night. Some local governments are now renovating old markets, adding better roofs, clean toilets and digital payment, hoping that young people will shop there again.`;

const P13 = `Look at the picture. There is a big boat on the sea. Two children are on the boat. The sky is blue and the sun is hot.`;
const P14 = `TRAIN TICKET
From: Surabaya   To: Malang
Date: Friday, 5 July
Leaves: 08.15   Arrives: 10.05
Coach 3, Seat 12A
Please show this ticket and your ID card.`;
const P15 = `Last month I travelled to Lake Toba in North Sumatra. It is the largest lake in Indonesia, and in the middle there is an island called Samosir. I took a ferry from Parapat, which took about one hour. On Samosir, I stayed with a Batak family in a traditional house with a roof shaped like a boat. In the evening, the family sang songs and taught me a few words in their language. I wanted to stay longer, but I had to go back to work.`;
const P16 = `Borobudur, the world's largest Buddhist temple, attracts millions of visitors every year. While tourism brings jobs and income to nearby villages, it also creates problems. Thousands of feet climbing the ancient stones every day slowly damage the carvings, and some visitors leave rubbish or even scratch their names on the walls. To protect the temple, the authorities now limit the number of people who can climb to the top each day and require them to wear special sandals made by local craftsmen. Some tourists complain about the rules, but experts argue that without them, future generations might not be able to see the temple at all.`;

const P17 = `Dodi is sick today. He has a headache and a cough. He is in bed. His mother gives him warm water and soup. He cannot go to school.`;
const P18 = `PUSKESMAS SEHAT
Opening hours:
Monday – Thursday 07.30 – 14.00
Friday 07.30 – 11.00
Saturday 07.30 – 12.30
Closed on Sundays and public holidays.
Free check-ups for children under five every Tuesday. Please bring your family card.`;
const P19 = `Doctors say that adults need seven to nine hours of sleep every night, but many teachers sleep less than six. Pak Arif was one of them. He used to check homework until midnight and then wake up at four. After a few months, he often felt tired, forgot things and got angry quickly. His doctor told him to stop using his phone one hour before bed and to check homework at school instead. Now he goes to bed at ten, and he says he feels more patient with his students.`;
const P20 = `Sweet drinks such as bottled tea, soda and bubble tea have become extremely popular among Indonesian children. A single large cup of bubble tea can contain more than 50 grams of sugar — more than the total amount a child should eat in a whole day. Too much sugar does not only damage teeth; it can also lead to obesity and diabetes later in life. Some parents believe that fruit juice is a healthy alternative, but packaged juice often contains added sugar too. Nutritionists recommend drinking plain water and eating whole fruit, which contains fibre that slows down how quickly sugar enters the blood. Schools can help by selling fewer sweet drinks in the canteen and providing free drinking water.`;

const P21 = `I have a new tablet. It is black and small. I read stories on it. I do not play games on it at night.`;
const P22 = `Hi Bu Ani,
The school computer room is closed today because the air conditioner is broken. The technician will come tomorrow at 9 a.m. Please use the library for your ICT lesson. The library has ten laptops.
Thanks,
Pak Doni`;
const P23 = `Two years ago, the people of Sukamaju village started a waste bank. Every Sunday, families bring plastic bottles, paper and cans to the village hall. The waste is weighed, and each family gets points in a small book. Later, they can change the points for money, rice or cooking oil. The plastic is sold to a recycling factory in the city. Since the waste bank started, the river near the village has become much cleaner, and the children no longer see rubbish floating in it.`;
const P24 = `Indonesia has thousands of lakes and reservoirs, and engineers are now using some of them to produce electricity. At the Cirata Reservoir in West Java, hundreds of thousands of solar panels float on the water, making it one of the largest floating solar farms in Southeast Asia. Building on water has several advantages: no land needs to be cleared, and the water keeps the panels cool, which helps them work more efficiently. However, critics warn that covering too much of a lake may reduce sunlight for fish and plants below the surface. For this reason, the panels cover only a small part of the reservoir, and scientists regularly check the water quality.`;

// Helper paket 3–6: m(id, level, passage, prompt, options, answer, explanation, type)
const m = (id, level, passage, prompt, options, answer, explanation, type = 'mcq') => ({ id, level, type, passage, prompt, options, answer, explanation });

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
  {
    id: 'reading-3',
    group: 'reading',
    title: 'Reading Paket 3',
    subtitle: 'Home & Market',
    minutes: 15,
    questions: [
      m('r3-1', 'preA1', P9, "What colour is the door?", ["Blue", "Red", "Green", "White"], 1, "Kalimat kedua: 'It has a red door' — pintunya merah."),
      m('r3-2', 'preA1', P9, "Where is the mother?", ["In the garden", "In the kitchen", "In the bedroom", "At the market"], 1, "'My mother is in the kitchen.' Ibu ada di dapur."),
      m('r3-3', 'preA1', P9, "The cat is in the kitchen.", ["True", "False"], 1, "Salah. Kucing ada di kebun bersama ayah: 'My father is in the garden with our cat.'", 'tf'),
      m('r3-4', 'A1', P10, "When does the market close?", ["6 a.m.", "10 a.m.", "11 a.m.", "11 p.m."], 2, "'Open every day 6 a.m. – 11 a.m.' Pasar tutup pukul 11 pagi."),
      m('r3-5', 'A1', P10, "How much do five eggs cost?", ["Rp2.000", "Rp5.000", "Rp10.000", "Rp12.000"], 2, "Satu telur Rp2.000 ('each' = per butir). 5 × Rp2.000 = Rp10.000."),
      m('r3-6', 'A1', P10, "If you buy two bunches of bananas, you get one more for free.", ["True", "False"], 0, "Benar. 'Buy 2 bunches of bananas and get 1 free!' — beli dua sisir, gratis satu.", 'tf'),
      m('r3-7', 'A2', P11, "What does Rani like about the new house?", ["It is near her school", "She has her own bedroom", "It is cheap", "It has a big garden"], 1, "'I finally have my own bedroom!' Kata 'finally' menunjukkan hal yang sudah lama ia tunggu."),
      m('r3-8', 'A2', P11, "Why does Rani have to wake up at five now?", ["She helps her father", "The house is far from her school", "She likes to see the rice fields", "She walks to school"], 1, "'The only problem is that it is far from my school. Now I have to wake up at five and take two buses.'"),
      m('r3-9', 'A2', P11, "Rani's family already has a motorbike.", ["True", "False"], 1, "Salah. 'My dad says we will buy a motorbike next month' — baru akan membeli bulan depan.", 'tf'),
      m('r3-10', 'B1', P12, "Why do some shoppers think the food in traditional markets is fresher?", ["It is kept in big fridges", "Farmers and fishermen often sell directly", "Supermarkets are far away", "It is more expensive"], 1, "'...because farmers and fishermen often sell their products directly' — tanpa perantara, jadi lebih segar."),
      m('r3-11', 'B1', P12, "The word 'bargaining' is closest in meaning to…", ["discussing a price to make it lower", "carrying heavy shopping bags", "paying with a card", "cleaning the stall"], 0, "Bargaining = menawar harga. Konteksnya: harga bisa lebih murah 'if buyers are good at bargaining'."),
      m('r3-12', 'B1', P12, "Why are some local governments renovating old markets?", ["To close them down", "To attract young shoppers again", "To build supermarkets inside", "To make prices higher"], 1, "Kalimat terakhir: '...hoping that young people will shop there again.' Tujuannya menarik pembeli muda."),
    ],
  },
  {
    id: 'reading-4',
    group: 'reading',
    title: 'Reading Paket 4',
    subtitle: 'Travel & Places',
    minutes: 15,
    questions: [
      m('r4-1', 'preA1', P13, "What is on the sea?", ["A car", "A big boat", "A bus", "A plane"], 1, "'There is a big boat on the sea.' Ada kapal besar di laut."),
      m('r4-2', 'preA1', P13, "How many children are on the boat?", ["One", "Two", "Three", "Four"], 1, "'Two children are on the boat.' Dua anak."),
      m('r4-3', 'preA1', P13, "The sky is grey.", ["True", "False"], 1, "Salah. 'The sky is blue' — langitnya biru.", 'tf'),
      m('r4-4', 'A1', P14, "Where is the passenger going?", ["Surabaya", "Malang", "Jakarta", "Solo"], 1, "'From: Surabaya · To: Malang' — tujuannya Malang. Surabaya adalah kota asal."),
      m('r4-5', 'A1', P14, "How long is the train journey?", ["About 1 hour", "About 2 hours", "About 3 hours", "About 8 hours"], 1, "Berangkat 08.15, tiba 10.05 → 1 jam 50 menit, kira-kira 2 jam."),
      m('r4-6', 'A1', P14, "The passenger must show an ID card.", ["True", "False"], 0, "Benar. 'Please show this ticket and your ID card.'", 'tf'),
      m('r4-7', 'A2', P15, "How did the writer get to Samosir?", ["By plane", "By ferry", "By bus", "By bridge"], 1, "'I took a ferry from Parapat, which took about one hour.' Naik kapal feri."),
      m('r4-8', 'A2', P15, "What was special about the house the writer stayed in?", ["It was made of glass", "Its roof was shaped like a boat", "It was on the water", "It was very modern"], 1, "'...a traditional house with a roof shaped like a boat' — rumah adat Batak beratap seperti perahu."),
      m('r4-9', 'A2', P15, "The writer stayed longer on Samosir because they loved it.", ["True", "False"], 1, "Salah. 'I wanted to stay longer, but I had to go back to work.' Kata 'but' menunjukkan ia tidak jadi tinggal lebih lama.", 'tf'),
      m('r4-10', 'B1', P16, "What is the main problem described in the text?", ["There are not enough visitors", "Large numbers of tourists can damage the temple", "The weather is bad", "The tickets are too expensive"], 1, "Teks menjelaskan bahwa ribuan kaki pengunjung dan perilaku buruk (sampah, coretan) merusak batu dan relief candi."),
      m('r4-11', 'B1', P16, "Why must climbers wear special sandals?", ["To look traditional in photos", "To reduce damage to the ancient stones", "Because the stones are hot", "To walk faster"], 1, "Aturan sandal dibuat 'To protect the temple' — mengurangi gesekan pada batu kuno. Ini kesimpulan dari konteks paragraf."),
      m('r4-12', 'B1', P16, "What do experts think about the new rules?", ["They are unnecessary", "They are needed so future generations can still see the temple", "They should apply only to local people", "They make tickets too cheap"], 1, "'...experts argue that without them, future generations might not be able to see the temple at all.' Ahli mendukung aturan tersebut."),
    ],
  },
  {
    id: 'reading-5',
    group: 'reading',
    title: 'Reading Paket 5',
    subtitle: 'Health & Body',
    minutes: 18,
    questions: [
      m('r5-1', 'preA1', P17, "What is wrong with Dodi?", ["He has a headache and a cough", "He has a broken leg", "He has a toothache", "He is hungry"], 0, "'He has a headache and a cough.' Sakit kepala dan batuk."),
      m('r5-2', 'preA1', P17, "What does his mother give him?", ["Ice cream and juice", "Warm water and soup", "Rice and chicken", "Only medicine"], 1, "'His mother gives him warm water and soup.'"),
      m('r5-3', 'preA1', P17, "Dodi goes to school today.", ["True", "False"], 1, "Salah. 'He cannot go to school.' Kata 'cannot' = tidak bisa.", 'tf'),
      m('r5-4', 'A1', P18, "When can a child under five get a free check-up?", ["Every Monday", "Every Tuesday", "Every Friday", "Every day"], 1, "'Free check-ups for children under five every Tuesday.'"),
      m('r5-5', 'A1', P18, "On which day does the clinic close earliest?", ["Monday", "Thursday", "Friday", "Saturday"], 2, "Jumat tutup pukul 11.00, lebih awal dari Sabtu (12.30) dan Senin–Kamis (14.00). Bandingkan semua jam dengan teliti."),
      m('r5-6', 'A1', P18, "You can visit the clinic on Sunday morning.", ["True", "False"], 1, "Salah. 'Closed on Sundays and public holidays.'", 'tf'),
      m('r5-7', 'A2', P19, "How many hours did Pak Arif use to sleep?", ["About four hours", "About seven hours", "About nine hours", "About ten hours"], 0, "Ia memeriksa PR 'until midnight' lalu bangun 'at four' → sekitar 4 jam. Jawaban perlu dihitung, tidak tertulis langsung."),
      m('r5-8', 'A2', P19, "Which problem is NOT mentioned in the text?", ["Feeling tired", "Forgetting things", "Getting angry quickly", "Having a headache"], 3, "Yang disebut: 'felt tired, forgot things and got angry quickly'. Sakit kepala tidak disebut."),
      m('r5-9', 'A2', P19, "The doctor told Pak Arif to check homework later at night.", ["True", "False"], 1, "Salah. Dokter menyarankan memeriksa PR 'at school instead' — di sekolah, bukan malam hari.", 'tf'),
      m('r5-10', 'B1', P20, "According to the text, a large cup of bubble tea…", ["is healthier than fruit juice", "may contain more sugar than a child should eat in a day", "contains no added sugar", "is rich in fibre"], 1, "'...more than 50 grams of sugar — more than the total amount a child should eat in a whole day.'"),
      m('r5-11', 'B1', P20, "Why is whole fruit better than packaged juice?", ["It is cheaper", "Its fibre slows down how fast sugar enters the blood", "It contains more sugar", "It lasts longer"], 1, "Buah utuh mengandung serat 'which slows down how quickly sugar enters the blood'. Jus kemasan sering diberi gula tambahan."),
      m('r5-12', 'B1', P20, "What is the writer's attitude towards sweet drinks?", ["The writer recommends them", "The writer is concerned and suggests healthier choices", "The writer has no opinion", "The writer is angry with nutritionists"], 1, "Penulis menjelaskan bahaya gula lalu memberi solusi (air putih, buah utuh, kantin sekolah). Sikapnya: khawatir dan memberi saran."),
    ],
  },
  {
    id: 'reading-6',
    group: 'reading',
    title: 'Reading Paket 6',
    subtitle: 'Environment & Technology',
    minutes: 18,
    questions: [
      m('r6-1', 'preA1', P21, "What colour is the tablet?", ["White", "Black", "Silver", "Blue"], 1, "'It is black and small.'"),
      m('r6-2', 'preA1', P21, "What does the writer do on the tablet?", ["Reads stories", "Watches films", "Calls friends", "Takes photos"], 0, "'I read stories on it.'"),
      m('r6-3', 'preA1', P21, "The writer plays games on the tablet at night.", ["True", "False"], 1, "Salah. 'I do not play games on it at night.' Perhatikan kata 'not'.", 'tf'),
      m('r6-4', 'A1', P22, "Why is the computer room closed?", ["There is no electricity", "The air conditioner is broken", "It is a holiday", "The technician is using it"], 1, "'...closed today because the air conditioner is broken.'"),
      m('r6-5', 'A1', P22, "Where should Bu Ani teach her ICT lesson today?", ["In the computer room", "In the library", "In her classroom", "In the school hall"], 1, "'Please use the library for your ICT lesson.'"),
      m('r6-6', 'A1', P22, "The technician is coming today.", ["True", "False"], 1, "Salah. 'The technician will come tomorrow at 9 a.m.'", 'tf'),
      m('r6-7', 'A2', P23, "What happens to the plastic from the waste bank?", ["It is burned", "It is sold to a recycling factory", "It is thrown into the river", "It is given to the children"], 1, "'The plastic is sold to a recycling factory in the city.'"),
      m('r6-8', 'A2', P23, "What can families get for their points?", ["Only money", "Money, rice or cooking oil", "New plastic bottles", "School books"], 1, "'...change the points for money, rice or cooking oil.' Pilihan A kurang lengkap karena ada kata 'Only'."),
      m('r6-9', 'A2', P23, "The river is dirtier now than before the waste bank started.", ["True", "False"], 1, "Salah. '...the river near the village has become much cleaner.'", 'tf'),
      m('r6-10', 'B1', P24, "According to the text, why does the water help the solar panels?", ["It cleans them every day", "It keeps them cool, so they work more efficiently", "It makes them float higher", "It stops fish from eating them"], 1, "'...the water keeps the panels cool, which helps them work more efficiently.'"),
      m('r6-11', 'B1', P24, "What are the critics worried about?", ["The project is too expensive", "Covering a lake may reduce sunlight for life under the water", "The panels might sink", "The reservoir is too far from cities"], 1, "'...covering too much of a lake may reduce sunlight for fish and plants below the surface.'"),
      m('r6-12', 'B1', P24, "How have the planners responded to the critics?", ["They removed all the panels", "They cover only a small part of the reservoir and check the water", "They moved the fish to another lake", "They built the panels on land instead"], 1, "'For this reason, the panels cover only a small part of the reservoir, and scientists regularly check the water quality.' Frasa 'For this reason' menghubungkan kritik dengan tanggapan."),
    ],
  },
];
