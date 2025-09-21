export interface UserRole {
  role: 'admin' | 'user' | 'customer' |string; // extend with other possible roles
}

export interface User {
  id?: number; // bigint -> number (or string if very large)
  username: string | null;
  email: string | null;
  mobile_number: string | null;
  role: UserRole[] | null; // jsonb -> array of roles
}
