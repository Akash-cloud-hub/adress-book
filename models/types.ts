import {
    ColumnType, Generated,
    Insertable,
    Selectable,
    Updateable,
    JSONColumnType
} from 'kysely';

export interface Database {
    'master.user': UserTable;
    // Here your saying the data format inside master.user table is the same as User.
}

export type User = Selectable<UserTable>;

export interface UserRole {
  role: 'admin' | 'user' | 'customer' |string; // extend with other possible roles
}

export interface UserTable {
  id?: number; // bigint -> number (or string if very large)
  username: string | null;
  email: string | null;
  mobile_number: string | null;
  role: JSONColumnType<UserRole[]>;
}
