export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> =
    | T
    | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    timestamptz: { input: any; output: any };
    uuid: { input: any; output: any };
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["String"]["input"]>;
    _gt?: InputMaybe<Scalars["String"]["input"]>;
    _gte?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column match the given case-insensitive pattern */
    _ilike?: InputMaybe<Scalars["String"]["input"]>;
    _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: InputMaybe<Scalars["String"]["input"]>;
    _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
    /** does the column match the given pattern */
    _like?: InputMaybe<Scalars["String"]["input"]>;
    _lt?: InputMaybe<Scalars["String"]["input"]>;
    _lte?: InputMaybe<Scalars["String"]["input"]>;
    _neq?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: InputMaybe<Scalars["String"]["input"]>;
    _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column NOT match the given pattern */
    _nlike?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: InputMaybe<Scalars["String"]["input"]>;
    /** does the column match the given SQL regular expression */
    _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
    /** ascending ordering of the cursor */
    Asc = "ASC",
    /** descending ordering of the cursor */
    Desc = "DESC",
}

/** mutation root */
export type Mutation_Root = {
    __typename?: "mutation_root";
    /** delete data from the table: "users" */
    delete_users?: Maybe<Users_Mutation_Response>;
    /** delete single row from the table: "users" */
    delete_users_by_pk?: Maybe<Users>;
    /** insert data into the table: "users" */
    insert_users?: Maybe<Users_Mutation_Response>;
    /** insert a single row into the table: "users" */
    insert_users_one?: Maybe<Users>;
    /** update data of the table: "users" */
    update_users?: Maybe<Users_Mutation_Response>;
    /** update single row of the table: "users" */
    update_users_by_pk?: Maybe<Users>;
    /** update multiples rows of table: "users" */
    update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
    where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
    id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
    objects: Array<Users_Insert_Input>;
    on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
    object: Users_Insert_Input;
    on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
    _set?: InputMaybe<Users_Set_Input>;
    where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
    _set?: InputMaybe<Users_Set_Input>;
    pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
    updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
    /** in ascending order, nulls last */
    Asc = "asc",
    /** in ascending order, nulls first */
    AscNullsFirst = "asc_nulls_first",
    /** in ascending order, nulls last */
    AscNullsLast = "asc_nulls_last",
    /** in descending order, nulls first */
    Desc = "desc",
    /** in descending order, nulls first */
    DescNullsFirst = "desc_nulls_first",
    /** in descending order, nulls last */
    DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
    __typename?: "query_root";
    /** fetch data from the table: "users" */
    users: Array<Users>;
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: Users_Aggregate;
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: Maybe<Users>;
};

export type Query_RootUsersArgs = {
    distinct_on?: InputMaybe<Array<Users_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Users_Order_By>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Users_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Users_Order_By>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
    id: Scalars["uuid"]["input"];
};

export type Subscription_Root = {
    __typename?: "subscription_root";
    /** fetch data from the table: "users" */
    users: Array<Users>;
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: Users_Aggregate;
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: Maybe<Users>;
    /** fetch data from the table in a streaming manner: "users" */
    users_stream: Array<Users>;
};

export type Subscription_RootUsersArgs = {
    distinct_on?: InputMaybe<Array<Users_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Users_Order_By>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Users_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]["input"]>;
    offset?: InputMaybe<Scalars["Int"]["input"]>;
    order_by?: InputMaybe<Array<Users_Order_By>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
    id: Scalars["uuid"]["input"];
};

