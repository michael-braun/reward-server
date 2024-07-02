import { Role } from '../auth/role.enum';

export type ConfigType = {
  auth: ConfigAuthType;
  uac: ConfigStaticUacType;
  database: ConfigDatabaseType;
};

export type ConfigAuthType = ConfigStaticAuthType;

export type ConfigStaticAuthType = {
  type: 'static';
  secret: string;
  users: Array<ConfigAuthUserType>;
};

type ConfigAuthUserType = {
  id: string;
  username: string;
  password: string;
};

export type ConfigStaticUacType = {
  type: 'static';
  users: Array<ConfigUacUserType>;
};

type ConfigUacUserType = {
  user_id: string;
  permissions: Array<Role>;
};

export type ConfigDatabaseType =
  | ConfigSqliteDatabaseType
  | ConfigCockroachdbDatabaseType;

type ConfigSqliteDatabaseType = {
  type: 'sqlite';
  database: string;
};

type ConfigCockroachdbDatabaseType = {
  type: 'cockroachdb';
  host: string;
  username: string;
  password?: string;
  database: string;
  port?: number;
  ssl?: {
    rejectUnauthorized?: boolean;
    ca?:
      | string
      | {
          path: string;
        };
    cert?:
      | string
      | {
          path: string;
        };
    key?:
      | string
      | {
          path: string;
        };
  };
};
