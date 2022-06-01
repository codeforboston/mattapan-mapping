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
  _float4: any;
  alignment: any;
  animation: any;
  bpchar: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
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

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<Scalars['Float']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<Scalars['Float']>>;
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
  /** An array relationship */
  chapters: Array<Chapter>;
  /** An aggregate relationship */
  chapters_aggregate: Chapter_Aggregate;
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
export type NarrativesChaptersArgs = {
  distinct_on?: InputMaybe<Array<Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chapter_Order_By>>;
  where?: InputMaybe<Chapter_Bool_Exp>;
};


/** columns and relationships of "Narratives" */
export type NarrativesChapters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chapter_Order_By>>;
  where?: InputMaybe<Chapter_Bool_Exp>;
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
  chapters?: InputMaybe<Chapter_Bool_Exp>;
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
  chapters_aggregate?: InputMaybe<Chapter_Aggregate_Order_By>;
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
  /** Required `id` for `react-admin` app */
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

/** Boolean expression to compare columns of type "_float4". All fields are combined with logical 'AND'. */
export type _Float4_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_float4']>;
  _gt?: InputMaybe<Scalars['_float4']>;
  _gte?: InputMaybe<Scalars['_float4']>;
  _in?: InputMaybe<Array<Scalars['_float4']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_float4']>;
  _lte?: InputMaybe<Scalars['_float4']>;
  _neq?: InputMaybe<Scalars['_float4']>;
  _nin?: InputMaybe<Array<Scalars['_float4']>>;
};

/** Boolean expression to compare columns of type "alignment". All fields are combined with logical 'AND'. */
export type Alignment_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['alignment']>;
  _gt?: InputMaybe<Scalars['alignment']>;
  _gte?: InputMaybe<Scalars['alignment']>;
  _in?: InputMaybe<Array<Scalars['alignment']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['alignment']>;
  _lte?: InputMaybe<Scalars['alignment']>;
  _neq?: InputMaybe<Scalars['alignment']>;
  _nin?: InputMaybe<Array<Scalars['alignment']>>;
};

/** Boolean expression to compare columns of type "animation". All fields are combined with logical 'AND'. */
export type Animation_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['animation']>;
  _gt?: InputMaybe<Scalars['animation']>;
  _gte?: InputMaybe<Scalars['animation']>;
  _in?: InputMaybe<Array<Scalars['animation']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['animation']>;
  _lte?: InputMaybe<Scalars['animation']>;
  _neq?: InputMaybe<Scalars['animation']>;
  _nin?: InputMaybe<Array<Scalars['animation']>>;
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

/** columns and relationships of "chapter" */
export type Chapter = {
  __typename?: 'chapter';
  alignment: Scalars['alignment'];
  callback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  /** An object relationship */
  location: Location;
  location_id: Scalars['Int'];
  mapAnimation?: Maybe<Scalars['animation']>;
  name: Scalars['String'];
  narrative_chapter_index?: Maybe<Scalars['Int']>;
  narrative_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  onChapterEnter: Array<Transition>;
  /** An array relationship */
  onChapterExit: Array<Transition>;
  rotateAnimation: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
};


/** columns and relationships of "chapter" */
export type ChapterOnChapterEnterArgs = {
  distinct_on?: InputMaybe<Array<Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transition_Order_By>>;
  where?: InputMaybe<Transition_Bool_Exp>;
};


/** columns and relationships of "chapter" */
export type ChapterOnChapterExitArgs = {
  distinct_on?: InputMaybe<Array<Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transition_Order_By>>;
  where?: InputMaybe<Transition_Bool_Exp>;
};

/** aggregated selection of "chapter" */
export type Chapter_Aggregate = {
  __typename?: 'chapter_aggregate';
  aggregate?: Maybe<Chapter_Aggregate_Fields>;
  nodes: Array<Chapter>;
};

/** aggregate fields of "chapter" */
export type Chapter_Aggregate_Fields = {
  __typename?: 'chapter_aggregate_fields';
  avg?: Maybe<Chapter_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Chapter_Max_Fields>;
  min?: Maybe<Chapter_Min_Fields>;
  stddev?: Maybe<Chapter_Stddev_Fields>;
  stddev_pop?: Maybe<Chapter_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chapter_Stddev_Samp_Fields>;
  sum?: Maybe<Chapter_Sum_Fields>;
  var_pop?: Maybe<Chapter_Var_Pop_Fields>;
  var_samp?: Maybe<Chapter_Var_Samp_Fields>;
  variance?: Maybe<Chapter_Variance_Fields>;
};


