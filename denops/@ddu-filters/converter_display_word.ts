import {
  type DduItem,
  type SourceOptions,
} from "jsr:@shougo/ddu-vim@~6.1.0/types";
import {
  BaseFilter,
} from "jsr:@shougo/ddu-vim@~6.1.0/filter";

import type { Denops } from "jsr:@denops/core@~7.0.0";

type Params = Record<string, never>;

export class Filter extends BaseFilter<Params> {
  override filter(args: {
    denops: Denops;
    sourceOptions: SourceOptions;
    input: string;
    items: DduItem[];
  }): Promise<DduItem[]> {
    for (const item of args.items) {
      if (item.display) {
        item.matcherKey = item.display;
      }
    }
    return Promise.resolve(args.items);
  }

  override params(): Params {
    return {};
  }
}
