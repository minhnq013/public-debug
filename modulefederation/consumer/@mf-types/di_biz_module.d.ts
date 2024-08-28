import type React from 'react';
/* eslint-disable @typescript-eslint/naming-convention */
declare module "di_biz_module" {
  export const Test: React.ComponentType<any>;
  export const getModule: (input: {
    name: string;
  }) => () => Promise<{ default: React.ComponentType<any> }>;
}
