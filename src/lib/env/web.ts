import { createEnv } from '@t3-oss/env-core';

type ImportMetaEnvRecord = Record<string, string | boolean | undefined>;

export const env = createEnv({
  clientPrefix: 'PUBLIC_',
  client: {},
  runtimeEnv: (import.meta as ImportMeta & { env: ImportMetaEnvRecord }).env,
  emptyStringAsUndefined: true,
});
