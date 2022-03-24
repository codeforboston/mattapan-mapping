import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
};

/** columns and relationships of "Boundaries" */
export type Boundaries = {
  __typename?: 'Boundaries';
  color?: Maybe<Scalars['bpchar']>;
  file: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  narratives: Array<Boundary_Narrative_View>;
  /** An aggregate relationship */
  narratives_aggregate: Boundary_Narrative_View_Aggregate;
  /** An array relationship */
  visibles: Array<Visibles>;
  /** An aggregate relationship */
  visibles_aggregate: Visibles_Aggregate;
};


/** columns and relationships of "Boundaries" */
export type BoundariesNarrativesArgs = {
  distinct_on?: InputMaybe<Array<Boundary_Narrative_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boundary_Narrative_View_Order_By>>;
  where?: InputMaybe<Boundary_Narrative_View_Bool_Exp>;
};


/** columns and relationships of "Boundaries" */
export type BoundariesNarratives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boundary_Narrative_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boundary_Narrative_View_Order_By>>;
  where?: InputMaybe<Boundary_Narrative_View_Bool_Exp>;
};


/** columns and relationships of "Boundaries" */
export type BoundariesVisiblesArgs = {
  distinct_on?: InputMaybe<Array<Visibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visibles_Order_By>>;
  where?: InputMaybe<Visibles_Bool_Exp>;
};


/** columns and relationships of "Boundaries" */
export type BoundariesVisibles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visibles_Order_By>>;
  where?: InputMaybe<Visibles_Bool_Exp>;
};

/** aggregated selection of "Boundaries" */
export type Boundaries_Aggregate = {
  __typename?: 'Boundaries_aggregate';
  aggregate?: Maybe<Boundaries_Aggregate_Fields>;
  nodes: Array<Boundaries>;
};

/** aggregate fields of "Boundaries" */
export type Boundaries_Aggregate_Fields = {
  __typename?: 'Boundaries_aggregate_fields';
  avg?: Maybe<Boundaries_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Boundaries_Max_Fields>;
  min?: Maybe<Boundaries_Min_Fields>;
  stddev?: Maybe<Boundaries_Stddev_Fields>;
  stddev_pop?: Maybe<Boundaries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Boundaries_Stddev_Samp_Fields>;
  sum?: Maybe<Boundaries_Sum_Fields>;
  var_pop?: Maybe<Boundaries_Var_Pop_Fields>;
  var_samp?: Maybe<Boundaries_Var_Samp_Fields>;
  variance?: Maybe<Boundaries_Variance_Fields>;
};


