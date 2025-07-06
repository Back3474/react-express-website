import {INTEGER, STRING} from 'sequelize';
import { sequelize } from '../../config/database.js';

const Text = sequelize.define(
  'Text',
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    content: {
      type: STRING,
      allowNull: false
    },
    title: {
      type: STRING,
      allowNull: false
    }
  },
  {
    tableName: 'texts',
    timestamps: false,
  }
);

export default Text;