# ipp5-types

~~~~~ sh
npm install e53e04ac/ipp5-types
~~~~~

~~~~~ mjs
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "devDependencies";
    B_0(["@types/node"]);
  end;
  A ----> B_0;
  click B_0 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-types";
  end;
  M(["index.mjs"])
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-types";
    E_0(["type Unreadonly<T>"]);
    E_1(["type Ipp5BackendApiEnvMap"]);
    E_2(["type Ipp5BackendBatchEnvMap"]);
    E_3(["type Ipp5BackendIdpEnvMap"]);
    E_4(["type Ipp5BackendStaticEnvMap"]);
    E_5(["type Ipp5SampleData<Value>"]);
    E_6(["type Ipp5MenuData"]);
    E_7(["type Ipp5YearlySummaryData"]);
    E_8(["type Ipp5MonthlySummaryData"]);
    E_9(["type Ipp5DailySummaryData"]);
  end;
  M(["index.d.ts"])
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
  E_3 ----> M;
  E_4 ----> M;
  E_5 ----> M;
  E_6 ----> M;
  E_7 ----> M;
  E_8 ----> M;
  E_9 ----> M;
~~~~~
