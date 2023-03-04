# ipp5-types

~~~~~ sh
npm install e53e04ac/ipp5-types
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "devDependencies";
    B_0(["@types/node"]);
  end;
  subgraph "npmjs";
    C_0(["@types/node\n18.14.6"]);
  end;
  A ----> B_0;
  B_0 ----> C_0;
  click C_0 "https://www.npmjs.com/package/@types/node/v/18.14.6";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-types";
    E_0(["type Unreadonly<T>"]);
    E_1(["type Ipp5BackendApiEnvMap"]);
    E_2(["type Ipp5BackendBatchEnvMap"]);
    E_3(["type Ipp5BackendIdpEnvMap"]);
    E_4(["type Ipp5BackendStaticEnvMap"]);
    E_5(["type Ipp5FrontendEnvMap"]);
    E_6(["type Ipp5SampleData<Value>"]);
    E_7(["type Ipp5MenuData"]);
    E_8(["type Ipp5YearlySummaryData"]);
    E_9(["type Ipp5MonthlySummaryData"]);
    E_10(["type Ipp5DailySummaryData"]);
  end;
  M["index.d.ts"]
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
  E_10 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  M["index.mjs"]
~~~~~
