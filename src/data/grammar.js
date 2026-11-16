// Grammar & Vocabulary
const q = (id, level, prompt, options, answer, explanation) => ({ id, level, type: 'mcq', prompt, options, answer, explanation });

export const grammarSets = [
  {
    id: 'grammar-1',
    group: 'grammar',
    title: 'Grammar & Vocab Paket 1',
    subtitle: 'Basic Structures',
    minutes: 12,
    questions: [
      q('g1-1', 'preA1', 'I ___ a teacher.', ['is', 'am', 'are', 'be'], 1, 'Subjek "I" selalu memakai "am".'),
      q('g1-2', 'preA1', 'Choose the animal that can fly.', ['Fish', 'Cow', 'Bird', 'Snake'], 2, 'Bird (burung) bisa terbang.'),
      q('g1-3', 'preA1', 'There are two ___ on the table.', ['book', 'books', 'a book', 'bookes'], 1, 'Setelah angka lebih dari satu, benda jamak: books.'),
      q('g1-4', 'A1', 'She ___ to school every day.', ['go', 'goes', 'going', 'gone'], 1, 'Simple Present orang ketiga tunggal (she) + -es: goes.'),
      q('g1-5', 'A1', 'We eat lunch ___ 12 o\'clock.', ['in', 'on', 'at', 'by'], 2, 'Untuk jam memakai preposisi "at".'),
      q('g1-6', 'A1', 'The opposite of "cheap" is ___.', ['expensive', 'small', 'easy', 'new'], 0, 'Cheap = murah, lawannya expensive = mahal.'),
      q('g1-7', 'A2', 'Yesterday I ___ my grandmother.', ['visit', 'visits', 'visited', 'am visiting'], 2, '"Yesterday" menandakan Simple Past: visited.'),
      q('g1-8', 'A2', 'An elephant is ___ than a horse.', ['big', 'bigger', 'biggest', 'more big'], 1, 'Perbandingan dua benda: comparative "bigger" (konsonan akhir digandakan).'),
      q('g1-9', 'A2', 'You ___ wear a helmet when you ride a motorbike. It\'s the law.', ['must', 'can', 'might', 'would'], 0, '"Must" untuk kewajiban/aturan (It\'s the law).'),
      q('g1-10', 'B1', 'I ___ in this school since 2015.', ['teach', 'taught', 'have taught', 'am teaching'], 2, '"Since 2015" (sejak) → Present Perfect: have taught.'),
      q('g1-11', 'B1', 'If it ___ tomorrow, we will cancel the trip.', ['rains', 'rained', 'will rain', 'raining'], 0, 'First conditional: If + Simple Present, will + V1. Jadi "rains".'),
      q('g1-12', 'B1', 'The book ___ by many students every year.', ['reads', 'is read', 'is reading', 'has read'], 1, 'Kalimat pasif Simple Present: is + V3 (is read).'),
    ],
  },
  {
    id: 'grammar-2',
    group: 'grammar',
    title: 'Grammar & Vocab Paket 2',
    subtitle: 'Everyday Language',
    minutes: 12,
    questions: [
      q('g2-1', 'preA1', 'This is ___ apple.', ['a', 'an', 'the two', 'some'], 1, '"Apple" diawali bunyi vokal, jadi memakai "an".'),
      q('g2-2', 'preA1', 'Which one is a colour?', ['Chair', 'Purple', 'Seven', 'Happy'], 1, 'Purple (ungu) adalah warna.'),
      q('g2-3', 'preA1', '___ is your name?', ['What', 'Where', 'When', 'Who'], 0, 'Menanyakan nama: "What is your name?"'),
      q('g2-4', 'A1', 'They ___ playing football now.', ['is', 'am', 'are', 'be'], 2, 'Present Continuous dengan "they": are + -ing.'),
      q('g2-5', 'A1', 'My birthday is ___ May.', ['at', 'on', 'in', 'to'], 2, 'Nama bulan memakai preposisi "in".'),
      q('g2-6', 'A1', 'A person who helps sick people in a hospital is a ___.', ['farmer', 'nurse', 'pilot', 'chef'], 1, 'Nurse = perawat.'),
      q('g2-7', 'A2', 'There isn\'t ___ milk in the fridge.', ['many', 'some', 'any', 'a'], 2, 'Kalimat negatif dengan benda tak terhitung memakai "any".'),
      q('g2-8', 'A2', 'Mount Everest is the ___ mountain in the world.', ['high', 'higher', 'highest', 'most high'], 2, 'Superlative (paling) untuk satu dari banyak: the highest.'),
      q('g2-9', 'A2', 'I was cooking when the phone ___.', ['rings', 'rang', 'ringing', 'has rung'], 1, 'Past Continuous terputus oleh Simple Past: rang.'),
      q('g2-10', 'B1', 'If I ___ more time, I would learn to play the guitar.', ['have', 'had', 'will have', 'am having'], 1, 'Second conditional: If + Simple Past (had), would + V1.'),
      q('g2-11', 'B1', 'The teacher ___ helped me is very patient.', ['who', 'which', 'where', 'whose'], 0, 'Relative pronoun untuk orang: who.'),
      q('g2-12', 'B1', 'She is used to ___ up early.', ['wake', 'woke', 'waking', 'woken'], 2, '"Be used to" (terbiasa) diikuti V-ing: waking.'),
    ],
  },
];
