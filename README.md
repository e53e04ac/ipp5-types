# ipp5-types

~~~~~ sh
npm install e53e04ac/ipp5-types
~~~~~

~~~~~ mjs
import { Unreadonly<T> } from 'e53e04ac/ipp5-types';
import { Ipp5BackendApiEnvMap } from 'e53e04ac/ipp5-types';
import { Ipp5BackendBatchEnvMap } from 'e53e04ac/ipp5-types';
import { Ipp5BackendIdpEnvMap } from 'e53e04ac/ipp5-types';
import { Ipp5BackendStaticEnvMap } from 'e53e04ac/ipp5-types';
import { Ipp5SampleData<Value> } from 'e53e04ac/ipp5-types';
import { Ipp5MenuData } from 'e53e04ac/ipp5-types';
import { Ipp5YearlySummaryData } from 'e53e04ac/ipp5-types';
import { Ipp5MonthlySummaryData } from 'e53e04ac/ipp5-types';
import { Ipp5DailySummaryData } from 'e53e04ac/ipp5-types';
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
    E_0(["Unreadonly<T>"]);
    E_1(["Ipp5BackendApiEnvMap"]);
    E_2(["Ipp5BackendBatchEnvMap"]);
    E_3(["Ipp5BackendIdpEnvMap"]);
    E_4(["Ipp5BackendStaticEnvMap"]);
    E_5(["Ipp5SampleData<Value>"]);
    E_6(["Ipp5MenuData"]);
    E_7(["Ipp5YearlySummaryData"]);
    E_8(["Ipp5MonthlySummaryData"]);
    E_9(["Ipp5DailySummaryData"]);
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
