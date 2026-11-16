// Tryout — 40 soal gabungan (berbeda dari paket latihan). Field `skill` dipakai untuk rincian hasil.
const TR1 = `Hello! I am Dina. I live in a small house near the river. I have one brother and one sister. My brother is a farmer and my sister is a student.`;
const TR2 = `LIBRARY RULES
• Open Monday to Friday, 8 a.m. – 3 p.m.
• You can borrow three books for one week.
• Please be quiet and do not eat inside.
• Late books: Rp1.000 per day.`;
const TR3 = `Sea turtles have lived on Earth for more than 100 million years. Female turtles return to the same beach where they were born to lay their eggs. They dig a hole in the sand at night, lay about one hundred eggs and then go back to the sea. After about two months, the baby turtles come out and walk to the water. Sadly, many babies do not survive because birds, crabs and even bright lights from hotels can confuse them. In some parts of Indonesia, local communities now protect turtle beaches and help the babies reach the sea safely.`;

const r = (id, level, passage, prompt, options, answer, explanation, type = 'mcq') => ({ id, skill: 'reading', level, type, passage, prompt, options, answer, explanation });
const l = (id, level, audio, prompt, options, answer, explanation) => ({ id, skill: 'listening', level, type: 'mcq', audio, prompt, options, answer, explanation });
const g = (id, level, prompt, options, answer, explanation) => ({ id, skill: 'grammar', level, type: 'mcq', prompt, options, answer, explanation });

