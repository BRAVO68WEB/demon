import crypto from "node:crypto";

import { gql } from "graphql-request";

import { client } from "../helpers";

export default class UserSerice {
    public createUser = async (userData: any): Promise<any> => {
        const salt = crypto.randomBytes(16).toString("hex");
        const hash = crypto.pbkdf2Sync(userData.password, salt, 1000, 64, "sha512").toString("hex");
        delete userData.password;
        userData.salt = salt;
        userData.hash = hash;
        const mutation = gql`
            mutation createUser($object: users_insert_input!) {
                insert_users_one(object: $object) {
                    username
                    updated_at
                    last_name
                    id
                    first_name
                    email
                    created_at
                }
            }
        `;

        const variables = {
            object: userData,
        };

        return await client.request(mutation, variables);
    };

    public getUser = async (username: any): Promise<any> => {
        const query = gql`
            query getUser($username: String!) {
                users(where: { username: { _eq: $username } }) {
                    username
                    updated_at
                    last_name
                    id
                    first_name
                    email
                    created_at
                }
            }
        `;

        const variables = {
            username,
        };

        return await client.request(query, variables);
    };

    public updateUser = async (username: string, userData: any): Promise<any> => {
        const mutation = gql`
            mutation updateUser($object: users_set_input!, $username: String!) {
                update_users_by_pk(pk_columns: { username: $username }, _set: $object) {
                    username
                    updated_at
                    last_name
                    id
                    first_name
                    email
                    created_at
                }
            }
        `;

        const variables = {
            object: userData,
            username,
        };

        return await client.request(mutation, variables);
    };

    public deleteUser = async (username: any): Promise<any> => {
        const mutation = gql`
            mutation deleteUser($username: String!) {
                delete_users_by_pk(username: $username) {
                    username
                    updated_at
                    last_name
                    id
                    first_name
                    email
                    created_at
                }
            }
        `;

        const variables = {
            username,
        };

        return await client.request(mutation, variables);
    };

    public getAllUsers = async (searchData: string): Promise<any> => {
        const query = gql`
            query getAllUsers($searchData: String!) {
                users(where: { username: { _ilike: $searchData } }) {
                    username
                    updated_at
                    last_name
                    id
                    first_name
                    email
                    created_at
                }
            }
        `;

        const variables = {
            searchData: `%${searchData}%`,
        };

        return await client.request(query, variables);
    };
}
