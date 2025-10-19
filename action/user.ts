"use server"

import { db } from "@/lib/db"
import { User } from "@/models/types";

const fetchUsers = async () => {
    const users = db.selectFrom('master.user').selectAll().execute();
    return users;
}

const fetchUsersById = async (id: number) => {
    const user = db.selectFrom('master.user').selectAll().where('id', '=', id).execute();
    return user;
}

const EditUser = async (req:object) => {
    // console.log(req)
    const data = req as User;
    console.log(data)
    console.log(data.email)
    if (data.id && data.id !== 0) {
        // Update existing user
        await db.updateTable('master.user')
            .set({
                username: data.username,
                email: data.email,
                mobile_number: data.mobile_number,
                role: JSON.stringify(data.role),
            })
            .where('id', '=', data.id)
            .execute();
    }
    else {
        // Insert new user
        await db.insertInto('master.user')
            .values({
                username: data.username,
                email: data.email,
                mobile_number: data.mobile_number,
                role: JSON.stringify(data.role),
            })
            .execute();
    }
}

export { fetchUsers, fetchUsersById, EditUser };