/** aggregate fields of "chapter" */
export type Chapter_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chapter_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chapter" */
export type Chapter_Aggregate_Order_By = {
  avg?: InputMaybe<Chapter_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chapter_Max_Order_By>;
  min?: InputMaybe<Chapter_Min_Order_By>;
  stddev?: InputMaybe<Chapter_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Chapter_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Chapter_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Chapter_Sum_Order_By>;
  var_pop?: InputMaybe<Chapter_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Chapter_Var_Samp_Order_By>;
  variance?: InputMaybe<Chapter_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Chapter_Avg_Fields = {
  __typename?: 'chapter_avg_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  narrative_chapter_index?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chapter" */
export type Chapter_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  narrative_chapter_index?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chapter". All fields are combined with a logical 'AND'. */
export type Chapter_Bool_Exp = {
  _and?: InputMaybe<Array<Chapter_Bool_Exp>>;
  _not?: InputMaybe<Chapter_Bool_Exp>;
  _or?: InputMaybe<Array<Chapter_Bool_Exp>>;
  alignment?: InputMaybe<Alignment_Comparison_Exp>;
  callback?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  hidden?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<Location_Bool_Exp>;
  location_id?: InputMaybe<Int_Comparison_Exp>;
  mapAnimation?: InputMaybe<Animation_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  narrative_chapter_index?: InputMaybe<Int_Comparison_Exp>;
  narrative_id?: InputMaybe<Int_Comparison_Exp>;
  onChapterEnter?: InputMaybe<Transition_Bool_Exp>;
  onChapterExit?: InputMaybe<Transition_Bool_Exp>;
  rotateAnimation?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "chapter" */
export type Chapter_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  location_id?: InputMaybe<Scalars['Int']>;
  narrative_chapter_index?: InputMaybe<Scalars['Int']>;
  narrative_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Chapter_Max_Fields = {
  __typename?: 'chapter_max_fields';
  alignment?: Maybe<Scalars['alignment']>;
  callback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['Int']>;
  mapAnimation?: Maybe<Scalars['animation']>;
  name?: Maybe<Scalars['String']>;
  narrative_chapter_index?: Maybe<Scalars['Int']>;
  narrative_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "chapter" */
export type Chapter_Max_Order_By = {
  alignment?: InputMaybe<Order_By>;
  callback?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  mapAnimation?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  narrative_chapter_index?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chapter_Min_Fields = {
  __typename?: 'chapter_min_fields';
  alignment?: Maybe<Scalars['alignment']>;
  callback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['Int']>;
  mapAnimation?: Maybe<Scalars['animation']>;
  name?: Maybe<Scalars['String']>;
  narrative_chapter_index?: Maybe<Scalars['Int']>;
  narrative_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "chapter" */
export type Chapter_Min_Order_By = {
  alignment?: InputMaybe<Order_By>;
  callback?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  mapAnimation?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  narrative_chapter_index?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chapter" */
export type Chapter_Mutation_Response = {
  __typename?: 'chapter_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chapter>;
};

/** Ordering options when selecting data from "chapter". */
export type Chapter_Order_By = {
  alignment?: InputMaybe<Order_By>;
  callback?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hidden?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  location?: InputMaybe<Location_Order_By>;
  location_id?: InputMaybe<Order_By>;
  mapAnimation?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  narrative_chapter_index?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
  onChapterEnter_aggregate?: InputMaybe<Transition_Aggregate_Order_By>;
  onChapterExit_aggregate?: InputMaybe<Transition_Aggregate_Order_By>;
  rotateAnimation?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chapter */
export type Chapter_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "chapter" */
export enum Chapter_Select_Column {
  /** column name */
  Alignment = 'alignment',
  /** column name */
  Callback = 'callback',
  /** column name */
  Description = 'description',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  MapAnimation = 'mapAnimation',
  /** column name */
  Name = 'name',
  /** column name */
  NarrativeChapterIndex = 'narrative_chapter_index',
  /** column name */
  NarrativeId = 'narrative_id',
  /** column name */
  RotateAnimation = 'rotateAnimation',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "chapter" */
export type Chapter_Set_Input = {
  alignment?: InputMaybe<Scalars['alignment']>;
  callback?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hidden?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  location_id?: InputMaybe<Scalars['Int']>;
  mapAnimation?: InputMaybe<Scalars['animation']>;
  name?: InputMaybe<Scalars['String']>;
  narrative_chapter_index?: InputMaybe<Scalars['Int']>;
  narrative_id?: InputMaybe<Scalars['Int']>;
  rotateAnimation?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Chapter_Stddev_Fields = {
  __typename?: 'chapter_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  narrative_chapter_index?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chapter" */
export type Chapter_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  narrative_chapter_index?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chapter_Stddev_Pop_Fields = {
  __typename?: 'chapter_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  narrative_chapter_index?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chapter" */
export type Chapter_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  narrative_chapter_index?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chapter_Stddev_Samp_Fields = {
  __typename?: 'chapter_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  narrative_chapter_index?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chapter" */
export type Chapter_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  narrative_chapter_index?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Chapter_Sum_Fields = {
  __typename?: 'chapter_sum_fields';
  id?: Maybe<Scalars['Int']>;
  location_id?: Maybe<Scalars['Int']>;
  narrative_chapter_index?: Maybe<Scalars['Int']>;
  narrative_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chapter" */
export type Chapter_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  narrative_chapter_index?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Chapter_Var_Pop_Fields = {
  __typename?: 'chapter_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  narrative_chapter_index?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chapter" */
export type Chapter_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  narrative_chapter_index?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chapter_Var_Samp_Fields = {
  __typename?: 'chapter_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  narrative_chapter_index?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chapter" */
export type Chapter_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  narrative_chapter_index?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Chapter_Variance_Fields = {
  __typename?: 'chapter_variance_fields';
  id?: Maybe<Scalars['Float']>;
  location_id?: Maybe<Scalars['Float']>;
  narrative_chapter_index?: Maybe<Scalars['Float']>;
  narrative_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chapter" */
export type Chapter_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  narrative_chapter_index?: InputMaybe<Order_By>;
  narrative_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "location" */
export type Location = {
  __typename?: 'location';
  bearing: Scalars['Float'];
  center?: Maybe<Scalars['_float4']>;
  /** An object relationship */
  chapter?: Maybe<Chapter>;
  curve?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  max_duration?: Maybe<Scalars['Int']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch: Scalars['Float'];
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom: Scalars['Float'];
};

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
  _and?: InputMaybe<Array<Location_Bool_Exp>>;
  _not?: InputMaybe<Location_Bool_Exp>;
  _or?: InputMaybe<Array<Location_Bool_Exp>>;
  bearing?: InputMaybe<Float_Comparison_Exp>;
  center?: InputMaybe<_Float4_Comparison_Exp>;
  chapter?: InputMaybe<Chapter_Bool_Exp>;
  curve?: InputMaybe<Float_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  max_duration?: InputMaybe<Int_Comparison_Exp>;
  min_zoom?: InputMaybe<Float_Comparison_Exp>;
  pitch?: InputMaybe<Float_Comparison_Exp>;
  screen_speed?: InputMaybe<Float_Comparison_Exp>;
  speed?: InputMaybe<Float_Comparison_Exp>;
  zoom?: InputMaybe<Float_Comparison_Exp>;
};

/** Ordering options when selecting data from "location". */
export type Location_Order_By = {
  bearing?: InputMaybe<Order_By>;
  center?: InputMaybe<Order_By>;
  chapter?: InputMaybe<Chapter_Order_By>;
  curve?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_duration?: InputMaybe<Order_By>;
  min_zoom?: InputMaybe<Order_By>;
  pitch?: InputMaybe<Order_By>;
  screen_speed?: InputMaybe<Order_By>;
  speed?: InputMaybe<Order_By>;
  zoom?: InputMaybe<Order_By>;
};

/** select columns of table "location" */
export enum Location_Select_Column {
  /** column name */
  Bearing = 'bearing',
  /** column name */
  Center = 'center',
  /** column name */
  Curve = 'curve',
  /** column name */
  Id = 'id',
  /** column name */
  MaxDuration = 'max_duration',
  /** column name */
  MinZoom = 'min_zoom',
  /** column name */
  Pitch = 'pitch',
  /** column name */
  ScreenSpeed = 'screen_speed',
  /** column name */
  Speed = 'speed',
  /** column name */
  Zoom = 'zoom'
}

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
  /** update data of the table: "chapter" */
  update_chapter?: Maybe<Chapter_Mutation_Response>;
  /** update single row of the table: "chapter" */
  update_chapter_by_pk?: Maybe<Chapter>;
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


/** mutation root */
export type Mutation_RootUpdate_ChapterArgs = {
  _inc?: InputMaybe<Chapter_Inc_Input>;
  _set?: InputMaybe<Chapter_Set_Input>;
  where: Chapter_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chapter_By_PkArgs = {
  _inc?: InputMaybe<Chapter_Inc_Input>;
  _set?: InputMaybe<Chapter_Set_Input>;
  pk_columns: Chapter_Pk_Columns_Input;
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
  /** fetch data from the table: "chapter" */
  chapter: Array<Chapter>;
  /** fetch aggregated fields from the table: "chapter" */
  chapter_aggregate: Chapter_Aggregate;
  /** fetch data from the table: "chapter" using primary key columns */
  chapter_by_pk?: Maybe<Chapter>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "narrative_boundary_view" */
  narrative_boundary_view: Array<Narrative_Boundary_View>;
  /** fetch aggregated fields from the table: "narrative_boundary_view" */
  narrative_boundary_view_aggregate: Narrative_Boundary_View_Aggregate;
  /** fetch data from the table: "storytelling.chapter" */
  storytelling_chapter: Array<Storytelling_Chapter>;
  /** fetch aggregated fields from the table: "storytelling.chapter" */
  storytelling_chapter_aggregate: Storytelling_Chapter_Aggregate;
  /** fetch data from the table: "storytelling.chapter" using primary key columns */
  storytelling_chapter_by_pk?: Maybe<Storytelling_Chapter>;
  /** fetch data from the table: "storytelling.location" */
  storytelling_location: Array<Storytelling_Location>;
  /** fetch aggregated fields from the table: "storytelling.location" */
  storytelling_location_aggregate: Storytelling_Location_Aggregate;
  /** fetch data from the table: "storytelling.transition" */
  storytelling_transition: Array<Storytelling_Transition>;
  /** fetch aggregated fields from the table: "storytelling.transition" */
  storytelling_transition_aggregate: Storytelling_Transition_Aggregate;
  /** fetch data from the table: "transition" */
  transition: Array<Transition>;
  /** fetch data from the table: "transition" using primary key columns */
  transition_by_pk?: Maybe<Transition>;
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


export type Query_RootChapterArgs = {
  distinct_on?: InputMaybe<Array<Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chapter_Order_By>>;
  where?: InputMaybe<Chapter_Bool_Exp>;
};


export type Query_RootChapter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chapter_Order_By>>;
  where?: InputMaybe<Chapter_Bool_Exp>;
};


export type Query_RootChapter_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_By_PkArgs = {
  id: Scalars['Int'];
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


export type Query_RootStorytelling_ChapterArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Chapter_Order_By>>;
  where?: InputMaybe<Storytelling_Chapter_Bool_Exp>;
};


export type Query_RootStorytelling_Chapter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Chapter_Order_By>>;
  where?: InputMaybe<Storytelling_Chapter_Bool_Exp>;
};


export type Query_RootStorytelling_Chapter_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStorytelling_LocationArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Location_Order_By>>;
  where?: InputMaybe<Storytelling_Location_Bool_Exp>;
};


export type Query_RootStorytelling_Location_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Location_Order_By>>;
  where?: InputMaybe<Storytelling_Location_Bool_Exp>;
};


export type Query_RootStorytelling_TransitionArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Transition_Order_By>>;
  where?: InputMaybe<Storytelling_Transition_Bool_Exp>;
};


export type Query_RootStorytelling_Transition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Transition_Order_By>>;
  where?: InputMaybe<Storytelling_Transition_Bool_Exp>;
};


export type Query_RootTransitionArgs = {
  distinct_on?: InputMaybe<Array<Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transition_Order_By>>;
  where?: InputMaybe<Transition_Bool_Exp>;
};


export type Query_RootTransition_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "storytelling.chapter" */
export type Storytelling_Chapter = {
  __typename?: 'storytelling_chapter';
  alignment: Scalars['alignment'];
  callback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  /** An object relationship */
  location: Storytelling_Location;
  mapAnimation?: Maybe<Scalars['animation']>;
  name: Scalars['String'];
  /** An array relationship */
  onChapterEnter: Array<Storytelling_Transition>;
  /** An aggregate relationship */
  onChapterEnter_aggregate: Storytelling_Transition_Aggregate;
  /** An array relationship */
  onChapterExit: Array<Storytelling_Transition>;
  /** An aggregate relationship */
  onChapterExit_aggregate: Storytelling_Transition_Aggregate;
  rotateAnimation: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
};


/** columns and relationships of "storytelling.chapter" */
export type Storytelling_ChapterOnChapterEnterArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Transition_Order_By>>;
  where?: InputMaybe<Storytelling_Transition_Bool_Exp>;
};


/** columns and relationships of "storytelling.chapter" */
export type Storytelling_ChapterOnChapterEnter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Transition_Order_By>>;
  where?: InputMaybe<Storytelling_Transition_Bool_Exp>;
};


/** columns and relationships of "storytelling.chapter" */
export type Storytelling_ChapterOnChapterExitArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Transition_Order_By>>;
  where?: InputMaybe<Storytelling_Transition_Bool_Exp>;
};


/** columns and relationships of "storytelling.chapter" */
export type Storytelling_ChapterOnChapterExit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Transition_Order_By>>;
  where?: InputMaybe<Storytelling_Transition_Bool_Exp>;
};

/** aggregated selection of "storytelling.chapter" */
export type Storytelling_Chapter_Aggregate = {
  __typename?: 'storytelling_chapter_aggregate';
  aggregate?: Maybe<Storytelling_Chapter_Aggregate_Fields>;
  nodes: Array<Storytelling_Chapter>;
};

/** aggregate fields of "storytelling.chapter" */
export type Storytelling_Chapter_Aggregate_Fields = {
  __typename?: 'storytelling_chapter_aggregate_fields';
  avg?: Maybe<Storytelling_Chapter_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Storytelling_Chapter_Max_Fields>;
  min?: Maybe<Storytelling_Chapter_Min_Fields>;
  stddev?: Maybe<Storytelling_Chapter_Stddev_Fields>;
  stddev_pop?: Maybe<Storytelling_Chapter_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Storytelling_Chapter_Stddev_Samp_Fields>;
  sum?: Maybe<Storytelling_Chapter_Sum_Fields>;
  var_pop?: Maybe<Storytelling_Chapter_Var_Pop_Fields>;
  var_samp?: Maybe<Storytelling_Chapter_Var_Samp_Fields>;
  variance?: Maybe<Storytelling_Chapter_Variance_Fields>;
};


/** aggregate fields of "storytelling.chapter" */
export type Storytelling_Chapter_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Storytelling_Chapter_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Storytelling_Chapter_Avg_Fields = {
  __typename?: 'storytelling_chapter_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storytelling.chapter". All fields are combined with a logical 'AND'. */
export type Storytelling_Chapter_Bool_Exp = {
  _and?: InputMaybe<Array<Storytelling_Chapter_Bool_Exp>>;
  _not?: InputMaybe<Storytelling_Chapter_Bool_Exp>;
  _or?: InputMaybe<Array<Storytelling_Chapter_Bool_Exp>>;
  alignment?: InputMaybe<Alignment_Comparison_Exp>;
  callback?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  hidden?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<Storytelling_Location_Bool_Exp>;
  mapAnimation?: InputMaybe<Animation_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  onChapterEnter?: InputMaybe<Storytelling_Transition_Bool_Exp>;
  onChapterExit?: InputMaybe<Storytelling_Transition_Bool_Exp>;
  rotateAnimation?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Storytelling_Chapter_Max_Fields = {
  __typename?: 'storytelling_chapter_max_fields';
  alignment?: Maybe<Scalars['alignment']>;
  callback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  mapAnimation?: Maybe<Scalars['animation']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Storytelling_Chapter_Min_Fields = {
  __typename?: 'storytelling_chapter_min_fields';
  alignment?: Maybe<Scalars['alignment']>;
  callback?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  mapAnimation?: Maybe<Scalars['animation']>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "storytelling.chapter". */
export type Storytelling_Chapter_Order_By = {
  alignment?: InputMaybe<Order_By>;
  callback?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hidden?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  location?: InputMaybe<Storytelling_Location_Order_By>;
  mapAnimation?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  onChapterEnter_aggregate?: InputMaybe<Storytelling_Transition_Aggregate_Order_By>;
  onChapterExit_aggregate?: InputMaybe<Storytelling_Transition_Aggregate_Order_By>;
  rotateAnimation?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** select columns of table "storytelling.chapter" */
export enum Storytelling_Chapter_Select_Column {
  /** column name */
  Alignment = 'alignment',
  /** column name */
  Callback = 'callback',
  /** column name */
  Description = 'description',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  MapAnimation = 'mapAnimation',
  /** column name */
  Name = 'name',
  /** column name */
  RotateAnimation = 'rotateAnimation',
  /** column name */
  Title = 'title'
}

/** aggregate stddev on columns */
export type Storytelling_Chapter_Stddev_Fields = {
  __typename?: 'storytelling_chapter_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Storytelling_Chapter_Stddev_Pop_Fields = {
  __typename?: 'storytelling_chapter_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Storytelling_Chapter_Stddev_Samp_Fields = {
  __typename?: 'storytelling_chapter_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Storytelling_Chapter_Sum_Fields = {
  __typename?: 'storytelling_chapter_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Storytelling_Chapter_Var_Pop_Fields = {
  __typename?: 'storytelling_chapter_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Storytelling_Chapter_Var_Samp_Fields = {
  __typename?: 'storytelling_chapter_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Storytelling_Chapter_Variance_Fields = {
  __typename?: 'storytelling_chapter_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "storytelling.location" */
export type Storytelling_Location = {
  __typename?: 'storytelling_location';
  bearing: Scalars['Float'];
  center?: Maybe<Scalars['_float4']>;
  curve?: Maybe<Scalars['Float']>;
  max_duration?: Maybe<Scalars['Int']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch: Scalars['Float'];
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom: Scalars['Float'];
};

/** aggregated selection of "storytelling.location" */
export type Storytelling_Location_Aggregate = {
  __typename?: 'storytelling_location_aggregate';
  aggregate?: Maybe<Storytelling_Location_Aggregate_Fields>;
  nodes: Array<Storytelling_Location>;
};

/** aggregate fields of "storytelling.location" */
export type Storytelling_Location_Aggregate_Fields = {
  __typename?: 'storytelling_location_aggregate_fields';
  avg?: Maybe<Storytelling_Location_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Storytelling_Location_Max_Fields>;
  min?: Maybe<Storytelling_Location_Min_Fields>;
  stddev?: Maybe<Storytelling_Location_Stddev_Fields>;
  stddev_pop?: Maybe<Storytelling_Location_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Storytelling_Location_Stddev_Samp_Fields>;
  sum?: Maybe<Storytelling_Location_Sum_Fields>;
  var_pop?: Maybe<Storytelling_Location_Var_Pop_Fields>;
  var_samp?: Maybe<Storytelling_Location_Var_Samp_Fields>;
  variance?: Maybe<Storytelling_Location_Variance_Fields>;
};


/** aggregate fields of "storytelling.location" */
export type Storytelling_Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Storytelling_Location_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Storytelling_Location_Avg_Fields = {
  __typename?: 'storytelling_location_avg_fields';
  bearing?: Maybe<Scalars['Float']>;
  curve?: Maybe<Scalars['Float']>;
  max_duration?: Maybe<Scalars['Float']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storytelling.location". All fields are combined with a logical 'AND'. */
export type Storytelling_Location_Bool_Exp = {
  _and?: InputMaybe<Array<Storytelling_Location_Bool_Exp>>;
  _not?: InputMaybe<Storytelling_Location_Bool_Exp>;
  _or?: InputMaybe<Array<Storytelling_Location_Bool_Exp>>;
  bearing?: InputMaybe<Float_Comparison_Exp>;
  center?: InputMaybe<_Float4_Comparison_Exp>;
  curve?: InputMaybe<Float_Comparison_Exp>;
  max_duration?: InputMaybe<Int_Comparison_Exp>;
  min_zoom?: InputMaybe<Float_Comparison_Exp>;
  pitch?: InputMaybe<Float_Comparison_Exp>;
  screen_speed?: InputMaybe<Float_Comparison_Exp>;
  speed?: InputMaybe<Float_Comparison_Exp>;
  zoom?: InputMaybe<Float_Comparison_Exp>;
};

/** aggregate max on columns */
export type Storytelling_Location_Max_Fields = {
  __typename?: 'storytelling_location_max_fields';
  bearing?: Maybe<Scalars['Float']>;
  curve?: Maybe<Scalars['Float']>;
  max_duration?: Maybe<Scalars['Int']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};

/** aggregate min on columns */
export type Storytelling_Location_Min_Fields = {
  __typename?: 'storytelling_location_min_fields';
  bearing?: Maybe<Scalars['Float']>;
  curve?: Maybe<Scalars['Float']>;
  max_duration?: Maybe<Scalars['Int']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};

/** Ordering options when selecting data from "storytelling.location". */
export type Storytelling_Location_Order_By = {
  bearing?: InputMaybe<Order_By>;
  center?: InputMaybe<Order_By>;
  curve?: InputMaybe<Order_By>;
  max_duration?: InputMaybe<Order_By>;
  min_zoom?: InputMaybe<Order_By>;
  pitch?: InputMaybe<Order_By>;
  screen_speed?: InputMaybe<Order_By>;
  speed?: InputMaybe<Order_By>;
  zoom?: InputMaybe<Order_By>;
};

/** select columns of table "storytelling.location" */
export enum Storytelling_Location_Select_Column {
  /** column name */
  Bearing = 'bearing',
  /** column name */
  Center = 'center',
  /** column name */
  Curve = 'curve',
  /** column name */
  MaxDuration = 'max_duration',
  /** column name */
  MinZoom = 'min_zoom',
  /** column name */
  Pitch = 'pitch',
  /** column name */
  ScreenSpeed = 'screen_speed',
  /** column name */
  Speed = 'speed',
  /** column name */
  Zoom = 'zoom'
}

/** aggregate stddev on columns */
export type Storytelling_Location_Stddev_Fields = {
  __typename?: 'storytelling_location_stddev_fields';
  bearing?: Maybe<Scalars['Float']>;
  curve?: Maybe<Scalars['Float']>;
  max_duration?: Maybe<Scalars['Float']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Storytelling_Location_Stddev_Pop_Fields = {
  __typename?: 'storytelling_location_stddev_pop_fields';
  bearing?: Maybe<Scalars['Float']>;
  curve?: Maybe<Scalars['Float']>;
  max_duration?: Maybe<Scalars['Float']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Storytelling_Location_Stddev_Samp_Fields = {
  __typename?: 'storytelling_location_stddev_samp_fields';
  bearing?: Maybe<Scalars['Float']>;
  curve?: Maybe<Scalars['Float']>;
  max_duration?: Maybe<Scalars['Float']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Storytelling_Location_Sum_Fields = {
  __typename?: 'storytelling_location_sum_fields';
  bearing?: Maybe<Scalars['Float']>;
  curve?: Maybe<Scalars['Float']>;
  max_duration?: Maybe<Scalars['Int']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};

/** aggregate var_pop on columns */
export type Storytelling_Location_Var_Pop_Fields = {
  __typename?: 'storytelling_location_var_pop_fields';
  bearing?: Maybe<Scalars['Float']>;
  curve?: Maybe<Scalars['Float']>;
  max_duration?: Maybe<Scalars['Float']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Storytelling_Location_Var_Samp_Fields = {
  __typename?: 'storytelling_location_var_samp_fields';
  bearing?: Maybe<Scalars['Float']>;
  curve?: Maybe<Scalars['Float']>;
  max_duration?: Maybe<Scalars['Float']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Storytelling_Location_Variance_Fields = {
  __typename?: 'storytelling_location_variance_fields';
  bearing?: Maybe<Scalars['Float']>;
  curve?: Maybe<Scalars['Float']>;
  max_duration?: Maybe<Scalars['Float']>;
  min_zoom?: Maybe<Scalars['Float']>;
  pitch?: Maybe<Scalars['Float']>;
  screen_speed?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "storytelling.transition" */
export type Storytelling_Transition = {
  __typename?: 'storytelling_transition';
  duration?: Maybe<Scalars['Int']>;
  layer: Scalars['String'];
  opacity: Scalars['Float'];
};

/** aggregated selection of "storytelling.transition" */
export type Storytelling_Transition_Aggregate = {
  __typename?: 'storytelling_transition_aggregate';
  aggregate?: Maybe<Storytelling_Transition_Aggregate_Fields>;
  nodes: Array<Storytelling_Transition>;
};

/** aggregate fields of "storytelling.transition" */
export type Storytelling_Transition_Aggregate_Fields = {
  __typename?: 'storytelling_transition_aggregate_fields';
  avg?: Maybe<Storytelling_Transition_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Storytelling_Transition_Max_Fields>;
  min?: Maybe<Storytelling_Transition_Min_Fields>;
  stddev?: Maybe<Storytelling_Transition_Stddev_Fields>;
  stddev_pop?: Maybe<Storytelling_Transition_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Storytelling_Transition_Stddev_Samp_Fields>;
  sum?: Maybe<Storytelling_Transition_Sum_Fields>;
  var_pop?: Maybe<Storytelling_Transition_Var_Pop_Fields>;
  var_samp?: Maybe<Storytelling_Transition_Var_Samp_Fields>;
  variance?: Maybe<Storytelling_Transition_Variance_Fields>;
};


/** aggregate fields of "storytelling.transition" */
export type Storytelling_Transition_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Storytelling_Transition_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storytelling.transition" */
export type Storytelling_Transition_Aggregate_Order_By = {
  avg?: InputMaybe<Storytelling_Transition_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Storytelling_Transition_Max_Order_By>;
  min?: InputMaybe<Storytelling_Transition_Min_Order_By>;
  stddev?: InputMaybe<Storytelling_Transition_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Storytelling_Transition_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Storytelling_Transition_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Storytelling_Transition_Sum_Order_By>;
  var_pop?: InputMaybe<Storytelling_Transition_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Storytelling_Transition_Var_Samp_Order_By>;
  variance?: InputMaybe<Storytelling_Transition_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Storytelling_Transition_Avg_Fields = {
  __typename?: 'storytelling_transition_avg_fields';
  duration?: Maybe<Scalars['Float']>;
  opacity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storytelling.transition" */
export type Storytelling_Transition_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storytelling.transition". All fields are combined with a logical 'AND'. */
export type Storytelling_Transition_Bool_Exp = {
  _and?: InputMaybe<Array<Storytelling_Transition_Bool_Exp>>;
  _not?: InputMaybe<Storytelling_Transition_Bool_Exp>;
  _or?: InputMaybe<Array<Storytelling_Transition_Bool_Exp>>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  layer?: InputMaybe<String_Comparison_Exp>;
  opacity?: InputMaybe<Float_Comparison_Exp>;
};

/** aggregate max on columns */
export type Storytelling_Transition_Max_Fields = {
  __typename?: 'storytelling_transition_max_fields';
  duration?: Maybe<Scalars['Int']>;
  layer?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['Float']>;
};

/** order by max() on columns of table "storytelling.transition" */
export type Storytelling_Transition_Max_Order_By = {
  duration?: InputMaybe<Order_By>;
  layer?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Storytelling_Transition_Min_Fields = {
  __typename?: 'storytelling_transition_min_fields';
  duration?: Maybe<Scalars['Int']>;
  layer?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['Float']>;
};

/** order by min() on columns of table "storytelling.transition" */
export type Storytelling_Transition_Min_Order_By = {
  duration?: InputMaybe<Order_By>;
  layer?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "storytelling.transition". */
export type Storytelling_Transition_Order_By = {
  duration?: InputMaybe<Order_By>;
  layer?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** select columns of table "storytelling.transition" */
export enum Storytelling_Transition_Select_Column {
  /** column name */
  Duration = 'duration',
  /** column name */
  Layer = 'layer',
  /** column name */
  Opacity = 'opacity'
}

/** aggregate stddev on columns */
export type Storytelling_Transition_Stddev_Fields = {
  __typename?: 'storytelling_transition_stddev_fields';
  duration?: Maybe<Scalars['Float']>;
  opacity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storytelling.transition" */
export type Storytelling_Transition_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Storytelling_Transition_Stddev_Pop_Fields = {
  __typename?: 'storytelling_transition_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  opacity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storytelling.transition" */
export type Storytelling_Transition_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Storytelling_Transition_Stddev_Samp_Fields = {
  __typename?: 'storytelling_transition_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  opacity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storytelling.transition" */
export type Storytelling_Transition_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Storytelling_Transition_Sum_Fields = {
  __typename?: 'storytelling_transition_sum_fields';
  duration?: Maybe<Scalars['Int']>;
  opacity?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "storytelling.transition" */
export type Storytelling_Transition_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Storytelling_Transition_Var_Pop_Fields = {
  __typename?: 'storytelling_transition_var_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  opacity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storytelling.transition" */
export type Storytelling_Transition_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Storytelling_Transition_Var_Samp_Fields = {
  __typename?: 'storytelling_transition_var_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  opacity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storytelling.transition" */
export type Storytelling_Transition_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Storytelling_Transition_Variance_Fields = {
  __typename?: 'storytelling_transition_variance_fields';
  duration?: Maybe<Scalars['Float']>;
  opacity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storytelling.transition" */
export type Storytelling_Transition_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
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
  /** fetch data from the table: "chapter" */
  chapter: Array<Chapter>;
  /** fetch aggregated fields from the table: "chapter" */
  chapter_aggregate: Chapter_Aggregate;
  /** fetch data from the table: "chapter" using primary key columns */
  chapter_by_pk?: Maybe<Chapter>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "narrative_boundary_view" */
  narrative_boundary_view: Array<Narrative_Boundary_View>;
  /** fetch aggregated fields from the table: "narrative_boundary_view" */
  narrative_boundary_view_aggregate: Narrative_Boundary_View_Aggregate;
  /** fetch data from the table: "storytelling.chapter" */
  storytelling_chapter: Array<Storytelling_Chapter>;
  /** fetch aggregated fields from the table: "storytelling.chapter" */
  storytelling_chapter_aggregate: Storytelling_Chapter_Aggregate;
  /** fetch data from the table: "storytelling.chapter" using primary key columns */
  storytelling_chapter_by_pk?: Maybe<Storytelling_Chapter>;
  /** fetch data from the table: "storytelling.location" */
  storytelling_location: Array<Storytelling_Location>;
  /** fetch aggregated fields from the table: "storytelling.location" */
  storytelling_location_aggregate: Storytelling_Location_Aggregate;
  /** fetch data from the table: "storytelling.transition" */
  storytelling_transition: Array<Storytelling_Transition>;
  /** fetch aggregated fields from the table: "storytelling.transition" */
  storytelling_transition_aggregate: Storytelling_Transition_Aggregate;
  /** fetch data from the table: "transition" */
  transition: Array<Transition>;
  /** fetch data from the table: "transition" using primary key columns */
  transition_by_pk?: Maybe<Transition>;
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


export type Subscription_RootChapterArgs = {
  distinct_on?: InputMaybe<Array<Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chapter_Order_By>>;
  where?: InputMaybe<Chapter_Bool_Exp>;
};


export type Subscription_RootChapter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Chapter_Order_By>>;
  where?: InputMaybe<Chapter_Bool_Exp>;
};


export type Subscription_RootChapter_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_By_PkArgs = {
  id: Scalars['Int'];
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


export type Subscription_RootStorytelling_ChapterArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Chapter_Order_By>>;
  where?: InputMaybe<Storytelling_Chapter_Bool_Exp>;
};


export type Subscription_RootStorytelling_Chapter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Chapter_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Chapter_Order_By>>;
  where?: InputMaybe<Storytelling_Chapter_Bool_Exp>;
};


export type Subscription_RootStorytelling_Chapter_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStorytelling_LocationArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Location_Order_By>>;
  where?: InputMaybe<Storytelling_Location_Bool_Exp>;
};


export type Subscription_RootStorytelling_Location_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Location_Order_By>>;
  where?: InputMaybe<Storytelling_Location_Bool_Exp>;
};


export type Subscription_RootStorytelling_TransitionArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Transition_Order_By>>;
  where?: InputMaybe<Storytelling_Transition_Bool_Exp>;
};


export type Subscription_RootStorytelling_Transition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Storytelling_Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Storytelling_Transition_Order_By>>;
  where?: InputMaybe<Storytelling_Transition_Bool_Exp>;
};


export type Subscription_RootTransitionArgs = {
  distinct_on?: InputMaybe<Array<Transition_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transition_Order_By>>;
  where?: InputMaybe<Transition_Bool_Exp>;
};


export type Subscription_RootTransition_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "transition" */
export type Transition = {
  __typename?: 'transition';
  chapter_enter_id?: Maybe<Scalars['Int']>;
  chapter_exit_id?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  layer: Scalars['String'];
  opacity: Scalars['Float'];
};

/** order by aggregate values of table "transition" */
export type Transition_Aggregate_Order_By = {
  avg?: InputMaybe<Transition_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transition_Max_Order_By>;
  min?: InputMaybe<Transition_Min_Order_By>;
  stddev?: InputMaybe<Transition_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transition_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transition_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transition_Sum_Order_By>;
  var_pop?: InputMaybe<Transition_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transition_Var_Samp_Order_By>;
  variance?: InputMaybe<Transition_Variance_Order_By>;
};

/** order by avg() on columns of table "transition" */
export type Transition_Avg_Order_By = {
  chapter_enter_id?: InputMaybe<Order_By>;
  chapter_exit_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transition". All fields are combined with a logical 'AND'. */
export type Transition_Bool_Exp = {
  _and?: InputMaybe<Array<Transition_Bool_Exp>>;
  _not?: InputMaybe<Transition_Bool_Exp>;
  _or?: InputMaybe<Array<Transition_Bool_Exp>>;
  chapter_enter_id?: InputMaybe<Int_Comparison_Exp>;
  chapter_exit_id?: InputMaybe<Int_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  layer?: InputMaybe<String_Comparison_Exp>;
  opacity?: InputMaybe<Float_Comparison_Exp>;
};

/** order by max() on columns of table "transition" */
export type Transition_Max_Order_By = {
  chapter_enter_id?: InputMaybe<Order_By>;
  chapter_exit_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "transition" */
export type Transition_Min_Order_By = {
  chapter_enter_id?: InputMaybe<Order_By>;
  chapter_exit_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "transition". */
export type Transition_Order_By = {
  chapter_enter_id?: InputMaybe<Order_By>;
  chapter_exit_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  layer?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** select columns of table "transition" */
export enum Transition_Select_Column {
  /** column name */
  ChapterEnterId = 'chapter_enter_id',
  /** column name */
  ChapterExitId = 'chapter_exit_id',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  Layer = 'layer',
  /** column name */
  Opacity = 'opacity'
}

/** order by stddev() on columns of table "transition" */
export type Transition_Stddev_Order_By = {
  chapter_enter_id?: InputMaybe<Order_By>;
  chapter_exit_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "transition" */
export type Transition_Stddev_Pop_Order_By = {
  chapter_enter_id?: InputMaybe<Order_By>;
  chapter_exit_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "transition" */
export type Transition_Stddev_Samp_Order_By = {
  chapter_enter_id?: InputMaybe<Order_By>;
  chapter_exit_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** order by sum() on columns of table "transition" */
export type Transition_Sum_Order_By = {
  chapter_enter_id?: InputMaybe<Order_By>;
  chapter_exit_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "transition" */
export type Transition_Var_Pop_Order_By = {
  chapter_enter_id?: InputMaybe<Order_By>;
  chapter_exit_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "transition" */
export type Transition_Var_Samp_Order_By = {
  chapter_enter_id?: InputMaybe<Order_By>;
  chapter_exit_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "transition" */
export type Transition_Variance_Order_By = {
  chapter_enter_id?: InputMaybe<Order_By>;
  chapter_exit_id?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  opacity?: InputMaybe<Order_By>;
};

export type CommunityVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type CommunityVideosQuery = { __typename?: 'query_root', Videos: Array<{ __typename?: 'Videos', id: number, src: string, transcript?: string | null, name: string }> };

export type MapPageQueryVariables = Exact<{ [key: string]: never; }>;


export type MapPageQuery = { __typename?: 'query_root', Narratives: Array<{ __typename?: 'Narratives', id: number, name: any, color: any, boundaries: Array<{ __typename?: 'narrative_boundary_view', id?: number | null }> }>, Boundaries: Array<{ __typename?: 'Boundaries', id: number, name: string, color?: any | null, data: string }> };


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
export const MapPageDocument = gql`
    query mapPage {
  Narratives(order_by: {id: asc}) {
    id
    name
    color
    boundaries(order_by: {boundary_id: asc}) {
      id: boundary_id
    }
  }
  Boundaries {
    id
    name
    data: file
    color
  }
}
    `;

/**
 * __useMapPageQuery__
 *
 * To run a query within a React component, call `useMapPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMapPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMapPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useMapPageQuery(baseOptions?: Apollo.QueryHookOptions<MapPageQuery, MapPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MapPageQuery, MapPageQueryVariables>(MapPageDocument, options);
      }
export function useMapPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MapPageQuery, MapPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MapPageQuery, MapPageQueryVariables>(MapPageDocument, options);
        }
export type MapPageQueryHookResult = ReturnType<typeof useMapPageQuery>;
export type MapPageLazyQueryHookResult = ReturnType<typeof useMapPageLazyQuery>;
export type MapPageQueryResult = Apollo.QueryResult<MapPageQuery, MapPageQueryVariables>;