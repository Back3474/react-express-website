import Text from '../models/Text.js';

export async function runInitialTextsSeed() {
  console.log('Running initial-texts-seed...');
  try {
    const existingTextsCount = await Text.count();
    if (existingTextsCount === 0) {
      await Text.bulkCreate([
        { title: 'Text1', content: 'Text1 Text1 Text1 Text1 Text1 Text1 Text1.' },
        { title: 'Text2', content: 'Text2 Text2 Text2 Text2 Text2 Text2 Text2.' },
        { title: 'Text3', content: 'Text3 Text3 Text3 Text3 Text3 Text3 Text3.' }
      ]);
      console.log('Initial texts seeded successfully.');
    } else {
      console.log('Texts table already contains data, skipping initial texts seed.');
    }
  } catch (error) {
    console.error('Error in initial-texts-seed:', error);
    throw error;
  }
}