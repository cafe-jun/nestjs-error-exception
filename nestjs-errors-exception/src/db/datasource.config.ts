import { User } from '../entity/user.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const dataSource: MysqlConnectionOptions = {
  type: 'mysql',
  port: 3306,
  host: 'localhost',
  username: 'root',
  password: 'Jsshin2440!@',
  database: 'study_db',
  entities: [User],
  logging: 'all',
  synchronize: true,
};
