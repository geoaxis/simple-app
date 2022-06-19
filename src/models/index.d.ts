import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type QuoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Quote {
  readonly id: string;
  readonly quote: string;
  readonly attribution: string;
  readonly dateAdded?: string | null;
  readonly dateModified?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Quote, QuoteMetaData>);
  static copyOf(source: Quote, mutator: (draft: MutableModel<Quote, QuoteMetaData>) => MutableModel<Quote, QuoteMetaData> | void): Quote;
}