export const tryoutSets = [
  {
    id: 'tryout-1',
    group: 'tryout',
    title: 'Tryout CEFR 1',
    subtitle: 'Simulasi lengkap 5 keterampilan',
    minutes: 45,
    timed: true,
    questions: [
      // Reading (10)
      r('t-r1', 'preA1', TR1, 'Where does Dina live?', ['Near a mountain', 'Near the river', 'In a big city', 'Near the sea'], 1, '"I live in a small house near the river."'),
      r('t-r2', 'preA1', TR1, 'What is Dina\'s brother?', ['A student', 'A teacher', 'A farmer', 'A doctor'], 2, '"My brother is a farmer."'),
      r('t-r3', 'A1', TR2, 'How many books can you borrow?', ['One', 'Two', 'Three', 'Four'], 2, '"You can borrow three books for one week."'),
      r('t-r4', 'A1', TR2, 'The library is open on Saturday.', ['True', 'False'], 1, 'Salah. Perpustakaan buka "Monday to Friday" saja.', 'tf'),
      r('t-r5', 'A1', TR2, 'If you return a book 3 days late, you pay…', ['Rp1.000', 'Rp2.000', 'Rp3.000', 'Nothing'], 2, 'Denda Rp1.000 per hari × 3 hari = Rp3.000.'),
      r('t-r6', 'A2', TR3, 'Where do female turtles lay their eggs?', ['On any beach', 'On the beach where they were born', 'In the sea', 'In rivers'], 1, '"Female turtles return to the same beach where they were born to lay their eggs."'),
      r('t-r7', 'A2', TR3, 'When do the turtles dig holes?', ['In the morning', 'At noon', 'At night', 'In the afternoon'], 2, '"They dig a hole in the sand at night."'),
      r('t-r8', 'B1', TR3, 'Why do many baby turtles not survive?', ['The sand is too hot', 'Animals and lights are dangerous for them', 'They cannot swim', 'The mothers leave them in the sea'], 1, 'Teks: burung, kepiting, dan lampu terang hotel bisa membingungkan/membahayakan tukik.'),
      r('t-r9', 'B1', TR3, 'The word "confuse" is closest in meaning to…', ['help', 'make them not know where to go', 'feed', 'protect'], 1, '"Confuse" = membingungkan; lampu membuat tukik salah arah.'),
      r('t-r10', 'B1', TR3, 'What is the writer\'s purpose in the last sentence?', ['To complain about hotels', 'To show a positive action', 'To describe turtle food', 'To explain turtle history'], 1, 'Kalimat terakhir menunjukkan upaya positif masyarakat melindungi pantai penyu.'),
      // Listening (10)
      l('t-l1', 'preA1', 'I can see a big yellow sun in the sky.', 'What colour is the sun?', ['Red', 'Yellow', 'Orange', 'White'], 1, '"A big yellow sun" — kuning.'),
      l('t-l2', 'preA1', 'My pencil case is in my bag.', 'Where is the pencil case?', ['On the desk', 'In the bag', 'Under the chair', 'In the box'], 1, '"In my bag" — di dalam tas.'),
      l('t-l3', 'A1', [{ s: 'A', t: 'What do you want to drink?' }, { s: 'B', t: 'Orange juice, please. No sugar.' }], 'What does B want?', ['Tea with sugar', 'Orange juice without sugar', 'Water', 'Coffee'], 1, '"Orange juice, please. No sugar."'),
      l('t-l4', 'A1', 'The school concert starts at a quarter to ten on Thursday.', 'When does the concert start?', ['9.15', '9.45', '10.15', '10.45'], 1, '"A quarter to ten" = 15 menit sebelum pukul 10 = 09.45.'),
      l('t-l5', 'A1', [{ s: 'A', t: 'Is your house far from here?' }, { s: 'B', t: 'No, it\'s only five minutes on foot.' }], 'How does B get home?', ['By car', 'By bus', 'Walking', 'By bike'], 2, '"On foot" = berjalan kaki.'),
      l('t-l6', 'A2', 'I wanted to buy the blue dress, but it was too small, so I bought the green one.', 'Which dress did the speaker buy?', ['Blue', 'Green', 'Red', 'None'], 1, 'Gaun biru terlalu kecil, "so I bought the green one".'),
      l('t-l7', 'A2', [{ s: 'A', t: 'Have you finished the report?' }, { s: 'B', t: 'Not yet. I\'ll finish it by Wednesday.' }], 'When will B finish the report?', ['Today', 'Monday', 'Wednesday', 'Friday'], 2, '"I\'ll finish it by Wednesday."'),
      l('t-l8', 'A2', 'Please don\'t forget: tomorrow is a half day. Students will go home at eleven, not at one.', 'What time will students go home tomorrow?', ['10.00', '11.00', '12.00', '13.00'], 1, '"Students will go home at eleven, not at one."'),
      l('t-l9', 'B1', 'Although the new park is beautiful, many residents are unhappy because there is not enough parking and the area has become very crowded at weekends.', 'Why are residents unhappy?', ['The park is ugly', 'Parking and crowds are problems', 'The park is closed at weekends', 'There are no trees'], 1, '"Although… beautiful, … not enough parking and … very crowded" — masalahnya parkir dan keramaian.'),
      l('t-l10', 'B1', [{ s: 'A', t: 'I think we should take the train. It\'s cheaper.' }, { s: 'B', t: 'True, but the bus leaves earlier and we need to arrive before noon.' }], 'Why does B prefer the bus?', ['It is cheaper', 'It is more comfortable', 'It leaves earlier', 'It is faster'], 2, 'B setuju kereta lebih murah, tapi "the bus leaves earlier and we need to arrive before noon".'),
      // Grammar & Vocab (10)
      g('t-g1', 'preA1', 'He ___ my father.', ['am', 'is', 'are', 'be'], 1, 'Subjek "he" memakai "is".'),
      g('t-g2', 'preA1', 'We use our ___ to hear.', ['eyes', 'ears', 'hands', 'feet'], 1, 'Ears (telinga) untuk mendengar.'),
      g('t-g3', 'A1', 'My mother ___ coffee every morning.', ['drink', 'drinks', 'drinking', 'drank'], 1, 'Simple Present orang ketiga tunggal: drinks.'),
      g('t-g4', 'A1', '___ you like football?', ['Are', 'Is', 'Do', 'Does'], 2, 'Pertanyaan Simple Present dengan "you": Do.'),
      g('t-g5', 'A2', 'We ___ TV when the lights went out.', ['watch', 'were watching', 'are watching', 'watched'], 1, 'Kegiatan yang sedang berlangsung di masa lalu terputus: Past Continuous.'),
      g('t-g6', 'A2', 'This is the ___ interesting book I have ever read.', ['more', 'most', 'much', 'very'], 1, 'Superlative untuk kata panjang: the most interesting.'),
      g('t-g7', 'A2', 'You look tired. You ___ go to bed early.', ['should', 'must not', 'can\'t', 'would'], 0, '"Should" untuk memberi saran.'),
      g('t-g8', 'B1', 'By the time we arrived, the film ___.', ['started', 'has started', 'had started', 'starts'], 2, 'Kejadian sebelum kejadian lampau lain: Past Perfect (had started).'),
      g('t-g9', 'B1', 'The village ___ I grew up is very quiet.', ['which', 'where', 'who', 'what'], 1, 'Relative adverb untuk tempat: where.'),
      g('t-g10', 'B1', 'She asked me where ___.', ['do I live', 'I lived', 'did I live', 'I am live'], 1, 'Reported question: susunan subjek + verb, tense mundur: "where I lived".'),
      // Speaking (5)
      { id: 't-s1', skill: 'speaking', level: 'preA1', type: 'speak', prompt: 'What is your favourite fruit?', hint: 'Jawab dengan kalimat.', keywords: [['apple', 'banana', 'mango', 'orange', 'grape', 'papaya', 'watermelon', 'pineapple', 'durian', 'rambutan', 'strawberry', 'melon', 'guava', 'salak'], ['favourite', 'favorite', 'like']], minWords: 4, model: 'My favourite fruit is mango.', explanation: 'Pola: "My favourite fruit is …".' },
      { id: 't-s2', skill: 'speaking', level: 'A1', type: 'speak', prompt: 'What subjects do you teach?', hint: 'Sebutkan mata pelajaran.', keywords: [['teach'], ['english', 'math', 'maths', 'science', 'indonesian', 'religion', 'art', 'sport', 'all subjects', 'class']], minWords: 8, model: 'I teach all subjects in class three, but I like teaching science the most.', explanation: 'Gunakan "I teach …" + mata pelajaran/kelas.' },
      { id: 't-s3', skill: 'speaking', level: 'A2', type: 'speak', prompt: 'Describe your favourite place in your town.', hint: 'Lokasi, apa yang ada, kenapa suka.', keywords: [['place', 'park', 'market', 'mosque', 'river', 'beach', 'mountain', 'square'], ['there is', 'there are', 'near', 'can'], ['because', 'like']], minWords: 20, model: 'My favourite place is the town square. It is near the market. There are many trees and food sellers. In the evening I go there with my family because it is cool and we can relax.', explanation: 'Deskripsi tempat: lokasi, isi (There are…), kegiatan, alasan.' },
      { id: 't-s4', skill: 'speaking', level: 'B1', type: 'speak', prompt: 'What makes a good teacher? Give reasons.', hint: '2–3 sifat + alasan/contoh.', keywords: [['patient', 'kind', 'creative', 'fair', 'friendly', 'knowledge', 'listen'], ['because', 'so', 'for example'], ['students', 'children']], minWords: 35, model: 'I think a good teacher must be patient, because children learn at different speeds. A good teacher is also creative, for example using games and stories to make lessons fun. Finally, a good teacher listens to students, so they feel safe and respected.', explanation: 'Pendapat + alasan (because), contoh (for example), urutan (Finally).' },
      { id: 't-s5', skill: 'speaking', level: 'B1', type: 'speak', prompt: 'Talk about a problem in your community and how to solve it.', hint: 'Masalah → penyebab → solusi.', keywords: [['problem'], ['because', 'cause'], ['should', 'can', 'could', 'solve', 'solution']], minWords: 35, model: 'One problem in my community is flooding in the rainy season. It happens because people throw rubbish in the river. To solve this, the village should organise a clean-up every month, and schools can teach children not to litter.', explanation: 'Struktur masalah–penyebab–solusi dengan modal should/can.' },
      // Writing (5)
      { id: 't-w1', skill: 'writing', level: 'preA1', type: 'write', prompt: 'Write the English word for "sekolah".', keywords: [['school']], minWords: 1, minSentences: 0, model: 'school', explanation: 'Sekolah = school.' },
      { id: 't-w2', skill: 'writing', level: 'A1', type: 'write', prompt: 'Write 2 sentences about your hobby.', keywords: [['hobby', 'like', 'enjoy', 'love'], ['read', 'cook', 'swim', 'sing', 'garden', 'draw', 'play', 'walk', 'watch', 'sew']], minWords: 10, minSentences: 2, model: 'My hobby is gardening. I plant flowers and vegetables every weekend.', explanation: 'Kalimat lengkap: subjek + verb + keterangan.' },
      { id: 't-w3', skill: 'writing', level: 'A2', type: 'write', prompt: 'Write a message to your students\' parents about a class meeting next Saturday (40+ words).', keywords: [['dear', 'parents'], ['meeting'], ['saturday'], ['please', 'will']], minWords: 40, minSentences: 3, model: 'Dear parents,\nWe will have a class meeting next Saturday at 9 a.m. in Class 4A. We will talk about the students\' progress and the school trip. Please come on time. Thank you.\nMrs. Siti', explanation: 'Pemberitahuan: salam, waktu & tempat, agenda, permohonan, penutup.' },
      { id: 't-w4', skill: 'writing', level: 'B1', type: 'write', prompt: 'Why is it important to protect forests? (70+ words)', keywords: [['forest', 'trees'], ['because', 'so', 'reason'], ['animals', 'air', 'water', 'oxygen', 'flood'], ['should', 'must', 'can']], minWords: 70, minSentences: 4, model: 'Forests are very important for our planet. First, trees produce oxygen and clean the air we breathe. Second, forests are home to many animals, such as orangutans and tigers. Forests also hold water, so they help to prevent floods. Because of this, we must stop cutting down trees illegally and we should plant new ones. Protecting forests means protecting our future.', explanation: 'Eksposisi: alasan berurutan (First, Second, also), akibat (so), ajakan (must/should), penutup.' },
      { id: 't-w5', skill: 'writing', level: 'B1', type: 'write', prompt: 'Describe the most useful thing you learned this year and how it helped you (70+ words).', keywords: [['learned', 'learnt'], ['useful', 'helped', 'help'], ['because', 'so', 'now', 'before']], minWords: 70, minSentences: 4, model: 'The most useful thing I learned this year was how to make digital quizzes. Before, I made all my tests on paper and it took a long time to check them. Now my students do the quizzes on a tablet and I can see the results quickly. This has helped me save time, so I can prepare more interesting lessons. My students also enjoy it more.', explanation: 'Kontras sebelum–sesudah (Before… Now…), manfaat (helped me…), akibat (so).' },
    ],
  },
];
