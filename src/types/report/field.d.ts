interface QueryRequestCommonField {
  schemaName: SchemaName;
  name: string;
}

interface QueryRequestField extends QueryRequestCommonField {
  label: string;
  type: string; // TODO: maybe want convert to enum
}

interface QueryRequestDimension extends QueryRequestCommonField {
  option: DimensionOption | null;
  label: string;
}

interface QueryRequestMetric extends QueryRequestCommonField {
  aggregation: AggregationType;
  label: string;
}

interface QueryRequestFilter {
  operator: ComparisonOperator;
  option: DimensionOption | null;
  values: number[] | string[] | boolean[]
}

interface QueryRequestSort {
  type: SortType;
  aggregation: AggregationType | null;
  dimensionOption: DimensionOption | null;
}