/** aggregate fields of "Boundaries" */
export type Boundaries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Boundaries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Boundaries_Avg_Fields = {
  __typename?: 'Boundaries_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Boundaries". All fields are combined with a logical 'AND'. */
export type Boundaries_Bool_Exp = {
  _and?: InputMaybe<Array<Boundaries_Bool_Exp>>;
  _not?: InputMaybe<Boundaries_Bool_Exp>;
  _or?: InputMaybe<Array<Boundaries_Bool_Exp>>;
  color?: InputMaybe<Bpchar_Comparison_Exp>;
  file?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  narratives?: InputMaybe<Boundary_Narrative_View_Bool_Exp>;
  visibles?: InputMaybe<Visibles_Bool_Exp>;
};

/** aggregate max on columns */
export type Boundaries_Max_Fields = {
  __typename?: 'Boundaries_max_fields';
  color?: Maybe<Scalars['bpchar']>;
  file?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Boundaries_Min_Fields = {
  __typename?: 'Boundaries_min_fields';
  color?: Maybe<Scalars['bpchar']>;
  file?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Boundaries" */
export type Boundaries_Mutation_Response = {
  __typename?: 'Boundaries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Boundaries>;
};

/** Ordering options when selecting data from "Boundaries". */
export type Boundaries_Order_By = {
  color?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  narratives_aggregate?: InputMaybe<Boundary_Narrative_View_Aggregate_Order_By>;
  visibles_aggregate?: InputMaybe<Visibles_Aggregate_Order_By>;
};

/** primary key columns input for table: Boundaries */
export type Boundaries_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Boundaries" */
export enum Boundaries_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  File = 'file',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Boundaries" */
export type Boundaries_Set_Input = {
  color?: InputMaybe<Scalars['bpchar']>;
  file?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Boundaries_Stddev_Fields = {
  __typename?: 'Boundaries_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Boundaries_Stddev_Pop_Fields = {
  __typename?: 'Boundaries_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Boundaries_Stddev_Samp_Fields = {
  __typename?: 'Boundaries_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Boundaries_Sum_Fields = {
  __typename?: 'Boundaries_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Boundaries_Var_Pop_Fields = {
  __typename?: 'Boundaries_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Boundaries_Var_Samp_Fields = {
  __typename?: 'Boundaries_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Boundaries_Variance_Fields = {
  __typename?: 'Boundaries_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Narratives" */
export type Narratives = {
  __typename?: 'Narratives';
  /** An array relationship */
  boundaries: Array<Narrative_Boundary_View>;
  /** An aggregate relationship */
  boundaries_aggregate: Narrative_Boundary_View_Aggregate;
  color: Scalars['bpchar'];
  id: Scalars['Int'];
  name: Scalars['bpchar'];
  /** An array relationship */
  visibles: Array<Visibles>;
  /** An aggregate relationship */
  visibles_aggregate: Visibles_Aggregate;
};


/** columns and relationships of "Narratives" */
export type NarrativesBoundariesArgs = {
  distinct_on?: InputMaybe<Array<Narrative_Boundary_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Narrative_Boundary_View_Order_By>>;
  where?: InputMaybe<Narrative_Boundary_View_Bool_Exp>;
};


/** columns and relationships of "Narratives" */
export type NarrativesBoundaries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Narrative_Boundary_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Narrative_Boundary_View_Order_By>>;
  where?: InputMaybe<Narrative_Boundary_View_Bool_Exp>;
};


/** columns and relationships of "Narratives" */
export type NarrativesVisiblesArgs = {
  distinct_on?: InputMaybe<Array<Visibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visibles_Order_By>>;
  where?: InputMaybe<Visibles_Bool_Exp>;
};


/** columns and relationships of "Narratives" */
export type NarrativesVisibles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visibles_Order_By>>;
  where?: InputMaybe<Visibles_Bool_Exp>;
};

/** aggregated selection of "Narratives" */
export type Narratives_Aggregate = {
  __typename?: 'Narratives_aggregate';
  aggregate?: Maybe<Narratives_Aggregate_Fields>;
  nodes: Array<Narratives>;
};

/** aggregate fields of "Narratives" */
export type Narratives_Aggregate_Fields = {
  __typename?: 'Narratives_aggregate_fields';
  avg?: Maybe<Narratives_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Narratives_Max_Fields>;
  min?: Maybe<Narratives_Min_Fields>;
  stddev?: Maybe<Narratives_Stddev_Fields>;
  stddev_pop?: Maybe<Narratives_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Narratives_Stddev_Samp_Fields>;
  sum?: Maybe<Narratives_Sum_Fields>;
  var_pop?: Maybe<Narratives_Var_Pop_Fields>;
  var_samp?: Maybe<Narratives_Var_Samp_Fields>;
  variance?: Maybe<Narratives_Variance_Fields>;
};


/** aggregate fields of "Narratives" */
export type Narratives_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Narratives_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Narratives_Avg_Fields = {
  __typename?: 'Narratives_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Narratives". All fields are combined with a logical 'AND'. */
export type Narratives_Bool_Exp = {
  _and?: InputMaybe<Array<Narratives_Bool_Exp>>;
  _not?: InputMaybe<Narratives_Bool_Exp>;
  _or?: InputMaybe<Array<Narratives_Bool_Exp>>;
  boundaries?: InputMaybe<Narrative_Boundary_View_Bool_Exp>;
  color?: InputMaybe<Bpchar_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<Bpchar_Comparison_Exp>;
  visibles?: InputMaybe<Visibles_Bool_Exp>;
};

/** aggregate max on columns */
export type Narratives_Max_Fields = {
  __typename?: 'Narratives_max_fields';
  color?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['bpchar']>;
};

/** aggregate min on columns */
export type Narratives_Min_Fields = {
  __typename?: 'Narratives_min_fields';
  color?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['bpchar']>;
};

/** response of any mutation on the table "Narratives" */
export type Narratives_Mutation_Response = {
  __typename?: 'Narratives_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Narratives>;
};

/** Ordering options when selecting data from "Narratives". */
export type Narratives_Order_By = {
  boundaries_aggregate?: InputMaybe<Narrative_Boundary_View_Aggregate_Order_By>;
  color?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  visibles_aggregate?: InputMaybe<Visibles_Aggregate_Order_By>;
};

/** primary key columns input for table: Narratives */
export type Narratives_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Narratives" */
export enum Narratives_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Narratives" */
export type Narratives_Set_Input = {
  color?: InputMaybe<Scalars['bpchar']>;
  name?: InputMaybe<Scalars['bpchar']>;
};

/** aggregate stddev on columns */
export type Narratives_Stddev_Fields = {
  __typename?: 'Narratives_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Narratives_Stddev_Pop_Fields = {
  __typename?: 'Narratives_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Narratives_Stddev_Samp_Fields = {
  __typename?: 'Narratives_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Narratives_Sum_Fields = {
  __typename?: 'Narratives_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Narratives_Var_Pop_Fields = {
  __typename?: 'Narratives_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Narratives_Var_Samp_Fields = {
  __typename?: 'Narratives_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Narratives_Variance_Fields = {
  __typename?: 'Narratives_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Videos" */
export type Videos = {
  __typename?: 'Videos';
  author: Scalars['String'];
  id: Scalars['Int'];
  src: Scalars['String'];
  transcript?: Maybe<Scalars['String']>;
};

/** aggregated selection of "Videos" */
export type Videos_Aggregate = {
  __typename?: 'Videos_aggregate';
  aggregate?: Maybe<Videos_Aggregate_Fields>;
  nodes: Array<Videos>;
};

/** aggregate fields of "Videos" */
export type Videos_Aggregate_Fields = {
  __typename?: 'Videos_aggregate_fields';
  avg?: Maybe<Videos_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Videos_Max_Fields>;
  min?: Maybe<Videos_Min_Fields>;
  stddev?: Maybe<Videos_Stddev_Fields>;
  stddev_pop?: Maybe<Videos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Videos_Stddev_Samp_Fields>;
  sum?: Maybe<Videos_Sum_Fields>;
  var_pop?: Maybe<Videos_Var_Pop_Fields>;
  var_samp?: Maybe<Videos_Var_Samp_Fields>;
  variance?: Maybe<Videos_Variance_Fields>;
};


/** aggregate fields of "Videos" */
export type Videos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Videos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Videos_Avg_Fields = {
  __typename?: 'Videos_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Videos". All fields are combined with a logical 'AND'. */
export type Videos_Bool_Exp = {
  _and?: InputMaybe<Array<Videos_Bool_Exp>>;
  _not?: InputMaybe<Videos_Bool_Exp>;
  _or?: InputMaybe<Array<Videos_Bool_Exp>>;
  author?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  src?: InputMaybe<String_Comparison_Exp>;
  transcript?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Videos_Max_Fields = {
  __typename?: 'Videos_max_fields';
  author?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  transcript?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Videos_Min_Fields = {
  __typename?: 'Videos_min_fields';
  author?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  transcript?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Videos" */
export type Videos_Mutation_Response = {
  __typename?: 'Videos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Videos>;
};

/** Ordering options when selecting data from "Videos". */
export type Videos_Order_By = {
  author?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  src?: InputMaybe<Order_By>;
  transcript?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Videos */
export type Videos_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Videos" */
export enum Videos_Select_Column {
  /** column name */
  Author = 'author',
  /** column name */
  Id = 'id',
  /** column name */
  Src = 'src',
  /** column name */
  Transcript = 'transcript'
}

/** input type for updating data in table "Videos" */
export type Videos_Set_Input = {
  author?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  transcript?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Videos_Stddev_Fields = {
  __typename?: 'Videos_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Videos_Stddev_Pop_Fields = {
  __typename?: 'Videos_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Videos_Stddev_Samp_Fields = {
  __typename?: 'Videos_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Videos_Sum_Fields = {
  __typename?: 'Videos_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Videos_Var_Pop_Fields = {
  __typename?: 'Videos_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Videos_Var_Samp_Fields = {
  __typename?: 'Videos_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Videos_Variance_Fields = {
  __typename?: 'Videos_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Visibles" */
export type Visibles = {
  __typename?: 'Visibles';
  /** An object relationship */
  boundary: Boundaries;
  boundary_id: Scalars['Int'];
  /** A computed field, executes function "visibles_id" */
  id?: Maybe<Scalars['String']>;
  /** An object relationship */
  narrative: Narratives;
  narrative_id: Scalars['Int'];
};

/** aggregated selection of "Visibles" */
export type Visibles_Aggregate = {
  __typename?: 'Visibles_aggregate';
  aggregate?: Maybe<Visibles_Aggregate_Fields>;
  nodes: Array<Visibles>;
};

/** aggregate fields of "Visibles" */
export type Visibles_Aggregate_Fields = {
  __typename?: 'Visibles_aggregate_fields';
  avg?: Maybe<Visibles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Visibles_Max_Fields>;
  min?: Maybe<Visibles_Min_Fields>;
  stddev?: Maybe<Visibles_Stddev_Fields>;
  stddev_pop?: Maybe<Visibles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Visibles_Stddev_Samp_Fields>;
  sum?: Maybe<Visibles_Sum_Fields>;
  var_pop?: Maybe<Visibles_Var_Pop_Fields>;
  var_samp?: Maybe<Visibles_Var_Samp_Fields>;
  variance?: Maybe<Visibles_Variance_Fields>;
};


/** aggregate fields of "Visibles" */
export type Visibles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Visibles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Visibles" */
export type Visibles_Aggregate_Order_By = {
  avg?: InputMaybe<Visibles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Visibles_Max_Order_By>;
  min?: InputMaybe<Visibles_Min_Order_By>;
  stddev?: InputMaybe<Visibles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Visibles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Visibles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Visibles_Sum_Order_By>;
  var_pop?: InputMaybe<Visibles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Visibles_Var_Samp_Order_By>;
  variance?: InputMaybe<Visibles_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Visibles_Avg_Fields = {
  __typename?: 'Visibles_avg_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Visibles" */
export type Visibles_Avg_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Visibles". All fields are combined with a logical 'AND'. */
export type Visibles_Bool_Exp = {
  _and?: InputMaybe<Array<Visibles_Bool_Exp>>;
  _not?: InputMaybe<Visibles_Bool_Exp>;
  _or?: InputMaybe<Array<Visibles_Bool_Exp>>;
  boundary?: InputMaybe<Boundaries_Bool_Exp>;
  boundary_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  narrative?: InputMaybe<Narratives_Bool_Exp>;
  narrative_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Visibles" */
export enum Visibles_Constraint {
  /** unique or primary key constraint */
  VisiblesPkey = 'Visibles_pkey'
}

/** input type for incrementing numeric columns in table "Visibles" */
export type Visibles_Inc_Input = {
  boundary_id?: InputMaybe<Scalars['Int']>;
  narrative_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Visibles" */
export type Visibles_Insert_Input = {
  boundary_id?: InputMaybe<Scalars['Int']>;
  narrative_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Visibles_Max_Fields = {
  __typename?: 'Visibles_max_fields';
  boundary_id?: Maybe<Scalars['Int']>;
  narrative_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Visibles" */
export type Visibles_Max_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Visibles_Min_Fields = {
  __typename?: 'Visibles_min_fields';
  boundary_id?: Maybe<Scalars['Int']>;
  narrative_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Visibles" */
export type Visibles_Min_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Visibles" */
export type Visibles_Mutation_Response = {
  __typename?: 'Visibles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Visibles>;
};

/** on_conflict condition type for table "Visibles" */
export type Visibles_On_Conflict = {
  constraint: Visibles_Constraint;
  update_columns?: Array<Visibles_Update_Column>;
  where?: InputMaybe<Visibles_Bool_Exp>;
};

/** Ordering options when selecting data from "Visibles". */
export type Visibles_Order_By = {
  boundary?: InputMaybe<Boundaries_Order_By>;
  boundary_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  narrative?: InputMaybe<Narratives_Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Visibles */
export type Visibles_Pk_Columns_Input = {
  boundary_id: Scalars['Int'];
  narrative_id: Scalars['Int'];
};

/** select columns of table "Visibles" */
export enum Visibles_Select_Column {
  /** column name */
  BoundaryId = 'boundary_id',
  /** column name */
  NarrativeId = 'narrative_id'
}

/** input type for updating data in table "Visibles" */
export type Visibles_Set_Input = {
  boundary_id?: InputMaybe<Scalars['Int']>;
  narrative_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Visibles_Stddev_Fields = {
  __typename?: 'Visibles_stddev_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Visibles" */
export type Visibles_Stddev_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Visibles_Stddev_Pop_Fields = {
  __typename?: 'Visibles_stddev_pop_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Visibles" */
export type Visibles_Stddev_Pop_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Visibles_Stddev_Samp_Fields = {
  __typename?: 'Visibles_stddev_samp_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Visibles" */
export type Visibles_Stddev_Samp_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Visibles_Sum_Fields = {
  __typename?: 'Visibles_sum_fields';
  boundary_id?: Maybe<Scalars['Int']>;
  narrative_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Visibles" */
export type Visibles_Sum_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** update columns of table "Visibles" */
export enum Visibles_Update_Column {
  /** column name */
  BoundaryId = 'boundary_id',
  /** column name */
  NarrativeId = 'narrative_id'
}

/** aggregate var_pop on columns */
export type Visibles_Var_Pop_Fields = {
  __typename?: 'Visibles_var_pop_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Visibles" */
export type Visibles_Var_Pop_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Visibles_Var_Samp_Fields = {
  __typename?: 'Visibles_var_samp_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Visibles" */
export type Visibles_Var_Samp_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Visibles_Variance_Fields = {
  __typename?: 'Visibles_variance_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Visibles" */
export type Visibles_Variance_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "boundary_narrative_view" */
export type Boundary_Narrative_View = {
  __typename?: 'boundary_narrative_view';
  boundary_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['bpchar']>;
};

/** aggregated selection of "boundary_narrative_view" */
export type Boundary_Narrative_View_Aggregate = {
  __typename?: 'boundary_narrative_view_aggregate';
  aggregate?: Maybe<Boundary_Narrative_View_Aggregate_Fields>;
  nodes: Array<Boundary_Narrative_View>;
};

/** aggregate fields of "boundary_narrative_view" */
export type Boundary_Narrative_View_Aggregate_Fields = {
  __typename?: 'boundary_narrative_view_aggregate_fields';
  avg?: Maybe<Boundary_Narrative_View_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Boundary_Narrative_View_Max_Fields>;
  min?: Maybe<Boundary_Narrative_View_Min_Fields>;
  stddev?: Maybe<Boundary_Narrative_View_Stddev_Fields>;
  stddev_pop?: Maybe<Boundary_Narrative_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Boundary_Narrative_View_Stddev_Samp_Fields>;
  sum?: Maybe<Boundary_Narrative_View_Sum_Fields>;
  var_pop?: Maybe<Boundary_Narrative_View_Var_Pop_Fields>;
  var_samp?: Maybe<Boundary_Narrative_View_Var_Samp_Fields>;
  variance?: Maybe<Boundary_Narrative_View_Variance_Fields>;
};


/** aggregate fields of "boundary_narrative_view" */
export type Boundary_Narrative_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Boundary_Narrative_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "boundary_narrative_view" */
export type Boundary_Narrative_View_Aggregate_Order_By = {
  avg?: InputMaybe<Boundary_Narrative_View_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Boundary_Narrative_View_Max_Order_By>;
  min?: InputMaybe<Boundary_Narrative_View_Min_Order_By>;
  stddev?: InputMaybe<Boundary_Narrative_View_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Boundary_Narrative_View_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Boundary_Narrative_View_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Boundary_Narrative_View_Sum_Order_By>;
  var_pop?: InputMaybe<Boundary_Narrative_View_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Boundary_Narrative_View_Var_Samp_Order_By>;
  variance?: InputMaybe<Boundary_Narrative_View_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Boundary_Narrative_View_Avg_Fields = {
  __typename?: 'boundary_narrative_view_avg_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "boundary_narrative_view" */
export type Boundary_Narrative_View_Avg_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "boundary_narrative_view". All fields are combined with a logical 'AND'. */
export type Boundary_Narrative_View_Bool_Exp = {
  _and?: InputMaybe<Array<Boundary_Narrative_View_Bool_Exp>>;
  _not?: InputMaybe<Boundary_Narrative_View_Bool_Exp>;
  _or?: InputMaybe<Array<Boundary_Narrative_View_Bool_Exp>>;
  boundary_id?: InputMaybe<Int_Comparison_Exp>;
  color?: InputMaybe<Bpchar_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<Bpchar_Comparison_Exp>;
};

/** aggregate max on columns */
export type Boundary_Narrative_View_Max_Fields = {
  __typename?: 'boundary_narrative_view_max_fields';
  boundary_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['bpchar']>;
};

/** order by max() on columns of table "boundary_narrative_view" */
export type Boundary_Narrative_View_Max_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Boundary_Narrative_View_Min_Fields = {
  __typename?: 'boundary_narrative_view_min_fields';
  boundary_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['bpchar']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['bpchar']>;
};

/** order by min() on columns of table "boundary_narrative_view" */
export type Boundary_Narrative_View_Min_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "boundary_narrative_view". */
export type Boundary_Narrative_View_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "boundary_narrative_view" */
export enum Boundary_Narrative_View_Select_Column {
  /** column name */
  BoundaryId = 'boundary_id',
  /** column name */
  Color = 'color',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate stddev on columns */
export type Boundary_Narrative_View_Stddev_Fields = {
  __typename?: 'boundary_narrative_view_stddev_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "boundary_narrative_view" */
export type Boundary_Narrative_View_Stddev_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Boundary_Narrative_View_Stddev_Pop_Fields = {
  __typename?: 'boundary_narrative_view_stddev_pop_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "boundary_narrative_view" */
export type Boundary_Narrative_View_Stddev_Pop_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Boundary_Narrative_View_Stddev_Samp_Fields = {
  __typename?: 'boundary_narrative_view_stddev_samp_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "boundary_narrative_view" */
export type Boundary_Narrative_View_Stddev_Samp_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Boundary_Narrative_View_Sum_Fields = {
  __typename?: 'boundary_narrative_view_sum_fields';
  boundary_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "boundary_narrative_view" */
export type Boundary_Narrative_View_Sum_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Boundary_Narrative_View_Var_Pop_Fields = {
  __typename?: 'boundary_narrative_view_var_pop_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "boundary_narrative_view" */
export type Boundary_Narrative_View_Var_Pop_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Boundary_Narrative_View_Var_Samp_Fields = {
  __typename?: 'boundary_narrative_view_var_samp_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "boundary_narrative_view" */
export type Boundary_Narrative_View_Var_Samp_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Boundary_Narrative_View_Variance_Fields = {
  __typename?: 'boundary_narrative_view_variance_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "boundary_narrative_view" */
export type Boundary_Narrative_View_Variance_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Boundaries" */
  delete_Boundaries?: Maybe<Boundaries_Mutation_Response>;
  /** delete single row from the table: "Boundaries" */
  delete_Boundaries_by_pk?: Maybe<Boundaries>;
  /** delete data from the table: "Visibles" */
  delete_Visibles?: Maybe<Visibles_Mutation_Response>;
  /** delete single row from the table: "Visibles" */
  delete_Visibles_by_pk?: Maybe<Visibles>;
  /** insert data into the table: "Visibles" */
  insert_Visibles?: Maybe<Visibles_Mutation_Response>;
  /** insert a single row into the table: "Visibles" */
  insert_Visibles_one?: Maybe<Visibles>;
  /** update data of the table: "Boundaries" */
  update_Boundaries?: Maybe<Boundaries_Mutation_Response>;
  /** update single row of the table: "Boundaries" */
  update_Boundaries_by_pk?: Maybe<Boundaries>;
  /** update data of the table: "Narratives" */
  update_Narratives?: Maybe<Narratives_Mutation_Response>;
  /** update single row of the table: "Narratives" */
  update_Narratives_by_pk?: Maybe<Narratives>;
  /** update data of the table: "Videos" */
  update_Videos?: Maybe<Videos_Mutation_Response>;
  /** update single row of the table: "Videos" */
  update_Videos_by_pk?: Maybe<Videos>;
  /** update data of the table: "Visibles" */
  update_Visibles?: Maybe<Visibles_Mutation_Response>;
  /** update single row of the table: "Visibles" */
  update_Visibles_by_pk?: Maybe<Visibles>;
};


/** mutation root */
export type Mutation_RootDelete_BoundariesArgs = {
  where: Boundaries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Boundaries_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_VisiblesArgs = {
  where: Visibles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Visibles_By_PkArgs = {
  boundary_id: Scalars['Int'];
  narrative_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_VisiblesArgs = {
  objects: Array<Visibles_Insert_Input>;
  on_conflict?: InputMaybe<Visibles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Visibles_OneArgs = {
  object: Visibles_Insert_Input;
  on_conflict?: InputMaybe<Visibles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BoundariesArgs = {
  _set?: InputMaybe<Boundaries_Set_Input>;
  where: Boundaries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Boundaries_By_PkArgs = {
  _set?: InputMaybe<Boundaries_Set_Input>;
  pk_columns: Boundaries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_NarrativesArgs = {
  _set?: InputMaybe<Narratives_Set_Input>;
  where: Narratives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Narratives_By_PkArgs = {
  _set?: InputMaybe<Narratives_Set_Input>;
  pk_columns: Narratives_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_VideosArgs = {
  _set?: InputMaybe<Videos_Set_Input>;
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Videos_By_PkArgs = {
  _set?: InputMaybe<Videos_Set_Input>;
  pk_columns: Videos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_VisiblesArgs = {
  _inc?: InputMaybe<Visibles_Inc_Input>;
  _set?: InputMaybe<Visibles_Set_Input>;
  where: Visibles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Visibles_By_PkArgs = {
  _inc?: InputMaybe<Visibles_Inc_Input>;
  _set?: InputMaybe<Visibles_Set_Input>;
  pk_columns: Visibles_Pk_Columns_Input;
};

/** columns and relationships of "narrative_boundary_view" */
export type Narrative_Boundary_View = {
  __typename?: 'narrative_boundary_view';
  boundary_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['bpchar']>;
  file?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  narrative_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "narrative_boundary_view" */
export type Narrative_Boundary_View_Aggregate = {
  __typename?: 'narrative_boundary_view_aggregate';
  aggregate?: Maybe<Narrative_Boundary_View_Aggregate_Fields>;
  nodes: Array<Narrative_Boundary_View>;
};

/** aggregate fields of "narrative_boundary_view" */
export type Narrative_Boundary_View_Aggregate_Fields = {
  __typename?: 'narrative_boundary_view_aggregate_fields';
  avg?: Maybe<Narrative_Boundary_View_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Narrative_Boundary_View_Max_Fields>;
  min?: Maybe<Narrative_Boundary_View_Min_Fields>;
  stddev?: Maybe<Narrative_Boundary_View_Stddev_Fields>;
  stddev_pop?: Maybe<Narrative_Boundary_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Narrative_Boundary_View_Stddev_Samp_Fields>;
  sum?: Maybe<Narrative_Boundary_View_Sum_Fields>;
  var_pop?: Maybe<Narrative_Boundary_View_Var_Pop_Fields>;
  var_samp?: Maybe<Narrative_Boundary_View_Var_Samp_Fields>;
  variance?: Maybe<Narrative_Boundary_View_Variance_Fields>;
};


/** aggregate fields of "narrative_boundary_view" */
export type Narrative_Boundary_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Narrative_Boundary_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "narrative_boundary_view" */
export type Narrative_Boundary_View_Aggregate_Order_By = {
  avg?: InputMaybe<Narrative_Boundary_View_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Narrative_Boundary_View_Max_Order_By>;
  min?: InputMaybe<Narrative_Boundary_View_Min_Order_By>;
  stddev?: InputMaybe<Narrative_Boundary_View_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Narrative_Boundary_View_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Narrative_Boundary_View_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Narrative_Boundary_View_Sum_Order_By>;
  var_pop?: InputMaybe<Narrative_Boundary_View_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Narrative_Boundary_View_Var_Samp_Order_By>;
  variance?: InputMaybe<Narrative_Boundary_View_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Narrative_Boundary_View_Avg_Fields = {
  __typename?: 'narrative_boundary_view_avg_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "narrative_boundary_view" */
export type Narrative_Boundary_View_Avg_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "narrative_boundary_view". All fields are combined with a logical 'AND'. */
export type Narrative_Boundary_View_Bool_Exp = {
  _and?: InputMaybe<Array<Narrative_Boundary_View_Bool_Exp>>;
  _not?: InputMaybe<Narrative_Boundary_View_Bool_Exp>;
  _or?: InputMaybe<Array<Narrative_Boundary_View_Bool_Exp>>;
  boundary_id?: InputMaybe<Int_Comparison_Exp>;
  color?: InputMaybe<Bpchar_Comparison_Exp>;
  file?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  narrative_id?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Narrative_Boundary_View_Max_Fields = {
  __typename?: 'narrative_boundary_view_max_fields';
  boundary_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['bpchar']>;
  file?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  narrative_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "narrative_boundary_view" */
export type Narrative_Boundary_View_Max_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Narrative_Boundary_View_Min_Fields = {
  __typename?: 'narrative_boundary_view_min_fields';
  boundary_id?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['bpchar']>;
  file?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  narrative_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "narrative_boundary_view" */
export type Narrative_Boundary_View_Min_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "narrative_boundary_view". */
export type Narrative_Boundary_View_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  file?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** select columns of table "narrative_boundary_view" */
export enum Narrative_Boundary_View_Select_Column {
  /** column name */
  BoundaryId = 'boundary_id',
  /** column name */
  Color = 'color',
  /** column name */
  File = 'file',
  /** column name */
  Name = 'name',
  /** column name */
  NarrativeId = 'narrative_id'
}

/** aggregate stddev on columns */
export type Narrative_Boundary_View_Stddev_Fields = {
  __typename?: 'narrative_boundary_view_stddev_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "narrative_boundary_view" */
export type Narrative_Boundary_View_Stddev_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Narrative_Boundary_View_Stddev_Pop_Fields = {
  __typename?: 'narrative_boundary_view_stddev_pop_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "narrative_boundary_view" */
export type Narrative_Boundary_View_Stddev_Pop_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Narrative_Boundary_View_Stddev_Samp_Fields = {
  __typename?: 'narrative_boundary_view_stddev_samp_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "narrative_boundary_view" */
export type Narrative_Boundary_View_Stddev_Samp_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Narrative_Boundary_View_Sum_Fields = {
  __typename?: 'narrative_boundary_view_sum_fields';
  boundary_id?: Maybe<Scalars['Int']>;
  narrative_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "narrative_boundary_view" */
export type Narrative_Boundary_View_Sum_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Narrative_Boundary_View_Var_Pop_Fields = {
  __typename?: 'narrative_boundary_view_var_pop_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "narrative_boundary_view" */
export type Narrative_Boundary_View_Var_Pop_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Narrative_Boundary_View_Var_Samp_Fields = {
  __typename?: 'narrative_boundary_view_var_samp_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "narrative_boundary_view" */
export type Narrative_Boundary_View_Var_Samp_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Narrative_Boundary_View_Variance_Fields = {
  __typename?: 'narrative_boundary_view_variance_fields';
  boundary_id?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "narrative_boundary_view" */
export type Narrative_Boundary_View_Variance_Order_By = {
  boundary_id?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Boundaries" */
  Boundaries: Array<Boundaries>;
  /** fetch aggregated fields from the table: "Boundaries" */
  Boundaries_aggregate: Boundaries_Aggregate;
  /** fetch data from the table: "Boundaries" using primary key columns */
  Boundaries_by_pk?: Maybe<Boundaries>;
  /** fetch data from the table: "Narratives" */
  Narratives: Array<Narratives>;
  /** fetch aggregated fields from the table: "Narratives" */
  Narratives_aggregate: Narratives_Aggregate;
  /** fetch data from the table: "Narratives" using primary key columns */
  Narratives_by_pk?: Maybe<Narratives>;
  /** fetch data from the table: "Videos" */
  Videos: Array<Videos>;
  /** fetch aggregated fields from the table: "Videos" */
  Videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "Videos" using primary key columns */
  Videos_by_pk?: Maybe<Videos>;
  /** fetch data from the table: "Visibles" */
  Visibles: Array<Visibles>;
  /** fetch aggregated fields from the table: "Visibles" */
  Visibles_aggregate: Visibles_Aggregate;
  /** fetch data from the table: "Visibles" using primary key columns */
  Visibles_by_pk?: Maybe<Visibles>;
  /** fetch data from the table: "boundary_narrative_view" */
  boundary_narrative_view: Array<Boundary_Narrative_View>;
  /** fetch aggregated fields from the table: "boundary_narrative_view" */
  boundary_narrative_view_aggregate: Boundary_Narrative_View_Aggregate;
  /** fetch data from the table: "narrative_boundary_view" */
  narrative_boundary_view: Array<Narrative_Boundary_View>;
  /** fetch aggregated fields from the table: "narrative_boundary_view" */
  narrative_boundary_view_aggregate: Narrative_Boundary_View_Aggregate;
};


export type Query_RootBoundariesArgs = {
  distinct_on?: InputMaybe<Array<Boundaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boundaries_Order_By>>;
  where?: InputMaybe<Boundaries_Bool_Exp>;
};


export type Query_RootBoundaries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boundaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boundaries_Order_By>>;
  where?: InputMaybe<Boundaries_Bool_Exp>;
};


export type Query_RootBoundaries_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootNarrativesArgs = {
  distinct_on?: InputMaybe<Array<Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Narratives_Order_By>>;
  where?: InputMaybe<Narratives_Bool_Exp>;
};


export type Query_RootNarratives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Narratives_Order_By>>;
  where?: InputMaybe<Narratives_Bool_Exp>;
};


export type Query_RootNarratives_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVideosArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVisiblesArgs = {
  distinct_on?: InputMaybe<Array<Visibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visibles_Order_By>>;
  where?: InputMaybe<Visibles_Bool_Exp>;
};


export type Query_RootVisibles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visibles_Order_By>>;
  where?: InputMaybe<Visibles_Bool_Exp>;
};


export type Query_RootVisibles_By_PkArgs = {
  boundary_id: Scalars['Int'];
  narrative_id: Scalars['Int'];
};


export type Query_RootBoundary_Narrative_ViewArgs = {
  distinct_on?: InputMaybe<Array<Boundary_Narrative_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boundary_Narrative_View_Order_By>>;
  where?: InputMaybe<Boundary_Narrative_View_Bool_Exp>;
};


export type Query_RootBoundary_Narrative_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boundary_Narrative_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boundary_Narrative_View_Order_By>>;
  where?: InputMaybe<Boundary_Narrative_View_Bool_Exp>;
};


export type Query_RootNarrative_Boundary_ViewArgs = {
  distinct_on?: InputMaybe<Array<Narrative_Boundary_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Narrative_Boundary_View_Order_By>>;
  where?: InputMaybe<Narrative_Boundary_View_Bool_Exp>;
};


export type Query_RootNarrative_Boundary_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Narrative_Boundary_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Narrative_Boundary_View_Order_By>>;
  where?: InputMaybe<Narrative_Boundary_View_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Boundaries" */
  Boundaries: Array<Boundaries>;
  /** fetch aggregated fields from the table: "Boundaries" */
  Boundaries_aggregate: Boundaries_Aggregate;
  /** fetch data from the table: "Boundaries" using primary key columns */
  Boundaries_by_pk?: Maybe<Boundaries>;
  /** fetch data from the table: "Narratives" */
  Narratives: Array<Narratives>;
  /** fetch aggregated fields from the table: "Narratives" */
  Narratives_aggregate: Narratives_Aggregate;
  /** fetch data from the table: "Narratives" using primary key columns */
  Narratives_by_pk?: Maybe<Narratives>;
  /** fetch data from the table: "Videos" */
  Videos: Array<Videos>;
  /** fetch aggregated fields from the table: "Videos" */
  Videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "Videos" using primary key columns */
  Videos_by_pk?: Maybe<Videos>;
  /** fetch data from the table: "Visibles" */
  Visibles: Array<Visibles>;
  /** fetch aggregated fields from the table: "Visibles" */
  Visibles_aggregate: Visibles_Aggregate;
  /** fetch data from the table: "Visibles" using primary key columns */
  Visibles_by_pk?: Maybe<Visibles>;
  /** fetch data from the table: "boundary_narrative_view" */
  boundary_narrative_view: Array<Boundary_Narrative_View>;
  /** fetch aggregated fields from the table: "boundary_narrative_view" */
  boundary_narrative_view_aggregate: Boundary_Narrative_View_Aggregate;
  /** fetch data from the table: "narrative_boundary_view" */
  narrative_boundary_view: Array<Narrative_Boundary_View>;
  /** fetch aggregated fields from the table: "narrative_boundary_view" */
  narrative_boundary_view_aggregate: Narrative_Boundary_View_Aggregate;
};


export type Subscription_RootBoundariesArgs = {
  distinct_on?: InputMaybe<Array<Boundaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boundaries_Order_By>>;
  where?: InputMaybe<Boundaries_Bool_Exp>;
};


export type Subscription_RootBoundaries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boundaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boundaries_Order_By>>;
  where?: InputMaybe<Boundaries_Bool_Exp>;
};


export type Subscription_RootBoundaries_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootNarrativesArgs = {
  distinct_on?: InputMaybe<Array<Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Narratives_Order_By>>;
  where?: InputMaybe<Narratives_Bool_Exp>;
};


export type Subscription_RootNarratives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Narratives_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Narratives_Order_By>>;
  where?: InputMaybe<Narratives_Bool_Exp>;
};


export type Subscription_RootNarratives_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVideosArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Videos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Videos_Order_By>>;
  where?: InputMaybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVisiblesArgs = {
  distinct_on?: InputMaybe<Array<Visibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visibles_Order_By>>;
  where?: InputMaybe<Visibles_Bool_Exp>;
};


export type Subscription_RootVisibles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Visibles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Visibles_Order_By>>;
  where?: InputMaybe<Visibles_Bool_Exp>;
};


export type Subscription_RootVisibles_By_PkArgs = {
  boundary_id: Scalars['Int'];
  narrative_id: Scalars['Int'];
};


export type Subscription_RootBoundary_Narrative_ViewArgs = {
  distinct_on?: InputMaybe<Array<Boundary_Narrative_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boundary_Narrative_View_Order_By>>;
  where?: InputMaybe<Boundary_Narrative_View_Bool_Exp>;
};


export type Subscription_RootBoundary_Narrative_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boundary_Narrative_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Boundary_Narrative_View_Order_By>>;
  where?: InputMaybe<Boundary_Narrative_View_Bool_Exp>;
};


export type Subscription_RootNarrative_Boundary_ViewArgs = {
  distinct_on?: InputMaybe<Array<Narrative_Boundary_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Narrative_Boundary_View_Order_By>>;
  where?: InputMaybe<Narrative_Boundary_View_Bool_Exp>;
};


export type Subscription_RootNarrative_Boundary_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Narrative_Boundary_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Narrative_Boundary_View_Order_By>>;
  where?: InputMaybe<Narrative_Boundary_View_Bool_Exp>;
};

export type CommunityVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type CommunityVideosQuery = { __typename?: 'query_root', Videos: Array<{ __typename?: 'Videos', id: number, src: string, transcript?: string | null, name: string }> };


export const CommunityVideosDocument = gql`
    query communityVideos {
  Videos(order_by: {id: desc}) {
    id
    name: author
    src
    transcript
  }
}
    `;

/**
 * __useCommunityVideosQuery__
 *
 * To run a query within a React component, call `useCommunityVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityVideosQuery({
 *   variables: {
 *   },
 * });
 */
export function useCommunityVideosQuery(baseOptions?: Apollo.QueryHookOptions<CommunityVideosQuery, CommunityVideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommunityVideosQuery, CommunityVideosQueryVariables>(CommunityVideosDocument, options);
      }
export function useCommunityVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommunityVideosQuery, CommunityVideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommunityVideosQuery, CommunityVideosQueryVariables>(CommunityVideosDocument, options);
        }
export type CommunityVideosQueryHookResult = ReturnType<typeof useCommunityVideosQuery>;
export type CommunityVideosLazyQueryHookResult = ReturnType<typeof useCommunityVideosLazyQuery>;
export type CommunityVideosQueryResult = Apollo.QueryResult<CommunityVideosQuery, CommunityVideosQueryVariables>;