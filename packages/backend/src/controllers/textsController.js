import Text from '../models/Text.js';

/**
 * @param {import('express').Request} _req
 * @param {import('express').Response} res
 * @returns {Promise<void>}
 */
export async function getTexts(_req, res) {
  try {
    const texts = await Text.findAll();

    res.status(200).json(texts);
  } catch (err) {
    throw err;
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @returns {Promise<void>}
 */
export async function createText(req, res) {
  try {
    const { content, title } = req.body;
    if (!content || !title) {
      res.status(400).json({ error: 'Inhalt ist erforderlich.' });
    }

    const newText = await Text.create({ content, title });

    res.status(201).json(newText);
  } catch (err) {
    throw err;
  }
}

export default {
  getTexts,
  createText
};