export type Subscription_RootUsers_StreamArgs = {
    batch_size: Scalars["Int"]["input"];
    cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
    where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
    _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
    _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** Users Collections */
export type Users = {
    __typename?: "users";
    created_at: Scalars["timestamptz"]["output"];
    email: Scalars["String"]["output"];
    first_name: Scalars["String"]["output"];
    hash: Scalars["String"]["output"];
    id: Scalars["uuid"]["output"];
    last_name: Scalars["String"]["output"];
    salt: Scalars["String"]["output"];
    updated_at: Scalars["timestamptz"]["output"];
    username: Scalars["String"]["output"];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
    __typename?: "users_aggregate";
    aggregate?: Maybe<Users_Aggregate_Fields>;
    nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
    __typename?: "users_aggregate_fields";
    count: Scalars["Int"]["output"];
    max?: Maybe<Users_Max_Fields>;
    min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Users_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
    _and?: InputMaybe<Array<Users_Bool_Exp>>;
    _not?: InputMaybe<Users_Bool_Exp>;
    _or?: InputMaybe<Array<Users_Bool_Exp>>;
    created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    email?: InputMaybe<String_Comparison_Exp>;
    first_name?: InputMaybe<String_Comparison_Exp>;
    hash?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Uuid_Comparison_Exp>;
    last_name?: InputMaybe<String_Comparison_Exp>;
    salt?: InputMaybe<String_Comparison_Exp>;
    updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
    username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
    /** unique or primary key constraint on columns "hash" */
    UsersHashKey = "users_hash_key",
    /** unique or primary key constraint on columns "id" */
    UsersPkey = "users_pkey",
    /** unique or primary key constraint on columns "salt" */
    UsersSaltKey = "users_salt_key",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
    created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    email?: InputMaybe<Scalars["String"]["input"]>;
    first_name?: InputMaybe<Scalars["String"]["input"]>;
    hash?: InputMaybe<Scalars["String"]["input"]>;
    id?: InputMaybe<Scalars["uuid"]["input"]>;
    last_name?: InputMaybe<Scalars["String"]["input"]>;
    salt?: InputMaybe<Scalars["String"]["input"]>;
    updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
    __typename?: "users_max_fields";
    created_at?: Maybe<Scalars["timestamptz"]["output"]>;
    email?: Maybe<Scalars["String"]["output"]>;
    first_name?: Maybe<Scalars["String"]["output"]>;
    hash?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["uuid"]["output"]>;
    last_name?: Maybe<Scalars["String"]["output"]>;
    salt?: Maybe<Scalars["String"]["output"]>;
    updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
    username?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
    __typename?: "users_min_fields";
    created_at?: Maybe<Scalars["timestamptz"]["output"]>;
    email?: Maybe<Scalars["String"]["output"]>;
    first_name?: Maybe<Scalars["String"]["output"]>;
    hash?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["uuid"]["output"]>;
    last_name?: Maybe<Scalars["String"]["output"]>;
    salt?: Maybe<Scalars["String"]["output"]>;
    updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
    username?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
    __typename?: "users_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"]["output"];
    /** data from the rows affected by the mutation */
    returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
    constraint: Users_Constraint;
    update_columns?: Array<Users_Update_Column>;
    where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
    created_at?: InputMaybe<Order_By>;
    email?: InputMaybe<Order_By>;
    first_name?: InputMaybe<Order_By>;
    hash?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    last_name?: InputMaybe<Order_By>;
    salt?: InputMaybe<Order_By>;
    updated_at?: InputMaybe<Order_By>;
    username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
    id: Scalars["uuid"]["input"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Email = "email",
    /** column name */
    FirstName = "first_name",
    /** column name */
    Hash = "hash",
    /** column name */
    Id = "id",
    /** column name */
    LastName = "last_name",
    /** column name */
    Salt = "salt",
    /** column name */
    UpdatedAt = "updated_at",
    /** column name */
    Username = "username",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
    created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    email?: InputMaybe<Scalars["String"]["input"]>;
    first_name?: InputMaybe<Scalars["String"]["input"]>;
    hash?: InputMaybe<Scalars["String"]["input"]>;
    id?: InputMaybe<Scalars["uuid"]["input"]>;
    last_name?: InputMaybe<Scalars["String"]["input"]>;
    salt?: InputMaybe<Scalars["String"]["input"]>;
    updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Users_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
    created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    email?: InputMaybe<Scalars["String"]["input"]>;
    first_name?: InputMaybe<Scalars["String"]["input"]>;
    hash?: InputMaybe<Scalars["String"]["input"]>;
    id?: InputMaybe<Scalars["uuid"]["input"]>;
    last_name?: InputMaybe<Scalars["String"]["input"]>;
    salt?: InputMaybe<Scalars["String"]["input"]>;
    updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
    username?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
    /** column name */
    CreatedAt = "created_at",
    /** column name */
    Email = "email",
    /** column name */
    FirstName = "first_name",
    /** column name */
    Hash = "hash",
    /** column name */
    Id = "id",
    /** column name */
    LastName = "last_name",
    /** column name */
    Salt = "salt",
    /** column name */
    UpdatedAt = "updated_at",
    /** column name */
    Username = "username",
}

export type Users_Updates = {
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Users_Set_Input>;
    /** filter the rows which have to be updated */
    where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["uuid"]["input"]>;
    _gt?: InputMaybe<Scalars["uuid"]["input"]>;
    _gte?: InputMaybe<Scalars["uuid"]["input"]>;
    _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
    _lt?: InputMaybe<Scalars["uuid"]["input"]>;
    _lte?: InputMaybe<Scalars["uuid"]["input"]>;
    _neq?: InputMaybe<Scalars["uuid"]["input"]>;
    _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};
